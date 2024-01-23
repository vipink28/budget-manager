const Income = require('../models/Income');
const Expense = require('../models/Expense');
const Savings = require('../models/Savings');

exports.generateReport = async (req, res) => {
    try {
        const { user, startDate, endDate } = req.body;

        const incomes = await Income.find({ user, date: { $gte: startDate, $lte: endDate } });
        const expenses = await Expense.find({ user, date: { $gte: startDate, $lte: endDate } });
        const savings = await Savings.find({ user });

        // Aggregate and analyze the data
        // Example: Summing up total income and expenses
        const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
        const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

        // Construct the report
        const report = {
            totalIncome,
            totalExpenses,
            netSavings: totalIncome - totalExpenses,
            savingsGoals: savings,
            // Additional analysis can be added here
        };

        res.json(report);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};