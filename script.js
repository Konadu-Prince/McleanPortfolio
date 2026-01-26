// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
    
    // Accessibility: Update ARIA attributes
    const isOpen = navLinks.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Portfolio Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });
        
        // Add active class to clicked button
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                // REMOVED animation that could cause blur
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Accessibility: Focus the target element
            target.setAttribute('tabindex', '-1');
            target.focus({preventScroll: true});
            target.removeAttribute('tabindex');
        }
    });
});

// Enhanced Form Validation
const contactForm = document.getElementById('portfolio-contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('#name').value;
        const email = this.querySelector('#email').value;
        const subject = this.querySelector('#subject').value;
        const message = this.querySelector('#message').value;
        
        // Validate form
        let isValid = true;
        
        // Name validation
        if (!name.trim()) {
            showError('name', 'Please enter your name');
            isValid = false;
        } else {
            hideError('name');
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        } else {
            hideError('email');
        }
        
        // Message validation
        if (!message.trim()) {
            showError('message', 'Please enter your message');
            isValid = false;
        } else {
            hideError('message');
        }
        
        if (isValid) {
            // In a real application, you would send this data to a server
            // For now, we'll just show an alert
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            
            // Reset form
            this.reset();
        }
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.dataset.errorShown) {
                validateField(this);
            }
        });
    });
}

function validateField(field) {
    const fieldName = field.id;
    let isValid = true;
    let errorMessage = '';
    
    switch(fieldName) {
        case 'name':
            if (!field.value.trim()) {
                errorMessage = 'Please enter your name';
                isValid = false;
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                errorMessage = 'Please enter a valid email address';
                isValid = false;
            }
            break;
        case 'message':
            if (!field.value.trim()) {
                errorMessage = 'Please enter your message';
                isValid = false;
            }
            break;
    }
    
    if (isValid) {
        hideError(fieldName);
    } else {
        showError(fieldName, errorMessage);
    }
}

function showError(fieldName, message) {
    const errorElement = document.getElementById(`${fieldName}-error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    const field = document.getElementById(fieldName);
    if (field) {
        field.dataset.errorShown = 'true';
        field.setAttribute('aria-invalid', 'true');
    }
}

function hideError(fieldName) {
    const errorElement = document.getElementById(`${fieldName}-error`);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
    
    const field = document.getElementById(fieldName);
    if (field) {
        delete field.dataset.errorShown;
        field.setAttribute('aria-invalid', 'false');
    }
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '0.5rem 0';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '1rem 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animation on scroll - REMOVED to prevent blur
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill, .stat, .portfolio-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'none'; // REMOVED transform to prevent blur
            
            // Animate progress bars when they come into view
            if (element.classList.contains('skill')) {
                const progressBar = element.querySelector('.progress');
                if (progressBar) {
                    const width = progressBar.style.width || '0';
                    progressBar.style.width = '0';
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 300);
                }
            }
        }
    });
};

// REMOVED initial state setup that used transforms
document.querySelectorAll('.skill, .stat, .portfolio-item').forEach(element => {
    element.style.opacity = 1; // SET to 1 to avoid initial opacity animation
    element.style.transform = 'none'; // REMOVED transform to prevent blur
});

// Trigger animations on scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Slideshow functionality
let slideIndex = [];

// Initialize slideIndex array for each slideshow
document.querySelectorAll('.slideshow-container').forEach((container, index) => {
    slideIndex[index] = 0;
    showSlides(index);
});

function changeSlide(n, slideshowIndex) {
    showSlides(slideshowIndex, slideIndex[slideshowIndex] += n);
}

function showSlides(slideshowIndex, n) {
    let slides = document.querySelectorAll('.slideshow-container')[slideshowIndex].getElementsByClassName("slideshow-slide");
    
    if (n !== undefined) {
        slideIndex[slideshowIndex] = n;
    }
    
    if (slideIndex[slideshowIndex] >= slides.length) {
        slideIndex[slideshowIndex] = 0;
    }
    
    if (slideIndex[slideshowIndex] < 0) {
        slideIndex[slideshowIndex] = slides.length - 1;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex[slideshowIndex]].style.display = "block";
}

// Auto-advance slideshows
setInterval(() => {
    document.querySelectorAll('.slideshow-container').forEach((container, index) => {
        showSlides(index, slideIndex[index] += 1);
    });
}, 5000);

// REMOVED particle creation that could cause performance issues and blur
// Create floating particles for background
function createParticles() {
    // REMOVED particle creation to prevent blur and improve performance
}

// Initialize particles when page loads
// REMOVED particle initialization

// Hide preloader when page loads
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1000);
    }
    
    // REMOVED hero text animation that could cause blur
});

// Accessibility: Add keyboard support for slideshow controls
document.addEventListener('keydown', function(e) {
    // Only process keys when slideshow controls have focus
    if (e.target.closest('.slideshow-container')) {
        if (e.key === 'ArrowLeft') {
            // Find which slideshow container this belongs to
            const container = e.target.closest('.slideshow-container');
            const index = Array.from(document.querySelectorAll('.slideshow-container')).indexOf(container);
            changeSlide(-1, index);
        } else if (e.key === 'ArrowRight') {
            const container = e.target.closest('.slideshow-container');
            const index = Array.from(document.querySelectorAll('.slideshow-container')).indexOf(container);
            changeSlide(1, index);
        }
    }
});