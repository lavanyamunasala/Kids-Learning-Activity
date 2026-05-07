import { motion } from 'motion/react';
import { Sparkles, Star } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="p-4 md:p-6 bg-white border-b-4 border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-purple-500 p-2 rounded-xl cartoon-border">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-800 bubble-text">KiddoLingo</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8 font-bold text-slate-600">
          <a href="#alphabet" className="hover:text-purple-600 transition-colors">ABC Learning</a>
          <a href="#videos" className="hover:text-blue-500 transition-colors">Fun Videos</a>
          <a href="#games" className="hover:text-orange-500 transition-colors">Play Games</a>
        </div>

        <button className="bg-green-400 px-6 py-2 rounded-full cartoon-border font-bold text-slate-800 hover-cartoon transition-all flex items-center gap-2">
          <Star className="w-4 h-4 fill-current" />
          Join Club
        </button>
      </div>
    </nav>
  );
}
