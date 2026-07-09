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
    answeredIndices: {}, // map of question key to status ('correct', 'wrong', 'skipped')
    historyLog: []
  };

  // Load Hiba's local stats
  const savedStats = localStorage.getItem(STATS_KEY);
  if (savedStats) {
    try {
      stats = JSON.parse(savedStats);
      if (!stats.answeredIndices) stats.answeredIndices = {};
      if (!stats.historyLog) stats.historyLog = [];
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
      answeredIndices: {},
      historyLog: []
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

  // Subject Detail Panel
  const subjectDetailPanel = document.getElementById("subjectDetailPanel");
  const subjectBackBtn = document.getElementById("subjectBackBtn");
  const subjectDetailHomeBtn = document.getElementById("subjectDetailHomeBtn");
  const subjectDetailIcon = document.getElementById("subjectDetailIcon");
  const subjectDetailTitle = document.getElementById("subjectDetailTitle");
  const subjectDetailSub = document.getElementById("subjectDetailSub");
  const modeTestBtn = document.getElementById("modeTestBtn");
  const modeNotesBtn = document.getElementById("modeNotesBtn");
  const modeSliderThumb = document.getElementById("modeSliderThumb");
  const modeHint = document.getElementById("modeHint");
  const chapterTilesGrid = document.getElementById("chapterTilesGrid");

  // Notes Reader Panel
  const notesReaderPanel = document.getElementById("notesReaderPanel");
  const notesReaderBack = document.getElementById("notesReaderBack");
  const notesReaderIcon = document.getElementById("notesReaderIcon");
  const notesReaderTitle = document.getElementById("notesReaderTitle");
  const notesReaderBody = document.getElementById("notesReaderBody");
  const notesReaderStartTest = document.getElementById("notesReaderStartTest");

  // Mode state
  let currentMode = "test"; // "test" or "notes"
  let activeSubjectForDetail = null;

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
    if (profile === "hiba") {
      if (typeof QUESTIONS !== "undefined" && QUESTIONS.length > 0) {
        shuffleQuestions(QUESTIONS);
      }
      window.location.hash = "#/hiba";
    } else if (profile === "aadil") {
      window.location.hash = "#/aadil";
    }
  }

  function logout() {
    window.location.hash = "#/";
  }

  function handleRoute() {
    const hash = window.location.hash || "#/";

    // Hide all panels
    profileScreen.classList.add("hidden");
    hibaDashboard.classList.add("hidden");
    aadilDashboard.classList.add("hidden");
    examPanel.classList.add("hidden");
    subjectDetailPanel.classList.add("hidden");
    notesReaderPanel.classList.add("hidden");

    if (hash === "#/hiba") {
      currentProfile = "hiba";
      localStorage.setItem("cpl_current_profile", "hiba");
      hibaDashboard.classList.remove("hidden");
      updateHibaDashboardUI();
      subjectCards.forEach(c => c.classList.remove("active"));
      chaptersSection.classList.add("hidden");
    } else if (hash === "#/aadil") {
      currentProfile = "aadil";
      localStorage.setItem("cpl_current_profile", "aadil");
      aadilDashboard.classList.remove("hidden");
      loadAadilAnalytics();
    } else if (hash === "#/exam") {
      const storedProfile = localStorage.getItem("cpl_current_profile");
      if (storedProfile === "hiba") {
        currentProfile = "hiba";
        examPanel.classList.remove("hidden");
        if (QUESTIONS.length > 0) {
          initExamApp();
        }
      } else {
        window.location.hash = "#/";
      }
    } else {
      currentProfile = null;
      localStorage.removeItem("cpl_current_profile");
      profileScreen.classList.remove("hidden");
      chaptersSection.classList.add("hidden");
      subjectCards.forEach(c => c.classList.remove("active"));
    }
  }

  window.addEventListener("hashchange", handleRoute);

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

      if (subject === "met") {
        // Open the new Subject Detail Panel for Met
        openSubjectDetailPanel(subject);
      } else {
        showChaptersPanel(subject);
      }
    });
  });

  const subjectMeta = {
    nav: { title: "General Navigation", icon: "🧭", sub: "Select a chapter to practice" },
    reg: { title: "Air Regulations", icon: "📜", sub: "Select a chapter to practice" },
    met: { title: "Aviation Meteorology", icon: "🌦️", sub: "Select a chapter to study" },
    tech: { title: "Technical General", icon: "🔧", sub: "Select a chapter to practice" }
  };

  const subjectTitles = {
    nav: "General Navigation",
    reg: "Air Regulations",
    met: "Aviation Meteorology",
    tech: "Technical General"
  };

  // Full authentic DGCA CPL Met chapter list
  const MET_CHAPTERS = [
    { id: "composition", icon: "📘", name: "Composition & Structure of Atmosphere", hasNotes: false },
    { id: "heating", icon: "☀️", name: "Heating, Cooling & Temperature", hasNotes: false },
    { id: "humidity", icon: "💧", name: "Humidity", hasNotes: true },
    { id: "pressure", icon: "🌡️", name: "Pressure, Wind & General Circulation", hasNotes: false },
    { id: "clouds", icon: "⛅", name: "Clouds & Precipitation", hasNotes: false },
    { id: "fog", icon: "🌫️", name: "Fog, Mist & Haze", hasNotes: false },
    { id: "thunderstorms", icon: "⛈️", name: "Thunderstorms", hasNotes: false },
    { id: "icing", icon: "🧊", name: "Icing", hasNotes: false },
    { id: "turbulence", icon: "🌊", name: "Turbulence", hasNotes: false },
    { id: "reports", icon: "📡", name: "Aviation Weather Reports (METAR/TAF)", hasNotes: false }
  ];

  // Full chapter notes content
  const CHAPTER_NOTES = {
    humidity: `
<div class="notes-content">
  <h3>Introduction to Atmospheric Moisture</h3>
  <p>Water vapour is always present in the air to a greater or lesser extent in the troposphere. This water vapour plays a very important role in all atmospheric processes.</p>
  <p>Water evaporates into the air from oceans, lakes, rivers, vegetation, etc. It ascends and forms clouds which cause precipitation. The <strong>water cycle</strong> is thus completed.</p>
  <p>Water exists in <strong>three phases</strong>:</p>
  <div class="definition-grid">
    <div class="def-item"><div class="def-term">Gas Phase</div><div class="def-desc">Water vapour — always present in the atmosphere</div></div>
    <div class="def-item"><div class="def-term">Liquid Phase</div><div class="def-desc">Rain, drizzle, shower</div></div>
    <div class="def-item"><div class="def-term">Solid Phase</div><div class="def-desc">Snow, hail</div></div>
  </div>
  <div class="key-rule">The capacity of dry air to hold water vapour depends largely on <strong>temperature</strong> and to some extent on <strong>pressure</strong>. Higher the temperature, higher is the capacity of air to hold water vapour.</div>

  <h3>Types of Air by Water Content</h3>
  <div class="definition-grid">
    <div class="def-item">
      <div class="def-term">Dry Air</div>
      <div class="def-desc">Air that contains <strong>no water vapour</strong>. May exist in the upper troposphere or stratosphere.</div>
    </div>
    <div class="def-item">
      <div class="def-term">Moist Air</div>
      <div class="def-desc">The normal air we breathe — also called unsaturated or dry air at the existing temperature and pressure.</div>
    </div>
    <div class="def-item">
      <div class="def-term">Saturated Air</div>
      <div class="def-desc">Air is like a sponge which can absorb a certain amount of water and no more. When air holds <strong>maximum water vapour</strong>, it is called saturated air.</div>
    </div>
  </div>

  <h3>Pressure Terms</h3>
  <div class="definition-grid">
    <div class="def-item">
      <div class="def-term">Vapour Pressure (VP)</div>
      <div class="def-desc">The partial pressure exerted by water vapour in the air. If <em>p</em> is the total pressure and <em>e</em> is the vapour pressure, then <em>(p-e)</em> is the pressure of dry air.</div>
    </div>
    <div class="def-item">
      <div class="def-term">Saturation Vapour Pressure (SVP)</div>
      <div class="def-desc">The pressure exerted by water vapour when air is saturated. SVP increases with increasing temperature.</div>
    </div>
  </div>

  <h3>Humidity Terms & Definitions</h3>
  <div class="definition-grid">
    <div class="def-item">
      <div class="def-term">Absolute Humidity</div>
      <div class="def-desc">The actual amount of water vapour contained in a given <strong>volume</strong> of air at a given temperature.</div>
      <div class="def-unit">Unit: g/m³ (grams per cubic metre)</div>
    </div>
    <div class="def-item">
      <div class="def-term">Humidity Mixing Ratio (HMR)</div>
      <div class="def-desc">The mass of water vapour contained in a given <strong>mass</strong> of air.</div>
      <div class="def-unit">Unit: g/kg (grams per kilogram of dry air)</div>
    </div>
    <div class="def-item">
      <div class="def-term">HMR for Saturated Air</div>
      <div class="def-desc">The <strong>maximum</strong> mass of water vapour that can be contained in a given mass of air at a particular temperature and pressure. Increases with temperature.</div>
      <div class="def-unit">Unit: g/kg of dry air</div>
    </div>
    <div class="def-item">
      <div class="def-term">Relative Humidity (RH)</div>
      <div class="def-desc">The ratio, in percentage, of the actual water vapour present in the air to the maximum it can contain at the same temperature and pressure.</div>
    </div>
  </div>

  <h3>Relative Humidity Formulas</h3>
  <div class="formula-box">RH (%) = (HMR × 100) / (HMR for Saturated Air)</div>
  <div class="formula-box">RH (%) = (VP of Air × 100) / (SV of Air)</div>

  <h3>Measurement of Humidity</h3>
  <p>Humidity is measured by two instruments:</p>
  <div class="definition-grid">
    <div class="def-item"><div class="def-term">Psychrometer</div><div class="def-desc">Uses wet and dry bulb thermometers to calculate relative humidity by comparing the two readings.</div></div>
    <div class="def-item"><div class="def-term">Hygrometer</div><div class="def-desc">Directly measures humidity, often using a hair element that changes length with moisture content. Humidity is recorded by a <strong>Hygrograph</strong>.</div></div>
  </div>

  <h3>Temperature Terms Related to Humidity</h3>
  <div class="definition-grid">
    <div class="def-item">
      <div class="def-term">Wet Bulb Temperature (Tw)</div>
      <div class="def-desc">The lowest temperature which air would attain by evaporating water into it to saturate it. Desert coolers work on this principle — <strong>drier the air, more effective the cooling</strong>.</div>
    </div>
    <div class="def-item">
      <div class="def-term">Dew Point Temperature (Td)</div>
      <div class="def-desc">The lowest temperature to which air should be cooled at <strong>constant pressure</strong> to saturate it with respect to water. Cooling below Dew Point (DP) causes condensation.</div>
    </div>
    <div class="def-item">
      <div class="def-term">Frost Point</div>
      <div class="def-desc">The temperature to which air must be cooled to reach saturation with respect to <strong>ICE</strong>. Cooling below frost point causes formation of <strong>hoar frost</strong>.</div>
    </div>
  </div>

  <h3>Key Rules — Saturation vs Unsaturation</h3>
  <div class="warning-box">
    ⚠️ <strong>For SATURATED air</strong> (Fog, during rain):<br><br>
    <strong>Air Temperature (TT) = Wet Bulb (Tw) = Dew Point (Td)</strong>
  </div>
  <div class="key-rule">
    For <strong>UNSATURATED air</strong>:<br><br>
    <strong>TT &gt; Tw &gt; Td</strong><br><br>
    i.e., Free Air Temp &gt; Wet Bulb Temp &gt; Dew Point Temp
  </div>

  <h3>Important Rules about Dew Point (DP) and RH</h3>
  <div class="key-rule">
    ✦ <strong>DP is ONLY affected by change in water content</strong>, whereas RH is affected by change in water content AND temperature both.<br><br>
    ✦ <strong>By cooling or warming the air, RH changes but DP does NOT change.</strong><br><br>
    ✦ <strong>DP is higher if air contains more water vapour.</strong>
  </div>

  <h3>Cloud Base Formula</h3>
  <p>Theoretically, the height of the base of a cloud can be determined using surface temperatures in °C by the empirical formula:</p>
  <div class="formula-box">Cloud Base Height = (Temperature – Dew Point) × 400 ft</div>
  <p>A larger spread between Temp and DP → higher cloud base. A smaller spread (near-saturated air) → low cloud base.</p>

  <h3>HMR During Adiabatic Lifting</h3>
  <div class="key-rule">If there is no addition or removal of water vapour, the <strong>HMR remains CONSTANT when air is lifted adiabatically</strong>. With increase of temperature, the saturation HMR increases.</div>

  <h3>Saturation Vapour Pressure: Water vs Ice</h3>
  <div class="warning-box">
    ⚠️ At subzero temperatures, water molecules have more energy than ice molecules. Therefore, the <strong>saturation vapour pressure over water drops is MORE than over ice particles</strong>.<br><br>
    If water drops and ice particles co-exist, water drops will evaporate and condense on ice particles. This principle explains rainfall from clouds which extend above 0°C (Bergeron–Findeisen Process).<br><br>
    Super-cooled water droplets can exist in clouds up to <strong>–40°C</strong> and in CB clouds up to <strong>–45°C</strong>.
  </div>
</div>
`
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
    tech: [
      { id: "all", label: "🌐 All Chapters" },
      { id: "aerodynamics", label: "🔧 Aerodynamics & Flight Dynamics" }
    ]
  };

  // ── SUBJECT DETAIL PANEL (Met tiles view) ──
  function openSubjectDetailPanel(subject) {
    activeSubjectForDetail = subject;
    currentMode = "test";

    const meta = subjectMeta[subject];
    subjectDetailIcon.textContent = meta.icon;
    subjectDetailTitle.textContent = meta.title;
    subjectDetailSub.textContent = meta.sub;

    // Reset slider
    modeTestBtn.classList.add("active");
    modeNotesBtn.classList.remove("active");
    modeSliderThumb.classList.remove("notes-mode");
    modeHint.textContent = "Click a chapter to start a practice test";

    // Render chapter tiles
    renderChapterTiles(subject);

    // Show the panel
    hibaDashboard.classList.add("hidden");
    subjectDetailPanel.classList.remove("hidden");
    window.scrollTo(0, 0);
  }

  function renderChapterTiles(subject) {
    chapterTilesGrid.innerHTML = "";

    const chapters = subject === "met" ? MET_CHAPTERS : [];

    // Count questions per section
    const sectionCounts = {};
    QUESTIONS.forEach(q => {
      if (q.subject === subject) {
        const key = q.section || "all";
        sectionCounts[key] = (sectionCounts[key] || 0) + 1;
      }
    });
    const totalSubjectQs = QUESTIONS.filter(q => q.subject === subject).length;

    // "All chapters" tile first
    const allTile = document.createElement("div");
    allTile.className = "chapter-tile";
    allTile.innerHTML = `
      <span class="ct-icon">🌐</span>
      <span class="ct-name">All Chapters</span>
      <div class="ct-badges">
        <span class="ct-qcount">${totalSubjectQs} Questions</span>
      </div>
    `;
    allTile.addEventListener("click", () => handleChapterTileClick("all", null));
    chapterTilesGrid.appendChild(allTile);

    chapters.forEach(ch => {
      const qCount = sectionCounts[ch.id] || 0;
      const tile = document.createElement("div");
      tile.className = "chapter-tile" + (ch.hasNotes ? " has-notes" : "");
      tile.innerHTML = `
        <span class="ct-icon">${ch.icon}</span>
        <span class="ct-name">${ch.name}</span>
        <div class="ct-badges">
          <span class="ct-qcount">${qCount > 0 ? qCount + " Questions" : "No questions yet"}</span>
          ${ch.hasNotes
            ? '<span class="ct-notes-badge">📖 Notes Available</span>'
            : '<span class="ct-no-notes">Notes Coming Soon</span>'
          }
        </div>
      `;
      tile.addEventListener("click", () => handleChapterTileClick(ch.id, ch));
      chapterTilesGrid.appendChild(tile);
    });
  }

  function handleChapterTileClick(sectionId, chapterData) {
    activeSection = sectionId;
    activeTopic = "all";

    if (currentMode === "notes") {
      if (chapterData && chapterData.hasNotes && CHAPTER_NOTES[sectionId]) {
        openNotesReader(chapterData);
      } else if (sectionId === "all") {
        alert("Please select a specific chapter to read notes.");
      } else {
        alert("Notes for this chapter are coming soon! Switch to 'Take a Test' mode to practice questions.");
      }
    } else {
      // Test mode
      startExamFlight();
    }
  }

  // Mode slider
  modeTestBtn.addEventListener("click", () => {
    currentMode = "test";
    modeTestBtn.classList.add("active");
    modeNotesBtn.classList.remove("active");
    modeSliderThumb.classList.remove("notes-mode");
    modeHint.textContent = "Click a chapter to start a practice test";
  });

  modeNotesBtn.addEventListener("click", () => {
    currentMode = "notes";
    modeNotesBtn.classList.add("active");
    modeTestBtn.classList.remove("active");
    modeSliderThumb.classList.add("notes-mode");
    modeHint.textContent = "Click a chapter with 📖 Notes Available to read";
  });

  // Back button from subject detail to hiba dashboard
  subjectBackBtn.addEventListener("click", () => {
    subjectDetailPanel.classList.add("hidden");
    hibaDashboard.classList.remove("hidden");
    subjectCards.forEach(c => c.classList.remove("active"));
    chaptersSection.classList.add("hidden");
    window.scrollTo(0, 0);
  });

  subjectDetailHomeBtn.addEventListener("click", () => {
    window.location.hash = "#/";
  });

  // ── NOTES READER ──
  function openNotesReader(chapterData) {
    notesReaderIcon.textContent = chapterData.icon;
    notesReaderTitle.textContent = chapterData.name;
    notesReaderBody.innerHTML = CHAPTER_NOTES[chapterData.id] || "<p>Notes not available.</p>";
    notesReaderPanel.classList.remove("hidden");
    notesReaderBody.scrollTop = 0;

    // Wire the "Take Test on This Chapter" button
    notesReaderStartTest.onclick = () => {
      notesReaderPanel.classList.add("hidden");
      currentMode = "test";
      modeTestBtn.classList.add("active");
      modeNotesBtn.classList.remove("active");
      modeSliderThumb.classList.remove("notes-mode");
      modeHint.textContent = "Click a chapter to start a practice test";
      activeSection = chapterData.id;
      activeTopic = "all";
      startExamFlight();
    };
  }

  notesReaderBack.addEventListener("click", () => {
    notesReaderPanel.classList.add("hidden");
  });

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
    window.location.hash = "#/exam";
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

    // 1. Accuracy by Subject
    mentorSubjectList.innerHTML = "";
    const subjectLabelNames = {
      nav: "🧭 General Navigation",
      reg: "📜 Air Regulations",
      met: "🌦️ Aviation Meteorology",
      tech: "🔧 Technical General"
    };

    const subjectStats = {
      nav: { total: 0, correct: 0 },
      reg: { total: 0, correct: 0 },
      met: { total: 0, correct: 0 },
      tech: { total: 0, correct: 0 }
    };

    if (stats.answeredIndices) {
      for (const [key, status] of Object.entries(stats.answeredIndices)) {
        if (status === "skipped") continue;
        const subject = key.split('_')[0];
        if (subjectStats[subject]) {
          subjectStats[subject].total++;
          if (status === "correct") {
            subjectStats[subject].correct++;
          }
        }
      }
    }

    const subjects = ['nav', 'reg', 'met', 'tech'];
    subjects.forEach(sub => {
      const subData = subjectStats[sub];
      const subAcc = subData.total > 0 ? Math.round((subData.correct / subData.total) * 100) : 0;
      
      const row = document.createElement("div");
      row.className = "progress-row";
      
      const details = document.createElement("div");
      details.className = "progress-details";
      details.innerHTML = `<span>${subjectLabelNames[sub]}</span><span>${subAcc}% (${subData.total} Qs)</span>`;
      
      const track = document.createElement("div");
      track.className = "progress-track";
      
      const bar = document.createElement("div");
      bar.className = "progress-fill";
      bar.style.width = `${subAcc}%`;
      
      track.appendChild(bar);
      row.appendChild(details);
      row.appendChild(track);
      mentorSubjectList.appendChild(row);
    });

    // 2. Daily efforts
    mentorActivityList.innerHTML = "";
    if (!stats.historyLog || stats.historyLog.length === 0) {
      mentorActivityList.innerHTML = "<p class='no-data-text'>No local history recorded.</p>";
    } else {
      // Group by local date string
      const dateCounts = {};
      stats.historyLog.forEach(log => {
        if (log.timestamp) {
          const dateStr = log.timestamp.split('T')[0];
          dateCounts[dateStr] = (dateCounts[dateStr] || 0) + 1;
        }
      });

      const sortedDates = Object.keys(dateCounts).sort((a,b) => new Date(b) - new Date(a));
      sortedDates.forEach(dateStr => {
        const item = document.createElement("div");
        item.className = "activity-item";
        
        const dateObj = new Date(dateStr);
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        const dateFormatted = isNaN(dateObj) ? dateStr : dateObj.toLocaleDateString('en-US', options);

        item.innerHTML = `<span>📅 ${dateFormatted}</span><span class='activity-badge'>${dateCounts[dateStr]} questions</span>`;
        mentorActivityList.appendChild(item);
      });
    }

    // 3. Chronological History table
    mentorHistoryBody.innerHTML = "";
    if (!stats.historyLog || stats.historyLog.length === 0) {
      mentorHistoryBody.innerHTML = "<tr><td colspan='4' class='center-text no-data-text'>No local attempts recorded yet.</td></tr>";
    } else {
      const subjectIconNames = {
        nav: "🧭 Navigation",
        reg: "📜 Regulations",
        met: "🌦️ Meteorology",
        tech: "🔧 Technical"
      };

      // Show last 100 items, newest first
      const displayLog = [...stats.historyLog].reverse().slice(0, 100);
      displayLog.forEach(log => {
        const tr = document.createElement("tr");
        
        const timeObj = new Date(log.timestamp);
        const timeFormatted = isNaN(timeObj) ? log.timestamp.substring(11, 19) : timeObj.toLocaleTimeString('en-US', { hour12: false });
        const dateFormatted = isNaN(timeObj) ? log.timestamp.substring(5, 10) : timeObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        
        const subName = subjectIconNames[log.subject] || log.subject;
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

    if (!stats.historyLog) stats.historyLog = [];
    stats.historyLog.push({
      timestamp: new Date().toISOString(),
      subject: q.subject,
      section: q.section,
      topic: q.topic,
      question: q.question,
      status: status
    });

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
      
      if (!stats.historyLog) stats.historyLog = [];
      stats.historyLog.push({
        timestamp: new Date().toISOString(),
        subject: q.subject,
        section: q.section,
        topic: q.topic,
        question: q.question,
        status: "skipped"
      });
      
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

  function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  // Reset and Shuffle
  function performResetAndShuffle() {
    resetStatsObject();
    saveStats();

    shuffleQuestions(QUESTIONS);

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
    window.location.hash = "#/hiba";
  });

  examHomeBtn.addEventListener("click", () => {
    closeSidebar();
    window.location.hash = "#/hiba";
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
      console.warn("Failed to load questions from backend, trying local questions.json", e);
      try {
        const localResponse = await fetch('questions.json');
        if (!localResponse.ok) throw new Error("Local JSON not available");
        QUESTIONS = await localResponse.json();
        onQuestionsReady();
      } catch (err) {
        console.warn("Local JSON fetch failed, trying static/questions.json", err);
        try {
          const staticResponse = await fetch('static/questions.json');
          if (!staticResponse.ok) throw new Error("Static JSON not available");
          QUESTIONS = await staticResponse.json();
          onQuestionsReady();
        } catch (staticErr) {
          console.warn("Static JSON fetch failed, falling back to window.QUESTIONS", staticErr);
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
    }
  }

  function onQuestionsReady() {
    shuffleQuestions(QUESTIONS);
    runExamCountdown();
    if (window.location.hash && window.location.hash !== "#/") {
      handleRoute();
    } else {
      const storedProfile = localStorage.getItem("cpl_current_profile");
      if (storedProfile) {
        selectProfile(storedProfile);
      } else {
        handleRoute();
      }
    }
  }

  function runExamCountdown() {
    const examStart = new Date("2026-07-04T09:00:00+05:30").getTime();
    const examEnd = new Date("2026-07-04T11:00:00+05:30").getTime();
    const countdownEl = document.getElementById("examCountdown");
    const badgeEl = document.querySelector("#batch8NoticeCard .nc-badge");

    if (!countdownEl) return;

    function update() {
      const now = Date.now();
      
      if (now < examStart) {
        // Before exam: countdown to start
        const diff = examStart - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("cdHours").textContent = String(hours).padStart(2, "0");
        document.getElementById("cdMins").textContent = String(minutes).padStart(2, "0");
        document.getElementById("cdSecs").textContent = String(seconds).padStart(2, "0");
        
        badgeEl.textContent = "📅 TODAY'S FLIGHT TEST";
        badgeEl.className = "nc-badge";
      } else if (now >= examStart && now < examEnd) {
        // During exam
        countdownEl.innerHTML = `
          <div class="exam-active-banner">
            <span class="active-dot"></span>
            <span class="active-text">TEST IN PROGRESS — CLEAR FOR TAKE-OFF!</span>
          </div>
        `;
        badgeEl.textContent = "🟢 ACTIVE FLIGHT TEST";
        badgeEl.className = "nc-badge status-online";
      } else {
        // After exam
        countdownEl.innerHTML = `
          <div class="exam-complete-banner">
            <span>✅ MISSION ACCOMPLISHED</span>
          </div>
        `;
        badgeEl.textContent = "🏁 EXAM COMPLETED";
        badgeEl.className = "nc-badge status-offline";
      }
    }

    update();
    setInterval(update, 1000);
  }

  loadQuestions();
});
