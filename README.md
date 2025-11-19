# GDIPlus Documentation Website v2.0

Modern, interactive, **bilingual** documentation website for the GDIPlus AmiBroker plugin, inspired by Claude Code documentation.

## 🎨 Features

### v2.0 Updates
- 🌐 **Bilingual Support**: Vietnamese & English with auto-translating code comments
- ✨ **Lucide Icons**: Professional, monochrome SVG icons throughout
- 🎨 **Inter Font**: Modern, highly readable typography
- 💻 **Enhanced Code Blocks**: Advanced AFL syntax highlighting with copy buttons
- 🆕 **GDIpSmoothLineXY**: Documentation for new function
- 📋 **Copy Buttons**: One-click code copying with visual feedback

### Core Features
- **Modern Design**: Clean, professional interface with dark/light theme support
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling sidebar with active section highlighting
- **Search Functionality**: Quick search through documentation
- **Code Examples**: Syntax-highlighted code blocks with language-aware comments
- **Tabs & Accordions**: Organized content with interactive elements
- **Performance Optimized**: Smart caching and debounced scroll events

## 📁 Structure

```
docs/
├── index.html          # Main documentation (with Lucide icons + i18n)
├── styles.css          # All styling (Inter font + enhanced code styles)
├── script.js           # Interactive features
├── i18n.js            # Translation system (Vietnamese/English)
├── README.md          # This file
├── CHANGELOG.md       # Version history and updates
├── QUICK_GUIDE.md     # Quick start guide (Vietnamese)
├── FEATURES.md        # Detailed feature list
└── HOW_TO_OPEN.md     # Opening instructions
```

## 🚀 Usage

### Local Development

1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (http-server)
   npx http-server
   ```
3. Visit `http://localhost:8000`

### Deploy to Vercel

This project is ready for deployment to Vercel:

1. **Quick Deploy**: 
   ```bash
   # Push to GitHub
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   
   # Deploy to Vercel
   npx vercel --prod
   ```

2. **GitHub Integration**: Connect your GitHub repository to Vercel for automatic deployments
3. **Static Site**: No build process required - pure HTML/CSS/JS

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Other Deployment Options

- **GitHub Pages**: Upload all files to your repository
- **Netlify**: Drag & drop the entire folder
- **Custom Server**: Upload all files to your web server

## ⚙️ Customization

### Theme Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --accent-primary: #5b63d3;
    --accent-secondary: #7c3aed;
    /* ... more colors */
}
```

### Adding New Sections

1. Add HTML section in `index.html`:
```html
<section id="new-section" class="doc-section">
    <h2>New Section Title</h2>
    <p>Content here...</p>
</section>
```

2. Add navigation link in sidebar:
```html
<a href="#new-section" class="nav-link">
    <span class="nav-icon">📖</span> New Section
</a>
```

### Code Highlighting

Uses Prism.js for syntax highlighting. Add more languages in `index.html`:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-[language].min.js"></script>
```

## 🎯 Interactive Features

### Keyboard Shortcuts

- `Ctrl/Cmd + K`: Focus search
- `Ctrl/Cmd + /`: Toggle sidebar (mobile)
- `Esc`: Clear search

### Components

- **Theme Toggle**: Light/Dark mode (saves preference)
- **Mobile Menu**: Hamburger menu for mobile devices
- **Copy Buttons**: One-click code copying
- **Tabs**: Multiple code examples
- **Accordions**: Expandable troubleshooting sections
- **Back to Top**: Auto-showing scroll button

## 📱 Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🎨 Design System

### Typography

- Headings: System font stack
- Code: Consolas, Monaco, monospace
- Body: -apple-system, Segoe UI, Roboto

### Colors

#### Light Theme
- Background: White (#ffffff)
- Text: Dark (#1a202c)
- Accent: Purple gradient

#### Dark Theme
- Background: Dark blue (#0f172a)
- Text: Light (#f1f5f9)
- Accent: Light purple

### Spacing

- Small: 8px
- Medium: 16px
- Large: 24px
- XLarge: 40px

## 🔧 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

## 📝 Content Structure

### Main Sections

1. **Getting Started**
   - Introduction
   - Installation
   - Quick Start

2. **Core Functions**
   - State Management
   - Colors
   - Gradients
   - Fonts

3. **Drawing Functions**
   - Rectangles
   - Circles & Ellipses
   - Lines
   - Polygons
   - Text
   - Curves

4. **Advanced Charts**
   - Pie & Donut
   - Gauge Charts
   - Radar Charts
   - Area Charts

5. **Examples & Reference**
   - Examples
   - Color Constants
   - Troubleshooting
   - Best Practices

## 🚀 Performance

- CSS transitions for smooth animations
- Debounced scroll handlers
- Efficient DOM queries
- Local storage for theme preference
- Smart caching system

## 📄 License

© 2025 GDIPlus Plugin. All rights reserved.

## 🤝 Contributing

To improve documentation:

1. Edit content in `index.html`
2. Test responsive design
3. Check dark/light themes
4. Verify all interactive features
5. Test on multiple browsers

## 📞 Support

For issues or questions about the plugin, refer to the troubleshooting section in the documentation.

---

**Version**: 2.0
**Last Updated**: November 2025
**Built with**: HTML5, CSS3, Vanilla JavaScript, Prism.js
