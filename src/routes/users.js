const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/users');

router.get('/', ctrl.getAllUsers);

router.post('/', ctrl.createUser);

router.delete('/:userId', ctrl.deleteUser);

router.get('/:userId', ctrl.getUserById);

router.put('/:id', ctrl.updateUserById);

router.get('/:id/followers', ctrl.getFollowers);

router.delete('/:id/followers', ctrl.deleteFollowers);

router.post('/login', ctrl.login);

module.exports = router;