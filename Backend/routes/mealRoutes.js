const express = require('express');
const { mealLog, getAllLogs, editLog, deleteLog } = require('../controllers/mealController');
const mealValidation = require('../middlewares/mealValidation');
const blacklistToken = require('../middlewares/blacklistToken');
const mealRouter = express.Router();

mealRouter.post('/meal-log', blacklistToken, mealValidation, mealLog);
mealRouter.get('/getAllLogs', blacklistToken, getAllLogs);
mealRouter.put('/editLog/:id', blacklistToken, editLog);
mealRouter.delete('/deleteLog/:id', blacklistToken, deleteLog);

module.exports = mealRouter;