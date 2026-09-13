/**
 * CPL EXAM PREP PORTAL — MULTI-SUBJECT ENGINE
 * Pure client-side modular architecture with In-Depth Explanations
 */

(function () {
  'use strict';

  // ── REGISTRY & GLOBAL STATE ──
  const REGISTRY = window.EXAM_REGISTRY || {};
  const SETTINGS_KEY = 'cpl_global_settings_v2';
  const DEFAULT_DURATION_SECS = 2 * 60 * 60; // 2 Hours (7200s)

  let activeSubjectId = null;
  let activeExamMeta = null;

  let state = {
    currentIndex: 0,
    answers: {},       // { qId: selectedOptionText }
    marked: {},        // { qId: true/false }
    startTime: Date.now(),
    elapsedSeconds: 0,
    isSubmitted: false,
    submittedAt: null,
    questionDeck: []
  };

  let settings = {
    practiceMode: false,
    shuffleOptions: true,
    countdownTimer: true,
    theme: 'dark'
  };

  let timerInterval = null;
  let activeFilter = 'all';
  let activeRevFilter = 'all';

  // ── DOM ELEMENTS ──
  const elements = {
    // Header & Brand
    navBackToHubBtn: document.getElementById('navBackToHubBtn'),
    navBrandLink: document.getElementById('navBrandLink'),
    navHeaderTitle: document.getElementById('navHeaderTitle'),
    navHeaderSubtitle: document.getElementById('navHeaderSubtitle'),
    navProgressBarWrap: document.getElementById('navProgressBarWrap'),
    progressBar: document.getElementById('progressBar'),
    timerBadge: document.getElementById('timerBadge'),
    timerDisplay: document.getElementById('timerDisplay'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),
    settingsToggleBtn: document.getElementById('settingsToggleBtn'),
    mobileGridBtn: document.getElementById('mobileGridBtn'),
    mobileAnsweredCount: document.getElementById('mobileAnsweredCount'),
    topSubmitBtn: document.getElementById('topSubmitBtn'),

    // Views
    hubView: document.getElementById('hubView'),
    subjectCardsGrid: document.getElementById('subjectCardsGrid'),
    quizView: document.getElementById('quizView'),
    resultsView: document.getElementById('resultsView'),

    // Quiz Pane
    currentQNum: document.getElementById('currentQNum'),
    totalQuestionsLabel: document.getElementById('totalQuestionsLabel'),
    qStatusPill: document.getElementById('qStatusPill'),
    markBtn: document.getElementById('markBtn'),
    markBtnText: document.getElementById('markBtnText'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    instantExplanationBox: document.getElementById('instantExplanationBox'),

    // Quiz Nav
    prevBtn: document.getElementById('prevBtn'),
    clearBtn: document.getElementById('clearBtn'),
    nextBtn: document.getElementById('nextBtn'),
    finishBtn: document.getElementById('finishBtn'),

    // Palette
    sidebarTotalBadge: document.getElementById('sidebarTotalBadge'),
    statAnsweredCount: document.getElementById('statAnsweredCount'),
    statMarkedCount: document.getElementById('statMarkedCount'),
    statUnansweredCount: document.getElementById('statUnansweredCount'),
    statAnsweredCountMobile: document.getElementById('statAnsweredCountMobile'),
    statMarkedCountMobile: document.getElementById('statMarkedCountMobile'),
    statUnansweredCountMobile: document.getElementById('statUnansweredCountMobile'),
    questionsGridDesktop: document.getElementById('questionsGridDesktop'),
    questionsGridMobile: document.getElementById('questionsGridMobile'),
    paletteSubmitBtn: document.getElementById('paletteSubmitBtn'),
    mobilePaletteSubmitBtn: document.getElementById('mobilePaletteSubmitBtn'),
    pFilterBtns: document.querySelectorAll('.p-filter-btn'),

    // Results
    resultsVerdictBadge: document.getElementById('resultsVerdictBadge'),
    resultsExamTitle: document.getElementById('resultsExamTitle'),
    resultsExamSubtitle: document.getElementById('resultsExamSubtitle'),
    scorePercent: document.getElementById('scorePercent'),
    scoreFraction: document.getElementById('scoreFraction'),
    resCorrectCount: document.getElementById('resCorrectCount'),
    resIncorrectCount: document.getElementById('resIncorrectCount'),
    resSkippedCount: document.getElementById('resSkippedCount'),
    resTimeSpent: document.getElementById('resTimeSpent'),
    returnToHubFromResultsBtn: document.getElementById('returnToHubFromResultsBtn'),
    retakeAllBtn: document.getElementById('retakeAllBtn'),
    retakeMistakesBtn: document.getElementById('retakeMistakesBtn'),
    jumpToReviewBtn: document.getElementById('jumpToReviewBtn'),
    reviewSection: document.getElementById('reviewSection'),
    reviewList: document.getElementById('reviewList'),
    revTotalCount: document.getElementById('revTotalCount'),
    revWrongCount: document.getElementById('revWrongCount'),
    revRightCount: document.getElementById('revRightCount'),
    revMarkedCount: document.getElementById('revMarkedCount'),
    revFilterBtns: document.querySelectorAll('.rev-filter-btn'),

    // Modals
    submitModalEl: document.getElementById('submitModal'),
    modalAnsweredCount: document.getElementById('modalAnsweredCount'),
    modalMarkedCount: document.getElementById('modalMarkedCount'),
    modalUnansweredCount: document.getElementById('modalUnansweredCount'),
    unansweredWarning: document.getElementById('unansweredWarning'),
    modalUnansweredWarnCount: document.getElementById('modalUnansweredWarnCount'),
    modalConfirmBtn: document.getElementById('modalConfirmBtn'),

    settingsModalEl: document.getElementById('settingsModal'),
    settingPracticeMode: document.getElementById('settingPracticeMode'),
    settingShuffleOptions: document.getElementById('settingShuffleOptions'),
    settingCountdownTimer: document.getElementById('settingCountdownTimer'),
    resetExamBtn: document.getElementById('resetExamBtn')
  };

  let submitModalInstance = null;
  let settingsModalInstance = null;

  // ── INITIALIZATION ──
  function init() {
    loadSettings();
    applyTheme(settings.theme);

    if (window.bootstrap) {
      if (elements.submitModalEl) submitModalInstance = new bootstrap.Modal(elements.submitModalEl);
      if (elements.settingsModalEl) settingsModalInstance = new bootstrap.Modal(elements.settingsModalEl);
    }

    setupEventListeners();
    renderSubjectHub();
    showHubView();
  }

  // ── SETTINGS & THEME ──
  function loadSettings() {
    try {
      const saved = localStorage.getItem(SETTINGS_KEY);
      if (saved) settings = Object.assign(settings, JSON.parse(saved));
    } catch (e) {}

    if (elements.settingPracticeMode) elements.settingPracticeMode.checked = settings.practiceMode;
    if (elements.settingShuffleOptions) elements.settingShuffleOptions.checked = settings.shuffleOptions;
    if (elements.settingCountdownTimer) elements.settingCountdownTimer.checked = settings.countdownTimer;
  }

  function saveSettings() {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {}
  }

  function applyTheme(theme) {
    settings.theme = theme;
    document.documentElement.setAttribute('data-bs-theme', theme);
    if (elements.themeIcon) {
      elements.themeIcon.className = theme === 'light' ? 'bi bi-sun-fill text-warning' : 'bi bi-moon-stars-fill text-info';
    }
    saveSettings();
  }

  function toggleTheme() {
    applyTheme(settings.theme === 'light' ? 'dark' : 'light');
  }

  // ── SUBJECT HUB RENDERING ──
  function renderSubjectHub() {
    elements.subjectCardsGrid.innerHTML = '';
    const subjectKeys = Object.keys(REGISTRY);

    if (subjectKeys.length === 0) {
      elements.subjectCardsGrid.innerHTML = '<div class="col-12 text-center text-secondary py-4">No exam subjects found.</div>';
      return;
    }

    subjectKeys.forEach((key, index) => {
      const subject = REGISTRY[key];
      const qCount = subject.questions ? subject.questions.length : 0;
      const colorClass = subject.badgeColor || 'info';
      const iconClass = subject.icon || 'bi-airplane-fill';

      const savedScore = localStorage.getItem(`cpl_score_${key}`);
      let scoreBadgeHtml = '';
      if (savedScore !== null) {
        scoreBadgeHtml = `<span class="badge bg-success-subtle text-success border border-success-subtle">Best: ${savedScore}%</span>`;
      }

      const col = document.createElement('div');
      col.className = 'col-12 col-md-6';
      col.innerHTML = `
        <div class="subject-card shadow-sm">
          <div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div class="subject-icon-box bg-${colorClass}-subtle text-${colorClass}">
                <i class="bi ${iconClass}"></i>
              </div>
              <div class="d-flex align-items-center gap-2">
                ${scoreBadgeHtml}
                <span class="badge bg-secondary-subtle text-secondary border">Section ${index + 1}</span>
              </div>
            </div>

            <h3 class="subject-title mb-1">${escapeHtml(subject.title)}</h3>
            <p class="subject-desc mb-3">${escapeHtml(subject.subtitle)}</p>

            <div class="d-flex align-items-center gap-3 text-secondary small mb-4">
              <span><i class="bi bi-card-list me-1"></i> ${qCount} Questions</span>
              <span><i class="bi bi-clock me-1"></i> ${subject.durationMinutes || 120} Mins</span>
              <span><i class="bi bi-award me-1"></i> Pass: 70%</span>
            </div>
          </div>

          <div class="d-flex gap-2">
            <button class="btn btn-primary flex-grow-1 fw-semibold py-2 start-exam-btn" data-subject-id="${key}" data-mode="exam">
              <i class="bi bi-play-circle-fill me-1"></i> Start Mock Exam
            </button>
            <button class="btn btn-outline-secondary fw-semibold py-2 start-exam-btn" data-subject-id="${key}" data-mode="practice" title="Instant practice feedback mode">
              <i class="bi bi-lightning-charge-fill text-warning"></i> Practice
            </button>
          </div>
        </div>
      `;

      elements.subjectCardsGrid.appendChild(col);
    });

    document.querySelectorAll('.start-exam-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const subId = btn.dataset.subjectId;
        const mode = btn.dataset.mode;
        startSubjectExam(subId, mode === 'practice');
      });
    });
  }

  // ── VIEW SWITCHING ──
  function showHubView() {
    if (timerInterval) clearInterval(timerInterval);
    activeSubjectId = null;
    activeExamMeta = null;

    elements.hubView.classList.remove('d-none');
    elements.quizView.classList.add('d-none');
    elements.resultsView.classList.add('d-none');

    elements.navBackToHubBtn.classList.add('d-none');
    elements.timerBadge.classList.add('d-none');
    elements.timerBadge.classList.remove('d-flex');
    elements.settingsToggleBtn.classList.add('d-none');
    elements.mobileGridBtn.classList.add('d-none');
    elements.mobileGridBtn.classList.remove('d-flex');
    elements.topSubmitBtn.classList.add('d-none');
    elements.navProgressBarWrap.classList.add('d-none');

    elements.navHeaderTitle.textContent = 'CPL Exam Hub';
    elements.navHeaderSubtitle.textContent = 'Select a Mock Test';

    renderSubjectHub();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function startSubjectExam(subjectId, isPracticeMode = false) {
    activeSubjectId = subjectId;
    activeExamMeta = REGISTRY[subjectId];
    if (!activeExamMeta) return;

    if (isPracticeMode) {
      settings.practiceMode = true;
      if (elements.settingPracticeMode) elements.settingPracticeMode.checked = true;
      saveSettings();
    }

    const stateKey = `cpl_state_${subjectId}`;
    const saved = localStorage.getItem(stateKey);
    let loadedState = null;
    if (saved) {
      try {
        loadedState = JSON.parse(saved);
      } catch (e) {}
    }

    if (loadedState && loadedState.questionDeck && loadedState.questionDeck.length > 0) {
      state = loadedState;
    } else {
      buildDeck(activeExamMeta.questions);
    }

    elements.navBackToHubBtn.classList.remove('d-none');
    elements.timerBadge.classList.remove('d-none');
    elements.timerBadge.classList.add('d-flex');
    elements.settingsToggleBtn.classList.remove('d-none');
    elements.mobileGridBtn.classList.remove('d-none');
    elements.mobileGridBtn.classList.add('d-flex');
    elements.topSubmitBtn.classList.remove('d-none');
    elements.topSubmitBtn.classList.add('d-lg-inline-flex');
    elements.navProgressBarWrap.classList.remove('d-none');

    elements.navHeaderTitle.textContent = activeExamMeta.title;
    elements.navHeaderSubtitle.textContent = `${state.questionDeck.length} Questions • CPL Exam`;
    elements.totalQuestionsLabel.textContent = `of ${state.questionDeck.length}`;
    if (elements.sidebarTotalBadge) {
      elements.sidebarTotalBadge.textContent = `${state.questionDeck.length} Questions`;
    }

    elements.hubView.classList.add('d-none');
    elements.resultsView.classList.add('d-none');
    elements.quizView.classList.remove('d-none');

    buildPaletteGrids();
    startTimer();

    if (state.isSubmitted) {
      showResults();
    } else {
      renderCurrentQuestion();
      updatePaletteUI();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── DECK GENERATION & PERSISTENCE ──
  function buildDeck(sourceList) {
    const questions = sourceList || (activeExamMeta ? activeExamMeta.questions : []);
    
    state.questionDeck = questions.map((q) => {
      const correctIdx = q.answer !== undefined ? q.answer : 0;
      const correctText = q.options[correctIdx] !== undefined ? q.options[correctIdx] : q.options[0];
      let optionsList = [...q.options];

      if (settings.shuffleOptions) {
        for (let i = optionsList.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [optionsList[i], optionsList[j]] = [optionsList[j], optionsList[i]];
        }
      }

      return {
        id: q.id,
        question: q.question,
        options: optionsList,
        correctText: correctText,
        detailed_explanation: q.detailed_explanation || null,
        explanation: q.explanation || `Correct Answer: ${correctText}`
      };
    });

    state.currentIndex = 0;
    state.answers = {};
    state.marked = {};
    state.startTime = Date.now();
    state.elapsedSeconds = 0;
    state.isSubmitted = false;
    saveState();
  }

  function saveState() {
    if (!activeSubjectId) return;
    try {
      localStorage.setItem(`cpl_state_${activeSubjectId}`, JSON.stringify(state));
    } catch (e) {}
  }

  function resetExamState() {
    if (!activeSubjectId) return;
    localStorage.removeItem(`cpl_state_${activeSubjectId}`);
    buildDeck(activeExamMeta.questions);
    saveState();
  }

  // ── TIMER ──
  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
      if (state.isSubmitted) {
        clearInterval(timerInterval);
        return;
      }

      state.elapsedSeconds++;
      saveState();
      renderTimer();

      if (settings.countdownTimer && state.elapsedSeconds >= DEFAULT_DURATION_SECS) {
        clearInterval(timerInterval);
        submitExam();
      }
    }, 1000);

    renderTimer();
  }

  function renderTimer() {
    if (!elements.timerDisplay) return;

    if (settings.countdownTimer) {
      const remaining = Math.max(0, DEFAULT_DURATION_SECS - state.elapsedSeconds);
      const hours = Math.floor(remaining / 3600);
      const mins = Math.floor((remaining % 3600) / 60);
      const secs = remaining % 60;
      elements.timerDisplay.textContent = 
        `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

      if (remaining <= 600) {
        elements.timerBadge.classList.add('timer-warning');
      } else {
        elements.timerBadge.classList.remove('timer-warning');
      }
    } else {
      const hours = Math.floor(state.elapsedSeconds / 3600);
      const mins = Math.floor((state.elapsedSeconds % 3600) / 60);
      const secs = state.elapsedSeconds % 60;
      elements.timerDisplay.textContent = 
        `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
  }

  // ── DETAILED EXPLANATION HTML BUILDER ──
  function buildDetailedExplanationHtml(q, userAns) {
    const isAnswered = userAns !== undefined;
    const isCorrect = userAns === q.correctText;
    const det = q.detailed_explanation || {};

    const whyRightText = det.why_right || q.explanation || `The correct answer is: ${q.correctText}`;
    const whyOthersWrong = det.why_others_wrong || [];
    const keyTakeaway = det.key_takeaway || `Key Concept: ${q.correctText}`;

    let statusBadge = '';
    if (isAnswered) {
      statusBadge = isCorrect 
        ? '<span class="badge bg-success px-2 py-1"><i class="bi bi-check-circle-fill me-1"></i> Your Answer is Correct</span>'
        : '<span class="badge bg-danger px-2 py-1"><i class="bi bi-x-circle-fill me-1"></i> Your Answer is Incorrect</span>';
    }

    let wrongListHtml = '';
    if (whyOthersWrong && whyOthersWrong.length > 0) {
      wrongListHtml = `
        <div class="exp-section-title text-danger mt-3">
          <i class="bi bi-x-octagon-fill"></i> Why Other Options Are Incorrect:
        </div>
        <ul class="exp-why-wrong-list">
          ${whyOthersWrong.map(item => `<li class="exp-why-wrong-item">❌ ${escapeHtml(item)}</li>`).join('')}
        </ul>
      `;
    }

    return `
      <div class="explanation-card-detailed">
        
        <!-- Header with correct answer highlight -->
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3 pb-2 border-bottom">
          <div class="d-flex align-items-center gap-2">
            <span class="badge bg-info-subtle text-info border border-info-subtle px-2 py-1"><i class="bi bi-lightbulb-fill"></i> Detailed Solution</span>
            ${statusBadge}
          </div>
        </div>

        <!-- 1. WHICH IS RIGHT CALLOUT -->
        <div class="exp-correct-callout">
          <div class="small fw-bold text-success text-uppercase mb-1"><i class="bi bi-check-circle-fill"></i> Correct Option:</div>
          <div class="fw-bold fs-6 text-success-emphasis">${escapeHtml(q.correctText)}</div>
        </div>

        <!-- 2. WHY IT IS RIGHT -->
        <div class="exp-section-title text-success">
          <i class="bi bi-patch-check-fill"></i> Why It Is Right:
        </div>
        <div class="exp-why-right">
          ${escapeHtml(whyRightText)}
        </div>

        <!-- 3. WHY IT ISN'T RIGHT (DISTRACTOR BREAKDOWN) -->
        ${wrongListHtml}

        <!-- 4. KEY CONCEPT TAKEAWAY -->
        <div class="exp-takeaway-box mt-3">
          <i class="bi bi-bookmark-star-fill me-1"></i> <strong>Key Takeaway:</strong> ${escapeHtml(keyTakeaway)}
        </div>

      </div>
    `;
  }

  // ── RENDER QUESTION ──
  function renderCurrentQuestion() {
    if (!state.questionDeck || state.questionDeck.length === 0) return;

    const q = state.questionDeck[state.currentIndex];
    const qNum = state.currentIndex + 1;
    const total = state.questionDeck.length;

    elements.currentQNum.textContent = `Question ${qNum}`;
    elements.questionText.textContent = q.question;

    const isAnswered = state.answers[q.id] !== undefined;
    const isMarked = !!state.marked[q.id];

    if (isAnswered) {
      elements.qStatusPill.textContent = 'Answered';
      elements.qStatusPill.className = 'badge rounded-pill bg-success-subtle text-success border border-success-subtle px-2 py-1 small';
    } else {
      elements.qStatusPill.textContent = 'Unanswered';
      elements.qStatusPill.className = 'badge rounded-pill bg-secondary-subtle text-secondary border px-2 py-1 small';
    }

    if (isMarked) {
      elements.markBtn.className = 'btn btn-sm btn-warning rounded-pill px-3 py-1 d-flex align-items-center gap-1';
      elements.markBtnText.textContent = 'Marked';
    } else {
      elements.markBtn.className = 'btn btn-sm btn-outline-warning rounded-pill px-3 py-1 d-flex align-items-center gap-1';
      elements.markBtnText.textContent = 'Mark for Review';
    }

    const letters = ['A', 'B', 'C', 'D'];
    elements.optionsContainer.innerHTML = '';

    q.options.forEach((optText, optIdx) => {
      const optionBtn = document.createElement('button');
      optionBtn.type = 'button';
      optionBtn.className = 'option-card-btn';
      const isSelected = state.answers[q.id] === optText;

      if (isSelected) optionBtn.classList.add('selected');

      optionBtn.innerHTML = `
        <span class="option-letter-badge">${letters[optIdx] || optIdx + 1}</span>
        <span class="option-text">${escapeHtml(optText)}</span>
      `;

      optionBtn.addEventListener('click', () => {
        selectOption(q.id, optText);
      });

      elements.optionsContainer.appendChild(optionBtn);
    });

    // Practice Mode Instant Detailed Feedback at the Bottom
    if (settings.practiceMode && isAnswered) {
      elements.instantExplanationBox.classList.remove('d-none');
      elements.instantExplanationBox.innerHTML = buildDetailedExplanationHtml(q, state.answers[q.id]);
    } else {
      elements.instantExplanationBox.classList.add('d-none');
    }

    elements.prevBtn.disabled = state.currentIndex === 0;
    elements.nextBtn.disabled = state.currentIndex === total - 1;

    updateProgressBar();
  }

  function selectOption(qId, optionText) {
    if (state.isSubmitted) return;
    state.answers[qId] = optionText;
    saveState();
    renderCurrentQuestion();
    updatePaletteUI();
  }

  function clearOption() {
    const q = state.questionDeck[state.currentIndex];
    if (!q || state.isSubmitted) return;
    delete state.answers[q.id];
    saveState();
    renderCurrentQuestion();
    updatePaletteUI();
  }

  function toggleMark() {
    const q = state.questionDeck[state.currentIndex];
    if (!q || state.isSubmitted) return;
    state.marked[q.id] = !state.marked[q.id];
    saveState();
    renderCurrentQuestion();
    updatePaletteUI();
  }

  function goToQuestion(idx) {
    if (idx < 0 || idx >= state.questionDeck.length) return;
    state.currentIndex = idx;
    saveState();
    renderCurrentQuestion();
    updatePaletteUI();

    const offcanvasEl = document.getElementById('paletteOffcanvas');
    if (offcanvasEl && window.bootstrap) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (bsOffcanvas) bsOffcanvas.hide();
    }
  }

  // ── PALETTE GRID ──
  function buildPaletteGrids() {
    [elements.questionsGridDesktop, elements.questionsGridMobile].forEach(gridEl => {
      if (!gridEl) return;
      gridEl.innerHTML = '';
      const total = state.questionDeck.length;

      for (let i = 0; i < total; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'q-grid-item-btn';
        btn.textContent = i + 1;
        btn.dataset.index = i;

        btn.addEventListener('click', () => {
          goToQuestion(i);
        });

        gridEl.appendChild(btn);
      }
    });
  }

  function updatePaletteUI() {
    const total = state.questionDeck.length;
    let answeredCount = 0;
    let markedCount = 0;

    const desktopBtns = elements.questionsGridDesktop ? elements.questionsGridDesktop.querySelectorAll('.q-grid-item-btn') : [];
    const mobileBtns = elements.questionsGridMobile ? elements.questionsGridMobile.querySelectorAll('.q-grid-item-btn') : [];

    state.questionDeck.forEach((q, i) => {
      const isAnswered = state.answers[q.id] !== undefined;
      const isMarked = !!state.marked[q.id];
      const isCurrent = state.currentIndex === i;

      if (isAnswered) answeredCount++;
      if (isMarked) markedCount++;

      let isVisible = true;
      if (activeFilter === 'answered' && !isAnswered) isVisible = false;
      if (activeFilter === 'marked' && !isMarked) isVisible = false;
      if (activeFilter === 'unanswered' && isAnswered) isVisible = false;

      [desktopBtns[i], mobileBtns[i]].forEach(btn => {
        if (btn) {
          btn.className = 'q-grid-item-btn';
          if (isCurrent) btn.classList.add('current');
          if (isAnswered) btn.classList.add('answered');
          if (isMarked) btn.classList.add('marked');
          btn.style.display = isVisible ? 'flex' : 'none';
        }
      });
    });

    const unansweredCount = total - answeredCount;

    if (elements.statAnsweredCount) elements.statAnsweredCount.textContent = answeredCount;
    if (elements.statMarkedCount) elements.statMarkedCount.textContent = markedCount;
    if (elements.statUnansweredCount) elements.statUnansweredCount.textContent = unansweredCount;

    if (elements.statAnsweredCountMobile) elements.statAnsweredCountMobile.textContent = answeredCount;
    if (elements.statMarkedCountMobile) elements.statMarkedCountMobile.textContent = markedCount;
    if (elements.statUnansweredCountMobile) elements.statUnansweredCountMobile.textContent = unansweredCount;

    if (elements.mobileAnsweredCount) elements.mobileAnsweredCount.textContent = answeredCount;

    updateProgressBar();
  }

  function updateProgressBar() {
    const total = state.questionDeck.length;
    const answeredCount = Object.keys(state.answers).length;
    const percent = total > 0 ? Math.round((answeredCount / total) * 100) : 0;
    if (elements.progressBar) {
      elements.progressBar.style.width = `${percent}%`;
    }
  }

  // ── SUBMISSION & RESULTS ──
  function openSubmitModal() {
    const total = state.questionDeck.length;
    const answeredCount = Object.keys(state.answers).length;
    const markedCount = Object.keys(state.marked).filter(k => state.marked[k]).length;
    const unansweredCount = total - answeredCount;

    elements.modalAnsweredCount.textContent = answeredCount;
    elements.modalMarkedCount.textContent = markedCount;
    elements.modalUnansweredCount.textContent = unansweredCount;

    if (unansweredCount > 0) {
      elements.unansweredWarning.classList.remove('d-none');
      elements.modalUnansweredWarnCount.textContent = unansweredCount;
    } else {
      elements.unansweredWarning.classList.add('d-none');
    }

    if (submitModalInstance) submitModalInstance.show();
  }

  function submitExam() {
    if (submitModalInstance) submitModalInstance.hide();

    state.isSubmitted = true;
    state.submittedAt = Date.now();
    saveState();

    if (timerInterval) clearInterval(timerInterval);
    showResults();
  }

  function showResults() {
    elements.quizView.classList.add('d-none');
    elements.resultsView.classList.remove('d-none');

    let correct = 0;
    let incorrect = 0;
    let skipped = 0;

    state.questionDeck.forEach((q) => {
      const userAns = state.answers[q.id];
      if (userAns === undefined) {
        skipped++;
      } else if (userAns === q.correctText) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const total = state.questionDeck.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;

    if (activeSubjectId) {
      const prevBest = parseInt(localStorage.getItem(`cpl_score_${activeSubjectId}`) || '0', 10);
      if (percentage > prevBest) {
        localStorage.setItem(`cpl_score_${activeSubjectId}`, String(percentage));
      }
    }

    elements.resultsVerdictBadge.textContent = passed ? 'PASSED 🎉' : 'NEEDS REVIEW ⚠️';
    elements.resultsVerdictBadge.className = `badge rounded-pill px-3 py-2 fs-6 fw-bold ${passed ? 'bg-success' : 'bg-danger'}`;

    elements.resultsExamTitle.textContent = `${activeExamMeta ? activeExamMeta.title : 'Mock Exam'} Completed`;
    elements.resultsExamSubtitle.textContent = `${activeExamMeta ? activeExamMeta.subtitle : 'Summary'}`;

    elements.scorePercent.textContent = `${percentage}%`;
    elements.scoreFraction.textContent = `${correct} / ${total} Correct`;

    elements.resCorrectCount.textContent = correct;
    elements.resIncorrectCount.textContent = incorrect;
    elements.resSkippedCount.textContent = skipped;

    const mins = Math.floor(state.elapsedSeconds / 60);
    const secs = state.elapsedSeconds % 60;
    elements.resTimeSpent.textContent = `${mins}m ${secs}s`;

    elements.revTotalCount.textContent = total;
    elements.revWrongCount.textContent = incorrect;
    elements.revRightCount.textContent = correct;
    elements.revMarkedCount.textContent = Object.keys(state.marked).filter(k => state.marked[k]).length;

    renderReviewList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── REVIEW LIST RENDERING ──
  function renderReviewList() {
    elements.reviewList.innerHTML = '';

    state.questionDeck.forEach((q, idx) => {
      const userAns = state.answers[q.id];
      const isCorrect = userAns === q.correctText;
      const isSkipped = userAns === undefined;
      const isMarked = !!state.marked[q.id];

      if (activeRevFilter === 'incorrect' && (isCorrect || isSkipped)) return;
      if (activeRevFilter === 'correct' && !isCorrect) return;
      if (activeRevFilter === 'marked' && !isMarked) return;

      const card = document.createElement('div');
      card.className = `rev-item-card ${isSkipped ? 'is-skipped' : (isCorrect ? 'is-correct' : 'is-incorrect')}`;

      let badgeHtml = '';
      if (isSkipped) {
        badgeHtml = '<span class="badge bg-secondary-subtle text-secondary border">Skipped</span>';
      } else if (isCorrect) {
        badgeHtml = '<span class="badge bg-success-subtle text-success border border-success-subtle">Correct ✓</span>';
      } else {
        badgeHtml = '<span class="badge bg-danger-subtle text-danger border border-danger-subtle">Incorrect ✗</span>';
      }

      let optionsHtml = '';
      const letters = ['A', 'B', 'C', 'D'];
      q.options.forEach((optText, optIdx) => {
        const isThisCorrect = optText === q.correctText;
        const isThisUserChoice = optText === userAns;
        let optRowClass = 'rev-opt-row';

        if (isThisCorrect) {
          optRowClass += ' correct-ans';
        } else if (isThisUserChoice && !isThisCorrect) {
          optRowClass += ' user-wrong';
        }

        let prefix = '';
        if (isThisUserChoice && isThisCorrect) prefix = '✓ (Your Answer) ';
        else if (isThisUserChoice && !isThisCorrect) prefix = '✗ (Your Choice) ';
        else if (isThisCorrect) prefix = '✓ (Correct Answer) ';

        optionsHtml += `
          <div class="${optRowClass}">
            <strong>${letters[optIdx]}.</strong>
            <span>${prefix}${escapeHtml(optText)}</span>
          </div>
        `;
      });

      const explanationBottomHtml = buildDetailedExplanationHtml(q, userAns);

      card.innerHTML = `
        <div class="d-flex align-items-center justify-content-between mb-2">
          <span class="fw-bold text-info font-display">Question ${idx + 1} ${isMarked ? '★' : ''}</span>
          ${badgeHtml}
        </div>
        <div class="fw-semibold text-body mb-3">${escapeHtml(q.question)}</div>
        <div class="d-flex flex-column gap-2 mb-3">${optionsHtml}</div>
        <div class="mt-3">
          ${explanationBottomHtml}
        </div>
      `;

      elements.reviewList.appendChild(card);
    });
  }

  // ── RETAKE FUNCTIONS ──
  function retakeFullExam() {
    if (confirm(`Retake ${activeExamMeta ? activeExamMeta.title : 'this mock'} from the beginning?`)) {
      resetExamState();
      elements.resultsView.classList.add('d-none');
      elements.quizView.classList.remove('d-none');
      buildPaletteGrids();
      startTimer();
      renderCurrentQuestion();
      updatePaletteUI();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function practiceMistakesOnly() {
    const mistakes = state.questionDeck.filter(q => {
      const ans = state.answers[q.id];
      return ans === undefined || ans !== q.correctText;
    });

    if (mistakes.length === 0) {
      alert('Outstanding job! You scored 100% with no mistakes to practice.');
      return;
    }

    if (confirm(`Start targeted practice with the ${mistakes.length} question(s) you missed or skipped?`)) {
      buildDeck(mistakes);
      elements.resultsView.classList.add('d-none');
      elements.quizView.classList.remove('d-none');
      buildPaletteGrids();
      startTimer();
      renderCurrentQuestion();
      updatePaletteUI();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ── EVENT LISTENERS ──
  function setupEventListeners() {
    elements.themeToggleBtn.addEventListener('click', toggleTheme);
    elements.navBackToHubBtn.addEventListener('click', showHubView);
    elements.navBrandLink.addEventListener('click', (e) => {
      e.preventDefault();
      showHubView();
    });
    elements.returnToHubFromResultsBtn.addEventListener('click', showHubView);
    
    elements.settingsToggleBtn.addEventListener('click', () => {
      if (settingsModalInstance) settingsModalInstance.show();
    });

    elements.settingPracticeMode.addEventListener('change', (e) => {
      settings.practiceMode = e.target.checked;
      saveSettings();
      renderCurrentQuestion();
    });

    elements.settingShuffleOptions.addEventListener('change', (e) => {
      settings.shuffleOptions = e.target.checked;
      saveSettings();
    });

    elements.settingCountdownTimer.addEventListener('change', (e) => {
      settings.countdownTimer = e.target.checked;
      saveSettings();
      renderTimer();
    });

    elements.resetExamBtn.addEventListener('click', () => {
      if (confirm('This will erase your progress on this mock test and restart. Proceed?')) {
        if (settingsModalInstance) settingsModalInstance.hide();
        resetExamState();
        elements.resultsView.classList.add('d-none');
        elements.quizView.classList.remove('d-none');
        buildPaletteGrids();
        startTimer();
        renderCurrentQuestion();
        updatePaletteUI();
      }
    });

    elements.prevBtn.addEventListener('click', () => {
      goToQuestion(state.currentIndex - 1);
    });

    elements.nextBtn.addEventListener('click', () => {
      goToQuestion(state.currentIndex + 1);
    });

    elements.clearBtn.addEventListener('click', clearOption);
    elements.markBtn.addEventListener('click', toggleMark);

    if (elements.topSubmitBtn) elements.topSubmitBtn.addEventListener('click', openSubmitModal);
    if (elements.finishBtn) elements.finishBtn.addEventListener('click', openSubmitModal);
    if (elements.paletteSubmitBtn) elements.paletteSubmitBtn.addEventListener('click', openSubmitModal);
    if (elements.mobilePaletteSubmitBtn) elements.mobilePaletteSubmitBtn.addEventListener('click', openSubmitModal);

    elements.modalConfirmBtn.addEventListener('click', submitExam);

    elements.retakeAllBtn.addEventListener('click', retakeFullExam);
    elements.retakeMistakesBtn.addEventListener('click', practiceMistakesOnly);
    elements.jumpToReviewBtn.addEventListener('click', () => {
      elements.reviewSection.scrollIntoView({ behavior: 'smooth' });
    });

    elements.pFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.pFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        updatePaletteUI();
      });
    });

    elements.revFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.revFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeRevFilter = btn.dataset.revFilter;
        renderReviewList();
      });
    });

    document.addEventListener('keydown', handleKeyboardShortcuts);
  }

  function handleKeyboardShortcuts(e) {
    if (state.isSubmitted || elements.quizView.classList.contains('d-none')) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const q = state.questionDeck[state.currentIndex];
    if (!q) return;

    const key = e.key.toLowerCase();
    if (['1', 'a'].includes(key) && q.options[0]) selectOption(q.id, q.options[0]);
    if (['2', 'b'].includes(key) && q.options[1]) selectOption(q.id, q.options[1]);
    if (['3', 'c'].includes(key) && q.options[2]) selectOption(q.id, q.options[2]);
    if (['4', 'd'].includes(key) && q.options[3]) selectOption(q.id, q.options[3]);

    if (e.key === 'ArrowRight') goToQuestion(state.currentIndex + 1);
    if (e.key === 'ArrowLeft') goToQuestion(state.currentIndex - 1);
    if (key === 'm') toggleMark();
    if (key === 'c') clearOption();
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
