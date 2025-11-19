# Vercel Deployment Guide

This document provides step-by-step instructions for deploying the GDIPlus documentation website to Vercel.

## Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) (you can use your GitHub account)
3. **Git**: Ensure Git is installed on your system

## Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: GDIPlus documentation v2.0"
```

2. Add GitHub remote:
```bash
git remote add origin https://github.com/chithangnct/AmiPlugin_GDIPlus_Docs.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Select your GitHub repository: `chithangnct/AmiPlugin_GDIPlus_Docs`
4. Configure project settings:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (default)
   - **Build Command**: Leave empty (static site)
   - **Output Directory**: Leave empty (static site)
5. Click "Deploy"

### Method 2: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from project directory:
```bash
vercel
```

4. Follow the prompts:
   - Link to existing project? `N`
   - Project name: `gdiplus-docs`
   - Directory: `./`
   - Auto-deploy? `Y`

## Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed by Vercel

## Project Configuration

The project includes:

- **vercel.json**: Vercel configuration with static file serving and caching headers
- **package.json**: Project metadata and scripts
- Static assets: HTML, CSS, JS, and images

## Environment

- **Type**: Static Site
- **Framework**: None (vanilla HTML/CSS/JS)
- **Build Command**: Not required
- **Output Directory**: Root directory
- **Node.js**: 14+ (for development tools only)

## Features Enabled

- ✅ Static file serving
- ✅ Custom routing for SPA-like behavior
- ✅ Optimized caching headers
- ✅ Automatic deployments on git push
- ✅ Branch previews
- ✅ Custom domains support

## Troubleshooting

### Common Issues

1. **Build fails**: This is a static site, ensure no build command is set
2. **404 errors**: Check that `index.html` exists in the root directory
3. **Assets not loading**: Verify all asset paths are relative and correct

### Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

## Live Site

Once deployed, your site will be available at:
- `https://gdiplus-docs.vercel.app` (auto-generated)
- Your custom domain (if configured)

## Development

For local development:
```bash
npm run dev
# or
python -m http.server 8000
```

Access at `http://localhost:8000`