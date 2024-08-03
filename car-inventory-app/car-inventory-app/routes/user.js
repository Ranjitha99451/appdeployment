const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const { authenticateUser } = require('../middleware/auth');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/cars', authenticateUser, userController.getCars);

module.exports = router;