import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ClipboardCheck, CheckCircle2, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import { QuizQuestion } from '../types';
import { cn } from '../lib/utils';
import { useAuth } from '../context/AuthContext';
import { db, POINTS, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const QUESTIONS_PER_SESSION_DEFAULT = 10;

export default function QuizSection({ quizzes }: { quizzes: QuizQuestion[] }) {
  const [activeQuizzes, setActiveQuizzes] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [sessionLength, setSessionLength] = useState(20);
  const [isStarted, setIsStarted] = useState(false);
  const { user, awardPoints } = useAuth();

  // Initialize and shuffle questions
  useEffect(() => {
    if (isStarted) {
      const shuffled = [...quizzes].sort(() => Math.random() - 0.5);
      setActiveQuizzes(shuffled.slice(0, sessionLength));
      setCurrentIdx(0);
      setSelectedOption(null);
      setIsAnswered(false);
      setScore(0);
      setIsFinished(false);
    }
  }, [quizzes, isStarted, sessionLength]);

  const currentQuiz = activeQuizzes[currentIdx];

  const handleOptionSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const handleCheck = () => {
    if (selectedOption === null || !currentQuiz) return;
    setIsAnswered(true);
    if (selectedOption === currentQuiz.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = async () => {
    if (currentIdx < activeQuizzes.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      
      // Award points and save result if logged in
      if (user && db) {
        try {
          const pointsEarned = score * POINTS.QUIZ_CORRECT_ANSWER;
          await addDoc(collection(db, 'quiz_results'), {
            uid: user.uid,
            score,
            totalQuestions: activeQuizzes.length,
            pointsEarned,
            timestamp: Timestamp.now()
          });
          
          await awardPoints(pointsEarned);
        } catch (error) {
          handleFirestoreError(error, OperationType.WRITE, 'quiz_results');
        }
      }
    }
  };

  const resetQuiz = () => {
    setIsStarted(false);
    setIsFinished(false);
  };

  if (!isStarted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 max-w-md mx-auto space-y-8 text-center"
      >
        <div className="space-y-2">
          <div className="w-20 h-20 bg-shooting-blue/10 rounded-full flex items-center justify-center mx-auto text-shooting-blue">
            <ClipboardCheck size={40} />
          </div>
          <h2 className="text-3xl font-bold">Ready to Test?</h2>
          <p className="text-gray-500">Select your quiz length to begin.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[10, 25, 50, 100].map(len => (
            <button
              key={len}
              onClick={() => {
                setSessionLength(len);
                setIsStarted(true);
              }}
              className="p-6 bg-white border border-gray-100 rounded-3xl hover:border-shooting-blue hover:bg-blue-50 transition-all group"
            >
              <p className="text-2xl font-black text-shooting-black group-hover:text-shooting-blue">{len}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Questions</p>
            </button>
          ))}
        </div>

        <p className="text-xs text-gray-400 italic">
          Questions are randomly selected from a pool of {quizzes.length} technical items.
        </p>
      </motion.div>
    );
  }

  if (activeQuizzes.length === 0) return null;

  if (isFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 max-w-md mx-auto text-center space-y-8"
      >
        <div className="py-12 space-y-4">
          <div className="w-24 h-24 bg-shooting-gold/10 rounded-full flex items-center justify-center mx-auto text-shooting-gold">
            <Award size={48} />
          </div>
          <h2 className="text-3xl font-bold">Quiz Complete!</h2>
          <p className="text-gray-500">You scored {score} out of {activeQuizzes.length}</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-sm font-medium text-gray-600 mb-4">
            {score === activeQuizzes.length 
              ? "Perfect! You have a solid grasp of Olympic shooting theory." 
              : "Good effort! Review the training modules to sharpen your knowledge."}
          </p>
          <button
            onClick={resetQuiz}
            className="w-full bg-shooting-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors"
          >
            <RotateCcw size={20} /> Try Again
          </button>
        </div>
      </motion.div>
    );
  }

  if (!currentQuiz) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 max-w-2xl mx-auto space-y-8"
    >
      <header className="space-y-1">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Self-Check</h1>
            <p className="text-gray-500 text-sm">Validate your technical knowledge</p>
          </div>
          <span className="text-xs font-mono font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
            {currentIdx + 1} / {activeQuizzes.length}
          </span>
        </div>
        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden mt-4">
          <motion.div 
            className="h-full bg-shooting-blue"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIdx + 1) / activeQuizzes.length) * 100}%` }}
          />
        </div>
      </header>

      <div className="space-y-6">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-8">
          <h2 className="text-xl font-bold leading-tight text-gray-800">
            {currentQuiz.question}
          </h2>

          <div className="space-y-3">
            {currentQuiz.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                disabled={isAnswered}
                className={cn(
                  "w-full p-5 rounded-2xl text-left font-medium transition-all border flex items-center justify-between group",
                  selectedOption === idx 
                    ? isAnswered 
                      ? idx === currentQuiz.correctAnswer 
                        ? "bg-green-50 border-green-200 text-green-700" 
                        : "bg-red-50 border-red-200 text-red-700"
                      : "bg-shooting-blue/5 border-shooting-blue text-shooting-blue"
                    : isAnswered && idx === currentQuiz.correctAnswer
                      ? "bg-green-50 border-green-200 text-green-700"
                      : "bg-gray-50 border-gray-100 text-gray-600 hover:border-gray-200"
                )}
              >
                <span>{option}</span>
                {isAnswered && idx === currentQuiz.correctAnswer && (
                  <CheckCircle2 size={20} className="text-green-500" />
                )}
                {isAnswered && selectedOption === idx && idx !== currentQuiz.correctAnswer && (
                  <XCircle size={20} className="text-red-500" />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="pt-6 border-t border-gray-100 space-y-3"
              >
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Explanation</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {currentQuiz.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!isAnswered ? (
          <button
            onClick={handleCheck}
            disabled={selectedOption === null}
            className="w-full bg-shooting-black text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black transition-colors shadow-xl shadow-black/10"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full bg-shooting-blue text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors shadow-xl shadow-blue-500/20"
          >
            {currentIdx < activeQuizzes.length - 1 ? "Next Question" : "Finish Quiz"} <ArrowRight size={20} />
          </button>
        )}
      </div>
    </motion.div>
  );
}
