---
title: Hibas Exam
emoji: 🌦️
colorFrom: blue
colorTo: indigo
sdk: docker
app_port: 7860
pinned: false
---

# Hiba's CPL Meteorology Practice Portal 🌦️

A heavily optimized, mobile-first CPL (Commercial Pilot License) Meteorology practice application built specifically for Captain Hiba's exam preparation.

This application runs on a Python FastAPI backend and is containerized with Docker, deployed on Hugging Face Spaces. It contains a robust bank of **126 verified questions** covering all core topics of Meteorology.

---

## 🌟 Key Features

1. **126 Chapter-wise Questions**: Covers Composition & Structure, Heating & Thermal Structure, Troposphere & Tropopause, Stratosphere & Upper Layers, and Standard Atmosphere (ISA/JSA).
2. **Mobile First & Responsive**: Specifically designed to work perfectly on mobile screens for single-handed study.
3. **Explanatory Notes**: Instant slide-in logs detailing notes and step-by-step calculations for every question.
4. **Independent Stats Persistence**: Saves session training stats to local storage.

---

## 🚀 Local Run

To run the FastAPI server locally:
1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Start the server:
   ```bash
   uvicorn main:app --reload --port 7860
   ```
3. Open `http://localhost:7860` in your web browser.
