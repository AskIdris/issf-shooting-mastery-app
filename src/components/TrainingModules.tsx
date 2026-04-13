import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronRight, CheckCircle2, PlayCircle } from 'lucide-react';
import { TrainingModule } from '../types';
import { cn } from '../lib/utils';

export default function TrainingModules({ modules }: { modules: TrainingModule[] }) {
  const [selectedModule, setSelectedModule] = useState<TrainingModule | null>(null);

  const categories = Array.from(new Set(modules.map(m => m.category)));

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="p-6 max-w-2xl mx-auto space-y-8"
    >
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Training Library</h1>
        <p className="text-gray-500 text-sm">Scientific methods for peak performance</p>
      </header>

      <div className="space-y-10">
        {categories.map(category => (
          <section key={category} className="space-y-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] px-1">{category}</h2>
            <div className="grid gap-4">
              {modules.filter(m => m.category === category).map(module => (
                <motion.button
                  key={module.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedModule(module)}
                  className="bg-white p-5 rounded-2xl text-left border border-gray-100 shadow-sm hover:border-shooting-blue/30 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1 pr-4">
                    <h3 className="font-bold text-base group-hover:text-shooting-blue transition-colors">{module.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-1">{module.description}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-shooting-blue/10 group-hover:text-shooting-blue transition-all">
                    <PlayCircle size={20} />
                  </div>
                </motion.button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Module Modal */}
      <AnimatePresence>
        {selectedModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
            onClick={() => setSelectedModule(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="bg-white w-full max-w-xl rounded-t-3xl sm:rounded-3xl overflow-hidden max-h-[90vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                <span className="text-[10px] font-bold text-shooting-blue bg-shooting-blue/10 px-2 py-1 rounded-full uppercase tracking-widest">
                  {selectedModule.category}
                </span>
                <button 
                  onClick={() => setSelectedModule(null)}
                  className="text-gray-400 hover:text-gray-600 font-medium text-sm"
                >
                  Close
                </button>
              </div>
              <div className="p-8 overflow-y-auto space-y-6">
                {selectedModule.imageUrl && (
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
                    <img 
                      src={selectedModule.imageUrl} 
                      alt={selectedModule.title} 
                      className="w-full h-auto max-h-80 object-contain mx-auto"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                
                {selectedModule.videoUrl && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Video Demonstration</h4>
                    <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-inner relative group">
                      <iframe
                        src={selectedModule.videoUrl}
                        title={selectedModule.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
                <h2 className="text-2xl font-bold tracking-tight">{selectedModule.title}</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {selectedModule.content}
                  </p>
                </div>
                
                <div className="bg-shooting-blue/5 p-6 rounded-2xl border border-shooting-blue/10 space-y-3">
                  <h4 className="text-xs font-bold text-shooting-blue uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle2 size={14} /> Olympic Tip
                  </h4>
                  <p className="text-sm text-shooting-blue/80 font-medium italic">
                    Consistency is built through repetition. Practice this stance for 10 minutes daily without firing to build muscle memory.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
