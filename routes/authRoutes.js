const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', authController.authenticateUser);
router.get('/callback', authController.authCallback);

module.exports = router;
