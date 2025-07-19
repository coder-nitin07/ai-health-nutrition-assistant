import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import streakAnimation from "../assets/lottie/Fire Streak Orange.json";

const StreakSection = ()=>{
    const [ streak, setStreak ] = useState(null);

    useEffect(()=>{
        const fetchStreak = async ()=>{
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/meal/streak', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log("API Response:", response);
                setStreak(response.data.streak);
            } catch (err) {
                console.log('Failed to fetch streak', err);
            }
        };

        fetchStreak();
    }, []);

    return(
        <section className="bg-[#114C36] text-white pt-6 pb-4 px-4 sm:px-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center md:text-left">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {
                            streak === 0 ?
                            "Start logging meals daily to build your healthy streak!" : 
                            `You're on a ${streak}-day streak! Keep it going!`
                        }
                    </motion.h2>
                </div>

                <div className="flex-1">
                    <Lottie 
                        animationData={streakAnimation} 
                        loop={true} 
                        className="max-w-[200px] w-full mx-auto" 
                    />
                </div>
            </div>
        </section>
    )
};

export default StreakSection;