import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timesOptions = ['morning', 'afternoon', 'evening', 'night', 'snacks'];

const StepOne = ({ onNext }) => {
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [mealInputs, setMealInputs] = useState({});
  const [touched, setTouched] = useState({}); // For input touch tracking

  const handleCheckboxChange = (time) => {
    if (selectedTimes.includes(time)) {
      setSelectedTimes(selectedTimes.filter(t => t !== time));
      const updatedInputs = { ...mealInputs };
      delete updatedInputs[time];
      setMealInputs(updatedInputs);

      const updatedTouched = { ...touched };
      delete updatedTouched[time];
      setTouched(updatedTouched);
    } else {
      setSelectedTimes([...selectedTimes, time]);
    }
  };

  const handleInputChange = (time, value) => {
    setMealInputs(prev => ({
      ...prev,
      [time]: value
    }));
    setTouched(prev => ({
      ...prev,
      [time]: true
    }));
  };

  const allValid = selectedTimes.length > 0 && selectedTimes.every(time => (mealInputs[time] || "").trim() !== "");

  const handleNext = () => {
    if (!allValid) return;
    const meals = selectedTimes.map(time => ({
      timesOfDay: time,
      items: mealInputs[time] || ""
    }));
    onNext({ meals });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">🍽️ What did you eat today and when?</h2>

      <div className="space-y-2">
        {timesOptions.map(time => (
          <div key={time}>
            <label className="group flex cursor-pointer items-center gap-3 rounded-md border border-gray-700 bg-[#121212] px-4 py-2 transition hover:border-[#00C896]">
              <input
                type="checkbox"
                checked={selectedTimes.includes(time)}
                onChange={() => handleCheckboxChange(time)}
                className="form-checkbox h-4 w-4 rounded border-gray-600 bg-[#1A1A1A] text-[#00C896] focus:ring-0"
              />
              <span className="capitalize text-white">{time}</span>
            </label>

            <AnimatePresence>
              {selectedTimes.includes(time) && (
                <motion.input
                  key={time}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  type="text"
                  placeholder={`What did you eat in the ${time}?`}
                  value={mealInputs[time] || ""}
                  onChange={(e) => handleInputChange(time, e.target.value)}
                  className={`mt-2 w-full rounded-lg border ${
                    touched[time] && (mealInputs[time] || "").trim() === ""
                      ? "border-red-500"
                      : "border-gray-600"
                  } bg-[#1A1A1A] px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C896] transition`}
                />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={!allValid}
        className={`mt-6 w-full rounded-lg px-6 py-3 text-sm font-medium transition ${
          allValid
            ? "bg-[#00E0A1] text-black hover:bg-[#00C896]"
            : "bg-gray-700 text-gray-400 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default StepOne;