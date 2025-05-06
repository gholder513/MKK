import { GameProvider } from "./contexts/GameContext";
import GameContainer from "./components/GameContainer";
import { Sparkles, Microscope } from "lucide-react";

function App() {
  return (
    <GameProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900 text-white relative overflow-hidden"> 
        {/* Star field background */}
        <div className="absolute inset-0 opacity-20 -z-10">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                animation: `twinkle ${
                  Math.random() * 5 + 3
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <header className="py-6 px-4 text-center relative">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-yellow-300 to-purple-400 animate-pulse">
            Communion, Marry, Kill
          </h1>
          <p className="text-purple-300 text-lg mb-2">
            Discover your zodiac sign through your choices
          </p>
          <div className="flex items-center justify-center">
            <Sparkles className="text-yellow-400 mr-2" size={20} />
            <p className="text-yellow-200 italic">
              Let the stars guide your destiny
            </p>
          </div>
        </header>
        <GameContainer />
        {/* How to Play Section */}
        <div className="max-w-4xl mx-auto px-4 py-8 relative">
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 mb-8 border border-purple-500/20 shadow-xl">
            <h2 className="text-2xl font-serif text-center mb-4 text-purple-300">
              How to Play
            </h2>
            <div className="space-y-4 text-gray-200">
              <p>
                Welcome to a mystical journey of self-discovery! In this cosmic
                game, you'll be presented with sets of three options. For each
                set, you must choose:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-green-600 mr-2"></span>
                  <strong className="text-green-600">Marry:</strong>
                  <span className="ml-2">
                    Your favorite option - what resonates most with your soul
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                  <strong className="text-purple-400">Communion:</strong>
                  <span className="ml-2">
                    Your second choice - what you'd appreciate but not commit to
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                  <strong className="text-red-400">Kill:</strong>
                  <span className="ml-2">
                    Your least favorite - what doesn't align with your energy
                  </span>
                </li>
              </ul>
              <p>
                Based on your choices, our celestial algorithm will analyze your
                cosmic energy and predict your zodiac sign. The more you play,
                the more accurate our predictions become!
              </p>
            </div>
          </div>
          
          {/* Study Information Section */}
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 mb-8 border border-purple-500/20 shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <Microscope className="text-blue-400 mr-3" size={24} />
              <h2 className="text-2xl font-serif text-center text-blue-300">
                Brain Rot Research Study
              </h2>
            </div>
            <div className="space-y-4 text-gray-200">
              <p>
                This application is part of an independent study conducted by
                college students utilizing machine learning and data science
                techniques to investigate whether zodiac signs are fictitious,
                concocted, hippie fuel, or actually based in truth.
              </p>
              <p>
                By participating in this game, you're contributing to our
                research on personality patterns and their potential correlation
                with astrological signs. We're analyzing response patterns to
                determine if there are statistically significant relationships
                between choice preferences and birth dates.
              </p>
              <p className="text-blue-200 italic">
                All data is collected anonymously and used solely for academic
                research purposes.
              </p>
            </div>
          </div>
        </div>
        <main className="container mx-auto px-4 pb-12 relative">
        </main>

        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>
    </GameProvider>
  );
}

export default App;
