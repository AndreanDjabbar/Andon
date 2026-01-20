const express = require('express');

const router = express.Router();
const realtimeParetoController = require('../controllers/realtimePareto.controller');

router.get('/', realtimeParetoController.defaultController);
router.get('/realtime-pareto', realtimeParetoController.getRealtimeParetoController);
router.get('/av-category', realtimeParetoController.getAvCategoryController);

module.exports = router;
