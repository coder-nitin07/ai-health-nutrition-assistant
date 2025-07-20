import StepOne from './steps/StepOne';
import StepThree from './steps/StepThree';
import StepTwo from './steps/StepTwo'; // (You’ll create this next)

const QuestionStep = ({ currentStep, setCurrentStep, formData, setFormData }) => {
   const handleNext = () => setCurrentStep((prev) => prev + 1);

   switch (currentStep) {
    case 0:
      return <StepOne formData={formData} setFormData={setFormData} handleNext={handleNext} />;
    case 1:
      return <StepTwo formData={formData} setFormData={setFormData} handleNext={handleNext} />;
    case 2:
      return <StepThree formData={formData} setFormData={setFormData} handleNext={handleNext} />;
    default:
      return <div>🎉 All done!</div>;
  }
};

export default QuestionStep;