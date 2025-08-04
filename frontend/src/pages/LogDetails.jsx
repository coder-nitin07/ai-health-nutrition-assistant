import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LogDetails = () => {
  const { id } = useParams();
  const [log, setLog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchLogDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`http://localhost:3000/meal/getLogById/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLog(res.data.log);
    } catch (err) {
      console.error('Failed to fetch log details', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogDetails();
  }, [id]);

  if (loading) return <p className="text-center mt-8 text-white">Loading...</p>;
  if (!log) return <p className="text-center mt-8 text-white">Log not found.</p>;

  return (
    <div className="min-h-screen p-6 bg-[#0F0F0F] text-[#F0F0F0] mt-[60px]">
      <motion.div
        className="max-w-3xl mx-auto bg-[#1a1a1a] p-6 rounded-xl shadow-md border border-[#222]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold text-center mb-8">Log Details</h2>
        <p className="text-sm text-gray-400 mb-4">
          Date: {new Date(log.createdAt).toLocaleString()}
        </p>

        <div className="mb-4">
          <h3 className="font-semibold text-lg">Meals</h3>
          <ul className="list-disc list-inside ml-2">
            {log.meals.map((meal, idx) => (
              <li key={idx}>
                <span className="capitalize">{meal.timesOfDay}</span>: {meal.items.join(', ')}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-6 text-sm">
          <p><strong>Water Intake:</strong> {log.waterIntake}</p>
          <p><strong>Caffeine:</strong> {log.caffeine}</p>
          <p><strong>Alcohol:</strong> {log.alcohol}</p>
          <p><strong>Sleep Hours:</strong> {log.sleepHours}</p>
          <p><strong>Activity Level:</strong> {log.activityLevel}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mt-5 mb-2 text-[#00c896]">AI Summary</h3>
          {log.analysis ? (
            <>
              <p className="mb-2"><strong className='text-[#739189] block mt-5'>Health Analysis:</strong> {log.analysis}</p>
              <p><strong className='text-[#739189] block mt-5'>Suggestions:</strong> {log.suggestions || 'No suggestions available.'}</p>
            </>
          ) : (
            <p>No AI summary available.</p>
          )}
        </div>
      </motion.div>

      <div className="mt-10 text-center">
        <button
          onClick={() => navigate('/home')}
          className="bg-[#00C896] hover:bg-[#00E0A1] text-black px-6 py-2 rounded-xl font-semibold transition"
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default LogDetails;