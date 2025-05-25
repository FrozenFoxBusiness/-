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