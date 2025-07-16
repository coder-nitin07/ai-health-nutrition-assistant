const express = require('express');
const { createUser, loginUser } = require('../controllers/authController');
const authValidation = require('../middlewares/authValidation');
const validateLogin = require('../middlewares/authLogin');
const authRouter = express.Router();

authRouter.post('/register', authValidation, createUser);
authRouter.post('/login', validateLogin, loginUser);

module.exports = authRouter;