const express = require('express');
const router = express.Router();
const budgetPlanController = require('../controllers/budgetPlanController');

router.post('/', budgetPlanController.createBudgetPlan);
router.get('/', budgetPlanController.getAllBudgetPlans);
router.put('/:budgetPlanId', budgetPlanController.updateBudgetPlan);
router.delete('/:budgetPlanId', budgetPlanController.deleteBudgetPlan);

module.exports = router;