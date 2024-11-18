// Script para alternar o menu hamburguer
document.getElementById('hamburger').addEventListener('click', function() {
  const menu = document.querySelector('.nav');
  menu.classList.toggle('active');
})

const scrollContainer = document.getElementById('scrollContainer');

function scrollImages() {
    scrollContainer.scrollLeft += 1;

    // Se atingir o final, volta ao começo
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
    }
}

// Inicia o movimento das imagens
let scrollInterval = setInterval(scrollImages, 20);

// Pausa o carrossel ao passar o mouse por cima
scrollContainer.addEventListener('mouseover', () => {
    clearInterval(scrollInterval);
});

// Retoma o movimento quando o mouse sai do carrossel
scrollContainer.addEventListener('mouseout', () => {
    scrollInterval = setInterval(scrollImages, 20);
});