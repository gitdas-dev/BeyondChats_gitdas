import React from "react";
import { User, Mail, Lock } from "lucide-react";

interface RegistrationProps {
  onNext: () => void;
  userData: {
    name: string;
    email: string;
    password: string;
  };
  setUserData: (data: any) => void;
}

export default function Registration({
  onNext,
  userData,
  setUserData,
}: RegistrationProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="shadow-2xl p-8 transition-all duration-500 animate-fadeIn h-[450px] rounded-2xl bg-slate-700 mt-24 max-w-[600px] mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-white ">
        Create your account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
            <User className="w-4 h-4 mr-2" />
            Full Name
          </label>
          <input
            type="text"
            required
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
            <Mail className="w-4 h-4 mr-2" />
            Email Address
          </label>
          <input
            type="email"
            required
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
            <Lock className="w-4 h-4 mr-2" />
            Password
          </label>
          <input
            type="password"
            required
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="••••••••"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-3 px-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300 hover:bg-slate-500"
          >
            <span className="text-white font-semibold">Continue</span>
          </button>
        </div>
      </form>
    </div>
  );
}
