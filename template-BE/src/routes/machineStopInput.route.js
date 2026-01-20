const express = require('express');

const router = express.Router();
const machineStopInputController = require('../controllers/machineStopInput.controller'); // Controller for machine stop input

router.get('/machineStopInput', machineStopInputController.getMachineStopInput);
router.get('/problemNameSuggestions', machineStopInputController.getProblemNameSuggestions);
router.put('/problemMachine', machineStopInputController.putMachineStopInput);

module.exports = router;
