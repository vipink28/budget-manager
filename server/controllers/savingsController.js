const Savings = require('../models/Savings');

exports.createSavingsGoal = async (req, res) => {
    const { user, goal, targetAmount, currentAmount, targetDate } = req.body;
    try {
        const newSavingsGoal = new Savings({ user, goal, targetAmount, currentAmount, targetDate });
        await newSavingsGoal.save();
        res.json(newSavingsGoal);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getAllSavingsGoals = async (req, res) => {
    try {
        const userId = req.query.userId;
        const savingsGoals = await Savings.find({ user: userId });
        res.json(savingsGoals);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateSavingsGoal = async (req, res) => {
    const { goal, targetAmount, currentAmount, targetDate } = req.body;
    try {
        const updatedSavingsGoal = await Savings.findByIdAndUpdate(
            req.params.savingsId,
            { goal, targetAmount, currentAmount, targetDate },
            { new: true }
        );
        res.json(updatedSavingsGoal);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteSavingsGoal = async (req, res) => {
    try {
        await Savings.findByIdAndDelete(req.params.savingsId);
        res.json({ msg: 'Savings goal deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
