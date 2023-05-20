const express = require('express');
const cors =  require('cors');
require('dotenv').config();
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT

        //PATHS
        this.nombrePath = '/api/nombre'
        this.authPath = '/api/auth'

        //MIDDLEWARES
        this.middlewares();

        //ROUTES
        this.routes();
        
    }

    middlewares(){

        //CORS
        this.app.use( cors() );

        //Lectura y parseo en json
        this.app.use( express.json() );

        //DIRECTORIO PUBLICO
        this.app.use( express.static('public') );

    }

    routes(){

        //TOKEN
        this.app.use( this.authPath , require('../routers/auth.route'));
        this.app.use( this.nombrePath , require('../routers/usuarios.route'));
        
        
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Servidor corriendo en ", this.port);
        });
    }

}

module.exports = Server