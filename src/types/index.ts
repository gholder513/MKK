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

export type MKKOption = {
  id: string;
  text: string;
  traits: Record<ZodiacSign, number>;
};

export type MKKQuestion = {
  id: string;
  options: [MKKOption, MKKOption, MKKOption];
};

export type MKKChoice = {
  questionId: string;
  kiss: string;
  marry: string;
  kill: string;
};

export type ZodiacPrediction = {
  sign: ZodiacSign;
  confidence: number;
  reasoning: string[];
};

export type GameState = {
  questions: MKKQuestion[];
  currentQuestionIndex: number;
  choices: MKKChoice[];
  prediction: ZodiacPrediction | null;
  actualSign: ZodiacSign | null;
  friendGuesses: Array<{ name: string; guess: ZodiacSign }>;
  gameComplete: boolean;
};

export type GameContextType = {
  state: GameState;
  makeChoice: (choice: { kiss: string; marry: string; kill: string }) => void;
  submitActualSign: (sign: ZodiacSign) => void;
  addFriendGuess: (name: string, guess: ZodiacSign) => void;
  resetGame: () => void;
  showFriendGuessPopup: boolean;
  setShowFriendGuessPopup: (show: boolean) => void;
};