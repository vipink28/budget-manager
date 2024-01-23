const moment = require('moment');

class InsightsController {
    constructor(data) {
        this.data = data;
    }

    calculateTotalAmounts() {
        let totalIncome = 0, totalExpenses = 0, totalSavings = 0;
        this.data.incomes.forEach(income => totalIncome += income.amount);
        this.data.expenses.forEach(expense => totalExpenses += expense.amount);
        this.data.savings.forEach(saving => totalSavings += saving.currentAmount);
        return { totalIncome, totalExpenses, totalSavings };
    }

    budgetUtilization() {
        const utilization = {};
        this.data.budgetplans.forEach(plan => {
            const expenses = this.data.expenses.filter(expense => expense.category === plan.category);
            const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
            utilization[plan.category] = {
                limit: plan.limit,
                spent: totalSpent,
                remaining: plan.limit - totalSpent
            };
        });
        return utilization;
    }

    generateInsights() {
        const { totalIncome, totalExpenses, totalSavings } = this.calculateTotalAmounts();
        const utilization = this.budgetUtilization();

        return {
            totalIncome,
            totalExpenses,
            totalSavings,
            budgetUtilization: utilization
        };
    }
}

module.exports = InsightsController;