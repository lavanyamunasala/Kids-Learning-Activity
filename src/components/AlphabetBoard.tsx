import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function AlphabetBoard() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="alphabet" className="py-24 px-4 bg-white border-y-4 border-slate-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-12 bubble-text">The Magic Alphabet</h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {ALPHABET.map((letter, i) => (
            <motion.button
              key={letter}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelected(letter)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className={`
                aspect-square rounded-2xl cartoon-border font-black text-3xl flex items-center justify-center
                ${selected === letter ? 'bg-purple-500 text-white' : 'bg-white text-slate-800 hover:bg-yellow-100'}
              `}
            >
              {letter}
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="mt-12 p-8 bg-blue-50 rounded-3xl cartoon-border max-w-md mx-auto"
            >
              <div className="text-8xl font-black text-purple-600 mb-4">{selected}</div>
              <div className="text-2xl font-bold text-slate-700"> is for... </div>
              <div className="mt-4 flex flex-col items-center gap-4">
                 <img 
                   src={`https://picsum.photos/seed/${selected}/300/200`}
                   alt={selected}
                   className="rounded-xl cartoon-border w-full h-48 object-cover"
                   referrerPolicy="no-referrer"
                 />
                 <span className="text-4xl font-black text-slate-800 tracking-wide uppercase">
                   {getWordForLetter(selected)}
                 </span>
              </div>
              <button 
                onClick={() => setSelected(null)}
                className="mt-8 text-slate-500 font-bold hover:text-slate-800"
              >
                Close 👋
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function getWordForLetter(letter: string) {
  const words: Record<string, string> = {
    A: 'Apple', B: 'Bear', C: 'Cat', D: 'Dog', E: 'Elephant',
    F: 'Fish', G: 'Giraffe', H: 'Hat', I: 'Ice Cream', J: 'Jellyfish',
    K: 'Kite', L: 'Lion', M: 'Monkey', N: 'Nest', O: 'Orange',
    P: 'Penguin', Q: 'Queen', R: 'Rabbit', S: 'Sun', T: 'Tiger',
    U: 'Umbrella', V: 'Van', W: 'Whale', X: 'Xylophone', Y: 'Yo-yo', Z: 'Zebra'
  };
  return words[letter] || letter;
}
