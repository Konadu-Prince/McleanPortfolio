/**
 * Simple Node.js HTTP Server for Portfolio
 * Allows running the portfolio website on different ports
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// MIME types for different file extensions
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'font/eot'
};

// Default port
const DEFAULT_PORT = 8000;

// Function to handle requests
function handleRequest(request, response) {
  // Parse the URL
  const parsedUrl = url.parse(request.url);
  let pathname = `.${parsedUrl.pathname}`;
  
  // Default to index.html if root is requested
  if (pathname === './') {
    pathname = './index.html';
  }

  // Get file extension
  const ext = path.parse(pathname).ext;
  const mimeType = mimeTypes[ext] || 'text/plain';

  // Read the file
  fs.readFile(pathname, (err, data) => {
    if (err) {
      // Handle 404 - File not found
      if (err.code === 'ENOENT') {
        fs.readFile('./404.html', (err404, data404) => {
          if (err404) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.end('<h1>404 Not Found</h1>');
          } else {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.end(data404);
          }
        });
      } else {
        // Handle other server errors
        response.writeHead(500);
        response.end('Internal Server Error');
      }
    } else {
      // Serve the file
      response.writeHead(200, { 'Content-Type': mimeType });
      
      // Add security headers
      response.setHeader('X-Content-Type-Options', 'nosniff');
      response.setHeader('X-Frame-Options', 'DENY');
      response.setHeader('X-XSS-Protection', '1; mode=block');
      
      response.end(data);
    }
  });
}

// Get port from command line arguments or use default
const port = process.argv[2] ? parseInt(process.argv[2]) : DEFAULT_PORT;

// Create server
const server = http.createServer(handleRequest);

// Start server
server.listen(port, 'localhost', () => {
  console.log(`Portfolio website running at http://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server');
});

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please use a different port.`);
    console.log(`Usage: node server.js [port_number]`);
    console.log(`Example: node server.js 3000`);
  } else {
    console.error('Server error:', err);
  }
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\nServer stopped.');
  process.exit(0);
});