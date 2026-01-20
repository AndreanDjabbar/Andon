const express = require('express');

const router = express.Router();
const qccMTypesController = require('../controllers/qccMTypes.controller');

router.get('/qcc-m-types', qccMTypesController.getQccMTypes);

module.exports = router;
