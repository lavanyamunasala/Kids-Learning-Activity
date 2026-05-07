import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border-t-4 border-slate-100 pt-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-black bubble-text">KiddoLingo</span>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-center md:text-left">
            Making English learning an adventure for kids everywhere. 🌈
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 font-bold text-slate-600">
          <a href="#" className="hover:text-purple-600">Privacy Policy</a>
          <a href="#" className="hover:text-purple-600">Parent Center</a>
          <a href="#" className="hover:text-purple-600">Contact Us</a>
        </div>

        <div className="flex items-center gap-2 text-slate-400 font-medium">
          Created with <Heart className="w-4 h-4 text-red-400 fill-current" /> for little learners
        </div>
      </div>
    </footer>
  );
}
