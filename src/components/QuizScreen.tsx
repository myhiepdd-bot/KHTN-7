import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  Flag, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  BookOpen, 
  Sparkles, 
  Layers, 
  Send, 
  RotateCcw,
  Volume2,
  VolumeX,
  Award
} from 'lucide-react';
import { Question, QuizConfig, QuizResult } from '../types';
import { playEpicFanfare, triggerCelebrationFlowers, playWrongSoundAndVoice } from '../utils/soundEffects';

interface QuizScreenProps {
  config: QuizConfig;
  questions: Question[];
  onSubmitQuiz: (result: QuizResult) => void;
  onQuit: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  config,
  questions,
  onSubmitQuiz,
  onQuit
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState<number>(config.timeLimitSeconds);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const startTimeRef = useRef<number>(Date.now());

  const currentQ = questions[currentIndex];
  const totalQ = questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const selectedOptionForCurrent = userAnswers[currentIndex];
  const isAnswered = selectedOptionForCurrent !== undefined;
  const isCorrect = isAnswered && selectedOptionForCurrent === currentQ.correctIndex;

  // Timer countdown
  useEffect(() => {
    if (!config.timed) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleForceSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [config.timed]);

  // Keyboard shortcut navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['1', '2', '3', '4'].includes(e.key)) {
        const optIdx = parseInt(e.key, 10) - 1;
        handleSelectOption(optIdx);
      } else if (['a', 'A'].includes(e.key)) {
        handleSelectOption(0);
      } else if (['b', 'B'].includes(e.key)) {
        handleSelectOption(1);
      } else if (['c', 'C'].includes(e.key)) {
        handleSelectOption(2);
      } else if (['d', 'D'].includes(e.key)) {
        handleSelectOption(3);
      } else if (e.key === 'ArrowRight' && currentIndex < totalQ - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, totalQ, soundEnabled, currentQ]);

  const handleSelectOption = (optionIndex: number) => {
    const isNowCorrect = optionIndex === currentQ.correctIndex;
    
    // Play sound and trigger visual effects
    if (soundEnabled) {
      if (isNowCorrect) {
        playEpicFanfare();
        triggerCelebrationFlowers();
      } else {
        playWrongSoundAndVoice();
      }
    } else if (isNowCorrect) {
      // Even if sound muted, trigger flowers
      triggerCelebrationFlowers();
    }

    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
  };

  const toggleFlag = (index: number) => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateResults = (): QuizResult => {
    const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
    let correctCount = 0;

    const levelStats = {
      nhan_biet: { total: 0, correct: 0 },
      thong_hieu: { total: 0, correct: 0 },
      van_dung: { total: 0, correct: 0 }
    };

    const answersDetail = questions.map((q, idx) => {
      const selected = userAnswers[idx] !== undefined ? userAnswers[idx] : null;
      const isAnsCorrect = selected === q.correctIndex;

      if (isAnsCorrect) correctCount++;

      if (q.level === 'nhan_biet') {
        levelStats.nhan_biet.total++;
        if (isAnsCorrect) levelStats.nhan_biet.correct++;
      } else if (q.level === 'thong_hieu') {
        levelStats.thong_hieu.total++;
        if (isAnsCorrect) levelStats.thong_hieu.correct++;
      } else if (q.level === 'van_dung') {
        levelStats.van_dung.total++;
        if (isAnsCorrect) levelStats.van_dung.correct++;
      }

      return {
        questionId: q.id,
        selectedIndex: selected,
        isCorrect: isAnsCorrect
      };
    });

    const percentage = Math.round((correctCount / totalQ) * 100);
    const scoreOnTen = Number(((correctCount / totalQ) * 10).toFixed(1));

    let rankClassification: 'XUẤT SẮC' | 'GIỎI' | 'HOÀN THÀNH TỐT' | 'HOÀN THÀNH' | 'CẦN CỐ GẮNG' = 'CẦN CỐ GẮNG';
    let rankTitle = 'Học Viên Tập Sự Phòng Lab';
    let rankBadge = '🧪 Cần Cố Gắng Thêm';
    let feedbackSummary = 'Em đã rất cố gắng tham gia thử thách. Hãy tiếp tục ôn luyện để củng cố các kiến thức nền tảng trong SGK Khoa học tự nhiên 7 nhé!';
    const recommendations: string[] = [];

    if (percentage >= 90) {
      rankClassification = 'XUẤT SẮC';
      rankTitle = 'Chuyên Gia Phòng Thí Nghiệm Xuất Sắc';
      rankBadge = '🏆 XẾP LOẠI: XUẤT SẮC';
      feedbackSummary = 'Xuất sắc tuyệt đối! Em có tư duy khoa học rất nhạy bén, nắm vững toàn diện lí thuyết và giải quyết thành thạo các tình huống thí nghiệm và thực tiễn.';
      recommendations.push('Phát huy tối đa năng lực giải các bài tập vận dụng cao và hiện tượng tự nhiên sâu hơn.');
      recommendations.push('Tự tin tham gia các câu lạc bộ khoa học và kỳ thi học sinh giỏi KHTN.');
    } else if (percentage >= 80) {
      rankClassification = 'GIỎI';
      rankTitle = 'Chuyên Gia Phòng Thí Nghiệm Hạng Giỏi';
      rankBadge = '🥇 XẾP LOẠI: GIỎI';
      feedbackSummary = 'Kết quả rất ấn tượng! Em nắm vững chắc các bài học trọng tâm, phân tích logic tốt và đạt danh hiệu học sinh Giỏi KHTN 7.';
      recommendations.push('Rà soát lại một số câu hỏi vận dụng tính toán hoặc đồ thị chuyển động để đạt điểm tuyệt đối.');
      recommendations.push('Đọc kĩ phần "Em có thể" và "Em có biết" trong SGK để mở rộng vốn hiểu biết.');
    } else if (percentage > 50) {
      rankClassification = 'HOÀN THÀNH TỐT';
      rankTitle = 'Kĩ Thuật Viên Phòng Lab Hoàn Thành Tốt';
      rankBadge = '🥈 XẾP LOẠI: HOÀN THÀNH TỐT';
      feedbackSummary = 'Em đã hoàn thành tốt bài kiểm tra đánh giá kiến thức khoa học, hiểu rõ bản chất quy luật và phương pháp thí nghiệm.';
      recommendations.push('Ôn lại Bảng tuần hoàn, cấu tạo nguyên tử và các phương trình quang hợp, hô hấp tế bào.');
      recommendations.push('Luyện tập thêm các câu hỏi ở mức Vận dụng để nâng cao xếp loại Giỏi.');
    } else if (percentage === 50) {
      rankClassification = 'HOÀN THÀNH';
      rankTitle = 'Kĩ Thuật Viên Phòng Lab Đạt Chuẩn';
      rankBadge = '🥉 XẾP LOẠI: HOÀN THÀNH';
      feedbackSummary = 'Chúc mừng em đã hoàn thành bài khảo sát đạt chuẩn. Hãy tiếp tục phát huy để đạt mức Hoàn thành tốt và Giỏi nhé!';
      recommendations.push('Đọc kĩ lại các khái niệm cơ bản trong sách giáo khoa từ bài 1 đến bài 42.');
      recommendations.push('Tập trung làm lại các câu ở mức Thông hiểu để tăng điểm số.');
    } else {
      rankClassification = 'CẦN CỐ GẮNG';
      recommendations.push('Đọc lại sách giáo khoa KHTN 7 theo từng bài học cụ thể từ trang 6 đến 174.');
      recommendations.push('Làm lại bài kiểm tra ở mức độ "Nhận biết" để củng cố chắc các khái niệm cốt lõi trước.');
    }

    return {
      student: config.student,
      config,
      score: scoreOnTen,
      totalQuestions: totalQ,
      percentage,
      timeSpentSeconds: timeSpent,
      completedAt: new Date().toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
      rankTitle,
      rankBadge,
      rankClassification,
      answers: answersDetail,
      levelStats,
      feedbackSummary,
      recommendations
    };
  };

  const handleForceSubmit = () => {
    const finalResult = calculateResults();
    onSubmitQuiz(finalResult);
  };

  const handleManualSubmit = () => {
    setShowConfirmModal(true);
  };

  const confirmSubmit = () => {
    setShowConfirmModal(false);
    handleForceSubmit();
  };

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="min-h-[calc(100vh-70px)] py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Floating Control Bar - Bright Vibrant Theme */}
        <div className="bg-white rounded-2xl border border-blue-100 p-4 shadow-md shadow-blue-500/5 flex flex-wrap items-center justify-between gap-4">
          {/* Left: Progress info */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tiến độ bài làm:</span>
            <span className="text-base font-black text-blue-700">
              Câu {currentIndex + 1} <span className="text-slate-400 font-normal">/ {totalQ}</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
              Đã làm: {answeredCount}/{totalQ}
            </span>
          </div>

          {/* Center: Timer & Level Badge */}
          <div className="flex items-center gap-3">
            {config.timed && (
              <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border-2 font-mono text-sm font-bold shadow-sm ${
                timeLeft <= 60 
                  ? 'bg-rose-50 border-rose-500 text-rose-600 animate-pulse' 
                  : 'bg-orange-50 border-orange-300 text-orange-700'
              }`}>
                <Clock className="w-4 h-4 text-orange-500" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            )}

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>{
                currentQ.level === 'nhan_biet' ? 'Mức: Nhận biết' :
                currentQ.level === 'thong_hieu' ? 'Mức: Thông hiểu' : 'Mức: Vận dụng'
              }</span>
            </div>

            {/* Sound Toggle */}
            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                soundEnabled 
                  ? 'bg-orange-50 border-orange-300 text-orange-700 hover:bg-orange-100' 
                  : 'bg-slate-100 border-slate-200 text-slate-500 hover:bg-slate-200'
              }`}
              title={soundEnabled ? 'Âm thanh: BẬT' : 'Âm thanh: TẮT'}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-orange-600 animate-pulse" />
                  <span>Âm thanh: BẬT</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                  <span>Âm thanh: TẮT</span>
                </>
              )}
            </button>
          </div>

          {/* Right: Submit Button */}
          <div className="flex items-center gap-2">
            <button
              id="btn-submit-exam"
              onClick={handleManualSubmit}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-orange-500/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95"
            >
              <Send className="w-4 h-4" />
              NỘP BÀI THI
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-500 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalQ) * 100}%` }}
          />
        </div>

        {/* Main Quiz Area: Split into Question + Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          
          {/* Left/Center: Question Card (3 cols on desktop) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-8 shadow-lg shadow-blue-500/5 space-y-6">
              
              {/* Question Meta Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-black shadow-sm">
                    CÂU {currentIndex + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Bài {currentQ.lessonNumber}: {currentQ.chapterName}
                  </span>
                </div>

                <button
                  type="button"
                  id="btn-flag-question"
                  onClick={() => toggleFlag(currentIndex)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    flaggedQuestions[currentIndex]
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Flag className={`w-3.5 h-3.5 ${flaggedQuestions[currentIndex] ? 'fill-amber-500 text-amber-600' : ''}`} />
                  {flaggedQuestions[currentIndex] ? 'Đã cắm cờ xem lại' : 'Cắm cờ xem lại'}
                </button>
              </div>

              {/* Question Text */}
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-relaxed">
                  {currentQ.question || (currentQ as any).content}
                </h3>
              </div>

              {/* CELEBRATION OR CRYING FACE FEEDBACK BANNER */}
              {isAnswered && (
                <div className="animate-celebration-pop">
                  {isCorrect ? (
                    /* CORRECT BANNER: TUNG BÔNG TUNG HOA CHÚC MỪNG HOÀNH TRÁNG */
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25 flex items-center justify-between gap-4 border-2 border-emerald-300">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-3xl shrink-0 shadow-inner">
                          🎉
                        </div>
                        <div>
                          <div className="font-black text-base sm:text-lg flex items-center gap-2 drop-shadow-sm">
                            <span>CHÍNH XÁC XUẤT SẮC! +1 ĐIỂM</span>
                            <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow" />
                          </div>
                          <p className="text-xs sm:text-sm text-emerald-100 mt-0.5">
                            🌸 Tung bông tung hoa chúc mừng em đã xuất sắc trả lời đúng câu hỏi này!
                          </p>
                        </div>
                      </div>
                      <div className="text-2xl hidden sm:block animate-bounce">
                        🌺🌻🌷
                      </div>
                    </div>
                  ) : (
                    /* INCORRECT BANNER: Ố Ồ & MẶT KHÓC */
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-rose-500 text-white shadow-lg shadow-orange-500/25 flex items-center justify-between gap-4 border-2 border-orange-300 animate-head-shake">
                      <div className="flex items-center gap-4">
                        {/* Animated Crying Face with Tears */}
                        <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 shrink-0 select-none shadow-inner">
                          <span className="text-4xl animate-head-shake">😭</span>
                          {/* Animated teardrops falling */}
                          <span className="absolute -bottom-1 left-2 w-2 h-3 bg-cyan-200 rounded-full animate-tear-left opacity-80" />
                          <span className="absolute -bottom-1 right-2 w-2 h-3 bg-cyan-200 rounded-full animate-tear-right opacity-80" />
                        </div>

                        <div>
                          <div className="font-black text-base sm:text-lg flex items-center gap-2 drop-shadow-sm">
                            <span>Ố Ồ! TIẾC QUÁ, CHƯA CHÍNH XÁC RỒI!</span>
                            <span className="text-xl">🥺</span>
                          </div>
                          <p className="text-xs sm:text-sm text-orange-100 mt-1">
                            Em đừng buồn nhé! Đáp án đúng là:{' '}
                            <strong className="underline decoration-amber-300 font-extrabold text-white">
                              {optionLetters[currentQ.correctIndex]}. {currentQ.options[currentQ.correctIndex]}
                            </strong>
                          </p>
                        </div>
                      </div>

                      <div className="text-3xl hidden sm:block">
                        💧😭💧
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 4 Options Grid */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedOptionForCurrent === idx;
                  const isThisCorrect = idx === currentQ.correctIndex;
                  
                  let optionCardClasses = 'bg-slate-50 border-2 border-slate-200 text-slate-800 hover:border-blue-400 hover:bg-blue-50/50';
                  let letterBadgeClasses = 'bg-slate-200 text-slate-700';

                  if (isAnswered) {
                    if (isThisCorrect) {
                      // Correct option always highlighted green
                      optionCardClasses = 'bg-emerald-50 border-2 border-emerald-500 text-emerald-950 font-bold shadow-md shadow-emerald-500/10 ring-2 ring-emerald-400/20';
                      letterBadgeClasses = 'bg-emerald-600 text-white';
                    } else if (isSelected && !isThisCorrect) {
                      // Student selected wrong option
                      optionCardClasses = 'bg-rose-50 border-2 border-rose-500 text-rose-950 font-bold shadow-md shadow-rose-500/10';
                      letterBadgeClasses = 'bg-rose-600 text-white';
                    } else {
                      optionCardClasses = 'bg-slate-50/60 border border-slate-200 text-slate-500 opacity-60';
                      letterBadgeClasses = 'bg-slate-200 text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      id={`question-option-${idx}`}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-4 rounded-2xl flex items-center justify-between text-left transition-all cursor-pointer ${optionCardClasses}`}
                    >
                      <div className="flex items-center gap-3.5 pr-2">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm shrink-0 shadow-sm ${letterBadgeClasses}`}>
                          {optionLetters[idx]}
                        </span>
                        <span className="text-sm sm:text-base leading-snug">
                          {option}
                        </span>
                      </div>

                      <div className="shrink-0 pl-2">
                        {isAnswered && isThisCorrect && (
                          <span className="flex items-center gap-1 text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            Đúng
                          </span>
                        )}
                        {isAnswered && isSelected && !isThisCorrect && (
                          <span className="flex items-center gap-1 text-xs font-extrabold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-full">
                            <XCircle className="w-4 h-4 text-rose-600" />
                            Ố ồ! 😭
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Detailed SGK Explanation & Textbook Reference (shown when answered) */}
              {isAnswered && (
                <div className="p-4 sm:p-5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-950 space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-black text-blue-800">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span>LỜI GIẢI CHI TIẾT & CĂN CỨ SGK KHTN 7:</span>
                  </div>
                  <p className="leading-relaxed text-slate-700 font-medium pl-6">
                    {currentQ.explanation}
                  </p>
                  <div className="pl-6 pt-1 text-[11px] font-bold text-orange-600 flex items-center gap-1">
                    <span>📖 Tra cứu nhanh:</span>
                    <span>{currentQ.textbookRef}</span>
                  </div>
                </div>
              )}

              {/* Bottom Navigation Buttons inside Question Card */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <button
                  type="button"
                  id="btn-prev-question"
                  onClick={() => setCurrentIndex(prev => Math.max(prev - 1, 0))}
                  disabled={currentIndex === 0}
                  className={`px-4 py-2.5 rounded-xl border flex items-center gap-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    currentIndex === 0 
                      ? 'border-slate-200 text-slate-300 cursor-not-allowed' 
                      : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Câu trước
                </button>

                <div className="flex items-center gap-2">
                  {currentIndex < totalQ - 1 ? (
                    <button
                      type="button"
                      id="btn-next-question"
                      onClick={() => setCurrentIndex(prev => Math.min(prev + 1, totalQ - 1))}
                      className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-orange-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      Câu tiếp theo
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      id="btn-finish-quiz"
                      onClick={handleManualSubmit}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-orange-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      Hoàn thành & Xem kết quả
                      <Award className="w-4 h-4 text-amber-300" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Question Navigation Matrix Drawer (1 col on desktop) */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-3xl border border-blue-100 p-5 shadow-lg shadow-blue-500/5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <h4 className="text-xs font-black uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-orange-500" />
                  Bảng câu hỏi ({totalQ})
                </h4>
                <span className="text-[11px] font-bold text-slate-500">
                  {answeredCount}/{totalQ} đã làm
                </span>
              </div>

              {/* Number buttons grid */}
              <div className="grid grid-cols-5 gap-2 max-h-[380px] overflow-y-auto pr-1">
                {questions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAns = userAnswers[idx] !== undefined;
                  const isAnsCorr = isAns && userAnswers[idx] === q.correctIndex;
                  const isFlag = flaggedQuestions[idx];

                  let btnClasses = 'bg-slate-50 border border-slate-200 text-slate-700 hover:border-blue-300';

                  if (isCurrent) {
                    btnClasses = 'ring-3 ring-blue-500 font-black border-blue-600 bg-blue-50 text-blue-900 shadow-sm';
                  } else if (isAns) {
                    if (isAnsCorr) {
                      btnClasses = 'bg-emerald-500 text-white border-emerald-600 font-bold shadow-sm shadow-emerald-500/20';
                    } else {
                      btnClasses = 'bg-orange-500 text-white border-orange-600 font-bold shadow-sm shadow-orange-500/20';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      id={`nav-q-${idx}`}
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative h-10 rounded-xl text-xs flex items-center justify-center font-bold transition-all cursor-pointer ${btnClasses}`}
                    >
                      {idx + 1}
                      {isFlag && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-white" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px] font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-emerald-500 shrink-0" />
                  <span>Đã trả lời đúng</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-orange-500 shrink-0" />
                  <span>Đã trả lời sai (Ố ồ 😭)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-slate-100 border border-slate-300 shrink-0" />
                  <span>Chưa trả lời</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded ring-2 ring-blue-500 bg-blue-50 shrink-0" />
                  <span>Đang xem</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-400 shrink-0" />
                  <span>Cắm cờ cần xem lại</span>
                </div>
              </div>

              {/* Exit button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onQuit}
                  className="w-full py-2 px-3 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 text-xs font-bold transition-colors cursor-pointer text-center"
                >
                  Thoát về màn hình chính
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal Before Submit */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-md w-full rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border-2 border-blue-100 space-y-5 text-center">
            <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 mx-auto flex items-center justify-center text-2xl shadow-inner">
              <Send className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-slate-900">
                Xác nhận nộp bài thi?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Em đã hoàn thành <strong className="text-blue-600">{answeredCount}/{totalQ}</strong> câu hỏi.
                {answeredCount < totalQ && (
                  <span className="block text-orange-600 font-bold mt-1">
                    ⚠️ Còn {totalQ - answeredCount} câu chưa trả lời!
                  </span>
                )}
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 py-3 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                Làm tiếp
              </button>
              <button
                type="button"
                id="btn-confirm-submit"
                onClick={confirmSubmit}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs sm:text-sm font-black shadow-md shadow-orange-500/25 transition-all cursor-pointer"
              >
                Đồng ý nộp bài
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
