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

module.exports = { mealLog };