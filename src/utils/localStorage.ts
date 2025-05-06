import { GameState, ZodiacSign } from "../types";

// Keys for localStorage
const GAME_STATE_KEY = 'mkk_game_state';
const GAME_HISTORY_KEY = 'mkk_game_history';

// Save current game state
export const saveGameState = (state: GameState): void => {
  localStorage.setItem(GAME_STATE_KEY, JSON.stringify(state));
};

// Load saved game state
export const loadGameState = (): GameState | null => {
  const savedState = localStorage.getItem(GAME_STATE_KEY);
  return savedState ? JSON.parse(savedState) : null;
};

// Clear saved game state
export const clearGameState = (): void => {
  localStorage.removeItem(GAME_STATE_KEY);
};

// Save completed game to history
export const saveGameToHistory = (prediction: ZodiacSign, actual: ZodiacSign): void => {
  const history = getGameHistory();
  history.push({
    timestamp: new Date().toISOString(),
    prediction,
    actual,
    correct: prediction === actual
  });
  
  localStorage.setItem(GAME_HISTORY_KEY, JSON.stringify(history));
};

// Get game history
export const getGameHistory = (): Array<{
  timestamp: string;
  prediction: ZodiacSign;
  actual: ZodiacSign;
  correct: boolean;
}> => {
  const history = localStorage.getItem(GAME_HISTORY_KEY);
  return history ? JSON.parse(history) : [];
};

// Get accuracy statistics
export const getAccuracyStats = (): {
  total: number;
  correct: number;
  accuracy: number;
  bySign: Record<ZodiacSign, { total: number; correct: number; accuracy: number }>;
} => {
  const history = getGameHistory();
  const stats = {
    total: history.length,
    correct: history.filter(game => game.correct).length,
    accuracy: 0,
    bySign: {} as Record<ZodiacSign, { total: number; correct: number; accuracy: number }>
  };
  
  // Calculate overall accuracy
  stats.accuracy = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;
  
  // Initialize by-sign stats
  const zodiacSigns: ZodiacSign[] = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];
  
  zodiacSigns.forEach(sign => {
    stats.bySign[sign] = {
      total: 0,
      correct: 0,
      accuracy: 0
    };
  });
  
  // Calculate by-sign stats
  history.forEach(game => {
    const sign = game.actual;
    stats.bySign[sign].total++;
    if (game.correct) {
      stats.bySign[sign].correct++;
    }
  });
  
  // Calculate accuracy for each sign
  zodiacSigns.forEach(sign => {
    const signStats = stats.bySign[sign];
    signStats.accuracy = signStats.total > 0 ? (signStats.correct / signStats.total) * 100 : 0;
  });
  
  return stats;
};