import { Question } from '../types';
import { EXTENDED_QUESTIONS } from './extendedQuestions';

const BASE_QUESTIONS: Question[] = [
  // ===================== BÀI 1: PHƯƠNG PHÁP & KĨ NĂNG KHTN =====================
  {
    id: 'q-b1-nb-1',
    lessonId: 'bai-1',
    lessonTitle: 'Bài 1: Phương pháp và kĩ năng học tập môn KHTN',
    chapterId: 'ch-intro',
    chapterName: 'Mở đầu: Phương pháp nghiên cứu KHTN',
    level: 'nhan_biet',
    question: 'Quy trình nghiên cứu tìm hiểu tự nhiên được thực hiện lần lượt qua bao nhiêu bước cơ bản?',
    options: ['3 bước', '4 bước', '5 bước', '6 bước'],
    correctIndex: 2,
    explanation: 'Phương pháp tìm hiểu tự nhiên gồm 5 bước: (1) Đề xuất vấn đề, (2) Đưa ra dự đoán khoa học, (3) Lập kế hoạch kiểm tra, (4) Thực hiện kế hoạch, (5) Viết báo cáo & thảo luận.',
    textbookRef: 'SGK KHTN 7 - Trang 6'
  },
  {
    id: 'q-b1-th-1',
    lessonId: 'bai-1',
    lessonTitle: 'Bài 1: Phương pháp và kĩ năng học tập môn KHTN',
    chapterId: 'ch-intro',
    chapterName: 'Mở đầu: Phương pháp nghiên cứu KHTN',
    level: 'thong_hieu',
    question: 'Trong phương pháp tìm hiểu tự nhiên, nếu kết quả kiểm tra thí nghiệm KHÔNG phù hợp với dự đoán ban đầu, nhà nghiên cứu cần làm gì tiếp theo?',
    options: [
      'Thay đổi số liệu thí nghiệm cho khớp với dự đoán',
      'Quay lại bước 2 để đưa ra dự đoán khoa học mới và điều chỉnh kế hoạch',
      'Dừng ngay nghiên cứu và công bố dự đoán đã sai hoàn toàn',
      'Bỏ qua kết quả thí nghiệm và giữ nguyên kết luận ban đầu'
    ],
    correctIndex: 1,
    explanation: 'Theo sơ đồ quy trình khoa học (SGK trang 6), nếu kết quả kiểm tra không phù hợp, nhà khoa học cần quay lại Bước 2 để xây dựng lại giả thuyết/dự đoán khoa học mới.',
    textbookRef: 'SGK KHTN 7 - Trang 6'
  },
  {
    id: 'q-b1-vd-1',
    lessonId: 'bai-1',
    lessonTitle: 'Bài 1: Phương pháp và kĩ năng học tập môn KHTN',
    chapterId: 'ch-intro',
    chapterName: 'Mở đầu: Phương pháp nghiên cứu KHTN',
    level: 'van_dung',
    question: 'Để đo thời gian chuyển động của viên bi thép lăn trên máng nghiêng một cách chính xác đến 0,001 s trong phòng thực hành, học sinh nên kết hợp những thiết bị nào?',
    options: [
      'Đồng hồ bấm giây cơ học và thước dây',
      'Đồng hồ đeo tay và cảm biến quang học',
      'Cổng quang điện kết nối với đồng hồ đo thời gian hiện số',
      'Súng bắn tốc độ cầm tay và điện thoại thông minh'
    ],
    correctIndex: 2,
    explanation: 'Cổng quang điện hoạt động như một công tắc điều khiển tự động kết nối với đồng hồ hiện số, cho phép ghi nhận thời gian chính xác tới phần nghìn giây mà không bị sai số do phản xạ tay người.',
    textbookRef: 'SGK KHTN 7 - Trang 10, 11'
  },

  // ===================== CHƯƠNG I: NGUYÊN TỬ & BẢNG TUẦN HOÀN =====================
  {
    id: 'q-b2-nb-1',
    lessonId: 'bai-2',
    lessonTitle: 'Bài 2: Nguyên tử',
    chapterId: 'ch-1',
    chapterName: 'Chương I: Nguyên tử & Bảng tuần hoàn',
    level: 'nhan_biet',
    question: 'Theo mô hình nguyên tử của Rutherford – Bohr, nguyên tử gồm những thành phần nào?',
    options: [
      'Hạt nhân mang điện tích âm và lớp vỏ electron mang điện tích dương',
      'Hạt nhân ở tâm mang điện tích dương và các electron mang điện tích âm quay xung quanh',
      'Chỉ gồm các hạt neutron và hạt proton liên kết chặt chẽ',
      'Khối cầu đặc đồng nhất tích điện dương có các hạt electron gắn vào'
    ],
    correctIndex: 1,
    explanation: 'Nguyên tử có cấu tạo rỗng, ở tâm là hạt nhân mang điện tích dương, xung quanh là các electron mang điện tích âm chuyển động trên các lớp electron.',
    textbookRef: 'SGK KHTN 7 - Trang 15'
  },
  {
    id: 'q-b2-nb-2',
    lessonId: 'bai-2',
    lessonTitle: 'Bài 2: Nguyên tử',
    chapterId: 'ch-1',
    chapterName: 'Chương I: Nguyên tử & Bảng tuần hoàn',
    level: 'nhan_biet',
    question: 'Hạt nhân nguyên tử được cấu tạo từ các loại hạt nào sau đây?',
    options: [
      'Proton (p) và electron (e)',
      'Neutron (n) và electron (e)',
      'Proton (p) và neutron (n)',
      'Proton, neutron và electron'
    ],
    correctIndex: 2,
    explanation: 'Hạt nhân nguyên tử gồm hạt proton mang điện tích dương (+1) và hạt neutron không mang điện.',
    textbookRef: 'SGK KHTN 7 - Trang 16'
  },
  {
    id: 'q-b2-th-1',
    lessonId: 'bai-2',
    lessonTitle: 'Bài 2: Nguyên tử',
    chapterId: 'ch-1',
    chapterName: 'Chương I: Nguyên tử & Bảng tuần hoàn',
    level: 'thong_hieu',
    question: 'Tại sao nguyên tử luôn trung hoà về điện?',
    options: [
      'Vì hạt nhân nguyên tử không mang điện tích',
      'Vì số hạt proton luôn bằng số hạt neutron',
      'Vì số hạt proton mang điện tích dương bằng tổng số hạt electron mang điện tích âm',
      'Vì electron chuyển động rất nhanh triệt tiêu điện tích của proton'
    ],
    correctIndex: 2,
    explanation: 'Mỗi hạt proton mang 1 đơn vị điện tích dương (+1), mỗi electron mang 1 đơn vị điện tích âm (-1). Vì trong nguyên tử số proton = số electron nên nguyên tử trung hòa về điện.',
    textbookRef: 'SGK KHTN 7 - Trang 17'
  },
  {
    id: 'q-b2-vd-1',
    lessonId: 'bai-2',
    lessonTitle: 'Bài 2: Nguyên tử',
    chapterId: 'ch-1',
    chapterName: 'Chương I: Nguyên tử & Bảng tuần hoàn',
    level: 'van_dung',
    question: 'Nguyên tử nhôm (Aluminium) có 13 proton và 14 neutron. Khối lượng gần đúng của nguyên tử nhôm tính theo đơn vị amu là bao nhiêu?',
    options: ['13 amu', '14 amu', '27 amu', '40 amu'],
    correctIndex: 2,
    explanation: 'Khối lượng electron rất nhỏ (khoảng 0,00055 amu) nên coi khối lượng nguyên tử bằng khối lượng hạt nhân = số p + số n = 13 + 14 = 27 amu.',
    textbookRef: 'SGK KHTN 7 - Trang 18'
  },
  {
    id: 'q-b3-nb-1',
    lessonId: 'bai-3',
    lessonTitle: 'Bài 3: Nguyên tố hoá học',
    chapterId: 'ch-1',
    chapterName: 'Chương I: Nguyên tử & Bảng tuần hoàn',
    level: 'nhan_biet',
    question: 'Tập hợp những nguyên tử có cùng số hạt nào trong hạt nhân đều thuộc cùng một nguyên tố hoá học?',
    options: ['Cùng số electron', 'Cùng số neutron', 'Cùng số proton', 'Cùng khối lượng amu'],
    correctIndex: 2,
    explanation: 'Nguyên tố hoá học là tập hợp những nguyên tử có cùng số proton trong hạt nhân (số proton chính là số hiệu nguyên tử Z).',
    textbookRef: 'SGK KHTN 7 - Trang 19'
  },
  {
    id: 'q-b3-th-1',
    lessonId: 'bai-3',
    lessonTitle: 'Bài 3: Nguyên tố hoá học',
    chapterId: 'ch-1',
    chapterName: 'Chương I: Nguyên tử & Bảng tuần hoàn',
    level: 'thong_hieu',
    question: 'Kí hiệu hoá học của các nguyên tố Sodium (Natri), Potassium (Kali) và Iron (Sắt) lần lượt là gì?',
    options: ['So, Po, Ir', 'Na, K, Fe', 'Na, P, Fe', 'S, K, Fe'],
    correctIndex: 1,
    explanation: 'Sodium có nguồn gốc từ tiếng Latin "natrium" kí hiệu là Na; Potassium từ "kalium" kí hiệu là K; Iron từ "ferrum" kí hiệu là Fe.',
    textbookRef: 'SGK KHTN 7 - Trang 21'
  },
  {
    id: 'q-b3-vd-1',
    lessonId: 'bai-3',
    lessonTitle: 'Bài 3: Nguyên tố hoá học',
    chapterId: 'ch-1',
    chapterName: 'Chương I: Nguyên tử & Bảng tuần hoàn',
    level: 'van_dung',
    question: 'Bốn nguyên tố hoá học nào chiếm tới khoảng 96% khối lượng cơ thể người?',
    options: [
      'Carbon (C), Hydrogen (H), Oxygen (O), Nitrogen (N)',
      'Calcium (Ca), Phosphorus (P), Iron (Fe), Zinc (Zn)',
      'Sodium (Na), Potassium (K), Chlorine (Cl), Sulfur (S)',
      'Carbon (C), Calcium (Ca), Iron (Fe), Iodine (I)'
    ],
    correctIndex: 0,
    explanation: 'O (65%), C (18.5%), H (9.5%), N (3%) là 4 nguyên tố chính cấu tạo nên protein, lipid, carbohydrate và nước cấu thành cơ thể người.',
    textbookRef: 'SGK KHTN 7 - Trang 22'
  },
  {
    id: 'q-b4-nb-1',
    lessonId: 'bai-4',
    lessonTitle: 'Bài 4: Sơ lược về bảng tuần hoàn các nguyên tố hoá học',
    chapterId: 'ch-1',
    chapterName: 'Chương I: Nguyên tử & Bảng tuần hoàn',
    level: 'nhan_biet',
    question: 'Trong bảng tuần hoàn hiện đại, các nguyên tố hoá học được sắp xếp theo nguyên tắc nào sau đây?',
    options: [
      'Theo chiều tăng dần của khối lượng nguyên tử',
      'Theo chiều tăng dần của điện tích hạt nhân nguyên tử',
      'Theo thứ tự chữ cái của kí hiệu hoá học',
      'Theo mức độ hoạt động hoá học giảm dần'
    ],
    correctIndex: 1,
    explanation: 'Các nguyên tố trong Bảng tuần hoàn được xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử (số hiệu nguyên tử Z).',
    textbookRef: 'SGK KHTN 7 - Trang 24'
  },
  {
    id: 'q-b4-th-1',
    lessonId: 'bai-4',
    lessonTitle: 'Bài 4: Sơ lược về bảng tuần hoàn các nguyên tố hoá học',
    chapterId: 'ch-1',
    chapterName: 'Chương I: Nguyên tử & Bảng tuần hoàn',
    level: 'thong_hieu',
    question: 'Các nguyên tố nằm trong cùng một chu kì trong Bảng tuần hoàn có đặc điểm cấu tạo chung nào?',
    options: [
      'Có cùng số electron ở lớp vỏ ngoài cùng',
      'Có cùng số proton trong hạt nhân',
      'Có cùng số lớp electron trong vỏ nguyên tử',
      'Có cùng tính chất hoá học giống hệt nhau'
    ],
    correctIndex: 2,
    explanation: 'Chu kì là dãy các nguyên tố mà nguyên tử của chúng có cùng số lớp electron và được xếp theo chiều điện tích hạt nhân tăng dần.',
    textbookRef: 'SGK KHTN 7 - Trang 26, 27'
  },
  {
    id: 'q-b4-th-2',
    lessonId: 'bai-4',
    lessonTitle: 'Bài 4: Sơ lược về bảng tuần hoàn các nguyên tố hoá học',
    chapterId: 'ch-1',
    chapterName: 'Chương I: Nguyên tử & Bảng tuần hoàn',
    level: 'thong_hieu',
    question: 'Các nguyên tố thuộc nhóm VIIIA trong bảng tuần hoàn (He, Ne, Ar, Kr, Xe, Rn) được gọi là nhóm nguyên tố gì?',
    options: ['Kim loại kiềm', 'Halogen', 'Khí hiếm (khí trơ)', 'Kim loại chuyển tiếp'],
    correctIndex: 2,
    explanation: 'Nhóm VIIIA gồm 7 nguyên tố khí hiếm có lớp vỏ ngoài cùng bền vững (8e, riêng He có 2e), rất khó tham gia phản ứng hoá học.',
    textbookRef: 'SGK KHTN 7 - Trang 28, 31'
  },
  {
    id: 'q-b4-vd-1',
    lessonId: 'bai-4',
    lessonTitle: 'Bài 4: Sơ lược về bảng tuần hoàn các nguyên tố hoá học',
    chapterId: 'ch-1',
    chapterName: 'Chương I: Nguyên tử & Bảng tuần hoàn',
    level: 'van_dung',
    question: 'Nguyên tố X có số hiệu nguyên tử là 11 (Z = 11). Vị trí của X trong bảng tuần hoàn là:',
    options: [
      'Ô số 11, chu kì 2, nhóm IIA',
      'Ô số 11, chu kì 3, nhóm IA (Kim loại kiềm)',
      'Ô số 11, chu kì 3, nhóm VIIA (Halogen)',
      'Ô số 11, chu kì 4, nhóm IA'
    ],
    correctIndex: 1,
    explanation: 'Z = 11 (Sodium - Na) có 11 electron phân bố trên 3 lớp: lớp 1 có 2e, lớp 2 có 8e, lớp 3 có 1e. Do đó nằm ở ô 11, chu kì 3 (có 3 lớp e), nhóm IA (có 1 electron ngoài cùng).',
    textbookRef: 'SGK KHTN 7 - Trang 26, 28'
  },

  // ===================== CHƯƠNG II: PHÂN TỬ & LIÊN KẾT HOÁ HỌC =====================
  {
    id: 'q-b5-nb-1',
    lessonId: 'bai-5',
    lessonTitle: 'Bài 5: Phân tử – Đơn chất – Hợp chất',
    chapterId: 'ch-2',
    chapterName: 'Chương II: Phân tử & Liên kết hoá học',
    level: 'nhan_biet',
    question: 'Đơn chất là những chất được tạo nên từ bao nhiêu nguyên tố hoá học?',
    options: [
      'Chỉ từ 1 nguyên tố hoá học',
      'Từ 2 nguyên tố hoá học trở lên',
      'Từ các nguyên tố phi kim với nhau',
      'Chỉ từ các nguyên tử kim loại'
    ],
    correctIndex: 0,
    explanation: 'Đơn chất là chất được tạo nên từ một nguyên tố hoá học (ví dụ: khí oxygen O2, kim loại đồng Cu, than chì C).',
    textbookRef: 'SGK KHTN 7 - Trang 33'
  },
  {
    id: 'q-b5-th-1',
    lessonId: 'bai-5',
    lessonTitle: 'Bài 5: Phân tử – Đơn chất – Hợp chất',
    chapterId: 'ch-2',
    chapterName: 'Chương II: Phân tử & Liên kết hoá học',
    level: 'thong_hieu',
    question: 'Dãy chất nào sau đây gồm toàn các hợp chất?',
    options: [
      'H2O, NaCl, CO2, CaCO3',
      'O2, N2, H2O, Cu',
      'Fe, Al, O3, CH4',
      'He, Ne, H2SO4, Cl2'
    ],
    correctIndex: 0,
    explanation: 'Hợp chất là chất được tạo nên từ 2 hay nhiều nguyên tố hoá học: H2O (H, O), NaCl (Na, Cl), CO2 (C, O), CaCO3 (Ca, C, O).',
    textbookRef: 'SGK KHTN 7 - Trang 34'
  },
  {
    id: 'q-b5-vd-1',
    lessonId: 'bai-5',
    lessonTitle: 'Bài 5: Phân tử – Đơn chất – Hợp chất',
    chapterId: 'ch-2',
    chapterName: 'Chương II: Phân tử & Liên kết hoá học',
    level: 'van_dung',
    question: 'Khối lượng phân tử của khí carbon dioxide (CO2) là bao nhiêu amu? Biết C = 12 amu, O = 16 amu.',
    options: ['28 amu', '32 amu', '44 amu', '56 amu'],
    correctIndex: 2,
    explanation: 'Khối lượng phân tử CO2 = 12 * 1 + 16 * 2 = 12 + 32 = 44 amu.',
    textbookRef: 'SGK KHTN 7 - Trang 35'
  },
  {
    id: 'q-b6-th-1',
    lessonId: 'bai-6',
    lessonTitle: 'Bài 6: Giới thiệu về liên kết hoá học',
    chapterId: 'ch-2',
    chapterName: 'Chương II: Phân tử & Liên kết hoá học',
    level: 'thong_hieu',
    question: 'Liên kết ion trong phân tử muối ăn (NaCl) được hình thành như thế nào?',
    options: [
      'Nguyên tử Na và Cl cùng góp chung 1 electron',
      'Nguyên tử Na nhường 1 electron tạo ion Na+, nguyên tử Cl nhận 1 electron tạo ion Cl-, hai ion trái dấu hút nhau',
      'Nguyên tử Cl nhường electron cho nguyên tử Na tạo lực hút tĩnh điện',
      'Do lực hút hấp dẫn giữa hai khối lượng nguyên tử'
    ],
    correctIndex: 1,
    explanation: 'Kim loại Na nhường 1 electron ngoài cùng cho Cl để cả hai đạt cấu hình bền khí hiếm. Ion Na+ và Cl- mang điện trái dấu nên hút nhau tạo liên kết ion.',
    textbookRef: 'SGK KHTN 7 - Trang 37'
  },
  {
    id: 'q-b6-th-2',
    lessonId: 'bai-6',
    lessonTitle: 'Bài 6: Giới thiệu về liên kết hoá học',
    chapterId: 'ch-2',
    chapterName: 'Chương II: Phân tử & Liên kết hoá học',
    level: 'thong_hieu',
    question: 'Liên kết cộng hoá trị trong phân tử nước (H2O) là liên kết được hình thành nhờ:',
    options: [
      'Lực hút tĩnh điện giữa các ion dương và ion âm',
      'Một hay nhiều cặp electron dùng chung giữa các nguyên tử',
      'Sự phân rã của các hạt nhân nguyên tử',
      'Lực từ trường giữa các hạt electron xoay quanh'
    ],
    correctIndex: 1,
    explanation: 'Liên kết cộng hoá trị là liên kết được tạo nên giữa hai nguyên tử bằng một hoặc nhiều cặp electron dùng chung.',
    textbookRef: 'SGK KHTN 7 - Trang 38, 39'
  },
  {
    id: 'q-b7-nb-1',
    lessonId: 'bai-7',
    lessonTitle: 'Bài 7: Hoá trị và công thức hoá học',
    chapterId: 'ch-2',
    chapterName: 'Chương II: Phân tử & Liên kết hoá học',
    level: 'nhan_biet',
    question: 'Theo quy ước hoá trị trong SGK, nguyên tố nào luôn được lấy làm đơn vị để so sánh và có hoá trị bằng I?',
    options: ['Carbon (C)', 'Oxygen (O)', 'Hydrogen (H)', 'Sodium (Na)'],
    correctIndex: 2,
    explanation: 'Người ta quy ước nguyên tố H luôn có hoá trị I. Nguyên tử của nguyên tố khác liên kết được với bao nhiêu nguyên tử H thì nguyên tố đó có hoá trị bằng bấy nhiêu.',
    textbookRef: 'SGK KHTN 7 - Trang 41'
  },
  {
    id: 'q-b7-vd-1',
    lessonId: 'bai-7',
    lessonTitle: 'Bài 7: Hoá trị và công thức hoá học',
    chapterId: 'ch-2',
    chapterName: 'Chương II: Phân tử & Liên kết hoá học',
    level: 'van_dung',
    question: 'Biết Al có hoá trị III và nhóm (SO4) có hoá trị II. Áp dụng quy tắc hoá trị, công thức hoá học đúng của aluminium sulfate là:',
    options: ['AlSO4', 'Al2SO4', 'Al(SO4)3', 'Al2(SO4)3'],
    correctIndex: 3,
    explanation: 'Đặt công thức Al_x(SO4)_y. Theo quy tắc hoá trị: x * III = y * II => x/y = II/III = 2/3 => Công thức là Al2(SO4)3.',
    textbookRef: 'SGK KHTN 7 - Trang 43'
  },
  {
    id: 'q-b7-vd-2',
    lessonId: 'bai-7',
    lessonTitle: 'Bài 7: Hoá trị và công thức hoá học',
    chapterId: 'ch-2',
    chapterName: 'Chương II: Phân tử & Liên kết hoá học',
    level: 'van_dung',
    question: 'Hợp chất calcium carbonate (CaCO3) có khối lượng phân tử là 100 amu (Ca = 40, C = 12, O = 16). Thành phần % khối lượng của Calcium (Ca) trong hợp chất là:',
    options: ['12%', '40%', '48%', '50%'],
    correctIndex: 1,
    explanation: '%Ca = (40 * 1 / 100) * 100% = 40%.',
    textbookRef: 'SGK KHTN 7 - Trang 41'
  },

  // ===================== CHƯƠNG III: TỐC ĐỘ =====================
  {
    id: 'q-b8-nb-1',
    lessonId: 'bai-8',
    lessonTitle: 'Bài 8: Tốc độ chuyển động',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    level: 'nhan_biet',
    question: 'Tốc độ chuyển động của một vật được tính bằng công thức nào?',
    options: ['v = s * t', 'v = s / t', 'v = t / s', 'v = s + t'],
    correctIndex: 1,
    explanation: 'Tốc độ chuyển động được tính bằng quãng đường vật đi được chia cho khoảng thời gian đi quãng đường đó: v = s / t.',
    textbookRef: 'SGK KHTN 7 - Trang 45'
  },
  {
    id: 'q-b8-th-1',
    lessonId: 'bai-8',
    lessonTitle: 'Bài 8: Tốc độ chuyển động',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    level: 'thong_hieu',
    question: 'Một xe máy chuyển động với tốc độ 36 km/h. Giá trị này tương đương với bao nhiêu mét trên giây (m/s)?',
    options: ['10 m/s', '12 m/s', '15 m/s', '20 m/s'],
    correctIndex: 0,
    explanation: '1 m/s = 3,6 km/h. Do đó: 36 km/h = 36 / 3,6 = 10 m/s.',
    textbookRef: 'SGK KHTN 7 - Trang 46'
  },
  {
    id: 'q-b8-vd-1',
    lessonId: 'bai-8',
    lessonTitle: 'Bài 8: Tốc độ chuyển động',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    level: 'van_dung',
    question: 'Một học sinh đạp xe từ nhà đến trường cách nhau 6 km hết 20 phút. Tốc độ trung bình của bạn là bao nhiêu km/h?',
    options: ['12 km/h', '18 km/h', '24 km/h', '30 km/h'],
    correctIndex: 1,
    explanation: 'Đổi 20 phút = 20/60 h = 1/3 h. Tốc độ v = s / t = 6 / (1/3) = 18 km/h.',
    textbookRef: 'SGK KHTN 7 - Trang 47'
  },
  {
    id: 'q-b9-th-1',
    lessonId: 'bai-9',
    lessonTitle: 'Bài 9: Đo tốc độ',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    level: 'thong_hieu',
    question: 'Thiết bị "bắn tốc độ" của cảnh sát giao thông dùng để kiểm soát phương tiện hoạt động dựa trên nguyên tắc nào?',
    options: [
      'Ghi hình ảnh biển số và đo khoảng thời gian ô tô chạy qua hai vạch mốc cố định xác định',
      'Đo âm thanh động cơ xe phát ra',
      'Cân tải trọng bánh xe khi đi qua cảm biến mặt đường',
      'Đếm số vòng quay của bánh xe qua camera'
    ],
    correctIndex: 0,
    explanation: 'Camera ghi thời gian xe chạy qua hai vạch mốc cách nhau khoảng cách s cố định, máy tính nhỏ tự tính v = s / t và so sánh với tốc độ giới hạn của cung đường.',
    textbookRef: 'SGK KHTN 7 - Trang 51, 52'
  },
  {
    id: 'q-b10-th-1',
    lessonId: 'bai-10',
    lessonTitle: 'Bài 10: Đồ thị quãng đường – thời gian',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    level: 'thong_hieu',
    question: 'Trên đồ thị quãng đường – thời gian (s - t), đoạn đồ thị nằm ngang song song với trục thời gian (Ot) biểu thị điều gì?',
    options: [
      'Vật chuyển động với tốc độ tăng dần',
      'Vật chuyển động lùi lại điểm xuất phát',
      'Vật đang đứng yên (quãng đường không thay đổi theo thời gian)',
      'Vật chuyển động với tốc độ vô hạn'
    ],
    correctIndex: 2,
    explanation: 'Khi đồ thị s-t là đoạn thẳng nằm ngang song song với trục thời gian Ot, quãng đường s giữ nguyên không đổi, nghĩa là vật đang dừng lại đứng yên.',
    textbookRef: 'SGK KHTN 7 - Trang 54'
  },
  {
    id: 'q-b11-vd-1',
    lessonId: 'bai-11',
    lessonTitle: 'Bài 11: Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    level: 'van_dung',
    question: 'Quy tắc "3 giây" khi lái xe ô tô trên đường cao tốc giúp người lái xe điều gì?',
    options: [
      'Vượt xe phía trước trong vòng 3 giây',
      'Xác định khoảng cách an toàn tối thiểu với xe chạy liền trước để kịp phanh dừng',
      'Giới hạn thời gian dừng đỗ trên làn khẩn cấp',
      'Tăng tốc độ tối đa sau 3 giây'
    ],
    correctIndex: 1,
    explanation: 'Khoảng cách an toàn (m) xấp xỉ = tốc độ (m/s) * 3 giây. Khoảng cách này đảm bảo người lái xe có đủ thời gian phản xạ và quãng đường phanh hãm khi có tình huống bất ngờ.',
    textbookRef: 'SGK KHTN 7 - Trang 58'
  },

  // ===================== CHƯƠNG IV: ÂM THANH =====================
  {
    id: 'q-b12-nb-1',
    lessonId: 'bai-12',
    lessonTitle: 'Bài 12: Sóng âm',
    chapterId: 'ch-4',
    chapterName: 'Chương IV: Âm thanh & Tiếng vang',
    level: 'nhan_biet',
    question: 'Sóng âm lan truyền được trong những môi trường nào sau đây?',
    options: [
      'Chỉ lan truyền được trong không khí',
      'Chất rắn, chất lỏng và chất khí',
      'Chất rắn và chân không',
      'Tất cả mọi nơi kể cả chân không'
    ],
    correctIndex: 1,
    explanation: 'Sóng âm cần môi trường vật chất (các hạt nguyên tử, phân tử dao động) để lan truyền nên truyền được trong rắn, lỏng, khí và KHÔNG truyền được trong chân không.',
    textbookRef: 'SGK KHTN 7 - Trang 62, 63'
  },
  {
    id: 'q-b12-th-1',
    lessonId: 'bai-12',
    lessonTitle: 'Bài 12: Sóng âm',
    chapterId: 'ch-4',
    chapterName: 'Chương IV: Âm thanh & Tiếng vang',
    level: 'thong_hieu',
    question: 'Khi đặt một chiếc đồng hồ báo thức đang reo chuông vào trong một bình thuỷ tinh rồi dùng máy hút hết không khí ra (tạo chân không), hiện tượng gì sẽ xảy ra?',
    options: [
      'Tiếng chuông reo to hơn lúc đầu',
      'Tiếng chuông vẫn nghe rõ như cũ',
      'Không còn nghe thấy tiếng chuông reo nữa dù mắt vẫn thấy quả chuông dao động',
      'Chiếc đồng hồ lập tức ngừng hoạt động'
    ],
    correctIndex: 2,
    explanation: 'Chân không không có các phân tử vật chất để truyền dao động, do đó sóng âm không thể truyền qua chân không tới tai người nghe.',
    textbookRef: 'SGK KHTN 7 - Trang 63'
  },
  {
    id: 'q-b13-th-1',
    lessonId: 'bai-13',
    lessonTitle: 'Bài 13: Độ cao và độ to của âm',
    chapterId: 'ch-4',
    chapterName: 'Chương IV: Âm thanh & Tiếng vang',
    level: 'thong_hieu',
    question: 'Độ to của âm do nguồn âm phát ra phụ thuộc vào đại lượng nào của dao động?',
    options: [
      'Tần số dao động',
      'Biên độ dao động',
      'Môi trường truyền âm',
      'Quãng đường truyền âm'
    ],
    correctIndex: 1,
    explanation: 'Biên độ dao động càng lớn thì âm phát ra càng to. Trong khi đó, tần số dao động quyết định độ cao (bổng/trầm) của âm.',
    textbookRef: 'SGK KHTN 7 - Trang 65, 67'
  },
  {
    id: 'q-b13-vd-1',
    lessonId: 'bai-13',
    lessonTitle: 'Bài 13: Độ cao và độ to của âm',
    chapterId: 'ch-4',
    chapterName: 'Chương IV: Âm thanh & Tiếng vang',
    level: 'van_dung',
    question: 'Một con ong mật khi bay đập cánh 3 300 lần trong 10 giây. Tần số dao động của cánh ong mật là bao nhiêu?',
    options: ['33 Hz', '330 Hz', '3 300 Hz', '33 000 Hz'],
    correctIndex: 1,
    explanation: 'Tần số là số dao động thực hiện trong 1 giây: f = 3 300 / 10 = 330 Hz.',
    textbookRef: 'SGK KHTN 7 - Trang 66'
  },
  {
    id: 'q-b14-th-1',
    lessonId: 'bai-14',
    lessonTitle: 'Bài 14: Phản xạ âm, chống ô nhiễm tiếng ồn',
    chapterId: 'ch-4',
    chapterName: 'Chương IV: Âm thanh & Tiếng vang',
    level: 'thong_hieu',
    question: 'Vật liệu nào sau đây phản xạ âm kém (hấp thụ âm tốt) thường dùng để ốp tường phòng karaoke, rạp chiếu phim?',
    options: [
      'Tấm kính phẳng và đá hoa cương bóng',
      'Mặt tường bê tông nhẵn và tấm kim loại cứng',
      'Xốp mềm, rèm nhung dày, mút dạ sần sùi',
      'Gạch men ốp lát sáng bóng'
    ],
    correctIndex: 2,
    explanation: 'Những vật liệu mềm, xốp, có bề mặt gồ ghề, sần sùi như rèm nhung, mút xốp phản xạ âm kém và hấp thụ âm tốt, giúp tiêu âm và chống vang vọng.',
    textbookRef: 'SGK KHTN 7 - Trang 69'
  },
  {
    id: 'q-b14-vd-1',
    lessonId: 'bai-14',
    lessonTitle: 'Bài 14: Phản xạ âm, chống ô nhiễm tiếng ồn',
    chapterId: 'ch-4',
    chapterName: 'Chương IV: Âm thanh & Tiếng vang',
    level: 'van_dung',
    question: 'Âm phản xạ nghe được tách biệt thành tiếng vang khi khoảng thời gian giữa âm phản xạ truyền tới tai chậm hơn âm trực tiếp tối thiểu là bao nhiêu giây?',
    options: ['1/60 giây', '1/30 giây', '1/15 giây', '1/2 giây'],
    correctIndex: 2,
    explanation: 'Khi âm phản xạ truyền đến tai ta chậm hơn âm trực tiếp một khoảng thời gian lớn hơn 1/15 giây thì âm phản xạ được gọi là tiếng vang.',
    textbookRef: 'SGK KHTN 7 - Trang 68'
  },

  // ===================== CHƯƠNG V: ÁNH SÁNG =====================
  {
    id: 'q-b15-nb-1',
    lessonId: 'bai-15',
    lessonTitle: 'Bài 15: Năng lượng ánh sáng. Tia sáng, vùng tối',
    chapterId: 'ch-5',
    chapterName: 'Chương V: Ánh sáng & Phản xạ',
    level: 'nhan_biet',
    question: 'Trong môi trường trong suốt và đồng tính, ánh sáng truyền đi theo đường nào?',
    options: ['Đường cong parabol', 'Đường gấp khúc', 'Đường thẳng', 'Đường xoắn ốc'],
    correctIndex: 2,
    explanation: 'Định luật truyền thẳng ánh sáng: Trong môi trường trong suốt và đồng tính, ánh sáng truyền theo đường thẳng.',
    textbookRef: 'SGK KHTN 7 - Trang 74'
  },
  {
    id: 'q-b15-th-1',
    lessonId: 'bai-15',
    lessonTitle: 'Bài 15: Năng lượng ánh sáng. Tia sáng, vùng tối',
    chapterId: 'ch-5',
    chapterName: 'Chương V: Ánh sáng & Phản xạ',
    level: 'thong_hieu',
    question: 'Hiện tượng nhật thực xảy ra khi vị trí của Mặt Trời, Mặt Trăng và Trái Đất sắp xếp như thế nào trên cùng một đường thẳng?',
    options: [
      'Trái Đất nằm giữa Mặt Trời và Mặt Trăng',
      'Mặt Trăng nằm giữa Mặt Trời và Trái Đất',
      'Mặt Trời nằm giữa Mặt Trăng và Trái Đất',
      'Ba thiên thể tạo thành một tam giác vuông'
    ],
    correctIndex: 1,
    explanation: 'Nhật thực xảy ra khi Mặt Trăng đi vào giữa Mặt Trời và Trái Đất, che khuất một phần hoặc toàn bộ ánh sáng Mặt Trời chiếu xuống Trái Đất.',
    textbookRef: 'SGK KHTN 7 - Trang 77'
  },
  {
    id: 'q-b16-nb-1',
    lessonId: 'bai-16',
    lessonTitle: 'Bài 16: Sự phản xạ ánh sáng',
    chapterId: 'ch-5',
    chapterName: 'Chương V: Ánh sáng & Phản xạ',
    level: 'nhan_biet',
    question: 'Theo Định luật phản xạ ánh sáng, mối quan hệ giữa góc phản xạ (i\') và góc tới (i) là gì?',
    options: ['i\' > i', 'i\' < i', 'i\' = i', 'i\' + i = 90°'],
    correctIndex: 2,
    explanation: 'Nội dung định luật phản xạ ánh sáng: Tia phản xạ nằm trong mặt phẳng tới và góc phản xạ luôn bằng góc tới (i\' = i).',
    textbookRef: 'SGK KHTN 7 - Trang 79'
  },
  {
    id: 'q-b16-vd-1',
    lessonId: 'bai-16',
    lessonTitle: 'Bài 16: Sự phản xạ ánh sáng',
    chapterId: 'ch-5',
    chapterName: 'Chương V: Ánh sáng & Phản xạ',
    level: 'van_dung',
    question: 'Chiếu một tia sáng tới gương phẳng sao cho tia sáng hợp với mặt gương một góc 30°. Góc phản xạ i\' bằng bao nhiêu?',
    options: ['30°', '60°', '90°', '120°'],
    correctIndex: 1,
    explanation: 'Pháp tuyến vuông góc với mặt gương (90°). Tia tới hợp với mặt gương 30° => Góc tới i = 90° - 30° = 60°. Do đó góc phản xạ i\' = i = 60°.',
    textbookRef: 'SGK KHTN 7 - Trang 79'
  },
  {
    id: 'q-b17-th-1',
    lessonId: 'bai-17',
    lessonTitle: 'Bài 17: Ảnh của vật qua gương phẳng',
    chapterId: 'ch-5',
    chapterName: 'Chương V: Ánh sáng & Phản xạ',
    level: 'thong_hieu',
    question: 'Tại sao chữ "AMBULANCE" ở đầu xe cứu thương lại được in ngược từ phải sang trái (ƎƆИA⅃UBMA)?',
    options: [
      'Để người đi bộ đối diện nhìn thấy độc đáo và chú ý hơn',
      'Để người lái xe phía trước nhìn qua gương chiếu hậu phẳng sẽ thấy chữ xuôi chiều đọc được bình thường',
      'Do quy chuẩn quốc tế in lỗi',
      'Nhằm phản xạ ánh sáng đèn xe ban đêm tốt hơn'
    ],
    correctIndex: 1,
    explanation: 'Ảnh tạo bởi gương phẳng có tính đối xứng trục (ngược chiều trái – phải). Khi in ngược trên mũi xe, tài xế phía trước nhìn vào gương chiếu hậu sẽ thấy hình ảnh đối xứng xuôi "AMBULANCE" để chủ động nhường đường.',
    textbookRef: 'SGK KHTN 7 - Trang 82'
  },
  {
    id: 'q-b17-vd-1',
    lessonId: 'bai-17',
    lessonTitle: 'Bài 17: Ảnh của vật qua gương phẳng',
    chapterId: 'ch-5',
    chapterName: 'Chương V: Ánh sáng & Phản xạ',
    level: 'van_dung',
    question: 'Bạn An đứng cách gương phẳng 1,5 m. Khoảng cách giữa bạn An và ảnh của bạn qua gương là bao nhiêu?',
    options: ['1,5 m', '2,0 m', '3,0 m', '4,5 m'],
    correctIndex: 2,
    explanation: 'Khoảng cách từ ảnh đến gương phẳng bằng khoảng cách từ vật đến gương (d\' = d = 1,5 m). Do đó khoảng cách từ An đến ảnh của An là d + d\' = 1,5 + 1,5 = 3,0 m.',
    textbookRef: 'SGK KHTN 7 - Trang 83'
  },

  // ===================== CHƯƠNG VI: TỪ =====================
  {
    id: 'q-b18-nb-1',
    lessonId: 'bai-18',
    lessonTitle: 'Bài 18: Nam châm',
    chapterId: 'ch-6',
    chapterName: 'Chương VI: Từ & Nam châm điện',
    level: 'nhan_biet',
    question: 'Khi để tự do cân bằng trên trục nhọn, kim nam châm luôn định hướng theo phương nào?',
    options: ['Đông – Tây', 'Bắc – Nam', 'Đông Bắc – Tây Nam', 'Tây Bắc – Đông Nam'],
    correctIndex: 1,
    explanation: 'Dưới tác dụng của từ trường Trái Đất, kim nam châm tự do luôn định hướng theo phương Bắc – Nam.',
    textbookRef: 'SGK KHTN 7 - Trang 87, 89'
  },
  {
    id: 'q-b18-th-1',
    lessonId: 'bai-18',
    lessonTitle: 'Bài 18: Nam châm',
    chapterId: 'ch-6',
    chapterName: 'Chương VI: Từ & Nam châm điện',
    level: 'thong_hieu',
    question: 'Vật liệu nào sau đây là vật liệu từ (bị nam châm hút)?',
    options: ['Đồng (copper)', 'Nhôm (aluminium)', 'Sắt (iron) và thép', 'Gỗ khô và thủy tinh'],
    correctIndex: 2,
    explanation: 'Nam châm hút các vật liệu từ như sắt, thép, niken, coban. Các kim loại như nhôm, đồng không phải là vật liệu từ.',
    textbookRef: 'SGK KHTN 7 - Trang 87'
  },
  {
    id: 'q-b19-th-1',
    lessonId: 'bai-19',
    lessonTitle: 'Bài 19: Từ trường',
    chapterId: 'ch-6',
    chapterName: 'Chương VI: Từ & Nam châm điện',
    level: 'thong_hieu',
    question: 'Quy ước về chiều của đường sức từ ở bên ngoài thanh nam châm là gì?',
    options: [
      'Đi vào cực Bắc (N), đi ra từ cực Nam (S)',
      'Đi ra từ cực Bắc (N), đi vào cực Nam (S)',
      'Luôn hướng từ tâm thanh nam châm ra xa vô cực',
      'Đồng tâm xoay tròn ngược chiều kim đồng hồ'
    ],
    correctIndex: 1,
    explanation: 'Quy ước chiều đường sức từ bên ngoài nam châm: "Vào Nam ra Bắc" (Đi ra từ cực Bắc N và đi vào cực Nam S).',
    textbookRef: 'SGK KHTN 7 - Trang 92'
  },
  {
    id: 'q-b20-vd-1',
    lessonId: 'bai-20',
    lessonTitle: 'Bài 20: Chế tạo nam châm điện đơn giản',
    chapterId: 'ch-6',
    chapterName: 'Chương VI: Từ & Nam châm điện',
    level: 'van_dung',
    question: 'Để tăng lực từ của một nam châm điện dùng hút sắt thép phế liệu trong công nghiệp, người ta có thể áp dụng biện pháp nào sau đây?',
    options: [
      'Tăng cường độ dòng điện chạy qua ống dây và tăng số vòng dây quấn',
      'Giảm số vòng dây quấn và giảm hiệu điện thế nguồn cấp',
      'Rút bỏ lõi sắt non bên trong ống dây',
      'Thay lõi sắt non bằng lõi nhựa cách điện'
    ],
    correctIndex: 0,
    explanation: 'Lực từ của nam châm điện phụ thuộc vào cường độ dòng điện (dòng càng lớn lực từ càng mạnh) và số vòng cuộn dây (càng nhiều vòng lực từ càng mạnh) cùng vai trò khuếch đại của lõi sắt non.',
    textbookRef: 'SGK KHTN 7 - Trang 96, 97'
  },

  // ===================== CHƯƠNG VII: TRAO ĐỔI CHẤT & CHUYỂN HOÁ NĂNG LƯỢNG =====================
  {
    id: 'q-b21-nb-1',
    lessonId: 'bai-21',
    lessonTitle: 'Bài 21: Khái quát về trao đổi chất và chuyển hoá năng lượng',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'nhan_biet',
    question: 'Trao đổi chất ở sinh vật là quá trình:',
    options: [
      'Cơ thể lấy các chất từ môi trường, biến đổi chúng thành các chất cần thiết cho cơ thể và trả lại môi trường các chất thải',
      'Cơ thể chỉ sinh sản ra cá thể mới',
      'Chỉ xảy ra khi sinh vật đang ngủ',
      'Chuyển động từ nơi này sang nơi khác'
    ],
    correctIndex: 0,
    explanation: 'Trao đổi chất là quá trình cơ thể lấy các chất dinh dưỡng, nước, khí từ môi trường, biến đổi phục vụ hoạt động sống và đào thải chất cặn bã ra ngoài.',
    textbookRef: 'SGK KHTN 7 - Trang 99'
  },
  {
    id: 'q-b22-nb-1',
    lessonId: 'bai-22',
    lessonTitle: 'Bài 22: Quang hợp ở thực vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'nhan_biet',
    question: 'Phương trình tổng quát của quá trình quang hợp ở thực vật là gì?',
    options: [
      'Nước + Oxygen -> Glucose + Carbon dioxide',
      'Nước + Carbon dioxide --(Ánh sáng, Diệp lục)--> Glucose + Oxygen',
      'Glucose + Oxygen -> Nước + Carbon dioxide + Năng lượng (ATP)',
      'Nước + Muối khoáng -> Tinh bột + Nitrogen'
    ],
    correctIndex: 1,
    explanation: 'Phương trình chữ quang hợp: Nước + Carbon dioxide --(Ánh sáng, Diệp lục)--> Glucose + Oxygen.',
    textbookRef: 'SGK KHTN 7 - Trang 101'
  },
  {
    id: 'q-b22-th-1',
    lessonId: 'bai-22',
    lessonTitle: 'Bài 22: Quang hợp ở thực vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'thong_hieu',
    question: 'Trong quá trình quang hợp ở lá cây, dạng năng lượng nào đã được chuyển hoá thành hoá năng dự trữ trong các hợp chất hữu cơ?',
    options: ['Nhiệt năng', 'Quang năng (năng lượng ánh sáng)', 'Cơ năng', 'Điện năng'],
    correctIndex: 1,
    explanation: 'Diệp lục hấp thụ quang năng từ ánh sáng mặt trời và chuyển hoá thành hoá năng tích luỹ trong liên kết hoá học của phân tử glucose và tinh bột.',
    textbookRef: 'SGK KHTN 7 - Trang 102'
  },
  {
    id: 'q-b23-vd-1',
    lessonId: 'bai-23',
    lessonTitle: 'Bài 23: Một số yếu tố ảnh hưởng đến quang hợp',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'van_dung',
    question: 'Tại sao vào ban ngày người ta trồng cây dưới tán cây lớn khác (như cây trầu bà, lá lốt) mà chúng vẫn sinh trưởng tốt?',
    options: [
      'Vì chúng là cây ưa bóng, có nhu cầu ánh sáng yếu, phiến lá mỏng và hàm lượng diệp lục cao thích nghi nhận ánh sáng tán xạ',
      'Vì cây trầu bà không cần quang hợp để sống',
      'Vì cây tán lớn truyền chất hữu cơ trực tiếp qua rễ cho cây con',
      'Vì đất dưới gốc cây lớn có nhiệt độ trên 50°C thích hợp'
    ],
    correctIndex: 0,
    explanation: 'Lá lốt, trầu bà là nhóm cây ưa bóng, có khả năng quang hợp tối ưu ở cường độ ánh sáng thấp dưới tán cây khác.',
    textbookRef: 'SGK KHTN 7 - Trang 104'
  },
  {
    id: 'q-b24-vd-1',
    lessonId: 'bai-24',
    lessonTitle: 'Bài 24: Thực hành: Chứng minh quang hợp ở cây xanh',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'van_dung',
    question: 'Trong thí nghiệm chứng minh lá quang hợp tạo tinh bột, tại sao cần đun sôi cách thuỷ chiếc lá trong cồn 90° trước khi nhỏ dung dịch iodine?',
    options: [
      'Để làm chín mềm tế bào lá',
      'Để tẩy hết sắc tố diệp lục màu xanh ra khỏi lá, giúp dễ dàng quan sát sự đổi màu xanh tím với iodine',
      'Để tiêu diệt vi khuẩn bám trên phiến lá',
      'Để hoà tan hết lượng tinh bột vừa tạo ra'
    ],
    correctIndex: 1,
    explanation: 'Cồn đun cách thuỷ hòa tan chất diệp lục làm lá mất màu xanh (chuyển sang trắng ngà), nhờ đó khi nhỏ dung dịch thử iodine sẽ nhận biết rõ vùng lá tích tụ tinh bột chuyển màu xanh tím.',
    textbookRef: 'SGK KHTN 7 - Trang 109, 110'
  },
  {
    id: 'q-b25-nb-1',
    lessonId: 'bai-25',
    lessonTitle: 'Bài 25: Hô hấp tế bào',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'nhan_biet',
    question: 'Bào quan nào trong tế bào nhân thực là nơi diễn ra chủ yếu của quá trình hô hấp tế bào?',
    options: ['Lục lạp', 'Ti thể', 'Không bào', 'Màng sinh chất'],
    correctIndex: 1,
    explanation: 'Ti thể được ví là "nhà máy năng lượng" của tế bào, nơi phân giải glucose với sự có mặt của oxy để giải phóng năng lượng ATP.',
    textbookRef: 'SGK KHTN 7 - Trang 111'
  },
  {
    id: 'q-b26-vd-1',
    lessonId: 'bai-26',
    lessonTitle: 'Bài 26: Một số yếu tố ảnh hưởng đến hô hấp tế bào',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'van_dung',
    question: 'Trước khi cho lúa, ngô vào kho bảo quản lâu dài, biện pháp bắt buộc người nông dân phải thực hiện là gì và vì sao?',
    options: [
      'Tưới thêm nước để hạt luôn căng bóng',
      'Phơi khô hoặc sấy khô hạt về độ ẩm an toàn (13% - 16%) để giảm cường độ hô hấp tế bào xuống mức tối thiểu, tránh hao hụt và mốc hạt',
      'Ủ hạt trong túi kín ở nhiệt độ 40°C để hạt nhanh chín',
      'Ngâm nước ấm để kích thích hạt nảy mầm sớm'
    ],
    correctIndex: 1,
    explanation: 'Hàm lượng nước cao làm tăng mạnh hô hấp tế bào, tiêu hao chất dinh dưỡng và toả nhiệt gây nảy mầm, thối hỏng. Phơi khô làm giảm độ ẩm giúp bảo quản lâu năm.',
    textbookRef: 'SGK KHTN 7 - Trang 114'
  },
  {
    id: 'q-b28-th-1',
    lessonId: 'bai-28',
    lessonTitle: 'Bài 28: Trao đổi khí ở sinh vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'thong_hieu',
    question: 'Ở thực vật, sự trao đổi khí giữa tế bào lá và môi trường bên ngoài diễn ra chủ yếu qua cấu trúc nào?',
    options: ['Lỗ vỏ trên cành', 'Khí khổng ở biểu bì lá', 'Mạch rây', 'Gân lá'],
    correctIndex: 1,
    explanation: 'Khí khổng nằm ở lớp biểu bì lá có hai tế bào hình hạt đậu đóng mở, kiểm soát luồng khí CO2 và O2 cũng như thoát hơi nước.',
    textbookRef: 'SGK KHTN 7 - Trang 119'
  },
  {
    id: 'q-b30-th-1',
    lessonId: 'bai-30',
    lessonTitle: 'Bài 30: Trao đổi nước và chất dinh dưỡng ở thực vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'thong_hieu',
    question: 'Trong thân cây, mạch gỗ (xylem) có vai trò vận chuyển những chất nào?',
    options: [
      'Chất hữu cơ do lá quang hợp tổng hợp đi xuống rễ',
      'Nước và muối khoáng hòa tan được rễ hấp thụ vận chuyển ngược lên thân và lá',
      'Khí carbon dioxide từ rễ lên chồi non',
      'Hormone sinh trưởng từ ngọn đi nuôi hoa quả'
    ],
    correctIndex: 1,
    explanation: 'Mạch gỗ đảm nhận dòng đi lên (vận chuyển nước và chất khoáng từ rễ lên thân, lá). Còn mạch rây đảm nhận dòng đi xuống (vận chuyển chất hữu cơ từ lá đến nơi sử dụng/dự trữ).',
    textbookRef: 'SGK KHTN 7 - Trang 127, 128'
  },
  {
    id: 'q-b31-th-1',
    lessonId: 'bai-31',
    lessonTitle: 'Bài 31: Trao đổi nước và chất dinh dưỡng ở động vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'thong_hieu',
    question: 'Trong hệ tuần hoàn kép ở người, máu giàu O2 (màu đỏ tươi) được tim bơm đi nuôi cơ thể qua vòng tuần hoàn nào?',
    options: [
      'Vòng tuần hoàn nhỏ (tuần hoàn phổi)',
      'Vòng tuần hoàn lớn (tuần hoàn cơ thể)',
      'Hệ mạch bạch huyết',
      'Ống tiêu hóa'
    ],
    correctIndex: 1,
    explanation: 'Vòng tuần hoàn lớn xuất phát từ tâm thất trái, đưa máu giàu O2 đi khắp các mô và cơ quan của cơ thể rồi nhận CO2 trở về tâm nhĩ phải.',
    textbookRef: 'SGK KHTN 7 - Trang 133'
  },

  // ===================== CHƯƠNG VIII: CẢM ỨNG Ở SINH VẬT =====================
  {
    id: 'q-b33-nb-1',
    lessonId: 'bai-33',
    lessonTitle: 'Bài 33: Cảm ứng ở sinh vật và tập tính ở động vật',
    chapterId: 'ch-8',
    chapterName: 'Chương VIII: Cảm ứng ở sinh vật',
    level: 'nhan_biet',
    question: 'Hiện tượng lá cây trinh nữ (cây xấu hổ) cụp lại khi bị chạm vào là ví dụ điển hình của hiện tượng nào?',
    options: ['Sinh sản', 'Cảm ứng ở thực vật', 'Quang hợp', 'Thoát hơi nước'],
    correctIndex: 1,
    explanation: 'Cảm ứng là phản ứng của sinh vật trước các kích thích từ môi trường nhằm thích nghi và tồn tại.',
    textbookRef: 'SGK KHTN 7 - Trang 138'
  },
  {
    id: 'q-b33-th-1',
    lessonId: 'bai-33',
    lessonTitle: 'Bài 33: Cảm ứng ở sinh vật và tập tính ở động vật',
    chapterId: 'ch-8',
    chapterName: 'Chương VIII: Cảm ứng ở sinh vật',
    level: 'thong_hieu',
    question: 'Tập tính nào sau đây ở động vật là tập tính học được (hình thành qua kinh nghiệm và rèn luyện)?',
    options: [
      'Nhện chăng tơ bắt mồi',
      'Ve sầu kêu vào mùa hè',
      'Khỉ biết dùng que khều thức ăn và làm xiếc theo lệnh người',
      'Ếch đực kêu gọi ếch cái sau cơn mưa rào đầu mùa'
    ],
    correctIndex: 2,
    explanation: 'Tập tính học được là chuỗi phản ứng được hình thành trong đời sống cá thể thông qua học tập, kinh nghiệm và rút kinh nghiệm (như khỉ làm xiếc, chó nhận biết lệnh chủ).',
    textbookRef: 'SGK KHTN 7 - Trang 139, 140'
  },
  {
    id: 'q-b34-vd-1',
    lessonId: 'bai-34',
    lessonTitle: 'Bài 34: Vận dụng hiện tượng cảm ứng ở sinh vật vào thực tiễn',
    chapterId: 'ch-8',
    chapterName: 'Chương VIII: Cảm ứng ở sinh vật',
    level: 'van_dung',
    question: 'Vì sao khi trồng các loại cây thân leo như mướp, bầu, bí, hoa thiên lí, người làm vườn thường phải cắm cọc hoặc làm giàn?',
    options: [
      'Để dựa vào tính hướng tiếp xúc của tua cuốn giúp thân cây bám leo lên cao hứng được nhiều ánh sáng quang hợp',
      'Để ngăn chặn các loài sâu bọ từ đất bò lên',
      'Để giữ cho rễ cây không bị ngập úng',
      'Để kích thích rễ cây mọc cọc sâu vào lòng đất'
    ],
    correctIndex: 0,
    explanation: 'Cây thân leo có tính hướng tiếp xúc. Khi tua cuốn chạm vào giàn, các tế bào tiếp xúc sẽ kích thích tua cuộn chặt vào giàn, nâng cây vươn cao đón nắng.',
    textbookRef: 'SGK KHTN 7 - Trang 141'
  },

  // ===================== CHƯƠNG IX: SINH TRƯỞNG & PHÁT TRIỂN =====================
  {
    id: 'q-b36-nb-1',
    lessonId: 'bai-36',
    lessonTitle: 'Bài 36: Khái quát về sinh trưởng và phát triển ở sinh vật',
    chapterId: 'ch-9',
    chapterName: 'Chương IX: Sinh trưởng & Phát triển',
    level: 'nhan_biet',
    question: 'Mô phân sinh nào ở thực vật hai lá mầm có chức năng phân chia tế bào làm tăng đường kính (bề ngang) của thân cây?',
    options: ['Mô phân sinh đỉnh', 'Mô phân sinh lóng', 'Mô phân sinh bên', 'Mô dẫn'],
    correctIndex: 2,
    explanation: 'Mô phân sinh đỉnh giúp thân và rễ dài ra. Mô phân sinh bên (tầng sinh vỏ, tầng sinh trụ) giúp cây to ra về đường kính (chu vi thân).',
    textbookRef: 'SGK KHTN 7 - Trang 149, 150'
  },
  {
    id: 'q-b37-vd-1',
    lessonId: 'bai-37',
    lessonTitle: 'Bài 37: Ứng dụng sinh trưởng và phát triển ở sinh vật vào thực tiễn',
    chapterId: 'ch-9',
    chapterName: 'Chương IX: Sinh trưởng & Phát triển',
    level: 'van_dung',
    question: 'Tại sao việc tiêu diệt muỗi ở giai đoạn lăng quăng (bọ gậy) trong các vũng nước đọng lại mang lại hiệu quả cao nhất trong phòng dịch sốt xuất huyết?',
    options: [
      'Vì ở giai đoạn này muỗi đã có cánh và bay rất chậm',
      'Vì bọ gậy sống tập trung trong môi trường nước, chưa có cánh phát tán rộng nên dễ dàng tiêu diệt bằng cách thả cá hoặc đổ bỏ nước đọng',
      'Vì bọ gậy không cần thở không khí',
      'Vì giai đoạn bọ gậy muỗi truyền virus sốt xuất huyết mạnh nhất'
    ],
    correctIndex: 1,
    explanation: 'Cắt đứt vòng đời sinh trưởng của muỗi ở giai đoạn ấu trùng sống tập trung trong nước là biện pháp triệt để, dễ thực hiện và ít tốn kém nhất so với phun thuốc diệt muỗi trưởng thành.',
    textbookRef: 'SGK KHTN 7 - Trang 154, 155'
  },

  // ===================== CHƯƠNG X: SINH SẢN Ở SINH VẬT =====================
  {
    id: 'q-b39-nb-1',
    lessonId: 'bai-39',
    lessonTitle: 'Bài 39: Sinh sản vô tính ở sinh vật',
    chapterId: 'ch-10',
    chapterName: 'Chương X: Sinh sản ở sinh vật',
    level: 'nhan_biet',
    question: 'Đặc điểm then chốt nhất của sinh sản vô tính là gì?',
    options: [
      'Luôn có sự kết hợp giữa giao tử đực và giao tử cái',
      'Không có sự kết hợp của giao tử đực và giao tử cái, cơ thể con được tạo thành từ một phần của cơ thể mẹ',
      'Tạo ra thế hệ con có nhiều biến dị tổ hợp mới lạ',
      'Chỉ diễn ra ở các loài động vật bậc cao'
    ],
    correctIndex: 1,
    explanation: 'Sinh sản vô tính không qua thụ tinh; cá thể con mang đặc điểm di truyền giống hệt cơ thể mẹ ban đầu.',
    textbookRef: 'SGK KHTN 7 - Trang 158'
  },
  {
    id: 'q-b39-th-1',
    lessonId: 'bai-39',
    lessonTitle: 'Bài 39: Sinh sản vô tính ở sinh vật',
    chapterId: 'ch-10',
    chapterName: 'Chương X: Sinh sản ở sinh vật',
    level: 'thong_hieu',
    question: 'Cây dâu tây sinh sản sinh dưỡng tự nhiên chủ yếu bằng bộ phận nào sau đây?',
    options: ['Lá mọc mầm', 'Rễ củ', 'Thân bò', 'Thân rễ (củ)'],
    correctIndex: 2,
    explanation: 'Cây dâu tây sinh sản sinh dưỡng bằng thân bò; từ các mấu của thân bò mọc ra rễ và chồi để hình thành cây con mới.',
    textbookRef: 'SGK KHTN 7 - Trang 159'
  },
  {
    id: 'q-b40-nb-1',
    lessonId: 'bai-40',
    lessonTitle: 'Bài 40: Sinh sản hữu tính ở sinh vật',
    chapterId: 'ch-10',
    chapterName: 'Chương X: Sinh sản ở sinh vật',
    level: 'nhan_biet',
    question: 'Các bộ phận sinh sản chủ yếu của một bông hoa lưỡng tính gồm có:',
    options: [
      'Đài hoa và cánh hoa (tràng hoa)',
      'Nhị hoa (sinh hạt phấn) và nhụy hoa (chứa noãn)',
      'Cuống hoa và đế hoa',
      'Tuyến mật và cánh hoa sặc sỡ'
    ],
    correctIndex: 1,
    explanation: 'Nhị hoa (cơ quan sinh sản đực mang hạt phấn) và nhuỵ hoa (cơ quan sinh sản cái chứa noãn) là hai bộ phận sinh sản quan trọng nhất.',
    textbookRef: 'SGK KHTN 7 - Trang 164, 165'
  },
  {
    id: 'q-b40-th-1',
    lessonId: 'bai-40',
    lessonTitle: 'Bài 40: Sinh sản hữu tính ở sinh vật',
    chapterId: 'ch-10',
    chapterName: 'Chương X: Sinh sản ở sinh vật',
    level: 'thong_hieu',
    question: 'Ở thực vật có hoa, quả và hạt lần lượt được phát triển biến đổi từ bộ phận nào của hoa sau thụ tinh?',
    options: [
      'Quả do noãn phát triển thành, hạt do bầu nhuỵ phát triển thành',
      'Quả do bầu nhuỵ phát triển thành, hạt do noãn đã thụ tinh phát triển thành',
      'Quả do cánh hoa biến đổi thành, hạt do hạt phấn biến đổi thành',
      'Cả quả và hạt đều hình thành trực tiếp từ nhị hoa'
    ],
    correctIndex: 1,
    explanation: 'Sau thụ tinh, hợp tử trong noãn phát triển thành phôi nằm trong hạt; bầu nhuỵ sinh trưởng dày lên tạo thành quả chứa hạt.',
    textbookRef: 'SGK KHTN 7 - Trang 166'
  },
  {
    id: 'q-b41-vd-1',
    lessonId: 'bai-41',
    lessonTitle: 'Bài 41: Một số yếu tố ảnh hưởng và điều hoà, điều khiển sinh sản ở sinh vật',
    chapterId: 'ch-10',
    chapterName: 'Chương X: Sinh sản ở sinh vật',
    level: 'van_dung',
    question: 'Người nông dân trồng thanh long thường thắp đèn sợi đốt hoặc đèn LED vào ban đêm trong mùa đông nhằm mục đích gì?',
    options: [
      'Để sưởi ấm rễ cây thanh long không bị chết cóng',
      'Kéo dài thời gian chiếu sáng mô phỏng ngày dài của mùa hè, kích thích cây phân hoá mầm hoa ra quả trái vụ',
      'Để xua đuổi các loài dơi và côn trùng ăn quả',
      'Để tăng độ ngọt của quả thanh long đã chín'
    ],
    correctIndex: 1,
    explanation: 'Thanh long là cây ngày dài (chỉ ra hoa khi có thời gian chiếu sáng trong ngày đủ dài). Mùa đông ngày ngắn, thắp đèn đêm giúp cung cấp đủ thời gian sáng để kích thích ra hoa trái vụ mang lại hiệu quả kinh tế cao.',
    textbookRef: 'SGK KHTN 7 - Trang 170'
  },
  {
    id: 'q-b42-th-1',
    lessonId: 'bai-42',
    lessonTitle: 'Bài 42: Cơ thể sinh vật là một thể thống nhất',
    chapterId: 'ch-10',
    chapterName: 'Chương X: Sinh sản ở sinh vật',
    level: 'thong_hieu',
    question: 'Tại sao nói cơ thể sinh vật là một thể thống nhất toàn vẹn?',
    options: [
      'Vì mọi hoạt động sống (trao đổi chất, sinh trưởng, cảm ứng, sinh sản) có mối quan hệ qua lại khăng khít, sự trục trặc của một quá trình sẽ ảnh hưởng đến các quá trình khác và toàn cơ thể',
      'Vì cơ thể sinh vật chỉ có một tế bào duy nhất hoạt động',
      'Vì cơ thể hoàn toàn độc lập và không chịu bất kì tác động nào từ môi trường',
      'Vì tất cả các tế bào trong cơ thể đều có hình dạng và chức năng giống nhau'
    ],
    correctIndex: 0,
    explanation: 'Tế bào là đơn vị cấu trúc và chức năng; các hệ cơ quan phối hợp nhịp nhàng, trao đổi chất cung cấp vật chất & năng lượng cho sinh trưởng, cảm ứng và sinh sản.',
    textbookRef: 'SGK KHTN 7 - Trang 173, 174'
  }
];

export const QUESTION_BANK: Question[] = [...BASE_QUESTIONS, ...EXTENDED_QUESTIONS];

export function generateQuizQuestions(
  lessonId: string,
  targetLevel: 'nhan_biet' | 'thong_hieu' | 'van_dung' | 'tong_hop',
  count: number
): Question[] {
  let pool = [...QUESTION_BANK];

  // Filter by lesson or chapter if specified
  if (lessonId !== 'all') {
    if (lessonId.startsWith('ch-')) {
      pool = pool.filter(q => q.chapterId === lessonId);
    } else {
      const directMatches = pool.filter(q => q.lessonId === lessonId);
      if (directMatches.length > 0) {
        // Find the chapter of this lesson
        const targetQ = directMatches[0];
        const chapterFallback = pool.filter(q => q.chapterId === targetQ.chapterId);
        pool = [...directMatches, ...chapterFallback.filter(q => q.lessonId !== lessonId)];
      }
    }
  }

  // Fallback to all if pool is too small
  if (pool.length < count) {
    const remaining = QUESTION_BANK.filter(q => !pool.some(p => p.id === q.id));
    pool = [...pool, ...remaining];
  }

  let selected: Question[] = [];

  if (targetLevel === 'tong_hop') {
    // Distribute roughly 40% Nhận biết, 30% Thông hiểu, 30% Vận dụng
    const nbCount = Math.max(1, Math.round(count * 0.4));
    const thCount = Math.max(1, Math.round(count * 0.3));
    const vdCount = Math.max(1, count - nbCount - thCount);

    const nbList = pool.filter(q => q.level === 'nhan_biet');
    const thList = pool.filter(q => q.level === 'thong_hieu');
    const vdList = pool.filter(q => q.level === 'van_dung');

    const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

    const pickedNb = shuffle(nbList).slice(0, nbCount);
    const pickedTh = shuffle(thList).slice(0, thCount);
    const pickedVd = shuffle(vdList).slice(0, vdCount);

    selected = [...pickedNb, ...pickedTh, ...pickedVd];

    // If still less than count, fill from remaining pool
    if (selected.length < count) {
      const rest = pool.filter(q => !selected.some(s => s.id === q.id));
      selected = [...selected, ...shuffle(rest).slice(0, count - selected.length)];
    }
  } else {
    // Filter specifically for this cognitive level
    const levelMatches = pool.filter(q => q.level === targetLevel);
    const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

    if (levelMatches.length >= count) {
      selected = shuffle(levelMatches).slice(0, count);
    } else {
      // Pick all level matches, fill remainder with other levels
      const otherMatches = pool.filter(q => q.level !== targetLevel);
      selected = [...shuffle(levelMatches), ...shuffle(otherMatches).slice(0, count - levelMatches.length)];
    }
  }

  // Final shuffle of questions order
  return selected.sort(() => Math.random() - 0.5).slice(0, Math.min(count, 30));
}
