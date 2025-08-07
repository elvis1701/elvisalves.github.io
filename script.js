
document.addEventListener("DOMContentLoaded", () => {
    fetch("projetos.json")
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("projetos-container");
            data.forEach(projeto => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <h3>${projeto.nome}</h3>
                    <p>${projeto.descricao}</p>
                    <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>
                    <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
                `;
                container.appendChild(card);
            });
        });
});
