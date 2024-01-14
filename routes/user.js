const express = require('express');
const router = express.Router();
const userController =  require('../controller/user')

router
    .get('/', userController.getAllUser)
    .get('/', userController.getUser)
    .put('/:id', userController.replaceUser)
    .patch('/:id', userController.updateUser)
    .delete('/:id', userController.deleteUser);

exports.router = router;
