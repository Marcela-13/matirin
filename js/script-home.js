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

const text = "Seja bem-vindo";
let charIndex = 0;
let isDeleting = false;

const typewriter = document.getElementById("textobemvindo");

function type() {
    let currentText = text.substring(0, charIndex);

    typewriter.textContent = currentText;

    if (!isDeleting && charIndex === text.length) {
        // Pausa após terminar a frase
        setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && charIndex === 0) {
        // Pausa antes de recomeçar
        setTimeout(() => (isDeleting = false), 1000);
    }

    charIndex += isDeleting ? -1 : 1;

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(type, typingSpeed);
}

type();