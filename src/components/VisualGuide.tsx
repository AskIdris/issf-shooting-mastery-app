import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Target, Wind, Hand, Move, Info, User, Footprints, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

export default function VisualGuide() {
  const [gripMode, setGripMode] = React.useState<'correct' | 'milking'>('correct');
  const [selectedPoint, setSelectedPoint] = React.useState<string | null>(null);
  const [sightX, setSightX] = React.useState(0);
  const [sightY, setSightY] = React.useState(0);
  const [triggerPressure, setTriggerPressure] = React.useState(0);
  const [isPressing, setIsPressing] = React.useState(false);
  const [lastShot, setLastShot] = React.useState<{ x: number, y: number } | null>(null);
  const [isWobbling, setIsWobbling] = React.useState(true);
  const [weightShift, setWeightShift] = React.useState(0); // -1 to 1 (left to right)
  const [isDrillActive, setIsDrillActive] = React.useState(false);
  const [stabilityData, setStabilityData] = React.useState<number[]>([]);
  const [holdTimer, setHoldTimer] = React.useState(0);
  const [tremor, setTremor] = React.useState({ x: 0, y: 0 });

  const [isSightSwaying, setIsSightSwaying] = React.useState(false);
  const [sightSway, setSightSway] = React.useState({ x: 0, y: 0 });

  // Sight sway simulation
  React.useEffect(() => {
    let frameId: number;
    const startTime = Date.now();

    const update = () => {
      if (isSightSwaying) {
        const elapsed = (Date.now() - startTime) / 1000;
        setSightSway({
          x: Math.sin(elapsed * 1.2) * 8 + Math.sin(elapsed * 2.1) * 3,
          y: Math.cos(elapsed * 0.9) * 8 + Math.cos(elapsed * 1.7) * 3
        });
      } else {
        setSightSway({ x: 0, y: 0 });
      }
      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [isSightSwaying]);

  // Stability simulation logic
  React.useEffect(() => {
    let interval: any;
    let timerInterval: any;
    let tremorInterval: any;

    if (isDrillActive) {
      // Data logging interval
      interval = setInterval(() => {
        setStabilityData(prev => {
          const base = prev.length > 0 ? prev[prev.length - 1] : 85;
          const drift = (Math.random() - 0.45) * 4; 
          const newVal = Math.max(40, Math.min(98, base + drift));
          return [...prev, newVal].slice(-50);
        });
      }, 200);

      // Hold timer
      timerInterval = setInterval(() => {
        setHoldTimer(prev => prev + 1);
      }, 1000);

      // High-frequency tremor for visual feedback
      tremorInterval = setInterval(() => {
        setStabilityData(currentData => {
          const lastVal = currentData[currentData.length - 1] || 90;
          const intensity = (100 - lastVal) / 5;
          setTremor({
            x: (Math.random() - 0.5) * intensity,
            y: (Math.random() - 0.5) * intensity
          });
          return currentData;
        });
      }, 50);
    } else {
      setStabilityData([]);
      setHoldTimer(0);
      setTremor({ x: 0, y: 0 });
    }
    return () => {
      clearInterval(interval);
      clearInterval(timerInterval);
      clearInterval(tremorInterval);
    };
  }, [isDrillActive]);

  // Trigger simulation logic
  React.useEffect(() => {
    let interval: any;
    if (isPressing) {
      interval = setInterval(() => {
        setTriggerPressure(prev => {
          const next = prev + 2;
          if (next >= 100) {
            // Shot breaks!
            const jerk = prev > 80 ? 0 : (80 - prev) / 2; // Jerk if pressed too fast
            setLastShot({ 
              x: (Math.random() - 0.5) * 5 + jerk * (Math.random() > 0.5 ? 1 : -1), 
              y: (Math.random() - 0.5) * 5 + jerk 
            });
            setIsPressing(false);
            return 0;
          }
          return next;
        });
      }, 50);
    } else {
      setTriggerPressure(0);
    }
    return () => clearInterval(interval);
  }, [isPressing]);

  const pressurePoints = [
    { id: 'v-seat', x: 100, y: 45, label: 'V-Seat (Backstrap)', desc: 'High pressure in the web of the hand for maximum recoil control.' },
    { id: 'front-back', x: 100, y: 110, label: '3-Point Pressure', desc: 'Primary pressure is front-to-back, not side-to-side.' },
    { id: 'trigger-iso', x: 155, y: 80, label: 'Trigger Isolation', desc: 'The index finger must move independently without touching the frame.' },
    { id: 'pinky-relax', x: 100, y: 155, label: 'Pinky Support', desc: 'The pinky provides stability but should not squeeze inward.' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="p-6 max-w-2xl mx-auto space-y-8"
    >
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Visual Mastery Guide</h1>
        <p className="text-gray-500 text-sm">Interactive diagrams for technical form</p>
      </header>

      {/* Olympic Stance & Foot Placement */}
      <section id="olympic-stance-alignment" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-shooting-black">
          <User size={24} />
          <h2 className="font-bold text-lg">Olympic Stance & Alignment</h2>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          The Olympic stance requires a 85-90 degree angle to the target. Feet should be spread shoulder-width apart or slightly less. 
          Body weight can be shifted slightly to the left leg. The body is erect with a moderate bend to the left to counter-balance 
          the weight of the outstretched arm.
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="space-y-4 w-full max-w-[320px]">
            <div className="relative aspect-square bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden">
              {/* Custom SVG Stance Diagram */}
              <svg viewBox="0 0 200 200" className="w-full h-full p-4">
                {/* Target Line */}
                <line x1="100" y1="20" x2="100" y2="0" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" />
                <circle cx="100" cy="10" r="5" fill="#ef4444" />
                <text x="110" y="15" fontSize="8" fill="#ef4444" fontWeight="bold">TARGET</text>

                {/* Body Axis */}
                <g transform="rotate(-85, 100, 110)">
                  {/* Shoulders */}
                  <line x1="70" y1="110" x2="130" y2="110" stroke="#1e40af" strokeWidth="8" strokeLinecap="round" />
                  {/* Arm */}
                  <line x1="130" y1="110" x2="130" y2="50" stroke="#1e40af" strokeWidth="6" strokeLinecap="round" />
                  {/* Pistol */}
                  <rect x="125" y="35" width="10" height="15" rx="2" fill="#1f2937" />
                  
                  {/* Feet */}
                  <rect x="65" y="150" width="15" height="30" rx="4" fill="#64748b" transform="rotate(-5, 72.5, 165)" />
                  <rect x="120" y="150" width="15" height="30" rx="4" fill="#64748b" transform="rotate(5, 127.5, 165)" />
                  
                  {/* Center of Gravity (Movable) */}
                  <motion.circle 
                    animate={{ x: weightShift * 20 }}
                    cx="100" cy="110" r="4" fill="#f59e0b" 
                  />
                  <motion.circle 
                    animate={{ x: weightShift * 20 }}
                    cx="100" cy="110" r="8" stroke="#f59e0b" strokeWidth="1" fill="none" 
                  />
                  
                  {/* Weight Indicators */}
                  <motion.rect 
                    animate={{ height: 10 + (weightShift < 0 ? Math.abs(weightShift) * 20 : 0) }}
                    x="65" y="185" width="15" fill="#f59e0b" opacity="0.3" 
                  />
                  <motion.rect 
                    animate={{ height: 10 + (weightShift > 0 ? weightShift * 20 : 0) }}
                    x="120" y="185" width="15" fill="#f59e0b" opacity="0.3" 
                  />
                </g>

                {/* Callouts */}
                <text x="20" y="180" fontSize="8" fill="#64748b">85-90° Body Angle</text>
                <text x="140" y="180" fontSize="8" fill="#64748b">Stable Foundation</text>
              </svg>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <span>Weight Distribution</span>
                <span className={cn(Math.abs(weightShift) < 0.2 ? "text-green-500" : "text-shooting-gold")}>
                  {weightShift < -0.2 ? "LEFT HEAVY" : weightShift > 0.2 ? "RIGHT HEAVY" : "BALANCED"}
                </span>
              </div>
              <input 
                type="range" min="-1" max="1" step="0.1" value={weightShift} 
                onChange={(e) => setWeightShift(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-shooting-gold"
              />
            </div>
          </div>
          <img 
            src="/assets/stance.png" 
            alt="Olympic Stance" 
            className="w-full max-w-[320px] rounded-2xl border border-gray-100 shadow-sm"
            referrerPolicy="no-referrer"
          />

          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Key Principles</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-shooting-blue mt-1.5 shrink-0" />
                  <span><b>Body Angle:</b> Position your body at a 85-90 degree angle to the target.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-shooting-blue mt-1.5 shrink-0" />
                  <span><b>Balance:</b> Anchor the left hand in a pocket or belt to relax the left side.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-shooting-blue mt-1.5 shrink-0" />
                  <span><b>Head Position:</b> Keep the head erect and relaxed; turn only to see the sights.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Balance Points Diagram */}
      <section id="balance-points-diagram" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-shooting-gold">
          <Footprints size={24} />
          <h2 className="font-bold text-lg">Balance & Weight Distribution</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              Stability starts from the ground up. Weight should be evenly distributed between both feet, 
              with a slight bias towards the <b>balls of the feet</b> to prevent swaying backwards.
            </p>
            <div className="bg-shooting-gold/5 p-4 rounded-2xl border border-shooting-gold/10">
              <p className="text-xs font-bold text-shooting-gold uppercase mb-1">The 50/50 Rule</p>
              <p className="text-[10px] text-gray-600">50% weight on each foot. 60% weight on the balls of the feet, 40% on the heels.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden">
              {/* Custom SVG Balance Diagram */}
              <svg viewBox="0 0 200 200" className="w-full h-full p-4">
                {/* Feet Outlines */}
                <rect x="40" y="50" width="40" height="100" rx="20" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                <rect x="120" y="50" width="40" height="100" rx="20" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                
                {/* Pressure Points - Left Foot */}
                <circle cx="60" cy="75" r="12" fill="#f59e0b" fillOpacity="0.6" /> {/* Ball */}
                <circle cx="60" cy="130" r="10" fill="#f59e0b" fillOpacity="0.4" /> {/* Heel */}
                
                {/* Pressure Points - Right Foot */}
                <circle cx="140" cy="75" r="12" fill="#f59e0b" fillOpacity="0.6" /> {/* Ball */}
                <circle cx="140" cy="130" r="10" fill="#f59e0b" fillOpacity="0.4" /> {/* Heel */}
                
                {/* Labels */}
                <text x="50" y="170" fontSize="8" fill="#64748b" fontWeight="bold">50%</text>
                <text x="130" y="170" fontSize="8" fill="#64748b" fontWeight="bold">50%</text>
                <text x="20" y="78" fontSize="7" fill="#b45309">60% Ball</text>
                <text x="20" y="133" fontSize="7" fill="#b45309">40% Heel</text>
              </svg>
            </div>
            <img 
              src="/assets/stance-points.png" 
              alt="Balance Points" 
              className="w-full rounded-2xl border border-gray-100 shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Grip Mechanics Diagram */}
      <section id="grip-mechanics-diagram" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-shooting-blue">
            <Hand size={24} />
            <h2 className="font-bold text-lg">Grip Mechanics & Pressure</h2>
          </div>
          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button 
              onClick={() => setGripMode('correct')}
              className={cn(
                "px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all",
                gripMode === 'correct' ? "bg-white text-shooting-blue shadow-sm" : "text-gray-400"
              )}
            >
              Correct
            </button>
            <button 
              onClick={() => setGripMode('milking')}
              className={cn(
                "px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all",
                gripMode === 'milking' ? "bg-white text-shooting-red shadow-sm" : "text-gray-400"
              )}
            >
              Milking
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 relative">
            {/* Shot Impact Preview */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 p-2 shadow-lg z-20">
              <p className="text-[8px] font-bold text-gray-400 uppercase mb-1 text-center">Shot Impact</p>
              <div className="relative w-full h-16 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="20" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                  <circle cx="50" cy="50" r="12" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                  <circle cx="50" cy="50" r="4" fill="#334155" />
                  
                  <motion.circle 
                    initial={{ cx: 50, cy: 50, scale: 1 }}
                    animate={gripMode === 'milking' ? { 
                      cx: [50 - 10, 50 - 12, 50 - 10], 
                      cy: [50 + 12, 50 + 15, 50 + 12],
                      scale: [1, 1.1, 1]
                    } : { 
                      cx: [50, 51, 49, 50], 
                      cy: [50, 49, 51, 50],
                      scale: 1 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    r="3" 
                    fill={gripMode === 'milking' ? "#ef4444" : "#10b981"} 
                    className="transition-colors duration-300"
                  />
                  {gripMode === 'milking' && (
                    <motion.line 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      x1="50" y1="50" x2="35" y2="75" 
                      stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" 
                    />
                  )}
                </svg>
              </div>
              <p className={cn(
                "text-[7px] font-bold mt-1 text-center",
                gripMode === 'milking' ? "text-shooting-red" : "text-green-600"
              )}>
                {gripMode === 'milking' ? "LOW-LEFT DRIFT" : "CENTERED"}
              </p>
            </div>

            <div className="relative aspect-square bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden">
              {/* Custom SVG Grip Diagram */}
              <svg viewBox="0 0 200 200" className="w-full h-full p-4">
                <defs>
                  <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                  </marker>
                  <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#2563eb" />
                  </marker>
                  <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                  </marker>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Pistol Assembly (Handle + Muzzle) */}
                <motion.g
                  animate={gripMode === 'milking' ? { 
                    rotate: [0, 1.5, 0], 
                    y: [0, 2, 0],
                    x: [0, -1, 0]
                  } : { rotate: 0, y: 0, x: 0 }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  style={{ originX: "100px", originY: "45px" }}
                >
                  {/* Muzzle (Top part) */}
                  <rect x="80" y="20" width="40" height="30" rx="2" fill="#374151" />
                  {/* Pistol Handle */}
                  <rect x="80" y="40" width="40" height="120" rx="4" fill="#1f2937" />
                  
                  {/* Sights on Muzzle */}
                  <rect x="95" y="15" width="10" height="5" fill="#111827" />
                </motion.g>
                
                {/* Hand Outline */}
                <path 
                  d="M60 140 Q 60 160, 80 160 L 120 160 Q 140 160, 140 140 L 140 60 Q 140 40, 120 40 L 80 40 Q 60 40, 60 60 Z" 
                  fill="none" 
                  stroke={gripMode === 'milking' ? "#ef4444" : "#64748b"} 
                  strokeWidth="2" 
                  className="transition-colors duration-300"
                />
                
                {/* Correct Pressure Arrows */}
                <AnimatePresence>
                  {gripMode === 'correct' && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <line x1="100" y1="30" x2="100" y2="42" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead-green)" />
                      <line x1="100" y1="170" x2="100" y2="158" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead-green)" />
                      <text x="100" y="25" fontSize="6" fill="#10b981" fontWeight="bold" textAnchor="middle">FRONT-BACK PRESSURE</text>
                    </motion.g>
                  )}
                </AnimatePresence>
                
                {/* Milking Indicators (Side Pressure) */}
                <AnimatePresence>
                  {gripMode === 'milking' && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Pulsating Error Highlight */}
                      <motion.circle
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ 
                          scale: [1, 1.15, 1],
                          opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        cx="70" cy="130" r="35"
                        fill="#ef4444"
                        stroke="none"
                      />
                      <motion.circle
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        cx="70" cy="130" r="35"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="1"
                        strokeDasharray="4,2"
                      />

                      {/* Side Pressure Arrows showing 'Milking' */}
                      <line x1="55" y1="110" x2="75" y2="110" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead-red)" />
                      <line x1="55" y1="130" x2="75" y2="130" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead-red)" />
                      <line x1="55" y1="150" x2="75" y2="150" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead-red)" />
                      
                      <text x="30" y="130" fontSize="6" fill="#ef4444" fontWeight="bold" textAnchor="middle" transform="rotate(-90, 30, 130)">SYMPATHETIC SQUEEZE</text>
                      
                      {/* Shaking effect for milking fingers */}
                      <motion.path 
                        d="M60 110 L 80 110 M 60 130 L 80 130 M 60 150 L 80 150" 
                        stroke="#ef4444" 
                        strokeWidth="4" 
                        strokeLinecap="round"
                        animate={{ 
                          x: [-1.5, 1.5, -1.5],
                          strokeWidth: [4, 5.5, 4]
                        }}
                        transition={{ 
                          x: { duration: 0.1, repeat: Infinity },
                          strokeWidth: { duration: 0.4, repeat: Infinity, ease: "easeInOut" }
                        }}
                      />
                    </motion.g>
                  )}
                </AnimatePresence>

                {/* Trigger Finger */}
                <motion.path 
                  d="M140 70 Q 170 70, 170 90 L 125 90" 
                  fill="none" 
                  stroke="#2563eb" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  animate={gripMode === 'milking' 
                    ? { x: [0, -3, 0], y: [0, 1, 0] } 
                    : { x: [0, -2, 0] }
                  }
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Interactive Hotspots */}
                {pressurePoints.map(point => (
                  <g 
                    key={point.id} 
                    className="cursor-pointer group" 
                    onClick={() => setSelectedPoint(selectedPoint === point.id ? null : point.id)}
                  >
                    <motion.circle
                      cx={point.x} cy={point.y} r="8"
                      fill={selectedPoint === point.id ? "#2563eb" : "#10b981"}
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      filter="url(#glow)"
                    />
                    <circle cx={point.x} cy={point.y} r="3" fill="white" />
                    <text 
                      x={point.x} y={point.y - 12} 
                      fontSize="5" 
                      fill={selectedPoint === point.id ? "#1e40af" : "#065f46"} 
                      fontWeight="bold" 
                      textAnchor="middle"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {point.label}
                    </text>
                  </g>
                ))}
                
                {gripMode === 'milking' && (
                  <text x="100" y="105" fontSize="10" fill="#ef4444" fontWeight="black" textAnchor="middle" filter="url(#glow)">ERROR: MILKING</text>
                )}
              </svg>
            </div>
            
            {/* Hotspot Detail Panel */}
            <AnimatePresence mode="wait">
              {selectedPoint && (
                <motion.div
                  key={selectedPoint}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-4 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Info size={14} className="text-blue-600" />
                      <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                        {pressurePoints.find(p => p.id === selectedPoint)?.label}
                      </h4>
                    </div>
                    <button onClick={() => setSelectedPoint(null)} className="text-blue-400 hover:text-blue-600">
                      <Info size={12} />
                    </button>
                  </div>
                  <p className="text-[10px] text-blue-800 leading-relaxed">
                    {pressurePoints.find(p => p.id === selectedPoint)?.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <img 
              src="/assets/grip.png" 
              alt="Grip Mechanics" 
              className="w-full rounded-2xl border border-gray-100 shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {gripMode === 'correct' ? 'The 3-Point Pressure System' : 'The "Milking" Error'}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {gripMode === 'correct' 
                  ? 'Pressure is applied primarily from the front and back. The weight rests on the middle finger, while the index finger remains completely free to move independently.'
                  : 'Milking occurs when the lower three fingers (middle, ring, pinky) tighten in sympathy with the trigger finger. This pulls the muzzle down and to the side (low-left for right-handed shooters).'}
              </p>
            </div>
            <div className={cn(
              "p-4 rounded-2xl border transition-colors duration-300",
              gripMode === 'correct' ? "bg-green-50 border-green-100" : "bg-shooting-red/5 border-shooting-red/10"
            )}>
              <p className={cn(
                "text-xs font-bold uppercase mb-1",
                gripMode === 'correct' ? "text-green-600" : "text-shooting-red"
              )}>
                {gripMode === 'correct' ? 'Correct Form' : 'Warning: Milking Detected'}
              </p>
              <p className="text-[10px] text-gray-600">
                {gripMode === 'correct'
                  ? 'Keep your side pressure minimal. The lower fingers should act as a cage, not a clamp. Focus on the backstrap pressure.'
                  : 'Notice how the lateral pressure from the lower fingers shifts the pistol alignment. This is the most common cause of low-left groups.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sight Alignment & COG Hit Simulator */}
      <section id="sight-alignment-simulator" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-shooting-blue">
            <Eye size={24} />
            <h2 className="font-bold text-lg">Sight Alignment & COG Hit Simulator</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Natural Sway</span>
              <button 
                onClick={() => setIsSightSwaying(!isSightSwaying)}
                className={cn(
                  "w-8 h-4 rounded-full transition-colors relative",
                  isSightSwaying ? "bg-shooting-blue" : "bg-gray-200"
                )}
              >
                <div className={cn(
                  "absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all",
                  isSightSwaying ? "left-4.5" : "left-0.5"
                )} />
              </button>
            </div>
            <button 
              onClick={() => { setSightX(0); setSightY(0); setIsSightSwaying(false); }}
              className="text-[10px] font-bold uppercase tracking-widest text-shooting-blue bg-blue-50 px-3 py-1 rounded-lg"
            >
              Reset
            </button>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 leading-relaxed">
          The top of the front sight must be level with the top of the rear sight. 
          <b> COG (Center of Gravity) hits</b> occur when the aiming point is centered within your natural movement area.
          Small errors at the pistol (angular error) result in large misses at 10m.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="relative aspect-video bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800 overflow-hidden shadow-2xl">
              {/* Sight SVG */}
              <svg viewBox="0 0 200 100" className="w-full h-full p-4">
                <motion.g
                  animate={{ x: sightSway.x * 0.5, y: sightSway.y * 0.5 }}
                  transition={{ type: "spring", damping: 20, stiffness: 100 }}
                >
                  {/* Rear Sight */}
                  <path d="M40 80 L160 80 L160 40 L125 40 L125 70 L75 70 L75 40 L40 40 Z" fill="#374151" />
                  
                  {/* Front Sight (Movable) */}
                  <motion.rect 
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: sightX * 15, y: sightY * 15 }}
                    x="85" y="40" width="30" height="30" fill="#1f2937" 
                  />
                  
                  {/* Alignment Guides */}
                  <line x1="40" y1="40" x2="160" y2="40" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5" />
                </motion.g>
              </svg>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[8px] font-bold text-gray-500 uppercase tracking-widest">
                <span>Rear Sight Notch</span>
                <span>Front Sight Blade</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>Horizontal Alignment (Angular Error)</span>
                  <span className={cn(Math.abs(sightX) < 0.1 ? "text-green-500" : "text-shooting-red")}>
                    {sightX === 0 ? "PERFECT" : sightX > 0 ? "RIGHT ERROR" : "LEFT ERROR"}
                  </span>
                </div>
                <input 
                  type="range" min="-1" max="1" step="0.01" value={sightX} 
                  onChange={(e) => setSightX(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-shooting-blue"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>Vertical Alignment</span>
                  <span className={cn(Math.abs(sightY) < 0.1 ? "text-green-500" : "text-shooting-red")}>
                    {sightY === 0 ? "PERFECT" : sightY > 0 ? "LOW ERROR" : "HIGH ERROR"}
                  </span>
                </div>
                <input 
                  type="range" min="-1" max="1" step="0.01" value={sightY} 
                  onChange={(e) => setSightY(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-shooting-blue"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">COG Hit Analysis (10m Target)</h4>
            <div className="aspect-square bg-white rounded-full border-4 border-gray-100 shadow-inner relative flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 200 200" className="w-full h-full absolute inset-0">
                {/* Target Rings */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(r => (
                  <circle 
                    key={r}
                    cx="100" cy="100"
                    r={(10-r) * 10}
                    fill={r >= 7 ? '#374151' : 'transparent'}
                    stroke={r >= 7 ? '#4b5563' : '#e5e7eb'}
                    strokeWidth="1"
                  />
                ))}
                <circle cx="100" cy="100" r="1" fill="white" />
                
                {/* Aiming Area (Natural Sway) */}
                <circle 
                  cx="100" cy="100" r="15" 
                  fill="rgba(59, 130, 246, 0.1)" 
                  stroke="rgba(59, 130, 246, 0.3)" 
                  strokeWidth="1" 
                  strokeDasharray="2,2"
                />
                <text x="100" y="120" fontSize="6" fill="#3b82f6" textAnchor="middle" fontWeight="bold">AIMING AREA</text>

                {/* Impact Point */}
                <motion.circle 
                  initial={{ cx: 100, cy: 100, scale: 1 }}
                  animate={{ 
                    cx: 100 + sightX * 80 + sightSway.x * 2, 
                    cy: 100 + sightY * 80 + sightSway.y * 2,
                    scale: [1, 1.2, 1]
                  }}
                  r="3"
                  className={cn(
                    "stroke-white stroke-2 shadow-lg",
                    Math.abs(sightX) < 0.1 && Math.abs(sightY) < 0.1 ? "fill-green-500" : "fill-shooting-red"
                  )}
                />
                
                {/* Projection Trace (Laser) */}
                <motion.line 
                  x1="100" y1="100"
                  animate={{ 
                    x2: 100 + sightX * 80 + sightSway.x * 2, 
                    y2: 100 + sightY * 80 + sightSway.y * 2 
                  }}
                  stroke={Math.abs(sightX) < 0.1 && Math.abs(sightY) < 0.1 ? "#10b981" : "#ef4444"}
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                  opacity="0.3"
                />

                {/* Correction Guide */}
                {Math.abs(sightX) > 0.2 && (
                  <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <path 
                      d={sightX > 0 ? "M 160 100 L 140 100" : "M 40 100 L 60 100"} 
                      stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead-blue)" 
                    />
                    <text x={sightX > 0 ? 150 : 50} y="90" fontSize="6" fill="#3b82f6" textAnchor="middle" fontWeight="bold">
                      {sightX > 0 ? "MOVE FRONT SIGHT LEFT" : "MOVE FRONT SIGHT RIGHT"}
                    </text>
                  </motion.g>
                )}
              </svg>
            </div>
            <div className="text-center space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Angular Error Multiplier</p>
              <p className="text-lg font-mono font-bold text-shooting-blue">
                {Math.sqrt(sightX**2 + sightY**2).toFixed(2)}x
              </p>
              <p className={cn(
                "text-[9px] font-bold uppercase tracking-widest",
                Math.abs(sightX) < 0.15 && Math.abs(sightY) < 0.15 ? "text-green-500" : "text-shooting-red"
              )}>
                {Math.abs(sightX) < 0.15 && Math.abs(sightY) < 0.15 
                  ? "COG HIT ZONE" 
                  : "OUTSIDE COG ZONE"}
              </p>
              <p className="text-[9px] text-gray-500 italic">
                {Math.abs(sightX) < 0.15 && Math.abs(sightY) < 0.15 
                  ? "Sights are aligned enough to hit the 10-ring despite natural sway." 
                  : "Alignment error exceeds the margin of error for a center hit."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trigger Execution Simulator */}
      <section id="trigger-execution-simulator" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-shooting-red">
            <Wind size={24} />
            <h2 className="font-bold text-lg">Trigger Execution Simulator</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Wobble</span>
            <button 
              onClick={() => setIsWobbling(!isWobbling)}
              className={cn(
                "w-8 h-4 rounded-full transition-colors relative",
                isWobbling ? "bg-shooting-blue" : "bg-gray-200"
              )}
            >
              <div className={cn(
                "absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all",
                isWobbling ? "left-4.5" : "left-0.5"
              )} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              Master the "Surprise Break". Press and hold the trigger button slowly. 
              If you press too fast (jerking), the front sight will jump, causing a poor shot.
            </p>
            
            <motion.div 
              animate={triggerPressure === 0 && lastShot ? {
                x: [0, -2, 2, -1, 1, 0],
                y: [0, -4, 2, -1, 0]
              } : {}}
              transition={{ duration: 0.4 }}
              className="relative h-48 bg-gray-900 rounded-2xl border border-gray-800 flex items-center justify-center overflow-hidden shadow-2xl"
            >
              {/* Shot Flash */}
              <AnimatePresence>
                {triggerPressure === 0 && lastShot && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-white z-30 pointer-events-none"
                  />
                )}
              </AnimatePresence>

              {/* Sights with Wobble and Recoil */}
              <svg viewBox="0 0 200 100" className="w-full h-full p-4">
                <motion.g
                  initial={{ x: 0, y: 0 }}
                  animate={isWobbling ? { 
                    x: [0, 2, -2, 1, -1, 0], 
                    y: [0, -1, 2, -2, 1, 0] 
                  } : {}}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.g
                    animate={triggerPressure === 0 && lastShot ? {
                      y: [0, -25, 5, 0],
                      rotate: [0, -8, 2, 0],
                      scale: [1, 1.05, 1]
                    } : {}}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ originX: "100px", originY: "80px" }}
                  >
                    <path d="M40 80 L160 80 L160 40 L125 40 L125 70 L75 70 L75 40 L40 40 Z" fill="#374151" />
                    <motion.rect 
                      initial={{ y: 0 }}
                      animate={isPressing ? { 
                        y: triggerPressure > 80 ? 0 : (triggerPressure / 20) 
                      } : { y: 0 }}
                      x="85" y="40" width="30" height="30" fill="#1f2937" 
                    />
                  </motion.g>
                </motion.g>

                {/* Finger Graphic */}
                <motion.path
                  d={`M 180 80 Q ${160 - triggerPressure/5} 80, ${130 - triggerPressure/4} ${80 + triggerPressure/10}`}
                  fill="none"
                  stroke={isPressing ? `rgb(252, ${165 - triggerPressure}, ${165 - triggerPressure})` : "#fca5a5"}
                  strokeWidth="12"
                  strokeLinecap="round"
                  animate={{ 
                    opacity: isPressing ? 1 : 0.4,
                    strokeWidth: isPressing ? 12 + triggerPressure/20 : 12
                  }}
                />
                <motion.circle 
                  cx={130 - triggerPressure/4} 
                  cy={80 + triggerPressure/10} 
                  r={6 + triggerPressure/50} 
                  fill={isPressing ? `rgb(${239 + triggerPressure/10}, ${68 - triggerPressure/2}, ${68 - triggerPressure/2})` : "#ef4444"}
                  animate={{ scale: isPressing ? 1.2 + triggerPressure/500 : 1 }}
                />
              </svg>

              {/* Pressure Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                <motion.div 
                  className="h-full bg-shooting-blue"
                  animate={{ width: `${triggerPressure}%` }}
                />
              </div>
            </motion.div>

            <button
              onMouseDown={() => setIsPressing(true)}
              onMouseUp={() => setIsPressing(false)}
              onMouseLeave={() => setIsPressing(false)}
              onTouchStart={() => setIsPressing(true)}
              onTouchEnd={() => setIsPressing(false)}
              className={cn(
                "w-full py-6 rounded-2xl font-bold text-lg transition-all active:scale-95 select-none",
                isPressing ? "bg-shooting-red text-white shadow-inner" : "bg-gray-100 text-gray-400 hover:bg-gray-200"
              )}
            >
              {isPressing ? "PRESSING... HOLD STEADY" : "PRESS & HOLD TRIGGER"}
            </button>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Last Shot Result</h4>
            <div className="aspect-square bg-white rounded-full border-4 border-gray-100 shadow-inner relative flex items-center justify-center overflow-hidden">
              {/* Target Rings */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(r => (
                <div 
                  key={r}
                  className="absolute rounded-full border border-gray-200"
                  style={{ 
                    width: `${(10-r) * 10}%`, 
                    height: `${(10-r) * 10}%`,
                    backgroundColor: r >= 7 ? '#374151' : 'transparent',
                    borderColor: r >= 7 ? '#4b5563' : '#e5e7eb'
                  }}
                />
              ))}
              
              {/* Last Shot */}
              <AnimatePresence>
                {lastShot && (
                  <motion.div 
                    initial={{ scale: 5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute w-4 h-4 bg-shooting-red rounded-full border-2 border-white shadow-lg z-20 flex items-center justify-center"
                    style={{ left: `calc(50% + ${lastShot.x}px)`, top: `calc(50% + ${lastShot.y}px)` }}
                  >
                    <div className="w-1 h-1 bg-white rounded-full" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {lastShot && (
              <div className="text-center space-y-1">
                <p className="text-xs font-bold text-gray-900">
                  {Math.sqrt(lastShot.x**2 + lastShot.y**2) < 10 ? "EXCELLENT BREAK!" : "JERK DETECTED"}
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                  Score: {(10.9 - Math.sqrt(lastShot.x**2 + lastShot.y**2) / 10).toFixed(1)}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sight Picture Diagram */}
      <section id="correct-sight-picture" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-shooting-blue">
          <Target size={24} />
          <h2 className="font-bold text-lg">The Correct Sight Picture</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden">
              {/* Custom SVG Sight Picture Diagram */}
              <svg viewBox="0 0 200 200" className="w-full h-full p-4">
                {/* Target Bullseye */}
                <circle cx="100" cy="70" r="30" fill="#374151" />
                
                {/* Sights */}
                <rect x="50" y="110" width="100" height="60" fill="#1f2937" />
                <rect x="85" y="110" width="30" height="30" fill="#f9fafb" /> {/* Notch */}
                <rect x="92" y="110" width="16" height="30" fill="#1f2937" /> {/* Front Sight */}
                
                {/* Sub-Six Gap */}
                <rect x="85" y="100" width="30" height="10" fill="#ffffff" fillOpacity="0.8" />
                <text x="120" y="108" fontSize="6" fill="#64748b">SUB-SIX GAP</text>
              </svg>
            </div>
            <img 
              src="/assets/sight-picture.png" 
              alt="Sight Picture" 
              className="w-full rounded-2xl border border-gray-100 shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              The "Sub-Six" hold involves aiming slightly below the black bullseye. This creates a clear white gap 
              that makes it easier to keep the dark sights perfectly aligned without them getting lost in the black target.
            </p>
            <div className="p-4 rounded-2xl bg-shooting-blue/5 border border-shooting-blue/10">
              <p className="text-xs font-bold text-shooting-blue uppercase mb-1">Why Sub-Six?</p>
              <p className="text-[10px] text-gray-600">It provides maximum contrast for the front sight, which is where your focus must remain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Point of Aim Section */}
      <section id="natural-point-of-aim" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-shooting-gold">
          <Move size={24} />
          <h2 className="font-bold text-lg">Natural Point of Aim (NPA)</h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            NPA is the position where your body is most relaxed while aiming at the target. 
            If you have to "muscle" the gun to the center, your shots will drift as you relax.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-2xl space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">The NPA Test</h4>
            <ol className="text-xs text-gray-600 space-y-2 list-decimal pl-4">
              <li>Close your eyes and raise the pistol to the target.</li>
              <li>Settle into your most comfortable stance.</li>
              <li>Open your eyes.</li>
              <li>If the sights aren't on the target, move your FEET, not your arm.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Trigger Finger Placement */}
      <section id="trigger-finger-placement" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-shooting-red">
          <Target size={24} />
          <h2 className="font-bold text-lg">Trigger Finger Placement</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              The trigger should be pulled by the <b>center of the first phalanx</b> (the pad) of the index finger. 
              The force must be applied straight back, parallel to the barrel.
            </p>
            <div className="p-4 rounded-2xl bg-shooting-red/5 border border-shooting-red/10">
              <p className="text-xs font-bold text-shooting-red uppercase mb-1">Common Errors</p>
              <ul className="text-[10px] text-gray-600 space-y-1">
                <li>• Too much finger: Pulls the shot to the right.</li>
                <li>• Too little finger: Pushes the shot to the left.</li>
              </ul>
            </div>
          </div>

          <div className="relative aspect-square bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden">
            {/* Custom SVG Trigger Diagram */}
            <svg viewBox="0 0 200 200" className="w-full h-full p-4">
              {/* Trigger Guard */}
              <path d="M70 40 Q 50 100, 70 160" stroke="#e2e8f0" strokeWidth="4" fill="none" />
              
              {/* Trigger (with subtle vibration on break) */}
              <motion.path 
                animate={{ 
                  x: [0, 0, -2, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  times: [0, 0.75, 0.8, 1],
                  ease: "easeInOut"
                }}
                d="M100 60 Q 115 100, 100 140" 
                stroke="#1f2937" 
                strokeWidth="8" 
                fill="none" 
                strokeLinecap="round" 
              />
              
              {/* Finger Animation */}
              <motion.g
                animate={{ 
                  x: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  times: [0, 0.8, 1],
                  ease: "easeInOut"
                }}
              >
                {/* Finger Phalanx */}
                <path d="M180 100 L 110 100" stroke="#10b981" strokeWidth="14" strokeLinecap="round" />
                
                {/* Pressure Point (Pad) */}
                <motion.circle 
                  cx="110" cy="100" r="7" 
                  fill="#10b981"
                  animate={{ 
                    fill: ["#10b981", "#f59e0b", "#10b981"],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, times: [0, 0.8, 1] }}
                />

                {/* Pressure Waves */}
                <motion.circle
                  cx="110" cy="100" r="10"
                  stroke="#f59e0b"
                  strokeWidth="1"
                  fill="none"
                  animate={{ 
                    opacity: [0, 0.8, 0],
                    scale: [0.8, 1.5, 2]
                  }}
                  transition={{ duration: 4, repeat: Infinity, times: [0, 0.8, 1] }}
                />
              </motion.g>
              
              {/* Labels */}
              <text x="120" y="85" fontSize="8" fill="#10b981" fontWeight="bold">CENTER OF PAD</text>
              <text x="120" y="120" fontSize="8" fill="#10b981" fontWeight="bold">90° PULL</text>
              
              {/* Break Indicator */}
              <motion.circle
                cx="100" cy="100" r="4"
                fill="#ef4444"
                animate={{ 
                  opacity: [0, 0, 1, 0],
                  scale: [0.5, 0.5, 2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.79, 0.8, 1] }}
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Breathing & Trigger Sync */}
      <section id="execution-cycle" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-shooting-red">
          <Wind size={24} />
          <h2 className="font-bold text-lg">The Execution Cycle</h2>
        </div>
        
        <div className="relative h-24 w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center">
          <img 
            src="/assets/prepare-for-shot.png" 
            alt="Execution Cycle" 
            className="h-full w-full object-cover opacity-20 absolute"
            referrerPolicy="no-referrer"
          />
          {/* Simple Wave Diagram for Breathing */}
          <svg className="w-full h-full relative z-10" viewBox="0 0 400 100">
            <path 
              d="M0 50 Q 50 10, 100 50 T 200 50 T 300 50 L 400 50" 
              fill="none" 
              stroke="#4B79FF" 
              strokeWidth="2" 
              strokeDasharray="5,5"
            />
            <rect x="200" y="20" width="100" height="60" fill="#FFD700" fillOpacity="0.1" />
            <text x="210" y="40" fontSize="10" fontWeight="bold" fill="#CD7F32">STABILITY WINDOW (5-10s)</text>
            <circle cx="250" cy="50" r="4" fill="#FF4B4B" />
            <text x="240" y="70" fontSize="10" fontWeight="bold" fill="#FF4B4B">SHOT RELEASE</text>
          </svg>
        </div>
        
        <p className="text-xs text-gray-500 italic text-center">
          Release the trigger during the natural respiratory pause after exhaling halfway. The peak stability window occurs 5-10 seconds into the hold.
        </p>
      </section>

      {/* Progressive Overload Section */}
      <section id="progressive-overload-principle" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-shooting-gold">
          <Target size={24} />
          <h2 className="font-bold text-lg">Progressive Overload Principle</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              To improve stability, you must systematically increase the training load. This forces the body to adapt and establish a new, more stable baseline.
            </p>
            <div className="bg-shooting-gold/5 p-4 rounded-2xl border border-shooting-gold/10">
              <p className="text-xs font-bold text-shooting-gold uppercase mb-1">The Adaptation Cycle</p>
              <p className="text-[10px] text-gray-600">Overload → Recovery → Overcompensation → New Baseline.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-video bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden">
              {/* Custom SVG Overload Diagram */}
              <svg viewBox="0 0 200 100" className="w-full h-full p-4">
                <path d="M10 80 L 40 40 L 70 60 L 100 20 L 130 40 L 160 10" fill="none" stroke="#f59e0b" strokeWidth="2" />
                <circle cx="40" cy="40" r="3" fill="#ef4444" />
                <circle cx="100" cy="20" r="3" fill="#ef4444" />
                <circle cx="160" cy="10" r="3" fill="#ef4444" />
                <text x="10" y="95" fontSize="6" fill="#64748b">TIME</text>
                <text x="170" y="95" fontSize="6" fill="#64748b">STABILITY</text>
              </svg>
            </div>
            <img 
              src="/assets/progressive-overload.png" 
              alt="Progressive Overload" 
              className="w-full rounded-2xl border border-gray-100 shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Pistol Arm Lift Steps */}
      <section id="pistol-arm-lift-sequence" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-shooting-blue">
          <Move size={24} />
          <h2 className="font-bold text-lg">The Pistol Arm Lift Sequence</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              A consistent arm lift is critical for natural point of aim. Follow these five steps for every shot.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              <LiftStep number="1" title="Prep" desc="Focus, relax, and anchor left hand." />
              <LiftStep number="2" title="Extend" desc="Straighten arm and elbow fully." />
              <LiftStep number="3" title="Lift" desc="Raise above target with deep breath." />
              <LiftStep number="4" title="Lower" desc="Align sights while lowering to target." />
              <LiftStep number="5" title="Settle" desc="Exhale halfway and settle into sight picture." />
            </div>
          </div>

          <div className="relative h-48 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden">
            <img 
              src="/assets/pistol-arm-lifts.png" 
              alt="Arm Lift Sequence" 
              className="h-full w-full object-cover opacity-30 absolute"
              referrerPolicy="no-referrer"
            />
            {/* Animated Arm Lift Diagram */}
            <svg viewBox="0 0 400 200" className="w-full h-full relative z-10">
              <motion.g
                animate={{ 
                  rotate: [0, -45, -30, -35],
                  y: [0, -20, 10, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  times: [0, 0.3, 0.6, 1]
                }}
                style={{ originX: "50px", originY: "150px" }}
              >
                {/* Arm */}
                <line x1="50" y1="150" x2="250" y2="150" stroke="#1e40af" strokeWidth="12" strokeLinecap="round" />
                {/* Pistol */}
                <rect x="240" y="130" width="30" height="20" rx="2" fill="#1f2937" />
              </motion.g>
              {/* Target */}
              <circle cx="350" cy="100" r="15" fill="none" stroke="#ef4444" strokeWidth="2" />
              <circle cx="350" cy="100" r="5" fill="#ef4444" />
              
              {/* Path Indicators */}
              <path d="M250 150 Q 300 50, 350 100" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
              
              <text x="50" y="180" fontSize="10" fill="#64748b" fontWeight="bold">SHOULDER PIVOT</text>
            </svg>
          </div>
        </div>
      </section>
      {/* Stability Training Section */}
      <section id="stability-training-white-wall" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-shooting-blue">
          <Activity size={24} />
          <h2 className="font-bold text-lg">Stability Training: The White Wall</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                The "White Wall Drill" is the most effective way to build stability and trigger control. 
                By removing the target, you eliminate the distraction of aiming and focus 100% on keeping the sights aligned.
              </p>
              <div className="p-4 rounded-2xl bg-shooting-blue/5 border border-shooting-blue/10">
                <p className="text-xs font-bold text-shooting-blue uppercase mb-1">Training Goal</p>
                <p className="text-[10px] text-gray-600">Hold the pistol perfectly still for 45-60 seconds while maintaining perfect sight alignment.</p>
              </div>
            </div>
            <img 
              src="/assets/wall-hold.png" 
              alt="Wall Hold Drill" 
              className="w-full rounded-2xl border border-gray-100 shadow-sm opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Stability Monitor */}
          <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800 shadow-2xl space-y-6 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#4B79FF 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
            />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-white font-bold text-sm tracking-tight">STABILITY MONITOR v1.0</h3>
                  <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Real-time Hold Analysis</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Hold Time</p>
                    <p className="text-sm font-mono font-bold text-white">
                      {Math.floor(holdTimer / 60)}:{(holdTimer % 60).toString().padStart(2, '0')}
                    </p>
                  </div>
                  <div className="text-right border-l border-gray-800 pl-3">
                    <p className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Stability</p>
                    <p className={cn(
                      "text-xl font-mono font-bold",
                      (stabilityData[stabilityData.length - 1] || 0) > 85 ? "text-green-400" : "text-shooting-gold"
                    )}>
                      {(stabilityData[stabilityData.length - 1] || 0).toFixed(1)}%
                    </p>
                  </div>
                  <div className={cn(
                    "w-3 h-3 rounded-full",
                    isDrillActive ? "bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]" : "bg-gray-800"
                  )} />
                </div>
              </div>

              {/* Pulsing Stability Circle */}
              <div className="relative aspect-square bg-black/40 rounded-2xl border border-gray-800 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                <svg viewBox="0 0 200 200" className="w-full h-full p-8">
                  <defs>
                    <radialGradient id="stability-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#4B79FF" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#4B79FF" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  
                  {/* Target Rings */}
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="4,4" />
                  <circle cx="100" cy="100" r="50" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="4,4" />
                  <circle cx="100" cy="100" r="20" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="4,4" />
                  
                  {/* Stability Area */}
                  <motion.circle 
                    initial={{ r: 15, opacity: 0.1 }}
                    animate={{ 
                      r: isDrillActive ? [15, 25, 15] : 15,
                      opacity: isDrillActive ? [0.2, 0.4, 0.2] : 0.1
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    cx="100" cy="100" fill="url(#stability-glow)" 
                  />
                  
                  {/* Real-time Wobble Point */}
                  <motion.g
                    initial={{ x: 0, y: 0 }}
                    animate={{
                      x: tremor.x * 5,
                      y: tremor.y * 5
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <circle cx="100" cy="100" r="4" fill="#4B79FF" className="shadow-[0_0_15px_rgba(75,121,255,0.8)]" />
                    <circle cx="100" cy="100" r="8" stroke="#4B79FF" strokeWidth="1" fill="none" />
                  </motion.g>
                </svg>
                
                {!isDrillActive && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">System Standby</p>
                  </div>
                )}
              </div>

              {/* Line Graph */}
              <div className="h-20 bg-black/40 rounded-xl border border-gray-800 overflow-hidden relative">
                <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="w-full h-full">
                  <path 
                    d={stabilityData.length > 0 ? `M ${stabilityData.map((val, i) => `${(i / (stabilityData.length - 1)) * 200},${100 - val}`).join(' L ')}` : "M 0,100 L 200,100"}
                    fill="none" 
                    stroke="#4B79FF" 
                    strokeWidth="2" 
                    className="transition-all duration-150"
                  />
                  {/* Gradient fill below path */}
                  {stabilityData.length > 0 && (
                    <path 
                      d={`M 0,100 ${stabilityData.map((val, i) => `${(i / (stabilityData.length - 1)) * 200},${100 - val}`).join(' L ')} L 200,100 Z`}
                      fill="url(#graph-gradient)"
                      className="transition-all duration-150"
                    />
                  )}
                  <defs>
                    <linearGradient id="graph-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4B79FF" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#4B79FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute top-2 left-2 flex gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-green-400" />
                    <span className="text-[7px] text-gray-500 font-bold uppercase tracking-widest">Stability</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsDrillActive(!isDrillActive)}
                className={cn(
                  "w-full py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all active:scale-[0.98]",
                  isDrillActive 
                    ? "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20" 
                    : "bg-shooting-blue text-white shadow-[0_0_20px_rgba(75,121,255,0.3)] hover:shadow-[0_0_30px_rgba(75,121,255,0.5)]"
                )}
              >
                {isDrillActive ? "Terminate Drill" : "Initialize White Wall Drill"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hat Technique Section */}
      <section id="hat-technique-section" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-shooting-blue">
          <Info size={24} />
          <h2 className="font-bold text-lg">The Hat Technique</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              Using a hat or blinder helps to eliminate glare and reduce eye strain by blocking the non-shooting eye. 
              This allows you to keep both eyes open, which prevents facial muscle tension.
            </p>
            <div className="p-4 rounded-2xl bg-shooting-blue/5 border border-shooting-blue/10">
              <p className="text-xs font-bold text-shooting-blue uppercase mb-1">Pro Tip</p>
              <p className="text-[10px] text-gray-600">A low-brimmed hat also helps you focus exclusively on the sights by narrowing your field of vision.</p>
            </div>
          </div>
          <img 
            src="/assets/hat-technique.png" 
            alt="Hat Technique" 
            className="w-full rounded-2xl border border-gray-100 shadow-sm"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Hold Comparison Section */}
      <section id="hold-comparison-section" className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-shooting-gold">
          <Target size={24} />
          <h2 className="font-bold text-lg">Hold Comparison</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img 
            src="/assets/hold-compare.png" 
            alt="Hold Comparison" 
            className="w-full rounded-2xl border border-gray-100 shadow-sm"
            referrerPolicy="no-referrer"
          />
          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              Comparing your hold stability across different training sessions helps you track progress. 
              Look for a reduction in the "area of movement" over time.
            </p>
            <div className="bg-shooting-gold/5 p-4 rounded-2xl border border-shooting-gold/10">
              <p className="text-xs font-bold text-shooting-gold uppercase mb-1">Stability Metrics</p>
              <p className="text-[10px] text-gray-600">Focus on the "hold center" and the "tremor frequency" to gauge your strength endurance.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function LiftStep({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 space-y-1">
      <div className="w-6 h-6 rounded-full bg-shooting-blue text-white flex items-center justify-center text-[10px] font-bold">
        {number}
      </div>
      <p className="text-[10px] font-black uppercase text-shooting-blue tracking-wider">{title}</p>
      <p className="text-[9px] text-gray-500 leading-tight">{desc}</p>
    </div>
  );
}
