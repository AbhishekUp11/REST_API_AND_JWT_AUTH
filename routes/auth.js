const express = require('express');
const router = express.Router();
const authController = require('../controller/auth')

router
    .post('/', authController.signUp)
    .get('/', authController.login);

exports.router = router;
    