// Smooth scroll for in-page links (About/Features)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Tiny cursor glow effect (techy, not cringe)
const glow = document.createElement('div');
glow.style.position = 'fixed';
glow.style.width = '420px';
glow.style.height = '420px';
glow.style.borderRadius = '999px';
glow.style.pointerEvents = 'none';
glow.style.opacity = '0.10';
glow.style.filter = 'blur(60px)';
glow.style.background = 'radial-gradient(circle, #49E1FF, transparent 60%)';
glow.style.left = '-9999px';
glow.style.top = '-9999px';
glow.style.zIndex = '0';
document.body.appendChild(glow);

window.addEventListener('mousemove', (e) => {
  glow.style.left = (e.clientX - 210) + 'px';
  glow.style.top = (e.clientY - 210) + 'px';
});
