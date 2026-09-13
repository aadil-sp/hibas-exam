/**
 * MET MOCK 2 — Aviation Meteorology Exam Simulator
 * Pure client-side application with Bootstrap 5
 */

(function () {
  'use strict';

  // ── CONSTANTS & STATE ──
  const TOTAL_QUESTIONS = window.EXAM_QUESTIONS ? window.EXAM_QUESTIONS.length : 100;
  const STORAGE_KEY = 'met_mock_2_state_v2';
  const SETTINGS_KEY = 'met_mock_2_settings_v2';
  const DEFAULT_DURATION_SECS = 2 * 60 * 60; // 2 Hours (7200s)

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
    // Header
    timerBadge: document.getElementById('timerBadge'),
    timerDisplay: document.getElementById('timerDisplay'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),
    settingsToggleBtn: document.getElementById('settingsToggleBtn'),
    mobileAnsweredCount: document.getElementById('mobileAnsweredCount'),
    topSubmitBtn: document.getElementById('topSubmitBtn'),
    progressBar: document.getElementById('progressBar'),

    // Quiz View
    quizView: document.getElementById('quizView'),
    currentQNum: document.getElementById('currentQNum'),
    qStatusPill: document.getElementById('qStatusPill'),
    markBtn: document.getElementById('markBtn'),
    markBtnText: document.getElementById('markBtnText'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    instantExplanationBox: document.getElementById('instantExplanationBox'),
    expResultBadge: document.getElementById('expResultBadge'),
    instantExpText: document.getElementById('instantExpText'),

    // Quiz Navigation
    prevBtn: document.getElementById('prevBtn'),
    clearBtn: document.getElementById('clearBtn'),
    nextBtn: document.getElementById('nextBtn'),
    finishBtn: document.getElementById('finishBtn'),

    // Palette Panes
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

    // Results View
    resultsView: document.getElementById('resultsView'),
    resultsVerdictBadge: document.getElementById('resultsVerdictBadge'),
    scorePercent: document.getElementById('scorePercent'),
    scoreFraction: document.getElementById('scoreFraction'),
    resCorrectCount: document.getElementById('resCorrectCount'),
    resIncorrectCount: document.getElementById('resIncorrectCount'),
    resSkippedCount: document.getElementById('resSkippedCount'),
    resTimeSpent: document.getElementById('resTimeSpent'),
    retakeAllBtn: document.getElementById('retakeAllBtn'),
    retakeMistakesBtn: document.getElementById('retakeMistakesBtn'),
    jumpToReviewBtn: document.getElementById('jumpToReviewBtn'),
    reviewSection: document.getElementById('reviewSection'),
    reviewList: document.getElementById('reviewList'),
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

  // Bootstrap modal instances
  let submitModalInstance = null;
  let settingsModalInstance = null;

  // ── INITIALIZATION ──
  function init() {
    loadSettings();
    applyTheme(settings.theme);

    const savedState = loadState();
    if (savedState && savedState.questionDeck && savedState.questionDeck.length > 0) {
      state = savedState;
    } else {
      buildDeck();
    }

    if (window.bootstrap) {
      if (elements.submitModalEl) submitModalInstance = new bootstrap.Modal(elements.submitModalEl);
      if (elements.settingsModalEl) settingsModalInstance = new bootstrap.Modal(elements.settingsModalEl);
    }

    setupEventListeners();
    buildPaletteGrids();
    startTimer();

    if (state.isSubmitted) {
      showResults();
    } else {
      renderCurrentQuestion();
      updatePaletteUI();
    }
  }

  // ── SETTINGS & THEME ──
  function loadSettings() {
    try {
      const saved = localStorage.getItem(SETTINGS_KEY);
      if (saved) {
        settings = Object.assign(settings, JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to parse settings:', e);
    }

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
    const nextTheme = settings.theme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
  }

  // ── PERSISTENCE ──
  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function resetState() {
    localStorage.removeItem(STORAGE_KEY);
    state = {
      currentIndex: 0,
      answers: {},
      marked: {},
      startTime: Date.now(),
      elapsedSeconds: 0,
      isSubmitted: false,
      submittedAt: null,
      questionDeck: []
    };
    buildDeck();
    saveState();
  }

  // ── QUESTION DECK PREPARATION ──
  function buildDeck(customQuestionList) {
    const sourceList = customQuestionList || (window.EXAM_QUESTIONS || []);
    
    state.questionDeck = sourceList.map((q) => {
      const correctText = q.options[q.answer];
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
        explanation: q.explanation || `Correct answer is: ${correctText}`
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

  // ── RENDER CURRENT QUESTION ──
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

      if (isSelected) {
        optionBtn.classList.add('selected');
      }

      optionBtn.innerHTML = `
        <span class="option-letter-badge">${letters[optIdx] || optIdx + 1}</span>
        <span class="option-text">${escapeHtml(optText)}</span>
      `;

      optionBtn.addEventListener('click', () => {
        selectOption(q.id, optText);
      });

      elements.optionsContainer.appendChild(optionBtn);
    });

    if (settings.practiceMode && isAnswered) {
      elements.instantExplanationBox.classList.remove('d-none');
      const isCorrect = state.answers[q.id] === q.correctText;
      elements.expResultBadge.textContent = isCorrect ? 'Correct ✓' : 'Incorrect ✗';
      elements.expResultBadge.className = `badge ${isCorrect ? 'bg-success' : 'bg-danger'}`;
      elements.instantExpText.textContent = q.explanation;
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

    // Close offcanvas if opened
    const offcanvasEl = document.getElementById('paletteOffcanvas');
    if (offcanvasEl && window.bootstrap) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (bsOffcanvas) bsOffcanvas.hide();
    }
  }

  // ── PALETTE GRID & STATS ──
  function buildPaletteGrids() {
    [elements.questionsGridDesktop, elements.questionsGridMobile].forEach(gridEl => {
      if (!gridEl) return;
      gridEl.innerHTML = '';
      const total = state.questionDeck.length || TOTAL_QUESTIONS;

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

    if (submitModalInstance) {
      submitModalInstance.show();
    }
  }

  function submitExam() {
    if (submitModalInstance) {
      submitModalInstance.hide();
    }

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

    elements.resultsVerdictBadge.textContent = passed ? 'PASSED 🎉' : 'NEEDS REVIEW ⚠️';
    elements.resultsVerdictBadge.className = `badge rounded-pill px-3 py-2 fs-6 fw-bold ${passed ? 'bg-success' : 'bg-danger'}`;

    elements.scorePercent.textContent = `${percentage}%`;
    elements.scoreFraction.textContent = `${correct} / ${total} Correct`;

    elements.resCorrectCount.textContent = correct;
    elements.resIncorrectCount.textContent = incorrect;
    elements.resSkippedCount.textContent = skipped;

    const mins = Math.floor(state.elapsedSeconds / 60);
    const secs = state.elapsedSeconds % 60;
    elements.resTimeSpent.textContent = `${mins}m ${secs}s`;

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

      card.innerHTML = `
        <div class="d-flex align-items-center justify-content-between mb-2">
          <span class="fw-bold text-info font-display">Question ${idx + 1} ${isMarked ? '★' : ''}</span>
          ${badgeHtml}
        </div>
        <div class="fw-semibold text-body mb-3">${escapeHtml(q.question)}</div>
        <div class="d-flex flex-column gap-2 mb-3">${optionsHtml}</div>
        <div class="alert alert-info py-2 px-3 mb-0 small border-info">
          <strong>💡 Key Concept & Explanation:</strong><br />
          ${escapeHtml(q.explanation)}
        </div>
      `;

      elements.reviewList.appendChild(card);
    });
  }

  // ── RETAKE FUNCTIONS ──
  function retakeFullExam() {
    if (confirm('Are you sure you want to retake MET Mock 2 from the beginning?')) {
      resetState();
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
      if (confirm('This will erase all your progress and restart the mock exam. Proceed?')) {
        if (settingsModalInstance) settingsModalInstance.hide();
        resetState();
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

    // Submitting
    if (elements.topSubmitBtn) elements.topSubmitBtn.addEventListener('click', openSubmitModal);
    if (elements.finishBtn) elements.finishBtn.addEventListener('click', openSubmitModal);
    if (elements.paletteSubmitBtn) elements.paletteSubmitBtn.addEventListener('click', openSubmitModal);
    if (elements.mobilePaletteSubmitBtn) elements.mobilePaletteSubmitBtn.addEventListener('click', openSubmitModal);

    elements.modalConfirmBtn.addEventListener('click', submitExam);

    // Results Actions
    elements.retakeAllBtn.addEventListener('click', retakeFullExam);
    elements.retakeMistakesBtn.addEventListener('click', practiceMistakesOnly);
    elements.jumpToReviewBtn.addEventListener('click', () => {
      elements.reviewSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Palette Filter buttons
    elements.pFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.pFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        updatePaletteUI();
      });
    });

    // Review Filter buttons
    elements.revFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.revFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeRevFilter = btn.dataset.revFilter;
        renderReviewList();
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardShortcuts);
  }

  function handleKeyboardShortcuts(e) {
    if (state.isSubmitted) return;
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

  // ── UTILITIES ──
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
