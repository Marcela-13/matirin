const carousel = document.querySelector('.carousel');
let isPaused = false;

// Pausar a animação no hover
carousel.addEventListener('mouseover', () => {
    isPaused = true;
    carousel.style.animationPlayState = 'paused';
});

carousel.addEventListener('mouseout', () => {
    isPaused = false;
    carousel.style.animationPlayState = 'running';
});
