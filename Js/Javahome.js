// Script para alternar o menu hamburguer
document.getElementById('hamburger').addEventListener('click', function() {
  const menu = document.querySelector('.nav');
  menu.classList.toggle('active');
});