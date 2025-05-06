import React, { useState } from 'react';
import { getAccuracyStats } from '../utils/localStorage';
import { ZodiacSign } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const StatsDisplay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const stats = getAccuracyStats();
  
  // Toggle stats panel
  const toggleStats = () => setIsOpen(!isOpen);
  
  // Sort zodiac signs by accuracy (highest first)
  const sortedSigns = Object.entries(stats.bySign)
    .filter(([_, data]) => data.total > 0)
    .sort(([_, a], [__, b]) => b.accuracy - a.accuracy)
    .map(([sign]) => sign as ZodiacSign);
  
  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <button
        onClick={toggleStats}
        className="w-full flex items-center justify-between bg-gray-800 hover:bg-gray-700 p-4 rounded-lg text-white transition-colors"
      >
        <span className="font-medium">Prediction Stats</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isOpen && (
        <div className="mt-4 bg-gray-900 rounded-lg p-4 border border-gray-800">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-white mb-3">Overall Accuracy</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Total Predictions</span>
              <span className="text-white font-medium">{stats.total}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Correct Predictions</span>
              <span className="text-green-400 font-medium">{stats.correct}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Accuracy Rate</span>
              <span className="text-yellow-400 font-medium">{stats.accuracy.toFixed(1)}%</span>
            </div>
          </div>
          
          {sortedSigns.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-white mb-3">Accuracy by Sign</h3>
              <div className="space-y-2">
                {sortedSigns.map(sign => {
                  const signStats = stats.bySign[sign];
                  return (
                    <div key={sign} className="flex justify-between items-center p-2 bg-gray-800 rounded">
                      <span className="text-white">{sign}</span>
                      <div className="flex items-center">
                        <span className="text-gray-400 text-sm mr-2">
                          {signStats.correct} / {signStats.total}
                        </span>
                        <span className="text-yellow-400 font-medium">
                          {signStats.accuracy.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {stats.total === 0 && (
            <p className="text-gray-400 text-center py-4">
              No prediction data yet. Play the game to see your stats!
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default StatsDisplay;