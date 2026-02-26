// Main JavaScript for Mark Hadrian Serrano Portfolio
// 1. Visit Counter (Free)
- Uses browser localStorage
- Persists across sessions
- Starts at 1,247 (you can change this)

// 2. Location Detection (Free)
- Calls ipapi.co (free service)
- Returns: "Manila, Philippines" (example)
- No API key needed

// 3. Recent Visitors (Free)
- Saved to localStorage
- Shows last 5 visits
- Includes time stamp

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Typewriter Effect
const phrases = ["IT Service Desk Analyst", "Automation Specialist", "Web Developer", "System Administrator"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter');

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

// Start typewriter when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (typewriterElement) {
        typeWriter();
    }

    // Initialize counters
    initCounters();

    // Initialize reveal animations
    initRevealAnimations();

    // Initialize navigation
    initNavigation();
});

// Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        let hasAnimated = false;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        ScrollTrigger.create({
            trigger: counter,
            start: "top 80%",
            onEnter: () => {
                if (!hasAnimated) {
                    hasAnimated = true;
                    updateCounter();
                }
            },
            once: true
        });
    });
}

// Reveal Animations
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal-text');
    revealElements.forEach((element, index) => {
        gsap.fromTo(element, 
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                delay: index * 0.05
            }
        );
    });
}

// Navigation
function initNavigation() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('shadow-lg', 'shadow-cyan-500/5');
        } else {
            navbar.classList.remove('shadow-lg', 'shadow-cyan-500/5');
        }

        lastScroll = currentScroll;
    });

    // Active navigation link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-cyan-400');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-cyan-400');
            }
        });
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Parallax Effect for Background
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    const orbits = document.querySelectorAll('.orbit');
    orbits.forEach((orbit, index) => {
        const speed = (index + 1) * 20;
        const x = (window.innerWidth / 2 - e.clientX) / speed;
        const y = (window.innerHeight / 2 - e.clientY) / speed;
        orbit.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
});

// GitHub Stats Fetch (Optional - if you want to display GitHub stats)
async function fetchGitHubStats(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('GitHub fetch error:', error);
        return null;
    }
}

// Console Easter Egg
console.log('%c Mark Hadrian P. Serrano ', 'background: linear-gradient(135deg, #06b6d4, #8b5cf6); color: white; font-size: 24px; font-weight: bold; padding: 10px; border-radius: 8px;');
console.log('%c IT Professional Portfolio ', 'color: #06b6d4; font-size: 14px;');
console.log('%c Contact: markhadrianserrano@gmail.com ', 'color: #8b5cf6; font-size: 12px;');
