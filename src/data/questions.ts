import { CMKQuestion } from '../types';
import { getZodiacTraits } from './zodiacProfiles';

// Generate a unique ID
const generateId = (): string => Math.random().toString(36).substring(2, 9);

// This is our bank of hypothetical scenarios/questions
const questionsData: CMKQuestion[] = [
  {
    id: generateId(),
    options: [
      {
        id: generateId(),
        text: "Donald Trump's Economy",
        traits: getZodiacTraits({
          Aries: 5,         // Bold, competitive
          Taurus: 7,        // Values security, material focus
          Gemini: 3,        // Mixed feelings
          Cancer: 2,        // Security-focused but emotional
          Leo: 6,           // Values power and status
          Virgo: 4,         // Critical but practical
          Libra: 3,         // Values balance but dislikes conflict
          Scorpio: 5,       // Power-focused
          Sagittarius: 4,   // Values freedom
          Capricorn: 8,     // Career and structure focused
          Aquarius: 2,      // Progressive, community-focused
          Pisces: 1         // Idealistic, dislikes materialism
        })
      },
      {
        id: generateId(),
        text: "Golden Retrievers",
        traits: getZodiacTraits({
          Aries: 6,         // Energetic, playful
          Taurus: 7,        // Loyal, comfort-loving
          Gemini: 6,        // Playful, social
          Cancer: 9,        // Nurturing, family-oriented
          Leo: 8,           // Loving, attention-seeking
          Virgo: 6,         // Loyal, helpful
          Libra: 8,         // Harmonious, friendly
          Scorpio: 5,       // Loyal but independent
          Sagittarius: 7,   // Adventurous, friendly
          Capricorn: 5,     // Loyal but practical
          Aquarius: 6,      // Friendly, values uniqueness
          Pisces: 9         // Emotional connection, loving
        })
      },
      {
        id: generateId(),
        text: "The Los Angeles Lakers",
        traits: getZodiacTraits({
          Aries: 7,         // Competitive, bold
          Taurus: 5,        // Appreciates tradition
          Gemini: 6,        // Entertainment, social
          Cancer: 4,        // Loyal to favorites
          Leo: 9,           // Loves spotlight, performance
          Virgo: 4,         // Analytical about performance
          Libra: 6,         // Appreciates teamwork
          Scorpio: 7,       // Passionate, intense
          Sagittarius: 6,   // Loves competition
          Capricorn: 5,     // Appreciates achievement
          Aquarius: 4,      // Team-oriented but not traditional
          Pisces: 5         // Emotional connection to teams
        })
      }
    ]
  },
  {
    id: generateId(),
    options: [
      {
        id: generateId(),
        text: "Socks with Sandals",
        traits: getZodiacTraits({
          Aries: 2,         // Bold but fashion-conscious
          Taurus: 6,        // Comfort over style
          Gemini: 4,        // Quirky, experimental
          Cancer: 5,        // Comfort-focused
          Leo: 1,           // Style-conscious
          Virgo: 6,         // Practical, functional
          Libra: 2,         // Style-focused
          Scorpio: 3,       // Not mainstream
          Sagittarius: 5,   // Doesn't care about conventions
          Capricorn: 4,     // Practical but respects traditions
          Aquarius: 8,      // Quirky, against convention
          Pisces: 4         // Carefree about fashion
        })
      },
      {
        id: generateId(),
        text: "Wine Wednesdays",
        traits: getZodiacTraits({
          Aries: 6,         // Social, fun
          Taurus: 8,        // Indulgent, pleasure-seeking
          Gemini: 7,        // Social, talkative
          Cancer: 6,        // Comforting ritual
          Leo: 8,           // Social spotlight
          Virgo: 5,         // Appreciates quality
          Libra: 9,         // Social harmony, luxury
          Scorpio: 7,       // Deep conversations
          Sagittarius: 7,   // Fun-loving
          Capricorn: 6,     // Traditional relaxation
          Aquarius: 5,      // Social but not conventional
          Pisces: 8         // Escape, emotional connection
        })
      },
      {
        id: generateId(),
        text: "Obamacare",
        traits: getZodiacTraits({
          Aries: 5,         // Progressive but independent
          Taurus: 6,        // Security-focused
          Gemini: 5,        // Can see multiple sides
          Cancer: 8,        // Nurturing, cares for others
          Leo: 5,           // Leadership-focused
          Virgo: 7,         // Service-oriented
          Libra: 8,         // Justice, equality
          Scorpio: 6,       // Transformative policies
          Sagittarius: 6,   // Idealistic
          Capricorn: 5,     // Structure-focused but traditional
          Aquarius: 9,      // Progressive, humanitarian
          Pisces: 8         // Compassionate, helping others
        })
      }
    ]
  },
  {
    id: generateId(),
    options: [
      {
        id: generateId(),
        text: "Random Facetime Calls",
        traits: getZodiacTraits({
          Aries: 6,         // Spontaneous, direct
          Taurus: 2,        // Dislikes unexpected changes
          Gemini: 8,        // Loves communication, spontaneity
          Cancer: 7,        // Values connection
          Leo: 8,           // Loves attention and connection
          Virgo: 2,         // Prefers planning
          Libra: 6,         // Enjoys social connection
          Scorpio: 3,       // Values privacy
          Sagittarius: 7,   // Spontaneous, adventurous
          Capricorn: 2,     // Prefers structure
          Aquarius: 5,      // Values connection but independence
          Pisces: 7         // Emotional connection
        })
      },
      {
        id: generateId(),
        text: "A winter afternoon skiing in Aspen Colorado",
        traits: getZodiacTraits({
          Aries: 8,         // Adventurous, active
          Taurus: 7,        // Luxury experience
          Gemini: 6,        // Fun activity
          Cancer: 5,        // Cozy but adventurous
          Leo: 9,           // Luxurious experience
          Virgo: 6,         // Well-executed activity
          Libra: 8,         // Beautiful, balanced experience
          Scorpio: 6,       // Intense experience
          Sagittarius: 9,   // Adventure, freedom
          Capricorn: 7,     // Achievement-oriented activity
          Aquarius: 7,      // Unique experience
          Pisces: 6         // Dreamy escape
        })
      },
      {
        id: generateId(),
        text: "Instagram Reel Doomscrolling",
        traits: getZodiacTraits({
          Aries: 4,         // Gets bored quickly
          Taurus: 5,        // Comfort activity but repetitive
          Gemini: 8,        // Information-seeking
          Cancer: 6,        // Emotional connection
          Leo: 7,           // Loves trends and visuals
          Virgo: 3,         // Sees it as time-wasting
          Libra: 7,         // Visual appreciation
          Scorpio: 8,       // Obsessive tendencies
          Sagittarius: 5,   // Likes novelty but not stillness
          Capricorn: 3,     // Sees as unproductive
          Aquarius: 6,      // Interested in culture
          Pisces: 8         // Escapism, visual dreaminess
        })
      }
    ]
  },
  {
    id: generateId(),
    options: [
      {
        id: generateId(),
        text: "Meditation Retreats",
        traits: getZodiacTraits({
          Aries: 3,         // Too still and quiet
          Taurus: 7,        // Peaceful, sensory
          Gemini: 4,        // Too quiet
          Cancer: 8,        // Emotional healing
          Leo: 5,           // Self-improvement but quiet
          Virgo: 8,         // Self-improvement, mental clarity
          Libra: 7,         // Balance and harmony
          Scorpio: 9,       // Deep transformation
          Sagittarius: 6,   // Spiritual exploration
          Capricorn: 6,     // Self-discipline
          Aquarius: 7,      // Alternative practices
          Pisces: 10        // Spiritual connection
        })
      },
      {
        id: generateId(),
        text: "Fast Food Drive-Thrus",
        traits: getZodiacTraits({
          Aries: 7,         // Quick, convenient
          Taurus: 6,        // Indulgent food
          Gemini: 7,        // Quick, variety
          Cancer: 5,        // Comfort food but not homemade
          Leo: 4,           // Not special enough
          Virgo: 2,         // Unhealthy, not quality
          Libra: 5,         // Convenient but not aesthetic
          Scorpio: 5,       // Convenient but not special
          Sagittarius: 8,   // Adventures, no planning
          Capricorn: 4,     // Practical but not ideal
          Aquarius: 6,      // Unconventional, against norms
          Pisces: 5         // Easy but not meaningful
        })
      },
      {
        id: generateId(),
        text: "True Crime Podcasts",
        traits: getZodiacTraits({
          Aries: 6,         // Exciting, thrilling
          Taurus: 5,        // Engrossing but disturbing
          Gemini: 8,        // Informative, detailed
          Cancer: 6,        // Emotional stories
          Leo: 5,           // Dramatic but not center stage
          Virgo: 7,         // Analytical, detail-oriented
          Libra: 6,         // Justice-oriented
          Scorpio: 10,      // Mystery, darkness, investigation
          Sagittarius: 7,   // Knowledge-seeking
          Capricorn: 6,     // Structured, fact-based
          Aquarius: 8,      // Unconventional interests
          Pisces: 7         // Empathetic to stories
        })
      }
    ]
  },
  {
    id: generateId(),
    options: [
      {
        id: generateId(),
        text: "Surprise Birthday Parties",
        traits: getZodiacTraits({
          Aries: 7,         // Exciting, spotlight
          Taurus: 5,        // Enjoys celebration but dislikes surprises
          Gemini: 8,        // Social, exciting
          Cancer: 9,        // Emotional connection, family
          Leo: 10,          // Celebration, spotlight
          Virgo: 4,         // Dislikes lack of control
          Libra: 8,         // Social harmony
          Scorpio: 4,       // Dislikes unexpected exposure
          Sagittarius: 8,   // Fun, adventurous
          Capricorn: 5,     // Appreciates effort but not surprises
          Aquarius: 6,      // Unique experience but social pressure
          Pisces: 7         // Emotional moment
        })
      },
      {
        id: generateId(),
        text: "Working from Home in Pajamas",
        traits: getZodiacTraits({
          Aries: 6,         // Freedom but can get restless
          Taurus: 9,        // Comfort, cozy
          Gemini: 7,        // Flexible but can get bored
          Cancer: 10,       // Home-loving, comfort
          Leo: 5,           // Misses audience
          Virgo: 8,         // Productive, practical
          Libra: 7,         // Comfortable but misses social
          Scorpio: 8,       // Privacy, focused
          Sagittarius: 6,   // Freedom but restless
          Capricorn: 7,     // Productive but prefers structure
          Aquarius: 9,      // Independent, unconventional
          Pisces: 8         // Comfortable, dreamy
        })
      },
      {
        id: generateId(),
        text: "Airport Security Lines",
        traits: getZodiacTraits({
          Aries: 2,         // Impatient, hates waiting
          Taurus: 3,        // Dislikes rushing and stress
          Gemini: 4,        // Boring, repetitive
          Cancer: 3,        // Stressful, exposed
          Leo: 3,           // Undignified treatment
          Virgo: 5,         // Appreciates order but stressful
          Libra: 4,         // Unpleasant but necessary
          Scorpio: 3,       // Invasion of privacy
          Sagittarius: 2,   // Restriction before freedom
          Capricorn: 5,     // Necessary process
          Aquarius: 3,      // Conformity, rules
          Pisces: 2         // Chaotic, stressful
        })
      }
    ]
  },
  {
    id: generateId(),
    options: [
      {
        id: generateId(),
        text: "Remote Cabins in the Woods",
        traits: getZodiacTraits({
          Aries: 6,         // Adventure but isolated
          Taurus: 8,        // Natural beauty, comfort
          Gemini: 4,        // Too isolated
          Cancer: 9,        // Cozy, private
          Leo: 5,           // Beautiful but isolated
          Virgo: 7,         // Peaceful, natural
          Libra: 6,         // Beautiful but isolated
          Scorpio: 8,       // Privacy, intensity
          Sagittarius: 9,   // Adventure, freedom
          Capricorn: 7,     // Traditional, sturdy
          Aquarius: 7,      // Unconventional living
          Pisces: 9         // Dreamy escape
        })
      },
      {
        id: generateId(),
        text: "24-Hour News Channels",
        traits: getZodiacTraits({
          Aries: 5,         // Updated but repetitive
          Taurus: 4,        // Too chaotic
          Gemini: 8,        // Information, communication
          Cancer: 5,        // Emotional but overwhelming
          Leo: 6,           // Drama, performance
          Virgo: 6,         // Information but critical
          Libra: 6,         // Multiple perspectives
          Scorpio: 7,       // Investigative, revealing
          Sagittarius: 7,   // Information seeking
          Capricorn: 6,     // Current events, practical
          Aquarius: 7,      // Global perspective
          Pisces: 4         // Overwhelming, negative
        })
      },
      {
        id: generateId(),
        text: "Trendy Fusion Restaurants",
        traits: getZodiacTraits({
          Aries: 7,         // Novel, exciting
          Taurus: 7,        // Sensory pleasure
          Gemini: 9,        // Variety, novelty
          Cancer: 6,        // Creative but not traditional
          Leo: 9,           // Trendy, special
          Virgo: 6,         // Creative but skeptical
          Libra: 9,         // Aesthetic, social
          Scorpio: 7,       // Unique, intense
          Sagittarius: 8,   // Adventurous, different
          Capricorn: 5,     // Quality but not traditional
          Aquarius: 10,     // Innovative, unconventional
          Pisces: 8         // Creative, artistic
        })
      }
    ]
  },
  {
    id: generateId(),
    options: [
      {
        id: generateId(),
        text: "Nostalgic 90s TV Marathons",
        traits: getZodiacTraits({
          Aries: 5,         // Fun but repetitive
          Taurus: 8,        // Comfort, nostalgia
          Gemini: 7,        // Entertainment, variety
          Cancer: 10,       // Nostalgia, comfort
          Leo: 7,           // Entertainment, nostalgia
          Virgo: 6,         // Quality but indulgent
          Libra: 7,         // Pleasant, social
          Scorpio: 7,       // Deep connection
          Sagittarius: 6,   // Fun but stationary
          Capricorn: 7,     // Traditional, quality
          Aquarius: 8,      // Cultural, unique
          Pisces: 9         // Nostalgic, escapist
        })
      },
      {
        id: generateId(),
        text: "Spontaneous Road Trips",
        traits: getZodiacTraits({
          Aries: 9,         // Adventure, spontaneity
          Taurus: 5,        // Scenic but unplanned
          Gemini: 9,        // Variety, novelty
          Cancer: 6,        // Fun but away from home
          Leo: 8,           // Exciting, memorable
          Virgo: 4,         // Too unplanned
          Libra: 7,         // Fun, social
          Scorpio: 7,       // Intense experiences
          Sagittarius: 10,  // Ultimate freedom
          Capricorn: 4,     // Too unstructured
          Aquarius: 9,      // Unconventional, free
          Pisces: 8         // Dreamy adventures
        })
      },
      {
        id: generateId(),
        text: "High-Intensity Interval Training",
        traits: getZodiacTraits({
          Aries: 10,        // Intense, challenging
          Taurus: 5,        // Effective but intense
          Gemini: 7,        // Varied, quick
          Cancer: 5,        // Effective but intense
          Leo: 8,           // Challenging, impressive
          Virgo: 8,         // Efficient, effective
          Libra: 6,         // Effective but intense
          Scorpio: 9,       // Intense, transformative
          Sagittarius: 8,   // Energetic, challenging
          Capricorn: 9,     // Efficient, goal-oriented
          Aquarius: 7,      // Innovative workout
          Pisces: 5         // Too intense, not flowing
        })
      }
    ]
  },
  {
    id: generateId(),
    options: [
      {
        id: generateId(),
        text: "Luxury Cruise Ships",
        traits: getZodiacTraits({
          Aries: 6,         // Fun but confined
          Taurus: 9,        // Luxury, relaxation
          Gemini: 7,        // Entertainment, social
          Cancer: 8,        // Comfortable, family
          Leo: 9,           // Luxury, special
          Virgo: 6,         // Organized but crowded
          Libra: 9,         // Luxury, balanced
          Scorpio: 6,       // Indulgent but public
          Sagittarius: 7,   // Travel but limited
          Capricorn: 7,     // Quality, achievement
          Aquarius: 5,      // Too conventional
          Pisces: 8         // Dreamy, escapist
        })
      },
      {
        id: generateId(),
        text: "DIY Home Improvement Projects",
        traits: getZodiacTraits({
          Aries: 8,         // Active, challenging
          Taurus: 9,        // Home-focused, tangible
          Gemini: 6,        // Creative but detail-heavy
          Cancer: 9,        // Home-oriented, nurturing
          Leo: 7,           // Creative, impressive
          Virgo: 10,        // Detail-oriented, skilled
          Libra: 7,         // Aesthetic, balanced
          Scorpio: 7,       // Transformative
          Sagittarius: 6,   // Creative but confined
          Capricorn: 9,     // Building, practical
          Aquarius: 8,      // Innovative, unique
          Pisces: 6         // Creative but technical
        })
      },
      {
        id: generateId(),
        text: "Online Conspiracy Theories",
        traits: getZodiacTraits({
          Aries: 5,         // Interesting but dubious
          Taurus: 3,        // Too unrealistic
          Gemini: 8,        // Curious, information
          Cancer: 5,        // Emotional but skeptical
          Leo: 5,           // Dramatic but questionable
          Virgo: 3,         // Too illogical
          Libra: 5,         // Multiple sides but unbalanced
          Scorpio: 9,       // Mystery, hidden truths
          Sagittarius: 7,   // Alternative perspectives
          Capricorn: 3,     // Too unfounded
          Aquarius: 10,     // Alternative thinking, questioning
          Pisces: 8         // Imaginative, open-minded
        })
      }
    ]
  },
  {
    id: generateId(),
    options: [
      {
        id: generateId(),
        text: "Last-Minute Halloween Costumes",
        traits: getZodiacTraits({
          Aries: 8,         // Spontaneous, creative
          Taurus: 4,        // Prefers quality preparation
          Gemini: 9,        // Creative, adaptable
          Cancer: 6,        // Creative but prefers planning
          Leo: 7,           // Wants to stand out but prefers planning
          Virgo: 3,         // Too last-minute
          Libra: 6,         // Creative but prefers aesthetic
          Scorpio: 7,       // Creative, mysterious
          Sagittarius: 9,   // Spontaneous, fun
          Capricorn: 3,     // Too unprepared
          Aquarius: 8,      // Creative, unconventional
          Pisces: 8         // Imaginative, adaptable
        })
      },
      {
        id: generateId(),
        text: "Early Morning Sunrise Hikes",
        traits: getZodiacTraits({
          Aries: 8,         // Energetic, adventurous
          Taurus: 6,        // Beautiful but early
          Gemini: 5,        // Too early
          Cancer: 7,        // Meaningful, emotional
          Leo: 6,           // Beautiful but early
          Virgo: 8,         // Healthy, organized
          Libra: 7,         // Beautiful, balanced
          Scorpio: 6,       // Meaningful but early
          Sagittarius: 9,   // Adventurous, natural
          Capricorn: 9,     // Disciplined, achievement
          Aquarius: 7,      // Unique experience
          Pisces: 8         // Magical, spiritual
        })
      },
      {
        id: generateId(),
        text: "Celebrity Gossip Magazines",
        traits: getZodiacTraits({
          Aries: 5,         // Entertaining but shallow
          Taurus: 6,        // Indulgent, relaxing
          Gemini: 9,        // Information, communication
          Cancer: 7,        // Emotional stories
          Leo: 8,           // Celebrity, spotlight
          Virgo: 3,         // Too shallow
          Libra: 8,         // Social, cultural
          Scorpio: 8,       // Revealing secrets
          Sagittarius: 6,   // Entertaining but shallow
          Capricorn: 4,     // Too frivolous
          Aquarius: 5,      // Cultural but superficial
          Pisces: 7         // Escapism, stories
        })
      }
    ]
  },
  {
    id: generateId(),
    options: [
      {
        id: generateId(),
        text: "Vintage Vinyl Record Collections",
        traits: getZodiacTraits({
          Aries: 6,         // Cool but requires patience
          Taurus: 9,        // Sensory, collectible
          Gemini: 7,        // Variety, interesting
          Cancer: 8,        // Nostalgic, emotional
          Leo: 8,           // Impressive, artistic
          Virgo: 8,         // Quality, detail
          Libra: 9,         // Aesthetic, artistic
          Scorpio: 8,       // Deep appreciation
          Sagittarius: 7,   // Cultural, unique
          Capricorn: 8,     // Traditional, quality
          Aquarius: 10,     // Unconventional, unique
          Pisces: 9         // Artistic, emotional
        })
      },
      {
        id: generateId(),
        text: "Minimalist Interior Design",
        traits: getZodiacTraits({
          Aries: 6,         // Clean but potentially boring
          Taurus: 6,        // Clean but less sensory
          Gemini: 6,        // Clean but less stimulating
          Cancer: 5,        // Too impersonal
          Leo: 6,           // Stylish but less expressive
          Virgo: 10,        // Clean, organized
          Libra: 9,         // Balanced, aesthetic
          Scorpio: 7,       // Controlled, intense
          Sagittarius: 5,   // Too restrictive
          Capricorn: 9,     // Efficient, classic
          Aquarius: 8,      // Modern, innovative
          Pisces: 5         // Too stark
        })
      },
      {
        id: generateId(),
        text: "Extended Family Holiday Dinners",
        traits: getZodiacTraits({
          Aries: 6,         // Fun but potentially tense
          Taurus: 8,        // Food, tradition
          Gemini: 7,        // Social, communicative
          Cancer: 10,       // Family, nurturing
          Leo: 7,           // Center of attention, family
          Virgo: 6,         // Traditional but potentially stressful
          Libra: 7,         // Harmonious, social
          Scorpio: 5,       // Intense, potentially dramatic
          Sagittarius: 7,   // Fun, cultural
          Capricorn: 8,     // Traditional, structured
          Aquarius: 5,      // Too conventional
          Pisces: 7         // Emotional connection
        })
      }
    ]
  },
  // {
  //   id: generateId(),
  //   options: [
  //     {
  //       id: generateId(),
  //       text: "Eight Hours of Sleep Mythology",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Congressional Budget Negotiations",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "CPA Exam Study Burnout",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     }
  //   ]
  // },
  // {
  //   id: generateId(),
  //   options: [
  //     {
  //       id: generateId(),
  //       text: "BeReal Authenticity Spirals",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Oat Milk Environmental Superiority Claims",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "DEI Initiative Implementations",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     }
  //   ]
  // },
  // {
  //   id: generateId(),
  //   options: [
  //     {
  //       id: generateId(),
  //       text: "Trader Joe's Snacks",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Medical Residency Match Anxiety",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Climate Doomerism",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     }
  //   ]
  // },
  // {
  //   id: generateId(),
  //   options: [
  //     {
  //       id: generateId(),
  //       text: "MCAT Practice Question Flashbacks",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Intermittent Fasting",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Remote Work",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     }
  //   ]
  // },
  // {
  //   id: generateId(),
  //   options: [
  //     {
  //       id: generateId(),
  //       text: "Seed Oil Avoidance",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Administrative State Discourse",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "\"Girl Dinner\" Nutritional Adequacy",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     }
  //   ]
  // },
  // {
  //   id: generateId(),
  //   options: [
  //     {
  //       id: generateId(),
  //       text: "Financial Independence Retire Early (FIRE) Calculations",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Stanley Cup Obsessions",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Ranked Choice Voting Systems",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     }
  //   ]
  // },
  // {
  //   id: generateId(),
  //   options: [
  //     {
  //       id: generateId(),
  //       text: "Law School Personal Statement Drafts",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "NATO Expansion Discussions",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "\"That Girl\" Morning Routines",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     }
  //   ]
  // },
  // {
  //   id: generateId(),
  //   options: [
  //     {
  //       id: generateId(),
  //       text: "Gut Health Microbiome Optimization",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Supreme Court Docket Analysis",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Coastal Grandmother Aesthetic",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     }
  //   ]
  // },
  // {
  //   id: generateId(),
  //   options: [
  //     {
  //       id: generateId(),
  //       text: "Telling everyone you’re magnesium deficient without ever getting a blood test",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "8 hours of sleep",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Self-Diagnosed mental disorders",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     }
  //   ]
  // },
  // {
  //   id: generateId(),
  //   options: [
  //     {
  //       id: generateId(),
  //       text: "posting social media infographics with zero citations",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Debating housing policy",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Political talks at the bar",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     }
  //   ]
  // },
  // {
  //   id: generateId(),
  //   options: [
  //     {
  //       id: generateId(),
  //       text: "Citing Marcus Aurelius",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Cold plunges",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Lex Fridman while foam rolling",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     }
  //   ]
  // },
  // {
  //   id: generateId(),
  //   options: [
  //     {
  //       id: generateId(),
  //       text: "Oat milk vs. cow’s milk",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Seed oils",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Being gluten free",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     }
  //   ]
  // },
  // {
  //   id: generateId(),
  //   options: [
  //     {
  //       id: generateId(),
  //       text: "\"liminal space\" in casual conversation",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Starting a Substack because you journaled once",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Quoting Joan Didion but never finishing The White Album",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     }
  //   ]
  // },
  // {
  //   id: generateId(),
  //   options: [
  //     {
  //       id: generateId(),
  //       text: "Standing desks in 2025",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Taking 14 supplements daily",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Monitoring cortisol levels",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     }
  //   ]
  // },
  // {
  //   id: generateId(),
  //   options: [
  //     {
  //       id: generateId(),
  //       text: "Arguing about GPT-5 in a group chat with no devs",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Saying “late-stage capitalism” every time rent is due",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     },
  //     {
  //       id: generateId(),
  //       text: "Reading Capital in the Twenty-First Century… the introduction… once",
  //       traits: getZodiacTraits({
  //         Aries: 5, Taurus: 5, Gemini: 5, Cancer: 5,
  //         Leo: 5, Virgo: 5, Libra: 5, Scorpio: 5,
  //         Sagittarius: 5, Capricorn: 5, Aquarius: 5, Pisces: 5
  //       })
  //     }
  //   ]
  // }
// ────────────── END NEW ENTRIES ──────────────
];

// Function to get a random subset of questions
export const getRandomQuestions = (count: number = 5): CMKQuestion[] => {
  if (count >= questionsData.length) return [...questionsData];
  
  const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default questionsData;