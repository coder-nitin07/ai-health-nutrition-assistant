import { motion } from "framer-motion";
import Lottie from "lottie-react";
import chatbotAnimation from '../assets/lottie/Intelligent AI chat bot communicates with people.json';

const steps = [
    {
        title: "Ask Your Health Question",
        desc: "Type your nutrition or fitness question to our AI assistant.",
    },
    {
        title: "AI Processes Your Query",
        desc: "Our smart model analyzes your question using deep AI models.",
    },
    {
        title: "Get Personalized Advice",
        desc: "Receive actionable diet, wellness, or workout suggestions.",
    },
    {
        title: "Improve Your Lifestyle",
        desc: "Take action, track your progress, and stay healthy with ease.",
    }
];

const HowItWorksSection = ()=>{
    return (
        <section className="bg-[#0F0F0F] text-[#F0F0F0] px-6 md:px-16 py-20" id="docs">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">


                {/* Lottie Animation */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                     <Lottie animationData={chatbotAnimation} loop={true} className="w-full max-w-md mx-auto" />
                </motion.div>

                {/* steps */}
                <div className="space-y-8">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        How it Works?
                    </motion.h2>

                    { steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#1A1A1A] p-5 rounded-xl shadow-md"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold mb-2">
                            {index + 1}. {step.title}
                            </h3>
                            <p className="text-gray-400">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default HowItWorksSection;