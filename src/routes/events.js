const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/users');

router.get('/', ctrl.getAllEvents);

router.get('/', ctrol.getEventById);

router.post('/', ctrl.createEvent);

router.delete('/:eventId', ctrl.deleteEvent);

router.get('/:eventId', ctrl.getEventById);

router.put('/:id', ctrl.updateEventById);


module.exports = router;