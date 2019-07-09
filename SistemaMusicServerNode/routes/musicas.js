const express = require('express');
const Musica = require('../models/albuns');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', (req, res) => {
    console.log("findall")
    Musica.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        })
});

router.get('/:id', (req, res) => {
    Musica.findOne({
        where: { codigo: req.params.id }
    }).then(result => {
        if(result) res.json(result);
        else res.sendStatus(404);
    }).catch(error => {
        res.status(412).json({ msg: error.message });;
    });
});

router.get('/search/params', (req, res) => {
    let query = `%${req.query.nome_musica}%`;

    console.log(query);
    Musica.findAll({ where: { nome_musica: { [Op.like]: query } } })
        .then(musicas => res.json(musicas))
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {
    console.log(req.body);
    Musica.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        });
});

router.put('/', (req, res) => {
    Musica.update(req.body, {
        where: { codigo: req.body.codigo }
    })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        });
});

router.delete('/:id', (req, res) => {
    Musica.destroy({
        where: { codigo: req.params.id }
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
        res.status(412).json({ msg: error.message });
    });
});

module.exports = router;