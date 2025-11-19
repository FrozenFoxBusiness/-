document.addEventListener('DOMContentLoaded', () => {
    // Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = '0 20px';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '20px';
            }
        });
    });

    // Initialize Particles.js
    if (document.getElementById('particles-js')) {
        particlesJS.load('particles-js', 'js/particles.json', function() {
            console.log('particles.js loaded - callback');
        });
    }
});
