const express = require('express');
const blacklistToken = require('../middlewares/blacklistToken');
const { analyzeHealth } = require('../controllers/aiController');
const aiRouter = express.Router();

aiRouter.post('/analyzeHealth', blacklistToken, analyzeHealth);

module.exports = aiRouter;