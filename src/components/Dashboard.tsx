import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TrendingUp, Award, Clock, Target, ChevronRight, Eye, Microscope, Trophy } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrainingSession } from '../types';

export default function Dashboard({ sessions }: { sessions: TrainingSession[] }) {
  const recentScore = sessions.length > 0 ? sessions[0].score : 0;
  const avgScore = sessions.length > 0 
    ? Math.round(sessions.reduce((acc, s) => acc + s.score, 0) / sessions.length) 
    : 0;
  
  const chartData = [...sessions].reverse().map(s => ({
    date: new Date(s.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    score: s.score
  }));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 max-w-2xl mx-auto space-y-8"
    >
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Mastery Hub</h1>
        <p className="text-gray-500 text-sm">Olympic Pistol Training Dashboard</p>
      </header>

      {/* Quick Access to Visual Guide */}
      <Link to="/guide">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-shooting-blue p-6 rounded-3xl text-white shadow-lg shadow-blue-500/20 flex items-center justify-between group overflow-hidden relative"
        >
          <div className="relative z-10 space-y-1">
            <h2 className="text-xl font-bold">Visual Mastery Guide</h2>
            <p className="text-blue-100 text-sm">Interactive diagrams & technique simulators</p>
          </div>
          <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <Eye size={24} />
          </div>
          {/* Decorative background element */}
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        </motion.div>
      </Link>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard 
          label="Recent Score" 
          value={recentScore} 
          icon={<Target className="text-shooting-blue" size={20} />}
          trend="+2.4%"
        />
        <StatCard 
          label="Average" 
          value={avgScore} 
          icon={<TrendingUp className="text-shooting-gold" size={20} />}
          trend="+1.1%"
        />
      </div>

      {/* Performance Chart */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold text-lg">Performance Trend</h2>
          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Last 10 Sessions</span>
        </div>
        <div className="h-64 w-full">
          {sessions.length > 1 ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#999' }} 
                />
                <YAxis 
                  domain={['dataMin - 10', 'dataMax + 10']} 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#999' }} 
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#4B79FF" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#4B79FF', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-2">
              <TrendingUp size={48} strokeWidth={1} />
              <p className="text-sm">Log more sessions to see trends</p>
            </div>
          )}
        </div>
      </section>

      {/* Explore Section */}
      <section className="space-y-4">
        <h2 className="font-semibold text-lg px-1">Explore Mastery</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/science">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 hover:border-shooting-blue/30 transition-all flex flex-col gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <Microscope size={20} />
              </div>
              <div>
                <p className="font-bold text-sm">Science Hub</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Technical Data</p>
              </div>
            </div>
          </Link>
          <Link to="/leaderboard">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 hover:border-shooting-blue/30 transition-all flex flex-col gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-all">
                <Trophy size={20} />
              </div>
              <div>
                <p className="font-bold text-sm">Leaderboard</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Community</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <h2 className="font-semibold text-lg">Recent Sessions</h2>
          <Link to="/tracker" className="text-shooting-blue text-sm font-medium hover:underline">View All</Link>
        </div>
        <div className="space-y-3">
          {sessions.slice(0, 3).map(session => (
            <div key={session.id} className="bg-white p-4 rounded-xl flex items-center justify-between border border-gray-100 hover:border-shooting-blue/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                  <Clock size={18} className="text-gray-400" />
                </div>
                <div>
                  <p className="font-medium text-sm">{session.type}</p>
                  <p className="text-xs text-gray-500">{new Date(session.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-lg">{session.score}</span>
                <ChevronRight size={16} className="text-gray-300" />
              </div>
            </div>
          ))}
          {sessions.length === 0 && (
            <div className="text-center py-8 text-gray-400 border-2 border-dashed border-gray-200 rounded-2xl">
              No sessions recorded yet.
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}

function StatCard({ label, value, icon, trend }: { label: string; value: number | string; icon: React.ReactNode; trend: string }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-3">
      <div className="flex justify-between items-start">
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
        <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">{trend}</span>
      </div>
      <div>
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-bold tracking-tight">{value}</p>
      </div>
    </div>
  );
}
