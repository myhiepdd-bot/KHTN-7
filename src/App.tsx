/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SetupScreen } from './components/SetupScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { CertificateModal } from './components/CertificateModal';
import { HistoryModal } from './components/HistoryModal';
import { QuizConfig, Question, QuizResult, StudentInfo, QuizHistoryRecord } from './types';
import { generateQuizQuestions, QUESTION_BANK } from './data/questionBank';
import { LESSONS } from './data/lessons';
import { getHistoryRecords, saveHistoryRecord } from './utils/historyStorage';

export default function App() {
  const [screen, setScreen] = useState<'setup' | 'quiz' | 'result'>('setup');
  
  const [student, setStudent] = useState<StudentInfo>(() => {
    try {
      const saved = localStorage.getItem('khtn7_student_info');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return { fullName: '', className: '7A1' };
  });

  const [currentConfig, setCurrentConfig] = useState<QuizConfig | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentResult, setCurrentResult] = useState<QuizResult | null>(null);
  const [certificateResult, setCertificateResult] = useState<QuizResult | null>(null);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [showHistoryModal, setShowHistoryModal] = useState<boolean>(false);
  const [historyRecords, setHistoryRecords] = useState<QuizHistoryRecord[]>(() => getHistoryRecords());

  // Save student info when changed
  useEffect(() => {
    if (student.fullName) {
      try {
        localStorage.setItem('khtn7_student_info', JSON.stringify(student));
      } catch (e) {}
    }
  }, [student]);

  const handleStartQuiz = (config: QuizConfig) => {
    setStudent(config.student);
    setCurrentConfig(config);

    const questions = generateQuizQuestions(config.lessonId, config.level, config.questionCount);
    setActiveQuestions(questions);
    setScreen('quiz');
  };

  const handleSubmitQuiz = (result: QuizResult) => {
    const lessonTitle = currentConfig?.lessonId === 'all'
      ? 'Toàn bộ chương trình KHTN 7 (Tổng hợp)'
      : LESSONS.find(l => l.id === currentConfig?.lessonId)?.title || 'Bài ôn tập KHTN 7';

    saveHistoryRecord(result, lessonTitle);
    setHistoryRecords(getHistoryRecords());

    setCurrentResult(result);
    setCertificateResult(result);
    setScreen('result');
  };

  const handleRetryAll = () => {
    if (!currentConfig) return;
    const freshQuestions = generateQuizQuestions(currentConfig.lessonId, currentConfig.level, currentConfig.questionCount);
    setActiveQuestions(freshQuestions);
    setScreen('quiz');
  };

  const handleRetryWrongOnly = (wrongQuestionIds: string[]) => {
    if (!currentConfig) return;
    const wrongQs = QUESTION_BANK.filter(q => wrongQuestionIds.includes(q.id));
    if (wrongQs.length === 0) return;

    setActiveQuestions(wrongQs);
    setCurrentConfig({
      ...currentConfig,
      questionCount: wrongQs.length,
      timeLimitSeconds: wrongQs.length * 60
    });
    setScreen('quiz');
  };

  const handleNewQuiz = () => {
    setScreen('setup');
  };

  const handleOpenCertificate = (resultToUse?: QuizResult) => {
    if (resultToUse) {
      setCertificateResult(resultToUse);
    } else if (currentResult) {
      setCertificateResult(currentResult);
    }
    setShowCertificate(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/80 via-slate-50 to-orange-50/60 text-slate-800 font-sans selection:bg-orange-500 selection:text-white">
      <Header
        currentStudent={student}
        onReset={handleNewQuiz}
        inQuiz={screen === 'quiz'}
        onOpenHistory={() => setShowHistoryModal(true)}
        historyCount={historyRecords.length}
      />

      <main>
        {screen === 'setup' && (
          <SetupScreen
            initialStudent={student}
            onStartQuiz={handleStartQuiz}
            onOpenHistory={() => setShowHistoryModal(true)}
            historyCount={historyRecords.length}
          />
        )}

        {screen === 'quiz' && currentConfig && (
          <QuizScreen
            config={currentConfig}
            questions={activeQuestions}
            onSubmitQuiz={handleSubmitQuiz}
            onQuit={handleNewQuiz}
          />
        )}

        {screen === 'result' && currentResult && (
          <ResultScreen
            result={currentResult}
            questions={activeQuestions}
            onRetryAll={handleRetryAll}
            onRetryWrongOnly={handleRetryWrongOnly}
            onNewQuiz={handleNewQuiz}
            onOpenCertificate={() => handleOpenCertificate(currentResult)}
            onOpenHistory={() => setShowHistoryModal(true)}
          />
        )}
      </main>

      {/* History and Excel Export Modal */}
      {showHistoryModal && (
        <HistoryModal
          records={historyRecords}
          onClose={() => setShowHistoryModal(false)}
          onRefreshRecords={() => setHistoryRecords(getHistoryRecords())}
          onViewCertificateForRecord={(recordResult) => {
            setCertificateResult(recordResult);
            setShowCertificate(true);
          }}
        />
      )}

      {/* Certificate Modal */}
      {showCertificate && (certificateResult || currentResult) && (
        <CertificateModal
          result={certificateResult || currentResult!}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </div>
  );
}
