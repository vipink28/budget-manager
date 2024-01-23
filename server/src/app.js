const express = require('express');
const userRoutes = require('./routes/userRoutes');
const incomeRoutes = require('./routes/incomeRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const savingsRoutes = require('./routes/savingsRoutes');

const app = express();

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/savings', savingsRoutes);


module.exports = app;