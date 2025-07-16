const express = require('express');
const blacklistToken = require('../middlewares/blacklistToken');
const { analyzeHealth, suggestExercise } = require('../controllers/aiController');
const aiRouter = express.Router();

aiRouter.post('/analyzeHealth', blacklistToken, analyzeHealth);
aiRouter.post('/suggestExercise', blacklistToken, suggestExercise);

module.exports = aiRouter;