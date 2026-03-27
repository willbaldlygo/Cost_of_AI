import re

with open('js/app.js', 'r') as f:
    js_code = f.read()

# Replace renderTaskSelector
new_render_task_selector = """  function renderTaskSelector() {
    taskSelectorEl.innerHTML = '';
    taskSelectorEl.className = 'lg:col-span-4 flex flex-col gap-4';

    taskOrder.forEach(function (key) {
      var task = taskData[key];
      var card = document.createElement('button');
      
      card.className = 'flex items-center justify-between p-6 bg-surface-container text-on-surface cut-paper-sm text-left hover:bg-surface-container-high transition-all task-card w-full';
      card.setAttribute('role', 'tab');
      card.setAttribute('aria-selected', 'false');
      card.setAttribute('id', 'tab-' + task.id);
      card.setAttribute('aria-controls', 'detail-panel');
      
      card.innerHTML =
        '<span class="font-headline text-xl">' + task.name + '</span>' +
        '<span class="text-2xl">' + task.icon + '</span>';
        
      card.addEventListener('click', function () { selectTask(key); });
      taskSelectorEl.appendChild(card);
    });
  }"""

js_code = re.sub(r'function renderTaskSelector\(\) \{.*?\}(?=\n\n  function selectTask)', new_render_task_selector, js_code, flags=re.DOTALL)

# Replace selectTask parts that handle classes
new_select_task = """  function selectTask(key) {
    currentTask = key;
    var task = taskData[key];

    // Update active state on tabs
    var cards = taskSelectorEl.querySelectorAll('.task-card');
    cards.forEach(function (c, i) {
      var isActive = taskOrder[i] === key;
      if (isActive) {
        c.className = 'flex items-center justify-between p-6 bg-primary text-on-primary cut-paper-sm text-left transition-all active:scale-95 task-card w-full shadow-md';
      } else {
        c.className = 'flex items-center justify-between p-6 bg-surface-container text-on-surface cut-paper-sm text-left hover:bg-surface-container-high transition-all task-card w-full opacity-80';
      }
      c.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });"""

js_code = re.sub(r'function selectTask\(key\) \{.*?c\.setAttribute\(\'aria-selected\', isActive \? \'true\' : \'false\'\);\n    \}\);', new_select_task, js_code, flags=re.DOTALL)

# Replace renderAdviceTiers
new_render_advice_tiers = """  function renderAdviceTiers() {
    adviceTiersEl.innerHTML = '';
    adviceTiersEl.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';
    
    var bgClasses = [
      'bg-surface-container hover:bg-surface-container-high',
      'bg-surface-container-high hover:bg-surface-container-highest transform md:rotate-1',
      'bg-surface-container hover:bg-surface-container-high transform md:-rotate-1',
      'bg-primary text-on-primary hover:brightness-110'
    ];
    var cutClasses = ['cut-paper-sm', 'cut-paper-md', 'cut-paper-sm', 'cut-paper-md'];
    var textClasses = ['text-primary', 'text-primary', 'text-primary', 'text-white'];
    var barClasses = ['bg-secondary', 'bg-secondary', 'bg-secondary', 'bg-secondary-container'];

    adviceTiers.forEach(function (tier, index) {
      var bgCls = bgClasses[index % bgClasses.length];
      var cutCls = cutClasses[index % cutClasses.length];
      var textCls = textClasses[index % textClasses.length];
      var barCls = barClasses[index % barClasses.length];
      
      var div = document.createElement('div');
      div.className = 'group p-8 pt-16 relative transition-colors flex flex-col h-full ' + bgCls + ' ' + cutCls;
      div.id = 'tier-' + tier.id;

      var tipsHTML = tier.tips.map(function(tip) {
        var sourceHtml = tip.source ? '<span class="block mt-2 text-xs opacity-70 italic">Source: ' + tip.source + '</span>' : '';
        return '<div class="mb-6"><strong class="block mb-2 font-headline text-lg opacity-90">' + tip.title + '</strong><span class="block">' + tip.body + '</span>' + sourceHtml + '</div>';
      }).join('');

      var bodyTextCls = index === 3 ? "opacity-90 font-body mb-8 text-sm leading-relaxed overflow-y-auto pr-2" : "text-on-surface-variant font-body mb-8 text-sm leading-relaxed overflow-y-auto pr-2";
      var numTextCls = index === 3 ? "text-secondary-container" : "text-secondary";

      div.innerHTML = 
        '<span class="absolute top-6 left-6 font-label text-xs font-bold tracking-widest uppercase ' + numTextCls + '">0' + (index+1) + '</span>' +
        '<h3 class="font-headline text-2xl mb-4 ' + textCls + '">' + tier.title + '</h3>' +
        '<span class="block font-label text-sm uppercase tracking-wider mb-6 opacity-70">' + tier.subtitle + '</span>' +
        '<div class="flex-grow ' + bodyTextCls + ' custom-scrollbar">' + tipsHTML + '</div>' +
        '<div class="h-1 w-12 transition-all group-hover:w-full mt-auto ' + barCls + '"></div>';

      adviceTiersEl.appendChild(div);
    });
  }"""

js_code = re.sub(r'function renderAdviceTiers\(\) \{.*?\}(?=\n\n  function renderKeyStatCallout)', new_render_advice_tiers, js_code, flags=re.DOTALL)

with open('js/app-v3.js', 'w') as f:
    f.write(js_code)
print("js/app-v3.js generated successfully")
