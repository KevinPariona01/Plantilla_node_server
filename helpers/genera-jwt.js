const jwt = require('jsonwebtoken');

const generarJWT = ( correo ='' ) => {

    return new Promise(( resolve, reject )=>{
        
        const payload = {correo};

        jwt.sign(payload, process.env.SECRETPRIVATEKEY, {
            expiresIn: '1h'
        }, (err, token) => {
            if(err){
                console.log(err);
                reject("No se puedo generar el web token");
            }
            else{
                resolve(token);
            }
        })

    });

}

module.exports = {
    generarJWT
}