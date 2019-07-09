const express = require('express');
const Banda = require('../models/bandas');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', (req, res) => {
    console.log("findall")
    Banda.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        })
});

router.get('/:id', (req, res) => {
    Banda.findOne({
        where: { codigo: req.params.id }
    }).then(result => {
        if(result) res.json(result);
        else res.sendStatus(404);
    }).catch(error => {
        res.status(412).json({ msg: error.message });;
    });
});

router.get('/search/params', (req, res) => {
    let query = `%${req.query.nome_banda}%`;

    console.log(query);
    Banda.findAll({ where: { nome_banda: { [Op.like]: query } } })
        .then(bandas => res.json(bandas))
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {
    console.log(req.body);
    Banda.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        });
});

router.put('/', (req, res) => {
    Banda.update(req.body, {
        where: { codigo: req.body.codigo }
    })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        });
});

router.delete('/:id', (req, res) => {
    Banda.destroy({
        where: { codigo: req.params.id }
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
        res.status(412).json({ msg: error.message });
    });
});

module.exports = router;