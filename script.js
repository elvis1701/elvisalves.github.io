
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


async function prever() {
    const input = parseFloat(document.getElementById("input-number").value);
    if (isNaN(input)) return alert("Digite um número válido");

    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));
    model.compile({loss: "meanSquaredError", optimizer: "sgd"});

    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([2, 4, 6, 8], [4, 1]);
    await model.fit(xs, ys, {epochs: 100});

    const output = model.predict(tf.tensor2d([input], [1, 1]));
    output.data().then(pred => {
        document.getElementById("resultado").textContent = pred[0].toFixed(2);
    });
}
