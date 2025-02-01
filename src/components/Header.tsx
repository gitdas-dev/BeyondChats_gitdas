import { Bot } from 'lucide-react';
const Header = () => {
  return (
    <header className="shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-slate-950">
          <div className="flex items-center space-x-2 bg-slate-950">
            <Bot className="w-8 h-8 text-white animate-bounce" />
            <span className="text-2xl font-bold text-red-100 hover-scale">BeyondChats</span>
          </div>
        </div>
      </header>
  )
}

export default Header