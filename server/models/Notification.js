const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: String,
    date: Date,
    status: { type: String, default: 'pending' }, // e.g., 'pending', 'sent'
});

module.exports = mongoose.model('Notification', notificationSchema);