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

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagemErro = '';
    let uf;


    if(!(isNaN(idUF))) { /* se nao for um numero vai retonar verdadeiro (na vdd falso*/
        uf = colecaoUf.find(u => u.id === idUF); /* uf vai ficar vazio se nao passar um id que tem */
        if (!uf){ /* ! serve para verificar se tem algo dentro e ver se é verdadeiro ou falso*/
            mensagemErro = 'UF não encontrada';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ "erro": mensagemErro })
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em ' + data);
});

