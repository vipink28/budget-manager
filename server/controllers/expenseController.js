const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
    const { user, description, amount, date, category } = req.body;
    try {
        const newExpense = new Expense({ user, description, amount, date, category });
        await newExpense.save();
        res.json(newExpense);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getAllExpenses = async (req, res) => {
    try {
        const userId = req.query.userId;
        const expenses = await Expense.find({ user: userId });
        res.json(expenses);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateExpense = async (req, res) => {
    const { description, amount, date, category } = req.body;
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(
            req.params.expenseId,
            { description, amount, date, category },
            { new: true }
        );
        res.json(updatedExpense);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteExpense = async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.expenseId);
        res.json({ msg: 'Expense deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};