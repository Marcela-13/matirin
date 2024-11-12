
// Função que será acionada quando o botão for clicado
document.getElementById('botao').onclick = function() {
    var palavra = document.getElementById('inputTexto').value.toLowerCase(); // Pega o texto digitado
    var video = document.getElementById('video'); // Seleciona o vídeo
    
    if (palavra === "Bom Dia ") {  // Substitua "rodar" pela palavra desejada
        video.play(); // Reproduz o vídeo
    } else {
        alert("Palavra incorreta! Tente novamente.");
    }
} 