const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/events');

router.get('/', ctrl.getAllEvents);

router.get('/:id', ctrl.getEventById);

router.post('/', ctrl.createEvent);

router.delete('/:id', ctrl.deleteEvent);

router.put('/:id', ctrl.updateEventById);

router.post('/:id/comment', ctrl.createComment);

router.delete('/:id/comment', ctrl.deleteComment);

router.put('/:id/comment', ctrl.updateCommentById);

router.post('/:id/like', ctrl.createLike);



module.exports = router;