# Deployment Guide for GitHub Pages

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Your portfolio files (already in this repository)

## Deployment Steps

1. **Create a new repository on GitHub:**
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon in the top right corner and select "New repository"
   - Give your repository a name (e.g., `mclean-portfolio`)
   - Set the repository to "Public"
   - Do NOT initialize with a README (we'll push the existing files)
   - Click "Create repository"

2. **Push your code to GitHub:**
   - If you haven't already, initialize git in your project folder:
     ```
     git init
     git add .
     git commit -m "Initial commit"
     ```
   - Add the remote origin (replace `your-username` with your GitHub username):
     ```
     git remote add origin https://github.com/your-username/repository-name.git
     ```
   - Push to GitHub:
     ```
     git push -u origin main
     ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to the "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access your website:**
   - After a few minutes, your website will be available at:
     `https://[your-username].github.io/[repository-name]/`

## Custom Domain (Optional)

If you want to use a custom domain:

1. In the GitHub repository settings, go to the "Pages" section
2. In the "Custom domain" field, enter your domain (e.g., `www.yourdomain.com`)
3. Click "Save"
4. Update your domain's DNS settings to point to GitHub Pages:
   - Add an A record pointing to:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `[your-username].github.io`

## Updating Your Website

To update your website after making changes:

1. Commit your changes:
   ```
   git add .
   git commit -m "Description of changes"
   ```
2. Push to GitHub:
   ```
   git push origin main
   ```

Your website will automatically update within a few minutes.

## Troubleshooting

- If your website isn't updating, check the "Actions" tab in your repository for any build errors
- Make sure your files are in the root directory of your repository
- Ensure your `index.html` file is in the root directory
- Check that you've selected the correct branch in the Pages settings