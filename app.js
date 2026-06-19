// ─────────────────────────────────────────
// HIBA'S CPL PREP — APPLICATION ENGINE
// ─────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  // --- STATE ---
  let activeSection = "all";
  let activeTopic = "all";
  let currentQuestionIndex = 0;
  let filteredQuestions = [];
  
  // Stats
  let stats = {
    correct: 0,
    wrong: 0,
    skipped: 0,
    answeredIndices: {} // map of question ID to 'correct', 'wrong', 'skipped'
  };

  // Load from LocalStorage if available
  const savedStats = localStorage.getItem("cpl_prep_stats");
  if (savedStats) {
    try {
      stats = JSON.parse(savedStats);
      if (!stats.answeredIndices) stats.answeredIndices = {};
    } catch (e) {
      console.error("Error reading saved stats", e);
    }
  }

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
    "It's okay! Read the quick note on the side and keep going. 📝",
    "Mistakes are where we learn. You'll remember this for tomorrow!",
    "No worries, Captain. Review the explanation and press forward! 👍",
    "A minor turbulence! Check the regulation below.",
    "Almost! Every wrong answer now is a correct answer tomorrow! 🔮"
  ];

  // --- DOM ELEMENTS ---
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");
  const navList = document.getElementById("navList");
  const topicFilters = document.getElementById("topicFilters");
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

  // Bottom Stats
  const statAnswered = document.getElementById("statAnswered");
  const statCorrect = document.getElementById("statCorrect");
  const statWrong = document.getElementById("statWrong");
  const statSkipped = document.getElementById("statSkipped");

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

  // --- DATA FILTERING & INITIALIZATION ---
  function initApp() {
    buildTopicFilters();
    filterQuestions();
    updateUI();
  }

  function buildTopicFilters() {
    // Collect all topics based on activeSection
    const topics = new Set();
    QUESTIONS.forEach(q => {
      if (activeSection === "all" || q.section === activeSection) {
        topics.add(q.topic);
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
      const matchesSec = activeSection === "all" || q.section === activeSection;
      const matchesTop = activeTopic === "all" || q.topic === activeTopic;
      return matchesSec && matchesTop;
    });

    // Reset current question index to first unanswered question in this filter, or just 0 if all are answered
    currentQuestionIndex = 0;
    for (let i = 0; i < filteredQuestions.length; i++) {
      const q = filteredQuestions[i];
      // Generate a stable key for this question to track answered status
      const qKey = getQuestionKey(q);
      if (!stats.answeredIndices[qKey]) {
        currentQuestionIndex = i;
        break;
      }
    }
  }

  function getQuestionKey(q) {
    // Generate a unique string for question identification
    return `${q.section}_${q.topic}_${q.question.substring(0, 30)}`;
  }

  // --- STATS & LOGIC ---
  function saveStats() {
    localStorage.setItem("cpl_prep_stats", JSON.stringify(stats));
  }

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

    // Progress bar
    const totalQ = QUESTIONS.length;
    const progressPct = totalQ > 0 ? (answeredCount / totalQ) * 100 : 0;
    progressBar.style.width = `${progressPct}%`;

    // Render current question
    renderQuestion();
  }

  function renderQuestion() {
    mainContent.scrollTop = 0;
    feedbackStrip.style.display = "none";
    nextBtn.style.display = "none";
    skipBtn.style.display = "block";
    notesPanel.style.display = "none"; // Hide notes panel until wrong answer is clicked

    if (filteredQuestions.length === 0) {
      questionText.textContent = "No questions found matching your filter criteria.";
      optionsList.innerHTML = "";
      skipBtn.style.display = "none";
      return;
    }

    if (currentQuestionIndex >= filteredQuestions.length) {
      // Loop back or show completion
      questionText.textContent = "🎉 You have completed all questions in this category! Select another topic from the menu or reset session to start over.";
      optionsList.innerHTML = "";
      skipBtn.style.display = "none";
      return;
    }

    const q = filteredQuestions[currentQuestionIndex];
    qBadge.textContent = `Q ${currentQuestionIndex + 1} of ${filteredQuestions.length}`;
    
    // Friendly section mapping
    const sectionNames = {
      icao: "📘 ICAO Standards",
      rules: "⚖️ Rules of the Air",
      ats: "🗼 Air Traffic Services",
      airspace: "🗺️ Airspace & Nav"
    };
    qTopicTag.textContent = q.topic;
    questionText.textContent = q.question;

    optionsList.innerHTML = "";
    
    // Check if user has already answered this question in this session
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

      // Disable button if already answered
      if (existingAnswer) {
        btn.disabled = true;
        if (idx === q.answer) {
          btn.classList.add("correct");
        } else if (existingAnswer === "wrong" && idx !== q.answer) {
          // If we want to show what the user clicked, but stats doesn't store exact clicked index,
          // we just reveal the correct one. If they got it wrong, we highlight correct.
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

    // Immediate bottom stats update for satisfaction
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

    // Always show explanation notes on the side / below
    notesBody.innerHTML = q.notes || "No explanation notes available for this question.";
    notesPanel.style.display = "block";

    // Auto-scroll on phone to see the note
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

  // Section List Navigation
  navList.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", () => {
      navList.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      
      activeSection = item.dataset.section;
      activeTopic = "all"; // Reset topic on section change
      
      // Friendly labels
      const sectionLabels = {
        all: "🌐 All Topics",
        icao: "📘 ICAO Standards",
        rules: "⚖️ Rules of the Air",
        ats: "🗼 Air Traffic Services",
        airspace: "🗺️ Airspace & Navigation"
      };
      sectionLabel.textContent = sectionLabels[activeSection];
      
      initApp();
      closeSidebar();
    });
  });

  // Reset and Shuffle Logic
  function performResetAndShuffle() {
    stats = {
      correct: 0,
      wrong: 0,
      skipped: 0,
      answeredIndices: {}
    };
    saveStats();

    // Shuffle QUESTIONS array in-place
    for (let i = QUESTIONS.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = QUESTIONS[i];
      QUESTIONS[i] = QUESTIONS[j];
      QUESTIONS[j] = temp;
    }

    activeSection = "all";
    activeTopic = "all";
    
    // Reset sidebar styles
    navList.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
    navList.querySelector('[data-section="all"]').classList.add("active");
    sectionLabel.textContent = "All Topics";
    
    initApp();
  }

  function handleResetClick() {
    if (confirm("Are you sure you want to reset your practice session? This will clear your current score and shuffle all 500+ questions.")) {
      performResetAndShuffle();
      closeSidebar();
    }
  }

  resetBtn.addEventListener("click", handleResetClick);
  floatResetBtn.addEventListener("click", handleResetClick);

  // --- INITIAL RUN ---
  initApp();
});
