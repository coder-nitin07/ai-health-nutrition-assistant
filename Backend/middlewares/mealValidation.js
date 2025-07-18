const joi = require('joi');

const mealSchema = joi.object({
    timesOfDay: joi.array()
        .items(joi.string().valid('morning', 'afternoon', 'evening', 'night', 'snacks'))
        .min(1)
        .required(),
    items: joi.string().required(),
    quantity: joi.string().min(1).required(),
    waterIntake: joi.string().valid('<1L', '1–2L', '2–3L', '3–4L', '4+L').required(),
    caffeine: joi.string().valid('None', '1 cup', '2 cups', '3+ cups').required(),
    alcohol: joi.string().valid('Yes', 'No').required(),
    sleepHours: joi.number().required(),
    activityLevel: joi.string()
        .valid('Sedentary', 'Moderate', 'Active')
        .required()
});

const mealValidation = async (req, res, next)=>{
    const { error } = mealSchema.validate(req.body);

    if(error){
        return res.status(404).json({ message: error.details[0].message });
    }

    next();
};

module.exports = mealValidation;