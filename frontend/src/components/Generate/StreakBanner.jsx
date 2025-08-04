import { useEffect, useState } from "react";
import axios from "axios";

const StreakBanner = ({ onStart }) => {
    const [ streakCount, setStreakCount ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(()=>{
        const fetchStreak = async ()=>{
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/meal/streak`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })

                setStreakCount(response.data.streak);
            } catch (err) {
                console.log('Failed to fetch streak', err);
            } finally{
                setLoading(false);
            }
        };

        fetchStreak();
    }, []);

    if(loading){
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="text-center mt-10 px-4">
            <h2 className="text-2xl font-semibold text-white mb-4">
                {streakCount > 0
                ? `You're on a ${streakCount}-day streak!`
                : "Start your first Health Check today!"}
            </h2>

            <button
                onClick={onStart}
                className="bg-[#00E0A1] hover:bg-[#00C896] text-black font-semibold py-2 px-6 rounded-2xl transition duration-300 shadow-md"
            >
                Start My Health Check
            </button>
        </div>
    );
};

export default StreakBanner;
