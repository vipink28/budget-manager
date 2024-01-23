const express = require('express');
const router = express.Router();
const savingsController = require('../controllers/savingsController');

router.post('/', savingsController.createSavingsGoal);
router.get('/', savingsController.getAllSavingsGoals);
router.put('/:savingsId', savingsController.updateSavingsGoal);
router.delete('/:savingsId', savingsController.deleteSavingsGoal);

module.exports = router;