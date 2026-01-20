const express = require('express');

const router = express.Router();
const tambahAnalysisController = require('../controllers/tambahAnalysis.controller');

router.get('/tambahAnalysis', tambahAnalysisController.getTambahAnalysis);

module.exports = router;
