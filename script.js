// ============================================
// Theme Management
// ============================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ============================================
// Mobile Menu Toggle
// ============================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const sidebar = document.getElementById('sidebar');

mobileMenuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// ============================================
// Navigation Active State
// ============================================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.doc-section, .hero-section');

// Update active nav link on scroll
function updateActiveNav() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Smooth scroll to section and close mobile menu
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Close mobile menu
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        }
    });
});

// ============================================
// Search Functionality
// ============================================
const searchInput = document.getElementById('searchInput');
const contentSections = document.querySelectorAll('.doc-section, .function-doc');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    if (searchTerm === '') {
        // Show all sections
        contentSections.forEach(section => {
            section.style.display = '';
        });
        return;
    }

    // Filter sections based on search term
    contentSections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            section.style.display = '';

            // Highlight search terms (optional)
            highlightSearchTerm(section, searchTerm);
        } else {
            section.style.display = 'none';
        }
    });
});

// Optional: Highlight search terms
function highlightSearchTerm(element, term) {
    // Simple implementation - can be enhanced
    // This is just a basic version
}

// Clear search on Escape key
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.blur();
    }
});

// ============================================
// Copy Code Button
// ============================================
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const targetId = button.getAttribute('data-copy-target');
            const codeElement = document.getElementById(targetId) ||
                               button.closest('.code-block-wrapper').querySelector('code');

        if (codeElement) {
            const code = codeElement.textContent;

            try {
                await navigator.clipboard.writeText(code);

                // Visual feedback
                const originalText = button.innerHTML;
                button.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Copied!
                `;
                button.style.background = 'var(--success)';
                button.style.color = 'white';
                button.style.borderColor = 'var(--success)';

                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.style.background = '';
                    button.style.color = '';
                    button.style.borderColor = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
                button.innerHTML = 'Failed!';
                setTimeout(() => {
                    button.innerHTML = originalText;
                }, 2000);
            }
        }
    });
    });
}

// Initialize copy buttons on page load
document.addEventListener('DOMContentLoaded', () => {
    initCopyButtons();
});

// Export for use in other scripts
window.initCopyButtons = initCopyButtons;

// ============================================
// Tabs
// ============================================
const tabButtons = document.querySelectorAll('.tab-button');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        const tabsContainer = button.closest('.tabs');

        // Remove active class from all buttons in this tabs container
        tabsContainer.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });

        // Remove active class from all panes in this tabs container
        tabsContainer.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });

        // Add active class to clicked button
        button.classList.add('active');

        // Add active class to corresponding pane
        const targetPane = tabsContainer.querySelector(`[data-tab-pane="${tabName}"]`);
        if (targetPane) {
            targetPane.classList.add('active');
        }
    });
});

// ============================================
// Accordion
// ============================================
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const isActive = accordionItem.classList.contains('active');

        // Close all accordion items in the same accordion
        const accordion = accordionItem.closest('.accordion');
        accordion.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            accordionItem.classList.add('active');
        }
    });
});

// ============================================
// Table of Contents Auto-generation (Optional)
// ============================================
function generateTableOfContents() {
    const headings = document.querySelectorAll('.doc-section h2, .doc-section h3');
    const toc = document.getElementById('tableOfContents');

    if (!toc) return;

    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';

    headings.forEach((heading, index) => {
        const level = heading.tagName.toLowerCase();
        const text = heading.textContent;
        const id = heading.id || `heading-${index}`;

        if (!heading.id) {
            heading.id = id;
        }

        const listItem = document.createElement('li');
        listItem.className = `toc-item toc-${level}`;

        const link = document.createElement('a');
        link.href = `#${id}`;
        link.textContent = text;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });

    toc.appendChild(tocList);
}

// ============================================
// Code Syntax Highlighting Enhancement
// ============================================
// Prism.js is loaded from CDN, but we can add custom enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Add line numbers to code blocks if desired
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(block => {
        // Prism handles highlighting
        if (window.Prism) {
            Prism.highlightElement(block);
        }
    });
});

// ============================================
// Scroll Progress Indicator (Optional)
// ============================================
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    // You can add a progress bar element and update it here
    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
}

window.addEventListener('scroll', updateScrollProgress);

// ============================================
// Keyboard Shortcuts
// ============================================
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }

    // Ctrl/Cmd + / to toggle sidebar on mobile
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('active');
        }
    }
});

// ============================================
// Auto-hide Header on Scroll Down (Optional)
// ============================================
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add any header hiding logic here if needed

    lastScrollTop = scrollTop;
}, false);

// ============================================
// External Links - Open in New Tab
// ============================================
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ============================================
// Back to Top Button (Optional)
// ============================================
const backToTop = document.createElement('button');
backToTop.className = 'back-to-top';
backToTop.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <polyline points="18 15 12 9 6 15"/>
    </svg>
`;
backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--accent-primary);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-lg);
    z-index: 999;
    transition: all 0.3s;
`;

backToTop.querySelector('svg').style.cssText = `
    width: 24px;
    height: 24px;
    stroke-width: 2;
`;

document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNav();
    // generateTableOfContents(); // Uncomment if you add TOC element

    // Add fade-in animation to sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.doc-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(section);
    });
});

// ============================================
// Performance: Debounce scroll events
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use debounced versions for scroll handlers if needed
const debouncedScrollHandler = debounce(() => {
    updateActiveNav();
    updateScrollProgress();
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);

// ============================================
// Flip Card Feature
// ============================================

function toggleFlip(button) {
    const container = button.closest('.function-card-container');
    container.classList.toggle('flipped');
}

function openFullscreen(funcName) {
    // Create fullscreen modal if it doesn't exist
    let modal = document.querySelector('.fullscreen-modal');

    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'fullscreen-modal';
        modal.innerHTML = `
            <button class="fullscreen-close-btn" onclick="closeFullscreen()" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
            <div class="fullscreen-modal-content">
                <img id="fullscreen-image" src="" alt="" />
            </div>
        `;
        document.body.appendChild(modal);

        // Close on click outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeFullscreen();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeFullscreen();
            }
        });
    }

    // Set image source and show modal
    const img = modal.querySelector('#fullscreen-image');
    img.src = `images/examples/${funcName}.png`;
    img.alt = `${funcName} example`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    const modal = document.querySelector('.fullscreen-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Make functions globally available
window.toggleFlip = toggleFlip;
window.openFullscreen = openFullscreen;
window.closeFullscreen = closeFullscreen;

console.log('📚 GDIPlus Documentation loaded successfully!');
