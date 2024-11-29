// Script para alternar o menu hamburguer
function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('show');
}

const scrollContainer = document.getElementById('scroll-Container');

function scrollItems() {
    scrollContainer.scrollLeft += 1;

    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
    }
}

let scrollInterval = setInterval(scrollItems, 20);

scrollContainer.addEventListener('mouseover', () => {
    clearInterval(scrollInterval);
});

scrollContainer.addEventListener('mouseout', () => {
    scrollInterval = setInterval(scrollItems, 20);
});