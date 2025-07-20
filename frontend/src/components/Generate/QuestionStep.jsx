import { useState } from "react";
import StepOne from "./steps/StepOne";
// later: import StepTwo, StepThree, etc.

const QuestionStep = ({ currentStep, setCurrentStep }) => {
  const [formData, setFormData] = useState({});

  const handleNext = (response) => {
    const updatedData = { ...formData, ...response };
    setFormData(updatedData);
    setCurrentStep(prev => prev + 1);
  };

  const steps = [
    <StepOne onNext={handleNext} />,
    // <StepTwo onNext={handleNext} />,
    // ...
  ];

  return (
    <div className="w-full">
      {steps[currentStep] || (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold mb-4">✅ All Done!</h2>
          <pre className="bg-gray-900 text-white text-left text-sm p-4 rounded">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default QuestionStep;