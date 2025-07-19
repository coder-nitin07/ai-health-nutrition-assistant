import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTASection = ()=>{
    const navigate = useNavigate();

    return (
        <section className="bg-gradient-to-r from-[#0F0F0F] to-[#111111] py-16 px-4 text-center text-white rounded-2xl">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Ready to take control of your health?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg mb-8 text-[#cccccc]"
                >
                     Log your meals, track your progress, and let AI guide you toward a healthier lifestyle.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/generate")}
                    className="bg-[#00E0A1] hover:bg-[#00C896] text-black font-semibold px-6 py-3 rounded-full shadow-lg"
                >
                    Log a Meal
                </motion.button>
            </div>
        </section>
    )
};

export default CTASection;