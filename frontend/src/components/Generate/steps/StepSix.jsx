import { motion } from "framer-motion";
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { useState } from "react";

const StepSix = ({ formData = {}, setFormData, handleNext }) => {
    const options = ['Sedentary', 'Moderate', 'Active'];
    const [finalReport, setFinalReport] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSelect = (option) => {
        setFormData(prev => ({ ...prev, activityLevel: option }));
    };

    const handleSubmit = async () => {
    try {
        setLoading(true);
        setError("");
        setFinalReport(null);

        const token = localStorage.getItem("token");

        console.log("Submitting form data:", formData);

        const res = await axios.post(
            "http://localhost:3000/meal/meal-log",
            formData,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
console.log("🧾 Meals Before Submit:", formData.meals);
        // Check for valid response
        if (res.data && res.data.aiResponse && res.data.aiResponse.analysis && res.data.aiResponse.suggestions) {
            setFinalReport(res.data.aiResponse);
            localStorage.setItem("finalReport", JSON.stringify(res.data.aiResponse));
            localStorage.setItem("userResponses", JSON.stringify(formData));
            
            const today = new Date().toDateString();
            localStorage.setItem("mealLoggedDate", today);

            handleNext(); // Navigate to summary
        } else {
            setError("No valid AI response found.");
        }
    } catch (err) {
        console.error("Submit error:", err);
        setError("Something went wrong. Please try again.");
    } finally {
        setLoading(false);
    }
};


    return (
        <motion.div
            key="step-six"
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
                {options.map(option => (
                    <button
                        key={option}
                        onClick={() => handleSelect(option)}
                        className={`px-4 py-2 rounded-xl border text-white transition-all ${
                            formData.activityLevel === option
                                ? "bg-[#00E0A1] border-[#00E0A1] text-black"
                                : "bg-[#111] border-gray-600 hover:border-[#00E0A1]"
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                disabled={!formData.activityLevel || loading}
                className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                    formData.activityLevel
                        ? "bg-[#00E0A1] hover:bg-[#00C896] text-black"
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
            >
                {loading ? "Submitting..." : "Submit"}
            </button>

            { finalReport && (
                <div className="mt-8 p-6 bg-[#222] border border-[#00E0A1] rounded-xl text-white">
                    <h3 className="text-xl font-bold mb-4 text-[#00E0A1]">Your Health Summary</h3>
                    <div className="whitespace-pre-line leading-relaxed">
                        <ReactMarkdown
    components={{
        p: ({ children }) => <p className="text-white mb-2">{children}</p>,
    }}
>
    {finalReport.analysis}
</ReactMarkdown>

<ReactMarkdown
    components={{
        p: ({ children }) => <p className="text-[#00E0A1] mt-4">{children}</p>,
    }}
>
    {finalReport.suggestions}
</ReactMarkdown>

                    </div>
                </div>
            )}

            {error && <p className="text-red-500 mt-4">{error}</p>}
        </motion.div>
    );
};

export default StepSix;