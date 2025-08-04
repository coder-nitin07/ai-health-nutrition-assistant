import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StepTwo = ({ formData = {}, setFormData, handleNext }) => {
//   const [selectedOption, setSelectedOption] = useState(formData.waterIntake || '');
  const option = ['<1L', '1 to 2L', '2 to 3L', '3 to 4L', '4+L'];

//   useEffect(() => {
//     setSelectedOption(formData.waterIntake || '');
//   }, [formData]);

  const handleSelect = (option) => {
    // setSelectedOption(option);
    setFormData(prev => ({ ...prev, waterIntake: option }));
  };

    return(
        <motion.div
            key="step-two"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl mx-auto mt-10 bg-[#1a1a1a] p-6 rounded-2xl shadow-lg"
        >
            <h2 className="text-2xl font-semibold mb-6 text-white">
                How much water did you drink today?
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
                { option.map((option)=>(
                    <button
                        key={ option }
                         onClick={() => handleSelect(option)}
                        className={`px-4 py-2 rounded-xl border text-white transition-all
                        ${
                             formData.waterIntake === option
                            ? "bg-[#00E0A1] border-[#00E0A1] text-black"
                            : "bg-[#111] border-gray-600 hover:border-[#00E0A1]"
                        }`}
                    >   
                        { option }
                    </button>
                )) }
            </div>

            <button 
                onClick={ handleNext }
                 disabled={!formData.waterIntake}
                className={`w-full py-3 rounded-xl font-semibold transition-colors
                    ${
                        formData.waterIntake
                        ? "bg-[#00E0A1] hover:bg-[#00C896] text-black"
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    }`
                }
            >
                Next Question
            </button>
        </motion.div>
    )
};

export default StepTwo;