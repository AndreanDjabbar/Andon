const express = require('express');

const router = express.Router();
const sparepartsController = require('../controllers/sparepart.controller');

router.get('/spareparts', sparepartsController.getSpareparts);

module.exports = router;
