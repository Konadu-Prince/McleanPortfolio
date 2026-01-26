# Portfolio Deployment Guide

## Running the Portfolio Locally

### Method 1: Python Built-in Server (Any Port)

You can run the portfolio website on any port using the built-in Python server:

```bash
# Run on default port 8000
python -m http.server

# Run on a specific port (e.g., 8080)
python -m http.server 8080

# Using the custom server script
python server.py
# Or with a specific port
python server.py --port 3000
```

### Method 2: Using the Custom Server Script

We've included a custom server script with additional features:

```bash
# Run on default port (8000)
python server.py

# Run on a specific port
python server.py --port 9000

# Bind to a specific address
python server.py --bind 127.0.0.1 --port 3000
```

## Hosting Options

### GitHub Pages (Free)
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source (usually `/ (root)` or `/docs`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Other Free Hosting Options
- Netlify: Drag and drop your files
- Vercel: Connect to your Git repository
- Firebase Hosting: Use the Firebase CLI
- Surge: Command-line deployment tool

## File Structure
```
McleanPortfolio/
├── index.html          # Main portfolio page
├── styles.css          # Main styles
├── animations.css      # Animation styles
├── preloader.css       # Preloader styles
├── script.js           # JavaScript functionality
├── images/             # Portfolio images
│   ├── 3D categories/
│   ├── graphicDesigns/
│   └── GyanProfilePhoto.jpg
├── resume.html         # Resume page
├── 404.html            # Custom 404 page
├── server.py           # Local server script
└── README.md           # Project documentation
```

## Performance Tips

1. **Image Optimization**: Ensure images are compressed for web
2. **Minification**: Minify CSS and JavaScript for production
3. **CDN**: Consider using a CDN for static assets
4. **Caching**: Leverage browser caching with proper headers

## Customization

### Updating Personal Information
- Edit `index.html` for main content
- Update `resume.html` for detailed resume
- Modify `styles.css` for styling changes

### Adding Portfolio Items
- Add new images to the appropriate folders in `/images/`
- Update the portfolio section in `index.html`
- Adjust the filtering functionality in `script.js` if needed

## Troubleshooting

### Common Issues
- **Images not loading**: Check file paths in HTML and ensure images are in correct directories
- **Scripts not working**: Verify JavaScript file paths and browser console for errors
- **Styles broken**: Check CSS file paths and ensure all stylesheets are linked properly

### Port Conflicts
If you get a "port already in use" error:
1. Try a different port number
2. Kill the process using the port:
   ```bash
   # On Windows
   netstat -ano | findstr :PORT_NUMBER
   taskkill /PID PROCESS_ID /F
   
   # On Mac/Linux
   lsof -i :PORT_NUMBER
   kill -9 PROCESS_ID
   ```

## Security Headers
The custom server includes security headers:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block