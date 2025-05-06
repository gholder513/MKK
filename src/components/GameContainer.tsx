import React from 'react';
import { useGame } from '../contexts/GameContext';
import MKKQuestion from './MKKQuestion';
import ResultsDisplay from './ResultsDisplay';
import SummaryDisplay from './SummaryDisplay';
import StatsDisplay from './StatsDisplay';

const GameContainer: React.FC = () => {
  const { state, makeChoice } = useGame();
  
  if (state.gameComplete) {
    return (
      <div className="flex flex-col">
        <ResultsDisplay />
        <SummaryDisplay />
        <StatsDisplay />
      </div>
    );
  }
  
  // Add safety check to ensure we have questions and current index is valid
  if (!state.questions?.length || state.currentQuestionIndex >= state.questions.length) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading questions...</p>
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center">
      <MKKQuestion 
        question={state.questions[state.currentQuestionIndex]}
        onSubmit={makeChoice}
        questionNumber={state.currentQuestionIndex + 1}
        totalQuestions={state.questions.length}
      />
    </div>
  );
};

export default GameContainer;