import { motion } from "framer-motion";

const StepSix = ({ formData = {}, setFormData, handleNext }) => {
    const options = ['Sedentary', 'Moderate', 'Active'];

    const handleSelect = (option) =>{
        setFormData(prev => ({ ...prev, activityLevel: option }));
    };

    const handleSubmit = () => {
        if (formData.activityLevel) {
            handleNext();
        }
    };

    return (
        <motion.div
            key="step-five"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl mx-auto mt-10 bg-[#1a1a1a] p-6 rounded-2xl shadow-lg"
        >
            <h2 className="text-2xl font-semibold mb-6 text-white">
                What is your current activity level?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                { options.map(option =>(
                    <button
                        key={ option }
                        onClick={ ()=> handleSelect(option) }
                        className={`px-4 py-2 rounded-xl border text-white transition-all
                            ${
                                formData.activityLevel === option
                                ? "bg-[#00E0A1] border-[#00E0A1] text-black"
                                : "bg-[#111] border-gray-600 hover:border-[#00E0A1]"
                            }`
                        }
                    >
                        { option }
                    </button>
                ))}
            </div>

            <button
                onClick = { handleSubmit }
                disabled = { !formData.activityLevel }
                className={`w-full py-3 rounded-xl font-semibold transition-colors
                    ${
                        formData.activityLevel
                        ? "bg-[#00E0A1] hover:bg-[#00C896] text-black"
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    }`
                }
            >   
                Submit
            </button>
        </motion.div>
    )
};

export default StepSix;