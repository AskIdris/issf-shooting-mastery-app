import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, query, orderBy, limit, onSnapshot, getDocFromServer, Timestamp } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

// Initialize Firebase
let app;
let auth: any;
let db: any;
let googleProvider: any;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
  googleProvider = new GoogleAuthProvider();
} catch (error) {
  console.error("Firebase initialization failed:", error);
  // Provide minimal mocks to prevent crashes
  auth = { 
    currentUser: null, 
    onAuthStateChanged: (cb: any) => { cb(null); return () => {}; }, 
    signOut: () => Promise.resolve() 
  };
  // We can't easily mock the whole Firestore SDK, so we'll let it be null
  // and components should handle it.
  db = null;
  googleProvider = {};
}

export { auth, db, googleProvider };

// Points constants
export const POINTS = {
  DRILL_COMPLETION: 50,
  QUIZ_CORRECT_ANSWER: 10,
  PERSONAL_BEST: 100,
  LEVEL_UP_BASE: 1000
};

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Types
export interface UserProfile {
  uid: string;
  displayName: string;
  photoURL?: string;
  totalPoints: number;
  level: number;
  lastUpdated: any;
}

// Helper to update user points
export async function addPoints(userId: string, points: number) {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const currentPoints = userSnap.data().totalPoints || 0;
      const newPoints = currentPoints + points;
      const newLevel = Math.floor(newPoints / POINTS.LEVEL_UP_BASE) + 1;
      
      await updateDoc(userRef, {
        totalPoints: newPoints,
        level: newLevel,
        lastUpdated: Timestamp.now()
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, `users/${userId}`);
  }
}

export { signInWithPopup, onAuthStateChanged };
export type { FirebaseUser };
