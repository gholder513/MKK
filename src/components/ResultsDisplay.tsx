import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { getZodiacProfile } from '../data/zodiacProfiles';
import { ZodiacSign } from '../types';
import FriendGuessForm from './FriendGuessForm';
import { Share2, RefreshCw } from 'lucide-react';

const ResultsDisplay: React.FC = () => {
  const { state, submitActualSign, resetGame, setShowFriendGuessPopup, showFriendGuessPopup } = useGame();
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
  
  if (!state.prediction) return null;
  
  const prediction = state.prediction;
  const predictedProfile = getZodiacProfile(prediction.sign);
  
  // Handle submitting the actual zodiac sign
  const handleSubmitSign = () => {
    if (selectedSign) {
      submitActualSign(selectedSign);
    }
  };
  
  // Toggle friend guess popup
  const toggleFriendGuess = () => {
    setShowFriendGuessPopup(!showFriendGuessPopup);
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="bg-gray-900 rounded-lg p-6 shadow-xl border border-purple-800">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-white mb-2">
            Your Zodiac Prediction
          </h2>
          <p className="text-purple-300">Based on your Kiss, Marry, Kill choices</p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-700 to-indigo-900 text-6xl">
              {predictedProfile.emoji}
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-bold text-white mb-1">{prediction.sign}</h3>
              <p className="text-yellow-400 mb-2">{predictedProfile.dates}</p>
              <div className="flex items-center justify-center md:justify-start mb-2">
                <div className="px-3 py-1 rounded-full bg-purple-900 text-white text-sm">
                  {predictedProfile.element} Sign
                </div>
                <div className="ml-2 px-3 py-1 rounded-full bg-yellow-900 text-white text-sm">
                  {prediction.confidence}% Confidence
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4 mt-4">
            <h4 className="text-white font-medium mb-2">What This Means:</h4>
            <p className="text-gray-300 mb-4">{predictedProfile.description}</p>
            
            <h4 className="text-white font-medium mb-2">Key Traits:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {predictedProfile.traits.map((trait, index) => (
                <span key={index} className="px-2 py-1 rounded-full bg-purple-800 text-white text-xs">
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-white mb-4">How We Made This Prediction:</h3>
          <div className="space-y-3">
            {prediction.reasoning.map((reason, index) => (
              <div key={index} className="bg-gray-800 rounded p-3">
                <p className="text-gray-300">{reason}</p>
              </div>
            ))}
          </div>
        </div>
        
        {!state.actualSign ? (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-white mb-4">What's Your Actual Zodiac Sign?</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
                  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
                ].map((sign) => (
                  <button
                    key={sign}
                    onClick={() => setSelectedSign(sign as ZodiacSign)}
                    className={`p-2 rounded-lg text-sm transition-colors ${
                      selectedSign === sign
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {sign}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={toggleFriendGuess}
                className="px-4 py-2 rounded-lg bg-indigo-700 text-white font-medium flex items-center justify-center hover:bg-indigo-800 transition-colors"
              >
                <Share2 size={18} className="mr-2" />
                Let Friends Guess
              </button>
              
              <button
                onClick={handleSubmitSign}
                disabled={!selectedSign}
                className={`px-4 py-2 rounded-lg font-medium ${
                  selectedSign
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white hover:from-purple-700 hover:to-indigo-800'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                Submit My Zodiac Sign
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-medium text-white mb-2">
              Your Actual Sign: <span className="text-yellow-400">{state.actualSign}</span>
            </h3>
            <p className="text-gray-300 mb-4">
              {state.actualSign === prediction.sign
                ? "We got it right! Our cosmic intuition was on point."
                : "We were off this time, but we're learning from your response to improve our cosmic predictions."}
            </p>
            
            {state.friendGuesses.length > 0 && (
              <div className="mt-4 mb-8 bg-gray-800 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">Friend Guesses:</h4>
                <div className="space-y-2">
                  {state.friendGuesses.map((guess, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-300">{guess.name}</span>
                      <span className={`font-medium ${
                        guess.guess === state.actualSign ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {guess.guess}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <button
              onClick={resetGame}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-medium hover:from-purple-700 hover:to-indigo-800 transition-colors flex items-center justify-center mx-auto"
            >
              <RefreshCw size={18} className="mr-2" />
              Play Again
            </button>
          </div>
        )}
      </div>
      
      {showFriendGuessPopup && <FriendGuessForm />}
    </div>
  );
};

export default ResultsDisplay;