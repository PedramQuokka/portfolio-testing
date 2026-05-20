# Modern Portfolio Website

A clean, modern portfolio website built with Next.js, React, and TypeScript. Designed with Figma-inspired aesthetics for a professional and minimalist look.

## Features

- ✨ **Modern Design**: Inspired by Figma's clean design language
- ⚡ **Fast Performance**: Built with Next.js for optimized performance
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid development
- 🔤 **TypeScript**: Full TypeScript support for type safety
- 🌙 **Smooth Animations**: Subtle scroll animations and transitions
- 📦 **Easy to Deploy**: Ready for Vercel, Netlify, or any Node.js host

## Sections

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **Projects Showcase** - Grid layout displaying your best work
3. **About Me** - Personal introduction and background
4. **Skills & Experience** - Organized display of technical skills
5. **Contact** - Multiple ways to get in touch
6. **Responsive Navigation** - Sticky header with smooth scrolling

## Installation & Setup

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Quick Start

1. **Install dependencies**

```bash
npm install
# or
yarn install
```

2. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Build for production**

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Customization Guide

### 1. Update Personal Information

Edit `src/pages/index.tsx`:
- Replace "Your Name" with your actual name
- Update the hero section text
- Change email in contact section: `your.email@example.com`
- Add your social media links

### 2. Customize Projects

In `src/pages/index.tsx`, update the projects grid:
- Add project titles and descriptions
- Include relevant technologies (tags)
- Add links to live demos or repositories

### 3. Modify Skills

Update the skills section with your own skills across different categories:
- Design
- Frontend Development
- Tools & Others

### 4. Change Colors

Edit `tailwind.config.js` to customize the color scheme:
- Modify the Figma-inspired color palette
- Adjust brand colors (currently using Figma's blue: `#18A0FB`)

### 5. Add Images/Photos

Place images in `public/` folder and reference them:
```tsx
<img src="/your-image.jpg" alt="description" />
```

### 6. Update Meta Information

Edit `src/pages/index.tsx`:
- Update page title: `<title>Portfolio - Your Name</title>`
- Update meta description
- Add favicon to `public/favicon.ico`

## Project Structure

```
portfolio/
├── public/              # Static files (images, favicon, etc.)
├── src/
│   ├── pages/
│   │   ├── _app.tsx    # App wrapper
│   │   └── index.tsx   # Main portfolio page
│   └── styles/
│       └── globals.css # Global styles with Tailwind
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies and scripts
```

## Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Vercel will automatically build and deploy your site.

### Deploy on Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Deploy Manually

Build the app and deploy the `.next` folder to your hosting provider.

## Development Tips

- Use `npm run lint` to check for code quality issues
- Tailwind CSS classes are auto-completed in VS Code (install Tailwind CSS IntelliSense)
- Use Next.js Image component for optimized images: `<Image src="/..." alt="..." />`
- Check `GITHUB_SETUP.md` for instructions on setting up GitHub repository

## Design System

The portfolio uses a carefully curated color palette inspired by Figma:

- **Primary**: `#0D0D0D` (Dark text)
- **Secondary**: `#4F4F4F` (Medium text)
- **Tertiary**: `#8B8B8B` (Light text)
- **Accent**: `#18A0FB` (Figma blue)
- **Background**: `#FFFFFF` (White)
- **Background Secondary**: `#F3F3F3` (Light gray)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Customize with your information
3. ✅ Test locally: `npm run dev`
4. ✅ Set up GitHub repository (see GITHUB_SETUP.md)
5. ✅ Deploy to Vercel or your preferred platform

## Support

For issues or questions, check the Next.js documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

Built with ❤️ by Your Name
