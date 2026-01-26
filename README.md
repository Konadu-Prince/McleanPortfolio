# Christian Gyan Agyekum - Portfolio Website

A professional portfolio website showcasing the skills and projects of Christian Gyan Agyekum, a Computer Science graduate from the University of Cape Coast (UCC), Accra, Ghana. Featuring expertise in networking administration, database management, cybersecurity, machine learning, 3D visualization, graphic design, and web design. Fluent in English, Twi, and Ga.

## Features

- Fully responsive design that works on all devices
- Modern UI with smooth animations and transitions
- Portfolio filtering system to showcase different types of work
- Contact form with validation
- Professional resume page
- Optimized for GitHub Pages deployment
- Multiple options for local hosting

## Skills Highlighted

### Technical Skills
- Networking Administration
- Database Management
- Cybersecurity
- Machine Learning

### Creative Skills
- 3D Visualization
- Graphic Design
- Web Design (Figma)
- Cinematography
- Adobe Office Suite

## Running Locally

### Python Server (Built-in)
```bash
# Run on default port 8000
python -m http.server

# Run on a specific port
python -m http.server 8080
```

### Custom Server Script
```bash
# Run with custom server (includes security headers)
python server.py

# Run on specific port
python server.py --port 3000
```

### Using npm Scripts (if Node.js is available)
```bash
# Install dependencies
npm install

# Run on default port
npm start

# Run on development port
npm run dev

# Run on preview port
npm run preview
```

## Deployment to GitHub Pages

1. Create a new repository on GitHub (or use an existing one)
2. Push this code to your repository
3. Go to Settings > Pages in your repository
4. Select the branch you want to deploy (usually main)
5. Choose the root folder as the source
6. Click Save and your site will be deployed

Your site will be available at `https://[your-username].github.io/[repository-name]/`

## Customization

To customize this portfolio for your own use:

1. Update the content in `index.html` with your personal information
2. Replace placeholder images with your actual project images
3. Modify the color scheme in `styles.css` (variables are at the top)
4. Update contact information in the contact section
5. Add your actual projects to the portfolio section
6. Update the resume page with your information

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
├── package.json        # Package configuration
├── DEPLOYMENT.md       # Deployment guide
└── README.md           # This file
```

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- JavaScript (Vanilla)
- Font Awesome for icons
- Python for local server

## Browser Support

This website works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.