import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import heroAnimation from '../assets/lottie/Running on Treadmill.json';

const HeroSection = () => {
    const navigate = useNavigate();
    const [hasLoggedToday, setHasLoggedToday] = useState(false);

    useEffect(() => {
        const checkTodayLog = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/meal/logs/today`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setHasLoggedToday(res.data.hasLogged);
            } catch (err) {
                console.error("Failed to check today's log:", err);
            }
        };

        checkTodayLog();
    }, []);

    return (
        <section
            id="hero"
            className="bg-[#0F0F0F] text-[#F0F0F0] min-h-screen flex flex-col md:flex-row items-center mt-12 justify-between px-6 md:px-16 py-12"
        >
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="md:w-1/2 space-y-6"
            >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-[0_0_10px_#00E0A1]">
                    Your AI Health & Nutrition Companion
                </h1>

               {!hasLoggedToday && (
  <p className="text-[#B0B0B0] text-lg">
    Ask any question. Get personalized, accurate answers tailored to your health goals.<br />
    <span className="text-[#00C896] font-medium">
      You can only use the app once a day, so use wisely.
    </span>
  </p>
)}
                {hasLoggedToday ? (
                    <p className="text-[#00E0A1] font-semibold text-lg">
                        Great, you logged today! Come back tomorrow.
                    </p>
                ) : (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.12, y: -4 }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 18,
                            delay: 0.4
                        }}
                        onClick={() => navigate('/generate')}
                        className="bg-[#00E0A1] hover:bg-[#00C896] text-black font-semibold px-6 py-3 rounded-full"
                    >
                        Get Started
                    </motion.button>
                )}
            </motion.div>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="mt-10 md:mt-0 md:w-1/2 w-full max-w-[500px] md:max-w-md"
            >
                <Lottie animationData={heroAnimation} loop={true} />
            </motion.div>
        </section>
    );
};

export default HeroSection;