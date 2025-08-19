import colecaoUf from './dados/dados.js'
import express from 'express';

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUf)
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    const uf = colecaoUf.find(u => u.id === idUF);
    res.json(uf);
})

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em ' + data);
});

