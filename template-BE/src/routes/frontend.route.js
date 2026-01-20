const express = require('express');

const router = express.Router();
const frontendController = require('../controllers/frontend.controller'); // Controller for frontend

router.get('/frontend', frontendController.getFrontend);

module.exports = router;
