document.addEventListener("DOMContentLoaded", () => {
    const criarForumButton = document.querySelector(".button"); // Botão de criação do fórum
    const feed = document.querySelector(".feed"); // Seção onde os cards são adicionados

    criarForumButton.addEventListener("click", (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        // Captura os valores do formulário
        const titulo = document.getElementById("phone").value.trim();
        const questao = document.getElementById("w3review1").value.trim();

        // Verifica se os campos estão preenchidos
        if (!titulo || !questao) {
            alert("Por favor, preencha todos os campos para criar um fórum.");
            return;
        }

        // Cria o novo card
        const novoCard = document.createElement("div");
        novoCard.classList.add("comment");

        novoCard.innerHTML = `
            <div class="comment-header">
                <div>
                    <img src="../img/samara.png.png" style="border-radius: 50%; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); width: 40px; height: 38px;">
                    <strong class="name">Usuário Anônimo</strong>
                </div>
                <span class="comment-date">${new Date().toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                })}</span>
            </div>
            <strong>${titulo}</strong>
            <div class="comment-body">
                <p>${questao}</p>
            </div>
            <div>
                <button style="color: brown;font-size:17px;width: 0px;left: 23%;"><i class="fa fa-heart"></i></button>
                <i class="material-icons icone">visibility</i>
                <i class="material-icons">comment</i>
            </div>
        `;

        // Adiciona o novo card ao feed após o título
        feed.insertBefore(novoCard, feed.querySelector(".comentários").nextSibling);

        // Limpa os campos do formulário
        document.getElementById("phone").value = "";
        document.getElementById("w3review1").value = "";
    });
});
