import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Target, Zap, Activity, Info, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ScienceHub() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 max-w-2xl mx-auto space-y-8"
    >
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Science of Shooting</h1>
        <p className="text-gray-500 text-sm">Evidence-based performance analysis</p>
      </header>

      <section className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-shooting-blue">
          <Microscope size={24} />
          <h2 className="font-bold text-lg">The Olsson-Laaksonen Model</h2>
        </div>
        
        <p className="text-sm text-gray-600 leading-relaxed">
          A 2021 study published in the <i>International Journal of Performance Analysis in Sport</i> identified the 
          mathematical predictors of Olympic Air Pistol scores.
        </p>

        <div className="space-y-4">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Key Performance Predictors (PCA Analysis)</h3>
          
          <div className="space-y-3">
            <PredictorCard 
              title="Aiming Accuracy (COG HIT)" 
              impact="54-55%" 
              description="The ability to keep the center of your movement pattern on the target center. This is the #1 predictor of success."
              icon={<Target className="text-shooting-red" />}
            />
            <PredictorCard 
              title="Timing of Triggering (TIRE)" 
              impact="11-12%" 
              description="Releasing the shot at the exact moment the mean location of the aiming point is closest to the center."
              icon={<Zap className="text-shooting-gold" />}
            />
            <PredictorCard 
              title="Stability of Hold (DEV X)" 
              impact="9%" 
              description="The absolute steadiness of the pistol. While important, accuracy of the 'center of movement' matters more."
              icon={<Activity className="text-shooting-blue" />}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Statistical Variance Explained</h3>
          <div className="grid grid-cols-1 gap-3">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="text-xs font-bold text-gray-500 uppercase mb-2">Principal Component Analysis (PCA)</p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Aiming Time</span>
                  <span className="font-mono">30.23%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Stability of Hold</span>
                  <span className="font-mono">17.33%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Aiming Accuracy</span>
                  <span className="font-mono">12.79%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Cleanness of Triggering</span>
                  <span className="font-mono">9.53%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Timing of Triggering</span>
                  <span className="font-mono">5.92%</span>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 mt-3 italic">Total variance explained: 80.4%</p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 flex gap-3">
          <AlertCircle className="text-amber-500 shrink-0" size={20} />
          <div className="space-y-1">
            <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">Key Takeaway</p>
            <p className="text-xs text-amber-700 leading-relaxed">
              Don't over-focus on a perfectly still gun. Focus on keeping your "wobble area" centered on the 10-ring and timing your trigger release.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-bold text-lg px-1">Technical Performance Variables</h2>
        <div className="grid gap-3">
          <DefinitionItem 
            term="COG HIT (pts)" 
            definition="Mean location of the aiming point during the last second. The #1 predictor of score." 
          />
          <DefinitionItem 
            term="ATV (ring)" 
            definition="Cleanness of triggering: Movement of the aiming point during the last 0.2s before the shot." 
          />
          <DefinitionItem 
            term="DEV X / DEV Y" 
            definition="Stability of hold: Horizontal and vertical standard deviations of the aiming point location." 
          />
          <DefinitionItem 
            term="TIRE (index)" 
            definition="Timing of triggering: Releasing the shot when the mean location is closest to the center." 
          />
          <DefinitionItem 
            term="Stability Window" 
            definition="The period (usually 5-8s) where postural stability and barrel movement are at their minimum." 
          />
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="font-bold text-lg px-1">Correlation with Shot Score</h2>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <p className="text-xs text-gray-500 mb-4">Pearson correlation (r) between technical variables and final score.</p>
          <div className="space-y-2">
            <CorrelationRow label="COG HIT (Aiming Accuracy)" value="0.74" level="Strong" />
            <CorrelationRow label="TARGET F (Time in 10-ring)" value="0.69" level="Strong" />
            <CorrelationRow label="HIT R (Hold in 9-ring)" value="0.60" level="Moderate" />
            <CorrelationRow label="TIRE (Timing)" value="0.51" level="Moderate" />
            <CorrelationRow label="DEV X (Horizontal Stability)" value="-0.56" level="Inverse" />
            <CorrelationRow label="ATV (Trigger Cleanness)" value="-0.48" level="Inverse" />
          </div>
          <p className="text-[10px] text-gray-400 mt-4 italic">* Negative values indicate that lower movement (ATV/DEV) leads to higher scores.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-bold text-lg px-1">Junior Competition Events</h2>
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Event</th>
                <th className="p-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Distance</th>
                <th className="p-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pistol</th>
                <th className="p-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Type</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              <tr className="border-b border-gray-50">
                <td className="p-4 font-bold">Air Pistol</td>
                <td className="p-4 text-gray-500">10 Meters</td>
                <td className="p-4 text-gray-500">4.5mm Air</td>
                <td className="p-4"><span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-md font-bold uppercase text-[9px]">Precision</span></td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="p-4 font-bold">Sport Pistol</td>
                <td className="p-4 text-gray-500">25m / 50ft</td>
                <td className="p-4 text-gray-500">.22 Rimfire</td>
                <td className="p-4"><span className="px-2 py-0.5 bg-purple-50 text-purple-600 rounded-md font-bold uppercase text-[9px]">Precision/Rapid</span></td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="p-4 font-bold">National Match</td>
                <td className="p-4 text-gray-500">50 & 25 yds</td>
                <td className="p-4 text-gray-500">.22 Rimfire</td>
                <td className="p-4"><span className="px-2 py-0.5 bg-orange-50 text-orange-600 rounded-md font-bold uppercase text-[9px]">Mixed</span></td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Precision Pistol</td>
                <td className="p-4 text-gray-500">50m / 50ft</td>
                <td className="p-4 text-gray-500">.22 Rimfire</td>
                <td className="p-4"><span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-md font-bold uppercase text-[9px]">Precision</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-shooting-black p-6 rounded-3xl text-white space-y-6">
        <div className="flex items-center gap-3">
          <Zap size={24} className="text-shooting-gold" />
          <h2 className="font-bold text-lg">Progressive Overload Principle</h2>
        </div>
        
        <p className="text-sm text-gray-400 leading-relaxed">
          Stability is a product of strength endurance. To improve, you must stress the muscles to the point of fatigue, 
          allowing the body to compensate and create a new, higher baseline.
        </p>

        <div className="relative h-32 w-full bg-white/5 rounded-2xl border border-white/10 p-4 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 100">
            {/* Baseline */}
            <line x1="0" y1="70" x2="400" y2="70" stroke="white" strokeWidth="1" strokeDasharray="4,4" opacity="0.2" />
            <text x="10" y="65" fontSize="8" fill="white" opacity="0.4">BASELINE</text>
            
            {/* Overload Curve */}
            <path 
              d="M0 70 L 50 70 Q 100 70, 150 90 T 250 40 L 400 40" 
              fill="none" 
              stroke="#f59e0b" 
              strokeWidth="3" 
            />
            
            {/* Labels */}
            <text x="100" y="95" fontSize="8" fill="#ef4444" fontWeight="bold">FATIGUE</text>
            <text x="200" y="30" fontSize="8" fill="#10b981" fontWeight="bold">COMPENSATION</text>
            <text x="320" y="35" fontSize="8" fill="white" fontWeight="bold">NEW BASELINE</text>
          </svg>
        </div>

        <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
          <p className="text-xs font-bold text-shooting-gold uppercase mb-1">The 1.5x Rule</p>
          <p className="text-[10px] text-gray-400">
            Train to hold the pistol stable for 1.5x the duration of a normal shot (approx. 25-30 seconds) 
            to ensure you never hit fatigue during competition.
          </p>
        </div>
      </section>
    </motion.div>
  );
}

function CorrelationRow({ label, value, level }: { label: string; value: string; level: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
      <span className="text-xs text-gray-600">{label}</span>
      <div className="flex items-center gap-3">
        <span className={cn(
          "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter",
          level === 'Strong' ? "bg-green-50 text-green-600" :
          level === 'Moderate' ? "bg-blue-50 text-blue-600" :
          "bg-orange-50 text-orange-600"
        )}>
          {level}
        </span>
        <span className="font-mono text-xs font-bold w-10 text-right">{value}</span>
      </div>
    </div>
  );
}

function PredictorCard({ title, impact, description, icon }: { title: string; impact: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex gap-4">
      <div className="mt-1">{icon}</div>
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-sm">{title}</h4>
          <span className="text-[10px] font-black text-gray-400">{impact} IMPACT</span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function DefinitionItem({ term, definition }: { term: string; definition: string }) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-start gap-3">
      <Info size={16} className="text-gray-300 mt-0.5" />
      <div>
        <p className="text-sm font-bold">{term}</p>
        <p className="text-xs text-gray-500">{definition}</p>
      </div>
    </div>
  );
}
