// models/Session.js
const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ipAddress: { type: String, required: true },
  loginTime: { type: Date, default: Date.now },
  logoutTime: { type: Date }
});

module.exports = mongoose.model('Session', SessionSchema);
