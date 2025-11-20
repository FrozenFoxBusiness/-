document.addEventListener('DOMContentLoaded', () => {
    // Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.firstElementChild.scrollHeight + 'px';
            }
        });
    });

    // Initialize Particles.js
    if (document.getElementById('particles-js')) {
        particlesJS.load('particles-js', 'js/particles.json', function() {
            console.log('particles.js loaded - callback');
        });
    }
    // Scroll fade-in effect
    const fadeInElements = document.querySelectorAll('.scroll-fade-in');

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInElements.forEach(element => {
        fadeInObserver.observe(element);
    });

    // Silly Mode
    const sillyModeToggle = document.getElementById('silly-mode-toggle');
    const body = document.querySelector('body');

    sillyModeToggle.addEventListener('click', () => {
        body.classList.toggle('silly-mode');
    });
});
