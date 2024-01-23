const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: String,
    amount: Number,
    date: { type: Date, default: Date.now },
    category: String,
});

module.exports = mongoose.model('Expense', expenseSchema);