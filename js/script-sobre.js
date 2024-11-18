// Obtém o botão e o card
const cards = document.querySelectorAll('.card-foto')
const txt1 = document.querySelector('.texto1');
const txt2 = document.querySelector('.texto2');
const txt3 = document.querySelector('.texto3');
const txt4 = document.querySelector('.texto4');
const txt5 = document.querySelector('.texto5');

// Função para alternar a classe 'ativo' no card
function ativarEfeito1() {
  // Verifica se o card 0 já tem a classe 'ativo'
  if (cards[0].classList.contains('ativo')) {
    // Se tiver, remove a classe 'ativo' tanto do card quanto do texto
    cards[0].classList.remove('ativo');
    txt1.classList.remove('ativo');
  } else {
    // Caso contrário, adiciona a classe 'ativo' tanto no card quanto no texto
    cards[0].classList.add('ativo');
    txt1.classList.add('ativo');
  }
};

// Função para alternar a classe 'ativo' no card
function ativarEfeito2() {
  // Verifica se o card 0 já tem a classe 'ativo'
  if (cards[1].classList.contains('ativo')) {
    // Se tiver, remove a classe 'ativo' tanto do card quanto do texto
    cards[1].classList.remove('ativo');
    txt2.classList.remove('ativo');
  } else {
    // Caso contrário, adiciona a classe 'ativo' tanto no card quanto no texto
    cards[1].classList.add('ativo');
    txt2.classList.add('ativo');
  }
};
// Função para alternar a classe 'ativo' no card
function ativarEfeito3() {
  // Verifica se o card 0 já tem a classe 'ativo'
  if (cards[2].classList.contains('ativo')) {
    // Se tiver, remove a classe 'ativo' tanto do card quanto do texto
    cards[2].classList.remove('ativo');
    txt3.classList.remove('ativo');
  } else {
    // Caso contrário, adiciona a classe 'ativo' tanto no card quanto no texto
    cards[2].classList.add('ativo');
    txt3.classList.add('ativo');
  }
};
// Função para alternar a classe 'ativo' no card
function ativarEfeito4() {
  // Verifica se o card 0 já tem a classe 'ativo'
  if (cards[3].classList.contains('ativo')) {
    // Se tiver, remove a classe 'ativo' tanto do card quanto do texto
    cards[3].classList.remove('ativo');
    txt4.classList.remove('ativo');
  } else {
    // Caso contrário, adiciona a classe 'ativo' tanto no card quanto no texto
    cards[3].classList.add('ativo');
    txt4.classList.add('ativo');
  }
};
// Função para alternar a classe 'ativo' no card
function ativarEfeito5() {
  // Verifica se o card 0 já tem a classe 'ativo'
  if (cards[4].classList.contains('ativo')) {
    // Se tiver, remove a classe 'ativo' tanto do card quanto do texto
    cards[4].classList.remove('ativo');
    txt5.classList.remove('ativo');
  } else {
    // Caso contrário, adiciona a classe 'ativo' tanto no card quanto no texto
    cards[4].classList.add('ativo');
    txt5.classList.add('ativo');
  }
}

