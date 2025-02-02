import { useState } from "react";
import {
  Code2,
  Mail,
  ExternalLink,
  MessageSquare,
  AlertTriangle,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import confetti from "canvas-confetti";

const DUMMY_SCRIPT = `<script>
  window.BEYONDCHATS_CONFIG = {
    apiKey: 'YOUR_API_KEY',
    theme: 'light'
  };
</script>
<script src="https://cdn.beyondchats.com/widget.js" async></script>`;

interface ChatbotIntegrationProps {
  onNext: () => void;
  onBack?: () => void;
}

type TestingStatus = "testing" | "success" | "failure" | null;
type IntegrationMethod = "code" | "email" | null;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ChatbotIntegration({
  onNext,
}: ChatbotIntegrationProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [integrationMethod, setIntegrationMethod] =
    useState<IntegrationMethod>(null);
  const [testingStatus, setTestingStatus] = useState<TestingStatus>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(DUMMY_SCRIPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTestIntegration = () => {
    setTestingStatus("testing");
    setTimeout(() => {
      // Simulate random success/failure
      const success = Math.random() > 0.3;
      setTestingStatus(success ? "success" : "failure");
      if (success) {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#4F46E5", "#10B981", "#3B82F6"],
        });
      }
    }, 3000);
  };

  const renderTestingScreen = () => {
    if (testingStatus === "testing") {
      return (
        <div className="text-center py-12 animate-scaleIn bg-black rounded-md pb-32 max-w-[600px] mx-auto h-[440px]">
          <Loader2 className="w-16 h-16 text-white mx-auto mb-6 animate-spin" />
          <h3 className="text-xl font-semibold text-white  mb-2">
            Testing Integration
          </h3>
          <p className="text-white ">
            Please wait while we verify your chatbot integration...
          </p>
        </div>
      );
    }

    if (testingStatus === "success") {
      return (
        <div className="text-center py-8 animate-scaleIn bg-slate-700 rounded-md max-w-[600px] mx-auto h-[440px]">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold text-white  mb-4">
            Integration Successful!
          </h3>
          <p className="text-white mb-8">
            Your chatbot is now live and ready to help your customers.
          </p>

          <div className="grid gap-4 max-w-sm mx-auto pb-14">
            <button
              onClick={onNext}
              className="flex items-center justify-center space-x-2 bg-slate-800 text-white py-3 px-6 rounded-md hover:bg-slate-500 transition-all duration-300 hover-lift"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Go to Admin Panel</span>
            </button>

            <button className="flex items-center justify-center space-x-2 bg-white text-black border py-3 px-6 rounded-md hover:bg-indigo-50 transition-all duration-300 hover-lift">
              <MessageSquare className="w-5 h-5" />
              <span>Preview Chatbot</span>
            </button>
          </div>
        </div>
      );
    }

    if (testingStatus === "failure") {
      return (
        <div className="text-center animate-scaleIn bg-slate-700 rounded-md max-w-[600px] mx-auto h-[440px] mb-2">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-white  mb-4">
            Integration Not Detected
          </h3>
          <p className="text-white  mb-8">
            We couldn't detect the chatbot on your website. Please check:
          </p>

          <div className="bg-gray-400 rounded-lg p-6 mb-8 text-left max-w-sm mx-auto">
            <ul className="space-y-3 text-sm text-white ">
              <li className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                  <span className="text-red-500 text-xs">1</span>
                </div>
                <span className="text-black">
                  The code is placed in the{" "}
                  <code className="px-1 rounded">&lt;head&gt;</code> section
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                  <span className="text-red-500 text-xs">2</span>
                </div>
                <span className="text-black">Your API key is correct</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                  <span className="text-red-500 text-xs">3</span>
                </div>
                <span className="text-black">
                  The website is publicly accessible
                </span>
              </li>
            </ul>
          </div>

          <div className="grid gap-3 max-w-sm mx-auto">
            <button
              onClick={() => setTestingStatus(null)}
              className="flex items-center justify-center space-x-2 bg-slate-800 text-white py-3 px-6 rounded-md hover:bg-slate-500 hover:text-black transition-all duration-300 hover-lift"
            >
              <Code2 className="w-5 h-5" />
              <span>Review Integration Steps</span>
            </button>

            <button
              onClick={handleTestIntegration}
              className="flex items-center justify-center space-x-2 bg-green-500 text-black  border border-black py-3 px-6 rounded-md hover:bg-indigo-50 transition-all duration-300 hover-lift"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="text-white">Test Again</span>
            </button>
          </div>
        </div>
      );
    }

    return null;
  };

  if (testingStatus) {
    return (
      <div className="rounded-lg shadow-xl p-8 transition-all duration-500 animate-fadeIn bg-slate-800 pb-16 max-w-[600px] mx-auto h-[500px]">
        {renderTestingScreen()}
      </div>
    );
  }

  return (
    <div className="shadow-xl p-8 transition-all duration-500 animate-fadeIn bg-slate-700 rounded-md max-w-[600px] mx-auto h-[500px]">
      <h2 className="text-2xl font-bold text-white mb-10">
        Chatbot Integration
      </h2>

      <div className="space-y-6">
        {!integrationMethod ? (
          <>
            <button
              onClick={() => setShowPreview(true)}
              className="w-full flex items-center justify-center space-x-2 bg-gray-800 text-white py-3 px-4 rounded-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 hover-lift"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Test Chatbot</span>
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-800 text-white">
                  Integration Options
                </span>
              </div>
            </div>

            <button
              onClick={() => setIntegrationMethod("code")}
              className="w-full flex items-center justify-center space-x-2 bg-slate-800 text-white  py-3 px-4 rounded-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 hover-lift"
            >
              <Code2 className="w-5 h-5" />
              <span>Copy Integration Code</span>
            </button>

            <button
              onClick={() => setIntegrationMethod("email")}
              className="w-full flex items-center justify-center space-x-2 bg-gray-800 text-white  py-3 px-4 rounded-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 hover-lift"
            >
              <Mail className="w-5 h-5" />
              <span>Email Instructions to Developer</span>
            </button>
          </>
        ) : integrationMethod === "code" ? (
          <>
            <div className="bg-gray-50 rounded-lg p-">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-white ">
                  Add to your website's &lt;head&gt; tag
                </h3>
                <button
                  onClick={handleCopyCode}
                  className="text-black hover:text-indigo-700 text-sm font-medium transition-colors duration-300 pr-2 pt-2"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto">
                <code>{DUMMY_SCRIPT}</code>
              </pre>
            </div>

            <button
              onClick={handleTestIntegration}
              className="w-full bg-green-400 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 hover-lift animate-pulse-shadow"
            >
              Test Integration
            </button>
          </>
        ) : (
          <div className="text-center animate-scaleIn max-w-[600px] mx-auto">
            <Mail className="w-16 h-16 text-white  mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white  mb-2">
              Instructions Sent!
            </h3>
            <p className="text-gray-500 mb-6">
              We've emailed the integration instructions to your developer.
            </p>
            <button
              onClick={handleTestIntegration}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 hover-lift"
            >
              Test Integration
            </button>
          </div>
        )}
      </div>

      {showPreview && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 animate-fadeIn mt-11 w-full max-w-[600px] mx-auto">
          <div className="bg-pink-300 w-full max-w-2xl rounded-lg shadow-xl">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-medium">Preview Mode</h3>
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
              >
                ×
              </button>
            </div>
            <div className="p-4 h-96 bg-gray-50 relative">
              <div className="absolute bottom-4 right-4 w-72 bg-white rounded-lg shadow-lg border animate-slideIn">
                <div className="p-4 border-b bg-gree">
                  <h4 className="font-medium">Chat with us</h4>
                </div>
                <div className="p-4 h-64 bg-gray-50">
                  <div className="text-center text-white  mt-20">
                    This is a preview of your chatbot
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
