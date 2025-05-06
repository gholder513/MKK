import React, { createContext, useContext, useState, useEffect } from 'react';
import { MKKChoice, MKKQuestion, GameContextType, GameState, ZodiacPrediction, ZodiacSign } from '../types';
import { getRandomQuestions } from '../data/questions';
import { predictZodiacSign, updateLearningData } from '../utils/predictionAlgorithm';
import { loadGameState, saveGameState, saveGameToHistory, clearGameState } from '../utils/localStorage';

// Set default state
const defaultState: GameState = {
  questions: [],
  currentQuestionIndex: 0,
  choices: [],
  prediction: null,
  actualSign: null,
  friendGuesses: [],
  gameComplete: false
};

// Create context
const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GameState>(defaultState);
  const [showFriendGuessPopup, setShowFriendGuessPopup] = useState(false);

  // Initialize or load saved game
  useEffect(() => {
    const savedState = loadGameState();
    
    if (savedState) {
      setState(savedState);
    } else {
      // Start a new game with random questions
      const questions = getRandomQuestions(5);
      setState({
        ...defaultState,
        questions
      });
    }
  }, []);

  // Save game state when it changes
  useEffect(() => {
    if (state !== defaultState) {
      saveGameState(state);
    }
  }, [state]);

  // Make a choice for the current question
  const makeChoice = (choice: { kiss: string; marry: string; kill: string }) => {
    const currentQuestion = state.questions[state.currentQuestionIndex];
    
    // Create a new choice object
    const newChoice: MKKChoice = {
      questionId: currentQuestion.id,
      kiss: choice.kiss,
      marry: choice.marry,
      kill: choice.kill
    };
    
    // Add choice to choices array
    const newChoices = [...state.choices, newChoice];
    
    // Check if we've reached the end of questions
    const isLastQuestion = state.currentQuestionIndex === state.questions.length - 1;
    
    if (isLastQuestion) {
      // Generate prediction
      const prediction = predictZodiacSign(state.questions, newChoices);
      
      // Update state with prediction and mark game as complete
      setState({
        ...state,
        choices: newChoices,
        prediction,
        gameComplete: true
      });
    } else {
      // Move to next question
      setState({
        ...state,
        choices: newChoices,
        currentQuestionIndex: state.currentQuestionIndex + 1
      });
    }
  };

  // Submit the actual zodiac sign
  const submitActualSign = (sign: ZodiacSign) => {
    if (state.prediction) {
      // Update learning data
      updateLearningData(state.choices, state.prediction.sign, sign);
      
      // Save game to history
      saveGameToHistory(state.prediction.sign, sign);
      
      // Update state
      setState({
        ...state,
        actualSign: sign
      });
    }
  };

  // Add a friend's guess
  const addFriendGuess = (name: string, guess: ZodiacSign) => {
    setState({
      ...state,
      friendGuesses: [...state.friendGuesses, { name, guess }]
    });
  };

  // Reset the game
  const resetGame = () => {
    clearGameState();
    const questions = getRandomQuestions(5);
    setState({
      ...defaultState,
      questions
    });
  };

  return (
    <GameContext.Provider 
      value={{ 
        state, 
        makeChoice, 
        submitActualSign, 
        addFriendGuess, 
        resetGame,
        showFriendGuessPopup,
        setShowFriendGuessPopup
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// Custom hook to use the game context
export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};