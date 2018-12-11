const express = require('express');
const router = express.Router();
const { passport, isLoggedIn } = require('../../passport')

// add middleware
const ctrl = require('../controllers/users');

router.get('/', isLoggedIn, ctrl.getAllUsers);

router.post('/', ctrl.createUser);

router.delete('/:id', ctrl.deleteUser);

router.get('/:id', ctrl.getUserById);

router.put('/:id', ctrl.updateUserById);

router.delete('/:id/followers', ctrl.deleteFollowers);

router.post('/login', ctrl.login);


module.exports = router;