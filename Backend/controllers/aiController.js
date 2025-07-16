const MealLog = require("../models/mealSchema");
const formatPromptFromLogs = require("../utils/promptFormatter");
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// Analyze Health
const analyzeHealth = async (req, res)=>{
    try {
        const userId = req.user.id;

        const logs = await MealLog.find({ user: userId }).sort({ createdAt: -1 }).limit(5);
        if(logs.length === 0){
            return res.status(404).json({ message: "No meal logs found to analyze." });
        }

        const prompt = formatPromptFromLogs(logs);

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const aiOutput = response.text();

        res.status(200).json({ message: "Health analysis completed.", report: aiOutput });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong during analysis." });
    }
};

const suggestExercise = async (req, res)=>{
    try {
        const userId = req.user.id;

        const logs = await MealLog.find({ user: userId })
                                        .sort({ createdAt: -1 })
                                        .limit(5);

        if(logs.length === 0){
            return res.status(404).json({ message: "No recent meal/activity logs found." });
        }

        let prompt = `Based on the following user's recent logs, suggest:\n- 3 to 5 simple home-friendly exercises\n- Light wellness habits (walking, stretching, etc.)\n- Hydration or sleep tips\n\n`;

        logs.forEach((log, index) => {
            prompt += `\nLog ${index + 1}:\n`;
            prompt += `Activity Level: ${log.activityLevel}\n`;
            prompt += `Sleep Hours: ${log.sleepHours}\n`;
            prompt += `Water Intake: ${log.waterIntake}\n`;
            prompt += `Caffeine: ${log.caffeine}\n`;
            prompt += `Meals: ${log.items}\n`;
        });

        prompt += `\nPlease make suggestions in a friendly, supportive tone.`;

         const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const output = response.text();

        res.status(200).json({ message: 'Exercise and wellness suggestions generated.', suggestions: output });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Something went wrong during suggestion generation.' });
    }
};

module.exports = { analyzeHealth, suggestExercise };