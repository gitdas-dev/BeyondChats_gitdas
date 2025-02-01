import { MessageSquareCode, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("gradient-technology-futuristic-background_52683-75946.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <MessageSquareCode className="w-16 h-16 text-blue-400" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Transform Your Website with
          <span className="text-green-300 block mt-2">Intelligent Conversations</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Elevate customer engagement with AI-powered chatbots that understand, respond, and convert visitors into customers.
        </p>
        
        <button 
          onClick={() => navigate('/integration')}
          className="group bg-slate-900 hover:bg-slate-600 text-white text-lg font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto space-x-2"
        >
          <span>Start Integration</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default Home;