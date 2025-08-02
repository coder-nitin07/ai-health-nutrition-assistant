import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Summary = () => {
  const [isThinking, setIsThinking] = useState(true);
  const [finalReport, setFinalReport] = useState(null);
  const [userResponses, setUserResponses] = useState(null);

useEffect(() => {
  const responses = JSON.parse(localStorage.getItem("userResponses"));
  setUserResponses(responses);

  const report = localStorage.getItem("finalReport");
  const inProgress = localStorage.getItem("aiInProgress");

  if (report) {
    setFinalReport(JSON.parse(report));
    setIsThinking(false);
    return;
  }

  if (!inProgress) {
    setIsThinking(false); // No AI in progress, and no report either
    return;
  }

  // If AI is still running, poll for updates
  const interval = setInterval(() => {
    const updatedReport = localStorage.getItem("finalReport");

    if (updatedReport) {
      setFinalReport(JSON.parse(updatedReport));
      setIsThinking(false);
      clearInterval(interval);
    }
  }, 500);

  return () => clearInterval(interval);
}, []);
  if (!userResponses) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 text-lg">
        No summary available. Please complete the assessment.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] p-6 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#00E0A1] mb-10">Health Check Summary</h2>

      <div className="flex flex-col space-y-8 max-w-6xl w-full">
        {/* User Response */}
        <div className="self-end w-full md:w-1/2">
          <div className="p-4 bg-[#121212] rounded-2xl shadow-lg text-[#F0F0F0] border border-[#2C2C2C]">
            <h2 className="text-2xl font-bold mb-4 text-[#00C896]">Your Responses</h2>

            {/* Meals */}
            {userResponses.meals?.length > 0 && (
              <div className="mb-6">
                <p className="text-[#B0B0B0] font-semibold mb-2">Meal Log:</p>
                <ul className="space-y-2 pl-5 list-disc">
                  {userResponses.meals.map((item, index) => (
                    <li key={index} className="text-[#F0F0F0]">
                      <span className="text-[#00E0A1] font-medium">
                        {item.timesOfDay?.trim() ? item.timesOfDay : "Time Not Specified"}
                      </span>{" "}
                      {item.items}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Other Responses */}
            <div className="space-y-2 text-sm">
              {userResponses.waterIntake && (
                <p><span className="text-[#B0B0B0]">Water Intake:</span> {userResponses.waterIntake}</p>
              )}
              {userResponses.caffeine && (
                <p><span className="text-[#B0B0B0]">Caffeine:</span> {userResponses.caffeine}</p>
              )}
              {userResponses.alcohol && (
                <p><span className="text-[#B0B0B0]">Alcohol:</span> {userResponses.alcohol}</p>
              )}
              {userResponses.sleepHours && (
                <p><span className="text-[#B0B0B0]">Sleep Hours:</span> {userResponses.sleepHours}</p>
              )}
              {userResponses.activityLevel && (
                <p><span className="text-[#B0B0B0]">Activity Level:</span> {userResponses.activityLevel}</p>
              )}
            </div>
          </div>
        </div>

        {/* AI Response */}
        <div className="self-start w-full">
          <div className="bg-[#1a1a1a] p-6 rounded-xl shadow border border-[#00E0A1]">
            <h3 className="text-xl font-semibold text-[#00E0A1] mb-4">AI Suggestions</h3>

            {isThinking ? (
              <p className="text-gray-400 animate-pulse">Analyzing your input... Please wait.</p>
            ) : finalReport ? (
              <>
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="mb-4">{children}</p>,
                  }}
                >
                  {finalReport.analysis}
                </ReactMarkdown>
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="mb-4 text-[#00E0A1]">{children}</p>,
                  }}
                >
                  {finalReport.suggestions}
                </ReactMarkdown>
              </>
            ) : (
              <p className="text-gray-400">No AI summary found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;