const { Router  } = require('express');
const nombreControlador = require('../controllers/nombre.controller');
//const { validarJWT } = require('../helpers/validar-jwt');//ACTIVAR TOKEN

const router = Router();

router.get('/metodoGet', nombreControlador.metodoGet );

router.post('/metodoPost', /*[validarJWT(TOKEN), OPCIONAL SI HAY OTRA VALIDACION MAS],*/ nombreControlador.metodoPost );

router.put('/metodoPut/:id', nombreControlador.metodoPut );

module.exports = router