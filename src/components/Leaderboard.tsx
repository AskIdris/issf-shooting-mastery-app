import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Medal, Crown, User as UserIcon } from 'lucide-react';
import { db, UserProfile, handleFirestoreError, OperationType } from '../firebase';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { cn } from '../lib/utils';
import { useAuth } from '../context/AuthContext';

export default function Leaderboard() {
  const [leaders, setLeaders] = useState<UserProfile[]>([]);
  const { profile, user } = useAuth();

  useEffect(() => {
    if (!user || !db) return;

    try {
      const q = query(
        collection(db, 'users'),
        orderBy('totalPoints', 'desc'),
        limit(10)
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const users = snapshot.docs.map(doc => doc.data() as UserProfile);
        setLeaders(users);
      }, (error) => {
        handleFirestoreError(error, OperationType.LIST, 'users');
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Error setting up leaderboard listener:", error);
    }
  }, [user]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 max-w-2xl mx-auto space-y-8"
    >
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
          <Trophy className="text-yellow-500" /> Leaderboard
        </h1>
        <p className="text-gray-500 text-sm">Top shooters in the community</p>
      </header>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        {!user ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
              <Trophy size={32} />
            </div>
            <p className="text-gray-500 text-sm">Sign in to view the community leaderboard and see how you rank against other shooters.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {leaders.map((leader, index) => (
            <div 
              key={leader.uid}
              className={cn(
                "p-4 flex items-center gap-4 transition-colors",
                profile?.uid === leader.uid ? "bg-shooting-blue/5" : "hover:bg-gray-50"
              )}
            >
              <div className="w-8 text-center font-mono font-bold text-gray-400">
                {index === 0 ? <Crown className="text-yellow-500 mx-auto" size={20} /> :
                 index === 1 ? <Medal className="text-gray-400 mx-auto" size={20} /> :
                 index === 2 ? <Medal className="text-amber-600 mx-auto" size={20} /> :
                 index + 1}
              </div>

              <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
                {leader.photoURL ? (
                  <img src={leader.photoURL} alt={leader.displayName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <UserIcon size={20} />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-bold truncate">{leader.displayName}</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Level {leader.level}</p>
              </div>

              <div className="text-right">
                <p className="font-mono font-bold text-shooting-blue">{leader.totalPoints.toLocaleString()}</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Points</p>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>

      {profile && !leaders.find(l => l.uid === profile.uid) && (
        <div className="bg-shooting-blue/5 border border-shooting-blue/10 p-4 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 text-center font-mono font-bold text-shooting-blue">?</div>
            <div className="w-10 h-10 rounded-full bg-shooting-blue/20 flex items-center justify-center text-shooting-blue">
              <UserIcon size={20} />
            </div>
            <div>
              <p className="font-bold">{profile.displayName}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Your Rank</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-mono font-bold text-shooting-blue">{profile.totalPoints.toLocaleString()}</p>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Points</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
