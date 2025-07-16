const express = require('express');
const { mealLog, getAllLogs } = require('../controllers/mealController');
const mealValidation = require('../middlewares/mealValidation');
const blacklistToken = require('../middlewares/blacklistToken');
const mealRouter = express.Router();

mealRouter.post('/meal-log', blacklistToken, mealValidation, mealLog);
mealRouter.get('/getAllLogs', blacklistToken, getAllLogs);

module.exports = mealRouter;