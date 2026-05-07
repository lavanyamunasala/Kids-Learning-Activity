import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 px-4">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-50 -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-slate-800 leading-tight mb-6 bubble-text">
            Learn English <br />
            <span className="text-purple-600">the Fun Way!</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 font-medium">
            Discover a magical world of words, games, and videos. Learning English has never been this joyful!
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-400 text-white px-8 py-4 rounded-2xl cartoon-border font-bold text-xl hover-cartoon transition-all">
              Start playing
            </button>
            <button className="bg-white text-slate-800 px-8 py-4 rounded-2xl cartoon-border font-bold text-xl hover-cartoon transition-all">
              Watch videos
            </button>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white p-4 rounded-3xl cartoon-border rotate-3">
             <img 
               src="https://picsum.photos/seed/kidslearning/800/600" 
               alt="Kids learning" 
               className="rounded-2xl w-full h-auto object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
          <motion.div 
            className="absolute -top-10 -right-10 bg-yellow-300 p-4 rounded-full cartoon-border w-24 h-24 flex items-center justify-center font-black text-2xl text-slate-800 -rotate-12"
            animate={{ rotate: [12, -12, 12] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            FREE!
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
