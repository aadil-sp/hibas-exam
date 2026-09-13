/**
 * MET MOCK 2 — Aviation Meteorology Exam Simulator
 * Pure client-side application (No backend required)
 */

(function () {
  'use strict';

  // ── CONSTANTS & STATE ──
  const TOTAL_QUESTIONS = window.EXAM_QUESTIONS ? window.EXAM_QUESTIONS.length : 100;
  const STORAGE_KEY = 'met_mock_2_state_v1';
  const SETTINGS_KEY = 'met_mock_2_settings_v1';
  const DEFAULT_DURATION_SECS = 2 * 60 * 60; // 2 Hours (7200s)

  let state = {
    currentIndex: 0,
    answers: {},       // { qId: selectedOptionText }
    marked: {},        // { qId: true/false }
    startTime: Date.now(),
    elapsedSeconds: 0,
    isSubmitted: false,
    submittedAt: null,
    // Prepared questions with shuffled options if enabled
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
    mobilePaletteBtn: document.getElementById('mobilePaletteBtn'),
    mobileAnsweredCount: document.getElementById('mobileAnsweredCount'),
    topSubmitBtn: document.getElementById('topSubmitBtn'),
    progressBar: document.getElementById('progressBar'),

    // Quiz View
    quizView: document.getElementById('quizView'),
    qNumberPill: document.getElementById('qNumberPill'),
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

    // Palette Pane
    palettePane: document.getElementById('palettePane'),
    closeMobilePaletteBtn: document.getElementById('closeMobilePaletteBtn'),
    statAnsweredCount: document.getElementById('statAnsweredCount'),
    statMarkedCount: document.getElementById('statMarkedCount'),
    statUnansweredCount: document.getElementById('statUnansweredCount'),
    questionsGrid: document.getElementById('questionsGrid'),
    paletteSubmitBtn: document.getElementById('paletteSubmitBtn'),
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
    submitModal: document.getElementById('submitModal'),
    modalAnsweredCount: document.getElementById('modalAnsweredCount'),
    modalMarkedCount: document.getElementById('modalMarkedCount'),
    modalUnansweredCount: document.getElementById('modalUnansweredCount'),
    unansweredWarning: document.getElementById('unansweredWarning'),
    modalUnansweredWarnCount: document.getElementById('modalUnansweredWarnCount'),
    modalCancelBtn: document.getElementById('modalCancelBtn'),
    modalConfirmBtn: document.getElementById('modalConfirmBtn'),

    settingsModal: document.getElementById('settingsModal'),
    settingPracticeMode: document.getElementById('settingPracticeMode'),
    settingShuffleOptions: document.getElementById('settingShuffleOptions'),
    settingCountdownTimer: document.getElementById('settingCountdownTimer'),
    resetExamBtn: document.getElementById('resetExamBtn'),
    closeSettingsBtn: document.getElementById('closeSettingsBtn')
  };

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

    setupEventListeners();
    buildPaletteGrid();
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
    document.documentElement.setAttribute('data-theme', theme);
    if (elements.themeIcon) {
      elements.themeIcon.textContent = theme === 'light' ? '☀️' : '🌙';
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
      // Correct option is always options[q.answer] in source
      const correctText = q.options[q.answer];
      let optionsList = [...q.options];

      if (settings.shuffleOptions) {
        // Fisher-Yates shuffle
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

      // Auto-submit if countdown reaches 0
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

      if (remaining <= 600) { // < 10 mins
        elements.timerBadge.classList.add('warning');
      } else {
        elements.timerBadge.classList.remove('warning');
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

    elements.currentQNum.textContent = qNum;
    elements.questionText.textContent = q.question;

    // Status pill
    const isAnswered = state.answers[q.id] !== undefined;
    const isMarked = !!state.marked[q.id];

    if (isAnswered) {
      elements.qStatusPill.textContent = 'Answered';
      elements.qStatusPill.className = 'status-pill status-answered';
    } else {
      elements.qStatusPill.textContent = 'Unanswered';
      elements.qStatusPill.className = 'status-pill status-unanswered';
    }

    // Mark button
    if (isMarked) {
      elements.markBtn.classList.add('marked');
      elements.markBtnText.textContent = 'Marked';
    } else {
      elements.markBtn.classList.remove('marked');
      elements.markBtnText.textContent = 'Mark for Review';
    }

    // Options rendering
    const letters = ['A', 'B', 'C', 'D'];
    elements.optionsContainer.innerHTML = '';

    q.options.forEach((optText, optIdx) => {
      const optionCard = document.createElement('button');
      optionCard.className = 'option-card';
      const isSelected = state.answers[q.id] === optText;

      if (isSelected) {
        optionCard.classList.add('selected');
      }

      optionCard.innerHTML = `
        <div class="option-letter">${letters[optIdx] || optIdx + 1}</div>
        <div class="option-label">${escapeHtml(optText)}</div>
      `;

      optionCard.addEventListener('click', () => {
        selectOption(q.id, optText);
      });

      elements.optionsContainer.appendChild(optionCard);
    });

    // Instant explanation box (practice mode)
    if (settings.practiceMode && isAnswered) {
      elements.instantExplanationBox.classList.remove('hidden');
      const isCorrect = state.answers[q.id] === q.correctText;
      elements.expResultBadge.textContent = isCorrect ? 'Correct ✓' : 'Incorrect ✗';
      elements.expResultBadge.className = `exp-badge ${isCorrect ? 'correct' : 'incorrect'}`;
      elements.instantExpText.textContent = q.explanation;
    } else {
      elements.instantExplanationBox.classList.add('hidden');
    }

    // Navigation buttons
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

    // Close mobile palette if open
    elements.palettePane.classList.remove('open');
  }

  // ── PALETTE GRID & STATS ──
  function buildPaletteGrid() {
    elements.questionsGrid.innerHTML = '';
    const total = state.questionDeck.length || TOTAL_QUESTIONS;

    for (let i = 0; i < total; i++) {
      const btn = document.createElement('button');
      btn.className = 'q-grid-btn';
      btn.textContent = i + 1;
      btn.dataset.index = i;

      btn.addEventListener('click', () => {
        goToQuestion(i);
      });

      elements.questionsGrid.appendChild(btn);
    }
  }

  function updatePaletteUI() {
    const total = state.questionDeck.length;
    let answeredCount = 0;
    let markedCount = 0;

    const gridButtons = elements.questionsGrid.querySelectorAll('.q-grid-btn');

    state.questionDeck.forEach((q, i) => {
      const isAnswered = state.answers[q.id] !== undefined;
      const isMarked = !!state.marked[q.id];
      const isCurrent = state.currentIndex === i;

      if (isAnswered) answeredCount++;
      if (isMarked) markedCount++;

      const btn = gridButtons[i];
      if (btn) {
        btn.className = 'q-grid-btn';
        if (isCurrent) btn.classList.add('current');
        if (isAnswered) btn.classList.add('answered');
        if (isMarked) btn.classList.add('marked');

        // Apply filter visibility
        let isVisible = true;
        if (activeFilter === 'answered' && !isAnswered) isVisible = false;
        if (activeFilter === 'marked' && !isMarked) isVisible = false;
        if (activeFilter === 'unanswered' && isAnswered) isVisible = false;

        btn.style.display = isVisible ? 'flex' : 'none';
      }
    });

    const unansweredCount = total - answeredCount;

    elements.statAnsweredCount.textContent = answeredCount;
    elements.statMarkedCount.textContent = markedCount;
    elements.statUnansweredCount.textContent = unansweredCount;
    elements.mobileAnsweredCount.textContent = answeredCount;

    updateProgressBar();
  }

  function updateProgressBar() {
    const total = state.questionDeck.length;
    const answeredCount = Object.keys(state.answers).length;
    const percent = total > 0 ? Math.round((answeredCount / total) * 100) : 0;
    elements.progressBar.style.width = `${percent}%`;
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
      elements.unansweredWarning.classList.remove('hidden');
      elements.modalUnansweredWarnCount.textContent = unansweredCount;
    } else {
      elements.unansweredWarning.classList.add('hidden');
    }

    elements.submitModal.classList.remove('hidden');
  }

  function closeSubmitModal() {
    elements.submitModal.classList.add('hidden');
  }

  function submitExam() {
    closeSubmitModal();
    state.isSubmitted = true;
    state.submittedAt = Date.now();
    saveState();

    if (timerInterval) clearInterval(timerInterval);
    showResults();
  }

  function showResults() {
    elements.quizView.classList.add('hidden');
    elements.resultsView.classList.remove('hidden');

    // Calculate metrics
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
    const passed = percentage >= 70; // 70% CPL Passing Grade

    elements.resultsVerdictBadge.textContent = passed ? 'PASSED 🎉' : 'NEEDS REVIEW ⚠️';
    elements.resultsVerdictBadge.className = `results-badge ${passed ? '' : 'fail'}`;

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

      // Filter check
      if (activeRevFilter === 'incorrect' && (isCorrect || isSkipped)) return;
      if (activeRevFilter === 'correct' && !isCorrect) return;
      if (activeRevFilter === 'marked' && !isMarked) return;

      const card = document.createElement('div');
      card.className = `rev-item-card ${isSkipped ? 'is-skipped' : (isCorrect ? 'is-correct' : 'is-incorrect')}`;

      let badgeHtml = '';
      if (isSkipped) {
        badgeHtml = '<span class="rev-item-badge skipped">Skipped</span>';
      } else if (isCorrect) {
        badgeHtml = '<span class="rev-item-badge correct">Correct ✓</span>';
      } else {
        badgeHtml = '<span class="rev-item-badge incorrect">Incorrect ✗</span>';
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
        <div class="rev-item-header">
          <span class="rev-item-num">Question ${idx + 1} ${isMarked ? '★' : ''}</span>
          ${badgeHtml}
        </div>
        <div class="rev-item-question">${escapeHtml(q.question)}</div>
        <div class="rev-options-list">${optionsHtml}</div>
        <div class="rev-exp-box">
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
      elements.resultsView.classList.add('hidden');
      elements.quizView.classList.remove('hidden');
      buildPaletteGrid();
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
      elements.resultsView.classList.add('hidden');
      elements.quizView.classList.remove('hidden');
      buildPaletteGrid();
      startTimer();
      renderCurrentQuestion();
      updatePaletteUI();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ── EVENT LISTENERS ──
  function setupEventListeners() {
    // Header actions
    elements.themeToggleBtn.addEventListener('click', toggleTheme);
    
    elements.settingsToggleBtn.addEventListener('click', () => {
      elements.settingsModal.classList.remove('hidden');
    });

    elements.closeSettingsBtn.addEventListener('click', () => {
      elements.settingsModal.classList.add('hidden');
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
        elements.settingsModal.classList.add('hidden');
        resetState();
        elements.resultsView.classList.add('hidden');
        elements.quizView.classList.remove('hidden');
        buildPaletteGrid();
        startTimer();
        renderCurrentQuestion();
        updatePaletteUI();
      }
    });

    // Mobile palette
    elements.mobilePaletteBtn.addEventListener('click', () => {
      elements.palettePane.classList.add('open');
    });

    elements.closeMobilePaletteBtn.addEventListener('click', () => {
      elements.palettePane.classList.remove('open');
    });

    // Question navigation
    elements.prevBtn.addEventListener('click', () => {
      goToQuestion(state.currentIndex - 1);
    });

    elements.nextBtn.addEventListener('click', () => {
      goToQuestion(state.currentIndex + 1);
    });

    elements.clearBtn.addEventListener('click', clearOption);
    elements.markBtn.addEventListener('click', toggleMark);

    // Submitting
    elements.topSubmitBtn.addEventListener('click', openSubmitModal);
    elements.finishBtn.addEventListener('click', openSubmitModal);
    elements.paletteSubmitBtn.addEventListener('click', openSubmitModal);

    elements.modalCancelBtn.addEventListener('click', closeSubmitModal);
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

    // A/B/C/D or 1/2/3/4 for options
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

  // Start on page ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
