# GDIPlus Documentation - Changelog

## Version 2.0 - Major Update (November 2025)

### 🎨 **Design Updates**

#### Icons
- ✅ **Replaced all icons with Lucide Icons** (professional, monochrome SVG icons)
- ✅ All icons now use consistent stroke-width of 2px
- ✅ Icons scale and animate smoothly on hover
- ✅ Navigation icons integrated seamlessly

#### Typography
- ✅ **Changed primary font to Inter** (modern, highly readable)
- ✅ Code font: JetBrains Mono / Fira Code fallback
- ✅ Improved line-height for better readability (1.6 → 1.8 for code)
- ✅ Consistent font weights across the site

### 💻 **Code Block Enhancements**

#### Syntax Highlighting
- ✅ **Custom AFL syntax highlighting implemented**
- ✅ Function names: <span style="color: #4EC9B0">**Cyan/Teal** (#4EC9B0)</span>
- ✅ Comments: <span style="color: #6A9955">**Green** (#6A9955)</span> with italic style
- ✅ Numbers: <span style="color: #B5CEA8">**Light Green** (#B5CEA8)</span>
- ✅ Strings: <span style="color: #CE9178">**Orange** (#CE9178)</span>
- ✅ Keywords: <span style="color: #C586C0">**Purple** (#C586C0)</span>

#### Code Block Features
- ✅ **Copy button** with icon at top-right corner of each code block
- ✅ Clean header with title and copy button
- ✅ Professional terminal-style appearance
- ✅ Better contrast and readability

### 🌐 **Bilingual Support (Vietnamese/English)**

#### Language Toggle
- ✅ **Globe icon button** with EN/VI text toggle
- ✅ Positioned in header next to theme toggle
- ✅ Language preference saved to localStorage
- ✅ Smooth language switching without page reload

#### Translation Features
- ✅ **All UI elements translated** (navigation, buttons, labels)
- ✅ **All content translated** (headings, descriptions, instructions)
- ✅ **Code comments translated** dynamically based on language
- ✅ Translation system using `data-i18n` attributes
- ✅ Comprehensive i18n.js translation file

#### Supported Languages
- 🇻🇳 Vietnamese (Tiếng Việt) - Default
- 🇬🇧 English

### 🆕 **New Features**

#### GDIpSmoothLineXY Function
- ✅ Added documentation for new `GDIpSmoothLineXY()` function
- ✅ Complete parameter descriptions (xstr, ystr, smoothRatio, dotMode)
- ✅ Code examples with bilingual comments
- ✅ "NEW" badge to highlight new feature
- ✅ Advantage box explaining use cases

### 📝 **Content Updates**

#### Documentation Structure
- ✅ All sections now use `data-i18n` attributes
- ✅ Improved semantic HTML
- ✅ Better accessibility with ARIA labels
- ✅ Consistent formatting throughout

#### Code Examples
- ✅ All code blocks now have manual syntax highlighting
- ✅ Comments switch language automatically
- ✅ Function names highlighted in cyan
- ✅ Better visual hierarchy in code

### 🎨 **Visual Improvements**

#### Color Scheme
- ✅ Code functions: **#4EC9B0** (Cyan) - highly visible
- ✅ Code comments: **#6A9955** (Green) - easy to distinguish
- ✅ NEW badges: **#10b981** (Emerald) gradient
- ✅ Consistent accent color: **#5b63d3** (Purple)

#### Animations
- ✅ Feature icons scale on hover (1.0 → 1.1)
- ✅ Language toggle smooth transitions
- ✅ Icon opacity changes on interaction
- ✅ Smooth language switching

### 🔧 **Technical Improvements**

#### File Structure
```
docs/
├── index.html          # Main documentation (updated with Lucide icons + i18n)
├── styles.css          # Updated with Inter font + enhanced code styles
├── script.js           # Enhanced interactivity
├── i18n.js            # NEW: Translation system
├── README.md          # Documentation guide
├── FEATURES.md        # Feature list
├── HOW_TO_OPEN.md     # Opening instructions
└── CHANGELOG.md       # This file
```

#### JavaScript Modules
- ✅ **i18n.js**: Complete internationalization system
- ✅ Translation function with nested key support
- ✅ Code comment translation engine
- ✅ Language persistence with localStorage

#### CSS Architecture
- ✅ CSS custom properties for consistency
- ✅ Dark theme compatible color scheme
- ✅ Modular component styles
- ✅ Responsive design maintained

### 📱 **Responsive Design**

#### All Breakpoints Tested
- ✅ Desktop: Full layout with sidebar
- ✅ Tablet: Optimized spacing
- ✅ Mobile: Hamburger menu with language toggle

#### Mobile Optimizations
- ✅ Touch-friendly language toggle
- ✅ Readable code on small screens
- ✅ Copy button accessible on mobile

### ⚡ **Performance**

#### Optimizations
- ✅ Minimal additional JavaScript load
- ✅ Efficient translation caching
- ✅ No framework dependencies
- ✅ Fast language switching

#### Loading
- ✅ Inter font loaded from Google Fonts CDN
- ✅ Lucide icons inline (no external requests)
- ✅ i18n.js loads before script.js
- ✅ Total bundle: ~95KB (including translations)

---

## How to Use New Features

### 1. Language Toggle

Click the globe icon (🌐) in the header to switch between Vietnamese and English:

```
Current: Vietnamese → Click → English
Current: English → Click → Vietnamese
```

Your language preference is automatically saved.

### 2. Enhanced Code Blocks

All code blocks now feature:
- **Function names in cyan** (#4EC9B0)
- **Comments in green** (#6A9955)
- **Copy button** at top-right
- **Language-aware comments**

### 3. GDIpSmoothLineXY

New function for flexible line chart drawing:

```afl
// Vietnamese mode
// Đường cong mượt với tọa độ X và Y riêng biệt
GDIpSmoothLineXY(x_coords, y_coords, 0.8, 1);

// English mode
// Smooth curve with separate X and Y coordinates
GDIpSmoothLineXY(x_coords, y_coords, 0.8, 1);
```

---

## Browser Compatibility

### Tested Browsers
- ✅ Chrome 120+ (Full support)
- ✅ Firefox 121+ (Full support)
- ✅ Edge 120+ (Full support)
- ✅ Safari 17+ (Full support)

### Required Features
- CSS Custom Properties
- localStorage API
- ES6+ JavaScript
- SVG support

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + K` | Focus search |
| `Ctrl/Cmd + /` | Toggle sidebar (mobile) |
| `Esc` | Clear search |

**Note:** Language toggle requires mouse/touch interaction.

---

## Migration Notes

### From v1.0 to v2.0

No migration needed! Just:
1. Open `index.html` in your browser
2. Your theme preference is preserved
3. Language defaults to Vietnamese (can switch to English)

### Customization

To change default language, edit `i18n.js`:

```javascript
// Line 209
let currentLang = localStorage.getItem('language') || 'en'; // Changed from 'vi'
```

---

## Credits

- **Icons**: [Lucide Icons](https://lucide.dev) - Beautiful, consistent icon set
- **Font**: [Inter](https://rsms.me/inter/) - Google Fonts
- **Code Font**: JetBrains Mono, Fira Code
- **Color Scheme**: VS Code Dark+ inspired

---

## What's Next?

### Planned Features
- [ ] Search with language support
- [ ] More code examples
- [ ] Interactive code playground
- [ ] PDF export (multilingual)
- [ ] Video tutorials

### Feedback

Have suggestions or found issues? Please let us know!

---

**Built with ❤️ for the AmiBroker community**

© 2025 GDIPlus Plugin Documentation
