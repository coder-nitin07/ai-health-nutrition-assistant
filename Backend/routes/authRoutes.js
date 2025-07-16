const express = require('express');
const { createUser, loginUser, logoutUser } = require('../controllers/authController');
const authValidation = require('../middlewares/authValidation');
const validateLogin = require('../middlewares/authLogin');
const blacklistToken = require('../middlewares/blacklistToken');
const authRouter = express.Router();

authRouter.post('/register', authValidation, createUser);
authRouter.post('/login', validateLogin, loginUser);
authRouter.post('/logout', logoutUser);

module.exports = authRouter;