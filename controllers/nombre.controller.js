const { response, request }  = require('express');
//const { pool } = require('../database/config'); //CONEXION A BD

const metodoGet = (req = request , res = response) => {
    //metodoGet?nombre=dato
    //CONTENIDO
    console.log(req.query);
    res.status(200).json({
        msg:req.query
    });
}

const metodoPost = (req, res = response )=>{
    //CONTENIDO
    console.log(req.query);
    res.status(200).json({
        msg:req.body
    });
}

const metodoPut = (req, res = response )=>{
    //metodoPut/id=5
    //CONTENIDO
    console.log(req.params);
    console.log(req.body);
    res.status(200).json({
        msg_post:req.body,
        msg_put:req.params
    });
}

module.exports = {

    metodoGet,
    metodoPost,
    metodoPut

}