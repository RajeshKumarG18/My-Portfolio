# Rajesh Kumar G - Portfolio Website

[![React](https://img.shields.io/badge/React-19.2.3-brightgreen)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-orange)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-teal)](https://tailwindcss.com/)

## Overview

This is a modern, responsive portfolio website built for **Rajesh Kumar G**, a passionate **Frontend Developer & UI Designer**. The site showcases professional experience, skills, projects, and contact information with smooth animations, mobile-first design, and optimal performance.

Key features:
- Single Page Application (SPA) with smooth scrolling navigation
- Fully responsive design (mobile, tablet, desktop)
- Optimized single-file build for easy deployment
- Firebase integration ready
- \"Open to Work\" badge with hover effects
- Cache-control headers for reliable page reloads

## Live Demo

Deployed on [GitHub Pages](YOUR_GITHUB_USERNAME.github.io/portfolio-website) (update after deployment)

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 19.2.3, TypeScript 5.9.3 |
| **Build Tool** | Vite 7.2.4 |
| **Styling** | TailwindCSS 4.1.17, clsx, tailwind-merge |
| **Icons** | React Icons 5.6.0 |
| **Backend** | Firebase 12.10.0 (contact form ready) |
| **Optimization** | vite-plugin-singlefile (single HTML output) |

## Features

- **Hero Section**: Professional introduction with profile image and CTA buttons
- **About**: Personal background and story
- **Skills**: Technical skills with visual progress indicators
- **Projects**: Showcase of work experience (AmazonHub, Indica Software)
- **Contact**: Firebase-powered contact form
- **Performance**: Single-file bundle, lazy loading, optimized images

## Quick Start (Local Development)

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
cd \"Portfolio Website\"
npm install
```

### Development
```bash
npm run dev
```
Opens at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Outputs optimized single HTML file to `/dist/index.html`

### Preview Production Build
```bash
npm run preview
```

## Deployment to GitHub Pages

### Method 1: Manual (Recommended for single-file)
1. Run `npm run build`
2. Copy `/dist/index.html` to repository root or `docs/` branch
3. Go to GitHub repo **Settings > Pages**
4. Select **Deploy from a branch** → `main` or `docs` → `/ (root)`
5. Site live at `https://YOUR_USERNAME.github.io/Portfolio-Website`

### Method 2: Using gh-pages (Automated)
```bash
npm install --save-dev gh-pages
```
Add to package.json:
```json
\"homepage\": \"https://YOUR_USERNAME.github.io/Portfolio-Website\",
\"scripts\": {
  \"predeploy\": \"npm run build\",
  \"deploy\": \"gh-pages -d dist\"
}
```
Then: `npm run deploy`

## Project Structure

```
Portfolio Website/
├── public/
│   └── images/          # Profile & project screenshots
├── src/
│   ├── components/      # Reusable components (Navbar, Hero, etc.)
│   ├── utils/           # Utility functions (cn.ts)
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── package.json         # Dependencies & scripts
├── vite.config.ts       # Vite + Tailwind + SingleFile config
├── tsconfig.json        # TypeScript config
└── index.html           # App shell with cache-control
```

## Customization

1. **Profile Image**: Replace `images/Profile_Picture.jpeg`
2. **Projects**: Update `Projects.tsx` with new screenshots (`images/AmazonHub.png`, etc.)
3. **Contact**: Configure Firebase in environment variables
4. **Colors**: Modify Tailwind config or CSS variables
5. **Links**: Update social/contact links in components

## License

This project is [MIT](LICENSE) licensed - feel free to use as inspiration!

## Connect

- [LinkedIn](https://linkedin.com/in/rajeshkumarg)
- [GitHub](https://github.com/YOUR_USERNAME)
- Email: rajesh.kumar@techpearl.com

---

**Built with, using React + Vite + TailwindCSS**

