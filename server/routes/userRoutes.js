const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
const userController = require('../controllers/userController');


// User registration route
router.post('/register', userController.register);

// User login route
router.post('/login', userController.login);

// User profile update route
router.put('/profile', userController.updateProfile);

// Password recovery route
router.post('/recover', userController.recoverPassword);

// GET route for fetching user profile
router.get('/:userId', userController.getUserById);

module.exports = router;