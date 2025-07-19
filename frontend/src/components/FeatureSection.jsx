import { motion } from "framer-motion";
import { FaHeartbeat, FaAppleAlt, FaRobot, FaShieldAlt } from "react-icons/fa";

const features = [
    {
        icon: <FaRobot size={32} className="text-[#00E0A1]" />,
        title: "AI-Powered Advice",
        desc: "Get personalized answers instantly with our intelligent assistant.",
    },
    {
        icon: <FaAppleAlt size={32} className="text-[#00E0A1]" />,
        title: "Smart Nutrition Tips",
        desc: "Science-based guidance tailored to your health goals.",
    },
    {
        icon: <FaShieldAlt size={32} className="text-[#00E0A1]" />,
        title: "Private & Secure",
        desc: "Your data stays confidential — always encrypted and secure.",
    },
    {
        icon: <FaHeartbeat size={32} className="text-[#00E0A1]" />,
        title: "Fitness Integration",
        desc: "Sync with your fitness goals for optimized suggestions.",
    },
];

const FeatureSection = () =>{
    return (
        <section className="bg-[#0F0F0F] text-[#F0F0F0] px-6 md:px-16 py-16">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Core Features
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    { features.map((feature, index)=>(
                        <motion.div
                             key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg space-y-4 hover:scale-105 tramsition-transform duration-300"
                        >   
                            <div>{ feature.icon }</div>
                            <h3 className="text-xl font-semibold">{ feature.title }</h3>
                            <p className="text-gray-400">{ feature.desc }</p>
                        </motion.div>
                    )) }
                </div>
            </div>
        </section>
    )
};

export default FeatureSection;