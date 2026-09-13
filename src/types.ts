export type CognitiveLevel = 'nhan_biet' | 'thong_hieu' | 'van_dung' | 'tong_hop';

export interface StudentInfo {
  fullName: string;
  className: string;
}

export interface Lesson {
  id: string;
  number: number | string;
  title: string;
  chapterId: string;
  chapterName: string;
  pages: string;
}

export interface Question {
  id: string;
  lessonId: string;
  lessonTitle: string;
  chapterId: string;
  chapterName: string;
  level: 'nhan_biet' | 'thong_hieu' | 'van_dung';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  textbookRef: string;
  diagramNote?: string;
}

export interface QuizConfig {
  student: StudentInfo;
  lessonId: string; // lessonId or 'all' or chapterId like 'chapter-1'
  questionCount: number; // 5 to 30
  level: CognitiveLevel;
  timed: boolean;
  timeLimitSeconds: number;
}

export interface QuizResult {
  student: StudentInfo;
  config: QuizConfig;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
  completedAt: string;
  levelStats: {
    nhan_biet: { total: number; correct: number };
    thong_hieu: { total: number; correct: number };
    van_dung: { total: number; correct: number };
  };
  answers: {
    questionId: string;
    selectedIndex: number | null;
    isCorrect: boolean;
  }[];
  rankTitle: string;
  rankBadge: string;
  rankClassification?: 'XUẤT SẮC' | 'GIỎI' | 'HOÀN THÀNH TỐT' | 'HOÀN THÀNH' | 'CẦN CỐ GẮNG';
  feedbackSummary: string;
  recommendations: string[];
}

export interface QuizHistoryRecord {
  id: string;
  timestamp: number;
  completedAt: string;
  studentName: string;
  className: string;
  lessonTitle: string;
  level: string;
  levelLabel: string;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  score: number;
  percentage: number;
  classification: 'XUẤT SẮC' | 'GIỎI' | 'HOÀN THÀNH TỐT' | 'HOÀN THÀNH' | 'CẦN CỐ GẮNG';
  rankTitle: string;
  timeSpentSeconds: number;
  timeSpentFormatted: string;
  statsNhanBiet: string;
  statsThongHieu: string;
  statsVanDung: string;
  rawResult?: QuizResult;
}
