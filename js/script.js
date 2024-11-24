// Função para iniciar o vídeo
function iniciarVideo() {
    const inputTexto = document.getElementById("inputTexto").value.trim().toLowerCase();  // Pega o texto do textarea
    const video = document.getElementById("video");  // Pega o elemento do vídeo
    const videoSource = video.querySelector("source"); // Pega a tag source do vídeo
    const historicoDesktop = document.querySelector("aside ul"); // Lista do histórico para telas maiores
    const historicoMobile = document.querySelector(".dropdown-content"); // Lista do histórico para telas menores

    // Dicionário de vídeos correspondentes
    const traducoes = {
        "bom dia": "../img/bomdia.mp4",
        "boa tarde": "../img/boatarde.mp4"
    };

    // Verifica se o texto é "bom dia"
   if(traducoes[inputTexto]){
    videoSource.src = traducoes[inputTexto]
    video.load()
    video.play()
    const item = `<li>${inputTexto.charAt(0).toUpperCase() + inputTexto.slice(1)}</li>`
    historicoDesktop.insertAdjacentHTML("beforeend", item);
    historicoMobile.insertAdjacentHTML("beforeend", item);

   }else{
    alert("Tradução não encontrada. Digite 'bom dia' ou 'boa tarde'.")
   }


}

// Adiciona um ouvinte de evento para o botão "Traduzir"
document.getElementById("botao").addEventListener("click", function (event) {
    event.preventDefault();  // Previne a ação padrão do formulário (não envia)
    iniciarVideo();  // Chama a função para rodar o vídeo
});
