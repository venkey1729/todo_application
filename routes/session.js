// routes/session.js
const express = require('express');
const { getSessionInfo } = require('../controllers/sessionController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/', getSessionInfo);

module.exports = router;
