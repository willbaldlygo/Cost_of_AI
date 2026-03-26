/**
 * app.js — Interactivity for "The True Cost of AI"
 * Handles task selection, count-up animations, accordions, and modals.
 */
(function () {
  'use strict';

  /* ── DOM References ── */
  const taskSelectorEl = document.getElementById('task-selector');
  const descriptionEl = document.getElementById('task-description');
  const trainingBanner = document.getElementById('training-banner');

  // Metric value spans
  const elecValue = document.getElementById('metric-elec-value');
  const elecUnit = document.getElementById('metric-elec-unit');
  const elecRange = document.getElementById('metric-elec-range');
  const waterValue = document.getElementById('metric-water-value');
  const waterUnit = document.getElementById('metric-water-unit');
  const waterRange = document.getElementById('metric-water-range');
  const carbonValue = document.getElementById('metric-carbon-value');
  const carbonUnit = document.getElementById('metric-carbon-unit');
  const carbonRange = document.getElementById('metric-carbon-range');

  // Confidence badges
  const confElecDot = document.getElementById('confidence-elec-dot');
  const confElecTip = document.getElementById('confidence-elec-tip');
  const confWaterDot = document.getElementById('confidence-water-dot');
  const confWaterTip = document.getElementById('confidence-water-tip');
  const confCarbonDot = document.getElementById('confidence-carbon-dot');
  const confCarbonTip = document.getElementById('confidence-carbon-tip');

  // Comparisons
  const compElec = document.getElementById('comparison-elec');
  const compWater = document.getElementById('comparison-water');
  const compCarbon = document.getElementById('comparison-carbon');

  // Solutions
  const keyStatQuote = document.getElementById('key-stat-quote');
  const keyStatSource = document.getElementById('key-stat-source');
  const adviceTiersEl = document.getElementById('advice-tiers');

  // Modals
  const sourcesOverlay = document.getElementById('sources-modal-overlay');
  const methodologyOverlay = document.getElementById('methodology-modal-overlay');

  let currentTask = null;

  /* ══════════════════════════════════════════════
     TASK SELECTOR
     ══════════════════════════════════════════════ */
  function renderTaskSelector() {
    taskSelectorEl.innerHTML = '';
    taskOrder.forEach(function (key) {
      var task = taskData[key];
      var card = document.createElement('button');
      card.className = 'task-card';
      card.setAttribute('role', 'tab');
      card.setAttribute('aria-selected', 'false');
      card.setAttribute('id', 'tab-' + task.id);
      card.setAttribute('aria-controls', 'detail-panel');
      card.innerHTML =
        '<span class="task-card__icon">' + task.icon + '</span>' +
        '<span class="task-card__label">' + task.name + '</span>';
      card.addEventListener('click', function () { selectTask(key); });
      taskSelectorEl.appendChild(card);
    });
  }

  function selectTask(key) {
    currentTask = key;
    var task = taskData[key];

    // Update active state on tabs
    var cards = taskSelectorEl.querySelectorAll('.task-card');
    cards.forEach(function (c, i) {
      var isActive = taskOrder[i] === key;
      c.classList.toggle('task-card--active', isActive);
      c.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Training banner
    trainingBanner.classList.toggle('training-banner--visible', task.isTraining);

    // Description
    descriptionEl.textContent = task.description;

    // Ranges
    elecRange.textContent = 'Range: ' + task.electricity.range;
    waterRange.textContent = 'Range: ' + task.water.range;
    carbonRange.textContent = 'Range: ' + task.carbon.range;

    // Units
    elecUnit.textContent = task.electricity.unit;
    waterUnit.textContent = task.water.unit;
    carbonUnit.textContent = task.carbon.unit;

    // Confidence
    setConfidence(confElecDot, confElecTip, task.electricity);
    setConfidence(confWaterDot, confWaterTip, task.water);
    setConfidence(confCarbonDot, confCarbonTip, task.carbon);

    // Comparisons
    compElec.textContent = task.comparisons.electricity;
    compWater.textContent = task.comparisons.water;
    compCarbon.textContent = task.comparisons.carbon;

    // Animate values
    animateValue(elecValue, task.electricity.central);
    animateValue(waterValue, task.water.central);
    animateValue(carbonValue, task.carbon.central);

    // Animate the detail panel
    var panel = document.getElementById('detail-panel');
    panel.classList.remove('animate-in');
    // Force reflow
    void panel.offsetWidth;
    panel.classList.add('animate-in');
  }

  function setConfidence(dot, tip, metric) {
    dot.className = 'confidence-dot confidence-dot--' + metric.confidence;
    tip.textContent = metric.confidenceLabel;
  }

  /* ── Count-up Animation ── */
  function animateValue(element, target) {
    var duration = 500; // ms
    var start = 0;
    var startTime = null;

    // Determine decimal places from target
    var decimals = 0;
    var str = String(target);
    if (str.indexOf('.') !== -1) {
      decimals = str.split('.')[1].length;
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = start + (target - start) * eased;
      element.textContent = formatNumber(current, decimals);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = formatNumber(target, decimals);
      }
    }

    requestAnimationFrame(step);
  }

  function formatNumber(num, decimals) {
    if (num >= 1000) {
      return num.toLocaleString('en-GB', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
    }
    return num.toFixed(decimals);
  }

  /* ══════════════════════════════════════════════
     ADVICE TIERS (Accordion)
     ══════════════════════════════════════════════ */
  function renderAdviceTiers() {
    adviceTiersEl.innerHTML = '';
    adviceTiers.forEach(function (tier, index) {
      var div = document.createElement('div');
      div.className = 'tier' + (index === 0 ? ' tier--open' : '');
      div.id = 'tier-' + tier.id;

      var tipsHTML = tier.tips.map(function (tip) {
        var sourceHTML = tip.source
          ? '<span class="tip__source">Source: ' + tip.source + '</span>'
          : '';
        return (
          '<div class="tip">' +
            '<h4 class="tip__title">' + tip.title + '</h4>' +
            '<p class="tip__body">' + tip.body + sourceHTML + '</p>' +
          '</div>'
        );
      }).join('');

      div.innerHTML =
        '<button class="tier__header" aria-expanded="' + (index === 0 ? 'true' : 'false') + '" aria-controls="tier-body-' + tier.id + '">' +
          '<span class="tier__icon">' + tier.icon + '</span>' +
          '<span class="tier__title-group">' +
            tier.title +
            '<span class="tier__subtitle">' + tier.subtitle + '</span>' +
          '</span>' +
          '<span class="tier__chevron" aria-hidden="true">▼</span>' +
        '</button>' +
        '<div class="tier__body" id="tier-body-' + tier.id + '">' +
          '<div class="tier__content">' + tipsHTML + '</div>' +
        '</div>';

      // Accordion toggle
      div.querySelector('.tier__header').addEventListener('click', function () {
        var isOpen = div.classList.contains('tier--open');
        div.classList.toggle('tier--open', !isOpen);
        this.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      });

      adviceTiersEl.appendChild(div);
    });
  }

  function renderKeyStatCallout() {
    keyStatQuote.textContent = '"' + keyStatCallout.quote + '"';
    keyStatSource.textContent = '— ' + keyStatCallout.source;
  }

  /* ══════════════════════════════════════════════
     MODALS
     ══════════════════════════════════════════════ */
  function renderSourcesModal() {
    var content = document.getElementById('sources-modal-content');
    var html = '';
    sourcesData.forEach(function (group) {
      html += '<h3 class="modal__group-title">' + group.group + '</h3>';
      html += '<ol class="modal__source-list">';
      group.items.forEach(function (item) {
        var textContent = item.url
          ? '<a href="' + item.url + '" target="_blank" rel="noopener noreferrer">' + item.text + '</a>'
          : item.text;
        html +=
          '<li class="modal__source-item">' +
            '<span class="modal__source-num">' + item.num + '.</span>' +
            textContent +
          '</li>';
      });
      html += '</ol>';
    });
    content.innerHTML = html;
  }

  function renderMethodologyModal() {
    var content = document.getElementById('methodology-modal-content');
    var html = '';

    // Reference Scenario
    html += '<h3 class="modal__group-title">Reference Scenario</h3>';
    html += '<table class="methodology-table">';
    methodologyData.referenceScenario.forEach(function (row) {
      html += '<tr><td>' + row.label + '</td><td>' + row.value + '</td></tr>';
    });
    html += '</table>';

    // Confidence Levels
    html += '<h3 class="modal__group-title">Confidence Levels</h3>';
    html += '<ul class="confidence-list">';
    methodologyData.confidenceLevels.forEach(function (cl) {
      html +=
        '<li>' +
          '<span class="confidence-dot confidence-dot--' + cl.level + '"></span>' +
          '<span><strong>' + cl.label + ':</strong> ' + cl.description + '</span>' +
        '</li>';
    });
    html += '</ul>';

    // Limitations
    html += '<h3 class="modal__group-title">Key Limitations</h3>';
    html += '<ol class="limitations-list">';
    methodologyData.limitations.forEach(function (lim) {
      html += '<li>' + lim + '</li>';
    });
    html += '</ol>';

    content.innerHTML = html;
  }

  function openModal(overlay) {
    overlay.classList.add('modal-overlay--open');
    document.body.style.overflow = 'hidden';
    // Focus the close button
    var closeBtn = overlay.querySelector('.modal__close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(overlay) {
    overlay.classList.remove('modal-overlay--open');
    document.body.style.overflow = '';
  }

  function setupModals() {
    // Sources
    var openSourcesBtns = [
      document.getElementById('btn-sources-header'),
      document.getElementById('btn-sources-footer')
    ];
    openSourcesBtns.forEach(function (btn) {
      btn.addEventListener('click', function () { openModal(sourcesOverlay); });
    });
    document.getElementById('sources-modal-close').addEventListener('click', function () {
      closeModal(sourcesOverlay);
    });
    sourcesOverlay.addEventListener('click', function (e) {
      if (e.target === sourcesOverlay) closeModal(sourcesOverlay);
    });

    // Methodology
    var openMethodBtns = [
      document.getElementById('btn-methodology-header'),
      document.getElementById('btn-methodology-footer')
    ];
    openMethodBtns.forEach(function (btn) {
      btn.addEventListener('click', function () { openModal(methodologyOverlay); });
    });
    document.getElementById('methodology-modal-close').addEventListener('click', function () {
      closeModal(methodologyOverlay);
    });
    methodologyOverlay.addEventListener('click', function (e) {
      if (e.target === methodologyOverlay) closeModal(methodologyOverlay);
    });

    // ESC key closes any open modal
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeModal(sourcesOverlay);
        closeModal(methodologyOverlay);
      }
    });
  }

  /* ══════════════════════════════════════════════
     INIT
     ══════════════════════════════════════════════ */
  function init() {
    renderTaskSelector();
    renderAdviceTiers();
    renderKeyStatCallout();
    renderSourcesModal();
    renderMethodologyModal();
    setupModals();

    // Default to "Text Prompt"
    selectTask('textPrompt');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
