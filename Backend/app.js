const express = require('express');
const db = require('./config/db');
const authRouter = require('./routes/authRoutes');
const mealRouter = require('./routes/mealRoutes');
const aiRouter = require('./routes/aiRoutes');
const app = express();
require('dotenv').config();

// DB Connection 
db();

// json
app.use(express.json());

// routes
app.use('/auth', authRouter);
app.use('/meal', mealRouter);
app.use('/ai', aiRouter);

app.get('/', (req, res)=>{
    res.send('AI Health and Nutrition Assistant Project');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});