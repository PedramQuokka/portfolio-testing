# Copilot Instructions

This portfolio project is a modern Next.js website with Figma-inspired design language.

## Project Overview

- **Framework**: Next.js 14 with React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment Ready**: Vercel-optimized

## Key Files

- `src/pages/index.tsx` - Main portfolio page with all sections
- `tailwind.config.js` - Design system colors and typography
- `src/styles/globals.css` - Global styles

## Common Tasks

### Add a New Project

Edit `src/pages/index.tsx` in the projects section and add to the array:

```tsx
{
  title: 'Project Name',
  description: 'Project description',
  technologies: ['React', 'TypeScript'],
  link: 'https://github.com/...'
}
```

### Customize Colors

Edit `tailwind.config.js` in the `extend.colors` section.

### Update Personal Info

Search for placeholder text:
- "Your Name"
- "your.email@example.com"
- "Your photo here"

Replace with actual information.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

Push to GitHub and connect to Vercel for automatic deployments.
