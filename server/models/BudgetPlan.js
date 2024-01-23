const mongoose = require('mongoose');

const budgetPlanSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: String,
    limit: Number,
});

module.exports = mongoose.model('BudgetPlan', budgetPlanSchema);