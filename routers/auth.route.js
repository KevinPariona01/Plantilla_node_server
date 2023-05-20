const { Router } = require('express');
const { check } = require('express-validator');
const auth = require('../controllers/auth');

const router = Router();

router.post('/login',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'El correo es obligatorio').not().isEmpty(),
] ,auth.login);

module.exports = router;