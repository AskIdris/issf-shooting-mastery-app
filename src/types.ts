export interface TrainingSession {
  id: string;
  date: string;
  type: 'Air Pistol' | 'Rapid Fire' | 'Sport Pistol';
  shots: number[];
  notes: string;
  score: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  content: string;
  category: 'Stance' | 'Grip' | 'Sight Alignment' | 'Trigger Control' | 'Mental' | 'Equipment' | 'Safety' | 'Technique';
  imageUrl?: string;
  videoUrl?: string;
}

export interface Drill {
  id: string;
  title: string;
  description: string;
  steps: string[];
  type: 'Dry Fire' | 'Live Fire' | 'Timed' | 'Stability' | 'Grip' | 'Trigger Control';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  targetSuccess?: number; // e.g., 90%
  imageUrl?: string;
  videoUrl?: string;
  visualCues?: {
    correct: string;
    incorrect: string;
  };
}

export interface DrillAttempt {
  id: string;
  drillId: string;
  date: string;
  successRate: number; // 0-100
  notes: string;
}
