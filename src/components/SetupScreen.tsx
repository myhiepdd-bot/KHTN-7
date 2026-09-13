import React, { useState } from 'react';
import { 
  FlaskConical, 
  User, 
  GraduationCap, 
  Sliders, 
  Layers, 
  BookOpen, 
  Clock, 
  Sparkles,
  ArrowRight,
  HelpCircle,
  Atom,
  Search,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';
import { CognitiveLevel, QuizConfig, StudentInfo } from '../types';
import { LESSONS, CHAPTERS } from '../data/lessons';

interface SetupScreenProps {
  initialStudent?: StudentInfo;
  onStartQuiz: (config: QuizConfig) => void;
  onOpenHistory?: () => void;
  historyCount?: number;
}

export const SetupScreen: React.FC<SetupScreenProps> = ({ 
  initialStudent, 
  onStartQuiz,
  onOpenHistory,
  historyCount = 0
}) => {
  const [fullName, setFullName] = useState(initialStudent?.fullName || '');
  const [className, setClassName] = useState(initialStudent?.className || '7A1');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('all');
  const [questionCount, setQuestionCount] = useState<number>(15);
  const [level, setLevel] = useState<CognitiveLevel>('tong_hop');
  const [timed, setTimed] = useState<boolean>(true);
  const [searchLessonQuery, setSearchLessonQuery] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const filteredLessons = LESSONS.filter(l => 
    l.title.toLowerCase().includes(searchLessonQuery.toLowerCase()) ||
    l.chapterName.toLowerCase().includes(searchLessonQuery.toLowerCase()) ||
    `bài ${l.number}`.includes(searchLessonQuery.toLowerCase())
  );

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMessage('Vui lòng nhập Họ và tên của học sinh để bắt đầu!');
      return;
    }
    if (!className.trim()) {
      setErrorMessage('Vui lòng nhập Lớp học của bạn (ví dụ: 7A1, 7B...)!');
      return;
    }

    setErrorMessage('');
    const config: QuizConfig = {
      student: {
        fullName: fullName.trim(),
        className: className.trim()
      },
      lessonId: selectedLessonId,
      questionCount: Math.min(Math.max(questionCount, 5), 30),
      level,
      timed,
      timeLimitSeconds: questionCount * 60
    };

    onStartQuiz(config);
  };

  const quickCounts = [5, 10, 15, 20, 25, 30];

  return (
    <div className="min-h-[calc(100vh-70px)] py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero Card - Bright Vibrant Blue & Orange */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white p-6 sm:p-8 shadow-xl shadow-blue-600/15 border-2 border-blue-400/30 mb-8">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-black shadow-sm uppercase tracking-wider">
                <FlaskConical className="w-3.5 h-3.5" />
                Chuẩn SGK Khoa học tự nhiên 7 • Kết nối tri thức
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm">
                Khảo Sát & Đánh Giá Mức Độ Nắm Bài
              </h2>
              <p className="text-blue-100 text-sm sm:text-base max-w-xl leading-relaxed">
                Chào mừng em đến với hệ thống trắc nghiệm thông minh. Hãy nhập thông tin học sinh, chọn bài học và mức độ nhận thức để cùng tranh tài và nhận chứng nhận <strong className="text-amber-300 underline decoration-orange-400 underline-offset-2">Chuyên Gia Phòng Thí Nghiệm</strong>!
              </p>

              {onOpenHistory && (
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={onOpenHistory}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm shadow-md shadow-emerald-700/30 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-emerald-400/40"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-emerald-100" />
                    <span>Lịch Sử Bài Làm & Xuất Excel</span>
                    {historyCount > 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-white text-emerald-800 text-[11px] font-black">
                        {historyCount} lượt
                      </span>
                    )}
                  </button>
                </div>
              )}
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 min-w-[180px] text-center shadow-md shrink-0">
              <span className="text-xs text-blue-100 font-semibold uppercase tracking-wider">Tác giả biên soạn</span>
              <span className="text-xl font-black text-amber-300 mt-1 flex items-center gap-1.5 drop-shadow">
                <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow" />
                HIỆP AI
              </span>
              <span className="text-[11px] text-orange-200 font-medium mt-1">Cố vấn Sư phạm KHTN</span>
            </div>
          </div>
        </div>

        {/* Error Alert if any */}
        {errorMessage && (
          <div className="mb-6 p-4 rounded-2xl bg-orange-50 border-2 border-orange-400 text-orange-950 text-sm font-semibold flex items-center gap-3 shadow-sm animate-head-shake">
            <HelpCircle className="w-5 h-5 text-orange-600 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Main Setup Form */}
        <form onSubmit={handleStart} className="space-y-6">
          {/* SECTION 1: HỌ TÊN & LỚP */}
          <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-md shadow-blue-500/5">
            <h3 className="text-base font-bold text-blue-700 flex items-center gap-2 mb-4 pb-2 border-b border-blue-50">
              <User className="w-4 h-4 text-orange-500" />
              1. Thông tin học sinh (Bắt buộc)
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2 space-y-1.5">
                <label htmlFor="student-name-input" className="block text-xs font-bold text-slate-700">
                  Họ và tên học sinh <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="student-name-input"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Minh Hưng"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm font-semibold transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="student-class-input" className="block text-xs font-bold text-slate-700">
                  Lớp học <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="student-class-input"
                    type="text"
                    required
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    placeholder="Ví dụ: 7A1, 7A2, 7B..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm font-semibold transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: CHỌN BÀI HỌC HOẶC CHƯƠNG */}
          <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-md shadow-blue-500/5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-2 border-b border-blue-50">
              <h3 className="text-base font-bold text-blue-700 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-orange-500" />
                2. Chọn bài học / Phạm vi đánh giá
              </h3>
              
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchLessonQuery}
                  onChange={(e) => setSearchLessonQuery(e.target.value)}
                  placeholder="Tìm kiếm bài học..."
                  className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Quick Scope Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <button
                type="button"
                id="scope-all"
                onClick={() => setSelectedLessonId('all')}
                className={`p-3.5 rounded-xl text-left border-2 transition-all cursor-pointer ${
                  selectedLessonId === 'all'
                    ? 'bg-blue-50/80 border-blue-600 text-blue-950 ring-2 ring-blue-500/20 shadow-sm'
                    : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-white'
                }`}
              >
                <div className="text-xs font-black uppercase tracking-wider text-blue-600 mb-1">Toàn diện</div>
                <div className="font-bold text-sm text-slate-900">Toàn bộ 42 bài SGK KHTN 7</div>
                <div className="text-[11px] text-slate-500 mt-1">Đánh giá tổng hợp kiến thức cả năm học</div>
              </button>

              <button
                type="button"
                id="scope-chem-phys"
                onClick={() => setSelectedLessonId('ch-1')}
                className={`p-3.5 rounded-xl text-left border-2 transition-all cursor-pointer ${
                  selectedLessonId === 'ch-1'
                    ? 'bg-orange-50/80 border-orange-500 text-orange-950 ring-2 ring-orange-500/20 shadow-sm'
                    : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:border-orange-300 hover:bg-white'
                }`}
              >
                <div className="text-xs font-black uppercase tracking-wider text-orange-600 mb-1">Chương I & II</div>
                <div className="font-bold text-sm text-slate-900">Nguyên tử & Bảng tuần hoàn</div>
                <div className="text-[11px] text-slate-500 mt-1">Hóa học đại cương & Liên kết hoá học</div>
              </button>

              <button
                type="button"
                id="scope-bio"
                onClick={() => setSelectedLessonId('ch-7')}
                className={`p-3.5 rounded-xl text-left border-2 transition-all cursor-pointer ${
                  selectedLessonId === 'ch-7'
                    ? 'bg-blue-50/80 border-blue-600 text-blue-950 ring-2 ring-blue-500/20 shadow-sm'
                    : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-white'
                }`}
              >
                <div className="text-xs font-black uppercase tracking-wider text-blue-600 mb-1">Chương VII - X</div>
                <div className="font-bold text-sm text-slate-900">Trao đổi chất & Sinh học cơ thể</div>
                <div className="text-[11px] text-slate-500 mt-1">Quang hợp, Hô hấp, Cảm ứng, Sinh sản</div>
              </button>
            </div>

            {/* Detailed Lesson Dropdown */}
            <div className="space-y-1.5">
              <label htmlFor="select-specific-lesson" className="block text-xs font-bold text-slate-700">
                Hoặc chọn một bài học cụ thể từ mục lục SGK:
              </label>
              <select
                id="select-specific-lesson"
                value={selectedLessonId}
                onChange={(e) => setSelectedLessonId(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer"
              >
                <option value="all">★ TẤT CẢ CÁC BÀI (Đề kiểm tra tổng hợp)</option>
                <optgroup label="── THEO TỪNG CHƯƠNG LỚN ──">
                  {CHAPTERS.map(ch => (
                    <option key={ch.id} value={ch.id}>
                      📁 {ch.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="── TỪNG BÀI HỌC CHI TIẾT (SGK KHTN 7) ──">
                  {filteredLessons.map(l => (
                    <option key={l.id} value={l.id}>
                      Bài {l.number}: {l.title} ({l.pages})
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
          </div>

          {/* SECTION 3: MỨC ĐỘ NHẬN THỨC & SỐ LƯỢNG CÂU HỎI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* MỨC ĐỘ */}
            <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-md shadow-blue-500/5">
              <h3 className="text-base font-bold text-blue-700 flex items-center gap-2 mb-4 pb-2 border-b border-blue-50">
                <Layers className="w-4 h-4 text-orange-500" />
                3. Chọn mức độ nhận thức
              </h3>

              <div className="space-y-2.5">
                {/* TỔNG HỢP 3 MỨC ĐỘ */}
                <label
                  id="level-option-tong-hop"
                  className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                    level === 'tong_hop'
                      ? 'bg-orange-50/90 border-orange-500 text-orange-950 ring-2 ring-orange-400/20 shadow-sm'
                      : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-white hover:border-orange-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="level"
                    value="tong_hop"
                    checked={level === 'tong_hop'}
                    onChange={() => setLevel('tong_hop')}
                    className="mt-1 text-orange-600 focus:ring-orange-500 h-4 w-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm text-orange-900">TỔNG HỢP 3 MỨC ĐỘ</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500 text-white font-black uppercase">
                        Khuyên dùng
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Kết hợp: <strong>40% Nhận biết</strong>, <strong>30% Thông hiểu</strong>, <strong>30% Vận dụng</strong> để phân loại chuẩn xác năng lực học sinh.
                    </p>
                  </div>
                </label>

                {/* NHẬN BIẾT */}
                <label
                  id="level-option-nhan-biet"
                  className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                    level === 'nhan_biet'
                      ? 'bg-blue-50/90 border-blue-600 text-blue-950 ring-2 ring-blue-500/20 shadow-sm'
                      : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-white hover:border-blue-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="level"
                    value="nhan_biet"
                    checked={level === 'nhan_biet'}
                    onChange={() => setLevel('nhan_biet')}
                    className="mt-1 text-blue-600 focus:ring-blue-500 h-4 w-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm text-blue-900">NHẬN BIẾT</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">
                        Cơ bản
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Kiểm tra khả năng ghi nhớ các khái niệm, cấu tạo nguyên tử, kí hiệu hoá học, định luật và định nghĩa.
                    </p>
                  </div>
                </label>

                {/* THÔNG HIỂU */}
                <label
                  id="level-option-thong-hieu"
                  className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                    level === 'thong_hieu'
                      ? 'bg-blue-50/90 border-blue-600 text-blue-950 ring-2 ring-blue-500/20 shadow-sm'
                      : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-white hover:border-blue-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="level"
                    value="thong_hieu"
                    checked={level === 'thong_hieu'}
                    onChange={() => setLevel('thong_hieu')}
                    className="mt-1 text-blue-600 focus:ring-blue-500 h-4 w-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm text-blue-900">THÔNG HIỂU</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">
                        Trung bình
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Giải thích bản chất quy luật, so sánh các quá trình sinh học, phân tích đồ thị chuyển động.
                    </p>
                  </div>
                </label>

                {/* VẬN DỤNG */}
                <label
                  id="level-option-van-dung"
                  className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                    level === 'van_dung'
                      ? 'bg-orange-50/90 border-orange-500 text-orange-950 ring-2 ring-orange-400/20 shadow-sm'
                      : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-white hover:border-orange-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="level"
                    value="van_dung"
                    checked={level === 'van_dung'}
                    onChange={() => setLevel('van_dung')}
                    className="mt-1 text-orange-600 focus:ring-orange-500 h-4 w-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm text-orange-900">VẬN DỤNG</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 font-bold">
                        Nâng cao
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Giải bài tập tính toán tốc độ, khối lượng phân tử, phản xạ ánh sáng và liên hệ giải thích thực tế.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* SỐ LƯỢNG CÂU HỎI (TỐI ĐA 30 CÂU) */}
            <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-md shadow-blue-500/5 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-blue-700 flex items-center gap-2 mb-4 pb-2 border-b border-blue-50">
                  <Sliders className="w-4 h-4 text-orange-500" />
                  4. Số lượng câu hỏi (Tối đa 30 câu)
                </h3>

                <div className="space-y-4">
                  {/* Slider & Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-600">Số câu trong đề thi:</span>
                    <span className="text-3xl font-black text-orange-600 font-mono">
                      {questionCount} <span className="text-sm text-slate-500 font-medium">câu</span>
                    </span>
                  </div>

                  <input
                    id="question-count-slider"
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={questionCount}
                    onChange={(e) => setQuestionCount(Number(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />

                  {/* Quick Select Buttons */}
                  <div className="grid grid-cols-6 gap-1.5">
                    {quickCounts.map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setQuestionCount(num)}
                        className={`py-2 text-xs font-bold rounded-xl border-2 transition-all cursor-pointer ${
                          questionCount === num
                            ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/30'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-orange-300 hover:text-orange-600'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>

                  {/* Timed toggle */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <div>
                        <div className="text-xs font-bold text-slate-800">Đồng hồ đếm ngược phòng lab</div>
                        <div className="text-[11px] text-slate-500">
                          {timed ? `Thời gian: ${questionCount} phút (1 phút/câu)` : 'Làm bài tự do không giới hạn'}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setTimed(!timed)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                        timed ? 'bg-orange-500' : 'bg-slate-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${
                          timed ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Ready summary */}
              <div className="mt-6 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-slate-700 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">Học sinh:</span>
                  <span className="font-bold text-blue-900">{fullName || '(Chưa nhập)'} - Lớp {className}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Quy cách đề:</span>
                  <span className="font-extrabold text-orange-600">{questionCount} câu • Mức: {
                    level === 'tong_hop' ? 'Tổng hợp 3 mức' :
                    level === 'nhan_biet' ? 'Nhận biết' :
                    level === 'thong_hieu' ? 'Thông hiểu' : 'Vận dụng'
                  }</span>
                </div>
              </div>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-2">
            <button
              id="btn-start-quiz"
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-black text-base sm:text-lg shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <FlaskConical className="w-5 h-5 text-amber-300 animate-bounce" />
              BƯỚC VÀO PHÒNG THÍ NGHIỆM ĐÁNH GIÁ NGAY
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>

        {/* Footer info */}
        <div className="mt-8 text-center text-xs text-slate-500 space-y-1">
          <p>Hệ thống Đánh giá mức độ nắm bài môn Khoa học tự nhiên 7 • Bộ sách Kết nối tri thức với cuộc sống</p>
          <p className="font-medium text-slate-600">Biên soạn & Thiết kế: <span className="text-orange-600 font-black">HIỆP AI</span> • Cố vấn Khoa học</p>
        </div>
      </div>
    </div>
  );
};
