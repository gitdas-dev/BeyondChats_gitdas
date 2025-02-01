import React, { useState } from 'react';
import { Building2, Globe, User, Code2, CheckCircle2 } from 'lucide-react';
import Registration from './components/Registration';
import OrganizationSetup from './components/OrganizationSetup';
import WebsiteScanning from './components/WebsiteScanning';
import ChatbotIntegration from './components/ChatbotIntegration';
import SuccessScreen from './components/SuccessScreen';
import Header from './components/Header';

function App() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState('forward');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    website: '',
    description: ''
  });

  const nextStep = () => {
    setDirection('forward');
    setStep(step + 1);
  };

  const prevStep = () => {
    setDirection('backward');
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-[url(/gradient-technology-futuristic-background_52683-75946.jpg)] ">

      <Header />
      {/* Progress Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between mb-8 relative">
          {/* Progress Lines */}
          <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200">
            <div 
              className="h-full bg-green-400 transition-all duration-500 ease-in-out"
              style={{ 
                width: `${(step - 1) / 4 * 100}%`,
                transition: 'width 0.5s ease-in-out'
              }}
            />
          </div>

          {/* Steps */}
          <Step 
            icon={<User />} 
            text="Registration" 
            active={step >= 1} 
            completed={step > 1} 
            first={true}
          />
          <Step 
            icon={<Building2 />} 
            text="Organization" 
            active={step >= 2} 
            completed={step > 2}
          />
          <Step 
            icon={<Globe />} 
            text="Website Scan" 
            active={step >= 3} 
            completed={step > 3}
          />
          <Step 
            icon={<Code2 />} 
            text="Integration" 
            active={step >= 4} 
            completed={step > 4}
            last={true}
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto mt-28 h-full">
          <div className={`transition-all duration-500 transform ${
            direction === 'forward' ? 'translate-x-0' : '-translate-x-0'
          }`}>
            {step === 1 && <Registration onNext={nextStep} userData={userData} setUserData={setUserData} />}
            {step === 2 && <OrganizationSetup onNext={nextStep} onBack={prevStep} userData={userData} setUserData={setUserData} />}
            {step === 3 && <WebsiteScanning onNext={nextStep} onBack={prevStep} website={userData.website} />}
            {step === 4 && <ChatbotIntegration onNext={nextStep} onBack={prevStep} />}
            {step === 5 && <SuccessScreen />}
          </div>
        </div>
      </div>
    </div>
  );
}

interface stepInput {
  icon : any,
  text: string,
  active: boolean,
  completed: boolean,
  first?: boolean,
  last?: boolean
}
function Step({ icon, text, active, completed, first = false, last = false } : stepInput) {
  return (
    <div className={`flex flex-col items-center group relative z-10 ${
      first ? 'pl-0' : last ? 'pr-0' : ''
    }`}>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
        completed ? 'bg-[#7FFFD4] text-black scale-110' :
        active ? 'bg-[#00FFFF] text-white animate-pulse-shadow scale-110' : 'bg-gray-200 text-gray-500'
      } hover-scale`}>
        {completed ? <CheckCircle2 size={25} /> : React.cloneElement(icon, { size: 20 })}
      </div>
      <span className={`mt-2 text-sm transition-all duration-300 ${
        completed ? 'text-[#7FFFD4] font-medium' :
        active ? 'text-[#00FFFF] font-medium' : 'text-gray-500'
      } group-hover:scale-105`}>
        {text}
      </span>
    </div>
  );
}

export default App;