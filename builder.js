// ============================================
// GDIPlus Documentation Builder
// Dynamically generates HTML sections from functionsData
// ============================================

(function() {
  'use strict';

  const categoryInfo = {
    stateManagement: { key: 'state_management', icon: 'settings' },
    colors: { key: 'colors', icon: 'palette' },
    gradients: { key: 'gradients', icon: 'droplet' },
    fonts: { key: 'fonts', icon: 'type' },
    shapes: { key: 'shapes', icon: 'square' },
    polygons: { key: 'polygons', icon: 'hexagon' },
    text: { key: 'text', icon: 'type' },
    lines: { key: 'lines', icon: 'activity' },
    charts: { key: 'charts', icon: 'pie-chart' },
    advanced: { key: 'advanced', icon: 'layers' }
  };

  function getLucideIcon(iconName) {
    const icons = {
      'settings': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
      'palette': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>',
      'droplet': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>',
      'type': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>',
      'square': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>',
      'hexagon': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>',
      'activity': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
      'pie-chart': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>',
      'layers': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>'
    };
    return icons[iconName] || icons['square'];
  }

  function buildFunctionSection(func, categoryKey) {
    const isVi = window.i18n && window.i18n.isVi ? window.i18n.isVi() : (localStorage.getItem('language') || 'vi') === 'vi';
    const t = window.i18n && window.i18n.t ? window.i18n.t : (key) => key;

    const newBadge = func.isNew ? '<span class="new-badge">NEW</span>' : '';
    const flipIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>';

    let html = `
    <div class="function-card-container" id="${func.name}">
      <div class="function-card-inner">
        <!-- FRONT SIDE -->
        <div class="function-card function-card-front">
          <button class="flip-btn" onclick="toggleFlip(this)" aria-label="View image">
            ${flipIcon}
            <span data-i18n="card.view_image">${isVi ? 'Hình minh họa' : 'View Image'}</span>
          </button>

          <div class="function-header">
            <h3>${func.name}${newBadge}</h3>
            <code class="function-signature">${func.signature}</code>
          </div>

          <div class="function-body">
            <p class="function-description" data-i18n-content="${func.name}-desc">
              ${isVi ? func.descVi : func.descEn}
            </p>`;

    // Parameters section
    if (func.params && func.params.length > 0) {
      html += `
        <div class="params-section">
          <h4 data-i18n="functions.parameters">${t('functions.parameters')}</h4>
          <ul class="params-list">`;

      func.params.forEach(param => {
        const paramDesc = param.descVi && param.descEn
          ? (isVi ? param.descVi : param.descEn)
          : param.desc; // Fallback to old 'desc' field
        html += `
            <li>
              <code>${param.name}</code>: <span class="param-desc-vi" style="display: ${isVi ? '' : 'none'}">${param.descVi || param.desc || ''}</span><span class="param-desc-en" style="display: ${isVi ? 'none' : ''}">${param.descEn || param.desc || ''}</span>
            </li>`;
      });

      html += `
          </ul>
        </div>`;
    }

    // Returns section
    const returns = func.returnsVi || func.returnsEn || func.returns;
    if (returns) {
      const returnsText = func.returnsVi && func.returnsEn
        ? `<span class="returns-vi" style="display: ${isVi ? '' : 'none'}">${func.returnsVi}</span><span class="returns-en" style="display: ${isVi ? 'none' : ''}">${func.returnsEn}</span>`
        : (func.returns || '');
      html += `
        <div class="returns-section">
          <h4 data-i18n="functions.returns">${t('functions.returns')}</h4>
          <p>${returnsText}</p>
        </div>`;
    }

    // Default state section (for GDIpResetDefaults)
    const defaultState = func.defaultStateVi || func.defaultStateEn || func.defaultState;
    if (defaultState) {
      const stateVi = func.defaultStateVi || func.defaultState;
      const stateEn = func.defaultStateEn || func.defaultState;
      html += `
        <div class="default-state-section">
          <h4 data-i18n="functions.defaults">${t('functions.defaults')}</h4>
          <ul>
            <li><strong>Brush:</strong> <span class="state-vi" style="display: ${isVi ? '' : 'none'}">${stateVi?.brush || ''}</span><span class="state-en" style="display: ${isVi ? 'none' : ''}">${stateEn?.brush || ''}</span></li>
            <li><strong>Pen:</strong> <span class="state-vi" style="display: ${isVi ? '' : 'none'}">${stateVi?.pen || ''}</span><span class="state-en" style="display: ${isVi ? 'none' : ''}">${stateEn?.pen || ''}</span></li>
            <li><strong>Font:</strong> <span class="state-vi" style="display: ${isVi ? '' : 'none'}">${stateVi?.font || ''}</span><span class="state-en" style="display: ${isVi ? 'none' : ''}">${stateEn?.font || ''}</span></li>
          </ul>
        </div>`;
    }

    // Example section
    html += `
        <div class="example-section">
          <h4 data-i18n="functions.example">${t('functions.example')}</h4>
          <div class="code-block-wrapper">
            <button class="copy-btn" aria-label="Copy code">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
            <pre><code class="language-clike example-vi" data-func="${func.name}">${func.exampleVi}</code></pre>
            <pre style="display: none;"><code class="language-clike example-en" data-func="${func.name}">${func.exampleEn}</code></pre>
          </div>
        </div>`;

    // Notes section
    if (func.notesVi || func.notesEn) {
      const pinIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 6px;"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>';
      const noteText = isVi ? func.notesVi : func.notesEn;
      html += `
        <div class="notes-section">
          <p class="note"><strong>${pinIcon}</strong><span class="note-text-vi" style="display: ${isVi ? '' : 'none'}">${func.notesVi || ''}</span><span class="note-text-en" style="display: ${isVi ? 'none' : ''}">${func.notesEn || ''}</span></p>
        </div>`;
    }

    html += `
          </div>
        </div>

        <!-- BACK SIDE -->
        <div class="function-card-back">
          <button class="flip-btn" onclick="toggleFlip(this)" aria-label="Back to function">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            <span data-i18n="card.back">${isVi ? 'Quay lại' : 'Back'}</span>
          </button>

          <div class="image-preview-container">
            <h3 data-i18n="card.image_title">${isVi ? 'Hình minh họa' : 'Example Image'}: ${func.name}</h3>
            <div class="image-preview" onclick="openFullscreen('${func.name}')">
              <img src="images/examples/${func.name}.png" alt="${func.name} example" onerror="this.parentElement.parentElement.innerHTML='<div class=\\'image-not-available\\'><svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><circle cx=\\'9\\' cy=\\'9\\' r=\\'2\\'/><path d=\\'m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\\'/></svg><p data-i18n=\\'card.no_image\\'>${isVi ? 'Chưa có hình minh họa' : 'No image available'}</p></div>';" />
            </div>
            <button class="fullscreen-btn" onclick="openFullscreen('${func.name}')" data-i18n="card.fullscreen">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
              ${isVi ? 'Xem toàn màn hình' : 'View Fullscreen'}
            </button>
          </div>
        </div>
      </div>
    </div>`;

    return html;
  }

  function buildCategorySection(categoryKey, functions) {
    const info = categoryInfo[categoryKey];
    const t = window.i18n && window.i18n.t ? window.i18n.t : (key) => key;

    const title = t(`categories.${info.key}`);
    const icon = getLucideIcon(info.icon);

    let html = `
    <section id="${categoryKey}" class="content-section">
      <div class="section-header">
        <div class="section-icon">${icon}</div>
        <h2 class="section-title" data-i18n="categories.${info.key}">${title}</h2>
      </div>

      <div class="functions-grid">`;

    functions.forEach(func => {
      html += buildFunctionSection(func, categoryKey);
    });

    html += `
      </div>
    </section>`;

    return html;
  }

  function buildSidebarNav() {
    const t = window.i18n && window.i18n.t ? window.i18n.t : (key) => key;

    let html = '';

    Object.keys(functionsData).forEach(categoryKey => {
      const info = categoryInfo[categoryKey];
      const title = t(`categories.${info.key}`);
      const icon = getLucideIcon(info.icon);
      const functions = functionsData[categoryKey];

      html += `
        <div class="nav-group">
          <div class="nav-group-header" data-category="${categoryKey}">
            <div class="nav-group-icon">${icon}</div>
            <span class="nav-group-title" data-i18n="categories.${info.key}">${title}</span>
            <svg class="nav-group-chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="nav-items" data-category="${categoryKey}">`;

      functions.forEach(func => {
        const newBadge = func.isNew ? ' <span class="badge-new">NEW</span>' : '';
        html += `
            <a href="#${func.name}" class="nav-link">${func.name}${newBadge}</a>`;
      });

      html += `
          </div>
        </div>`;
    });

    return html;
  }

  function buildInstallationSection() {
    const t = window.i18n && window.i18n.t ? window.i18n.t : (key) => key;
    const downloadIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';

    return `
    <section id="installation" class="content-section">
      <div class="section-header">
        <div class="section-icon">${downloadIcon}</div>
        <h2 class="section-title" data-i18n="install.title">${t('install.title')}</h2>
      </div>

      <div class="functions-grid">
        <div class="function-card">
          <div class="function-header">
            <h3 data-i18n="functions.installation_guide">${t('functions.installation_guide')}</h3>
          </div>

          <div class="function-body">
            <p class="function-description" data-i18n="functions.installation_intro">
              ${t('functions.installation_intro')}
            </p>

            <div class="params-section">
              <h4 data-i18n="functions.installation_steps">${t('functions.installation_steps')}</h4>
              <ul class="params-list">
                <li>
                  <strong data-i18n="functions.step1_title">${t('functions.step1_title')}</strong><br>
                  <span data-i18n="functions.step1_desc">${t('functions.step1_desc')}</span> <code>GDIPlus.dll</code> <span data-i18n="functions.step1_desc2">${t('functions.step1_desc2')}</span> <code>C:\\Program Files\\AmiBroker\\</code>)
                </li>
                <li>
                  <strong data-i18n="functions.step2_title">${t('functions.step2_title')}</strong><br>
                  <span data-i18n="functions.step2_desc">${t('functions.step2_desc')}</span>
                </li>
                <li>
                  <strong data-i18n="functions.step3_title">${t('functions.step3_title')}</strong><br>
                  <span data-i18n="functions.step3_desc">${t('functions.step3_desc')}</span> <strong>Tools → Preferences → AFL</strong>
                </li>
              </ul>
            </div>

            <div class="notes-section">
              <p class="note">
                <strong data-i18n="functions.system_requirements">${t('functions.system_requirements')}</strong><br>
                AmiBroker 6.x+ | Windows (32-bit) | GDI+ Runtime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }

  function buildQuickStartSection() {
    const t = window.i18n && window.i18n.t ? window.i18n.t : (key) => key;
    const lightningIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>';

    const exampleVi = `<span class="comment">// Reset về cài đặt mặc định</span>
<span class="function">GDIpResetDefaults</span>();

<span class="comment">// Chọn màu brush: Đỏ với alpha 200</span>
<span class="function">GDIpSelectBrushColor</span>(colorRed, <span class="number">200</span>);

<span class="comment">// Chọn màu pen: Trắng, đặc, độ dày 2px</span>
<span class="function">GDIpSelectPenColor</span>(colorWhite, <span class="number">255</span>, <span class="number">2</span>);

<span class="comment">// Vẽ hình chữ nhật</span>
<span class="function">GDIpRectangle</span>(<span class="number">50</span>, <span class="number">50</span>, <span class="number">200</span>, <span class="number">100</span>);

<span class="comment">// Vẽ với gradient</span>
<span class="function">GDIpSelectLinearGradientBrush</span>(colorBlue, <span class="number">255</span>, colorRed, <span class="number">255</span>, <span class="number">90</span>);
<span class="function">GDIpCircle</span>(<span class="number">150</span>, <span class="number">200</span>, <span class="number">80</span>);`;

    const exampleEn = `<span class="comment">// Reset to default settings</span>
<span class="function">GDIpResetDefaults</span>();

<span class="comment">// Set brush color: Red with 200 alpha</span>
<span class="function">GDIpSelectBrushColor</span>(colorRed, <span class="number">200</span>);

<span class="comment">// Set pen color: White, solid, 2px width</span>
<span class="function">GDIpSelectPenColor</span>(colorWhite, <span class="number">255</span>, <span class="number">2</span>);

<span class="comment">// Draw rectangle</span>
<span class="function">GDIpRectangle</span>(<span class="number">50</span>, <span class="number">50</span>, <span class="number">200</span>, <span class="number">100</span>);

<span class="comment">// Draw with gradient</span>
<span class="function">GDIpSelectLinearGradientBrush</span>(colorBlue, <span class="number">255</span>, colorRed, <span class="number">255</span>, <span class="number">90</span>);
<span class="function">GDIpCircle</span>(<span class="number">150</span>, <span class="number">200</span>, <span class="number">80</span>);`;

    return `
    <section id="quickstart" class="content-section">
      <div class="section-header">
        <div class="section-icon">${lightningIcon}</div>
        <h2 class="section-title" data-i18n="quickstart.title">${t('quickstart.title')}</h2>
      </div>

      <div class="functions-grid">
        <div class="function-card">
          <div class="function-header">
            <h3 data-i18n="functions.simple_example">${t('functions.simple_example')}</h3>
          </div>

          <div class="function-body">
            <p class="function-description" data-i18n="functions.quickstart_desc">
              ${t('functions.quickstart_desc')}
            </p>

            <div class="example-section">
              <h4 data-i18n="functions.basic_example">${t('functions.basic_example')}</h4>
              <div class="code-block-wrapper">
                <button class="copy-btn" aria-label="Copy code">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
                <pre><code class="language-clike example-vi">${exampleVi}</code></pre>
                <pre style="display: none;"><code class="language-clike example-en">${exampleEn}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }

  function buildAllContent() {
    let html = '';

    // Add Installation and Quick Start first
    html += buildInstallationSection();
    html += buildQuickStartSection();

    // Add all function categories
    Object.keys(functionsData).forEach(categoryKey => {
      const functions = functionsData[categoryKey];
      html += buildCategorySection(categoryKey, functions);
    });

    return html;
  }

  function updateLanguageContent() {
    console.log('GDIPlus Builder: Updating language content...');

    const currentLang = window.i18n ? window.i18n.getCurrentLang() : 'vi';
    console.log('GDIPlus Builder: Current language is', currentLang);

    // Rebuild all content to update Installation, Quick Start, and all functions
    const contentContainer = document.getElementById('functions-content');
    if (contentContainer) {
      contentContainer.innerHTML = buildAllContent();

      // Toggle visibility of example code blocks based on language
      const viExamples = document.querySelectorAll('.example-vi');
      const enExamples = document.querySelectorAll('.example-en');

      viExamples.forEach(example => {
        const pre = example.closest('pre');
        if (pre) {
          pre.style.display = currentLang === 'vi' ? '' : 'none';
        }
      });

      enExamples.forEach(example => {
        const pre = example.closest('pre');
        if (pre) {
          pre.style.display = currentLang === 'en' ? '' : 'none';
        }
      });

      console.log('GDIPlus Builder: Toggled', viExamples.length, 'VI examples and', enExamples.length, 'EN examples');

      // Toggle visibility of notes based on language
      const viNotes = document.querySelectorAll('.note-text-vi');
      const enNotes = document.querySelectorAll('.note-text-en');

      viNotes.forEach(note => {
        note.style.display = currentLang === 'vi' ? '' : 'none';
      });

      enNotes.forEach(note => {
        note.style.display = currentLang === 'en' ? '' : 'none';
      });

      console.log('GDIPlus Builder: Toggled', viNotes.length, 'VI notes and', enNotes.length, 'EN notes');

      // Toggle visibility of params, returns, and state based on language
      const viParams = document.querySelectorAll('.param-desc-vi');
      const enParams = document.querySelectorAll('.param-desc-en');
      const viReturns = document.querySelectorAll('.returns-vi');
      const enReturns = document.querySelectorAll('.returns-en');
      const viState = document.querySelectorAll('.state-vi');
      const enState = document.querySelectorAll('.state-en');

      viParams.forEach(el => el.style.display = currentLang === 'vi' ? '' : 'none');
      enParams.forEach(el => el.style.display = currentLang === 'en' ? '' : 'none');
      viReturns.forEach(el => el.style.display = currentLang === 'vi' ? '' : 'none');
      enReturns.forEach(el => el.style.display = currentLang === 'en' ? '' : 'none');
      viState.forEach(el => el.style.display = currentLang === 'vi' ? '' : 'none');
      enState.forEach(el => el.style.display = currentLang === 'en' ? '' : 'none');

      console.log('GDIPlus Builder: Toggled params, returns, and state descriptions');

      // Re-apply Prism syntax highlighting after content update
      if (window.Prism) {
        const codeBlocks = document.querySelectorAll('pre code');
        console.log('GDIPlus Builder: Re-highlighting', codeBlocks.length, 'code blocks');
        Prism.highlightAll();
        console.log('GDIPlus Builder: Syntax highlighting re-applied');
      }
    }

    // Update sidebar nav
    const sidebarNav = document.querySelector('.sidebar-nav');
    if (sidebarNav) {
      sidebarNav.innerHTML = buildSidebarNav();
      setupNavGroupToggles();
    }

    // Re-initialize copy buttons after content rebuild
    if (typeof initCopyButtons === 'function') {
      initCopyButtons();
    }
  }

  // Toggle nav group
  function setupNavGroupToggles() {
    const headers = document.querySelectorAll('.nav-group-header');

    headers.forEach(header => {
      header.addEventListener('click', function() {
        const categoryKey = this.getAttribute('data-category');
        const navItems = document.querySelector(`.nav-items[data-category="${categoryKey}"]`);
        const navGroup = this.closest('.nav-group');

        // Toggle active state
        navGroup.classList.toggle('active');

        // Animate height
        if (navGroup.classList.contains('active')) {
          navItems.style.maxHeight = navItems.scrollHeight + 'px';
        } else {
          navItems.style.maxHeight = '0';
        }
      });
    });

    // Open first group by default
    const firstGroup = document.querySelector('.nav-group');
    if (firstGroup) {
      firstGroup.classList.add('active');
      const firstItems = firstGroup.querySelector('.nav-items');
      if (firstItems) {
        firstItems.style.maxHeight = firstItems.scrollHeight + 'px';
      }
    }
  }

  // Initialize builder when DOM is ready
  function init() {
    console.log('GDIPlus Builder: Initializing...');

    // Build and insert all content
    const contentContainer = document.getElementById('functions-content');
    if (contentContainer) {
      contentContainer.innerHTML = buildAllContent();
      console.log('GDIPlus Builder: Content generated successfully');

      // Set initial language visibility for code examples
      const currentLang = window.i18n ? window.i18n.getCurrentLang() : 'vi';
      const viExamples = document.querySelectorAll('.example-vi');
      const enExamples = document.querySelectorAll('.example-en');

      viExamples.forEach(example => {
        const pre = example.closest('pre');
        if (pre) {
          pre.style.display = currentLang === 'vi' ? '' : 'none';
        }
      });

      enExamples.forEach(example => {
        const pre = example.closest('pre');
        if (pre) {
          pre.style.display = currentLang === 'en' ? '' : 'none';
        }
      });

      // Set initial language visibility for notes
      const viNotes = document.querySelectorAll('.note-text-vi');
      const enNotes = document.querySelectorAll('.note-text-en');

      viNotes.forEach(note => {
        note.style.display = currentLang === 'vi' ? '' : 'none';
      });

      enNotes.forEach(note => {
        note.style.display = currentLang === 'en' ? '' : 'none';
      });

      // Set initial language visibility for params, returns, and state
      const viParams = document.querySelectorAll('.param-desc-vi');
      const enParams = document.querySelectorAll('.param-desc-en');
      const viReturns = document.querySelectorAll('.returns-vi');
      const enReturns = document.querySelectorAll('.returns-en');
      const viState = document.querySelectorAll('.state-vi');
      const enState = document.querySelectorAll('.state-en');

      viParams.forEach(el => el.style.display = currentLang === 'vi' ? '' : 'none');
      enParams.forEach(el => el.style.display = currentLang === 'en' ? '' : 'none');
      viReturns.forEach(el => el.style.display = currentLang === 'vi' ? '' : 'none');
      enReturns.forEach(el => el.style.display = currentLang === 'en' ? '' : 'none');
      viState.forEach(el => el.style.display = currentLang === 'vi' ? '' : 'none');
      enState.forEach(el => el.style.display = currentLang === 'en' ? '' : 'none');

      console.log('GDIPlus Builder: Set initial language to', currentLang);

      // Apply Prism syntax highlighting to all code blocks
      if (window.Prism) {
        const codeBlocks = document.querySelectorAll('pre code');
        console.log('GDIPlus Builder: Found', codeBlocks.length, 'code blocks');
        Prism.highlightAll();
        console.log('GDIPlus Builder: Syntax highlighting applied');
      } else {
        console.error('GDIPlus Builder: Prism is not loaded!');
      }
    }

    // Build sidebar navigation
    const sidebarNav = document.querySelector('.sidebar-nav');
    if (sidebarNav) {
      sidebarNav.innerHTML = buildSidebarNav();
      console.log('GDIPlus Builder: Sidebar navigation generated');

      // Setup accordion toggles
      setupNavGroupToggles();
    }

    // Listen for language changes
    window.addEventListener('languageChanged', updateLanguageContent);

    // Initialize language content
    updateLanguageContent();
  }

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export for external use
  window.GDIPlusBuilder = {
    build: init,
    updateLanguage: updateLanguageContent
  };
})();