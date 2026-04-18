/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { 
  LayoutDashboard, 
  BookOpen, 
  Target, 
  ClipboardCheck, 
  ChevronRight, 
  Plus,
  TrendingUp,
  Award,
  Clock,
  Dumbbell,
  Microscope,
  Eye,
  Trophy,
  User as UserIcon,
  LogOut,
  Shield
} from 'lucide-react';
import { cn } from './lib/utils';
import { TrainingSession } from './types';
import { TRAINING_MODULES, QUIZZES, DRILLS } from './constants';

// Components
import Dashboard from './components/Dashboard';
import TrainingModules from './components/TrainingModules';
import PerformanceTracker from './components/PerformanceTracker';
import QuizSection from './components/QuizSection';
import ShootingDrills from './components/ShootingDrills';
import ScienceHub from './components/ScienceHub';
import VisualGuide from './components/VisualGuide';
import Leaderboard from './components/Leaderboard';
import AdminPanel from './components/AdminPanel';

function AppContent() {
  const location = useLocation();
  const [sessions, setSessions] = useState<TrainingSession[]>([]);
  const { user, profile, login, logout, loading, isAuthorized, isAdmin, authError, clearAuthError } = useAuth();

  useEffect(() => {
    try {
      const saved = localStorage.getItem('shooting_sessions');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setSessions(parsed);
      }
    } catch (error) {
      console.error("Failed to load sessions from localStorage:", error);
    }
  }, []);

  const addSession = (session: TrainingSession) => {
    const updated = [session, ...sessions];
    setSessions(updated);
    localStorage.setItem('shooting_sessions', JSON.stringify(updated));
  };

  const updateSession = (updatedSession: TrainingSession) => {
    const updated = sessions.map(s => s.id === updatedSession.id ? updatedSession : s);
    setSessions(updated);
    localStorage.setItem('shooting_sessions', JSON.stringify(updated));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-12 h-12 bg-shooting-blue rounded-2xl"
        />
      </div>
    );
  }

  if (!user || !isAuthorized) {
    return (
      <div className="min-h-screen bg-[#F5F5F7] flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-sm space-y-8"
        >
          <div className="space-y-4">
            <div className="w-20 h-20 bg-shooting-blue rounded-3xl flex items-center justify-center text-white text-4xl font-bold mx-auto shadow-2xl shadow-blue-200">
              P
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">PrecisionPistol Mastery</h1>
            <p className="text-gray-500">The science of Olympic marksmanship. Sign in to access your modules, drills, and training data.</p>
          </div>

          {authError && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-50 border border-red-100 p-4 rounded-2xl space-y-2 relative"
            >
              <button 
                onClick={clearAuthError}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 w-6 h-6 flex items-center justify-center rounded-full hover:bg-red-100 transition-colors"
              >
                ×
              </button>
              <p className="text-red-800 font-bold text-sm">Authentication Issue</p>
              <p className="text-red-600 text-xs leading-relaxed">{authError}</p>
            </motion.div>
          )}

          {user && !isAuthorized && !authError ? (
            <div className="bg-red-50 border border-red-100 p-4 rounded-2xl space-y-2">
              <p className="text-red-800 font-bold text-sm">Access Restricted</p>
              <p className="text-red-600 text-xs">Your email ({user.email}) is not on the authorized list. Please contact the administrator.</p>
              <button 
                onClick={logout}
                className="text-red-800 text-xs font-bold underline"
              >
                Sign out
              </button>
            </div>
          ) : (
            <button 
              onClick={login}
              className="w-full bg-shooting-blue text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-blue-200"
            >
              Sign In with Google
            </button>
          )}

          <div className="space-y-2">
            <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Authorized Access Only</p>
            <div className="flex justify-center gap-1">
              {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-gray-200" />)}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1A1A1A] font-sans">
      {/* Header with User Profile */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 px-6 py-3 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-shooting-blue rounded-lg flex items-center justify-center text-white font-bold">P</div>
            <span className="font-bold tracking-tight">PrecisionPistol</span>
          </div>
          
          <div className="flex items-center gap-4">
            {isAdmin && (
              <Link to="/admin" className="p-2 text-gray-400 hover:text-shooting-blue transition-colors">
                <Shield size={20} />
              </Link>
            )}
            {user ? (
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold">{profile?.displayName}</p>
                  <p className="text-[10px] text-shooting-blue font-bold uppercase tracking-widest">Lvl {profile?.level} • {profile?.totalPoints} pts</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
                  {profile?.photoURL ? (
                    <img src={profile.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <UserIcon size={16} />
                    </div>
                  )}
                </div>
                <button onClick={logout} className="text-gray-400 hover:text-red-500 transition-colors">
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <button 
                onClick={login}
                className="bg-shooting-blue text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-blue-600 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pb-24 overflow-x-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location}>
            <Route path="/" element={<Dashboard sessions={sessions} />} />
            <Route path="/training" element={<TrainingModules modules={TRAINING_MODULES} />} />
            <Route path="/drills" element={<ShootingDrills />} />
            <Route path="/guide" element={<VisualGuide />} />
            <Route path="/science" element={<ScienceHub />} />
            <Route path="/tracker" element={<PerformanceTracker sessions={sessions} onAddSession={addSession} onUpdateSession={updateSession} />} />
            <Route path="/quiz" element={<QuizSection quizzes={QUIZZES} />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            {isAdmin && <Route path="/admin" element={<AdminPanel />} />}
          </Routes>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation (PWA Style) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 px-6 py-3 z-50">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <NavLink to="/" icon={<LayoutDashboard size={24} />} label="Home" />
          <NavLink to="/training" icon={<BookOpen size={24} />} label="Learn" />
          <NavLink to="/guide" icon={<Eye size={24} />} label="Guide" />
          <NavLink to="/drills" icon={<Dumbbell size={24} />} label="Drills" />
          <NavLink to="/tracker" icon={<Target size={24} />} label="Train" />
          <NavLink to="/quiz" icon={<ClipboardCheck size={24} />} label="Check" />
        </div>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

function NavLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={cn(
        "flex flex-col items-center gap-1 transition-colors duration-200",
        isActive ? "text-shooting-blue" : "text-gray-400 hover:text-gray-600"
      )}
    >
      <motion.div
        whileTap={{ scale: 0.9 }}
        className={cn(
          "p-1 rounded-xl transition-colors",
          isActive && "bg-shooting-blue/10"
        )}
      >
        {icon}
      </motion.div>
      <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
    </Link>
  );
}
