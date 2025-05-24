document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakeChars = ['❄', '❅', '❆'];
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 80;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 12 + 6, // Font size in px (12px to 36px)
            speedY: Math.random() * 1 + 2, // Falling speed
            drift: Math.random() * 0.6 - 0.3, // Side-to-side drift
            opacity: Math.random() * 0.5 + 0.5,
            char: snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)]
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.y += p.speedY;
            p.x += p.drift;
            if (p.y > canvas.height + 10) {
                p.y = -p.size;
                p.x = Math.random() * canvas.width;
                p.speedY = Math.random() * 1 + 2;
                p.drift = Math.random() * 0.6 - 0.3;
                p.char = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
            }

            ctx.font = `${p.size}px serif`;
            ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
            ctx.fillText(p.char, p.x, p.y);
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
