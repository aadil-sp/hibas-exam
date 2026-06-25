// ─────────────────────────────────────────
// CAPTAIN HIBA'S CPL PREP — APPLICATION ENGINE
// ─────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  // --- STATE ---
  let activeSubject = "met"; // Default to Meteorology for tomorrow's exam
  let activeSection = "all";
  let activeTopic = "all";
  let currentQuestionIndex = 0;
  let filteredQuestions = [];
  
  // Subject-specific stats
  let stats = {
    correct: 0,
    wrong: 0,
    skipped: 0,
    answeredIndices: {} // map of question key to status ('correct', 'wrong', 'skipped')
  };

  // --- MOTIVATIONAL PHRASES ---
  const MOTIVATIONS = [
    "Perfect! You're going to ace tomorrow's exam! ✈️",
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
    "Mistakes are where we learn. You'll remember this for tomorrow!",
    "No worries, Captain. Review the explanation and press forward! 👍",
    "A minor turbulence! Check the flight log below.",
    "Almost! Every wrong answer now is a correct answer tomorrow! 🔮"
  ];

  // --- DOM ELEMENTS ---
  const landingScreen = document.getElementById("landingScreen");
  const btnSelectMet = document.getElementById("btnSelectMet");
  const btnSelectRegs = document.getElementById("btnSelectRegs");
  const cardMet = document.getElementById("cardMet");
  const cardRegs = document.getElementById("cardRegs");
  
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");
  const navList = document.getElementById("navList");
  const sectionContainer = document.getElementById("sectionContainer");
  const topicFilters = document.getElementById("topicFilters");
  const sidebarSubLabel = document.getElementById("sidebarSubLabel");
  const subjectLabel = document.getElementById("subjectLabel");
  const sectionLabel = document.getElementById("sectionLabel");
  const topScore = document.getElementById("topScore");
  const navScore = document.getElementById("nav-score");
  const navAcc = document.getElementById("nav-acc");
  const progressBar = document.getElementById("progressBar");
  const mainContent = document.querySelector(".main-content");
  
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
  const resetBtn = document.getElementById("resetBtn");
  const floatResetBtn = document.getElementById("floatResetBtn");
  const sidebarHomeBtn = document.getElementById("sidebarHomeBtn");
  const topbarHomeBtn = document.getElementById("topbarHomeBtn");

  // Switcher Buttons in Sidebar
  const switchBtnMet = document.getElementById("switchBtnMet");
  const switchBtnRegs = document.getElementById("switchBtnRegs");

  // Bottom Stats
  const statAnswered = document.getElementById("statAnswered");
  const statCorrect = document.getElementById("statCorrect");
  const statWrong = document.getElementById("statWrong");
  const statSkipped = document.getElementById("statSkipped");

  // --- PERSISTENCE & LOAD ---
  function getStatsKey(subject) {
    return `cpl_prep_stats_${subject}`;
  }

  function loadSession(subject) {
    activeSubject = subject;
    localStorage.setItem("cpl_active_subject", subject);
    
    const savedStats = localStorage.getItem(getStatsKey(subject));
    if (savedStats) {
      try {
        stats = JSON.parse(savedStats);
        if (!stats.answeredIndices) stats.answeredIndices = {};
      } catch (e) {
        console.error("Error reading saved stats", e);
        resetStatsObject();
      }
    } else {
      resetStatsObject();
    }

    // Reset active filters on subject switch
    activeSection = "all";
    activeTopic = "all";
    currentQuestionIndex = 0;
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
    localStorage.setItem(getStatsKey(activeSubject), JSON.stringify(stats));
  }

  // --- MENU FUNCTIONS ---
  function toggleSidebar() {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
  }

  hamburger.addEventListener("click", toggleSidebar);
  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  // --- SUBJECT SWITCHERS ---
  function setSubject(subject) {
    loadSession(subject);
    
    // Update theme and UI labels
    document.body.className = `subject-mode-${subject}`;
    
    if (subject === "met") {
      sidebarSubLabel.textContent = "Meteorology";
      subjectLabel.textContent = "Meteorology";
      switchBtnMet.classList.add("active");
      switchBtnRegs.classList.remove("active");
      sectionContainer.style.display = "none"; // Hide sections list for Meteorology (rely on topic chips)
    } else {
      sidebarSubLabel.textContent = "Air Regulations";
      subjectLabel.textContent = "Air Regulations";
      switchBtnRegs.classList.add("active");
      switchBtnMet.classList.remove("active");
      sectionContainer.style.display = "block"; // Show sections list for Air Regulations
      buildSectionNav();
    }

    sectionLabel.textContent = "All Topics";
    
    initApp();
    closeSidebar();
  }

  switchBtnMet.addEventListener("click", () => setSubject("met"));
  switchBtnRegs.addEventListener("click", () => setSubject("regs"));

  // Landing page selectors
  btnSelectMet.addEventListener("click", () => {
    landingScreen.classList.add("hidden");
    setSubject("met");
  });

  btnSelectRegs.addEventListener("click", () => {
    landingScreen.classList.add("hidden");
    setSubject("regs");
  });

  // Also make cards clickable for better experience
  cardMet.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
      landingScreen.classList.add("hidden");
      setSubject("met");
    }
  });

  cardRegs.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
      landingScreen.classList.add("hidden");
      setSubject("regs");
    }
  });

  // Return to Home Deck (Subject Selector)
  function showHomeSelector() {
    landingScreen.classList.remove("hidden");
    closeSidebar();
  }

  sidebarHomeBtn.addEventListener("click", showHomeSelector);
  topbarHomeBtn.addEventListener("click", showHomeSelector);

  // --- DYNAMIC SIDEBAR SECTIONS ---
  function buildSectionNav() {
    navList.innerHTML = "";
    
    const sections = [
      { id: "all", label: "🌐 All Topics" },
      { id: "icao", label: "📘 ICAO Standards" },
      { id: "rules", label: "⚖️ Rules of the Air" },
      { id: "ats", label: "🗼 Air Traffic Services" },
      { id: "airspace", label: "🗺️ Airspace & Navigation" }
    ];

    sections.forEach(sec => {
      const li = document.createElement("li");
      li.className = `nav-item ${activeSection === sec.id ? "active" : ""}`;
      li.dataset.section = sec.id;
      li.textContent = sec.label;
      
      li.addEventListener("click", () => {
        navList.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
        li.classList.add("active");
        
        activeSection = sec.id;
        activeTopic = "all"; // Reset topic on section change
        sectionLabel.textContent = sec.label;
        
        initApp();
        closeSidebar();
      });
      navList.appendChild(li);
    });
  }

  // --- DATA FILTERING & INITIALIZATION ---
  function initApp() {
    buildTopicFilters();
    filterQuestions();
    updateUI();
  }

  function buildTopicFilters() {
    // Collect all topics based on activeSubject and activeSection
    const topics = new Set();
    QUESTIONS.forEach(q => {
      const isMet = q.section === "met";
      const matchesSubject = activeSubject === "met" ? isMet : !isMet;
      
      if (matchesSubject) {
        if (activeSection === "all" || q.section === activeSection) {
          topics.add(q.topic);
        }
      }
    });

    topicFilters.innerHTML = "";
    
    // Add "All Topics" chip
    const allChip = document.createElement("div");
    allChip.className = `chip ${activeTopic === "all" ? "active" : ""}`;
    allChip.textContent = "🏷️ All Topics";
    allChip.addEventListener("click", () => {
      activeTopic = "all";
      document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      allChip.classList.add("active");
      filterQuestions();
      updateUI();
      closeSidebar();
    });
    topicFilters.appendChild(allChip);

    // Add individual topic chips
    Array.from(topics).sort().forEach(topic => {
      const chip = document.createElement("div");
      chip.className = `chip ${activeTopic === topic ? "active" : ""}`;
      chip.textContent = topic;
      chip.addEventListener("click", () => {
        activeTopic = topic;
        document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        filterQuestions();
        updateUI();
        closeSidebar();
      });
      topicFilters.appendChild(chip);
    });
  }

  function filterQuestions() {
    filteredQuestions = QUESTIONS.filter(q => {
      const isMet = q.section === "met";
      const matchesSubject = activeSubject === "met" ? isMet : !isMet;
      
      const matchesSec = activeSection === "all" || q.section === activeSection;
      const matchesTop = activeTopic === "all" || q.topic === activeTopic;
      
      return matchesSubject && matchesSec && matchesTop;
    });

    // Reset current question index to first unanswered question in this filter, or just 0 if all are answered
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

  // --- STATS & LOGIC ---
  function updateUI() {
    // Get total questions in the active subject (to accurately calculate overall progress)
    const totalQsInSubject = QUESTIONS.filter(q => {
      const isMet = q.section === "met";
      return activeSubject === "met" ? isMet : !isMet;
    }).length;

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

    // Progress bar
    const progressPct = totalQsInSubject > 0 ? (answeredCount / totalQsInSubject) * 100 : 0;
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
      questionText.textContent = "No training questions found matching this category.";
      optionsList.innerHTML = "";
      skipBtn.style.display = "none";
      return;
    }

    if (currentQuestionIndex >= filteredQuestions.length) {
      questionText.textContent = "🎉 Training cycle complete! You have completed all questions in this category. Choose another topic or reset the session to shuffle and restart.";
      optionsList.innerHTML = "";
      skipBtn.style.display = "none";
      return;
    }

    const q = filteredQuestions[currentQuestionIndex];
    qBadge.textContent = `Q ${currentQuestionIndex + 1} of ${filteredQuestions.length}`;
    qTopicTag.textContent = q.topic;
    questionText.textContent = q.question;

    optionsList.innerHTML = "";
    
    // Check if answered
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

  function handleAnswerSelect(selectedIdx, btnElement) {
    const q = filteredQuestions[currentQuestionIndex];
    const qKey = getQuestionKey(q);
    const isCorrect = selectedIdx === q.answer;

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
    
    skipBtn.style.display = "none";
    nextBtn.style.display = "block";

    // Immediate bottom stats update
    statAnswered.textContent = Object.keys(stats.answeredIndices).length;
    statCorrect.textContent = stats.correct;
    statWrong.textContent = stats.wrong;
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

    // Always show notes
    notesBody.innerHTML = q.notes || "No explanation notes available for this question.";
    notesPanel.style.display = "block";

    // Auto-scroll on mobile
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

  // Reset and Shuffle Logic
  function performResetAndShuffle() {
    resetStatsObject();
    saveStats();

    // Shuffle only the active subject's questions or the whole array
    // Shuffling the whole array is fine since our filter runs every time.
    for (let i = QUESTIONS.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = QUESTIONS[i];
      QUESTIONS[i] = QUESTIONS[j];
      QUESTIONS[j] = temp;
    }

    activeSection = "all";
    activeTopic = "all";
    currentQuestionIndex = 0;
    
    // Reset sidebar section highlights if in regs mode
    if (activeSubject === "regs") {
      navList.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
      navList.querySelector('[data-section="all"]').classList.add("active");
    }
    
    sectionLabel.textContent = "All Topics";
    
    initApp();
  }

  function handleResetClick() {
    const subjectName = activeSubject === "met" ? "Meteorology" : "Air Regulations";
    if (confirm(`Are you sure you want to reset your ${subjectName} practice session? This will clear your current score and shuffle the question pool.`)) {
      performResetAndShuffle();
      closeSidebar();
    }
  }

  resetBtn.addEventListener("click", handleResetClick);
  floatResetBtn.addEventListener("click", handleResetClick);

  // --- INITIAL CHECK ---
  // Check if there is an active subject stored
  const storedActiveSubject = localStorage.getItem("cpl_active_subject");
  if (storedActiveSubject) {
    landingScreen.classList.add("hidden");
    setSubject(storedActiveSubject);
  } else {
    // Show landing screen (default state)
    // We pre-load Meteorology so variables are safe if they bypass
    loadSession("met");
    document.body.className = "subject-mode-met";
  }
});
