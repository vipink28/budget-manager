const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    source: String,
    amount: Number,
    date: { type: Date, default: Date.now },
    category: String,
});

module.exports = mongoose.model('Income', incomeSchema);