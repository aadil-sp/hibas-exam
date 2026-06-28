from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import json

app = FastAPI(title="Captain Hiba's CPL Meteorology Prep API")

# Load questions database into memory on startup
with open("static/questions.json", "r", encoding="utf-8") as f:
    questions_data = json.load(f)

@app.get("/api/questions")
async def get_questions():
    """
    Returns the complete Meteorology question bank.
    """
    return questions_data

@app.post("/api/stats")
async def log_stats(payload: dict):
    """
    Optional endpoint to log study activity/performance on the backend console.
    """
    print(f"[CPL PREP LOG] Activity logged: {payload}")
    return {"status": "logged"}

# Serve static files at root level (index.html, style.css, app.js)
# This is mounted AFTER the API routes to prevent intercepting API requests.
app.mount("/", StaticFiles(directory="static", html=True), name="static")
