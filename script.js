// Função para iniciar o vídeo
function iniciarVideo() {
    const inputTexto = document.getElementById("inputTexto").value.trim().toLowerCase();  // Pega o texto do textarea
    const video = document.getElementById("video");  // Pega o elemento do vídeo

    // Verifica se o texto é "bom dia"
    if (inputTexto === "bom dia") {
        video.play();  // Inicia o vídeo
    } else {
        alert("Por favor, digite 'bom dia' para iniciar o vídeo.");  // Alerta caso o texto não seja "bom dia"
    }
}

// Adiciona um ouvinte de evento para o botão "Traduzir"
document.getElementById("botao").addEventListener("click", function(event) {
    event.preventDefault();  // Previne a ação padrão do formulário (não envia)
    iniciarVideo();  // Chama a função para rodar o vídeo
});
