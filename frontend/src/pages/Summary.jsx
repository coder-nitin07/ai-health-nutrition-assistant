import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [ feedBack, setFeedBack ] = useState('');
  const formData = location.state?.formData;

  useEffect(()=>{
    if(!formData) return navigate('/generate');

    const fetchAIResponse = async ()=>{
        try {
          const res = await axios.post("http://localhost:3000/ai/generateFullHealthReport", formData);
          setFeedBack(res.data.summary);
        } catch (err) {
          setFeedBack("⚠️ Failed to generate AI feedback. Please try again.", err);
        }
    };

    fetchAIResponse();
  }, [ formData ]);

  if(!formData) return null;

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F0F0F0] px-6 py-10">
        <h1 className="text-3xl font-semibold mb-6">Your Health Summary</h1>
        <div className="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg">
          { feedBack ? (
            <p className="whitespace-pre-line text-lg">{ feedBack }</p>
          ) : (
            <p className="animate-pulse">Generating your personalized health analysis...</p>
          )}
        </div>
    </div>
  );
}

export default Summary;