from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
import json
import os
from datetime import datetime

app = FastAPI(title="Captain Hiba's CPL Meteorology Prep API")

# Database file path
DB_FILE = "stats_db.json"

# Initialize database file if it doesn't exist
if not os.path.exists(DB_FILE):
    with open(DB_FILE, "w", encoding="utf-8") as f:
        json.dump([], f)

# Load questions database into memory on startup
with open("static/questions.json", "r", encoding="utf-8") as f:
    questions_data = json.load(f)

def load_logs():
    try:
        if os.path.exists(DB_FILE):
            with open(DB_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
    except Exception as e:
        print(f"Error loading logs: {e}")
    return []

def save_logs(logs):
    try:
        with open(DB_FILE, "w", encoding="utf-8") as f:
            json.dump(logs, f, indent=2)
    except Exception as e:
        print(f"Error saving logs: {e}")

@app.get("/api/questions")
async def get_questions():
    """
    Returns the complete Meteorology question bank.
    """
    return questions_data

@app.post("/api/log")
async def log_attempt(request: Request):
    """
    Logs Hiba's question attempt (correct/wrong/skipped) with a timestamp.
    """
    payload = await request.json()
    logs = load_logs()
    
    # Append the new log entry
    log_entry = {
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "question_key": payload.get("question_key"),
        "chapter": payload.get("chapter"),
        "question": payload.get("question"),
        "status": payload.get("status") # 'correct', 'wrong', 'skipped'
    }
    logs.append(log_entry)
    save_logs(logs)
    return {"status": "success", "logged": log_entry}

@app.get("/api/analytics")
async def get_analytics():
    """
    Computes performance metrics and study patterns for Mentor Aadil's dashboard.
    """
    logs = load_logs()
    
    total = len(logs)
    correct = sum(1 for log in logs if log["status"] == "correct")
    wrong = sum(1 for log in logs if log["status"] == "wrong")
    skipped = sum(1 for log in logs if log["status"] == "skipped")
    
    # Calculate accuracy (excluding skips)
    evaluated = correct + wrong
    accuracy = round((correct / evaluated) * 100, 1) if evaluated > 0 else 0
    
    # Chapter-wise metrics
    chapter_stats = {}
    for log in logs:
        ch = log["chapter"]
        if ch not in chapter_stats:
            chapter_stats[ch] = {"total": 0, "correct": 0, "wrong": 0}
        
        chapter_stats[ch]["total"] += 1
        if log["status"] == "correct":
            chapter_stats[ch]["correct"] += 1
        elif log["status"] == "wrong":
            chapter_stats[ch]["wrong"] += 1

    chapter_summary = {}
    for ch, data in chapter_stats.items():
        ch_eval = data["correct"] + data["wrong"]
        ch_acc = round((data["correct"] / ch_eval) * 100, 1) if ch_eval > 0 else 0
        chapter_summary[ch] = {
            "total": data["total"],
            "correct": data["correct"],
            "accuracy": ch_acc
        }

    # Daily activity count (how often does she practice)
    daily_activity = {}
    for log in logs:
        # Extract YYYY-MM-DD from ISO timestamp
        date_str = log["timestamp"][:10]
        daily_activity[date_str] = daily_activity.get(date_str, 0) + 1

    # Format daily activity as sorted list
    sorted_activity = [{"date": d, "count": daily_activity[d]} for d in sorted(daily_activity.keys(), reverse=True)]

    # Return summary
    return {
        "stats": {
            "total": total,
            "correct": correct,
            "wrong": wrong,
            "skipped": skipped,
            "accuracy": accuracy
        },
        "chapters": chapter_summary,
        "activity": sorted_activity[:14], # Return last 14 active days
        "history": list(reversed(logs))[:100] # Return last 100 logs (newest first)
    }

@app.post("/api/reset")
async def reset_database():
    """
    Clears all logs in the database.
    """
    save_logs([])
    return {"status": "reset"}

# Serve static files at root level (index.html, style.css, app.js)
app.mount("/", StaticFiles(directory="static", html=True), name="static")
