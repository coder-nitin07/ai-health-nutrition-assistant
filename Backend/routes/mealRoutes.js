const express = require('express');
const { mealLog, getAllLogs, editLog } = require('../controllers/mealController');
const mealValidation = require('../middlewares/mealValidation');
const blacklistToken = require('../middlewares/blacklistToken');
const mealRouter = express.Router();

mealRouter.post('/meal-log', blacklistToken, mealValidation, mealLog);
mealRouter.get('/getAllLogs', blacklistToken, getAllLogs);
mealRouter.put('/editLog/:id', blacklistToken, editLog);

module.exports = mealRouter;