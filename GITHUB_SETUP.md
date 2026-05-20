# GitHub Setup Guide

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Enter repository name: `portfolio` (or your preferred name)
5. Add description: "My modern portfolio website inspired by Figma"
6. Choose "Public" (so others can see your portfolio)
7. **Do NOT** initialize with README, .gitignore, or license (we'll do this locally)
8. Click "Create repository"

## Step 2: Connect Local Project to GitHub

After Node.js is installed and the project is set up, run these commands in your project directory:

```bash
# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio setup"

# Add remote repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Configure Git (First Time Only)

If you haven't set up git before, configure your name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 4: Update README

The project includes a basic README.md. You can customize it with:
- Your name and title
- Project description
- Links to live demo
- Instructions for local development

## Troubleshooting

**"fatal: not a git repository"**
- Make sure you're in the project directory: `cd /Users/pedram.behnood/Documents/codingPortfolio`
- Run `git init` first

**"fatal: Authentication failed"**
- Use GitHub CLI: `gh auth login` or create a personal access token
- See: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

**Push rejected**
- Make sure your local repository name matches GitHub: `git remote -v`

Good luck with your portfolio! 🚀
