import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, CheckCircle2, History, ChevronRight, X, Save, TrendingUp, Activity } from 'lucide-react';
import { Drill, DrillAttempt } from '../types';
import { DRILLS } from '../constants';
import { cn } from '../lib/utils';
import { useAuth } from '../context/AuthContext';
import { db, POINTS, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

function WobbleSimulator() {
  const [amplitude, setAmplitude] = useState(20);
  const [frequency, setFrequency] = useState(1.5);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId: number;
    const startTime = Date.now();

    const update = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      
      // Complex wobble using multiple sine waves for more realism
      const x = Math.sin(elapsed * frequency) * amplitude + 
                Math.sin(elapsed * frequency * 2.3) * (amplitude * 0.3);
      const y = Math.cos(elapsed * frequency * 1.1) * amplitude + 
                Math.cos(elapsed * frequency * 1.7) * (amplitude * 0.4);

      setPosition({ x, y });
      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [amplitude, frequency]);

  return (
    <div className="space-y-6 bg-gray-900 p-6 rounded-3xl border border-gray-800 shadow-2xl">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
          <Activity size={14} className="text-shooting-blue" />
          Wobble Simulator (COG HIT)
        </h4>
      </div>

      <div className="relative aspect-square w-full max-w-[280px] mx-auto bg-white rounded-full flex items-center justify-center overflow-hidden border-8 border-gray-800 shadow-inner">
        {/* Target Rings */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className={cn(
              "absolute rounded-full border",
              i >= 8 ? "bg-black border-gray-800" : "border-gray-200"
            )}
            style={{ 
              width: `${(10-i)*10}%`, 
              height: `${(10-i)*10}%`,
              zIndex: 10 - i
            }}
          />
        ))}
        
        {/* Aiming Point (Reticle) */}
        <motion.div 
          className="absolute w-4 h-4 z-10"
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", damping: 20, stiffness: 150, mass: 0.5 }}
        >
          <div className="absolute inset-0 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
          <div className="absolute top-1/2 left-[-10px] right-[-10px] h-[1px] bg-red-500/50" />
          <div className="absolute left-1/2 top-[-10px] bottom-[-10px] w-[1px] bg-red-500/50" />
        </motion.div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span>Amplitude (Movement Range)</span>
            <div className="flex items-center gap-2">
              <span className="text-shooting-blue font-mono">{amplitude}</span>
              <input 
                type="number" 
                value={amplitude}
                min="0"
                max="100"
                onChange={(e) => setAmplitude(Number(e.target.value))}
                className="w-14 bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white text-right outline-none focus:border-shooting-blue transition-colors font-mono text-xs"
                placeholder="Val"
              />
              <span className="text-gray-500 lowercase">px</span>
            </div>
          </div>
          <input 
            type="range" 
            min="5" 
            max="60" 
            value={amplitude} 
            onChange={(e) => setAmplitude(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-shooting-blue"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span>Frequency (Speed)</span>
            <div className="flex items-center gap-1.5">
              <input 
                type="number" 
                value={frequency}
                min="0.1"
                max="10"
                step="0.1"
                onChange={(e) => setFrequency(Number(e.target.value))}
                className="w-12 bg-gray-800 border border-gray-700 rounded px-1.5 py-0.5 text-shooting-blue text-right outline-none focus:border-shooting-blue transition-colors font-mono"
              />
              <span className="text-gray-500 lowercase">hz</span>
            </div>
          </div>
          <input 
            type="range" 
            min="0.5" 
            max="5" 
            step="0.1"
            value={frequency} 
            onChange={(e) => setFrequency(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-shooting-blue"
          />
        </div>
      </div>

      <p className="text-[10px] text-gray-500 italic text-center">
        Higher amplitude represents poor stability. Higher frequency represents muscle tremors or fatigue.
      </p>
    </div>
  );
}

function GripPressureSimulator() {
  const [pressure, setPressure] = useState(65);
  const [isMilking, setIsMilking] = useState(false);

  return (
    <div className="space-y-6 bg-gray-900 p-6 rounded-3xl border border-gray-800 shadow-2xl">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
          <Activity size={14} className="text-shooting-blue" />
          Grip Pressure Simulator
        </h4>
      </div>

      <div className="relative h-32 flex items-center justify-center gap-8">
        {/* Handshake Indicator */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-24 w-8 bg-gray-800 rounded-full relative overflow-hidden">
            <motion.div 
              className={cn(
                "absolute bottom-0 w-full transition-colors duration-300",
                pressure >= 60 && pressure <= 75 ? "bg-green-500" : "bg-shooting-red"
              )}
              animate={{ height: `${pressure}%` }}
            />
            {/* Target Zone */}
            <div className="absolute bottom-[60%] top-[25%] w-full border-y border-white/30 bg-white/10" />
          </div>
          <span className="text-[8px] font-bold text-gray-500 uppercase">Pressure</span>
        </div>

        {/* Visual Feedback */}
        <div className="flex-1 space-y-4">
          <div className="p-3 rounded-xl bg-gray-800/50 border border-gray-700">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Status</p>
            <p className={cn(
              "text-sm font-bold",
              pressure >= 60 && pressure <= 75 ? "text-green-500" : "text-shooting-red"
            )}>
              {pressure < 60 ? "TOO LIGHT" : pressure > 75 ? "TOO HEAVY (TREMOR)" : "OPTIMAL HANDSHAKE"}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMilking(!isMilking)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all",
                isMilking ? "bg-shooting-red text-white" : "bg-gray-800 text-gray-400"
              )}
            >
              {isMilking ? "Milking Active" : "Simulate Milking"}
            </button>
            {isMilking && (
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-[10px] text-shooting-red font-bold uppercase"
              >
                Pulsing Detected!
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <span>Adjust Pressure</span>
          <span className="text-shooting-blue font-mono">{pressure}%</span>
        </div>
        <input 
          type="range" min="0" max="100" value={pressure} 
          onChange={(e) => setPressure(Number(e.target.value))}
          className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-shooting-blue"
        />
      </div>
    </div>
  );
}

export default function ShootingDrills() {
  const [selectedDrill, setSelectedDrill] = useState<Drill | null>(null);
  const [attempts, setAttempts] = useState<DrillAttempt[]>([]);
  const [isLogging, setIsLogging] = useState(false);
  const [filter, setFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [newAttempt, setNewAttempt] = useState<Partial<DrillAttempt>>({
    successRate: 0,
    notes: ''
  });
  const { user, awardPoints } = useAuth();

  useEffect(() => {
    const saved = localStorage.getItem('drill_attempts');
    if (saved) setAttempts(JSON.parse(saved));
  }, []);

  const addAttempt = async (attempt: DrillAttempt) => {
    const updated = [attempt, ...attempts];
    setAttempts(updated);
    localStorage.setItem('drill_attempts', JSON.stringify(updated));

    // Save to Firebase if logged in
    if (user && db) {
      try {
        await addDoc(collection(db, 'drill_attempts'), {
          ...attempt,
          uid: user.uid,
          timestamp: Timestamp.now()
        });
        
        // Award points
        let points = POINTS.DRILL_COMPLETION;
        
        // Bonus for personal best
        const prevAttempts = attempts.filter(a => a.drillId === attempt.drillId);
        const bestPrev = prevAttempts.length > 0 ? Math.max(...prevAttempts.map(a => a.successRate)) : 0;
        
        if (attempt.successRate > bestPrev && prevAttempts.length > 0) {
          points += POINTS.PERSONAL_BEST;
        }
        
        await awardPoints(points);
      } catch (error) {
        console.error("Failed to save drill attempt to Firebase:", error);
      }
    }
  };

  const handleLogAttempt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDrill) return;

    const attempt: DrillAttempt = {
      id: Math.random().toString(36).substr(2, 9),
      drillId: selectedDrill.id,
      date: new Date().toISOString(),
      successRate: Number(newAttempt.successRate),
      notes: newAttempt.notes || ''
    };

    addAttempt(attempt);
    setIsLogging(false);
    setNewAttempt({ successRate: 0, notes: '' });
  };

  const getDrillAttempts = (drillId: string) => attempts.filter(a => a.drillId === drillId);
  const getAvgSuccess = (drillId: string) => {
    const drillAttempts = getDrillAttempts(drillId);
    if (drillAttempts.length === 0) return 0;
    return Math.round(drillAttempts.reduce((acc, a) => acc + a.successRate, 0) / drillAttempts.length);
  };

  const filteredDrills = filter === 'All' 
    ? DRILLS 
    : DRILLS.filter(d => d.difficulty === filter);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 max-w-2xl mx-auto space-y-8"
    >
      <header className="space-y-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Shooting Drills</h1>
          <p className="text-gray-500 text-sm">Guided exercises for technical mastery</p>
        </div>
        
        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {['All', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
            <button
              key={level}
              onClick={() => setFilter(level as any)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border",
                filter === level 
                  ? "bg-shooting-black text-white border-shooting-black" 
                  : "bg-white text-gray-500 border-gray-100 hover:border-gray-200"
              )}
            >
              {level}
            </button>
          ))}
        </div>
      </header>

      <div className="grid gap-4">
        {filteredDrills.map(drill => {
          const avg = getAvgSuccess(drill.id);
          const isTargetMet = drill.targetSuccess && avg >= drill.targetSuccess;
          
          return (
            <motion.div
              key={drill.id}
              layoutId={drill.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="p-5 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider",
                      drill.difficulty === 'Beginner' ? "bg-green-50 text-green-600" :
                      drill.difficulty === 'Intermediate' ? "bg-shooting-blue/5 text-shooting-blue" :
                      "bg-purple-50 text-purple-600"
                    )}>
                      {drill.difficulty}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {drill.type}
                    </span>
                    {isTargetMet && (
                      <span className="flex items-center gap-0.5 text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md uppercase tracking-widest">
                        <CheckCircle2 size={10} /> Target Met
                      </span>
                    )}
                    {getDrillAttempts(drill.id).length > 0 && (
                      <span className={cn(
                        "text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-widest",
                        getDrillAttempts(drill.id).length >= 5 && isTargetMet ? "bg-yellow-50 text-yellow-600" : "bg-gray-50 text-gray-500"
                      )}>
                        {getDrillAttempts(drill.id).length >= 10 && isTargetMet ? "Master" :
                         getDrillAttempts(drill.id).length >= 5 && isTargetMet ? "Expert" :
                         getDrillAttempts(drill.id).length >= 3 ? "Practitioner" : "Novice"}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    {drill.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <History size={12} /> {getDrillAttempts(drill.id).length} attempts
                    </span>
                    <span className={cn(
                      "flex items-center gap-1 font-bold",
                      isTargetMet ? "text-green-500" : "text-shooting-blue"
                    )}>
                      <TrendingUp size={12} /> Avg: {avg}%
                    </span>
                  </div>

                  {/* Progress Indicators */}
                  <div className="pt-3 space-y-3">
                    {/* Success Rate Progress */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                        <span className="text-gray-400">Success Rate Goal ({drill.targetSuccess}%)</span>
                        <span className={cn(isTargetMet ? "text-green-500" : "text-shooting-blue")}>
                          {Math.min(Math.round((avg / (drill.targetSuccess || 100)) * 100), 100)}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min((avg / (drill.targetSuccess || 100)) * 100), 100}%` }}
                          className={cn(
                            "h-full rounded-full transition-all duration-500",
                            isTargetMet ? "bg-green-500" : "bg-shooting-blue"
                          )}
                        />
                      </div>
                    </div>

                    {/* Milestone Progress */}
                    {getDrillAttempts(drill.id).length > 0 && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                          <span className="text-gray-400">
                            Next Rank: {
                              getDrillAttempts(drill.id).length < 3 ? "Practitioner" :
                              getDrillAttempts(drill.id).length < 5 || !isTargetMet ? "Expert" :
                              getDrillAttempts(drill.id).length < 10 || !isTargetMet ? "Master" : "Max Rank"
                            }
                          </span>
                          <span className="text-gray-400">
                            {getDrillAttempts(drill.id).length} / {
                              getDrillAttempts(drill.id).length < 3 ? 3 :
                              getDrillAttempts(drill.id).length < 5 ? 5 : 10
                            }
                          </span>
                        </div>
                        <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ 
                              width: `${Math.min(
                                (getDrillAttempts(drill.id).length / (
                                  getDrillAttempts(drill.id).length < 3 ? 3 :
                                  getDrillAttempts(drill.id).length < 5 ? 5 : 10
                                )) * 100, 
                                100
                              )}%` 
                            }}
                            className="h-full bg-gray-300 rounded-full transition-all duration-500"
                          />
                        </div>
                        {!isTargetMet && getDrillAttempts(drill.id).length >= 3 && (
                          <p className="text-[9px] text-shooting-blue font-bold uppercase tracking-tighter">
                            * Reach {drill.targetSuccess}% avg to unlock next rank
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedDrill(drill)}
                  className="w-10 h-10 rounded-full bg-shooting-blue/10 text-shooting-blue flex items-center justify-center hover:bg-shooting-blue hover:text-white transition-all"
                >
                  <Play size={18} fill="currentColor" />
                </button>
              </div>
            </motion.div>
          );
        })}
        {filteredDrills.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No drills found for this difficulty level.
          </div>
        )}
      </div>

      {/* Drill Detail Modal */}
      <AnimatePresence>
        {selectedDrill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
            onClick={() => setSelectedDrill(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="bg-white w-full max-w-xl rounded-t-3xl sm:rounded-3xl overflow-hidden max-h-[90vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                <h2 className="font-bold text-lg">Drill Guide</h2>
                <button onClick={() => setSelectedDrill(null)} className="text-gray-400 hover:text-gray-600">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8 overflow-y-auto space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight">{selectedDrill.title}</h3>
                  <p className="text-gray-500">{selectedDrill.description}</p>
                  
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-widest">
                      <History size={14} className="text-shooting-blue" />
                      {getDrillAttempts(selectedDrill.id).length} Attempts
                    </div>
                    <div className={cn(
                      "flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest",
                      getAvgSuccess(selectedDrill.id) >= (selectedDrill.targetSuccess || 0) ? "text-green-500" : "text-shooting-blue"
                    )}>
                      <TrendingUp size={14} />
                      Avg: {getAvgSuccess(selectedDrill.id)}%
                    </div>
                  </div>

                  {/* Modal Progress Bar */}
                  <div className="pt-4 space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                      <span className="text-gray-400">Progress to Target ({selectedDrill.targetSuccess}%)</span>
                      <span className={cn(getAvgSuccess(selectedDrill.id) >= (selectedDrill.targetSuccess || 0) ? "text-green-500" : "text-shooting-blue")}>
                        {Math.min(Math.round((getAvgSuccess(selectedDrill.id) / (selectedDrill.targetSuccess || 100)) * 100), 100)}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min((getAvgSuccess(selectedDrill.id) / (selectedDrill.targetSuccess || 100)) * 100), 100}%` }}
                        className={cn(
                          "h-full rounded-full transition-all duration-700",
                          getAvgSuccess(selectedDrill.id) >= (selectedDrill.targetSuccess || 0) ? "bg-green-500" : "bg-shooting-blue"
                        )}
                      />
                    </div>
                  </div>
                </div>

                {/* Video Demonstration */}
                {selectedDrill.videoUrl && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Video Demonstration</h4>
                    <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-inner relative group border border-gray-100">
                      <iframe
                        src={selectedDrill.videoUrl}
                        title={selectedDrill.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}

                {/* Technical Image */}
                {selectedDrill.imageUrl && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Technical Reference</h4>
                    <div className="w-full aspect-video bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center">
                      <img 
                        src={selectedDrill.imageUrl} 
                        alt={selectedDrill.title} 
                        className="max-w-full max-h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                )}

                {/* Wobble Simulator for COG HIT Drill */}
                {selectedDrill.id === 'drill-17' && (
                  <WobbleSimulator />
                )}

                {/* Grip Pressure Simulator for Grip Consistency Drill */}
                {selectedDrill.id === 'drill-16' && (
                  <GripPressureSimulator />
                )}

                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Step-by-Step Instructions</h4>
                  <div className="space-y-4">
                    {selectedDrill.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-shooting-blue/10 text-shooting-blue flex items-center justify-center text-xs font-bold">
                          {idx + 1}
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedDrill.visualCues && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Visual Cues</h4>
                    <div className="grid gap-3">
                      <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                        <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-1">Correct</p>
                        <p className="text-sm text-green-800">{selectedDrill.visualCues.correct}</p>
                      </div>
                      <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
                        <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">Incorrect</p>
                        <p className="text-sm text-red-800">{selectedDrill.visualCues.incorrect}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-gray-100 flex gap-4">
                  <button
                    onClick={() => setIsLogging(true)}
                    className="flex-1 bg-shooting-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
                  >
                    <Save size={18} /> Log Attempt
                  </button>
                </div>

                {/* Recent Attempts for this drill */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Recent Performance</h4>
                  <div className="space-y-2">
                    {getDrillAttempts(selectedDrill.id).slice(0, 3).map(attempt => (
                      <div key={attempt.id} className="bg-gray-50 p-3 rounded-xl flex justify-between items-center">
                        <div>
                          <p className="text-xs font-bold text-gray-700">{new Date(attempt.date).toLocaleDateString()}</p>
                          <p className="text-[10px] text-gray-400">{attempt.notes || 'No notes'}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-mono font-bold text-shooting-blue">{attempt.successRate}%</p>
                        </div>
                      </div>
                    ))}
                    {getDrillAttempts(selectedDrill.id).length === 0 && (
                      <p className="text-xs text-gray-400 text-center py-4 italic">No attempts logged yet.</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Log Attempt Modal */}
      <AnimatePresence>
        {isLogging && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="font-bold text-lg">Log Success Rate</h2>
                <button onClick={() => setIsLogging(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={20} />
                </button>
              </div>
              <form onSubmit={handleLogAttempt} className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Success Rate (%)</label>
                    <span className="text-3xl font-mono font-bold text-shooting-blue">{newAttempt.successRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={newAttempt.successRate}
                    onChange={e => setNewAttempt({ ...newAttempt, successRate: Number(e.target.value) })}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-shooting-blue"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    <span>Needs Work</span>
                    <span>Olympic Level</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Notes</label>
                  <textarea
                    placeholder="Focus points, stability issues, etc."
                    value={newAttempt.notes}
                    onChange={e => setNewAttempt({ ...newAttempt, notes: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-shooting-blue focus:border-transparent outline-none transition-all h-24 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-shooting-blue text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
                >
                  Save Attempt
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
