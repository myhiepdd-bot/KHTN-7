import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  BarChart3, 
  RotateCcw, 
  Printer, 
  FileText, 
  BookOpen, 
  Sparkles, 
  Clock, 
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Layers,
  FileSpreadsheet
} from 'lucide-react';
import { QuizResult, Question } from '../types';

interface ResultScreenProps {
  result: QuizResult;
  questions: Question[];
  onRetryAll: () => void;
  onRetryWrongOnly: (wrongQuestionIds: string[]) => void;
  onNewQuiz: () => void;
  onOpenCertificate: () => void;
  onOpenHistory?: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  result,
  questions,
  onRetryAll,
  onRetryWrongOnly,
  onNewQuiz,
  onOpenCertificate,
  onOpenHistory
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'wrong' | 'correct'>('all');
  const [expandedExplanations, setExpandedExplanations] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (result.percentage >= 60) {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.55 }
        });
      } catch (e) {}
    }
  }, [result.percentage]);

  const toggleExplanation = (qId: string) => {
    setExpandedExplanations(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const wrongAnswers = result.answers.filter(a => !a.isCorrect);
  const correctCount = result.answers.filter(a => a.isCorrect).length;

  const filteredQuestions = questions.filter((q, idx) => {
    const ans = result.answers[idx];
    if (filterMode === 'wrong') return !ans.isCorrect;
    if (filterMode === 'correct') return ans.isCorrect;
    return true;
  });

  const formatSeconds = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins} phút ${s < 10 ? '0' : ''}${s} giây`;
  };

  const getRankBadgeInfo = () => {
    if (result.percentage >= 90) {
      return {
        badgeBg: 'bg-amber-400 text-slate-950 font-black ring-2 ring-amber-300',
        icon: '🏆',
        scoreColor: 'text-orange-600',
        classification: 'XUẤT SẮC'
      };
    }
    if (result.percentage >= 80) {
      return {
        badgeBg: 'bg-orange-500 text-white font-black ring-2 ring-orange-300',
        icon: '🥇',
        scoreColor: 'text-orange-600',
        classification: 'GIỎI'
      };
    }
    if (result.percentage > 50) {
      return {
        badgeBg: 'bg-blue-600 text-white font-bold ring-2 ring-blue-300',
        icon: '🥈',
        scoreColor: 'text-blue-600',
        classification: 'HOÀN THÀNH TỐT'
      };
    }
    if (result.percentage === 50) {
      return {
        badgeBg: 'bg-emerald-600 text-white font-bold ring-2 ring-emerald-300',
        icon: '🥉',
        scoreColor: 'text-emerald-600',
        classification: 'HOÀN THÀNH'
      };
    }
    return {
      badgeBg: 'bg-slate-600 text-white font-medium',
      icon: '🧪',
      scoreColor: 'text-slate-700',
      classification: 'CẦN CỐ GẮNG'
    };
  };

  const badgeInfo = getRankBadgeInfo();

  return (
    <div className="min-h-[calc(100vh-70px)] py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Main Performance Summary Card - Royal Blue & Orange */}
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white p-6 sm:p-10 shadow-xl shadow-blue-600/15 border-2 border-blue-400/30 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-orange-500/25 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Info */}
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs shadow-sm uppercase tracking-wider backdrop-blur-md bg-white/20 border border-white/30 text-white font-extrabold">
                <span>{badgeInfo.icon}</span>
                <span>{result.rankBadge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                {result.rankTitle}
              </h2>

              <p className="text-sm sm:text-base text-blue-100 max-w-xl leading-relaxed">
                Học sinh: <strong className="text-white font-black text-base">{result.student.fullName}</strong> • Lớp: <strong className="px-2 py-0.5 rounded bg-orange-500 text-white font-extrabold text-xs ml-1">Lớp {result.student.className}</strong>
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 text-xs text-blue-100 font-medium">
                <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1.5 rounded-xl border border-white/25">
                  <Clock className="w-3.5 h-3.5 text-amber-300" />
                  Thời gian: {formatSeconds(result.timeSpentSeconds)}
                </span>
                <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1.5 rounded-xl border border-white/25">
                  <FileText className="w-3.5 h-3.5 text-amber-300" />
                  Ngày thi: {result.completedAt}
                </span>
                <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1.5 rounded-xl border border-white/25">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  Tác giả biên soạn: <strong className="text-amber-300 font-black">HIỆP AI</strong>
                </span>
              </div>
            </div>

            {/* Right Big Score Card */}
            <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white text-slate-900 shadow-2xl min-w-[220px] text-center border-2 border-orange-300 shrink-0">
              <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-1">
                Điểm Đánh Giá
              </div>
              <div className="text-5xl sm:text-6xl font-black font-mono text-orange-600 drop-shadow-sm">
                {result.score}
                <span className="text-2xl text-slate-400 font-medium">/10</span>
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-slate-700 mt-2">
                Đúng <strong className="text-emerald-600 font-black">{correctCount}</strong> / {result.totalQuestions} câu ({result.percentage}%)
              </div>
              
              <button
                id="btn-open-certificate"
                type="button"
                onClick={onOpenCertificate}
                className="mt-4 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-black shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-orange-300"
              >
                <Award className="w-4 h-4 text-yellow-200" />
                <span>Nhận Chứng Nhận (Khổ 16:9)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cognitive Level Breakdown Grid (3 Mức độ nhận thức) */}
        <div className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-8 shadow-lg shadow-blue-500/5 space-y-6">
          <div className="flex items-center justify-between border-b border-blue-50 pb-3">
            <h3 className="text-base sm:text-lg font-black text-blue-700 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-orange-500" />
              Phân tích chi tiết mức độ nắm bài theo chuẩn nhận thức
            </h3>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              SGK KHTN 7
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* NHẬN BIẾT */}
            <div className="p-5 rounded-2xl bg-slate-50 border-2 border-emerald-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-700 uppercase tracking-wider">Mức 1: Nhận Biết</span>
                <span className="text-xs font-mono font-black text-slate-800 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                  {result.levelStats.nhan_biet.correct}/{result.levelStats.nhan_biet.total} câu
                </span>
              </div>
              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${result.levelStats.nhan_biet.total > 0 
                      ? (result.levelStats.nhan_biet.correct / result.levelStats.nhan_biet.total) * 100 
                      : 100}%`
                  }}
                />
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                Ghi nhớ khái niệm, cấu tạo nguyên tử, kí hiệu hoá học và đơn vị đo lường cơ bản.
              </p>
            </div>

            {/* THÔNG HIỂU */}
            <div className="p-5 rounded-2xl bg-slate-50 border-2 border-blue-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-blue-700 uppercase tracking-wider">Mức 2: Thông Hiểu</span>
                <span className="text-xs font-mono font-black text-slate-800 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                  {result.levelStats.thong_hieu.correct}/{result.levelStats.thong_hieu.total} câu
                </span>
              </div>
              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${result.levelStats.thong_hieu.total > 0 
                      ? (result.levelStats.thong_hieu.correct / result.levelStats.thong_hieu.total) * 100 
                      : 100}%`
                  }}
                />
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                Hiểu bản chất quang hợp, hô hấp, sóng âm, từ trường và phân tích đồ thị quãng đường.
              </p>
            </div>

            {/* VẬN DỤNG */}
            <div className="p-5 rounded-2xl bg-slate-50 border-2 border-orange-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-orange-700 uppercase tracking-wider">Mức 3: Vận Dụng</span>
                <span className="text-xs font-mono font-black text-slate-800 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                  {result.levelStats.van_dung.correct}/{result.levelStats.van_dung.total} câu
                </span>
              </div>
              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                <div 
                  className="bg-orange-500 h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${result.levelStats.van_dung.total > 0 
                      ? (result.levelStats.van_dung.correct / result.levelStats.van_dung.total) * 100 
                      : 100}%`
                  }}
                />
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                Tính toán tốc độ, khối lượng phân tử, phản xạ ánh sáng và giải thích hiện tượng thực tế.
              </p>
            </div>
          </div>

          {/* Pedagogy Note & Recommendations */}
          <div className="p-5 rounded-2xl bg-orange-50 border-2 border-orange-200 space-y-2 text-slate-800">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-orange-800">
              <Sparkles className="w-4 h-4 text-orange-600" />
              Nhận xét sư phạm từ Tác giả HIỆP AI:
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {result.feedbackSummary}
            </p>
            {result.recommendations.length > 0 && (
              <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside pt-1 font-medium">
                {result.recommendations.map((rec, rIdx) => (
                  <li key={rIdx}>{rec}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-3xl bg-white border border-blue-100 shadow-md shadow-blue-500/5">
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              id="btn-retry-all"
              type="button"
              onClick={onRetryAll}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-sm shadow-blue-600/20 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-blue-200" />
              Làm lại đề này
            </button>

            {wrongAnswers.length > 0 && (
              <button
                id="btn-retry-wrong-only"
                type="button"
                onClick={() => onRetryWrongOnly(wrongAnswers.map(w => w.questionId))}
                className="px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-sm shadow-orange-500/20 cursor-pointer"
              >
                <AlertTriangle className="w-4 h-4 text-amber-200" />
                Luyện lại {wrongAnswers.length} câu làm sai (Ố ồ 😭)
              </button>
            )}

            <button
              id="btn-new-quiz"
              type="button"
              onClick={onNewQuiz}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-slate-600" />
              Chọn bài khác / Đề mới
            </button>
          </div>

          <div className="flex items-center gap-2">
            {onOpenHistory && (
              <button
                id="btn-result-open-history"
                type="button"
                onClick={onOpenHistory}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                title="Xem danh sách điểm của cả lớp và tải file Excel"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-100" />
                <span>Lịch Sử & Xuất Excel</span>
              </button>
            )}

            <button
              id="btn-print-summary"
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:text-slate-950 hover:bg-slate-100 text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              In kết quả khảo sát
            </button>
          </div>
        </div>

        {/* Detailed Question Review List */}
        <div className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-8 shadow-lg shadow-blue-500/5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-blue-50">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Xem lại bài làm & Lời giải khoa học chi tiết
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Bấm vào từng câu hỏi để xem giải thích khoa học và đối chiếu với SGK KHTN 7
              </p>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => setFilterMode('all')}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  filterMode === 'all' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tất cả ({questions.length})
              </button>
              <button
                type="button"
                onClick={() => setFilterMode('correct')}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  filterMode === 'correct' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Đúng ({correctCount})
              </button>
              <button
                type="button"
                onClick={() => setFilterMode('wrong')}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  filterMode === 'wrong' ? 'bg-orange-500 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sai ({wrongAnswers.length})
              </button>
            </div>
          </div>

          {/* Question Items */}
          <div className="space-y-4">
            {filteredQuestions.map((q) => {
              const originalIndex = questions.findIndex(item => item.id === q.id);
              const answerObj = result.answers[originalIndex];
              const isCorrect = answerObj?.isCorrect;
              const isExpanded = expandedExplanations[q.id] ?? true;

              return (
                <div
                  key={q.id}
                  id={`review-q-${q.id}`}
                  className={`rounded-2xl border-2 p-5 transition-all ${
                    isCorrect
                      ? 'bg-emerald-50/40 border-emerald-200'
                      : 'bg-orange-50/40 border-orange-200'
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200/80 text-xs">
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shadow-sm ${
                        isCorrect ? 'bg-emerald-600 text-white' : 'bg-orange-500 text-white'
                      }`}>
                        {originalIndex + 1}
                      </span>
                      <span className="font-extrabold text-slate-800">{q.lessonTitle}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-200 text-slate-700">
                        {q.level === 'nhan_biet' ? 'Nhận biết' : q.level === 'thong_hieu' ? 'Thông hiểu' : 'Vận dụng'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 font-mono text-[11px] font-semibold">{q.textbookRef}</span>
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-emerald-700 font-black text-xs bg-emerald-100 px-2.5 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Chính xác (+1đ)
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-orange-700 font-black text-xs bg-orange-100 px-2.5 py-0.5 rounded-full">
                          <XCircle className="w-3.5 h-3.5" /> Ố ồ! Sai rồi 😭
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Question text */}
                  <p className="font-extrabold text-sm sm:text-base text-slate-900 mb-4 leading-relaxed">
                    {q.question || (q as any).content}
                  </p>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-2 mb-4">
                    {q.options.map((opt, optIdx) => {
                      const isUserChoice = answerObj?.selectedIndex === optIdx;
                      const isRightOption = q.correctIndex === optIdx;
                      const optChar = ['A', 'B', 'C', 'D'][optIdx];

                      let optionStyle = 'bg-white border-slate-200 text-slate-700';
                      if (isRightOption) {
                        optionStyle = 'bg-emerald-100/70 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-400/20';
                      } else if (isUserChoice && !isRightOption) {
                        optionStyle = 'bg-rose-100/70 border-rose-500 text-rose-950 font-bold';
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${optionStyle}`}
                        >
                          <span className={`w-5 h-5 rounded flex items-center justify-center text-[11px] font-black shrink-0 ${
                            isRightOption ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}>
                            {optChar}
                          </span>
                          <span className="flex-1">{opt}</span>
                          {isRightOption && (
                            <span className="text-[11px] text-emerald-700 font-black shrink-0">
                              ✓ Đáp án đúng
                            </span>
                          )}
                          {isUserChoice && !isRightOption && (
                            <span className="text-[11px] text-rose-700 font-black shrink-0">
                              ✗ Em chọn (Ố ồ 😭)
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Scientific Explanation Toggle */}
                  <div className="pt-2 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={() => toggleExplanation(q.id)}
                      className="text-xs text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      {isExpanded ? 'Ẩn lời giải khoa học' : 'Xem lời giải khoa học & trích dẫn SGK'}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-slate-800 space-y-1.5 animate-celebration-pop">
                        <div className="font-black text-blue-800 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                          Giải thích khoa học (Cố vấn: HIỆP AI):
                        </div>
                        <p className="leading-relaxed text-slate-700 font-medium">
                          {q.explanation}
                        </p>
                        <div className="text-[11px] text-orange-600 font-bold pt-1">
                          📖 Tra cứu đối chiếu: <span>{q.textbookRef}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
