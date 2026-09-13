import * as XLSX from 'xlsx';
import { QuizResult, QuizHistoryRecord } from '../types';

const STORAGE_KEY = 'khtn7_quiz_history_records';

const DEFAULT_INITIAL_RECORDS: QuizHistoryRecord[] = [
  {
    id: 'sample-1',
    timestamp: Date.now() - 3600000 * 2,
    completedAt: '12/09/2026, 18:30:00',
    studentName: 'Nguyễn Hải Đăng',
    className: '7A1',
    lessonTitle: 'Bài 2: Nguyên tử (Cấu tạo hạt nhân & electron)',
    level: 'tong_hop',
    levelLabel: 'Tổng hợp 3 mức độ',
    totalQuestions: 15,
    correctCount: 14,
    wrongCount: 1,
    score: 9.3,
    percentage: 93,
    classification: 'XUẤT SẮC',
    rankTitle: 'CHUYÊN GIA PHÒNG THÍ NGHIỆM XUẤT SẮC',
    timeSpentSeconds: 425,
    timeSpentFormatted: '7m 05s',
    statsNhanBiet: '5/5',
    statsThongHieu: '5/5',
    statsVanDung: '4/5'
  },
  {
    id: 'sample-2',
    timestamp: Date.now() - 3600000 * 5,
    completedAt: '12/09/2026, 15:45:12',
    studentName: 'Trần Thị Ngọc Mai',
    className: '7A2',
    lessonTitle: 'Bài 4: Sơ lược về bảng tuần hoàn các nguyên tố hóa học',
    level: 'tong_hop',
    levelLabel: 'Tổng hợp 3 mức độ',
    totalQuestions: 15,
    correctCount: 13,
    wrongCount: 2,
    score: 8.7,
    percentage: 87,
    classification: 'GIỎI',
    rankTitle: 'CHUYÊN GIA PHÒNG THÍ NGHIỆM HẠNG GIỎI',
    timeSpentSeconds: 512,
    timeSpentFormatted: '8m 32s',
    statsNhanBiet: '5/5',
    statsThongHieu: '4/5',
    statsVanDung: '4/5'
  },
  {
    id: 'sample-3',
    timestamp: Date.now() - 3600000 * 24,
    completedAt: '11/09/2026, 09:20:40',
    studentName: 'Lê Minh Khôi',
    className: '7A1',
    lessonTitle: 'Bài 8: Tốc độ chuyển động & Đồ thị quãng đường',
    level: 'tong_hop',
    levelLabel: 'Tổng hợp 3 mức độ',
    totalQuestions: 15,
    correctCount: 11,
    wrongCount: 4,
    score: 7.3,
    percentage: 73,
    classification: 'HOÀN THÀNH TỐT',
    rankTitle: 'KĨ THUẬT VIÊN PHÒNG LAB HOÀN THÀNH TỐT',
    timeSpentSeconds: 610,
    timeSpentFormatted: '10m 10s',
    statsNhanBiet: '5/5',
    statsThongHieu: '4/5',
    statsVanDung: '2/5'
  }
];

export const getHistoryRecords = (): QuizHistoryRecord[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
      // First time initialization: provide initial sample data
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_INITIAL_RECORDS));
      } catch (e) {}
      return DEFAULT_INITIAL_RECORDS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Failed to load history from localStorage:', err);
    return [];
  }
};

export const saveHistoryRecord = (
  result: QuizResult,
  lessonTitle: string
): QuizHistoryRecord => {
  const history = getHistoryRecords();
  const correctCount = result.answers.filter(a => a.isCorrect).length;
  const wrongCount = result.totalQuestions - correctCount;

  // Ensure classification follows exact rule:
  // >= 90%: XUẤT SẮC
  // 80% - 90%: GIỎI
  // 50% - 80%: HOÀN THÀNH TỐT
  // 50%: HOÀN THÀNH
  // < 50%: CẦN CỐ GẮNG
  let classification: QuizHistoryRecord['classification'] = 'CẦN CỐ GẮNG';
  if (result.percentage >= 90) {
    classification = 'XUẤT SẮC';
  } else if (result.percentage >= 80) {
    classification = 'GIỎI';
  } else if (result.percentage > 50) {
    classification = 'HOÀN THÀNH TỐT';
  } else if (result.percentage === 50) {
    classification = 'HOÀN THÀNH';
  }

  const mins = Math.floor(result.timeSpentSeconds / 60);
  const secs = result.timeSpentSeconds % 60;
  const timeSpentFormatted = `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;

  const levelLabelMap: Record<string, string> = {
    nhan_biet: 'Nhận biết',
    thong_hieu: 'Thông hiểu',
    van_dung: 'Vận dụng',
    tong_hop: 'Tổng hợp 3 mức độ'
  };

  const newRecord: QuizHistoryRecord = {
    id: `rec-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: Date.now(),
    completedAt: result.completedAt || new Date().toLocaleString('vi-VN'),
    studentName: result.student.fullName || 'Học sinh',
    className: result.student.className || '7A1',
    lessonTitle: lessonTitle || 'Chương trình KHTN 7',
    level: result.config.level,
    levelLabel: levelLabelMap[result.config.level] || 'Tổng hợp',
    totalQuestions: result.totalQuestions,
    correctCount,
    wrongCount,
    score: result.score,
    percentage: result.percentage,
    classification,
    rankTitle: result.rankTitle,
    timeSpentSeconds: result.timeSpentSeconds,
    timeSpentFormatted,
    statsNhanBiet: `${result.levelStats.nhan_biet.correct}/${result.levelStats.nhan_biet.total}`,
    statsThongHieu: `${result.levelStats.thong_hieu.correct}/${result.levelStats.thong_hieu.total}`,
    statsVanDung: `${result.levelStats.van_dung.correct}/${result.levelStats.van_dung.total}`,
    rawResult: result
  };

  // Prepend newest first
  const updatedHistory = [newRecord, ...history];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
  } catch (err) {
    console.error('Failed to save record to localStorage:', err);
  }

  return newRecord;
};

export const deleteHistoryRecord = (id: string): QuizHistoryRecord[] => {
  const current = getHistoryRecords();
  const updated = current.filter(r => r.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {}
  return updated;
};

export const clearAllHistory = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {}
};

/**
 * Exports history records into a clean, formatted native Microsoft Excel (.xlsx) file
 */
export const exportHistoryToExcel = (
  records: QuizHistoryRecord[],
  filenamePrefix = 'Ket_Qua_Lam_Bai_KHTN7'
): void => {
  if (records.length === 0) {
    alert('Không có dữ liệu bài làm nào để xuất file Excel.');
    return;
  }

  const currentDate = new Date().toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  // 1. Prepare structured sheet rows with banner metadata
  const rows: (string | number)[][] = [
    ['BẢNG TỔNG HỢP KẾT QUẢ BÀI LÀM CỦA HỌC SINH - MÔN KHOA HỌC TỰ NHIÊN 7'],
    ['ỨNG DỤNG: AI LÀ CHUYÊN GIA PHÒNG THÍ NGHIỆM • TÁC GIẢ BIÊN SOẠN: HIỆP AI'],
    [`Ngày xuất báo cáo: ${new Date().toLocaleString('vi-VN')} • Tổng số lượt làm bài: ${records.length}`],
    [], // Empty spacer row
    [
      'STT',
      'Họ và tên học sinh',
      'Lớp học',
      'Bài học / Phạm vi kiểm tra',
      'Mức độ nhận thức',
      'Số câu đúng',
      'Số câu sai',
      'Tổng số câu',
      'Tỉ lệ đúng (%)',
      'Điểm số (/10)',
      'Xếp loại danh hiệu',
      'Danh hiệu đạt được',
      'Thời gian làm bài',
      'Mức Nhận biết',
      'Mức Thông hiểu',
      'Mức Vận dụng',
      'Thời điểm nộp bài'
    ]
  ];

  // 2. Add records data rows
  records.forEach((rec, idx) => {
    rows.push([
      idx + 1,
      rec.studentName,
      rec.className,
      rec.lessonTitle,
      rec.levelLabel,
      rec.correctCount,
      rec.wrongCount,
      rec.totalQuestions,
      `${rec.percentage}%`,
      rec.score,
      rec.classification,
      rec.rankTitle,
      rec.timeSpentFormatted,
      rec.statsNhanBiet,
      rec.statsThongHieu,
      rec.statsVanDung,
      rec.completedAt
    ]);
  });

  // 3. Add summary stats footer row
  const avgScore = (records.reduce((acc, r) => acc + r.score, 0) / records.length).toFixed(1);
  const totalCorrect = records.reduce((acc, r) => acc + r.correctCount, 0);
  const totalQuestionsSum = records.reduce((acc, r) => acc + r.totalQuestions, 0);
  const excellentCount = records.filter(r => r.classification === 'XUẤT SẮC').length;
  const goodCount = records.filter(r => r.classification === 'GIỎI').length;

  rows.push([]);
  rows.push([
    'TỔNG HỢP:',
    `Điểm trung bình toàn bộ lượt làm: ${avgScore}/10`,
    '',
    '',
    '',
    totalCorrect,
    totalQuestionsSum - totalCorrect,
    totalQuestionsSum,
    `${Math.round((totalCorrect / totalQuestionsSum) * 100)}%`,
    avgScore,
    `Xuất sắc: ${excellentCount} | Giỏi: ${goodCount}`,
    'Tác giả hệ thống: HIỆP AI',
    '',
    '',
    '',
    '',
    `Xuất file: ${currentDate}`
  ]);

  // 4. Create Workbook and Worksheet
  const worksheet = XLSX.utils.aoa_to_sheet(rows);

  // Set column widths for optimal reading
  worksheet['!cols'] = [
    { wch: 6 },  // STT
    { wch: 26 }, // Họ tên
    { wch: 10 }, // Lớp
    { wch: 38 }, // Bài học
    { wch: 18 }, // Mức độ
    { wch: 12 }, // Đúng
    { wch: 12 }, // Sai
    { wch: 12 }, // Tổng
    { wch: 14 }, // Tỉ lệ %
    { wch: 14 }, // Điểm số
    { wch: 20 }, // Xếp loại
    { wch: 36 }, // Danh hiệu
    { wch: 18 }, // Thời gian
    { wch: 16 }, // Nhận biết
    { wch: 16 }, // Thông hiểu
    { wch: 16 }, // Vận dụng
    { wch: 22 }  // Thời điểm
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Ket_Qua_Hoc_Sinh');

  // 5. Generate and trigger download
  const cleanDate = currentDate.replace(/\//g, '-');
  const filename = `${filenamePrefix}_${cleanDate}.xlsx`;
  XLSX.writeFile(workbook, filename);
};

/**
 * Export CSV fallback with UTF-8 BOM so Excel opens Vietnamese characters cleanly
 */
export const exportHistoryToCsv = (
  records: QuizHistoryRecord[],
  filenamePrefix = 'Ket_Qua_Hoc_Sinh_KHTN7'
): void => {
  if (records.length === 0) return;

  const headers = [
    'STT',
    'Ho va ten',
    'Lop',
    'Bai hoc',
    'Muc do',
    'So cau dung',
    'So cau sai',
    'Tong so cau',
    'Ti le dung (%)',
    'Diem so (/10)',
    'Xep loai',
    'Thoi gian lam bai',
    'Thoi diem nop'
  ];

  const lines = records.map((r, i) => [
    i + 1,
    `"${r.studentName.replace(/"/g, '""')}"`,
    `"${r.className}"`,
    `"${r.lessonTitle.replace(/"/g, '""')}"`,
    `"${r.levelLabel}"`,
    r.correctCount,
    r.wrongCount,
    r.totalQuestions,
    `"${r.percentage}%"`,
    r.score,
    `"${r.classification}"`,
    `"${r.timeSpentFormatted}"`,
    `"${r.completedAt}"`
  ].join(','));

  const csvContent = '\uFEFF' + [headers.join(','), ...lines].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${filenamePrefix}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
