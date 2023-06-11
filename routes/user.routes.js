const { Router } = require('express');
const { createUser, getUsers } = require('../controllers/users');
const { validateFields } = require('../middlewares/validateFields');
const userSchema = require('../models/schemas/users');

const router = Router();

//obtener usuarios
router.get('/', getUsers);

//create user
router.post('/', [ validateFields(userSchema) ], createUser );

//delete eliminar

//update actualizar

//put sirve para actualizar o insertar datos


module.exports = router;