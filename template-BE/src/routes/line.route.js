const express = require('express');

const router = express.Router();
const lineController = require('../controllers/line.controller'); // Controller for line

router.get('/line', lineController.getLine);

module.exports = router;
