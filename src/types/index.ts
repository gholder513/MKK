export type ZodiacSign = 
  | 'Aries' 
  | 'Taurus' 
  | 'Gemini' 
  | 'Cancer' 
  | 'Leo' 
  | 'Virgo' 
  | 'Libra' 
  | 'Scorpio' 
  | 'Sagittarius' 
  | 'Capricorn' 
  | 'Aquarius' 
  | 'Pisces';

export type CMKOption = {
  id: string;
  text: string;
  traits: Record<ZodiacSign, number>;
};

export type CMKQuestion = {
  id: string;
  options: [CMKOption, CMKOption, CMKOption];
};

export type CMKChoice = {
  questionId: string;
  communion: string;
  marry: string;
  kill: string;
};

export type ZodiacPrediction = {
  sign: ZodiacSign;
  confidence: number;
  reasoning: string[];
};

export type GameState = {
  questions: CMKQuestion[];
  currentQuestionIndex: number;
  choices: CMKChoice[];
  prediction: ZodiacPrediction | null;
  actualSign: ZodiacSign | null;
  friendGuesses: Array<{ name: string; guess: ZodiacSign }>;
  gameComplete: boolean;
};

export type GameContextType = {
  state: GameState;
  makeChoice: (choice: { communion: string; marry: string; kill: string }) => void;
  submitActualSign: (sign: ZodiacSign) => void;
  addFriendGuess: (name: string, guess: ZodiacSign) => void;
  resetGame: () => void;
  showFriendGuessPopup: boolean;
  setShowFriendGuessPopup: (show: boolean) => void;
};