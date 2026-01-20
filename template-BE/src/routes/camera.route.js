const express = require('express');
const cameraController = require('../controllers/camera.controller'); // Controller for camera

const router = express.Router();

router.get('/settings', cameraController.getCameraSettings);
router.post('/settings', cameraController.saveCameraSettings);
router.get('/list', cameraController.getCameraList);

module.exports = router;
