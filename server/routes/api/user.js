const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/userController');

router.get('/:username', userController.getUserByUsername);

module.exports = router;