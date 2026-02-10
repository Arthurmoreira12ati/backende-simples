const express = require('express');
const app = express();
const port = 3000;

// Rota raiz "/"
app.get('/', (req, res) => {
    res.json({
        mensagem: "Olá, Frontend! O Backend está funcionando perfeitamente 🚀",
        autor: "Aluno Dev",
        status: 200
    });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});