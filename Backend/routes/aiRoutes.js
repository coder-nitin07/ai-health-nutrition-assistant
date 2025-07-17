const express = require('express');
const blacklistToken = require('../middlewares/blacklistToken');
const { analyzeHealth, suggestExercise, generateFullHealthReport } = require('../controllers/aiController');
const aiRouter = express.Router();

aiRouter.post('/analyzeHealth', blacklistToken, analyzeHealth);
aiRouter.post('/suggestExercise', blacklistToken, suggestExercise);
aiRouter.post('/generateFullHealthReport', blacklistToken, generateFullHealthReport);

module.exports = aiRouter;