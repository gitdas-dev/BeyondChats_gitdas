import { CheckCircle2, ExternalLink, MessageSquare } from "lucide-react";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function SuccessScreen() {
  return (
    <div className="rounded-lg shadow-xl p-8 text-center transition-all duration-500 animate-scaleIn hover-lift bg-slate-700">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
        <CheckCircle2 className="w-8 h-8 text-green-500" />
      </div>

      <h2 className="text-4xl font-bold text-green-400 mb-4 animate-slideIn">
        Congratulations! 🎉
      </h2>
      <p
        className="text-white mb-8 animate-slideIn"
        style={{ animationDelay: "100ms" }}
      >
        Your chatbot is now successfully integrated and ready to help your
        customers!
      </p>

      <div className="grid gap-4 mb-8">
        <button className="flex items-center justify-center space-x-2 bg-slate-600 text-white py-3 px-4 rounded-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 hover-lift">
          <ExternalLink className="w-5 h-5" />
          <span>Explore Admin Panel</span>
        </button>

        <button className="flex items-center justify-center space-x-2 bg-white text-black border py-3 px-4 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 hover-lift">
          <MessageSquare className="w-5 h-5" />
          <span>Start Talking to Your Chatbot</span>
        </button>
      </div>

      <div
        className="border-t pt-8 animate-fadeIn"
        style={{ animationDelay: "300ms" }}
      >
        <h3 className="text-sm font-medium text-gray-700 mb-4">
          Share your success
        </h3>
        <div className="flex justify-center space-x-4">
          <button
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-300 hover-scale animate-fadeIn"
            style={{ animationDelay: `300ms` }}
          >
            <Facebook className="w-5 h-5" />
          </button>
          <button
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-300 hover-scale animate-fadeIn"
            style={{ animationDelay: `300ms` }}
          >
            <Twitter className="w-5 h-5" />
          </button>
          <button
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all duration-300 hover-scale animate-fadeIn"
            style={{ animationDelay: `300ms` }}
          >
            <Instagram className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
