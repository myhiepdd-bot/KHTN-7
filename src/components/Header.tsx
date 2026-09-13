import React from 'react';
import { FlaskConical, Atom, Award, BookOpen, FileSpreadsheet } from 'lucide-react';
import { StudentInfo } from '../types';

interface HeaderProps {
  currentStudent?: StudentInfo | null;
  onReset?: () => void;
  inQuiz?: boolean;
  onOpenHistory?: () => void;
  historyCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentStudent, 
  onReset, 
  inQuiz,
  onOpenHistory,
  historyCount = 0
}) => {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white border-b-4 border-orange-500 sticky top-0 z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Brand & Title */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={onReset}>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/30 text-white ring-2 ring-white/30">
              <FlaskConical className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-orange-500 text-white shadow-sm uppercase tracking-wider">
                  KHTN 7 • KNTT
                </span>
                <span className="text-xs font-semibold text-blue-100 flex items-center gap-1">
                  Tác giả: <strong className="px-1.5 py-0.5 rounded bg-amber-400 text-slate-900 font-extrabold shadow-sm">HIỆP AI</strong>
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center gap-2 drop-shadow-sm">
                AI LÀ CHUYÊN GIA PHÒNG THÍ NGHIỆM
                <Atom className="w-4 h-4 text-amber-300 inline hidden sm:inline animate-spin-slow" />
              </h1>
            </div>
          </div>

          {/* Right Info: Student Badge or Actions */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5">
            {/* Lịch sử làm bài & Xuất Excel Button */}
            {onOpenHistory && (
              <button
                id="btn-header-history"
                type="button"
                onClick={onOpenHistory}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-700/30 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-emerald-400/40"
                title="Xem lịch sử làm bài và tải về file Excel"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-100" />
                <span>Lịch sử & Xuất Excel</span>
                {historyCount > 0 && (
                  <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-white text-emerald-800 text-[10px] font-black">
                    {historyCount}
                  </span>
                )}
              </button>
            )}

            {currentStudent?.fullName && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/30 text-sm shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white/50 animate-ping" />
                <span className="text-blue-100 text-xs font-medium">Học sinh:</span>
                <span className="font-black text-white">{currentStudent.fullName}</span>
                <span className="px-2 py-0.5 rounded-md bg-orange-500 text-white text-xs font-extrabold shadow-sm">
                  Lớp {currentStudent.className}
                </span>
              </div>
            )}

            {inQuiz && (
              <button
                id="btn-quit-quiz"
                onClick={onReset}
                className="text-xs px-3.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold transition-all shadow-sm cursor-pointer"
                title="Quay về trang thiết lập"
              >
                Đổi bài / Thoát
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
