const api = "http://localhost:3000/produtos";

/* LISTAR PRODUTOS */
if (document.getElementById("listaProdutos")) {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            const lista = document.getElementById("listaProdutos");
            data.forEach(produto => {
                const li = document.createElement("li");
                li.textContent = `${produto.nome} - R$ ${produto.preco}`;
                lista.appendChild(li);
            });
        });
}

/* CADASTRAR PRODUTO */
if (document.getElementById("formProduto")) {
    document.getElementById("formProduto").addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const preco = document.getElementById("preco").value;

        fetch(api, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, preco })
        })
        .then(res => res.json())
        .then(data => {
            alert("Produto cadastrado!");
            window.location.href = "index.html";
        });
    });
}