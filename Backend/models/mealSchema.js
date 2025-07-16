const mongoose = require('mongoose');

const mealSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    timesOfDay: {
        type: [String],
        enum: [ 'morning', 'afternoon', 'evening', 'night', 'snacks' ],
        required: true
    },
    items: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    waterIntake: {
        type: String,
        enum: ['<1L', '1–2L', '2–3L', '3–4L', '4+L'],
        required: true
    },
    caffeine: {
        type: String,
        enum: ['None', '1 cup', '2 cups', '3+ cups'],
        required: true
    },
    alcohol: {
        type: String,
        enum: ['No', 'Yes'],
        required: true
    },
    sleepHours: {
        type: Number,
        required: true
    },
    activityLevel: {
        type: String,
        enum: ['Sedentary', 'Moderate', 'Active']
    }
}, { timestamps: true });

const MealLog = mongoose.model('MealLog', mealSchema);

module.exports = MealLog;