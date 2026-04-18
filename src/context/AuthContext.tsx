import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db, googleProvider, signInWithPopup, onAuthStateChanged, FirebaseUser, UserProfile, POINTS, handleFirestoreError, OperationType } from '../firebase';
import { doc, getDoc, setDoc, onSnapshot, Timestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'motion/react';
import { Award } from 'lucide-react';

interface AuthContextType {
  user: FirebaseUser | null;
  profile: UserProfile | null;
  loading: boolean;
  isAuthorized: boolean;
  authError: string | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  awardPoints: (points: number) => Promise<void>;
  clearAuthError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ points: number; id: number } | null>(null);

  useEffect(() => {
    if (!auth || !auth.onAuthStateChanged) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Check whitelist first
        let authorized = false;
        if (firebaseUser.email === 'thetruthsearchchannel@gmail.com') {
          authorized = true;
        } else {
          try {
            if (!db) throw new Error("Database connection not ready");
            const whitelistRef = doc(db, 'whitelisted_users', firebaseUser.email || '');
            const whitelistSnap = await getDoc(whitelistRef);
            authorized = whitelistSnap.exists();
            if (!authorized) {
              setAuthError(`Access denied. ${firebaseUser.email} is not on the authorized list.`);
            }
          } catch (error: any) {
            console.error("Error checking whitelist:", error);
            authorized = false;
            setAuthError(error.message || "Error verifying authorization. Please try again.");
          }
        }
        
        setIsAuthorized(authorized);
        setUser(firebaseUser);
      } else {
        setUser(null);
        setProfile(null);
        setIsAuthorized(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Only fetch profile if user is authorized
    if (!user || !isAuthorized || !db || Object.keys(db).length === 0) {
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
    setAuthError(null);
    try {
      if (!auth) throw new Error("Firebase Auth not initialized");
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      console.error('Login failed:', error);
      let message = "An error occurred during sign in.";
      if (error.code === 'auth/popup-blocked') {
        message = "The sign-in popup was blocked. Please enable popups in your browser and try again.";
      } else if (error.code === 'auth/unauthorized-domain') {
        message = "This domain is not authorized for Firebase Authentication. Please add it to your Firebase Console.";
      } else if (error.message) {
        message = error.message;
      }
      setAuthError(message);
    }
  };

  const logout = async () => {
    try {
      if (!auth) return;
      await auth.signOut();
      setAuthError(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const clearAuthError = () => setAuthError(null);

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
    <AuthContext.Provider value={{ user, profile, loading, isAuthorized, authError, login, logout, awardPoints, clearAuthError }}>
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
