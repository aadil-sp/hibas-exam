// ────────────────────────────────────────────────────────
// CAPTAIN HIBA'S CPL PREP — MULTI-SUBJECT APPLICATION ENGINE
// ────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  // --- STATE ---
  let activeSubject = "all";
  let activeSection = "all";
  let activeTopic = "all";
  let isTargetedPrep = false; // true if training for tomorrow's Batch 8 exam
  let currentQuestionIndex = 0;
  let filteredQuestions = [];
  let currentProfile = null; // 'hiba', 'aadil', or null
  
  // Storage keys
  const STATS_KEY = "cpl_meteorology_stats"; // Keep the same local storage key for convenience
  
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
  const btnTargetedPrep = document.getElementById("btnTargetedPrep");
  const subjectCards = document.querySelectorAll(".subjects-grid .subject-card");
  const chaptersSection = document.getElementById("chaptersSection");
  const chaptersTitle = document.getElementById("chaptersTitle");
  const chapterChipsContainer = document.getElementById("chapterChipsContainer");

  // Aadil's Dashboard
  const aadilDashboard = document.getElementById("aadilDashboard");
  const mentorAccuracy = document.getElementById("mentorAccuracy");
  const mentorTotalAttempts = document.getElementById("mentorTotalAttempts");
  const mentorCorrectAnswers = document.getElementById("mentorCorrectAnswers");
  const mentorSubjectList = document.getElementById("mentorSubjectList");
  const mentorActivityList = document.getElementById("mentorActivityList");
  const mentorHistoryBody = document.getElementById("mentorHistoryBody");

  // Settings Modal Elements
  const settingsModal = document.getElementById("settingsModal");
  const dashSettingsBtn = document.getElementById("dashSettingsBtn");
  const mentorSettingsBtn = document.getElementById("mentorSettingsBtn");
  const dashHomeBtn = document.getElementById("dashHomeBtn");
  const mentorHomeBtn = document.getElementById("mentorHomeBtn");
  const examSettingsBtn = document.getElementById("examSettingsBtn");
  const settingsCloseBtn = document.getElementById("settingsCloseBtn");
  const connectionStatus = document.getElementById("connectionStatus");
  const settingsSwitchProfileBtn = document.getElementById("settingsSwitchProfileBtn");
  const settingsResetBtn = document.getElementById("settingsResetBtn");
  const settingsHardResetBtn = document.getElementById("settingsHardResetBtn");
  const settingsClearServerLogsBtn = document.getElementById("settingsClearServerLogsBtn");

  // Exam Screen
  const examPanel = document.getElementById("examPanel");
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const examSidebarClose = document.getElementById("examSidebarClose");
  const examNavList = document.getElementById("examNavList");
  const examTopicFilters = document.getElementById("examTopicFilters");
  const subjectLabel = document.getElementById("subjectLabel");
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
    chaptersSection.classList.add("hidden");
    subjectCards.forEach(c => c.classList.remove("active"));
  }

  profileCardHiba.addEventListener("click", () => selectProfile("hiba"));
  profileCardAadil.addEventListener("click", () => selectProfile("aadil"));
  dashHomeBtn.addEventListener("click", logout);
  mentorHomeBtn.addEventListener("click", logout);

  // --- SETTINGS MODAL ENGINE ---
  function openSettingsModal() {
    settingsModal.classList.remove("hidden");
    checkAPIHealth();
    
    // Toggle Aadil specific admin buttons in settings
    if (currentProfile === "aadil") {
      settingsClearServerLogsBtn.classList.remove("hidden");
    } else {
      settingsClearServerLogsBtn.classList.add("hidden");
    }
  }

  function closeSettingsModal() {
    settingsModal.classList.add("hidden");
  }

  async function checkAPIHealth() {
    connectionStatus.className = "connection-status status-checking";
    connectionStatus.querySelector(".status-text").textContent = "Checking Server Connection...";
    
    try {
      const response = await fetch('/api/questions');
      if (response.ok) {
        connectionStatus.className = "connection-status status-online";
        connectionStatus.querySelector(".status-text").textContent = "Online (FastAPI Connected) 🟢";
      } else {
        throw new Error("HTTP error");
      }
    } catch (e) {
      connectionStatus.className = "connection-status status-offline";
      connectionStatus.querySelector(".status-text").textContent = "Offline (Vercel Local Mode) 🔴";
    }
  }

  // Hook Gear Buttons
  dashSettingsBtn.addEventListener("click", openSettingsModal);
  mentorSettingsBtn.addEventListener("click", openSettingsModal);
  examSettingsBtn.addEventListener("click", openSettingsModal);
  settingsCloseBtn.addEventListener("click", closeSettingsModal);

  // Close modal when clicking outer backdrop area
  settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) {
      closeSettingsModal();
    }
  });

  // Wire Modal Buttons
  settingsSwitchProfileBtn.addEventListener("click", () => {
    closeSettingsModal();
    logout();
  });

  settingsResetBtn.addEventListener("click", () => {
    closeSettingsModal();
    if (confirm("Reset current session statistics and shuffle the question bank?")) {
      performResetAndShuffle();
      if (!examPanel.classList.contains("hidden")) {
        initExamApp();
      }
    }
  });

  settingsHardResetBtn.addEventListener("click", () => {
    if (confirm("⚠️ WARNING: This will permanently delete all your local scores, progress history, and accuracy rates. Are you sure you want to wipe local storage?")) {
      closeSettingsModal();
      localStorage.clear();
      resetStatsObject();
      logout();
    }
  });

  settingsClearServerLogsBtn.addEventListener("click", async () => {
    if (confirm("Clear Hiba's answer history and activity records on the server database? This will clear the mentor portal timeline.")) {
      try {
        const response = await fetch('/api/reset', { method: 'POST' });
        if (response.ok) {
          closeSettingsModal();
          loadAadilAnalytics();
        }
      } catch (e) {
        alert("Failed to wipe server records.");
      }
    }
  });


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
    dashHibaMastery.textContent = `${answeredCount} / ${QUESTIONS.length || 206}`;

    // Update question counts in Subject Cards
    const counts = { nav: 0, reg: 0, met: 0, tech: 0 };
    QUESTIONS.forEach(q => {
      if (counts[q.subject] !== undefined) {
        counts[q.subject]++;
      }
    });

    document.getElementById("subCountNav").textContent = `${counts.nav} Questions`;
    document.getElementById("subCountReg").textContent = `${counts.reg} Questions`;
    document.getElementById("subCountMet").textContent = `${counts.met} Questions`;
    document.getElementById("subCountTech").textContent = `${counts.tech} Questions`;
  }

  // Handle Subject Card Click (Toggles Chapters panel)
  subjectCards.forEach(card => {
    card.addEventListener("click", () => {
      subjectCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      
      const subject = card.dataset.subject;
      activeSubject = subject;
      isTargetedPrep = false;

      showChaptersPanel(subject);
    });
  });

  const subjectTitles = {
    nav: "General Navigation",
    reg: "Air Regulations",
    met: "Aviation Meteorology",
    tech: "Technical General"
  };

  const subjectChapters = {
    nav: [
      { id: "all", label: "🌐 All Chapters" },
      { id: "sensors", label: "⏱️ Sensors & Pressure Instruments" },
      { id: "general_nav", label: "🗺️ General Navigation (Earth/Time)" }
    ],
    reg: [
      { id: "all", label: "🌐 All Chapters" },
      { id: "agreements", label: "🌍 Conventions & agreements" },
      { id: "licensing", label: "🪪 Licensing & Airworthiness" },
      { id: "rules_air", label: "✈️ Rules of the Air" },
      { id: "aerodromes", label: "🏁 Aerodromes & Lighting" }
    ],
    met: [
      { id: "all", label: "🌐 All Chapters" },
      { id: "composition", label: "📘 Composition & Structure" },
      { id: "heating", label: "☀️ Heating & Thermal Structure" },
      { id: "troposphere", label: "⛈️ Troposphere & Tropopause" },
      { id: "upper", label: "🚀 Stratosphere & Upper Layers" },
      { id: "standard", label: "✈️ Standard Atmosphere (ISA/JSA)" }
    ],
    tech: [
      { id: "all", label: "🌐 All Chapters" },
      { id: "aerodynamics", label: "🔧 Aerodynamics & Flight Dynamics" }
    ]
  };

  function showChaptersPanel(subject) {
    chaptersTitle.textContent = `${subjectTitles[subject]} Chapters`;
    chapterChipsContainer.innerHTML = "";

    const chapters = subjectChapters[subject] || [];
    chapters.forEach(ch => {
      const btn = document.createElement("button");
      btn.className = "chip";
      btn.textContent = ch.label;
      btn.dataset.section = ch.id;
      
      btn.addEventListener("click", () => {
        activeSection = ch.id;
        activeTopic = "all";
        startExamFlight();
      });
      chapterChipsContainer.appendChild(btn);
    });

    chaptersSection.classList.remove("hidden");
    
    // Smooth scroll down to chapters
    setTimeout(() => {
      chaptersSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  // Targeted Prep button click
  btnTargetedPrep.addEventListener("click", () => {
    isTargetedPrep = true;
    activeSubject = "all";
    activeSection = "all";
    activeTopic = "all";
    startExamFlight();
  });

  function startExamFlight() {
    hibaDashboard.classList.add("hidden");
    examPanel.classList.remove("hidden");
    initExamApp();
  }

  // --- MENTOR AADIL'S PORTAL HANDLERS ---
  async function loadAadilAnalytics() {
    try {
      mentorAccuracy.textContent = "...";
      mentorTotalAttempts.textContent = "...";
      mentorCorrectAnswers.textContent = "...";
      mentorSubjectList.innerHTML = "<p class='loading-text'>Loading analytics...</p>";
      mentorActivityList.innerHTML = "";
      mentorHistoryBody.innerHTML = "<tr><td colspan='4' class='center-text'>Fetching history...</td></tr>";

      const response = await fetch('/api/analytics');
      if (!response.ok) throw new Error("Analytics API unavailable");
      const data = await response.json();
      
      renderAadilDashboard(data);
    } catch (e) {
      console.warn("FastAPI backend connection failed, fallback to local details", e);
      renderLocalAnalytics();
    }
  }

  function renderAadilDashboard(data) {
    // 1. Overall stats
    mentorAccuracy.textContent = data.stats.total > 0 ? `${data.stats.accuracy}%` : "—";
    mentorTotalAttempts.textContent = data.stats.total;
    mentorCorrectAnswers.textContent = data.stats.correct;

    // 2. Subject performance progress list
    mentorSubjectList.innerHTML = "";
    const subjectLabelNames = {
      nav: "🧭 General Navigation",
      reg: "📜 Air Regulations",
      met: "🌦️ Aviation Meteorology",
      tech: "🔧 Technical General"
    };

    const subjects = ['nav', 'reg', 'met', 'tech'];
    subjects.forEach(sub => {
      const subStats = data.chapters[sub] || { total: 0, accuracy: 0 };
      const row = document.createElement("div");
      row.className = "progress-row";
      
      const details = document.createElement("div");
      details.className = "progress-details";
      details.innerHTML = `<span>${subjectLabelNames[sub]}</span><span>${subStats.accuracy}% (${subStats.total} Qs)</span>`;
      
      const track = document.createElement("div");
      track.className = "progress-track";
      
      const bar = document.createElement("div");
      bar.className = "progress-fill";
      bar.style.width = `${subStats.accuracy}%`;
      
      track.appendChild(bar);
      row.appendChild(details);
      row.appendChild(track);
      mentorSubjectList.appendChild(row);
    });

    // 3. Daily activity
    mentorActivityList.innerHTML = "";
    if (data.activity.length === 0) {
      mentorActivityList.innerHTML = "<p class='no-data-text'>No recent activity recorded.</p>";
    } else {
      data.activity.forEach(act => {
        const item = document.createElement("div");
        item.className = "activity-item";
        
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        const dateObj = new Date(act.date);
        const dateFormatted = isNaN(dateObj) ? act.date : dateObj.toLocaleDateString('en-US', options);
        
        item.innerHTML = `<span>📅 ${dateFormatted}</span><span class='activity-badge'>${act.count} questions</span>`;
        mentorActivityList.appendChild(item);
      });
    }

    // 4. History log
    mentorHistoryBody.innerHTML = "";
    if (data.history.length === 0) {
      mentorHistoryBody.innerHTML = "<tr><td colspan='4' class='center-text no-data-text'>No attempts logged yet.</td></tr>";
    } else {
      const subjectIconNames = {
        nav: "🧭 Navigation",
        reg: "📜 Regulations",
        met: "🌦️ Meteorology",
        tech: "🔧 Technical"
      };

      data.history.forEach(log => {
        const tr = document.createElement("tr");
        
        const timeObj = new Date(log.timestamp);
        const timeFormatted = isNaN(timeObj) ? log.timestamp.substring(11, 19) : timeObj.toLocaleTimeString('en-US', { hour12: false });
        const dateFormatted = isNaN(timeObj) ? log.timestamp.substring(5, 10) : timeObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        
        const subName = subjectIconNames[log.chapter] || log.chapter;
        const statusBadge = log.status === "correct" ? "<span class='log-badge correct'>Correct ✓</span>" : 
                            log.status === "wrong" ? "<span class='log-badge wrong'>Wrong ✗</span>" : 
                            "<span class='log-badge skip'>Skipped</span>";
        
        tr.innerHTML = `
          <td class="date-col">${dateFormatted} ${timeFormatted}</td>
          <td class="chap-col">${subName}</td>
          <td class="question-col">${log.question}</td>
          <td class="status-col">${statusBadge}</td>
        `;
        mentorHistoryBody.appendChild(tr);
      });
    }
  }

  function renderLocalAnalytics() {
    const totalAttempted = stats.correct + stats.wrong;
    const accuracy = totalAttempted > 0 ? Math.round((stats.correct / totalAttempted) * 100) : 0;
    
    mentorAccuracy.textContent = totalAttempted > 0 ? `${accuracy}%` : "—";
    mentorTotalAttempts.textContent = totalAttempted + stats.skipped;
    mentorCorrectAnswers.textContent = stats.correct;

    mentorSubjectList.innerHTML = "<p class='no-data-text'>Subject breakdown requires a running FastAPI backend.</p>";
    mentorActivityList.innerHTML = "<p class='no-data-text'>Activity logging is offline.</p>";
    mentorHistoryBody.innerHTML = "<tr><td colspan='4' class='center-text no-data-text'>Attempt history is stored on the server.</td</tr>";
  }


  // --- EXAM SIDEBAR NAVIGATION ---
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
    buildExamSidebarNav();
    buildTopicFilters();
    filterQuestions();
    updateUI();
  }

  // Programmatically inject chapters list based on active subject or targeted prep
  function buildExamSidebarNav() {
    examNavList.innerHTML = "";

    if (isTargetedPrep) {
      const li = document.createElement("li");
      li.className = "nav-item active";
      li.textContent = "⚡ Batch 8 Portions Only";
      li.dataset.section = "all";
      examNavList.appendChild(li);
      subjectLabel.textContent = "CPL Prep";
      sectionLabel.textContent = "Batch 8 Portion";
      return;
    }

    // Set header labels
    subjectLabel.textContent = subjectTitles[activeSubject] || "CPL Prep";
    
    const chapters = subjectChapters[activeSubject] || [];
    chapters.forEach(ch => {
      const li = document.createElement("li");
      li.className = `nav-item ${activeSection === ch.id ? "active" : ""}`;
      li.textContent = ch.label;
      li.dataset.section = ch.id;

      li.addEventListener("click", () => {
        examNavList.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
        li.classList.add("active");
        
        activeSection = ch.id;
        activeTopic = "all";
        sectionLabel.textContent = ch.label;
        
        initExamApp();
        closeSidebar();
      });
      examNavList.appendChild(li);
    });

    const activeCh = chapters.find(ch => ch.id === activeSection);
    sectionLabel.textContent = activeCh ? activeCh.label : "All Chapters";
  }

  function buildTopicFilters() {
    const topics = new Set();
    const targetSections = ["sensors", "general_nav", "agreements", "licensing", "rules_air", "aerodromes", "composition", "heating", "troposphere", "aerodynamics"];
    
    QUESTIONS.forEach(q => {
      if (isTargetedPrep) {
        if (targetSections.includes(q.section)) {
          topics.add(q.topic);
        }
      } else {
        const matchesSub = activeSubject === "all" || q.subject === activeSubject;
        const matchesSec = activeSection === "all" || q.section === activeSection;
        if (matchesSub && matchesSec) {
          topics.add(q.topic);
        }
      }
    });

    examTopicFilters.innerHTML = "";
    
    // "All Topics" chip
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

    // Topic chips
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
    const targetSections = ["sensors", "general_nav", "agreements", "licensing", "rules_air", "aerodromes", "composition", "heating", "troposphere", "aerodynamics"];

    filteredQuestions = QUESTIONS.filter(q => {
      if (isTargetedPrep) {
        const matchesSection = targetSections.includes(q.section);
        const matchesTopic = activeTopic === "all" || q.topic === activeTopic;
        return matchesSection && matchesTopic;
      } else {
        const matchesSub = activeSubject === "all" || q.subject === activeSubject;
        const matchesSec = activeSection === "all" || q.section === activeSection;
        const matchesTop = activeTopic === "all" || q.topic === activeTopic;
        return matchesSub && matchesSec && matchesTop;
      }
    });

    // Reset current index to first unanswered
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
    return `${q.subject}_${q.section}_${q.topic}_${q.question.substring(0, 30)}`;
  }

  // --- STATS & LOGS UI UPDATE ---
  function updateUI() {
    const answeredCount = Object.keys(stats.answeredIndices).length;
    statAnswered.textContent = answeredCount;
    statCorrect.textContent = stats.correct;
    statWrong.textContent = stats.wrong;
    statSkipped.textContent = stats.skipped;

    const totalAttempted = stats.correct + stats.wrong;
    const scoreStr = `${stats.correct} / ${totalAttempted || 0}`;
    topScore.textContent = scoreStr;
    navScore.textContent = scoreStr;

    if (totalAttempted > 0) {
      const pct = Math.round((stats.correct / totalAttempted) * 100);
      navAcc.textContent = `${pct}%`;
    } else {
      navAcc.textContent = "—";
    }

    const progressPct = QUESTIONS.length > 0 ? (answeredCount / QUESTIONS.length) * 100 : 0;
    progressBar.style.width = `${progressPct}%`;

    renderQuestion();
  }

  function renderQuestion() {
    mainContent.scrollTop = 0;
    feedbackStrip.style.display = "none";
    nextBtn.style.display = "none";
    skipBtn.style.display = "block";
    notesPanel.style.display = "none";

    if (filteredQuestions.length === 0) {
      questionText.textContent = "No questions found matching this category.";
      optionsList.innerHTML = "";
      skipBtn.style.display = "none";
      return;
    }

    if (currentQuestionIndex >= filteredQuestions.length) {
      questionText.textContent = "🎉 Portion complete! You have completed all questions in this category. Back to dashboard or reset to shuffle and start again.";
      optionsList.innerHTML = "";
      skipBtn.style.display = "none";
      return;
    }

    const q = filteredQuestions[currentQuestionIndex];
    qBadge.textContent = `Q ${currentQuestionIndex + 1} of ${filteredQuestions.length}`;
    qTopicTag.textContent = q.topic;
    questionText.textContent = q.question;

    optionsList.innerHTML = "";
    
    const qKey = getQuestionKey(q);
    const existingAnswer = stats.answeredIndices[qKey];

    q.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      
      const letterSpan = document.createElement("span");
      letterSpan.className = "option-letter";
      letterSpan.textContent = String.fromCharCode(65 + idx);
      
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
    
    // POST attempt (we pass the subject as chapter so Aadil's stats grouping maps correctly)
    try {
      fetch('/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: json_log_payload(q, qKey, status)
      });
    } catch (e) {
      console.warn("Offline attempt log.");
    }

    skipBtn.style.display = "none";
    nextBtn.style.display = "block";

    statAnswered.textContent = Object.keys(stats.answeredIndices).length;
    statCorrect.textContent = stats.correct;
    statWrong.textContent = stats.wrong;
  }

  function json_log_payload(q, key, status) {
    return JSON.stringify({
      "question_key": key,
      "chapter": q.subject, // Map subject field to the backend "chapter" parameter for clean grouping
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

    notesBody.innerHTML = q.notes || "No explanation notes available.";
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

  // Reset and Shuffle
  function performResetAndShuffle() {
    resetStatsObject();
    saveStats();

    for (let i = QUESTIONS.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = QUESTIONS[i];
      QUESTIONS[i] = QUESTIONS[j];
      QUESTIONS[j] = temp;
    }

    currentQuestionIndex = 0;
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

  exitExamBtn.addEventListener("click", () => {
    examPanel.classList.add("hidden");
    hibaDashboard.classList.remove("hidden");
    updateHibaDashboardUI();
  });

  examHomeBtn.addEventListener("click", () => {
    closeSidebar();
    examPanel.classList.add("hidden");
    hibaDashboard.classList.remove("hidden");
    updateHibaDashboardUI();
  });


  // --- BACKEND QUESTIONS LOADING ---
  let QUESTIONS = window.QUESTIONS || [];

  async function loadQuestions() {
    try {
      const response = await fetch('/api/questions');
      if (!response.ok) throw new Error("API not available");
      QUESTIONS = await response.json();
      onQuestionsReady();
    } catch (e) {
      console.warn("Failed to load questions from backend, falling back to local questions.js", e);
      if (window.QUESTIONS && window.QUESTIONS.length > 0) {
        QUESTIONS = window.QUESTIONS;
        onQuestionsReady();
      } else {
        const script = document.createElement("script");
        script.src = "questions.js";
        script.onload = () => {
          if (window.QUESTIONS && window.QUESTIONS.length > 0) {
            QUESTIONS = window.QUESTIONS;
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
  }

  function onQuestionsReady() {
    const storedProfile = localStorage.getItem("cpl_current_profile");
    if (storedProfile) {
      selectProfile(storedProfile);
    } else {
      profileScreen.remove("hidden");
      hibaDashboard.classList.add("hidden");
      aadilDashboard.classList.add("hidden");
      examPanel.classList.add("hidden");
    }
  }

  loadQuestions();
});
