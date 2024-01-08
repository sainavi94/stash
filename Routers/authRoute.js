const express = require('express');
const { createUser } = require('../Constroller/userCtrl');




const router = express.Router();

router.post('/register', createUser);
module.exports= router;