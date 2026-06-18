import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-orbitron font-bold italic text-blue-500 tracking-tighter">B<span className="text-red-500">O</span>T</span>
              <span className="text-3xl font-orbitron font-bold italic text-white tracking-tighter">LEAGUE</span>
              <div className="w-0.h-0 border-t-[8px] border-t-transparent border-l-[8px] border-l-yellow-400 border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium border-b-2 border-red-500">Events</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Programs</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Community</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Ranks</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 border border-gray-500 text-white rounded hover:bg-gray-800 transition-colors text-sm font-medium">
              LOGIN
            </button>
            <button className="px-6 py-2 bg-[#FF4D4D] text-white rounded hover:bg-red-600 transition-colors text-sm font-medium">
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
