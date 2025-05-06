import { MKKChoice, MKKQuestion, ZodiacPrediction, ZodiacSign } from "../types";
import { zodiacProfiles } from "../data/zodiacProfiles";

// Function to determine zodiac sign based on user choices
export const predictZodiacSign = (
  questions: MKKQuestion[],
  choices: MKKChoice[]
): ZodiacPrediction => {
  // Initialize scores for each zodiac sign
  const scores: Record<ZodiacSign, { score: number; reasons: string[] }> = {} as Record<ZodiacSign, { score: number; reasons: string[] }>;
  
  zodiacProfiles.forEach(profile => {
    scores[profile.sign] = { score: 0, reasons: [] };
  });
  
  // Process each choice
  choices.forEach(choice => {
    const question = questions.find(q => q.id === choice.questionId);
    if (!question) return;
    
    // Find the selected options
    const kissOption = question.options.find(o => o.id === choice.kiss);
    const marryOption = question.options.find(o => o.id === choice.marry);
    const killOption = question.options.find(o => o.id === choice.kill);
    
    if (!kissOption || !marryOption || !killOption) return;
    
    // Update scores based on the choices
    zodiacProfiles.forEach(profile => {
      const sign = profile.sign;
      
      // Marry gets the highest weight (3x)
      if (marryOption.traits[sign]) {
        scores[sign].score += marryOption.traits[sign] * 3;
        if (marryOption.traits[sign] > 7) {
          scores[sign].reasons.push(`You chose to Marry "${marryOption.text}" which strongly aligns with ${sign}'s ${getRelevantTraits(sign, marryOption.traits[sign])}`);
        }
      }
      
      // Kiss gets medium weight (2x)
      if (kissOption.traits[sign]) {
        scores[sign].score += kissOption.traits[sign] * 2;
        if (kissOption.traits[sign] > 7) {
          scores[sign].reasons.push(`Your Kiss choice of "${kissOption.text}" reflects ${sign}'s ${getRelevantTraits(sign, kissOption.traits[sign])}`);
        }
      }
      
      // Kill gets negative weight (-2x)
      if (killOption.traits[sign]) {
        // If a sign would typically rate this option highly but the user chose to "kill" it,
        // that's a strong negative indicator for that sign
        if (killOption.traits[sign] > 7) {
          scores[sign].score -= killOption.traits[sign] * 2;
          scores[sign].reasons.push(`Choosing to Kill "${killOption.text}" contrasts with ${sign}'s typical preferences`);
        }
      }
    });
  });
  
  // Find the sign with the highest score
  let highestScore = 0;
  let predictedSign: ZodiacSign = 'Aries'; // Default
  
  Object.entries(scores).forEach(([sign, data]) => {
    if (data.score > highestScore) {
      highestScore = data.score;
      predictedSign = sign as ZodiacSign;
    }
  });
  
  // Calculate confidence (0-100%)
  const totalPossibleScore = choices.length * 15 * 3; // max score per choice * weight * number of choices
  const confidence = Math.min(Math.round((highestScore / totalPossibleScore) * 100), 95); // Cap at 95% to avoid overconfidence
  
  // Get the reasons for this prediction, limit to top 3
  const reasons = scores[predictedSign].reasons.slice(0, 3);
  
  // If we don't have enough specific reasons, add a generic one
  if (reasons.length < 2) {
    const profile = zodiacProfiles.find(p => p.sign === predictedSign);
    if (profile) {
      reasons.push(`Your overall pattern of choices reflects ${predictedSign}'s ${profile.traits.slice(0, 3).join(", ")} nature.`);
    }
  }
  
  return {
    sign: predictedSign,
    confidence,
    reasoning: reasons
  };
};

// Helper function to get relevant traits based on score
const getRelevantTraits = (sign: ZodiacSign, score: number): string => {
  const profile = zodiacProfiles.find(p => p.sign === sign);
  if (!profile) return '';
  
  // Pick some traits based on the score
  const traitIndex = Math.min(Math.floor(score / 3), profile.traits.length - 1);
  const traits = profile.traits.slice(0, traitIndex + 1);
  return traits.slice(0, 2).join(" and ") + " nature";
};

// Get learning data from local storage
export const getLearningData = (): Record<string, { predictions: Record<ZodiacSign, number>, actual: Record<ZodiacSign, number> }> => {
  const data = localStorage.getItem('mkk_learning_data');
  return data ? JSON.parse(data) : {};
};

// Update learning data
export const updateLearningData = (
  choices: MKKChoice[],
  predictedSign: ZodiacSign,
  actualSign: ZodiacSign
) => {
  const learningData = getLearningData();
  
  // Create a key from the choices
  const key = choices.map(choice => 
    `${choice.questionId}:${choice.marry}:${choice.kiss}:${choice.kill}`
  ).join('|');
  
  // Initialize if needed
  if (!learningData[key]) {
    learningData[key] = {
      predictions: {} as Record<ZodiacSign, number>,
      actual: {} as Record<ZodiacSign, number>
    };
    
    zodiacProfiles.forEach(profile => {
      learningData[key].predictions[profile.sign] = 0;
      learningData[key].actual[profile.sign] = 0;
    });
  }
  
  // Update prediction and actual counts
  learningData[key].predictions[predictedSign] = (learningData[key].predictions[predictedSign] || 0) + 1;
  learningData[key].actual[actualSign] = (learningData[key].actual[actualSign] || 0) + 1;
  
  // Save back to localStorage
  localStorage.setItem('mkk_learning_data', JSON.stringify(learningData));
};