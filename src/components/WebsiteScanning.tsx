import { useState, useEffect } from "react";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const dummyPages = [
  {
    url: "/home",
    status: "completed",
    chunks: [
      "Welcome to our company",
      "About our services",
      "Contact information",
    ],
  },
  {
    url: "/about",
    status: "completed",
    chunks: ["Our mission", "Company history", "Team members"],
  },
  { url: "/services", status: "scanning", chunks: [] },
  { url: "/contact", status: "pending", chunks: [] },
  { url: "/blog", status: "pending", chunks: [] },
];

type scanningInput = {
  onNext: () => void;
  onBack: () => void;
  website: string;
};
export default function WebsiteScanning({
  onNext,
  onBack,
  website,
}: scanningInput) {
  const [progress, setProgress] = useState(0);
  const [expandedPage, setExpandedPage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <CheckCircle2 className="w-5 h-5 text-green-500 animate-bounce" />
        );
      case "scanning":
        return <Clock className="w-5 h-5 text-yellow-500 animate-spin" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="rounded-lg shadow-xl p-8 transition-all duration-500 animate-fadeIn hover-lift bg-slate-700">
      <h2 className="text-2xl font-bold text-white mb-6">Website Scanning</h2>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-white">
            Overall Progress
          </span>
          <span className="text-sm font-medium text-white">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-blue-600 h-2 transition-all duration-300 progress-bar-animated"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {dummyPages.map((page, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 transition-all duration-300 hover-scale ${
              expandedPage === index ? "shadow-md" : ""
            }`}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() =>
                setExpandedPage(expandedPage === index ? null : index as any)
              }
            >
              <div className="flex items-center space-x-4">
                {getStatusIcon(page.status)}
                <span className="font-medium text-white">
                  {website}
                  {page.url}
                </span>
              </div>
              {page.status === "completed" && (
                <div
                  className={`transition-transform duration-300 ${
                    expandedPage === index ? "rotate-180" : ""
                  }`}
                >
                  {expandedPage === index ? <ChevronUp /> : <ChevronDown />}
                </div>
              )}
            </div>

            {expandedPage === index && page.status === "completed" && (
              <div className="mt-4 pl-9 animate-slideIn">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Scraped Content:
                </h4>
                <div className="space-y-2">
                  {page.chunks.map((chunk, i) => (
                    <div
                      key={i}
                      className="p-2 bg-gray-50 rounded text-sm transition-all duration-300 hover:bg-gray-100"
                      style={{
                        animationDelay: `${i * 100}ms`,
                        animation: "slideIn 0.3s ease-out forwards",
                      }}
                    >
                      {chunk}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 hover-lift"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="flex-1 bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 hover-lift animate-pulse-shadow"
        >
          Continue Setup
        </button>
      </div>
    </div>
  );
}
