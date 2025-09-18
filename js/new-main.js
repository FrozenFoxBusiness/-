document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', body.dataset.theme);
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.dataset.theme = savedTheme;
    } else {
        body.dataset.theme = 'dark'; // Default theme
    }

    // Showcase Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const pluginCards = document.querySelectorAll('.plugin-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            pluginCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Modal Interaction
    const detailBtns = document.querySelectorAll('.btn-details');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close-btn');

    detailBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const plugin = btn.parentElement.dataset.category;
            const modal = document.getElementById(`${plugin}-details`);
            modal.style.display = 'block';
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Modal Tabs (for Star SMP)
    const starSmpModal = document.getElementById('starsmp-details');
    const tabBtns = starSmpModal.querySelectorAll('.tab-btn');
    const tabContents = starSmpModal.querySelectorAll('.category-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;

            tabContents.forEach(content => {
                if (content.id === `${category}-content`) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // Initialize Particles.js
    if (document.getElementById('particles-js')) {
        particlesJS.load('particles-js', 'js/particles.json', function() {
            console.log('particles.js loaded - callback');
        });
    }
});
