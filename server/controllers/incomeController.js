const Income = require('../models/Income');

exports.addIncome = async (req, res) => {
    const { user, source, amount, date, category } = req.body;
    try {
        const newIncome = new Income({ user, source, amount, date, category });
        await newIncome.save();
        console.log('Income saved:', newIncome); // Log the saved income
        res.json(newIncome);
    } catch (err) {
        console.error('Error in addIncome:', err); // More detailed error log
        res.status(500).send('Server error: ' + err.message);
    }
};

exports.getAllIncome = async (req, res) => {
    try {
        const userId = req.query.userId;
        const incomes = await Income.find({ user: userId });
        res.json(incomes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateIncome = async (req, res) => {
    const { source, amount, date, category } = req.body;
    try {
        const updatedIncome = await Income.findByIdAndUpdate(
            req.params.incomeId,
            { source, amount, date, category },
            { new: true }
        );
        if (!updatedIncome) {
            return res.status(404).send('Income not found');
        }
        res.json(updatedIncome);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteIncome = async (req, res) => {
    try {
        const deletedIncome = await Income.findByIdAndDelete(req.params.incomeId);

        if (!deletedIncome) {
            return res.status(404).send('Income not found');
        }
        res.json({ msg: 'Income deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};