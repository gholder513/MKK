import { ZodiacSign } from "../types";

export type ZodiacProfile = {
  sign: ZodiacSign;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  traits: string[];
  description: string;
  emoji: string;
  dates: string;
};

// Helper function for creating trait scores
export const getZodiacTraits = (traits: Record<ZodiacSign, number>): Record<ZodiacSign, number> => {
  return traits;
};

export const zodiacProfiles: ZodiacProfile[] = [
  {
    sign: 'Aries',
    element: 'Fire',
    emoji: '♈',
    dates: 'March 21 - April 19',
    traits: [
      'Bold',
      'Competitive',
      'Passionate',
      'Impulsive',
      'Energetic',
      'Direct',
      'Adventurous'
    ],
    description: 'Aries is the first sign of the zodiac, known for their boldness, competitiveness, and impulsive nature. They tend to act first and think later, bringing energy and passion to everything they do.'
  },
  {
    sign: 'Taurus',
    element: 'Earth',
    emoji: '♉',
    dates: 'April 20 - May 20',
    traits: [
      'Grounded',
      'Patient',
      'Reliable',
      'Stubborn',
      'Comfort-seeking',
      'Sensual',
      'Practical'
    ],
    description: 'Taurus is known for their stability, patience, and appreciation for luxury and comfort. They value security and are often stubborn, preferring to stay in their comfort zone rather than take risks.'
  },
  {
    sign: 'Gemini',
    element: 'Air',
    emoji: '♊',
    dates: 'May 21 - June 20',
    traits: [
      'Curious',
      'Adaptable',
      'Social',
      'Communicative',
      'Intellectual',
      'Versatile',
      'Playful'
    ],
    description: 'Gemini is characterized by their curiosity, adaptability, and exceptional communication skills. They love variety and can easily see multiple perspectives, though they may sometimes seem inconsistent.'
  },
  {
    sign: 'Cancer',
    element: 'Water',
    emoji: '♋',
    dates: 'June 21 - July 22',
    traits: [
      'Nurturing',
      'Emotional',
      'Intuitive',
      'Protective',
      'Sensitive',
      'Home-loving',
      'Loyal'
    ],
    description: 'Cancer is deeply emotional, intuitive, and nurturing. They value home, family, and close emotional bonds, often putting others\' needs before their own while protecting their sensitive inner world.'
  },
  {
    sign: 'Leo',
    element: 'Fire',
    emoji: '♌',
    dates: 'July 23 - August 22',
    traits: [
      'Confident',
      'Dramatic',
      'Generous',
      'Loyal',
      'Proud',
      'Leader',
      'Attention-seeking'
    ],
    description: 'Leo is known for their confidence, creativity, and natural leadership. They love attention and have a flair for drama, but are also incredibly generous and loyal to those they love.'
  },
  {
    sign: 'Virgo',
    element: 'Earth',
    emoji: '♍',
    dates: 'August 23 - September 22',
    traits: [
      'Analytical',
      'Practical',
      'Detail-oriented',
      'Perfectionist',
      'Helpful',
      'Critical',
      'Organized'
    ],
    description: 'Virgo is practical, analytical, and detail-oriented. They have high standards and seek perfection in everything they do, often helping others with their practical approach to problem-solving.'
  },
  {
    sign: 'Libra',
    element: 'Air',
    emoji: '♎',
    dates: 'September 23 - October 22',
    traits: [
      'Balanced',
      'Harmonious',
      'Fair',
      'Indecisive',
      'Social',
      'Diplomatic',
      'Aesthetic'
    ],
    description: 'Libra values harmony, balance, and beauty. They excel at seeing all sides of a situation and maintaining peace, though this can sometimes lead to indecisiveness as they weigh all options.'
  },
  {
    sign: 'Scorpio',
    element: 'Water',
    emoji: '♏',
    dates: 'October 23 - November 21',
    traits: [
      'Intense',
      'Passionate',
      'Secretive',
      'Transformative',
      'Investigative',
      'Powerful',
      'Loyal'
    ],
    description: 'Scorpio is intense, passionate, and deeply emotional. They see beyond surface-level appearances, seeking truth and transformation, while maintaining a mysterious and sometimes secretive nature.'
  },
  {
    sign: 'Sagittarius',
    element: 'Fire',
    emoji: '♐',
    dates: 'November 22 - December 21',
    traits: [
      'Adventurous',
      'Optimistic',
      'Freedom-loving',
      'Philosophical',
      'Direct',
      'Restless',
      'Open-minded'
    ],
    description: 'Sagittarius is optimistic, freedom-loving, and adventurous. They seek knowledge and new experiences, valuing honesty and philosophical perspectives while avoiding restrictions.'
  },
  {
    sign: 'Capricorn',
    element: 'Earth',
    emoji: '♑',
    dates: 'December 22 - January 19',
    traits: [
      'Ambitious',
      'Disciplined',
      'Practical',
      'Patient',
      'Responsible',
      'Traditional',
      'Reserved'
    ],
    description: 'Capricorn is ambitious, disciplined, and practical. They value hard work and tradition, taking a methodical approach to achieving their goals with patience and responsibility.'
  },
  {
    sign: 'Aquarius',
    element: 'Air',
    emoji: '♒',
    dates: 'January 20 - February 18',
    traits: [
      'Innovative',
      'Humanitarian',
      'Independent',
      'Unique',
      'Progressive',
      'Intellectual',
      'Detached'
    ],
    description: 'Aquarius is innovative, progressive, and independent. They think outside the box and value uniqueness, often focusing on humanitarian causes while maintaining emotional detachment.'
  },
  {
    sign: 'Pisces',
    element: 'Water',
    emoji: '♓',
    dates: 'February 19 - March 20',
    traits: [
      'Intuitive',
      'Compassionate',
      'Artistic',
      'Dreamy',
      'Spiritual',
      'Sensitive',
      'Escapist'
    ],
    description: 'Pisces is intuitive, compassionate, and imaginative. They are deeply connected to their emotions and the emotions of others, often drawn to creative and spiritual pursuits.'
  }
];

export const getZodiacProfile = (sign: ZodiacSign): ZodiacProfile => {
  return zodiacProfiles.find(profile => profile.sign === sign)!;
};

export default zodiacProfiles;