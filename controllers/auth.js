const { response } = require('express');
const { validationResult } = require('express-validator');

const { generarJWT } = require('../helpers/genera-jwt');

/*
CONTINUACION DEL LOGIN
*/
const login = async (req, res = response)=>{

    const body = req.body;

    const token = await generarJWT(body.correo);

    //VALIDA QUE SEAN OBLIGATORIOS LOS PARAMETROS INICIALES
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        res.status(400).json(errors)
    }else{
        res.json({
            msg: 'login ok',
            correo: body.correo,
            password: body.password,
            token: token
        });
    }
}

module.exports = {
    login
}