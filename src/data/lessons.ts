import { Lesson } from '../types';

export interface Chapter {
  id: string;
  name: string;
  lessonIds: string[];
}

export const CHAPTERS: Chapter[] = [
  {
    id: 'ch-intro',
    name: 'Mở đầu: Phương pháp nghiên cứu KHTN',
    lessonIds: ['bai-1']
  },
  {
    id: 'ch-1',
    name: 'Chương I: Nguyên tử & Bảng tuần hoàn',
    lessonIds: ['bai-2', 'bai-3', 'bai-4']
  },
  {
    id: 'ch-2',
    name: 'Chương II: Phân tử & Liên kết hoá học',
    lessonIds: ['bai-5', 'bai-6', 'bai-7']
  },
  {
    id: 'ch-3',
    name: 'Chương III: Tốc độ chuyển động',
    lessonIds: ['bai-8', 'bai-9', 'bai-10', 'bai-11']
  },
  {
    id: 'ch-4',
    name: 'Chương IV: Âm thanh & Tiếng vang',
    lessonIds: ['bai-12', 'bai-13', 'bai-14']
  },
  {
    id: 'ch-5',
    name: 'Chương V: Ánh sáng & Phản xạ',
    lessonIds: ['bai-15', 'bai-16', 'bai-17']
  },
  {
    id: 'ch-6',
    name: 'Chương VI: Từ & Nam châm điện',
    lessonIds: ['bai-18', 'bai-19', 'bai-20']
  },
  {
    id: 'ch-7',
    name: 'Chương VII: Trao đổi chất & Năng lượng',
    lessonIds: ['bai-21', 'bai-22', 'bai-23', 'bai-24', 'bai-25', 'bai-26', 'bai-27', 'bai-28', 'bai-29', 'bai-30', 'bai-31', 'bai-32']
  },
  {
    id: 'ch-8',
    name: 'Chương VIII: Cảm ứng ở sinh vật',
    lessonIds: ['bai-33', 'bai-34', 'bai-35']
  },
  {
    id: 'ch-9',
    name: 'Chương IX: Sinh trưởng & Phát triển',
    lessonIds: ['bai-36', 'bai-37', 'bai-38']
  },
  {
    id: 'ch-10',
    name: 'Chương X: Sinh sản ở sinh vật',
    lessonIds: ['bai-39', 'bai-40', 'bai-41', 'bai-42']
  }
];

export const LESSONS: Lesson[] = [
  {
    id: 'bai-1',
    number: 1,
    title: 'Phương pháp và kĩ năng học tập môn Khoa học tự nhiên',
    chapterId: 'ch-intro',
    chapterName: 'Mở đầu: Phương pháp nghiên cứu KHTN',
    pages: 'Trang 6 - 13'
  },
  {
    id: 'bai-2',
    number: 2,
    title: 'Nguyên tử',
    chapterId: 'ch-1',
    chapterName: 'Chương I: Nguyên tử & Bảng tuần hoàn',
    pages: 'Trang 14 - 18'
  },
  {
    id: 'bai-3',
    number: 3,
    title: 'Nguyên tố hoá học',
    chapterId: 'ch-1',
    chapterName: 'Chương I: Nguyên tử & Bảng tuần hoàn',
    pages: 'Trang 19 - 22'
  },
  {
    id: 'bai-4',
    number: 4,
    title: 'Sơ lược về bảng tuần hoàn các nguyên tố hoá học',
    chapterId: 'ch-1',
    chapterName: 'Chương I: Nguyên tử & Bảng tuần hoàn',
    pages: 'Trang 23 - 31'
  },
  {
    id: 'bai-5',
    number: 5,
    title: 'Phân tử – Đơn chất – Hợp chất',
    chapterId: 'ch-2',
    chapterName: 'Chương II: Phân tử & Liên kết hoá học',
    pages: 'Trang 32 - 35'
  },
  {
    id: 'bai-6',
    number: 6,
    title: 'Giới thiệu về liên kết hoá học',
    chapterId: 'ch-2',
    chapterName: 'Chương II: Phân tử & Liên kết hoá học',
    pages: 'Trang 36 - 39'
  },
  {
    id: 'bai-7',
    number: 7,
    title: 'Hoá trị và công thức hoá học',
    chapterId: 'ch-2',
    chapterName: 'Chương II: Phân tử & Liên kết hoá học',
    pages: 'Trang 40 - 44'
  },
  {
    id: 'bai-8',
    number: 8,
    title: 'Tốc độ chuyển động',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    pages: 'Trang 45 - 48'
  },
  {
    id: 'bai-9',
    number: 9,
    title: 'Đo tốc độ',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    pages: 'Trang 49 - 52'
  },
  {
    id: 'bai-10',
    number: 10,
    title: 'Đồ thị quãng đường – thời gian',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    pages: 'Trang 53 - 55'
  },
  {
    id: 'bai-11',
    number: 11,
    title: 'Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    pages: 'Trang 56 - 59'
  },
  {
    id: 'bai-12',
    number: 12,
    title: 'Sóng âm',
    chapterId: 'ch-4',
    chapterName: 'Chương IV: Âm thanh & Tiếng vang',
    pages: 'Trang 60 - 63'
  },
  {
    id: 'bai-13',
    number: 13,
    title: 'Độ cao và độ to của âm',
    chapterId: 'ch-4',
    chapterName: 'Chương IV: Âm thanh & Tiếng vang',
    pages: 'Trang 64 - 67'
  },
  {
    id: 'bai-14',
    number: 14,
    title: 'Phản xạ âm, chống ô nhiễm tiếng ồn',
    chapterId: 'ch-4',
    chapterName: 'Chương IV: Âm thanh & Tiếng vang',
    pages: 'Trang 68 - 71'
  },
  {
    id: 'bai-15',
    number: 15,
    title: 'Năng lượng ánh sáng. Tia sáng, vùng tối',
    chapterId: 'ch-5',
    chapterName: 'Chương V: Ánh sáng & Phản xạ',
    pages: 'Trang 72 - 77'
  },
  {
    id: 'bai-16',
    number: 16,
    title: 'Sự phản xạ ánh sáng',
    chapterId: 'ch-5',
    chapterName: 'Chương V: Ánh sáng & Phản xạ',
    pages: 'Trang 78 - 81'
  },
  {
    id: 'bai-17',
    number: 17,
    title: 'Ảnh của vật qua gương phẳng',
    chapterId: 'ch-5',
    chapterName: 'Chương V: Ánh sáng & Phản xạ',
    pages: 'Trang 82 - 85'
  },
  {
    id: 'bai-18',
    number: 18,
    title: 'Nam châm',
    chapterId: 'ch-6',
    chapterName: 'Chương VI: Từ & Nam châm điện',
    pages: 'Trang 86 - 89'
  },
  {
    id: 'bai-19',
    number: 19,
    title: 'Từ trường',
    chapterId: 'ch-6',
    chapterName: 'Chương VI: Từ & Nam châm điện',
    pages: 'Trang 90 - 95'
  },
  {
    id: 'bai-20',
    number: 20,
    title: 'Chế tạo nam châm điện đơn giản',
    chapterId: 'ch-6',
    chapterName: 'Chương VI: Từ & Nam châm điện',
    pages: 'Trang 96 - 98'
  },
  {
    id: 'bai-21',
    number: 21,
    title: 'Khái quát về trao đổi chất và chuyển hoá năng lượng',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    pages: 'Trang 99 - 100'
  },
  {
    id: 'bai-22',
    number: 22,
    title: 'Quang hợp ở thực vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    pages: 'Trang 101 - 103'
  },
  {
    id: 'bai-23',
    number: 23,
    title: 'Một số yếu tố ảnh hưởng đến quang hợp',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    pages: 'Trang 104 - 107'
  },
  {
    id: 'bai-24',
    number: 24,
    title: 'Thực hành: Chứng minh quang hợp ở cây xanh',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    pages: 'Trang 108 - 110'
  },
  {
    id: 'bai-25',
    number: 25,
    title: 'Hô hấp tế bào',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    pages: 'Trang 111 - 112'
  },
  {
    id: 'bai-26',
    number: 26,
    title: 'Một số yếu tố ảnh hưởng đến hô hấp tế bào',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    pages: 'Trang 113 - 115'
  },
  {
    id: 'bai-27',
    number: 27,
    title: 'Thực hành: Hô hấp ở thực vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    pages: 'Trang 116 - 117'
  },
  {
    id: 'bai-28',
    number: 28,
    title: 'Trao đổi khí ở sinh vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    pages: 'Trang 118 - 121'
  },
  {
    id: 'bai-29',
    number: 29,
    title: 'Vai trò của nước và chất dinh dưỡng đối với sinh vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    pages: 'Trang 122 - 126'
  },
  {
    id: 'bai-30',
    number: 30,
    title: 'Trao đổi nước và chất dinh dưỡng ở thực vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    pages: 'Trang 127 - 130'
  },
  {
    id: 'bai-31',
    number: 31,
    title: 'Trao đổi nước và chất dinh dưỡng ở động vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    pages: 'Trang 131 - 135'
  },
  {
    id: 'bai-32',
    number: 32,
    title: 'Thực hành: Chứng minh thân vận chuyển nước và lá thoát hơi nước',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    pages: 'Trang 136 - 137'
  },
  {
    id: 'bai-33',
    number: 33,
    title: 'Cảm ứng ở sinh vật và tập tính ở động vật',
    chapterId: 'ch-8',
    chapterName: 'Chương VIII: Cảm ứng ở sinh vật',
    pages: 'Trang 138 - 140'
  },
  {
    id: 'bai-34',
    number: 34,
    title: 'Vận dụng hiện tượng cảm ứng ở sinh vật vào thực tiễn',
    chapterId: 'ch-8',
    chapterName: 'Chương VIII: Cảm ứng ở sinh vật',
    pages: 'Trang 141 - 144'
  },
  {
    id: 'bai-35',
    number: 35,
    title: 'Thực hành: Cảm ứng ở sinh vật',
    chapterId: 'ch-8',
    chapterName: 'Chương VIII: Cảm ứng ở sinh vật',
    pages: 'Trang 145 - 147'
  },
  {
    id: 'bai-36',
    number: 36,
    title: 'Khái quát về sinh trưởng và phát triển ở sinh vật',
    chapterId: 'ch-9',
    chapterName: 'Chương IX: Sinh trưởng & Phát triển',
    pages: 'Trang 148 - 150'
  },
  {
    id: 'bai-37',
    number: 37,
    title: 'Ứng dụng sinh trưởng và phát triển ở sinh vật vào thực tiễn',
    chapterId: 'ch-9',
    chapterName: 'Chương IX: Sinh trưởng & Phát triển',
    pages: 'Trang 151 - 155'
  },
  {
    id: 'bai-38',
    number: 38,
    title: 'Thực hành: Quan sát sự sinh trưởng và phát triển ở một số sinh vật',
    chapterId: 'ch-9',
    chapterName: 'Chương IX: Sinh trưởng & Phát triển',
    pages: 'Trang 156 - 157'
  },
  {
    id: 'bai-39',
    number: 39,
    title: 'Sinh sản vô tính ở sinh vật',
    chapterId: 'ch-10',
    chapterName: 'Chương X: Sinh sản ở sinh vật',
    pages: 'Trang 158 - 163'
  },
  {
    id: 'bai-40',
    number: 40,
    title: 'Sinh sản hữu tính ở sinh vật',
    chapterId: 'ch-10',
    chapterName: 'Chương X: Sinh sản ở sinh vật',
    pages: 'Trang 164 - 168'
  },
  {
    id: 'bai-41',
    number: 41,
    title: 'Một số yếu tố ảnh hưởng và điều hoà, điều khiển sinh sản ở sinh vật',
    chapterId: 'ch-10',
    chapterName: 'Chương X: Sinh sản ở sinh vật',
    pages: 'Trang 169 - 172'
  },
  {
    id: 'bai-42',
    number: 42,
    title: 'Cơ thể sinh vật là một thể thống nhất',
    chapterId: 'ch-10',
    chapterName: 'Chương X: Sinh sản ở sinh vật',
    pages: 'Trang 173 - 174'
  }
];
