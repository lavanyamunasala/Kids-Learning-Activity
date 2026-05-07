import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCcw, CheckCircle2 } from 'lucide-react';

const CARDS = [
  { id: 1, type: 'emoji', value: '🍎', match: 'Apple' },
  { id: 2, type: 'emoji', value: '🐶', match: 'Dog' },
  { id: 3, type: 'emoji', value: '🦒', match: 'Giraffe' },
  { id: 4, type: 'text', value: 'Apple', match: '🍎' },
  { id: 5, type: 'text', value: 'Dog', match: '🐶' },
  { id: 6, type: 'text', value: 'Giraffe', match: '🦒' },
];

export default function MatchGame() {
  const [cards, setCards] = useState(() => [...CARDS].sort(() => Math.random() - 0.5));
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [celebrating, setCelebrating] = useState(false);

  useEffect(() => {
    if (flipped.length === 2) {
      const [firstId, secondId] = flipped;
      const firstCard = cards.find(c => c.id === firstId);
      const secondCard = cards.find(c => c.id === secondId);

      if (firstCard && secondCard && firstCard.match === secondCard.value) {
        setMatched(prev => [...prev, firstId, secondId]);
        setFlipped([]);
      } else {
        const timer = setTimeout(() => setFlipped([]), 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [flipped, cards]);

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      setCelebrating(true);
    }
  }, [matched, cards]);

  const handleFlip = (id: number) => {
    if (flipped.length < 2 && !flipped.includes(id) && !matched.includes(id)) {
      setFlipped(prev => [...prev, id]);
    }
  };

  const reset = () => {
    setCards([...CARDS].sort(() => Math.random() - 0.5));
    setFlipped([]);
    setMatched([]);
    setCelebrating(false);
  };

  return (
    <section id="games" className="py-24 px-4 bg-orange-100 border-y-4 border-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4 bubble-text">Matching Game</h2>
        <p className="text-xl font-medium text-slate-600 mb-12">Match the picture with the word!</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {cards.map((card) => {
            const isFlipped = flipped.includes(card.id) || matched.includes(card.id);
            return (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFlip(card.id)}
                className={`
                  h-40 relative cursor-pointer
                  transition-all duration-500 perspective-1000
                `}
              >
                <div className={`
                  w-full h-full relative transition-all duration-500 preserve-3d
                  ${isFlipped ? 'rotate-y-180' : ''}
                `}>
                  {/* Front */}
                  <div className="absolute inset-0 bg-white rounded-3xl cartoon-border flex items-center justify-center backface-hidden">
                    <span className="text-5xl">❓</span>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-yellow-300 rounded-3xl cartoon-border flex items-center justify-center backface-hidden rotate-y-180">
                    <span className={`font-black ${card.type === 'emoji' ? 'text-7xl' : 'text-2xl text-slate-800'}`}>
                      {card.value}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <button 
            onClick={reset}
            className="flex items-center gap-2 bg-slate-800 text-white px-8 py-3 rounded-2xl font-bold hover:bg-slate-700 transition-colors"
          >
            <RefreshCcw className="w-5 h-5" />
            Reset Game
          </button>
        </div>

        <AnimatePresence>
          {celebrating && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-12 p-8 bg-green-400 rounded-3xl cartoon-border"
            >
              <CheckCircle2 className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-3xl font-black text-white mb-2">Great Job!</h3>
              <p className="text-green-900 font-bold mb-6">You matched them all perfectly!</p>
              <button 
                onClick={reset}
                className="bg-white text-slate-800 px-8 py-3 rounded-xl font-bold cartoon-border hover-cartoon"
              >
                Play Again!
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
