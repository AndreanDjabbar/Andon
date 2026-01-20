const express = require('express');

const router = express.Router();
const cmFollowupController = require('../controllers/cmFollowup.controller'); // Controller for CM Followup

router.get('/cm-followup', cmFollowupController.getFollowups);

module.exports = router;
