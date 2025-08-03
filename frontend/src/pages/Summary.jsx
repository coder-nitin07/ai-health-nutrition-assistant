import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Summary = () => {
    const [finalReport, setFinalReport] = useState(null);
    const [userResponses, setUserResponses] = useState(null);

    useEffect(() => {
        const storedReport = localStorage.getItem("finalReport");
        const storedUserData = localStorage.getItem("userResponses");

        if (storedReport) {
            setFinalReport(JSON.parse(storedReport));
        }

        if (storedUserData) {
            setUserResponses(JSON.parse(storedUserData));
        }
    }, []);

    return (
   <div className="p-6 mt-[80px] max-w-5xl mx-auto mt-10 bg-[#1a1a1a] text-white rounded-2xl shadow-lg flex flex-col gap-6">
  
  {/* USER RESPONSES (Top Right, 50% Width) */}
  {userResponses ? (
    <div className="w-full flex justify-end">
      <div className="bg-[#111] text-white p-6 rounded-xl shadow-lg w-full sm:w-1/2">
        <h3 className="text-xl font-semibold mb-4 text-[#00E0A1]">Your Responses</h3>

        {/* Meals section */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-white">Meals:</h4>
          {Array.isArray(userResponses.meals) && userResponses.meals.map((meal, idx) => (
            <div key={idx} className="ml-4 mb-3">
              <span className="text-[#00E0A1] capitalize">{meal.timesOfDay}:</span>
              <ul className="list-disc list-inside text-sm text-gray-300 ml-2">
                {Array.isArray(meal.items)
                  ? meal.items.map((item, i) => <li key={i}>{item}</li>)
                  : <li>{meal.items}</li>}
              </ul>
            </div>
          ))}
        </div>

        {/* Other fields */}
        <p className="mb-2"><span className="text-[#00E0A1]">Water Intake:</span> {userResponses.waterIntake}</p>
        <p className="mb-2"><span className="text-[#00E0A1]">Caffeine:</span> {userResponses.caffeine}</p>
        <p className="mb-2"><span className="text-[#00E0A1]">Alcohol:</span> {userResponses.alcohol}</p>
        <p className="mb-2"><span className="text-[#00E0A1]">Sleep Hours:</span> {userResponses.sleepHours}</p>
        <p className="mb-2"><span className="text-[#00E0A1]">Activity Level:</span> {userResponses.activityLevel}</p>
      </div>
    </div>
  ) : (
    <div className="text-gray-400 w-full flex justify-end">
      <p className="sm:w-1/2">Loading user responses...</p>
    </div>
  )}

  {/* AI SUMMARY (Full Width) */}
  <div className="w-full">
    <h3 className="text-xl font-semibold text-[#00E0A1] mb-2">AI Summary</h3>
    {finalReport ? (
      <div className="leading-relaxed space-y-6 text-sm bg-[#111] p-6 rounded-xl shadow-lg">
        <div>
          <p className="text-[#00E0A1] font-medium mb-1">Analysis:</p>
          <ReactMarkdown>{finalReport.analysis}</ReactMarkdown>
        </div>
        <div>
          <p className="text-[#00E0A1] font-medium mb-1">Suggestions:</p>
          <ReactMarkdown>{finalReport.suggestions}</ReactMarkdown>
        </div>
      </div>
    ) : (
      <p className="text-gray-400">No summary available. Please complete the assessment first.</p>
    )}
  </div>
</div>



    );
};

export default Summary;