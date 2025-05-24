document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-btn').classList.add('active');
    document.querySelector('.category-content').classList.add('active');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.category-content').forEach(content => {
                content.classList.remove('active');
            });
            const category = this.getAttribute('data-category');
            document.getElementById(category).classList.add('active');
        });
    });
    const videos = document.querySelectorAll('.star-media video');
    videos.forEach(video => {
        video.addEventListener('click', function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    });
    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    video.setAttribute('preload', 'auto');
                    videoObserver.unobserve(video);
                }
            });
        }, { threshold: 0.1 });
        
        videos.forEach(video => {
            videoObserver.observe(video);
        });
    }
});