const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

/* CONEXÃO COM O BANCO */
const db = mysql.createConnection({
    host: 'benserverplex.ddns.net',
    user: 'alunos',
    password: 'senhaalunos', // coloque sua senha aqui
    database: 'web_03mc'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no MySQL:', err);
    } else {
        console.log('Conectado ao MySQL!');
    }
});

/* ROTA 1 - LISTAR PRODUTOS */
app.get('/produtos', (req, res) => {
    db.query('SELECT * FROM produtos_arthur', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    });
});

/* ROTA 2 - CADASTRAR PRODUTO */
app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;

    db.query(
        'INSERT INTO produtos_arthur (nome, preco) VALUES (?, ?)',
        [nome, preco],
        (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.json({ message: 'Produto cadastrado com sucesso!' });
            }
        }
    );
});

/* ROTA 3 - APAGAR PRODUTO */
app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;

    db.query(
        'DELETE FROM produtos_arthur WHERE id = ?',
        [id],
        (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.json({ message: 'Produto deletado com sucesso!' });
            }
        }
    );
});

/* SERVIDOR */
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
