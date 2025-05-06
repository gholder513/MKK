import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { ZodiacSign } from '../types';
import { X } from 'lucide-react';

const FriendGuessForm: React.FC = () => {
  const { addFriendGuess, setShowFriendGuessPopup } = useGame();
  const [name, setName] = useState('');
  const [sign, setSign] = useState<ZodiacSign | null>(null);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name && sign) {
      addFriendGuess(name, sign);
      setName('');
      setSign(null);
      setShowFriendGuessPopup(false);
    }
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md border border-purple-800 relative">
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={() => setShowFriendGuessPopup(false)}
        >
          <X size={24} />
        </button>
        
        <h3 className="text-2xl font-medium text-white mb-4">
          Friend's Guess
        </h3>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Friend's Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:outline-none"
              placeholder="Enter name"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">
              What's their guess for your zodiac sign?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
                'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
              ].map((zodiacSign) => (
                <button
                  key={zodiacSign}
                  type="button"
                  onClick={() => setSign(zodiacSign as ZodiacSign)}
                  className={`p-2 rounded-lg text-sm transition-colors ${
                    sign === zodiacSign
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {zodiacSign}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowFriendGuessPopup(false)}
              className="px-4 py-2 rounded-lg bg-gray-700 text-white mr-3 hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!name || !sign}
              className={`px-4 py-2 rounded-lg font-medium ${
                name && sign
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white hover:from-purple-700 hover:to-indigo-800'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
            >
              Submit Guess
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FriendGuessForm;