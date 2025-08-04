const mongoose = require('mongoose');

const mealSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    "meals": [
        {
            timesOfDay: {
                type: String,
                enum: [ 'morning', 'afternoon', 'evening', 'night', 'snacks' ],
                required: true
            },
            items: {
                type: [String],
                required: true
            },
        }
    ],
    waterIntake: {
        type: String,
        enum: ['<1L', '1 to 2L', '2 to 3L', '3 to 4L', '4+L'],
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
        type: String,
        enum: ['Less than 4 hours', '4 to 6 hours', '6 to 8 hours', 'More than 8 hours'],
        required: true
    },
    activityLevel: {
        type: String,
        enum: ['Sedentary', 'Moderate', 'Active']
    },
    edited: {
        type: Boolean,
        default: false
    },
    analysis: { type: String },
    suggestions: { type: String }
}, { timestamps: true });

const MealLog = mongoose.model('MealLog', mealSchema);

module.exports = MealLog;