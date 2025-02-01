import { useState } from 'react';
import { Building2, Globe, FileText } from 'lucide-react';

type OrganizationSetupType = {
  onNext: any,
  onBack: any,
  userData: any,
  setUserData: any,
}
export default function OrganizationSetup({ onNext, onBack, userData, setUserData } : OrganizationSetupType) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate fetching meta description
    setTimeout(() => {
      setUserData({
        ...userData,
        description: userData.description || 'Automatically fetched description: A leading provider of innovative solutions.'
      });
      setLoading(false);
      onNext();
    }, 1500);
  };

  return (
    <div className="shadow-2xl p-8 transition-all duration-500 animate-fadeIn rounded-2xl bg-slate-700">
      <h2 className="text-2xl font-bold text-white mb-6">Organization Setup</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
            <Building2 className="w-4 h-4 mr-2" />
            Company Name
          </label>
          <input
            type="text"
            required
            value={userData.company}
            onChange={(e) => setUserData({ ...userData, company: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Acme Inc."
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
            <Globe className="w-4 h-4 mr-2" />
            Company Website
          </label>
          <input
            type="url"
            required
            value={userData.website}
            onChange={(e) => setUserData({ ...userData, website: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="https://example.com"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
            <FileText className="w-4 h-4 mr-2" />
            Company Description
          </label>
          <textarea
            value={userData.description}
            onChange={(e) => setUserData({ ...userData, description: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Tell us about your company..."
            rows={4}
          />
        </div>

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 transition-colors duration-300"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-500 transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Continue'}
          </button>
        </div>
      </form>
    </div>
  );
}