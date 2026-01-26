#!/usr/bin/env python3
"""
Simple HTTP Server for Portfolio
Allows running the portfolio website on different ports
"""

import http.server
import socketserver
import argparse
import os
from pathlib import Path

class PortfolioHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom request handler to serve portfolio files"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.getcwd(), **kwargs)
    
    def end_headers(self):
        # Add security headers
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'DENY')
        self.send_header('X-XSS-Protection', '1; mode=block')
        super().end_headers()

def main():
    parser = argparse.ArgumentParser(description='Run Portfolio Website Server')
    parser.add_argument('-p', '--port', type=int, default=8000, 
                       help='Port to run the server on (default: 8000)')
    parser.add_argument('--bind', default='', 
                       help='Address to bind to (default: all interfaces)')
    
    args = parser.parse_args()
    
    # Change to the directory containing this file
    os.chdir(Path(__file__).parent)
    
    with socketserver.TCPServer((args.bind, args.port), PortfolioHTTPRequestHandler) as httpd:
        print(f"Portfolio website running at http://localhost:{args.port}")
        print("Press Ctrl+C to stop the server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    main()