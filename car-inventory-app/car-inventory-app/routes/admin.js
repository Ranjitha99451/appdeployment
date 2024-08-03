const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();
const { authenticateAdmin } = require('../middleware/auth');

router.post('/cars', authenticateAdmin, adminController.createCar);
router.get('/cars', authenticateAdmin, adminController.getCars);
router.put('/cars/:id', authenticateAdmin, adminController.updateCar);
router.delete('/cars/:id', authenticateAdmin, adminController.deleteCar);

module.exports = router;