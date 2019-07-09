const express = require('express');
const Login = require('../models/login');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var autenticado = false;
router.post('/', (req, res) => {
    //console.log("res: ")
    //console.log(res);
    console.log("req.body: ")
    console.log(req.body);
    var contagem = 1;
    
    Login.findAll()
        .then(result => { login(result, req.body); res.json(result) })
        .catch(error => {
            res.status(412).json({ msg: error.message });
        });
});
 
function login(result, entrada) {
    let cont = 0;
    
    
    result.forEach(result => {
    console.log("result.email: ")
    console.log(result.email)
    console.log("result.password: ")
    console.log(result.password)
    console.log("entrada.email:")
    console.log(entrada.email)
    console.log("entrada.password:")
    console.log(entrada.password)
        console.log(cont = cont +1)
   
    if((result.email === entrada.email) && (result.password === entrada.password)){
        console.log("entrou na autenticacao!") 
       
        
    
    }else
        
        console.log("não autenticou!")

   /* if (result.email != entrada.email) {
        result.email = "";
        result.password = "";
      
    } else if (result.password != entrada.password) {
        result.email = "";
        result.password = "";
       
    } else {
        result.email = "";
        result.password = "";
        
    }*/
}
);}
module.exports = router;