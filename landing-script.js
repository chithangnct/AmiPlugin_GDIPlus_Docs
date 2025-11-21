/**
 * GDIPlus Landing Page Script
 * Synced with index page functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // Theme Toggle
    // ============================================
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        htmlElement.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', function() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // ============================================
    // Language Toggle
    // ============================================
    const langToggle = document.getElementById('langToggle');
    const viFlag = document.querySelector('.vi-flag');
    const usFlag = document.querySelector('.us-flag');

    // Translations
    const translations = {
        vi: {
            'nav.features': 'Tính năng',
            'nav.showcase': 'Showcase',
            'nav.pricing': 'Bảng giá',
            'nav.docs': 'Tài liệu',
            'nav.buy': 'Mua ngay',
            'hero.badge': 'AmiBroker Graphics Plugin',
            'hero.subtitle': 'Thư viện vẽ đồ họa chuyên nghiệp với GDI+ technology, hỗ trợ transparency và gradient effects cho AmiBroker',
            'hero.view_docs': 'Xem tài liệu',
            'hero.buy_now': 'Mua Plugin',
            'hero.functions': 'Hàm vẽ',
            'hero.chart_types': 'Loại biểu đồ',
            'hero.version': 'Phiên bản',
            'features.title': 'Tính năng nổi bật',
            'features.subtitle': 'Khám phá những khả năng mạnh mẽ của GDIPlus Plugin',
            'features.alpha.title': 'Alpha Transparency',
            'features.alpha.desc': 'Hỗ trợ độ trong suốt cho mọi hình vẽ, tạo hiệu ứng chồng lớp đẹp mắt',
            'features.gradients.title': 'Advanced Gradients',
            'features.gradients.desc': 'Hỗ trợ đa màu cho gradient: Linear, Radial, Slice với nhiều điểm dừng màu',
            'features.charts.title': 'Pro Charts',
            'features.charts.desc': 'Đa dạng biểu đồ chuyên nghiệp: Pie, Donut, Gauge, Radar, Area Charts',
            'features.curves.title': 'Smooth Curves',
            'features.curves.desc': 'Vẽ đường cong mượt mà với Bezier và Spline interpolation',
            'features.fonts.title': 'Custom Fonts',
            'features.fonts.desc': 'Render chữ sắc nét với hiệu ứng gradient, glow và shadow',
            'features.svg.title': 'SVG Rendering',
            'features.svg.desc': 'Kết xuất đồ họa vector từ file SVG chất lượng cao',
            'features.responsive.title': 'Smart & Responsive',
            'features.responsive.desc': 'Co giãn thông minh với nhiều phân giải màn hình',
            'features.urlimage.title': 'URL Images',
            'features.urlimage.desc': 'Hiển thị hình ảnh trực tiếp từ Internet với caching thông minh',
            'showcase.title': 'Showcase',
            'showcase.subtitle': 'Xem các ví dụ biểu đồ được tạo bởi GDIPlus',
            'pricing.title': 'Bảng giá',
            'pricing.subtitle': 'Chọn gói phù hợp với nhu cầu của bạn',
            'pricing.basic.title': 'Basic',
            'pricing.basic.desc': 'Cho người dùng cá nhân',
            'pricing.basic.f1': 'Tất cả hàm vẽ cơ bản',
            'pricing.basic.f2': 'Hỗ trợ transparency',
            'pricing.basic.f3': 'Linear Gradient',
            'pricing.basic.f4': '1 năm cập nhật',
            'pricing.basic.f5': 'Hỗ trợ email',
            'pricing.pro.title': 'Professional',
            'pricing.pro.desc': 'Cho trader chuyên nghiệp',
            'pricing.pro.f1': 'Tất cả hàm vẽ',
            'pricing.pro.f2': 'Advanced Charts',
            'pricing.pro.f3': 'Multi-color Gradients',
            'pricing.pro.f4': 'SVG Rendering',
            'pricing.pro.f5': 'Lifetime updates',
            'pricing.pro.f6': 'Priority support',
            'pricing.enterprise.title': 'Enterprise',
            'pricing.enterprise.desc': 'Cho doanh nghiệp',
            'pricing.enterprise.f1': 'Tất cả tính năng Pro',
            'pricing.enterprise.f2': 'Multi-license (5 máy)',
            'pricing.enterprise.f3': 'Custom development',
            'pricing.enterprise.f4': 'Direct support',
            'pricing.enterprise.f5': 'Source code access',
            'pricing.buy': 'Mua ngay',
            'pricing.contact': 'Liên hệ',
            'pricing.popular': 'Phổ biến',
            'cta.title': 'Sẵn sàng nâng cấp đồ họa AmiBroker?',
            'cta.subtitle': 'Bắt đầu sử dụng GDIPlus Plugin ngay hôm nay và trải nghiệm sự khác biệt',
            'cta.docs': 'Xem tài liệu',
            'cta.buy': 'Mua ngay',
            'footer.desc': 'Thư viện đồ họa chuyên nghiệp cho AmiBroker',
            'footer.product': 'Sản phẩm',
            'footer.support': 'Hỗ trợ',
            'footer.contact': 'Liên hệ',
            'footer.installation': 'Cài đặt',
            'footer.troubleshooting': 'Khắc phục sự cố',
            'footer.best_practices': 'Best Practices'
        },
        en: {
            'nav.features': 'Features',
            'nav.showcase': 'Showcase',
            'nav.pricing': 'Pricing',
            'nav.docs': 'Documentation',
            'nav.buy': 'Buy Now',
            'hero.badge': 'AmiBroker Graphics Plugin',
            'hero.subtitle': 'Professional graphics library with GDI+ technology, supporting transparency and gradient effects for AmiBroker',
            'hero.view_docs': 'View Docs',
            'hero.buy_now': 'Buy Plugin',
            'hero.functions': 'Functions',
            'hero.chart_types': 'Chart Types',
            'hero.version': 'Version',
            'features.title': 'Key Features',
            'features.subtitle': 'Discover the powerful capabilities of GDIPlus Plugin',
            'features.alpha.title': 'Alpha Transparency',
            'features.alpha.desc': 'Support transparency for all drawings, creating beautiful layering effects',
            'features.gradients.title': 'Advanced Gradients',
            'features.gradients.desc': 'Multi-color gradient support: Linear, Radial, Slice with multiple color stops',
            'features.charts.title': 'Pro Charts',
            'features.charts.desc': 'Professional charts: Pie, Donut, Gauge, Radar, Area Charts',
            'features.curves.title': 'Smooth Curves',
            'features.curves.desc': 'Draw smooth curves with Bezier and Spline interpolation',
            'features.fonts.title': 'Custom Fonts',
            'features.fonts.desc': 'Sharp text rendering with gradient, glow and shadow effects',
            'features.svg.title': 'SVG Rendering',
            'features.svg.desc': 'High quality vector graphics rendering from SVG files',
            'features.responsive.title': 'Smart & Responsive',
            'features.responsive.desc': 'Smart scaling with multiple screen resolutions',
            'features.urlimage.title': 'URL Images',
            'features.urlimage.desc': 'Display images directly from Internet with smart caching',
            'showcase.title': 'Showcase',
            'showcase.subtitle': 'View chart examples created by GDIPlus',
            'pricing.title': 'Pricing',
            'pricing.subtitle': 'Choose the plan that fits your needs',
            'pricing.basic.title': 'Basic',
            'pricing.basic.desc': 'For individual users',
            'pricing.basic.f1': 'All basic drawing functions',
            'pricing.basic.f2': 'Transparency support',
            'pricing.basic.f3': 'Linear Gradient',
            'pricing.basic.f4': '1 year updates',
            'pricing.basic.f5': 'Email support',
            'pricing.pro.title': 'Professional',
            'pricing.pro.desc': 'For professional traders',
            'pricing.pro.f1': 'All drawing functions',
            'pricing.pro.f2': 'Advanced Charts',
            'pricing.pro.f3': 'Multi-color Gradients',
            'pricing.pro.f4': 'SVG Rendering',
            'pricing.pro.f5': 'Lifetime updates',
            'pricing.pro.f6': 'Priority support',
            'pricing.enterprise.title': 'Enterprise',
            'pricing.enterprise.desc': 'For businesses',
            'pricing.enterprise.f1': 'All Pro features',
            'pricing.enterprise.f2': 'Multi-license (5 machines)',
            'pricing.enterprise.f3': 'Custom development',
            'pricing.enterprise.f4': 'Direct support',
            'pricing.enterprise.f5': 'Source code access',
            'pricing.buy': 'Buy Now',
            'pricing.contact': 'Contact',
            'pricing.popular': 'Popular',
            'cta.title': 'Ready to upgrade AmiBroker graphics?',
            'cta.subtitle': 'Start using GDIPlus Plugin today and experience the difference',
            'cta.docs': 'View Docs',
            'cta.buy': 'Buy Now',
            'footer.desc': 'Professional graphics library for AmiBroker',
            'footer.product': 'Product',
            'footer.support': 'Support',
            'footer.contact': 'Contact',
            'footer.installation': 'Installation',
            'footer.troubleshooting': 'Troubleshooting',
            'footer.best_practices': 'Best Practices'
        }
    };

    // Load saved language
    let currentLang = localStorage.getItem('lang') || 'vi';
    htmlElement.setAttribute('data-lang', currentLang);
    updateLanguageUI(currentLang);
    applyTranslations(currentLang);

    langToggle.addEventListener('click', function() {
        currentLang = currentLang === 'vi' ? 'en' : 'vi';
        htmlElement.setAttribute('data-lang', currentLang);
        localStorage.setItem('lang', currentLang);
        updateLanguageUI(currentLang);
        applyTranslations(currentLang);
    });

    function updateLanguageUI(lang) {
        if (lang === 'vi') {
            viFlag.style.display = 'block';
            usFlag.style.display = 'none';
        } else {
            viFlag.style.display = 'none';
            usFlag.style.display = 'block';
        }
    }

    function applyTranslations(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    // ============================================
    // Mobile Menu
    // ============================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });

    // ============================================
    // Smooth Scroll for anchor links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Navbar scroll effect
    // ============================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // ============================================
    // FAQ Accordion
    // ============================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // ============================================
    // Intersection Observer for animations
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card, .showcase-item, .pricing-card, .testimonial-card, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
