// ============================================
// GDIPlus Documentation Builder
// Dynamically generates HTML sections from functionsData
// ============================================

(function() {
  'use strict';

  const categoryInfo = {
    stateManagement: {
      titleVi: 'Quản Lý Trạng Thái',
      titleEn: 'State Management',
      icon: 'settings'
    },
    colors: {
      titleVi: 'Cài Đặt Màu Sắc',
      titleEn: 'Color Settings',
      icon: 'palette'
    },
    gradients: {
      titleVi: 'Gradient Brushes',
      titleEn: 'Gradient Brushes',
      icon: 'droplet'
    },
    fonts: {
      titleVi: 'Cài Đặt Font',
      titleEn: 'Font Settings',
      icon: 'type'
    },
    shapes: {
      titleVi: 'Các Hàm Vẽ Hình',
      titleEn: 'Drawing Shapes',
      icon: 'square'
    },
    polygons: {
      titleVi: 'Đa Giác (Polygons)',
      titleEn: 'Polygons',
      icon: 'hexagon'
    },
    text: {
      titleVi: 'Vẽ Text',
      titleEn: 'Text Drawing',
      icon: 'type'
    },
    lines: {
      titleVi: 'Smooth Lines',
      titleEn: 'Smooth Lines',
      icon: 'activity'
    },
    charts: {
      titleVi: 'Biểu Đồ Chuyên Nghiệp',
      titleEn: 'Professional Charts',
      icon: 'pie-chart'
    },
    advanced: {
      titleVi: 'Chức Năng Nâng Cao',
      titleEn: 'Advanced Features',
      icon: 'layers'
    }
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
    const currentLang = localStorage.getItem('language') || 'vi';
    const isVi = currentLang === 'vi';

    const newBadge = func.isNew ? '<span class="new-badge">NEW</span>' : '';

    let html = `
    <div class="function-card" id="${func.name}">
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
          <h4 data-i18n="functions.parameters">Tham số:</h4>
          <ul class="params-list">`;

      func.params.forEach(param => {
        html += `
            <li>
              <code>${param.name}</code>: ${param.desc}
            </li>`;
      });

      html += `
          </ul>
        </div>`;
    }

    // Returns section
    if (func.returns) {
      html += `
        <div class="returns-section">
          <h4 data-i18n="functions.returns">Trả về:</h4>
          <p>${func.returns}</p>
        </div>`;
    }

    // Default state section (for GDIpResetDefaults)
    if (func.defaultState) {
      html += `
        <div class="default-state-section">
          <h4 data-i18n="functions.defaults">Mặc định:</h4>
          <ul>
            <li><strong>Brush:</strong> ${func.defaultState.brush}</li>
            <li><strong>Pen:</strong> ${func.defaultState.pen}</li>
            <li><strong>Font:</strong> ${func.defaultState.font}</li>
          </ul>
        </div>`;
    }

    // Example section
    html += `
        <div class="example-section">
          <h4 data-i18n="functions.example">Ví dụ:</h4>
          <div class="code-block-wrapper">
            <button class="copy-btn" aria-label="Copy code">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
            <pre><code class="language-afl example-vi" data-func="${func.name}">${func.exampleVi}</code></pre>
            <pre style="display: none;"><code class="language-afl example-en" data-func="${func.name}">${func.exampleEn}</code></pre>
          </div>
        </div>`;

    // Notes section
    if (func.notes) {
      const pinIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 6px;"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>';
      html += `
        <div class="notes-section">
          <p class="note"><strong>${pinIcon}</strong>${func.notes}</p>
        </div>`;
    }

    html += `
      </div>
    </div>`;

    return html;
  }

  function buildCategorySection(categoryKey, functions) {
    const info = categoryInfo[categoryKey];
    const currentLang = localStorage.getItem('language') || 'vi';
    const isVi = currentLang === 'vi';

    const title = isVi ? info.titleVi : info.titleEn;
    const icon = getLucideIcon(info.icon);

    let html = `
    <section id="${categoryKey}" class="content-section">
      <div class="section-header">
        <div class="section-icon">${icon}</div>
        <h2 class="section-title" data-i18n-content="category-${categoryKey}">${title}</h2>
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
    const currentLang = localStorage.getItem('language') || 'vi';
    const isVi = currentLang === 'vi';

    let html = '';

    Object.keys(functionsData).forEach(categoryKey => {
      const info = categoryInfo[categoryKey];
      const title = isVi ? info.titleVi : info.titleEn;
      const icon = getLucideIcon(info.icon);
      const functions = functionsData[categoryKey];

      html += `
        <div class="nav-group">
          <div class="nav-group-header" data-category="${categoryKey}">
            <div class="nav-group-icon">${icon}</div>
            <span class="nav-group-title">${title}</span>
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
    const currentLang = localStorage.getItem('language') || 'vi';
    const isVi = currentLang === 'vi';
    const downloadIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';

    return `
    <section id="installation" class="content-section">
      <div class="section-header">
        <div class="section-icon">${downloadIcon}</div>
        <h2 class="section-title">${isVi ? 'Cài Đặt' : 'Installation'}</h2>
      </div>

      <div class="functions-grid">
        <div class="function-card">
          <div class="function-header">
            <h3>${isVi ? 'Hướng dẫn cài đặt' : 'Installation Guide'}</h3>
          </div>

          <div class="function-body">
            <p class="function-description">
              ${isVi ? 'Cài đặt GDIPlus plugin chỉ trong vài bước đơn giản:' : 'Install GDIPlus plugin in just a few simple steps:'}
            </p>

            <div class="params-section">
              <h4>${isVi ? 'Các bước cài đặt:' : 'Installation Steps:'}</h4>
              <ul class="params-list">
                <li>
                  <strong>${isVi ? 'Bước 1 - Download Plugin:' : 'Step 1 - Download Plugin:'}</strong><br>
                  ${isVi ? 'Copy file' : 'Copy'} <code>GDIPlus.dll</code> ${isVi ? 'vào thư mục AmiBroker (thường là' : 'to AmiBroker folder (usually'} <code>C:\\Program Files\\AmiBroker\\</code>)
                </li>
                <li>
                  <strong>${isVi ? 'Bước 2 - Khởi động lại:' : 'Step 2 - Restart:'}</strong><br>
                  ${isVi ? 'Khởi động lại AmiBroker để plugin được nạp' : 'Restart AmiBroker to load the plugin'}
                </li>
                <li>
                  <strong>${isVi ? 'Bước 3 - Verify:' : 'Step 3 - Verify:'}</strong><br>
                  ${isVi ? 'Kiểm tra plugin đã được nạp trong' : 'Check plugin is loaded in'} <strong>Tools → Preferences → AFL</strong>
                </li>
              </ul>
            </div>

            <div class="notes-section">
              <p class="note">
                <strong>${isVi ? 'Yêu cầu hệ thống:' : 'System Requirements:'}</strong><br>
                AmiBroker 6.x+ | Windows (32-bit) | GDI+ Runtime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }

  function buildQuickStartSection() {
    const currentLang = localStorage.getItem('language') || 'vi';
    const isVi = currentLang === 'vi';
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
        <h2 class="section-title">Quick Start</h2>
      </div>

      <div class="functions-grid">
        <div class="function-card">
          <div class="function-header">
            <h3>${isVi ? 'Ví dụ đơn giản' : 'Simple Example'}</h3>
          </div>

          <div class="function-body">
            <p class="function-description">
              ${isVi ? 'Bắt đầu với ví dụ vẽ hình chữ nhật và hình tròn:' : 'Start with a simple rectangle and circle example:'}
            </p>

            <div class="example-section">
              <h4>${isVi ? 'Ví dụ cơ bản' : 'Basic Example'}</h4>
              <div class="code-block-wrapper">
                <button class="copy-btn" aria-label="Copy code">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
                <pre><code class="language-afl example-vi">${exampleVi}</code></pre>
                <pre style="display: none;"><code class="language-afl example-en">${exampleEn}</code></pre>
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
    // Rebuild all content to update Installation, Quick Start, and all functions
    const contentContainer = document.getElementById('functions-content');
    if (contentContainer) {
      contentContainer.innerHTML = buildAllContent();
    }

    // Update sidebar nav
    const sidebarNav = document.querySelector('.sidebar-nav');
    if (sidebarNav) {
      sidebarNav.innerHTML = buildSidebarNav();
      setupNavGroupToggles();
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