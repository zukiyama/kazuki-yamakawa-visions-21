import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const TapeDeckPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 shadow-2xl">
      {/* Tape Deck Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-mono text-gray-300 tracking-wider">MUSIC PLAYER</h3>
        <div className="w-full h-px bg-gray-600 mt-2"></div>
      </div>

      {/* Cassette Display */}
      <div className="bg-black rounded-sm p-4 mb-6 border border-gray-600">
        <div className="flex justify-center items-center space-x-8">
          {/* Left Reel */}
          <div className="w-16 h-16 bg-gray-700 rounded-full border-4 border-gray-600 flex items-center justify-center">
            <div className={`w-8 h-8 bg-gray-800 rounded-full ${isPlaying ? 'animate-spin' : ''}`}>
              <div className="w-full h-full rounded-full border-2 border-gray-500"></div>
            </div>
          </div>
          
          {/* Tape Label */}
          <div className="bg-white px-4 py-2 rounded-sm">
            <p className="text-black text-sm font-mono">Coming Soon</p>
          </div>
          
          {/* Right Reel */}
          <div className="w-16 h-16 bg-gray-700 rounded-full border-4 border-gray-600 flex items-center justify-center">
            <div className={`w-8 h-8 bg-gray-800 rounded-full ${isPlaying ? 'animate-spin' : ''}`}>
              <div className="w-full h-full rounded-full border-2 border-gray-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center items-center space-x-4 mb-4">
        <button className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center border-2 border-gray-500 transition-colors">
          <SkipBack size={20} className="text-gray-300" />
        </button>
        
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-16 h-16 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center border-2 border-red-400 transition-colors shadow-lg"
        >
          {isPlaying ? (
            <Pause size={24} className="text-white" />
          ) : (
            <Play size={24} className="text-white ml-1" />
          )}
        </button>
        
        <button className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center border-2 border-gray-500 transition-colors">
          <SkipForward size={20} className="text-gray-300" />
        </button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center justify-center space-x-3">
        <Volume2 size={16} className="text-gray-400" />
        <div className="w-32 h-2 bg-gray-700 rounded-full">
          <div className="w-1/2 h-full bg-red-500 rounded-full"></div>
        </div>
      </div>

      {/* Status Lights */}
      <div className="flex justify-center space-x-4 mt-4">
        <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-400' : 'bg-gray-600'}`}></div>
        <div className="w-3 h-3 rounded-full bg-gray-600"></div>
        <div className="w-3 h-3 rounded-full bg-gray-600"></div>
      </div>
    </div>
  );
};

export default TapeDeckPlayer;