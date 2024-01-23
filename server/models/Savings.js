const mongoose = require('mongoose');

const savingsSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    goal: String,
    targetAmount: Number,
    currentAmount: Number,
    targetDate: Date,
});

module.exports = mongoose.model('Savings', savingsSchema);