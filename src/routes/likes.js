const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/content');


router.put('/:id', ctrl.updateContentById);



module.exports = router;