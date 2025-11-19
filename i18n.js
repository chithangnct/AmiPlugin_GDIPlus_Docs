// ============================================
// Internationalization (i18n) System
// ============================================

const translations = {
    vi: {
        // Search
        search: "Tìm kiếm...",
        copy: "Sao chép",
        new: "MỚI",
        best_practice: "Best Practice",

        // Navigation
        nav: {
            getting_started: "Bắt Đầu",
            introduction: "Giới Thiệu",
            installation: "Cài Đặt",
            quickstart: "Quick Start",
            core_functions: "Hàm Cơ Bản",
            state_management: "Quản Lý Trạng Thái",
            colors: "Màu Sắc",
            gradients: "Gradient Brushes",
            fonts: "Font Settings",
            drawing_functions: "Vẽ Hình",
            rectangles: "Hình Chữ Nhật",
            circles: "Hình Tròn & Elip",
            lines: "Đường Thẳng",
            polygons: "Đa Giác",
            text: "Vẽ Text",
            curves: "Smooth Lines",
            advanced_charts: "Charts Nâng Cao",
            pie_charts: "Pie & Donut",
            gauge_charts: "Gauge Charts",
            radar_charts: "Radar Charts",
            area_charts: "Area Charts",
            examples_reference: "Ví Dụ & Tham Khảo",
            examples: "Ví Dụ Tổng Hợp",
            color_constants: "Hằng Số Màu",
            troubleshooting: "Khắc Phục Sự Cố",
            best_practices: "Best Practices"
        },

        // Hero section
        hero: {
            badge: "AmiBroker Graphics Plugin",
            subtitle: "Thư viện vẽ đồ họa chuyên nghiệp với GDI+ technology, hỗ trợ transparency và gradient effects"
        },

        // Features
        features: {
            alpha: {
                title: "Alpha Transparency",
                desc: "Hỗ trợ độ trong suốt (alpha channel) cho tất cả hình vẽ"
            },
            gradients: {
                title: "Advanced Gradients",
                desc: "Linear, radial và slice gradient với multi-color support"
            },
            cache: {
                title: "Smart Caching",
                desc: "Cache thông minh giúp tăng hiệu suất lên đến 10x"
            },
            charts: {
                title: "Pro Charts",
                desc: "Pie, Donut, Gauge, Radar và nhiều loại chart khác"
            },
            curves: {
                title: "Smooth Curves",
                desc: "Vẽ đường cong mượt mà với Bezier và Spline interpolation"
            },
            fonts: {
                title: "Custom Fonts",
                desc: "Hỗ trợ font chữ, kích thước và style tùy chỉnh linh hoạt"
            },
            svg: {
                title: "SVG Rendering",
                desc: "Render đồ họa vector từ file SVG với chất lượng cao"
            },
            responsive: {
                title: "Smart & Responsive",
                desc: "Co giãn thông minh với nhiều phân giải màn hình"
            },
            urlimage: {
                title: "URL Images",
                desc: "Hiển thị hình ảnh trực tiếp từ Internet"
            }
        },

        // Installation
        install: {
            title: "Cài Đặt",
            intro: "Cài đặt GDIPlus plugin chỉ trong vài bước đơn giản:",
            step1: {
                title: "Download Plugin",
                desc1: "Copy file",
                desc2: "vào thư mục AmiBroker (thường là"
            },
            step2: {
                title: "Khởi động lại",
                desc: "Khởi động lại AmiBroker để plugin được nạp"
            },
            step3: {
                title: "Verify",
                desc: "Kiểm tra plugin đã được nạp trong <strong>Tools → Preferences → AFL</strong>"
            },
            requirements: "Yêu Cầu Hệ Thống"
        },

        // Quick Start
        quickstart: {
            title: "Quick Start",
            intro: "Bắt đầu với ví dụ đơn giản:",
            example_title: "Ví Dụ Vẽ Hình Chữ Nhật Đơn Giản"
        },

        // State Management
        state: {
            title: "🔄 Quản Lý Trạng Thái",
            reset: {
                desc: "Reset tất cả cài đặt về mặc định.",
                returns: "Không có giá trị trả về",
                default_state: "Trạng Thái Mặc Định",
                brush: "Brush: Trắng (alpha=255)",
                pen: "Pen: Đen (alpha=255, width=1)",
                warning: "Gọi hàm này ở đầu mỗi AFL file để đảm bảo không bị kế thừa cài đặt từ file khác."
            },
            cache: {
                desc: "Xóa tất cả file PNG cache trong thư mục temp.",
                returns: "Số lượng file đã xóa",
                when: "Khi Nào Dùng",
                when1: "• Sau khi cập nhật plugin",
                when2: "• Khi ảnh hiển thị không đúng",
                when3: "• Để giải phóng dung lượng"
            }
        },

        // Parameters
        params: {
            returns: "Trả Về"
        },

        // Curves
        curves: {
            title: "〰 Smooth Lines & Area Charts",
            smoothline: {
                desc: "Vẽ đường cong mượt mà từ chuỗi tọa độ."
            },
            smoothlinexy: {
                desc: "Vẽ đường cong mượt mà từ 2 chuỗi tọa độ X và Y riêng biệt.",
                xstr: 'Chuỗi tọa độ X "x1,x2,x3,x4,..."',
                ystr: 'Chuỗi tọa độ Y "y1,y2,y3,y4,..."',
                smooth: "Độ mượt (0.0-1.0), 0=thẳng, 1=mượt nhất",
                dot: "Hiển thị điểm (0=không, 1=có)",
                advantage: "Ưu Điểm",
                advantage_desc: "Cho phép vẽ chart từ array AmiBroker một cách linh hoạt hơn, đặc biệt hữu ích khi X và Y được tính toán riêng biệt."
            }
        },

        // Code comments (Vietnamese)
        comments: {
            reset_defaults: "// Reset về cài đặt mặc định",
            set_brush: "// Đặt màu brush: Đỏ với alpha 200",
            set_pen: "// Đặt màu pen: Trắng, đặc, độ dày 2px",
            draw_rectangle: "// Vẽ hình chữ nhật",
            draw_gradient: "// Vẽ với gradient",
            always_start_clean: "// Luôn bắt đầu với trạng thái sạch",
            your_drawing_code: "// Code vẽ của bạn ở đây",
            clear_cache: "// Xóa cache và lấy số lượng",
            smooth_curve: "// Đường cong mượt",
            smooth_curve_xy: "// Đường cong mượt với tọa độ X và Y riêng biệt",
            line_chart_array: "// Line chart từ array AmiBroker"
        },

        // Footer
        footer: {
            desc: "Thư viện đồ họa chuyên nghiệp cho AmiBroker",
            resources: "Tài Nguyên",
            documentation: "Tài Liệu",
            support: "Hỗ Trợ"
        },

        // Builder.js translations
        functions: {
            parameters: "Tham số:",
            returns: "Trả về:",
            defaults: "Mặc định:",
            example: "Ví dụ:",
            when_to_use: "Khi Nào Dùng",
            advantage: "Ưu Điểm",
            installation_guide: "Hướng dẫn cài đặt",
            installation_intro: "Cài đặt GDIPlus plugin chỉ trong vài bước đơn giản:",
            installation_steps: "Các bước cài đặt:",
            step1_title: "Bước 1 - Download Plugin:",
            step1_desc: "Copy file",
            step1_desc2: "vào thư mục AmiBroker (thường là",
            step2_title: "Bước 2 - Khởi động lại:",
            step2_desc: "Khởi động lại AmiBroker để plugin được nạp",
            step3_title: "Bước 3 - Verify:",
            step3_desc: "Kiểm tra plugin đã được nạp trong",
            system_requirements: "Yêu cầu hệ thống:",
            simple_example: "Ví dụ đơn giản",
            quickstart_desc: "Bắt đầu với ví dụ vẽ hình chữ nhật và hình tròn:",
            basic_example: "Ví dụ cơ bản"
        },

        // Category titles
        categories: {
            state_management: "Quản Lý Trạng Thái",
            colors: "Cài Đặt Màu Sắc",
            gradients: "Gradient Brushes",
            fonts: "Cài Đặt Font",
            shapes: "Các Hàm Vẽ Hình",
            polygons: "Đa Giác (Polygons)",
            text: "Vẽ Text",
            lines: "Smooth Lines",
            charts: "Biểu Đồ Chuyên Nghiệp",
            advanced: "Chức Năng Nâng Cao"
        },

        // Flip card feature
        card: {
            view_image: "Hình minh họa",
            back: "Quay lại",
            image_title: "Hình minh họa",
            fullscreen: "Xem toàn màn hình",
            no_image: "Chưa có hình minh họa"
        },

        // Action buttons
        actions: {
            buy_plugin: "Mua Plugin",
            contact: "Liên hệ"
        }
    },

    en: {
        // Search
        search: "Search...",
        copy: "Copy",
        new: "NEW",
        best_practice: "Best Practice",

        // Navigation
        nav: {
            getting_started: "Getting Started",
            introduction: "Introduction",
            installation: "Installation",
            quickstart: "Quick Start",
            core_functions: "Core Functions",
            state_management: "State Management",
            colors: "Colors",
            gradients: "Gradient Brushes",
            fonts: "Font Settings",
            drawing_functions: "Drawing Functions",
            rectangles: "Rectangles",
            circles: "Circles & Ellipses",
            lines: "Lines",
            polygons: "Polygons",
            text: "Text Drawing",
            curves: "Smooth Lines",
            advanced_charts: "Advanced Charts",
            pie_charts: "Pie & Donut",
            gauge_charts: "Gauge Charts",
            radar_charts: "Radar Charts",
            area_charts: "Area Charts",
            examples_reference: "Examples & Reference",
            examples: "Examples",
            color_constants: "Color Constants",
            troubleshooting: "Troubleshooting",
            best_practices: "Best Practices"
        },

        // Hero section
        hero: {
            badge: "AmiBroker Graphics Plugin",
            subtitle: "Professional graphics library with GDI+ technology, supporting transparency and gradient effects"
        },

        // Features
        features: {
            alpha: {
                title: "Alpha Transparency",
                desc: "Support for alpha channel transparency in all drawings"
            },
            gradients: {
                title: "Advanced Gradients",
                desc: "Linear, radial and slice gradients with multi-color support"
            },
            cache: {
                title: "Smart Caching",
                desc: "Smart caching system boosts performance up to 10x"
            },
            charts: {
                title: "Pro Charts",
                desc: "Pie, Donut, Gauge, Radar and many other chart types"
            },
            curves: {
                title: "Smooth Curves",
                desc: "Draw smooth curves with Bezier and Spline interpolation"
            },
            fonts: {
                title: "Custom Fonts",
                desc: "Flexible support for custom fonts, sizes and styles"
            },
            svg: {
                title: "SVG Rendering",
                desc: "Render high-quality vector graphics from SVG files"
            },
            responsive: {
                title: "Smart & Responsive",
                desc: "Smart scaling with multiple screen resolutions"
            },
            urlimage: {
                title: "URL Images",
                desc: "Display images directly from Internet"
            }
        },

        // Installation
        install: {
            title: "Installation",
            intro: "Install GDIPlus plugin in just a few simple steps:",
            step1: {
                title: "Download Plugin",
                desc1: "Copy the",
                desc2: "file to your AmiBroker folder (usually"
            },
            step2: {
                title: "Restart",
                desc: "Restart AmiBroker to load the plugin"
            },
            step3: {
                title: "Verify",
                desc: "Verify the plugin is loaded in <strong>Tools → Preferences → AFL</strong>"
            },
            requirements: "System Requirements"
        },

        // Quick Start
        quickstart: {
            title: "Quick Start",
            intro: "Start with a simple example:",
            example_title: "Simple Rectangle Example"
        },

        // State Management
        state: {
            title: "🔄 State Management",
            reset: {
                desc: "Reset all settings to defaults.",
                returns: "No return value",
                default_state: "Default State",
                brush: "Brush: White (alpha=255)",
                pen: "Pen: Black (alpha=255, width=1)",
                warning: "Call this function at the beginning of each AFL file to ensure settings are not inherited from other files."
            },
            cache: {
                desc: "Clear all PNG cache files in the temp folder.",
                returns: "Number of files deleted",
                when: "When to Use",
                when1: "• After updating the plugin",
                when2: "• When images display incorrectly",
                when3: "• To free up disk space"
            }
        },

        // Parameters
        params: {
            returns: "Returns"
        },

        // Curves
        curves: {
            title: "〰 Smooth Lines & Area Charts",
            smoothline: {
                desc: "Draw smooth curves from coordinate strings."
            },
            smoothlinexy: {
                desc: "Draw smooth curves from separate X and Y coordinate strings.",
                xstr: 'X coordinate string "x1,x2,x3,x4,..."',
                ystr: 'Y coordinate string "y1,y2,y3,y4,..."',
                smooth: "Smoothness (0.0-1.0), 0=straight, 1=smoothest",
                dot: "Show dots (0=no, 1=yes)",
                advantage: "Advantage",
                advantage_desc: "Allows more flexible chart drawing from AmiBroker arrays, especially useful when X and Y are calculated separately."
            }
        },

        // Code comments (English)
        comments: {
            reset_defaults: "// Reset to default settings",
            set_brush: "// Set brush color: Red with 200 alpha",
            set_pen: "// Set pen color: White, solid, 2px width",
            draw_rectangle: "// Draw rectangle",
            draw_gradient: "// Draw with gradient",
            always_start_clean: "// Always start with clean state",
            your_drawing_code: "// Your drawing code here",
            clear_cache: "// Clear cache and get count",
            smooth_curve: "// Smooth curve",
            smooth_curve_xy: "// Smooth curve with separate X and Y coordinates",
            line_chart_array: "// Line chart from AmiBroker array"
        },

        // Footer
        footer: {
            desc: "Professional graphics library for AmiBroker",
            resources: "Resources",
            documentation: "Documentation",
            support: "Support"
        },

        // Builder.js translations
        functions: {
            parameters: "Parameters:",
            returns: "Returns:",
            defaults: "Defaults:",
            example: "Example:",
            when_to_use: "When to Use",
            advantage: "Advantage",
            installation_guide: "Installation Guide",
            installation_intro: "Install GDIPlus plugin in just a few simple steps:",
            installation_steps: "Installation Steps:",
            step1_title: "Step 1 - Download Plugin:",
            step1_desc: "Copy",
            step1_desc2: "to AmiBroker folder (usually",
            step2_title: "Step 2 - Restart:",
            step2_desc: "Restart AmiBroker to load the plugin",
            step3_title: "Step 3 - Verify:",
            step3_desc: "Check plugin is loaded in",
            system_requirements: "System Requirements:",
            simple_example: "Simple Example",
            quickstart_desc: "Start with a simple rectangle and circle example:",
            basic_example: "Basic Example"
        },

        // Category titles
        categories: {
            state_management: "State Management",
            colors: "Color Settings",
            gradients: "Gradient Brushes",
            fonts: "Font Settings",
            shapes: "Drawing Shapes",
            polygons: "Polygons",
            text: "Text Drawing",
            lines: "Smooth Lines",
            charts: "Professional Charts",
            advanced: "Advanced Features"
        },

        // Flip card feature
        card: {
            view_image: "View Image",
            back: "Back",
            image_title: "Example Image",
            fullscreen: "View Fullscreen",
            no_image: "No image available"
        },

        // Action buttons
        actions: {
            buy_plugin: "Buy Plugin",
            contact: "Contact"
        }
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'vi';

// Set initial language
document.documentElement.setAttribute('data-lang', currentLang);

// Translation function
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];

    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            console.warn(`Translation missing for key: ${key} in language: ${currentLang}`);
            return key;
        }
    }

    return value;
}

// Update all elements with data-i18n attributes
function updateTranslations() {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);

        if (translation) {
            element.textContent = translation;
        }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = t(key);

        if (translation) {
            element.placeholder = translation;
        }
    });

    // Update code comments
    updateCodeComments();

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('data-lang', currentLang);
}

// Update code comments based on language
function updateCodeComments() {
    const codeBlocks = document.querySelectorAll('code[data-lang]');

    codeBlocks.forEach(block => {
        const originalLang = block.getAttribute('data-lang');

        // If original language matches current, skip
        if (originalLang === currentLang) return;

        // Get the comment map
        const comments = translations[currentLang].comments;

        // Replace comments in code
        let html = block.innerHTML;

        // Comment replacements
        const commentMap = {
            vi: {
                "Reset to default settings": "Reset về cài đặt mặc định",
                "Set brush color: Red with 200 alpha": "Đặt màu brush: Đỏ với alpha 200",
                "Set pen color: White, solid, 2px width": "Đặt màu pen: Trắng, đặc, độ dày 2px",
                "Draw rectangle": "Vẽ hình chữ nhật",
                "Draw with gradient": "Vẽ với gradient",
                "Always start with clean state": "Luôn bắt đầu với trạng thái sạch",
                "Your drawing code here": "Code vẽ của bạn ở đây",
                "Clear cache and get count": "Xóa cache và lấy số lượng",
                "Smooth curve": "Đường cong mượt",
                "Smooth curve with separate X and Y coordinates": "Đường cong mượt với tọa độ X và Y riêng biệt",
                "Line chart from AmiBroker array": "Line chart từ array AmiBroker",
                "Deleted %d cache files": "Đã xóa %d files cache"
            },
            en: {
                "Reset về cài đặt mặc định": "Reset to default settings",
                "Đặt màu brush: Đỏ với alpha 200": "Set brush color: Red with 200 alpha",
                "Đặt màu pen: Trắng, đặc, độ dày 2px": "Set pen color: White, solid, 2px width",
                "Vẽ hình chữ nhật": "Draw rectangle",
                "Vẽ với gradient": "Draw with gradient",
                "Luôn bắt đầu với trạng thái sạch": "Always start with clean state",
                "Code vẽ của bạn ở đây": "Your drawing code here",
                "Xóa cache và lấy số lượng": "Clear cache and get count",
                "Đường cong mượt": "Smooth curve",
                "Đường cong mượt với tọa độ X và Y riêng biệt": "Smooth curve with separate X and Y coordinates",
                "Line chart từ array AmiBroker": "Line chart from AmiBroker array",
                "Đã xóa %d files cache": "Deleted %d cache files"
            }
        };

        // Apply comment translations
        if (commentMap[currentLang]) {
            Object.entries(commentMap[currentLang]).forEach(([from, to]) => {
                const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                html = html.replace(regex, to);
            });
        }

        block.innerHTML = html;
        block.setAttribute('data-lang', currentLang);
    });
}

// Switch language
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    updateTranslations();

    // Update language toggle button
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = lang === 'vi' ? 'EN' : 'VI';
    }

    // Dispatch custom event to notify other scripts
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    updateTranslations();

    // Set initial language button text
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = currentLang === 'vi' ? 'EN' : 'VI';
    }

    // Add language toggle event listener
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'vi' ? 'en' : 'vi';
            switchLanguage(newLang);
        });
    }
});

// Helper function to get current language (vi or en)
function getCurrentLang() {
    return currentLang;
}

// Helper function to check if Vietnamese
function isVi() {
    return currentLang === 'vi';
}

// Export for use in other scripts
window.i18n = {
    t,
    switchLanguage,
    getCurrentLang,
    isVi
};
