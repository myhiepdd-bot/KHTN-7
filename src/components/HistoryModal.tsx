import React, { useState } from 'react';
import { 
  X, 
  FileSpreadsheet, 
  Download, 
  Trash2, 
  Search, 
  Filter, 
  Award, 
  Clock, 
  Calendar, 
  BarChart2, 
  User, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  BookOpen,
  Eye
} from 'lucide-react';
import { QuizHistoryRecord, QuizResult } from '../types';
import { 
  exportHistoryToExcel, 
  exportHistoryToCsv, 
  deleteHistoryRecord, 
  clearAllHistory 
} from '../utils/historyStorage';

interface HistoryModalProps {
  records: QuizHistoryRecord[];
  onClose: () => void;
  onRefreshRecords: () => void;
  onViewCertificateForRecord?: (result: QuizResult) => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  records,
  onClose,
  onRefreshRecords,
  onViewCertificateForRecord
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('ALL');
  const [selectedClassification, setSelectedClassification] = useState('ALL');

  // Extract unique classes
  const uniqueClasses = Array.from(new Set(records.map(r => r.className).filter(Boolean))).sort();

  // Filter records
  const filteredRecords = records.filter(r => {
    const matchSearch = r.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.lessonTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchClass = selectedClass === 'ALL' || r.className === selectedClass;
    const matchClassification = selectedClassification === 'ALL' || r.classification === selectedClassification;
    return matchSearch && matchClass && matchClassification;
  });

  // Calculate statistics
  const totalSubmissions = records.length;
  const avgScore = totalSubmissions > 0
    ? (records.reduce((acc, r) => acc + r.score, 0) / totalSubmissions).toFixed(1)
    : '0.0';
  const excellentCount = records.filter(r => r.classification === 'XUẤT SẮC').length;
  const goodCount = records.filter(r => r.classification === 'GIỎI').length;
  const passedCount = records.filter(r => r.percentage >= 50).length;
  const passedRate = totalSubmissions > 0
    ? Math.round((passedCount / totalSubmissions) * 100)
    : 0;

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa lượt làm bài của học sinh "${name}"?`)) {
      deleteHistoryRecord(id);
      onRefreshRecords();
    }
  };

  const handleClearAll = () => {
    if (window.confirm('CẢNH BÁO: Bạn có chắc chắn muốn xóa TOÀN BỘ lịch sử bài làm của học sinh không? Thao tác này không thể hoàn tác.')) {
      clearAllHistory();
      onRefreshRecords();
    }
  };

  const handleExportExcel = () => {
    exportHistoryToExcel(filteredRecords.length > 0 ? filteredRecords : records);
  };

  const handleExportCsv = () => {
    exportHistoryToCsv(filteredRecords.length > 0 ? filteredRecords : records);
  };

  const getClassificationBadge = (classification: QuizHistoryRecord['classification']) => {
    switch (classification) {
      case 'XUẤT SẮC':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-900 border border-amber-300 shadow-sm">
            ⭐ XUẤT SẮC
          </span>
        );
      case 'GIỎI':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-orange-100 text-orange-900 border border-orange-300 shadow-sm">
            🥇 GIỎI
          </span>
        );
      case 'HOÀN THÀNH TỐT':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-900 border border-blue-300 shadow-sm">
            🥈 HOÀN THÀNH TỐT
          </span>
        );
      case 'HOÀN THÀNH':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-sm">
            🥉 HOÀN THÀNH
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-300">
            CẦN CỐ GẮNG
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-6xl my-6 bg-white rounded-3xl shadow-2xl border-2 border-blue-100 flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Header bar */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-4 border-orange-500 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-orange-500 text-white uppercase tracking-wider">
                QUẢN LÍ BÀI LÀM
              </span>
              <span className="text-xs text-blue-200">
                Tác giả: <strong className="text-amber-300">HIỆP AI</strong>
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2.5 mt-1">
              <FileSpreadsheet className="w-6 h-6 text-emerald-300" />
              Lịch Sử Bài Làm & Xuất Báo Cáo Excel Học Sinh
            </h2>
            <p className="text-xs text-blue-100 mt-0.5">
              Hệ thống tự động lưu trữ điểm số, xếp loại và thời gian làm bài của từng học sinh
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="btn-export-excel-main"
              type="button"
              onClick={handleExportExcel}
              disabled={records.length === 0}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-700/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-100" />
              <span>Tải Về File Excel (.xlsx)</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body with scrollable content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50/50">
          
          {/* 4 Summary Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-black">
                <BarChart2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-semibold">Tổng lượt làm</div>
                <div className="text-xl sm:text-2xl font-black text-slate-900">{totalSubmissions}</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-black">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-semibold">Điểm trung bình</div>
                <div className="text-xl sm:text-2xl font-black text-orange-600 font-mono">
                  {avgScore}<span className="text-xs text-slate-400 font-normal">/10</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-black">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-semibold">Xuất sắc & Giỏi</div>
                <div className="text-xl sm:text-2xl font-black text-amber-600">
                  {excellentCount + goodCount} <span className="text-xs text-slate-400 font-normal">học sinh</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-semibold">Tỉ lệ đạt (≥50%)</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600">{passedRate}%</div>
              </div>
            </div>
          </div>

          {/* Search and Filters Toolbar */}
          <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Tìm học sinh theo tên hoặc bài học..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter by class */}
            <div className="flex items-center gap-2">
              <select
                value={selectedClass}
                onChange={e => setSelectedClass(e.target.value)}
                className="px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white font-semibold text-slate-700 focus:outline-none focus:border-blue-500"
              >
                <option value="ALL">Tất cả các lớp ({records.length})</option>
                {uniqueClasses.map(cls => (
                  <option key={cls} value={cls}>Lớp {cls}</option>
                ))}
              </select>

              {/* Filter by classification */}
              <select
                value={selectedClassification}
                onChange={e => setSelectedClassification(e.target.value)}
                className="px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white font-semibold text-slate-700 focus:outline-none focus:border-blue-500"
              >
                <option value="ALL">Tất cả xếp loại</option>
                <option value="XUẤT SẮC">⭐ Xuất sắc (≥ 90%)</option>
                <option value="GIỎI">🥇 Giỏi (80% - 90%)</option>
                <option value="HOÀN THÀNH TỐT">🥈 Hoàn thành tốt (50% - 80%)</option>
                <option value="HOÀN THÀNH">🥉 Hoàn thành (50%)</option>
                <option value="CẦN CỐ GẮNG">🧪 Cần cố gắng (&lt; 50%)</option>
              </select>
            </div>
          </div>

          {/* Interactive Data Table */}
          <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">
            {filteredRecords.length === 0 ? (
              <div className="p-12 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mx-auto">
                  <FileSpreadsheet className="w-8 h-8" />
                </div>
                <h3 className="text-base font-extrabold text-slate-800">
                  {records.length === 0 ? 'Chưa có lịch sử bài làm nào' : 'Không tìm thấy kết quả phù hợp bộ lọc'}
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  {records.length === 0
                    ? 'Khi học sinh hoàn thành các bài ôn tập hoặc kiểm tra trắc nghiệm KHTN 7, kết quả chi tiết sẽ tự động lưu lại tại đây.'
                    : 'Hãy thử đổi từ khóa tìm kiếm hoặc chọn lại bộ lọc lớp học / xếp loại danh hiệu.'}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/90 text-slate-700 border-b border-slate-200 font-extrabold">
                      <th className="py-3 px-3.5 text-center w-12">STT</th>
                      <th className="py-3 px-4">Học sinh & Lớp</th>
                      <th className="py-3 px-4">Bài học / Phạm vi</th>
                      <th className="py-3 px-3 text-center">Đúng/Tổng</th>
                      <th className="py-3 px-3 text-center">Điểm số</th>
                      <th className="py-3 px-4 text-center">Xếp loại</th>
                      <th className="py-3 px-3 text-center">Thời gian</th>
                      <th className="py-3 px-3 text-center">Ngày làm</th>
                      <th className="py-3 px-4 text-center w-28">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredRecords.map((rec, index) => (
                      <tr key={rec.id} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-3 px-3.5 text-center font-bold text-slate-400">
                          {index + 1}
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-extrabold text-slate-900">{rec.studentName}</div>
                          <div className="text-[11px] font-bold text-orange-600">Lớp {rec.className}</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-semibold text-slate-800 line-clamp-1 max-w-[240px]" title={rec.lessonTitle}>
                            {rec.lessonTitle}
                          </div>
                          <div className="text-[11px] text-slate-500 font-medium">{rec.levelLabel}</div>
                        </td>
                        <td className="py-3 px-3 text-center font-mono font-bold text-slate-700">
                          <span className="text-emerald-600 font-black">{rec.correctCount}</span>/{rec.totalQuestions}
                          <div className="text-[10px] text-slate-400 font-normal">({rec.percentage}%)</div>
                        </td>
                        <td className="py-3 px-3 text-center font-mono">
                          <span className="text-base font-black text-orange-600">{rec.score}</span>
                          <span className="text-[11px] text-slate-400">/10</span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          {getClassificationBadge(rec.classification)}
                        </td>
                        <td className="py-3 px-3 text-center text-xs text-slate-600 font-medium">
                          {rec.timeSpentFormatted}
                        </td>
                        <td className="py-3 px-3 text-center text-[11px] text-slate-500">
                          {rec.completedAt}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            {rec.rawResult && onViewCertificateForRecord && (
                              <button
                                type="button"
                                onClick={() => onViewCertificateForRecord(rec.rawResult!)}
                                className="p-1.5 rounded-lg bg-orange-100 hover:bg-orange-200 text-orange-700 transition-colors cursor-pointer"
                                title="Xem Giấy chứng nhận 16:9 của bài này"
                              >
                                <Award className="w-4 h-4" />
                              </button>
                            )}

                            <button
                              type="button"
                              onClick={() => handleDelete(rec.id, rec.studentName)}
                              className="p-1.5 rounded-lg bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600 transition-colors cursor-pointer"
                              title="Xóa lượt này"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span>Hiển thị <strong>{filteredRecords.length}</strong> / <strong>{records.length}</strong> lượt làm bài</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {records.length > 0 && (
              <button
                type="button"
                onClick={handleClearAll}
                className="px-3 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 border border-rose-200 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Xóa tất cả
              </button>
            )}

            <button
              type="button"
              onClick={handleExportCsv}
              disabled={records.length === 0}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              Tải file CSV
            </button>

            <button
              type="button"
              onClick={handleExportExcel}
              disabled={records.length === 0}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-black flex items-center gap-2 shadow-md shadow-emerald-600/25 transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50"
            >
              <FileSpreadsheet className="w-4 h-4" />
              Xuất File Excel (.xlsx)
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs sm:text-sm font-bold cursor-pointer"
            >
              Đóng
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
