import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, doc, setDoc, deleteDoc, onSnapshot, query, Timestamp } from 'firebase/firestore';
import { Users, UserPlus, Trash2, Mail, Shield, CheckCircle2 } from 'lucide-react';

interface WhitelistedUser {
  email: string;
  addedAt: any;
}

export default function AdminPanel() {
  const [emails, setEmails] = useState<WhitelistedUser[]>([]);
  const [newEmail, setNewEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    if (!db) return;

    const q = query(collection(db, 'whitelisted_users'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map(doc => ({
        email: doc.id,
        ...doc.data()
      })) as WhitelistedUser[];
      setEmails(list);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'whitelisted_users');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAddEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail || !db) return;
    
    setSubmitting(true);
    setMessage(null);
    
    try {
      const emailLower = newEmail.toLowerCase().trim();
      await setDoc(doc(db, 'whitelisted_users', emailLower), {
        email: emailLower,
        addedAt: Timestamp.now()
      });
      setNewEmail('');
      setMessage({ type: 'success', text: `${emailLower} has been whitelisted.` });
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || 'Failed to add email.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteEmail = async (email: string) => {
    if (!db || !window.confirm(`Are you sure you want to remove ${email} from the whitelist?`)) return;

    try {
      await deleteDoc(doc(db, 'whitelisted_users', email));
      setMessage({ type: 'success', text: `${email} removed from whitelist.` });
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || 'Failed to remove email.' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 max-w-2xl mx-auto space-y-8"
    >
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Admin Control</h1>
        <p className="text-gray-500 text-sm">Manage whitelisted users and system access</p>
      </header>

      {/* Add User Section */}
      <section className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex items-center gap-3 text-shooting-blue">
          <UserPlus size={20} />
          <h2 className="font-bold text-lg">Whitelist New User</h2>
        </div>
        
        <form onSubmit={handleAddEmail} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="user@example.com"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-shooting-blue/20 focus:border-shooting-blue outline-none transition-all text-sm"
              required
            />
          </div>
          <button 
            type="submit"
            disabled={submitting}
            className="bg-shooting-blue text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all disabled:opacity-50 active:scale-95"
          >
            {submitting ? 'Adding...' : 'Add to Whitelist'}
          </button>
        </form>

        <AnimatePresence>
          {message && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`p-3 rounded-xl text-xs font-bold flex items-center gap-2 ${
                message.type === 'success' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'
              }`}
            >
              {message.type === 'success' ? <CheckCircle2 size={14} /> : <Shield size={14} />}
              {message.text}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Whitelist Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-3 text-gray-700">
            <Users size={20} />
            <h2 className="font-bold text-lg">Authorized Users</h2>
          </div>
          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">{emails.length} Users</span>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-12 flex justify-center">
              <div className="w-8 h-8 border-4 border-gray-100 border-t-shooting-blue rounded-full animate-spin" />
            </div>
          ) : emails.length > 0 ? (
            <div className="divide-y divide-gray-50">
              {emails.map((user) => (
                <div key={user.email} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-shooting-blue">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{user.email}</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">Added {user.addedAt?.toDate().toLocaleDateString()}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDeleteEmail(user.email)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center text-gray-400">
              <Users size={48} className="mx-auto mb-4 opacity-20" />
              <p>No extra users whitelisted yet.</p>
              <p className="text-xs">Only the master admin has access.</p>
            </div>
          )}
        </div>
      </section>

      <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-shooting-blue shadow-sm border border-blue-100 flex-shrink-0">
            <Shield size={24} />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-shooting-blue text-sm">Security Note</h3>
            <p className="text-xs text-blue-800 leading-relaxed">
              Users must log in with the exact email listed above. Google Sign-In will verify their identity. Once added, they will have full access after their next login attempt.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
