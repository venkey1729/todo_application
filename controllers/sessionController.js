// controllers/sessionController.js
const Session = require('../models/Session');

exports.getSessionInfo = async (req, res) => {
  try {
    const sessions = await Session.find({ userId: req.user.id });
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
