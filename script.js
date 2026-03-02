document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = "0 0 20px rgba(0,212,255,0.4)";
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = "none";
    });
});
