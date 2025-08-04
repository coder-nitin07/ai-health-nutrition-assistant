import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchLogs = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/meal/getAllLogs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLogs(res.data.logs); // already sorted & trimmed
    } catch (err) {
      console.error("Failed to fetch logs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="min-h-screen p-4 bg-[#0F0F0F] text-[#F0F0F0] mt-[60px]">
      <h2 className="text-2xl font-bold mb-6">Your Log History</h2>

      {loading ? (
        <p>Loading...</p>
      ) : logs.length === 0 ? (
        <p>No logs found.</p>
      ) : (
        <div className="space-y-4">
          {logs.map((log, index) => (
  <Link key={log._id} to={`/logs/${log._id}`}>
    <motion.div
      className="flex justify-between my-6 items-center bg-[#1a1a1a] px-4 py-3 rounded-xl cursor-pointer hover:bg-[#1f1f1f] border border-[#222]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <span>{new Date(log.createdAt).toLocaleDateString()}</span>
      <ArrowRight className="w-5 h-5 text-mint-500" />
    </motion.div>
  </Link>
))}

        </div>
      )}

      <div className="mt-10">
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

export default Logs;