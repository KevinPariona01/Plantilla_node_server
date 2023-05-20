const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req = request, res= response, next )=>{

    const token = req.header('x-token');
    if(!token){
        res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try{
        jwt.verify(token, process.env.SECRETPRIVATEKEY);
        next();//TODO CORRECTO, DIRIGE A LA PETICION
    }catch(error){

        console.log(error);
        res.status(401).json({
            msg: 'Token no valido'
        });
    }
}

module.exports = {
    validarJWT
}