const User = require("../models/authSchema");
const MealLog = require("../models/mealSchema");

// Meal Data
const mealLog = async (req, res)=>{
    try {
        const { timesOfDay, items, quantity, waterIntake, caffeine, alcohol, sleepHours, activityLevel } = req.body;

        if(!timesOfDay, !items, !quantity, !waterIntake, !sleepHours){
            return res.status(404).json({ message: 'Please filled all the required fields' });
        }

        const takeData = await MealLog.create({
            user: req.user.id,
            timesOfDay,
            items,
            quantity,
            waterIntake,
            caffeine,
            alcohol,
            sleepHours,
            activityLevel
        });

        res.status(201).json({ message: 'User data created', data: takeData });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

// Get Logs
const getAllLogs = async (req, res)=>{
    try {
        const userId = req.user.id;
        const getUser = await User.findById( userId );

        if(!getUser){
            return res.status(404).json({ message: 'User not found.' });
        }

        const getLogs = await MealLog.find({ user: userId }).sort({ createdAt: -1 });

        res.status(200).json({ message: 'Successfully Fetched All Logs', logs: getLogs });
    } catch (err) { 
        console.log(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = { mealLog, getAllLogs };