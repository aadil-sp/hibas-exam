// ────────────────────────────────────────────────────────
// CAPTAIN HIBA'S CPL METEOROLOGY PREP — APPLICATION ENGINE
// ────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  // --- STATE ---
  let activeSection = "all";
  let activeTopic = "all";
  let currentQuestionIndex = 0;
  let filteredQuestions = [];
  let currentProfile = null; // 'hiba', 'aadil', or null
  
  // Storage keys
  const STATS_KEY = "cpl_meteorology_stats";
  
  // Hiba's local training stats
  let stats = {
    correct: 0,
    wrong: 0,
    skipped: 0,
    answeredIndices: {} // map of question key to status ('correct', 'wrong', 'skipped')
  };

  // Load Hiba's local stats
  const savedStats = localStorage.getItem(STATS_KEY);
  if (savedStats) {
    try {
      stats = JSON.parse(savedStats);
      if (!stats.answeredIndices) stats.answeredIndices = {};
    } catch (e) {
      console.error("Error reading saved stats", e);
      resetStatsObject();
    }
  }

  function resetStatsObject() {
    stats = {
      correct: 0,
      wrong: 0,
      skipped: 0,
      answeredIndices: {}
    };
  }

  function saveStats() {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  }

  // --- MOTIVATIONAL PHRASES ---
  const MOTIVATIONS = [
    "Perfect! You're going to ace the exam! ✈️",
    "Spot on, Captain Hiba! 👩‍✈️",
    "Keep it up! The skies are waiting! 🌟",
    "Exceptional! Smooth flying ahead! 🌤️",
    "Correct! One step closer to your CPL! 🎫",
    "Brilliant! Great theoretical knowledge! 📚",
    "Right answer! You've got this down! 💪",
    "Fantastic! Clear for takeoff! 🛫",
    "Awesome job! Steady as she goes! 🚀"
  ];

  const ENCOURAGEMENTS = [
    "It's okay! Read the quick note below and keep going. 📝",
    "Mistakes are where we learn. You'll remember this for the exam!",
    "No worries, Captain. Review the explanation and press forward! 👍",
    "A minor turbulence! Check the flight log below.",
    "Almost! Every wrong answer now is a correct answer on the exam! 🔮"
  ];

  // --- DOM ELEMENTS ---
  // Profile Screen
  const profileScreen = document.getElementById("profileScreen");
  const profileCardHiba = document.getElementById("profileCardHiba");
  const profileCardAadil = document.getElementById("profileCardAadil");
  
  // Hiba's Dashboard
  const hibaDashboard = document.getElementById("hibaDashboard");
  const dashHibaAccuracy = document.getElementById("dashHibaAccuracy");
  const dashHibaMastery = document.getElementById("dashHibaMastery");
  const btnStartFlight = document.getElementById("btnStartFlight");
  const logoutBtnHiba = document.getElementById("logoutBtnHiba");
  const chapterChips = document.querySelectorAll(".chapter-chips-grid .chip");

  // Aadil's Dashboard
  const aadilDashboard = document.getElementById("aadilDashboard");
  const logoutBtnAadil = document.getElementById("logoutBtnAadil");
  const mentorAccuracy = document.getElementById("mentorAccuracy");
  const mentorTotalAttempts = document.getElementById("mentorTotalAttempts");
  const mentorCorrectAnswers = document.getElementById("mentorCorrectAnswers");
  const mentorChapterList = document.getElementById("mentorChapterList");
  const mentorActivityList = document.getElementById("mentorActivityList");
  const mentorHistoryBody = document.getElementById("mentorHistoryBody");
  const btnClearDb = document.getElementById("btnClearDb");

  // Exam Screen
  const examPanel = document.getElementById("examPanel");
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const examSidebarClose = document.getElementById("examSidebarClose");
  const examNavList = document.getElementById("examNavList");
  const examTopicFilters = document.getElementById("examTopicFilters");
  const sectionLabel = document.getElementById("sectionLabel");
  const topScore = document.getElementById("topScore");
  const navScore = document.getElementById("nav-score");
  const navAcc = document.getElementById("nav-acc");
  const progressBar = document.getElementById("progressBar");
  const mainContent = document.querySelector(".main-content");
  const exitExamBtn = document.getElementById("exitExamBtn");
  const examHomeBtn = document.getElementById("examHomeBtn");
  const examResetBtn = document.getElementById("examResetBtn");
  
  const questionPanel = document.getElementById("questionPanel");
  const qBadge = document.getElementById("qBadge");
  const qTopicTag = document.getElementById("qTopicTag");
  const questionText = document.getElementById("questionText");
  const optionsList = document.getElementById("optionsList");
  const feedbackStrip = document.getElementById("feedbackStrip");
  const skipBtn = document.getElementById("skipBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  const notesPanel = document.getElementById("notesPanel");
  const notesBody = document.getElementById("notesBody");
  const notesClose = document.getElementById("notesClose");
  const floatResetBtn = document.getElementById("floatResetBtn");

  // Bottom Exam Stats
  const statAnswered = document.getElementById("statAnswered");
  const statCorrect = document.getElementById("statCorrect");
  const statWrong = document.getElementById("statWrong");
  const statSkipped = document.getElementById("statSkipped");

  // --- PROFILE SELECTOR ROUTING ---
  function selectProfile(profile) {
    currentProfile = profile;
    localStorage.setItem("cpl_current_profile", profile);
    
    // Hide profile selection screen
    profileScreen.classList.add("hidden");
    
    if (profile === "hiba") {
      hibaDashboard.classList.remove("hidden");
      aadilDashboard.classList.add("hidden");
      examPanel.classList.add("hidden");
      updateHibaDashboardUI();
    } else if (profile === "aadil") {
      aadilDashboard.classList.remove("hidden");
      hibaDashboard.classList.add("hidden");
      examPanel.classList.add("hidden");
      loadAadilAnalytics();
    }
  }

  function logout() {
    currentProfile = null;
    localStorage.removeItem("cpl_current_profile");
    profileScreen.classList.remove("hidden");
    hibaDashboard.classList.add("hidden");
    aadilDashboard.classList.add("hidden");
    examPanel.classList.add("hidden");
  }

  profileCardHiba.addEventListener("click", () => selectProfile("hiba"));
  profileCardAadil.addEventListener("click", () => selectProfile("aadil"));
  logoutBtnHiba.addEventListener("click", logout);
  logoutBtnAadil.addEventListener("click", logout);

  // --- HIBA'S DASHBOARD HANDLERS ---
  function updateHibaDashboardUI() {
    const totalAttempted = stats.correct + stats.wrong;
    if (totalAttempted > 0) {
      const accuracy = Math.round((stats.correct / totalAttempted) * 100);
      dashHibaAccuracy.textContent = `${accuracy}%`;
    } else {
      dashHibaAccuracy.textContent = "—";
    }

    const answeredCount = Object.keys(stats.answeredIndices).length;
    dashHibaMastery.textContent = `${answeredCount} / ${QUESTIONS.length || 126}`;
  }

  // Chapter filter chips on dashboard
  chapterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      chapterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeSection = chip.dataset.section;
      activeTopic = "all";
    });
  });

  // Start Practice Flight button
  btnStartFlight.addEventListener("click", () => {
    hibaDashboard.classList.add("hidden");
    examPanel.classList.remove("hidden");
    
    // Update active highlight in exam sidebar to match selected dashboard chapter
    examNavList.querySelectorAll(".nav-item").forEach(item => {
      if (item.dataset.section === activeSection) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    const secLabels = {
      all: "All Chapters",
      composition: "Composition & Structure",
      heating: "Heating & Thermal Structure",
      troposphere: "Troposphere & Tropopause",
      upper: "Stratosphere & Upper Layers",
      standard: "Standard Atmosphere (ISA/JSA)"
    };
    sectionLabel.textContent = secLabels[activeSection] || "All Chapters";

    initExamApp();
  });

  // Exit Exam buttons (Go back to Hiba's dashboard)
  function exitExamToDashboard() {
    examPanel.classList.add("hidden");
    hibaDashboard.classList.remove("hidden");
    updateHibaDashboardUI();
  }
  exitExamBtn.addEventListener("click", exitExamToDashboard);
  examHomeBtn.addEventListener("click", exitExamToDashboard);

  // --- MENTOR AADIL'S PORTAL HANDLERS ---
  async function loadAadilAnalytics() {
    try {
      // Display loading state
      mentorAccuracy.textContent = "...";
      mentorTotalAttempts.textContent = "...";
      mentorCorrectAnswers.textContent = "...";
      mentorChapterList.innerHTML = "<p class='loading-text'>Loading analytics...</p>";
      mentorActivityList.innerHTML = "";
      mentorHistoryBody.innerHTML = "<tr><td colspan='4' class='center-text'>Fetching history...</td></tr>";

      const response = await fetch('/api/analytics');
      if (!response.ok) throw new Error("Analytics API unavailable");
      const data = await response.json();
      
      renderAadilDashboard(data);
    } catch (e) {
      console.warn("FastAPI backend not responding, calculating analytics locally", e);
      renderLocalAnalytics();
    }
  }

  function renderAadilDashboard(data) {
    // 1. Overall stats
    mentorAccuracy.textContent = data.stats.total > 0 ? `${data.stats.accuracy}%` : "—";
    mentorTotalAttempts.textContent = data.stats.total;
    mentorCorrectAnswers.textContent = data.stats.correct;

    // 2. Chapter performance list
    mentorChapterList.innerHTML = "";
    const chapterNames = {
      composition: "📘 Composition & Structure",
      heating: "☀️ Heating & Thermal Structure",
      troposphere: "⛈️ Troposphere & Tropopause",
      upper: "🚀 Stratosphere & Upper Layers",
      standard: "✈️ Standard Atmosphere (ISA/JSA)"
    };

    const sections = ['composition', 'heating', 'troposphere', 'upper', 'standard'];
    sections.forEach(sec => {
      const stats = data.chapters[sec] || { total: 0, accuracy: 0 };
      const row = document.createElement("div");
      row.className = "progress-row";
      
      const details = document.createElement("div");
      details.className = "progress-details";
      details.innerHTML = `<span>${chapterNames[sec]}</span><span>${stats.accuracy}% (${stats.total} Qs)</span>`;
      
      const track = document.createElement("div");
      track.className = "progress-track";
      
      const bar = document.createElement("div");
      bar.className = "progress-fill";
      bar.style.width = `${stats.accuracy}%`;
      
      track.appendChild(bar);
      row.appendChild(details);
      row.appendChild(track);
      mentorChapterList.appendChild(row);
    });

    // 3. Daily effort levels
    mentorActivityList.innerHTML = "";
    if (data.activity.length === 0) {
      mentorActivityList.innerHTML = "<p class='no-data-text'>No recent activity recorded.</p>";
    } else {
      data.activity.forEach(act => {
        const item = document.createElement("div");
        item.className = "activity-item";
        
        // Format YYYY-MM-DD to readable date
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        const dateObj = new Date(act.date);
        const dateFormatted = isNaN(dateObj) ? act.date : dateObj.toLocaleDateString('en-US', options);
        
        item.innerHTML = `<span>📅 ${dateFormatted}</span><span class='activity-badge'>${act.count} questions answered</span>`;
        mentorActivityList.appendChild(item);
      });
    }

    // 4. Chronological attempt logs
    mentorHistoryBody.innerHTML = "";
    if (data.history.length === 0) {
      mentorHistoryBody.innerHTML = "<tr><td colspan='4' class='center-text no-data-text'>No attempts logged yet.</td></tr>";
    } else {
      data.history.forEach(log => {
        const tr = document.createElement("tr");
        
        // Format timestamp
        const timeObj = new Date(log.timestamp);
        const timeFormatted = isNaN(timeObj) ? log.timestamp.substring(11, 19) : timeObj.toLocaleTimeString('en-US', { hour12: false });
        const dateFormatted = isNaN(timeObj) ? log.timestamp.substring(5, 10) : timeObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        
        const chapName = chapterNames[log.chapter] ? chapterNames[log.chapter].split(" ")[1] : log.chapter;
        const statusBadge = log.status === "correct" ? "<span class='log-badge correct'>Correct ✓</span>" : 
                            log.status === "wrong" ? "<span class='log-badge wrong'>Wrong ✗</span>" : 
                            "<span class='log-badge skip'>Skipped</span>";
        
        tr.innerHTML = `
          <td class="date-col">${dateFormatted} ${timeFormatted}</td>
          <td class="chap-col">${chapName}</td>
          <td class="question-col">${log.question}</td>
          <td class="status-col">${statusBadge}</td>
        `;
        mentorHistoryBody.appendChild(tr);
      });
    }
  }

  function renderLocalAnalytics() {
    // If backend isn't running (like on Vercel), calculate analytics from local stats
    const totalAttempted = stats.correct + stats.wrong;
    const accuracy = totalAttempted > 0 ? Math.round((stats.correct / totalAttempted) * 100) : 0;
    
    mentorAccuracy.textContent = totalAttempted > 0 ? `${accuracy}%` : "—";
    mentorTotalAttempts.textContent = totalAttempted + stats.skipped;
    mentorCorrectAnswers.textContent = stats.correct;

    // Build static progress list
    mentorChapterList.innerHTML = "<p class='no-data-text'>Detailed chapter progress is only available when running on the FastAPI backend.</p>";
    mentorActivityList.innerHTML = "<p class='no-data-text'>Activity logging is currently offline. Deploy backend to Hugging Face to record study habits.</p>";
    mentorHistoryBody.innerHTML = "<tr><td colspan='4' class='center-text no-data-text'>Attempt history is stored on the server. Connect a backend to display this log.</td></tr>";
  }

  // Clear Activity Database
  btnClearDb.addEventListener("click", async () => {
    if (confirm("Are you sure you want to delete Hiba's server activity logs? This will wipe the mentor history panel but won't change her local scores.")) {
      try {
        const response = await fetch('/api/reset', { method: 'POST' });
        if (response.ok) {
          loadAadilAnalytics();
        }
      } catch (e) {
        alert("Failed to clear logs on server: backend connection issue.");
      }
    }
  });


  // --- EXAM SYSTEM NAVIGATION & INTERACTION ---
  function toggleSidebar() {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
  }

  hamburger.addEventListener("click", toggleSidebar);
  examSidebarClose.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  // --- DATA FILTERING & INITIALIZATION ---
  function initExamApp() {
    buildTopicFilters();
    filterQuestions();
    updateUI();
  }

  function buildTopicFilters() {
    const topics = new Set();
    QUESTIONS.forEach(q => {
      if (activeSection === "all" || q.section === activeSection) {
        topics.add(q.topic);
      }
    });

    examTopicFilters.innerHTML = "";
    
    // Add "All Topics" chip
    const allChip = document.createElement("div");
    allChip.className = `chip ${activeTopic === "all" ? "active" : ""}`;
    allChip.textContent = "🏷️ All Topics";
    allChip.addEventListener("click", () => {
      activeTopic = "all";
      document.querySelectorAll("#examTopicFilters .chip").forEach(c => c.classList.remove("active"));
      allChip.classList.add("active");
      filterQuestions();
      updateUI();
      closeSidebar();
    });
    examTopicFilters.appendChild(allChip);

    // Add individual topic chips
    Array.from(topics).sort().forEach(topic => {
      const chip = document.createElement("div");
      chip.className = `chip ${activeTopic === topic ? "active" : ""}`;
      chip.textContent = topic;
      chip.addEventListener("click", () => {
        activeTopic = topic;
        document.querySelectorAll("#examTopicFilters .chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        filterQuestions();
        updateUI();
        closeSidebar();
      });
      examTopicFilters.appendChild(chip);
    });
  }

  function filterQuestions() {
    filteredQuestions = QUESTIONS.filter(q => {
      const matchesSec = activeSection === "all" || q.section === activeSection;
      const matchesTop = activeTopic === "all" || q.topic === activeTopic;
      return matchesSec && matchesTop;
    });

    // Reset current question index to first unanswered question in this filter, or 0 if all are answered
    currentQuestionIndex = 0;
    for (let i = 0; i < filteredQuestions.length; i++) {
      const q = filteredQuestions[i];
      const qKey = getQuestionKey(q);
      if (!stats.answeredIndices[qKey]) {
        currentQuestionIndex = i;
        break;
      }
    }
  }

  function getQuestionKey(q) {
    return `${q.section}_${q.topic}_${q.question.substring(0, 30)}`;
  }

  // --- STATS & LOGS UI UPDATE ---
  function updateUI() {
    // Update Stats Display
    const answeredCount = Object.keys(stats.answeredIndices).length;
    statAnswered.textContent = answeredCount;
    statCorrect.textContent = stats.correct;
    statWrong.textContent = stats.wrong;
    statSkipped.textContent = stats.skipped;

    // Top & Nav score
    const totalAttempted = stats.correct + stats.wrong;
    const scoreStr = `${stats.correct} / ${totalAttempted || 0}`;
    topScore.textContent = scoreStr;
    navScore.textContent = scoreStr;

    // Accuracy
    if (totalAttempted > 0) {
      const pct = Math.round((stats.correct / totalAttempted) * 100);
      navAcc.textContent = `${pct}%`;
    } else {
      navAcc.textContent = "—";
    }

    // Progress bar (across all questions)
    const progressPct = QUESTIONS.length > 0 ? (answeredCount / QUESTIONS.length) * 100 : 0;
    progressBar.style.width = `${progressPct}%`;

    // Render current question
    renderQuestion();
  }

  function renderQuestion() {
    mainContent.scrollTop = 0;
    feedbackStrip.style.display = "none";
    nextBtn.style.display = "none";
    skipBtn.style.display = "block";
    notesPanel.style.display = "none";

    if (filteredQuestions.length === 0) {
      questionText.textContent = "No questions found matching this chapter.";
      optionsList.innerHTML = "";
      skipBtn.style.display = "none";
      return;
    }

    if (currentQuestionIndex >= filteredQuestions.length) {
      questionText.textContent = "🎉 Chapter complete! You have completed all questions in this category. Back to dashboard or reset to shuffle and start again.";
      optionsList.innerHTML = "";
      skipBtn.style.display = "none";
      return;
    }

    const q = filteredQuestions[currentQuestionIndex];
    qBadge.textContent = `Q ${currentQuestionIndex + 1} of ${filteredQuestions.length}`;
    qTopicTag.textContent = q.topic;
    questionText.textContent = q.question;

    optionsList.innerHTML = "";
    
    // Check if already answered
    const qKey = getQuestionKey(q);
    const existingAnswer = stats.answeredIndices[qKey];

    q.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      
      const letterSpan = document.createElement("span");
      letterSpan.className = "option-letter";
      letterSpan.textContent = String.fromCharCode(65 + idx); // A, B, C
      
      const textNode = document.createTextNode(optText);
      
      btn.appendChild(letterSpan);
      btn.appendChild(textNode);

      if (existingAnswer) {
        btn.disabled = true;
        if (idx === q.answer) {
          btn.classList.add("correct");
        }
      } else {
        btn.addEventListener("click", () => handleAnswerSelect(idx, btn));
      }

      optionsList.appendChild(btn);
    });

    if (existingAnswer) {
      revealExplanation(q, existingAnswer === "correct");
      nextBtn.style.display = "block";
      skipBtn.style.display = "none";
    }
  }

  async function handleAnswerSelect(selectedIdx, btnElement) {
    const q = filteredQuestions[currentQuestionIndex];
    const qKey = getQuestionKey(q);
    const isCorrect = selectedIdx === q.answer;
    const status = isCorrect ? "correct" : "wrong";

    // Disable all options
    document.querySelectorAll(".option-btn").forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.answer) {
        btn.classList.add("correct");
      } else if (idx === selectedIdx) {
        btn.classList.add("wrong");
      } else {
        btn.classList.add("reveal");
      }
    });

    if (isCorrect) {
      stats.correct++;
      stats.answeredIndices[qKey] = "correct";
    } else {
      stats.wrong++;
      stats.answeredIndices[qKey] = "wrong";
    }

    saveStats();
    revealExplanation(q, isCorrect);
    
    // POST attempt to backend server log
    try {
      fetch('/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: json_log_payload(q, qKey, status)
      });
    } catch (e) {
      console.warn("Offline attempt log: failed to reach backend API");
    }

    skipBtn.style.display = "none";
    nextBtn.style.display = "block";

    // Immediate bottom stats update
    statAnswered.textContent = Object.keys(stats.answeredIndices).length;
    statCorrect.textContent = stats.correct;
    statWrong.textContent = stats.wrong;
  }

  function json_log_payload(q, key, status) {
    return JSON.stringify({
      "question_key": key,
      "chapter": q.section,
      "question": q.question,
      "status": status
    });
  }

  function revealExplanation(q, isCorrect) {
    feedbackStrip.style.display = "block";
    if (isCorrect) {
      feedbackStrip.className = "feedback-strip fb-correct";
      const randomMotivation = MOTIVATIONS[Math.floor(Math.random() * MOTIVATIONS.length)];
      feedbackStrip.innerHTML = `<strong>✓ Correct!</strong><br>${randomMotivation}`;
    } else {
      feedbackStrip.className = "feedback-strip fb-wrong";
      const randomEncouragement = ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
      feedbackStrip.innerHTML = `<strong>✗ Incorrect</strong><br>${randomEncouragement}`;
    }

    notesBody.innerHTML = q.notes || "No explanation notes available for this question.";
    notesPanel.style.display = "block";

    if (window.innerWidth < 768) {
      setTimeout(() => {
        notesPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }

  // --- BUTTON CLICKS ---
  skipBtn.addEventListener("click", () => {
    if (filteredQuestions.length === 0) return;
    const q = filteredQuestions[currentQuestionIndex];
    const qKey = getQuestionKey(q);

    if (!stats.answeredIndices[qKey]) {
      stats.skipped++;
      stats.answeredIndices[qKey] = "skipped";
      saveStats();
      
      // Post skip to backend
      try {
        fetch('/api/log', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: json_log_payload(q, qKey, "skipped")
        });
      } catch (e) {}
    }

    currentQuestionIndex++;
    updateUI();
  });

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    updateUI();
  });

  notesClose.addEventListener("click", () => {
    notesPanel.style.display = "none";
  });

  // Exam Sidebar navigation list (Chapters)
  examNavList.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", () => {
      examNavList.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      
      activeSection = item.dataset.section;
      activeTopic = "all"; // Reset topic
      sectionLabel.textContent = item.textContent;
      
      initExamApp();
      closeSidebar();
    });
  });

  // Reset and Shuffle Logic
  function performResetAndShuffle() {
    resetStatsObject();
    saveStats();

    // Shuffle questions
    for (let i = QUESTIONS.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = QUESTIONS[i];
      QUESTIONS[i] = QUESTIONS[j];
      QUESTIONS[j] = temp;
    }

    activeSection = "all";
    activeTopic = "all";
    currentQuestionIndex = 0;
    
    // Reset sidebar highlights
    examNavList.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
    examNavList.querySelector('[data-section="all"]').classList.add("active");
    sectionLabel.textContent = "All Chapters";
    
    initExamApp();
  }

  function handleResetClick() {
    if (confirm("Are you sure you want to reset your practice session? This will clear your current score and shuffle the question bank.")) {
      performResetAndShuffle();
      closeSidebar();
    }
  }

  examResetBtn.addEventListener("click", handleResetClick);
  floatResetBtn.addEventListener("click", handleResetClick);


  // --- BACKEND LOADING & INITIAL RUN ---
  let QUESTIONS = [];

  async function loadQuestions() {
    try {
      const response = await fetch('/api/questions');
      if (!response.ok) throw new Error("API not available");
      QUESTIONS = await response.json();
      onQuestionsReady();
    } catch (e) {
      console.warn("Failed to load questions from backend, falling back to local questions.js", e);
      // Dynamically load questions.js script
      const script = document.createElement("script");
      script.src = "questions.js";
      script.onload = () => {
        if (typeof QUESTIONS !== "undefined" && QUESTIONS.length > 0) {
          onQuestionsReady();
        } else {
          document.getElementById("questionText").textContent = "⚠️ Error loading questions. Please refresh the page.";
        }
      };
      script.onerror = () => {
        document.getElementById("questionText").textContent = "⚠️ Error loading questions. Please refresh the page.";
      };
      document.body.appendChild(script);
    }
  }

  function onQuestionsReady() {
    // Check if there is an active session
    const storedProfile = localStorage.getItem("cpl_current_profile");
    if (storedProfile) {
      selectProfile(storedProfile);
    } else {
      // Show profile selection screen
      profileScreen.classList.remove("hidden");
      hibaDashboard.classList.add("hidden");
      aadilDashboard.classList.add("hidden");
      examPanel.classList.add("hidden");
    }
  }

  // Trigger loading
  loadQuestions();
});
