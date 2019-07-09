const express = require('express');
const Artista = require('../models/albuns');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', (req, res) => {
    console.log("findall")
    Artista.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        })
});

router.get('/:id', (req, res) => {
    Artista.findOne({
        where: { codigo: req.params.id }
    }).then(result => {
        if(result) res.json(result);
        else res.sendStatus(404);
    }).catch(error => {
        res.status(412).json({ msg: error.message });;
    });
});

router.get('/search/params', (req, res) => {
    let query = `%${req.query.nome_artista}%`;

    console.log(query);
    Artista.findAll({ where: { nome_artista: { [Op.like]: query } } })
        .then(artistas => res.json(artistas))
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {
    console.log(req.body);
    Artista.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        });
});

router.put('/', (req, res) => {
    Artista.update(req.body, {
        where: { codigo: req.body.codigo }
    })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        });
});

router.delete('/:id', (req, res) => {
    Artista.destroy({
        where: { codigo: req.params.id }
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
        res.status(412).json({ msg: error.message });
    });
});

module.exports = router;