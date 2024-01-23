const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');

router.post('/', incomeController.addIncome);
router.get('/', incomeController.getAllIncome);
router.put('/:incomeId', incomeController.updateIncome);
router.delete('/:incomeId', incomeController.deleteIncome);

module.exports = router;