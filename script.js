document.getElementById("translateButton").addEventListener("click", function() {
    const wordInput = document.getElementById("wordInput").value;
    
    if (wordInput.trim() !== "") {
        // Aqui você pode adicionar a lógica de tradução se necessário.
        // Por exemplo, simular a tradução:
        alert(`Palavra '${wordInput}' traduzida com sucesso!`);
        
        // Mostrar o vídeo e iniciar a reprodução
        document.getElementById("video-container").style.display = "block";
        const videoElement = document.getElementById("video");
        videoElement.play();
    } else {
        alert("Por favor, insira uma palavra.");
    }
});
