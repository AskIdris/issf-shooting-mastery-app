import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, Target, Save, History, Trash2, Edit2 } from 'lucide-react';
import { TrainingSession } from '../types';
import { cn } from '../lib/utils';
import { useAuth } from '../context/AuthContext';
import { db, POINTS, handleFirestoreError, OperationType } from '../firebase';

export default function PerformanceTracker({ 
  sessions, 
  onAddSession,
  onUpdateSession
}: { 
  sessions: TrainingSession[]; 
  onAddSession: (s: TrainingSession) => void;
  onUpdateSession: (s: TrainingSession) => void;
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [editingSession, setEditingSession] = useState<TrainingSession | null>(null);
  const [newSession, setNewSession] = useState<Partial<TrainingSession>>({
    type: 'Air Pistol',
    score: 0,
    notes: '',
    date: new Date().toISOString()
  });
  const { user, awardPoints } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSession.score || newSession.score < 0) return;

    const session: TrainingSession = {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
      type: newSession.type as any,
      shots: [],
      notes: newSession.notes || '',
      score: Number(newSession.score)
    };

    onAddSession(session);
    setIsAdding(false);
    setNewSession({ type: 'Air Pistol', score: 0, notes: '' });

    // Award points if logged in
    if (user && db) {
      try {
        let points = POINTS.DRILL_COMPLETION; // Use same base for session
        
        // Bonus for personal best
        const bestPrev = sessions.length > 0 ? Math.max(...sessions.map(s => s.score)) : 0;
        if (session.score > bestPrev && sessions.length > 0) {
          points += POINTS.PERSONAL_BEST;
        }
        
        await awardPoints(points);
      } catch (error) {
        handleFirestoreError(error, OperationType.WRITE, 'sessions');
      }
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSession) return;

    onUpdateSession(editingSession);
    setEditingSession(null);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="p-6 max-w-2xl mx-auto space-y-8"
    >
      <header className="flex justify-between items-end">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Training Log</h1>
          <p className="text-gray-500 text-sm">Track your progress to perfection</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsAdding(true)}
          className="bg-shooting-blue text-white p-3 rounded-2xl shadow-lg shadow-shooting-blue/20"
        >
          <Plus size={24} />
        </motion.button>
      </header>

      {/* Stats Summary */}
      <div className="bg-shooting-black text-white p-6 rounded-3xl space-y-6 overflow-hidden relative">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Total Sessions</p>
            <p className="text-4xl font-bold">{sessions.length}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Best Score</p>
            <p className="text-4xl font-bold text-shooting-gold">
              {sessions.length > 0 ? Math.max(...sessions.map(s => s.score)) : '--'}
            </p>
          </div>
        </div>
      </div>

      {/* Session List */}
      <div className="space-y-4">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1 flex items-center gap-2">
          <History size={14} /> Session History
        </h2>
        <div className="space-y-3">
          {sessions.map(session => (
            <div key={session.id} className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center justify-between group">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-shooting-blue bg-shooting-blue/5 px-2 py-0.5 rounded-md">
                    {session.type}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium">
                    {new Date(session.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 group/note">
                  <p className="text-sm font-medium text-gray-700 line-clamp-1">
                    {session.notes || 'No notes provided'}
                  </p>
                  <button 
                    onClick={() => setEditingSession(session)}
                    className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-shooting-blue transition-all"
                  >
                    <Edit2 size={12} />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-mono font-black text-shooting-black">{session.score}</p>
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-tighter">Points</p>
              </div>
            </div>
          ))}
          {sessions.length === 0 && (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-300">
                <Target size={32} />
              </div>
              <p className="text-gray-400 text-sm">Your training journey starts here.<br/>Record your first session!</p>
            </div>
          )}
        </div>
      </div>

      {/* Add Session Modal */}
      <AnimatePresence>
        {isAdding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="font-bold text-lg">Log Session</h2>
                <button onClick={() => setIsAdding(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={20} />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Discipline</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Air Pistol', 'Rapid Fire', 'Sport'].map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setNewSession({ ...newSession, type: type as any })}
                        className={cn(
                          "py-2 rounded-xl text-xs font-bold transition-all border",
                          newSession.type === type 
                            ? "bg-shooting-blue text-white border-shooting-blue" 
                            : "bg-gray-50 text-gray-500 border-gray-100 hover:border-gray-200"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Score</label>
                  <input
                    type="number"
                    required
                    min="0"
                    max="600"
                    placeholder="e.g. 574"
                    value={newSession.score || ''}
                    onChange={e => setNewSession({ ...newSession, score: Number(e.target.value) })}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-2xl font-mono font-bold focus:ring-2 focus:ring-shooting-blue focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Notes</label>
                  <textarea
                    placeholder="How was your stance? Any trigger issues?"
                    value={newSession.notes}
                    onChange={e => setNewSession({ ...newSession, notes: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-shooting-blue focus:border-transparent outline-none transition-all h-24 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-shooting-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-lg shadow-black/10"
                >
                  <Save size={20} /> Save Session
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit Notes Modal */}
      <AnimatePresence>
        {editingSession && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <div className="space-y-1">
                  <h2 className="font-bold text-lg">Edit Session Notes</h2>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                    {editingSession.type} • {new Date(editingSession.date).toLocaleDateString()}
                  </p>
                </div>
                <button onClick={() => setEditingSession(null)} className="text-gray-400 hover:text-gray-600">
                  <X size={20} />
                </button>
              </div>
              <form onSubmit={handleUpdate} className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Notes</label>
                  <textarea
                    placeholder="Update your session notes..."
                    value={editingSession.notes}
                    onChange={e => setEditingSession({ ...editingSession, notes: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-shooting-blue focus:border-transparent outline-none transition-all h-32 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-shooting-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-lg shadow-black/10"
                >
                  <Save size={20} /> Update Notes
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
