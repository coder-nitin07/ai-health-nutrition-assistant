const express = require('express');
const { createUser } = require('../controllers/authController');
const authValidation = require('../middlewares/authValidation');
const authRouter = express.Router();

authRouter.post('/register', authValidation, createUser);

module.exports = authRouter;