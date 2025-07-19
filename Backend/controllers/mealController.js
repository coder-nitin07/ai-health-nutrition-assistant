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
        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const skip = (page -1) * limit;

        const userExist = await User.findById( userId );
        if(!userExist){
            return res.status(404).json({ message: 'User not found.' });
        }

        const totalLogs = await MealLog.countDocuments({ user: userId });

        const getLogs = await MealLog.find({ user: userId })
                                            .sort({ createdAt: -1 })
                                            .skip(skip)
                                            .limit(limit);

        res.status(200).json({ 
            message: 'Successfully Fetched All Logs', 
            logs: getLogs,
            pagination: {
                total: totalLogs,
                page,
                limit,
                totalPages: Math.ceil(totalLogs / limit)
            }
        });
    } catch (err) { 
        console.log(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

// Edit log API
const editLog = async (req, res)=>{
    try {
        const userId = req.user.id;
        const { id } = req.params;

        const log = await MealLog.findOne({ _id: id, user: userId });
        if(!log){
            return res.status(404).json({ message: 'Log not found or unauthorized' });
        }

        const latestLog = await MealLog.findOne({ user: userId }).sort({ createdAt: -1 });
        if (!latestLog || latestLog._id.toString() !== id) {
            return res.status(403).json({ message: 'Only the most recent log can be edited.' });
        }

        // Check: Is it within 24 hours?
        const createdAt = new Date(log.createdAt);
        const now = new Date();
        const hourPassed = (now - createdAt) / (1000 * 60 * 60); // convert the MS to hours

        if(hourPassed > 24){
            return res.status(403).json({ message: 'Edit window expired (24 hours).' });
        }

        if(log.edited){
            return res.status(403).json({ message: 'You can only edit once.' });
        }

        const updatedData = req.body;
        const updatedLog = await MealLog.findByIdAndUpdate(id, {
            ...updatedData,
            edited: true
        },{ new: true });

        res.status(200).json({ message: 'Log updated successfully.', log: updatedLog });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Something went wrong.' })
    }
};

// Delete API
const deleteLog = async (req, res)=>{
    try {
        const userId = req.user.id;
        const logId = req.params.id;

        const log = await MealLog.findById(logId);
        if(!logId){
            return res.status(404).json({ message: "Log not found." });
        }

        if(log.user.toString() !== userId){
            return res.status(403).json({ message: "Unauthorized to delete this log." });
        }

        await MealLog.findByIdAndDelete(logId);

        res.status(200).json({ message: "Log deleted successfully." });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

// Get Today Log
const getTodayLog = async (req, res)=>{
    try {
        const userId = req.user.id;

        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        const todayLog = await MealLog.findOne({
            user: userId,
            createdAt: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        });

        if(!todayLog){
            return res.status(404).json({ message: "No log found for today." });
        }

        res.status(200).json({ message: "Today's log fetched successfully.", log: todayLog });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

// Get Streak
const getStreak = async (req, res) => {
    try {
        const userId = req.user.id;

        const userExist = await User.findById(userId);
        if (!userExist) {
            return res.status(404).json({ message: 'User not found' });
        }

        const logs = await MealLog.find({ user: userId }).sort({ createdAt: 1 });
        if (!logs.length) {
            return res.status(200).json({ streak: 0 });
        }

        const logDates = logs.map(log => {
            const date = new Date(log.createdAt);
            date.setHours(0, 0, 0, 0); // normalize time
            return date.toISOString().split("T")[0]; // keep YYYY-MM-DD format
        });

        const uniqueDates = [...new Set(logDates)];

        let streak = 0;
        let today = new Date();
        today.setHours(0, 0, 0, 0);

        // Check for consecutive days starting from today
        for (let i = uniqueDates.length - 1; i >= 0; i--) {
            const logDate = new Date(uniqueDates[i]);
            logDate.setHours(0, 0, 0, 0);

            const diffInDays = Math.floor((today - logDate) / (1000 * 60 * 60 * 24));

            if (diffInDays === 0) {
                // logged today
                streak++;
            } else if (diffInDays === 1) {
                // logged yesterday
                streak++;
                today.setDate(today.getDate() - 1); // move to previous day
            } else {
                break; // streak broken
            }

            today.setDate(today.getDate() - 1); // move to previous day
        }

        return res.status(200).json({ streak });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = { mealLog, getAllLogs, editLog, deleteLog, getTodayLog, getStreak };