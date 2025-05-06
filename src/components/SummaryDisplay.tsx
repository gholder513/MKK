import React from 'react';
import { useGame } from '../contexts/GameContext';

const SummaryDisplay: React.FC = () => {
  const { state } = useGame();
  
  if (!state.prediction) return null;
  
  return (
    <div className="w-full max-w-3xl mx-auto p-5 mb-8">
      <h3 className="text-xl font-medium text-white mb-4">Your Choices</h3>
      
      <div className="space-y-4">
        {state.choices.map((choice, index) => {
          const question = state.questions.find(q => q.id === choice.questionId);
          if (!question) return null;
          
          const communionOption = question.options.find(o => o.id === choice.communion);
          const marryOption = question.options.find(o => o.id === choice.marry);
          const killOption = question.options.find(o => o.id === choice.kill);
          
          if (!communionOption || !marryOption || !killOption) return null;
          
          return (
            <div key={index} className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">Question {index + 1}</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-purple-900 p-3 rounded">
                  <p className="text-purple-200 text-sm mb-1">Communion</p>
                  <p className="text-white">{communionOption.text}</p>
                </div>
                <div className="bg-yellow-900 p-3 rounded">
                  <p className="text-yellow-200 text-sm mb-1">Marry</p>
                  <p className="text-white">{marryOption.text}</p>
                </div>
                <div className="bg-red-900 p-3 rounded">
                  <p className="text-red-200 text-sm mb-1">Kill</p>
                  <p className="text-white">{killOption.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummaryDisplay;