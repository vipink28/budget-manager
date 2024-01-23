const BudgetPlan = require('../models/BudgetPlan');

exports.createBudgetPlan = async (req, res) => {
    const { user, category, limit } = req.body;
    try {
        const newBudgetPlan = new BudgetPlan({ user, category, limit });
        await newBudgetPlan.save();
        res.json(newBudgetPlan);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getAllBudgetPlans = async (req, res) => {
    try {
        const userId = req.query.userId;
        const budgetPlans = await BudgetPlan.find({ user: userId });
        res.json(budgetPlans);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateBudgetPlan = async (req, res) => {
    const { category, limit } = req.body;
    try {
        const updatedBudgetPlan = await BudgetPlan.findByIdAndUpdate(
            req.params.budgetPlanId,
            { category, limit },
            { new: true }
        );
        res.json(updatedBudgetPlan);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteBudgetPlan = async (req, res) => {
    try {
        await BudgetPlan.findByIdAndDelete(req.params.budgetPlanId);
        res.json({ msg: 'Budget plan deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};