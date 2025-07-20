import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from '../components/Navbar'
import StreakBanner from '../components/Generate/StreakBanner'
import QuestionStep from '../components/Generate/QuestionStep'
import Footer from '../components/Footer'

const Generate = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleStart = () => setIsStarted(true);
  const handleNext = () => {
    if (currentStep === 5) {  // ✅ Last step index = 5
      navigate("/summary", { state: { formData } }); // ✅ wrap formData in object
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };  

  return (
    <div className="flex flex-col min-h-screen bg-[#0F0F0F] text-[#F0F0F0] overflow-y-auto">
        <Navbar />


        <main className="flex-grow px-4 pt-[5rem] pb-10">

          <AnimatePresence mode="wait">
              { !isStarted && (
                  <motion.div
                      key="streak"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6 }}
                      className="flex items-center  justify-center sm:min-h-[500px]"
                  >
                      <StreakBanner onStart={ handleStart } />
                  </motion.div>
              )}


               { isStarted && (
                  <motion.div
                      key="question"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6 }}
                      className="w-full max-w-xl min-h-[500px] sm:min-h-[500px] flex items-center justify-center mx-auto"
                  >
                      <QuestionStep 
                          currentStep = { currentStep }
                          setCurrentStep = { setCurrentStep }
                          formData={formData}              // ✅ Pass down
                setFormData={setFormData}        // ✅ Pass down
                handleNext={handleNext}
                      />
                  </motion.div>
              )}
          </AnimatePresence>
        </main>


        <Footer />
    </div>
  )
}

export default Generate