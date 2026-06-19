# Hiba's CPL Air Regulations Practice Website ✈️

A heavily optimized, mobile-first, frontend-only practice website built specifically for **Hiba's CPL (Commercial Pilot License) Air Regulations Exam**. 

This application contains a robust bank of **500+ questions** covering all core topics of Air Regulations, specifically tailored to help Hiba pass her 100-mark, 3-option MCQ exam tomorrow (70 marks needed to win).

---

## 🌟 Key Features

1. **500+ Questions**: Covers ICAO Standards & Annexes, Rules of the Air, Air Traffic Services (ATS), and Airspace & Navigation.
2. **Mobile First & Responsive**: Specifically designed to work perfectly on mobile screens (since Hiba uses her phone exclusively). Responsive layout works great on tablets and desktop as well.
3. **Optimized for Quick Study**: 
   - No timers or stress elements.
   - Shows **one question at a time**.
   - If the selected answer is correct: highlights green and shows a motivational message.
   - If incorrect: highlights red and immediately reveals explanatory **notes on the side/below** (no annoying popups).
   - Includes a **Skip** button to move quickly through known concepts.
4. **Interactive Navigation**: Topic-wise filters and sidebar section selection to study weak areas.
5. **Persistence**: Saves test session stats, accuracy, and answered history to local storage, allowing progress retention even after page refresh.

---

## 🚀 How to Run Locally

Since this is a client-side only (HTML/CSS/JS) application with no external backend dependencies:
1. Simply double-click `index.html` to open it in any browser.
2. Or run a lightweight local server (e.g. `npx serve .` or Live Server extension in VS Code).

---

## ☁️ How to Deploy to Vercel (Step-by-Step)

Vercel is the easiest platform to deploy frontend-only websites for free. Follow these simple steps:

### Method 1: Deploying via GitHub (Recommended)
1. Create a new repository on your GitHub account called `hibas-exam`.
2. Push this local repository to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/hibas-exam.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [Vercel](https://vercel.com/) and log in (or sign up using GitHub).
4. Click the **Add New...** button and select **Project**.
5. Import the `hibas-exam` repository.
6. Vercel will automatically detect that it is a Static Website. Click **Deploy**.
7. In less than a minute, your website will be live at a public URL (e.g., `hibas-exam.vercel.app`)!

### Method 2: Deploying via Vercel CLI (Super Fast)
If you don't want to use GitHub, you can deploy directly from your command line:
1. Open your terminal in this project folder.
2. Run the Vercel CLI tool (using `npx` so you don't have to install it globally):
   ```bash
   npx vercel
   ```
3. Follow the interactive prompts (log in, choose scope, and select defaults).
4. Within seconds, your site will be deployed and you will get a production URL!
