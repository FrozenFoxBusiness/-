// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    setTimeout(() => {
        follower.style.left = `${e.clientX}px`;
        follower.style.top = `${e.clientY}px`;
    }, 50);
});
document.querySelectorAll('a, button, .plugin-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        follower.style.width = '20px';
        follower.style.height = '20px';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '16px';
        cursor.style.height = '16px';
        follower.style.width = '8px';
        follower.style.height = '8px';
    });
});

document.addEventListener('mousedown', () => {
    cursor.style.width = '24px';
    cursor.style.height = '24px';
    cursor.style.borderWidth = '3px';
    follower.style.width = '12px';
    follower.style.height = '12px';
});

document.addEventListener('mouseup', () => {
    const hoveredElement = document.querySelector('a:hover, button:hover, .plugin-card:hover');
    if (hoveredElement) {
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        follower.style.width = '20px';
        follower.style.height = '20px';
    } else {
        cursor.style.width = '16px';
        cursor.style.height = '16px';
        cursor.style.borderWidth = '2px';
        follower.style.width = '8px';
        follower.style.height = '8px';
    }
});

const logo = document.querySelector('.branding .logo');
const logoContainer = document.querySelector('.logo-container');
let clickCount = 0;
let timeout;

logo.addEventListener('click', () => {
  clickCount++;
  clearTimeout(timeout);
  timeout = setTimeout(() => clickCount = 0, 2000); 

  if (clickCount === 5) {
    triggerSpookyEffect();
    clickCount = 0;
  }
});

function triggerSpookyEffect() {
  logoContainer.classList.add('easter-egg-active');
  setTimeout(() => {
    logoContainer.classList.remove('easter-egg-active');
  }, 5000);
}

// Theme switcher logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-mode');
        if (themeToggle) themeToggle.checked = true;
    } else {
        body.classList.remove('light-mode');
        if (themeToggle) themeToggle.checked = false;
    }
}

if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            localStorage.setItem('theme', 'light');
            applyTheme('light');
        } else {
            localStorage.setItem('theme', 'dark');
            applyTheme('dark');
        }
    });
}

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);