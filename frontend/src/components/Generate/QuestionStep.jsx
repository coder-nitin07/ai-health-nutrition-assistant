import StepFive from './steps/StepFive';
import StepFour from './steps/StepFour';
import StepOne from './steps/StepOne';
import StepSix from './steps/StepSix';
import StepThree from './steps/StepThree';
import StepTwo from './steps/StepTwo'; // (You’ll create this next)

const QuestionStep = ({ currentStep, setCurrentStep, formData, setFormData, handleNext }) => {
   

   switch (currentStep) {
    case 0:
      return <StepOne formData={formData} setFormData={setFormData} handleNext={handleNext} />;
    case 1:
      return <StepTwo formData={formData} setFormData={setFormData} handleNext={handleNext} />;
    case 2:
      return <StepThree formData={formData} setFormData={setFormData} handleNext={handleNext} />;
    case 3:
      return <StepFour formData={formData} setFormData={setFormData} handleNext={handleNext} />;
    case 4:
      return <StepFive formData={formData} setFormData={setFormData} handleNext={handleNext} />;
    case 5:
      return <StepSix formData={formData} setFormData={setFormData} handleNext={handleNext} />;
    default:
      return <div>🎉 All done!</div>;
  }
};

export default QuestionStep;