import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import AskAI from '../assets/lottie/Guy talking to Robot _ AI Help.json';

const AboutSection = ()=>{
    return (
        <section
            id="about"
            className="bg-[#F0F0F0] text-[#0F0F0F] px-6 md:px-16 py-12"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                
                {/* Left Section: Animation */}
                 <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <Lottie 
                        animationData={ AskAI }
                        loop={true}
                    />
                </motion.div>


                {/* Right Section: Text */}
                 <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold border-b-4 border-[#00E0A1] inline-block pb-1">
                        Why Choose Us?
                    </h2>

                    <p className="text-lg text-gray-700">
                        Our AI-powered assistant gives you fast, science-backed nutrition and health guidance.
                        Whether you're trying to eat better, get fit, or simply live healthier — we’re here to guide you.
                    </p>

                    <p className="text-lg text-gray-700">
                        Personalized. Private. Always available.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;