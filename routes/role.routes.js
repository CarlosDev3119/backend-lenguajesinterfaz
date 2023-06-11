const { Router } = require('express');

const { validateFields } = require('../middlewares/validateFields');
const { createRole, getRoles } = require('../controllers/roles');

const role = require('../models/schemas/roles');

const router = Router();


router.post('/',[ validateFields(role) ], createRole);

router.get('/', getRoles)


module.exports = router;