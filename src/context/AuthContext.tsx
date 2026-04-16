import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db, googleProvider, signInWithPopup, onAuthStateChanged, FirebaseUser, UserProfile, POINTS, handleFirestoreError, OperationType } from '../firebase';
import { doc, getDoc, setDoc, onSnapshot, Timestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'motion/react';
import { Award } from 'lucide-react';

interface AuthContextType {
  user: FirebaseUser | null;
  profile: UserProfile | null;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  awardPoints: (points: number) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState<{ points: number; id: number } | null>(null);

  useEffect(() => {
    if (!auth || !auth.onAuthStateChanged) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      if (!firebaseUser) {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user || !db || Object.keys(db).length === 0) {
      if (user) setLoading(false);
      return;
    }

    try {
      const userRef = doc(db, 'users', user.uid);
      
      // Listen for real-time updates to profile
      const unsubProfile = onSnapshot(userRef, (docSnap) => {
        if (docSnap.exists()) {
          setProfile(docSnap.data() as UserProfile);
        } else {
          // Create initial profile
          const newProfile: UserProfile = {
            uid: user.uid,
            displayName: user.displayName || 'Anonymous Shooter',
            photoURL: user.photoURL || undefined,
            totalPoints: 0,
            level: 1,
            lastUpdated: Timestamp.now()
          };
          setDoc(userRef, newProfile).catch(err => {
            handleFirestoreError(err, OperationType.WRITE, `users/${user.uid}`);
          });
          setProfile(newProfile);
        }
        setLoading(false);
      }, (error) => {
        handleFirestoreError(error, OperationType.GET, `users/${user.uid}`);
        setLoading(false);
      });

      return () => unsubProfile();
    } catch (error) {
      console.error("Error setting up profile listener:", error);
      setLoading(false);
    }
  }, [user]);

  const login = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const awardPoints = async (points: number) => {
    if (!user || !profile || !db) return;
    
    try {
      const userRef = doc(db, 'users', user.uid);
      const newPoints = profile.totalPoints + points;
      const newLevel = Math.floor(newPoints / POINTS.LEVEL_UP_BASE) + 1;

      await setDoc(userRef, {
        ...profile,
        totalPoints: newPoints,
        level: newLevel,
        lastUpdated: Timestamp.now()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `users/${user.uid}`);
    }

    // Show notification (still show it locally even if Firebase fails)
    setNotification({ points, id: Date.now() });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, login, logout, awardPoints }}>
      {children}
      
      <AnimatePresence>
        {notification && (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-shooting-black text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl z-[100] border border-white/10"
          >
            <div className="w-8 h-8 bg-shooting-gold rounded-full flex items-center justify-center text-black">
              <Award size={18} />
            </div>
            <span className="font-bold">+{notification.points} Points Earned!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
