const express = require('express');
const Login = require('../models/login');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.post('/', (req, res) => {
    console.log(req.body);
    Login.findOne(req.body)
        .then(result => { decideLogin(result, req.body); res.json(result) })
        .catch(error => {
            res.status(412).json({ msg: error.message });
        });
});
 
function decideLogin(result, entrada) {
    if (result.email != entrada.email) {
        result.email = "";
        result.password = "";
        result.msgUsuario = "email inválido";
    } else if (result.password != entrada.password) {
        result.email = "";
        result.password = "";
        result.msgUsuario = "senha inválido";
    } else {
        result.email = "";
        result.password = "";
        result.msgUsuario = "Bem-vindo! "+result.email;
    }
}

module.exports = router;