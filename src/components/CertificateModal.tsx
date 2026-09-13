import React, { useRef, useState } from 'react';
import { Award, X, Printer, Download, Sparkles, Star, CheckCircle2, ShieldCheck, BookmarkCheck } from 'lucide-react';
import { QuizResult } from '../types';

interface CertificateModalProps {
  result: QuizResult;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ result, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  const percentage = result.percentage;

  // Determine Rank Classification strictly following user specification:
  // - >= 90%: XUẤT SẮC
  // - 80% - 90%: GIỎI
  // - 50% - 80%: HOÀN THÀNH TỐT
  // - = 50%: HOÀN THÀNH
  const getClassificationData = () => {
    if (percentage >= 90) {
      return {
        levelKey: 'XUẤT SẮC',
        title: 'XUẤT SẮC',
        subTitle: 'CHUYÊN GIA PHÒNG THÍ NGHIỆM XUẤT SẮC',
        themeBadge: 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 ring-4 ring-amber-300/60 shadow-lg shadow-amber-500/30',
        ribbonColor: '#DC2626', // Crimson Red
        sealRing: 'border-amber-400 bg-gradient-to-br from-amber-400 to-yellow-600',
        praiseQuote: 'Chứng nhận năng lực tư duy khoa học xuất sắc, phân tích logic vượt trội và làm chủ toàn diện các chuyên đề lý thuyết & thực hành KHTN 7.',
        stars: 5,
        medalColor: 'text-amber-500',
        tierName: 'HẠNG ĐẶC BIỆT'
      };
    }
    if (percentage >= 80) {
      return {
        levelKey: 'GIỎI',
        title: 'GIỎI',
        subTitle: 'CHUYÊN GIA PHÒNG THÍ NGHIỆM HẠNG GIỎI',
        themeBadge: 'bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 text-white ring-4 ring-orange-300/60 shadow-lg shadow-orange-500/30',
        ribbonColor: '#EA580C', // Orange
        sealRing: 'border-orange-400 bg-gradient-to-br from-orange-400 to-amber-500',
        praiseQuote: 'Biểu dương thành tích học tập vượt trội, nắm vững kiến thức trọng tâm và vận dụng linh hoạt, chính xác vào thực tiễn cuộc sống.',
        stars: 4,
        medalColor: 'text-orange-500',
        tierName: 'HẠNG VÀNG'
      };
    }
    if (percentage > 50) {
      return {
        levelKey: 'HOÀN THÀNH TỐT',
        title: 'HOÀN THÀNH TỐT',
        subTitle: 'KĨ THUẬT VIÊN PHÒNG LAB HOÀN THÀNH TỐT',
        themeBadge: 'bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700 text-white ring-4 ring-blue-300/60 shadow-lg shadow-blue-500/30',
        ribbonColor: '#2563EB', // Royal Blue
        sealRing: 'border-blue-400 bg-gradient-to-br from-blue-500 to-indigo-600',
        praiseQuote: 'Biểu dương tinh thần học tập tích cực, say mê khám phá và hoàn thành tốt các mục tiêu bài học môn Khoa học tự nhiên 7.',
        stars: 3,
        medalColor: 'text-blue-600',
        tierName: 'HẠNG LAM NGỌC'
      };
    }
    if (percentage === 50) {
      return {
        levelKey: 'HOÀN THÀNH',
        title: 'HOÀN THÀNH',
        subTitle: 'KĨ THUẬT VIÊN PHÒNG LAB ĐẠT CHUẨN',
        themeBadge: 'bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700 text-white ring-4 ring-teal-300/60 shadow-lg shadow-emerald-500/30',
        ribbonColor: '#059669', // Emerald
        sealRing: 'border-emerald-400 bg-gradient-to-br from-emerald-500 to-teal-600',
        praiseQuote: 'Ghi nhận sự kiên trì và hoàn thành đạt chuẩn các nội dung kiến thức nền tảng trong chương trình SGK Khoa học tự nhiên 7.',
        stars: 2,
        medalColor: 'text-emerald-600',
        tierName: 'HẠNG ĐẠT CHUẨN'
      };
    }
    return {
      levelKey: 'CẦN CỐ GẮNG',
      title: 'NỖ LỰC RÈN LUYỆN',
      subTitle: 'HỌC VIÊN TẬP SỰ PHÒNG THÍ NGHIỆM',
      themeBadge: 'bg-gradient-to-r from-slate-600 to-slate-700 text-white ring-4 ring-slate-300/60 shadow-lg',
      ribbonColor: '#475569',
      sealRing: 'border-slate-400 bg-gradient-to-br from-slate-500 to-slate-600',
      praiseQuote: 'Ghi nhận tinh thần ham học hỏi và tích cực tham gia thử thách. Hãy kiên trì ôn luyện để bứt phá đạt danh hiệu cao hơn!',
      stars: 1,
      medalColor: 'text-slate-500',
      tierName: 'HẠNG TẬP SỰ'
    };
  };

  const classData = getClassificationData();

  const handlePrint = () => {
    window.print();
  };

  // High-Resolution 1920x1080 (16:9) Direct Canvas Downloader
  const handleDownloadImage = () => {
    setIsDownloading(true);
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 1920;
      canvas.height = 1080;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Background Parchment Gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 1920, 1080);
      bgGradient.addColorStop(0, '#FFFDF8');
      bgGradient.addColorStop(0.5, '#FAF6ED');
      bgGradient.addColorStop(1, '#FFF9EE');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, 1920, 1080);

      // Outer Triple Gold Frame
      ctx.lineWidth = 14;
      ctx.strokeStyle = '#D97706'; // Dark Gold
      ctx.strokeRect(30, 30, 1860, 1020);

      ctx.lineWidth = 3;
      ctx.strokeStyle = '#F59E0B'; // Bright Gold
      ctx.strokeRect(48, 48, 1824, 984);

      ctx.lineWidth = 1;
      ctx.strokeStyle = '#CBD5E1';
      ctx.strokeRect(58, 58, 1804, 964);

      // Corner Ornaments
      const drawCorner = (x: number, y: number, angle: number) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((angle * Math.PI) / 180);
        ctx.strokeStyle = '#D97706';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(0, 45);
        ctx.lineTo(0, 0);
        ctx.lineTo(45, 0);
        ctx.stroke();
        ctx.restore();
      };
      drawCorner(70, 70, 0);
      drawCorner(1850, 70, 90);
      drawCorner(1850, 1010, 180);
      drawCorner(70, 1010, 270);

      // Header Brand
      ctx.textAlign = 'center';
      ctx.fillStyle = '#1E3A8A'; // Deep Navy
      ctx.font = 'bold 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('BỘ GIÁO DỤC VÀ ĐÀO TẠO • HỆ THỐNG ĐÁNH GIÁ NĂNG LỰC KHTN 7', 960, 120);

      ctx.fillStyle = '#EA580C'; // Vibrant Orange
      ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('CHƯƠNG TRÌNH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG', 960, 155);

      // Main Title
      ctx.fillStyle = '#1E293B';
      ctx.font = '900 58px "Cinzel", "Playfair Display", serif';
      ctx.fillText('GIẤY CHỨNG NHẬN DANH DỰ', 960, 235);

      ctx.fillStyle = '#64748B';
      ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Hệ thống khảo sát: "AI LÀ CHUYÊN GIA PHÒNG THÍ NGHIỆM"', 960, 280);

      // Divider Line
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(720, 310);
      ctx.lineTo(1200, 310);
      ctx.stroke();

      // "Trân trọng vinh danh học sinh:"
      ctx.fillStyle = '#475569';
      ctx.font = 'italic 24px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Hệ thống trân trọng biểu dương và chứng nhận năng lực học sinh:', 960, 360);

      // Student Name
      ctx.fillStyle = '#0F172A';
      ctx.font = '900 64px "Cinzel", "Playfair Display", serif';
      ctx.fillText(result.student.fullName.toUpperCase(), 960, 440);

      // Class Name Pill
      ctx.fillStyle = '#EA580C';
      ctx.font = 'bold 30px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(`Học sinh Lớp: ${result.student.className}`, 960, 495);

      // Classification Ribbon Box
      const boxW = 860;
      const boxH = 140;
      const boxX = (1920 - boxW) / 2;
      const boxY = 535;

      ctx.fillStyle = percentage >= 90 ? '#FEF3C7' : percentage >= 80 ? '#FFEDD5' : percentage > 50 ? '#DBEAFE' : '#F1F5F9';
      ctx.strokeStyle = percentage >= 90 ? '#F59E0B' : percentage >= 80 ? '#FB923C' : percentage > 50 ? '#3B82F6' : '#94A3B8';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(boxX, boxY, boxW, boxH, 20);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = percentage >= 90 ? '#92400E' : percentage >= 80 ? '#9A3412' : percentage > 50 ? '#1E40AF' : '#334155';
      ctx.font = '900 40px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(`XẾP LOẠI: ${classData.title}`, 960, 590);

      ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(`Đạt ${result.score}/10 Điểm (${percentage}%) • Đúng ${result.answers.filter(a => a.isCorrect).length}/${result.totalQuestions} câu hỏi`, 960, 635);

      // Praise Quote
      ctx.fillStyle = '#334155';
      ctx.font = 'italic 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(`"${classData.praiseQuote}"`, 960, 725);

      // Science quote
      ctx.fillStyle = '#64748B';
      ctx.font = '500 19px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('« Tri thức khoa học là chìa khóa mở ra tương lai — Hãy luôn giữ vững niềm say mê khám phá! »', 960, 765);

      // Left Footer: Date and Verification ID
      ctx.textAlign = 'left';
      ctx.fillStyle = '#475569';
      ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(`Ngày chứng nhận: ${result.completedAt}`, 140, 890);
      ctx.fillStyle = '#2563EB';
      ctx.font = 'bold 18px monospace';
      ctx.fillText(`Mã bảo chứng: LAB-KHTN7-${Date.now().toString().slice(-6)}`, 140, 925);
      ctx.fillStyle = '#64748B';
      ctx.font = '16px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Cơ sở dữ liệu phòng thí nghiệm trực tuyến', 140, 955);

      // Center: Official Red Seal Stamp
      ctx.save();
      ctx.translate(960, 915);
      ctx.strokeStyle = '#DC2626';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(0, 0, 68, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.strokeStyle = '#EF4444';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, 58, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.textAlign = 'center';
      ctx.fillStyle = '#DC2626';
      ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('★ CHUYÊN GIA KHTN ★', 0, -25);
      ctx.font = '900 24px serif';
      ctx.fillText('HIỆP AI', 0, 10);
      ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('ĐÃ BẢO CHỨNG', 0, 38);
      ctx.restore();

      // Right Footer: Author Signature
      ctx.textAlign = 'right';
      ctx.fillStyle = '#475569';
      ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('TÁC GIẢ BIÊN SOẠN & CỐ VẤN', 1780, 880);

      ctx.fillStyle = '#EA580C';
      ctx.font = 'italic bold 44px "Brush Script MT", "Caveat", cursive, serif';
      ctx.fillText('Hiệp AI', 1780, 935);

      ctx.fillStyle = '#1E293B';
      ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('HIỆP AI', 1780, 970);
      ctx.fillStyle = '#64748B';
      ctx.font = '16px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Chuyên gia Giáo dục Khoa học Tự nhiên', 1780, 995);

      // Trigger download
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `Chung_Nhan_KHTN7_${result.student.fullName.replace(/\s+/g, '_')}_16x9.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error(err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-5xl my-4">
        
        {/* Action Toolbar on Top (Screen only) */}
        <div className="flex items-center justify-between gap-3 mb-3 px-2 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
              CHỨNG NHẬN VINH DANH HỌC TẬP TỈ LỆ 16:9
            </span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-amber-400 text-slate-950">
              {classData.tierName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="btn-download-cert-png"
              type="button"
              onClick={handleDownloadImage}
              disabled={isDownloading}
              className="py-2 px-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs flex items-center gap-1.5 shadow-md shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              {isDownloading ? 'Đang xuất ảnh...' : 'Tải ảnh 16:9 (PNG)'}
            </button>

            <button
              id="btn-print-cert"
              type="button"
              onClick={handlePrint}
              className="py-2 px-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs flex items-center gap-1.5 shadow-md shadow-blue-600/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              In / Lưu PDF
            </button>

            <button
              id="btn-close-cert"
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 16:9 CERTIFICATE MAIN CONTAINER */}
        <div 
          ref={certRef}
          id="printable-certificate" 
          className="relative w-full aspect-[16/9] min-h-[500px] rounded-3xl bg-gradient-to-br from-[#FFFDF8] via-[#FAF6ED] to-[#FFF9EE] border-4 sm:border-8 border-amber-500/90 p-4 sm:p-8 md:p-10 shadow-2xl text-slate-900 overflow-hidden flex flex-col justify-between print:m-0 print:border-amber-600 print:text-black print:bg-white print:rounded-none"
        >
          {/* Ornate Triple Border Line inside */}
          <div className="absolute inset-2 sm:inset-3 border-2 border-amber-400/70 rounded-2xl pointer-events-none" />
          <div className="absolute inset-3 sm:inset-4 border border-amber-300/40 rounded-xl pointer-events-none" />

          {/* Ornate Corner Accents */}
          <div className="absolute top-4 left-4 w-8 sm:w-12 h-8 sm:h-12 border-t-4 border-l-4 border-amber-600 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-4 right-4 w-8 sm:w-12 h-8 sm:h-12 border-t-4 border-r-4 border-amber-600 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-8 sm:w-12 h-8 sm:h-12 border-b-4 border-l-4 border-amber-600 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-8 sm:w-12 h-8 sm:h-12 border-b-4 border-r-4 border-amber-600 rounded-br-lg pointer-events-none" />

          {/* Scientific Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
            <div className="w-80 sm:w-96 h-80 sm:h-96 rounded-full border-8 border-dashed border-blue-900 flex items-center justify-center">
              <Award className="w-64 h-64 text-blue-900" />
            </div>
          </div>

          {/* TOP SECTION: Header & Seals */}
          <div className="relative z-10 text-center space-y-1">
            <div className="flex items-center justify-center gap-2 text-amber-500">
              <div className="flex items-center gap-1">
                {Array.from({ length: classData.stars }).map((_, i) => (
                  <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-amber-400 text-amber-500" />
                ))}
              </div>
            </div>

            <div className="text-[10px] sm:text-xs font-black tracking-widest text-blue-800 uppercase">
              BỘ GIÁO DỤC VÀ ĐÀO TẠO • HỆ THỐNG ĐÁNH GIÁ NĂNG LỰC KHOA HỌC TỰ NHIÊN 7
            </div>

            <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-900 uppercase font-serif tracking-tight pt-1">
              GIẤY CHỨNG NHẬN DANH DỰ
            </h1>

            <div className="text-[11px] sm:text-xs font-bold text-slate-500">
              Hệ thống khảo sát: <span className="text-orange-600 font-extrabold">"AI LÀ CHUYÊN GIA PHÒNG THÍ NGHIỆM"</span> • Cố vấn: <strong className="text-blue-700">HIỆP AI</strong>
            </div>

            <div className="w-36 sm:w-48 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-1" />
          </div>

          {/* MIDDLE SECTION: Student Name & Classification */}
          <div className="relative z-10 text-center space-y-2 sm:space-y-3 my-auto">
            <p className="text-[11px] sm:text-xs text-slate-500 font-semibold tracking-wider italic">
              Trân trọng biểu dương và chứng nhận năng lực học sinh:
            </p>

            <div className="inline-block border-b-2 sm:border-b-4 border-amber-500 pb-1 px-4 sm:px-8">
              <span className="text-2xl sm:text-3xl md:text-5xl font-black text-blue-950 font-serif tracking-wide drop-shadow-sm">
                {result.student.fullName.toUpperCase()}
              </span>
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-black bg-orange-100 text-orange-800 border border-orange-300">
                <BookmarkCheck className="w-4 h-4 text-orange-600" />
                Học sinh: Lớp {result.student.className}
              </span>
            </div>

            {/* Prominent Classification Banner */}
            <div className="max-w-2xl mx-auto py-2 sm:py-3 px-4 sm:px-6 rounded-2xl bg-white/90 border-2 border-amber-300 shadow-md">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-xs sm:text-sm font-black text-slate-700">DANH HIỆU:</span>
                <span className={`px-3 py-0.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase ${classData.themeBadge}`}>
                  ⭐ XẾP LOẠI: {classData.title} ⭐
                </span>
              </div>

              <div className="text-xs sm:text-sm font-extrabold text-slate-800">
                {classData.subTitle}
              </div>

              <div className="text-[11px] sm:text-xs font-mono font-bold text-blue-700 mt-1">
                Điểm đánh giá: <strong className="text-orange-600 text-sm sm:text-base">{result.score}/10</strong> ({percentage}%) • Đạt chuẩn: <strong>{result.answers.filter(a => a.isCorrect).length}/{result.totalQuestions} câu hỏi</strong>
              </div>
            </div>

            {/* Praise Quote */}
            <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 italic max-w-2xl mx-auto px-4 font-medium leading-relaxed">
              "{classData.praiseQuote}"
            </p>
          </div>

          {/* BOTTOM SECTION: Signatures, Seal & Date */}
          <div className="relative z-10 pt-2 border-t border-amber-200/80 flex items-end justify-between text-xs px-2 sm:px-6">
            
            {/* Left: Verification & Date */}
            <div className="text-left space-y-0.5">
              <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">
                Ngày cấp: <span className="font-bold text-slate-800">{result.completedAt}</span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-blue-700 font-mono font-bold">
                Mã kiểm định: LAB-KHTN7-{Date.now().toString().slice(-6)}
              </div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 italic">
                Hệ thống giáo dục KHTN 7 trực tuyến
              </div>
            </div>

            {/* Center: Official Wax Seal */}
            <div className="hidden sm:flex flex-col items-center justify-center">
              <div className="relative w-16 h-16 rounded-full border-4 border-red-600 bg-red-50/50 flex flex-col items-center justify-center shadow-md transform hover:rotate-6 transition-transform">
                <span className="text-[8px] font-black text-red-600 tracking-tighter">BẢO CHỨNG</span>
                <span className="text-[10px] font-serif font-black text-red-700">HIỆP AI</span>
                <span className="text-[7px] font-bold text-red-600">CHUYÊN GIA</span>
              </div>
              <span className="text-[9px] font-bold text-slate-400 mt-0.5">DẤU BẢO CHỨNG</span>
            </div>

            {/* Right: Author Signature */}
            <div className="text-right space-y-0.5">
              <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">
                Tác giả biên soạn & Cố vấn
              </div>
              <div className="h-8 sm:h-10 flex items-center justify-end">
                <span className="font-serif italic font-black text-xl sm:text-2xl text-orange-600 transform -rotate-3 select-none">
                  Hiệp AI
                </span>
              </div>
              <div className="text-xs sm:text-sm font-black text-slate-900">
                HIỆP AI
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">
                Chuyên gia Giáo dục KHTN
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
