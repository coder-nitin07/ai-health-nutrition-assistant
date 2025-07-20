import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Summary = () => {
    const [finalReport, setFinalReport] = useState(null);

    useEffect(() => {
        const storedReport = localStorage.getItem("finalReport");
        if (storedReport) {
            setFinalReport(JSON.parse(storedReport));
        }
    }, []);

    return (
        <div className="p-6 max-w-3xl mx-auto mt-10 bg-[#1a1a1a] text-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-[#00E0A1] mb-4">Your AI Health Summary</h2>
            {finalReport ? (
                <div className="leading-relaxed whitespace-pre-line">
                    <ReactMarkdown
    components={{
        p: ({ children }) => <p className="mb-6 text-white">{children}</p>,
    }}
>
    {finalReport.analysis}
</ReactMarkdown>

<ReactMarkdown
    components={{
        p: ({ children }) => <p className="text-[#00E0A1]">{children}</p>,
    }}
>
    {finalReport.suggestions}
</ReactMarkdown>

                </div>
            ) : (
                <p className="text-gray-400">No summary available. Please complete the assessment first.</p>
            )}
        </div>
    );
};

export default Summary;