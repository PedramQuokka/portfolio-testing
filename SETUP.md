# Portfolio Setup Instructions

Your modern portfolio website is ready! Follow these steps to get started.

## ✅ What's Been Set Up

Your project structure is complete with:
- ✓ Next.js 14 with React 18 and TypeScript
- ✓ Tailwind CSS with Figma-inspired color palette
- ✓ Full portfolio website with 5 main sections
- ✓ Responsive design for all devices
- ✓ ESLint for code quality
- ✓ Git initialization ready
- ✓ Production-ready configuration

## 🚀 Getting Started

### Step 1: Install Node.js (If Not Already Installed)

If you haven't installed Node.js yet, visit [nodejs.org](https://nodejs.org) and download the LTS version for macOS, or use Homebrew:

```bash
# Install Homebrew first (if needed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Node.js
brew install node

# Verify installation
node --version
npm --version
```

### Step 2: Install Dependencies

Navigate to your project folder and run:

```bash
cd /Users/pedram.behnood/Documents/codingPortfolio
npm install
```

This will install all required packages (React, Next.js, Tailwind CSS, etc.).

### Step 3: Run Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio.

## 📝 Customize Your Portfolio

### 1. Update Your Information

Open `src/pages/index.tsx` and replace:
- "Your Name" → Your actual name
- "your.email@example.com" → Your email
- "Your photo here" → Your actual photo

### 2. Add Your Projects

In `src/pages/index.tsx`, find the projects section and update:
- Project titles
- Descriptions
- Technologies used
- Links to GitHub or live demos

### 3. Update About Section

Personalize the about section with your background and experience.

### 4. Add Social Links

Update social media links in the contact section (Twitter, GitHub, LinkedIn, etc.)

### 5. Customize Colors (Optional)

Edit `tailwind.config.js` to change colors or fonts.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to GitHub & Vercel

### 1. Create GitHub Repository

See `GITHUB_SETUP.md` for detailed instructions on:
- Creating a repository
- Initializing git locally
- Pushing your code

### 2. Deploy to Vercel

The easiest deployment option:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel handles everything automatically!

## 🛠️ Available Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Check Node.js installation
npm --version
node --version
```

## 📂 Project Structure

```
codingPortfolio/
├── public/              # Static files
├── src/
│   ├── pages/
│   │   ├── _app.tsx    # App wrapper
│   │   └── index.tsx   # Your portfolio page
│   └── styles/
│       └── globals.css # Global styles
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies
└── README.md           # Full documentation
```

## 💡 Tips

- Use the browser developer tools to test responsiveness
- Check `README.md` for detailed customization guide
- Read `GITHUB_SETUP.md` for GitHub and deployment instructions
- Tailwind CSS IntelliSense extension helps with code completion in VS Code
- Preview designs locally before pushing to GitHub

## ❓ Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Clear cache and reinstall**
```bash
rm -rf node_modules
npm install
```

**TypeScript errors?**
```bash
npm run build
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## ✨ Next Steps

1. ✓ Check back when Node.js is installed
2. ✓ Run `npm install`
3. ✓ Run `npm run dev`
4. ✓ Customize your portfolio
5. ✓ Follow GITHUB_SETUP.md for GitHub & deployment

---

**You're all set! Your modern portfolio website is ready to customize and deploy.** 🎉
