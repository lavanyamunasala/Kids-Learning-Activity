import { Play } from 'lucide-react';

const VIDEOS = [
  { id: '1', title: 'The ABC Song', thumbnail: 'https://picsum.photos/seed/abc/400/225', color: 'bg-red-400' },
  { id: '2', title: 'Numbers 1-10', thumbnail: 'https://picsum.photos/seed/123/400/225', color: 'bg-blue-400' },
  { id: '3', title: 'Animal Sounds', thumbnail: 'https://picsum.photos/seed/animals/400/225', color: 'bg-green-400' },
  { id: '4', title: 'Family Words', thumbnail: 'https://picsum.photos/seed/family/400/225', color: 'bg-purple-400' },
];

export default function VideoLessons() {
  return (
    <section id="videos" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-black bubble-text">Fun Video Lessons</h2>
          <button className="text-purple-600 font-bold flex items-center gap-2 hover:underline">
            View All Videos
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VIDEOS.map((v) => (
            <div key={v.id} className="group cursor-pointer">
              <div className="relative rounded-3xl cartoon-border overflow-hidden bg-slate-100 aspect-video mb-4 group-hover:-translate-y-2 transition-transform">
                <img 
                  src={v.thumbnail} 
                  alt={v.title} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className={`${v.color} p-4 rounded-full cartoon-border shadow-xl transform scale-90 group-hover:scale-100 transition-transform`}>
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-black text-slate-800">{v.title}</h3>
              <p className="text-slate-500 font-medium">3 Minutes</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
