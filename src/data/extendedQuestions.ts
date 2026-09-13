import { Question } from '../types';

export const EXTENDED_QUESTIONS: Question[] = [
  // ===================== CHƯƠNG II: BỔ SUNG =====================
  {
    id: 'q-b6-nb-2',
    lessonId: 'bai-6',
    lessonTitle: 'Bài 6: Giới thiệu về liên kết hoá học',
    chapterId: 'ch-2',
    chapterName: 'Chương II: Phân tử & Liên kết hoá học',
    level: 'nhan_biet',
    question: 'Liên kết cộng hoá trị là liên kết hoá học được hình thành do đâu?',
    options: [
      'Lực hút tĩnh điện giữa các ion mang điện tích trái dấu',
      'Một hoặc nhiều đôi electron dùng chung giữa hai nguyên tử',
      'Sự trao đổi neutron giữa các hạt nhân nguyên tử',
      'Lực hấp dẫn giữa các phân tử gần nhau'
    ],
    correctIndex: 1,
    explanation: 'Liên kết cộng hoá trị là liên kết được hình thành bởi một hoặc nhiều đôi electron dùng chung giữa các nguyên tử (thường giữa các phi kim với nhau).',
    textbookRef: 'SGK KHTN 7 - Trang 37'
  },
  {
    id: 'q-b6-vd-1',
    lessonId: 'bai-6',
    lessonTitle: 'Bài 6: Giới thiệu về liên kết hoá học',
    chapterId: 'ch-2',
    chapterName: 'Chương II: Phân tử & Liên kết hoá học',
    level: 'van_dung',
    question: 'Hợp chất muối ăn (Sodium chloride - NaCl) tan tốt trong nước và dung dịch dẫn được điện vì bản chất liên kết trong phân tử NaCl là gì?',
    options: [
      'Liên kết kim loại bền vững',
      'Liên kết ion giữa ion Na+ và ion Cl-',
      'Liên kết cộng hoá trị không phân cực',
      'Liên kết hydrogen yếu'
    ],
    correctIndex: 1,
    explanation: 'NaCl là hợp chất ion được tạo bởi lực hút tĩnh điện giữa cation Na+ và anion Cl-. Khi tan vào nước, chúng phân li thành các ion tự do chuyển động giúp dung dịch dẫn điện.',
    textbookRef: 'SGK KHTN 7 - Trang 38, 39'
  },
  {
    id: 'q-b7-vd-2',
    lessonId: 'bai-7',
    lessonTitle: 'Bài 7: Hoá trị và công thức hoá học',
    chapterId: 'ch-2',
    chapterName: 'Chương II: Phân tử & Liên kết hoá học',
    level: 'van_dung',
    question: 'Biết Fe có hoá trị III và nhóm (SO4) có hoá trị II. Công thức hoá học đúng của hợp chất sắt(III) sulfate là gì?',
    options: ['FeSO4', 'Fe2SO4', 'Fe2(SO4)3', 'Fe3(SO4)2'],
    correctIndex: 2,
    explanation: 'Theo quy tắc hoá trị: a * x = b * y => III * x = II * y => x/y = 2/3. Do đó công thức hoá học là Fe2(SO4)3.',
    textbookRef: 'SGK KHTN 7 - Trang 42'
  },

  // ===================== CHƯƠNG III: TỐC ĐỘ =====================
  {
    id: 'q-b9-nb-1',
    lessonId: 'bai-9',
    lessonTitle: 'Bài 9: Đo tốc độ',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    level: 'nhan_biet',
    question: 'Để đo tốc độ chuyển động của một vật chuyển động nhanh và tức thời, dụng cụ đo hiện đại nào thường được cảnh sát giao thông sử dụng?',
    options: [
      'Đồng hồ quả lắc',
      'Thiết bị bắn tốc độ (súng bắn tốc độ)',
      'Thước cuộn kết hợp đồng hồ bấm giây thủ công',
      'Cân điện tử phân tích'
    ],
    correctIndex: 1,
    explanation: 'Thiết bị bắn tốc độ dùng sóng vô tuyến hoặc laser để xác định trực tiếp tốc độ tức thời của phương tiện giao thông trên đường.',
    textbookRef: 'SGK KHTN 7 - Trang 51'
  },
  {
    id: 'q-b9-th-1',
    lessonId: 'bai-9',
    lessonTitle: 'Bài 9: Đo tốc độ',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    level: 'thong_hieu',
    question: 'Ưu điểm lớn nhất của việc sử dụng cổng quang điện nối với đồng hồ đo thời gian hiện số so với đồng hồ bấm giây thủ công là gì?',
    options: [
      'Giá thành rẻ hơn rất nhiều',
      'Loại bỏ sai số do thời gian phản xạ của người bấm, đo được thời gian cực ngắn chính xác',
      'Không cần nguồn điện hay pin khi hoạt động',
      'Đo được cả khối lượng của viên bi'
    ],
    correctIndex: 1,
    explanation: 'Cổng quang điện tự động kích hoạt đồng hồ chạy khi vật chắn tia sáng và ngắt khi vật đi qua cổng thứ hai, loại bỏ hoàn toàn sai số phản xạ của tay người.',
    textbookRef: 'SGK KHTN 7 - Trang 50'
  },
  {
    id: 'q-b10-vd-1',
    lessonId: 'bai-10',
    lessonTitle: 'Bài 10: Đồ thị quãng đường – thời gian',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    level: 'van_dung',
    question: 'Trên đồ thị quãng đường – thời gian (s - t), một đoạn đường nằm ngang song song với trục thời gian t mang ý nghĩa gì?',
    options: [
      'Vật đang chuyển động với tốc độ cực đại',
      'Vật đang đứng yên, quãng đường không đổi theo thời gian',
      'Vật đang quay đầu chuyển động ngược chiều',
      'Vật đang rơi tự do từ trên cao xuống'
    ],
    correctIndex: 1,
    explanation: 'Đoạn nằm ngang song song với trục t thể hiện quãng đường s không thay đổi khi thời gian t vẫn trôi qua, nghĩa là vật đang đứng yên (tốc độ v = 0).',
    textbookRef: 'SGK KHTN 7 - Trang 54'
  },
  {
    id: 'q-b11-nb-1',
    lessonId: 'bai-11',
    lessonTitle: 'Bài 11: Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    level: 'nhan_biet',
    question: 'Biển báo giao thông hình tròn, viền đỏ, nền trắng có ghi số "50" màu đen có ý nghĩa là gì?',
    options: [
      'Khoảng cách tối thiểu giữa 2 xe là 50 mét',
      'Tốc độ tối đa cho phép của các phương tiện là 50 km/h',
      'Tốc độ tối thiểu các phương tiện phải duy trì là 50 km/h',
      'Đoạn đường phía trước có chiều dài 50 km'
    ],
    correctIndex: 1,
    explanation: 'Biển báo P.127 viền đỏ nền trắng ghi số quy định tốc độ tối đa cho phép các xe cơ giới được chạy (50 km/h).',
    textbookRef: 'SGK KHTN 7 - Trang 57'
  },
  {
    id: 'q-b11-vd-1',
    lessonId: 'bai-11',
    lessonTitle: 'Bài 11: Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    level: 'van_dung',
    question: 'Quy tắc "3 giây" khi điều khiển ô tô trên đường cao tốc giúp tài xế làm gì?',
    options: [
      'Vượt đèn vàng trong vòng 3 giây',
      'Xác định khoảng cách an toàn tối thiểu với xe đi liền trước',
      'Chuyển làn đường cực nhanh không cần xi-nhan',
      'Đạp hết chân ga để tăng tốc tối đa'
    ],
    correctIndex: 1,
    explanation: 'Quy tắc 3 giây là khoảng thời gian đủ để người lái nhận biết tình huống bất ngờ, phản xạ đạp phanh và dừng xe an toàn tránh va chạm liên hoàn.',
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
    question: 'Âm thanh KHÔNG THỂ truyền được qua môi trường nào sau đây?',
    options: [
      'Chất rắn (như thanh kim loại, gỗ)',
      'Chất lỏng (như nước biển, nước ngọt)',
      'Chất khí (như không khí xung quanh)',
      'Môi trường chân không'
    ],
    correctIndex: 3,
    explanation: 'Sóng âm là sự lan truyền dao động của các phần tử vật chất. Chân không không có các phân tử hạt vật chất nên sóng âm không thể truyền qua.',
    textbookRef: 'SGK KHTN 7 - Trang 62'
  },
  {
    id: 'q-b13-nb-1',
    lessonId: 'bai-13',
    lessonTitle: 'Bài 13: Độ cao và độ to của âm',
    chapterId: 'ch-4',
    chapterName: 'Chương IV: Âm thanh & Tiếng vang',
    level: 'nhan_biet',
    question: 'Độ cao của âm (âm bổng hay âm trầm) do đại lượng nào quyết định?',
    options: [
      'Biên độ dao động của nguồn âm',
      'Tần số dao động của nguồn âm (đơn vị Hz)',
      'Khoảng cách từ nguồn âm đến tai người nghe',
      'Khối lượng của nguồn phát ra âm'
    ],
    correctIndex: 1,
    explanation: 'Dao động càng nhanh, tần số càng lớn thì âm phát ra càng bổng (càng cao). Dao động càng chậm, tần số càng nhỏ thì âm càng trầm.',
    textbookRef: 'SGK KHTN 7 - Trang 64'
  },
  {
    id: 'q-b13-vd-1',
    lessonId: 'bai-13',
    lessonTitle: 'Bài 13: Độ cao và độ to của âm',
    chapterId: 'ch-4',
    chapterName: 'Chương IV: Âm thanh & Tiếng vang',
    level: 'van_dung',
    question: 'Khi gảy một dây đàn guitar thật mạnh thì âm phát ra sẽ thay đổi như thế nào so với khi gảy nhẹ?',
    options: [
      'Âm phát ra bổng hơn rất nhiều',
      'Âm phát ra to hơn vì biên độ dao động của dây đàn lớn hơn',
      'Tần số dao động của dây đàn tăng vọt',
      'Âm phát ra trầm hơn đáng kể'
    ],
    correctIndex: 1,
    explanation: 'Gảy mạnh truyền nhiều năng lượng làm dây đàn dao động với biên độ lớn hơn => âm phát ra to hơn (độ to tỉ lệ với biên độ).',
    textbookRef: 'SGK KHTN 7 - Trang 66'
  },
  {
    id: 'q-b14-th-1',
    lessonId: 'bai-14',
    lessonTitle: 'Bài 14: Phản xạ âm, chống ô nhiễm tiếng ồn',
    chapterId: 'ch-4',
    chapterName: 'Chương IV: Âm thanh & Tiếng vang',
    level: 'thong_hieu',
    question: 'Vật liệu nào sau đây thường được ốp lên tường phòng thu âm hoặc rạp chiếu phim để giảm tiếng vang và cách âm?',
    options: [
      'Gạch men bóng và kính cường lực phẳng nhẵn',
      'Tấm mút xốp gồ ghề, nhung rèm dạ mềm có nhiều lỗ xốp',
      'Tấm tôn kim loại phẳng sáng bóng',
      'Gỗ ép mạ bóng kính'
    ],
    correctIndex: 1,
    explanation: 'Vật mềm, xốp, bề mặt gồ ghề là những vật phản xạ âm kém và hấp thụ âm tốt, giúp triệt tiêu tiếng vang và giảm ô nhiễm tiếng ồn.',
    textbookRef: 'SGK KHTN 7 - Trang 69'
  },

  // ===================== CHƯƠNG V: ÁNH SÁNG =====================
  {
    id: 'q-b15-nb-1',
    lessonId: 'bai-15',
    lessonTitle: 'Bài 15: Năng lượng ánh sáng. Tia sáng, vùng tối',
    chapterId: 'ch-5',
    chapterName: 'Chương V: Ánh sáng & Phản xạ',
    level: 'nhan_biet',
    question: 'Theo định luật truyền thẳng ánh sáng, trong môi trường trong suốt và đồng tính, ánh sáng truyền đi theo đường nào?',
    options: ['Đường cong parabol', 'Đường ziczac', 'Đường thẳng', 'Đường xoắn ốc'],
    correctIndex: 2,
    explanation: 'Trong môi trường trong suốt và đồng tính, ánh sáng truyền đi theo đường thẳng.',
    textbookRef: 'SGK KHTN 7 - Trang 74'
  },
  {
    id: 'q-b16-th-1',
    lessonId: 'bai-16',
    lessonTitle: 'Bài 16: Sự phản xạ ánh sáng',
    chapterId: 'ch-5',
    chapterName: 'Chương V: Ánh sáng & Phản xạ',
    level: 'thong_hieu',
    question: 'Nếu góc tới giữa tia sáng tới và pháp tuyến của gương phẳng là 35° thì góc phản xạ bằng bao nhiêu?',
    options: ['35°', '70°', '55°', '90°'],
    correctIndex: 0,
    explanation: 'Theo định luật phản xạ ánh sáng: Góc phản xạ r luôn bằng góc tới i (r = i = 35°).',
    textbookRef: 'SGK KHTN 7 - Trang 79'
  },
  {
    id: 'q-b17-nb-1',
    lessonId: 'bai-17',
    lessonTitle: 'Bài 17: Ảnh của vật qua gương phẳng',
    chapterId: 'ch-5',
    chapterName: 'Chương V: Ánh sáng & Phản xạ',
    level: 'nhan_biet',
    question: 'Tính chất nào sau đây là ĐÚNG đối với ảnh của một vật tạo bởi gương phẳng?',
    options: [
      'Là ảnh thật hứng được trên màn chắn',
      'Ảnh ảo không hứng được trên màn chắn, lớn hơn vật thật',
      'Ảnh ảo không hứng được trên màn chắn, có độ lớn bằng vật',
      'Là ảnh thật ngược chiều và nhỏ hơn vật'
    ],
    correctIndex: 2,
    explanation: 'Ảnh tạo bởi gương phẳng là ảnh ảo, không hứng được trên màn chắn, có kích thước bằng vật và đối xứng với vật qua mặt phẳng gương.',
    textbookRef: 'SGK KHTN 7 - Trang 83'
  },

  // ===================== CHƯƠNG VI: TỪ TRƯỜNG & NAM CHÂM =====================
  {
    id: 'q-b18-nb-1',
    lessonId: 'bai-18',
    lessonTitle: 'Bài 18: Nam châm',
    chapterId: 'ch-6',
    chapterName: 'Chương VI: Từ & Nam châm điện',
    level: 'nhan_biet',
    question: 'Nam châm vĩnh cửu có thể hút được các vật thể làm từ kim loại nào sau đây?',
    options: [
      'Đồng và nhôm nguyên chất',
      'Sắt, thép, niken và coban',
      'Vàng và bạc',
      'Chì và thiếc'
    ],
    correctIndex: 1,
    explanation: 'Nam châm hút các vật liệu từ như sắt (iron), niken, coban, thép... Đồng, nhôm, vàng không phải vật liệu từ nên không bị nam châm hút.',
    textbookRef: 'SGK KHTN 7 - Trang 87'
  },
  {
    id: 'q-b19-th-1',
    lessonId: 'bai-19',
    lessonTitle: 'Bài 19: Từ trường',
    chapterId: 'ch-6',
    chapterName: 'Chương VI: Từ & Nam châm điện',
    level: 'thong_hieu',
    question: 'Quy ước về chiều của đường sức từ bên ngoài thanh nam châm là gì?',
    options: [
      'Đi vào từ cực Bắc (N) và đi ra từ cực Nam (S)',
      'Đi ra từ cực Bắc (N) và đi vào cực Nam (S) ("Vào Nam - Ra Bắc")',
      'Đi vuông góc với chiều dài của thanh nam châm',
      'Không có quy ước chiều cụ thể'
    ],
    correctIndex: 1,
    explanation: 'Quy ước chiều đường sức từ: Bên ngoài nam châm, đường sức từ đi ra từ cực Bắc (North) và đi vào cực Nam (South).',
    textbookRef: 'SGK KHTN 7 - Trang 92'
  },
  {
    id: 'q-b20-vd-1',
    lessonId: 'bai-20',
    lessonTitle: 'Bài 20: Chế tạo nam châm điện đơn giản',
    chapterId: 'ch-6',
    chapterName: 'Chương VI: Từ & Nam châm điện',
    level: 'van_dung',
    question: 'Để tăng lực từ (khả năng hút sắt) của một nam châm điện tự chế, ta có thể áp dụng biện pháp nào sau đây?',
    options: [
      'Giảm bớt số vòng dây quấn quanh lõi sắt non',
      'Tăng cường độ dòng điện chạy qua cuộn dây và quấn thêm nhiều vòng dây',
      'Rút lõi sắt non ra khỏi lòng cuộn dây',
      'Đổi chiều nguồn pin liên tục'
    ],
    correctIndex: 1,
    explanation: 'Lực từ của nam châm điện tỉ lệ thuận với cường độ dòng điện và số vòng dây của cuộn dây quấn quanh lõi sắt non.',
    textbookRef: 'SGK KHTN 7 - Trang 97'
  },

  // ===================== CHƯƠNG VII: SINH HỌC CƠ THỂ =====================
  {
    id: 'q-b21-nb-1',
    lessonId: 'bai-21',
    lessonTitle: 'Bài 21: Khái quát về trao đổi chất và chuyển hoá năng lượng',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'nhan_biet',
    question: 'Trao đổi chất ở sinh vật là quá trình cơ thể lấy các chất từ môi trường ngoài và:',
    options: [
      'Giữ nguyên tất cả các chất mà không bài tiết',
      'Biến đổi chúng để cung cấp cho cơ thể, đồng thời thải các chất cặn bã ra ngoài môi trường',
      'Chỉ xảy ra vào ban đêm khi ngủ',
      'Chỉ tiêu hao năng lượng mà không tạo ra vật chất mới'
    ],
    correctIndex: 1,
    explanation: 'Trao đổi chất là quá trình sinh vật lấy thức ăn, nước, chất khí từ môi trường, chuyển hoá sử dụng cho cơ thể và đào thải sản phẩm bài tiết ra ngoài.',
    textbookRef: 'SGK KHTN 7 - Trang 99'
  },
  {
    id: 'q-b23-vd-1',
    lessonId: 'bai-23',
    lessonTitle: 'Bài 23: Một số yếu tố ảnh hưởng đến quang hợp',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'van_dung',
    question: 'Tại sao các loại cây trồng như ngô, mía, khoai lang thường được trồng ở nơi thoáng đãng nhiều ánh nắng, còn cây lá lốt, dương xỉ lại mọc xanh tốt dưới bóng râm?',
    options: [
      'Vì ngô, mía là cây ưa sáng còn lá lốt, dương xỉ là cây ưa bóng có nhu cầu ánh sáng khác nhau',
      'Vì rễ ngô hút nước kém hơn rễ cây lá lốt',
      'Vì lá lốt không cần khí carbon dioxide để quang hợp',
      'Vì ánh sáng ban ngày làm chết lá cây dương xỉ'
    ],
    correctIndex: 0,
    explanation: 'Mỗi loài cây thích nghi với cường độ ánh sáng khác nhau. Cây ưa sáng cần ánh sáng mạnh để quang hợp hiệu quả, trong khi cây ưa bóng quang hợp tốt ở cường độ sáng tán xạ yếu.',
    textbookRef: 'SGK KHTN 7 - Trang 105'
  },
  {
    id: 'q-b24-th-1',
    lessonId: 'bai-24',
    lessonTitle: 'Bài 24: Thực hành: Chứng minh quang hợp ở cây xanh',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'thong_hieu',
    question: 'Trong thí nghiệm chứng minh tinh bột được tạo thành qua quang hợp, tại sao phải đun cách thuỷ lá cây trong cồn 90° trước khi nhỏ dung dịch Iodine?',
    options: [
      'Để làm chín lá cây cho mềm',
      'Để tẩy sạch chất diệp lục màu xanh giúp dễ quan sát sự đổi màu xanh tím của tinh bột',
      'Để diệt vi khuẩn bám trên phiến lá',
      'Để hoà tan hết tinh bột trong lá'
    ],
    correctIndex: 1,
    explanation: 'Cồn đun cách thuỷ hoà tan và tẩy sạch diệp lục của lá. Khi nhỏ dung dịch Iodine, màu xanh tím đặc trưng phản ứng với tinh bột sẽ lộ rõ rõ rệt.',
    textbookRef: 'SGK KHTN 7 - Trang 108'
  },
  {
    id: 'q-b26-th-1',
    lessonId: 'bai-26',
    lessonTitle: 'Bài 26: Một số yếu tố ảnh hưởng đến hô hấp tế bào',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'thong_hieu',
    question: 'Tại sao người nông dân sau khi thu hoạch lúa, ngô, đỗ thường phải phơi thật khô trước khi cất trữ vào kho?',
    options: [
      'Để hạt tăng nhanh trọng lượng',
      'Giảm hàm lượng nước trong hạt xuống mức tối thiểu nhằm ức chế hô hấp tế bào, tránh nảy mầm và thối hỏng',
      'Để tiêu diệt hoàn toàn phôi sống bên trong hạt',
      'Làm cho vỏ hạt cứng hơn chống ánh sáng'
    ],
    correctIndex: 1,
    explanation: 'Nước là dung môi và tham gia trực tiếp vào hô hấp tế bào. Giảm độ ẩm hạt xuống < 13% sẽ làm chậm tối đa hô hấp, giữ được hạt giống và lương thực lâu dài.',
    textbookRef: 'SGK KHTN 7 - Trang 114'
  },
  {
    id: 'q-b27-nb-1',
    lessonId: 'bai-27',
    lessonTitle: 'Bài 27: Thực hành: Hô hấp ở thực vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'nhan_biet',
    question: 'Khi làm thí nghiệm chứng minh hạt nảy mầm hô hấp thải ra khí carbon dioxide (CO2), dung dịch chỉ thị nào thường được sử dụng để nhận biết?',
    options: [
      'Nước cất tinh khiết',
      'Dung dịch nước vôi trong Ca(OH)2 bị vẫn đục',
      'Dung dịch muối ăn NaCl',
      'Dung dịch cồn 90°'
    ],
    correctIndex: 1,
    explanation: 'Khí CO2 thải ra từ hô hấp của hạt nảy mầm phản ứng với dung dịch nước vôi trong Ca(OH)2 tạo kết tủa trắng CaCO3 làm nước vôi bị vẩn đục rõ rệt.',
    textbookRef: 'SGK KHTN 7 - Trang 116'
  },
  {
    id: 'q-b27-vd-1',
    lessonId: 'bai-27',
    lessonTitle: 'Bài 27: Thực hành: Hô hấp ở thực vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'van_dung',
    question: 'Trong bình thuỷ chứa hạt đỗ đang nảy mầm được đậy kín, nhiệt độ đo được bằng nhiệt kế tăng dần theo thời gian chứng tỏ điều gì?',
    options: [
      'Hạt đỗ đang quang hợp giải phóng nhiệt',
      'Quá trình hô hấp tế bào của hạt nảy mầm toả nhiệt năng ra môi trường xung quanh',
      'Vi khuẩn bên ngoài làm nóng bình thuỷ',
      'Bình thuỷ tự sinh nhiệt khi đậy nắp'
    ],
    correctIndex: 1,
    explanation: 'Hô hấp tế bào phân giải chất hữu cơ, giải phóng năng lượng dưới dạng ATP và một phần lớn dưới dạng nhiệt năng làm nhiệt độ trong bình tăng lên.',
    textbookRef: 'SGK KHTN 7 - Trang 117'
  },
  {
    id: 'q-b28-vd-1',
    lessonId: 'bai-28',
    lessonTitle: 'Bài 28: Trao đổi khí ở sinh vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'van_dung',
    question: 'Tại sao khi nuôi cá cảnh trong bể thuỷ tinh nhỏ kín, người ta thường phải lắp máy sục khí (máy tạo bọt khí)?',
    options: [
      'Để tạo sóng vui mắt cho cá bơi',
      'Cung cấp và hoà tan thêm khí oxygen (O2) vào nước giúp cá hô hấp qua mang',
      'Để làm tăng nhiệt độ của nước trong bể',
      'Giúp thức ăn tan nhanh hơn trong nước'
    ],
    correctIndex: 1,
    explanation: 'Cá hô hấp lấy khí oxygen hoà tan trong nước qua bề mặt các lá mang. Máy sục khí giúp tăng diện tích tiếp xúc giữa không khí và nước, bổ sung O2 liên tục.',
    textbookRef: 'SGK KHTN 7 - Trang 120'
  },
  {
    id: 'q-b29-nb-1',
    lessonId: 'bai-29',
    lessonTitle: 'Bài 29: Vai trò của nước và chất dinh dưỡng đối với sinh vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'nhan_biet',
    question: 'Nước chiếm khoảng bao nhiêu phần trăm khối lượng cơ thể của đa số các sinh vật sống?',
    options: ['10% - 20%', '30% - 40%', 'trên 70%', '99% trở lên ở tất cả các loài'],
    correctIndex: 2,
    explanation: 'Nước là thành phần chủ yếu cấu tạo nên tế bào và cơ thể sinh vật, thường chiếm trên 70% khối lượng cơ thể.',
    textbookRef: 'SGK KHTN 7 - Trang 123'
  },
  {
    id: 'q-b29-th-1',
    lessonId: 'bai-29',
    lessonTitle: 'Bài 29: Vai trò của nước và chất dinh dưỡng đối với sinh vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'thong_hieu',
    question: 'Tại sao khi cơ thể bị sốt cao hoặc tiêu chảy mất nước, bác sĩ khuyên cần uống dung dịch Oresol hoặc nước dừa pha chút muối?',
    options: [
      'Để kích thích cảm giác đói ăn nhanh hơn',
      'Để bù đắp lượng nước và các chất điện giải (ion khoáng) đã mất, duy trì cân bằng nội môi',
      'Để hạ đường huyết tức thời',
      'Để sát trùng toàn bộ đường tiêu hoá'
    ],
    correctIndex: 1,
    explanation: 'Mất nước kèm theo mất các chất điện giải (Na+, K+, Cl-). Dung dịch Oresol cung cấp đúng tỉ lệ nước và muối khoáng giúp cơ thể phục hồi thể dịch.',
    textbookRef: 'SGK KHTN 7 - Trang 125'
  },
  {
    id: 'q-b30-vd-1',
    lessonId: 'bai-30',
    lessonTitle: 'Bài 30: Trao đổi nước và chất dinh dưỡng ở thực vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'van_dung',
    question: 'Tại sao khi bứng cây con đem trồng nơi mới, người làm vườn thường phải tỉa bớt lá hoặc che chắn nắng cho cây trong những ngày đầu?',
    options: [
      'Để cây nhẹ hơn rễ dễ bám đất',
      'Giảm bớt sự thoát hơi nước qua lá khi rễ mới chưa kịp mọc lông hút hút đủ nước bù lại',
      'Kích thích cây phân cành nhanh hơn',
      'Tránh sâu bọ ăn mất lá non'
    ],
    correctIndex: 1,
    explanation: 'Khi bứng cây, bộ rễ bị tổn thương mất lông hút hút nước. Tỉa bớt lá giúp hạn chế thoát hơi nước, tránh cho cây bị héo và chết trước khi rễ mới kịp phát triển.',
    textbookRef: 'SGK KHTN 7 - Trang 129'
  },
  {
    id: 'q-b31-nb-1',
    lessonId: 'bai-31',
    lessonTitle: 'Bài 31: Trao đổi nước và chất dinh dưỡng ở động vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'nhan_biet',
    question: 'Ở động vật có xương sống và người, cơ quan nào đóng vai trò hấp thụ chủ yếu các chất dinh dưỡng từ thức ăn vào máu?',
    options: ['Dạ dày', 'Ruột non', 'Ruột già', 'Khoang miệng'],
    correctIndex: 1,
    explanation: 'Ruột non có bề mặt gấp nếp với hàng triệu lông ruột và vi nhung mao cực lớn, là nơi diễn ra tiêu hoá hoá học và hấp thụ phần lớn chất dinh dưỡng.',
    textbookRef: 'SGK KHTN 7 - Trang 132'
  },
  {
    id: 'q-b32-th-1',
    lessonId: 'bai-32',
    lessonTitle: 'Bài 32: Thực hành: Chứng minh thân vận chuyển nước và lá thoát hơi nước',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'thong_hieu',
    question: 'Khi cắm một cành hoa hồng bạch vào cốc nước pha mực đỏ, sau vài giờ quan sát thấy cánh hoa chuyển sang màu hồng nhạt. Thí nghiệm này chứng minh điều gì?',
    options: [
      'Chất màu tự khuếch tán qua không khí vào cánh hoa',
      'Thân cây có mạch gỗ vận chuyển nước và chất hoà tan từ gốc lên lá và hoa',
      'Cánh hoa tự tạo ra chất màu đỏ dưới tác dụng ánh sáng',
      'Mạch rây của thân đã hút nước ngược chiều từ dưới lên'
    ],
    correctIndex: 1,
    explanation: 'Mạch gỗ trong thân có chức năng vận chuyển nước và muối khoáng/chất tan một chiều từ rễ lên thân, lá và hoa.',
    textbookRef: 'SGK KHTN 7 - Trang 136'
  },

  // ===================== CHƯƠNG VIII: CẢM ỨNG Ở SINH VẬT =====================
  {
    id: 'q-b33-th-1',
    lessonId: 'bai-33',
    lessonTitle: 'Bài 33: Cảm ứng ở sinh vật và tập tính ở động vật',
    chapterId: 'ch-8',
    chapterName: 'Chương VIII: Cảm ứng ở sinh vật',
    level: 'thong_hieu',
    question: 'Hiện tượng ngọn cây trồng bên cửa sổ uốn cong vươn về phía có ánh sáng chiếu vào được gọi là gì?',
    options: [
      'Tính hướng sáng dương của ngọn cây',
      'Tính hướng trọng lực của thân cây',
      'Tính hướng hoá âm của cành cây',
      'Tập tính học được ở thực vật'
    ],
    correctIndex: 0,
    explanation: 'Ngọn cây có tính hướng sáng dương (vươn về nguồn sáng) do hormone sinh trưởng (auxin) phân bố nhiều ở phía khuất sáng kích thích tế bào bên đó dãn dài nhanh hơn.',
    textbookRef: 'SGK KHTN 7 - Trang 139'
  },
  {
    id: 'q-b34-vd-1',
    lessonId: 'bai-34',
    lessonTitle: 'Bài 34: Vận dụng hiện tượng cảm ứng ở sinh vật vào thực tiễn',
    chapterId: 'ch-8',
    chapterName: 'Chương VIII: Cảm ứng ở sinh vật',
    level: 'van_dung',
    question: 'Việc làm giàn leo cho các loại cây thân leo như mướp, bầu, bí, dưa leo dựa trên hiện tượng cảm ứng nào của cây?',
    options: [
      'Tính hướng tiếp xúc của tua cuốn hoặc thân leo',
      'Tính hướng nước của rễ cây',
      'Tính hướng đất âm của hoa',
      'Tính ngủ nghỉ của hạt'
    ],
    correctIndex: 0,
    explanation: 'Tua cuốn hoặc thân leo của cây bầu, bí có tính hướng tiếp xúc: khi chạm vào giàn sẽ kích thích tế bào uốn cong ôm chặt lấy giàn để leo lên cao đón nhận ánh sáng.',
    textbookRef: 'SGK KHTN 7 - Trang 142'
  },
  {
    id: 'q-b35-nb-1',
    lessonId: 'bai-35',
    lessonTitle: 'Bài 35: Thực hành: Cảm ứng ở sinh vật',
    chapterId: 'ch-8',
    chapterName: 'Chương VIII: Cảm ứng ở sinh vật',
    level: 'nhan_biet',
    question: 'Khi dùng tay chạm nhẹ vào lá của cây xấu hổ (cây trinh nữ), hiện tượng gì sẽ xảy ra ngay sau đó?',
    options: [
      'Lá cây lập tức rụng xuống gốc',
      'Các lá chét cụp lại và cuống lá rủ xuống',
      'Cành cây tự động gãy lìa',
      'Hoa nở bung ra ngay lập tức'
    ],
    correctIndex: 1,
    explanation: 'Khi va chạm cơ học, sự giảm áp suất trương nước ở thể gối tại cuống lá làm các lá chét cụp lại và cuống rủ xuống nhanh chóng.',
    textbookRef: 'SGK KHTN 7 - Trang 146'
  },

  // ===================== CHƯƠNG IX: SINH TRƯỞNG & PHÁT TRIỂN =====================
  {
    id: 'q-b36-th-1',
    lessonId: 'bai-36',
    lessonTitle: 'Bài 36: Khái quát về sinh trưởng và phát triển ở sinh vật',
    chapterId: 'ch-9',
    chapterName: 'Chương IX: Sinh trưởng & Phát triển',
    level: 'thong_hieu',
    question: 'Điểm khác biệt cốt lõi giữa "sinh trưởng" và "phát triển" ở sinh vật là gì?',
    options: [
      'Sinh trưởng là sự tăng lên về kích thước và khối lượng cơ thể; phát triển bao gồm cả sinh trưởng, phân hoá tế bào và phát sinh hình thái cơ quan mới',
      'Sinh trưởng chỉ có ở động vật, phát triển chỉ có ở thực vật',
      'Sinh trưởng tạo ra cơ quan mới, phát triển chỉ tăng cân nặng',
      'Sinh trưởng xảy ra vào ban đêm, phát triển xảy ra vào ban ngày'
    ],
    correctIndex: 0,
    explanation: 'Sinh trưởng là sự tăng kích thước và khối lượng do tăng số lượng/kích thước tế bào. Phát triển là toàn bộ biến đổi gồm sinh trưởng, biệt hoá tế bào và phát sinh cơ quan (ra hoa, kết quả...).',
    textbookRef: 'SGK KHTN 7 - Trang 149'
  },
  {
    id: 'q-b37-vd-1',
    lessonId: 'bai-37',
    lessonTitle: 'Bài 37: Ứng dụng sinh trưởng và phát triển ở sinh vật vào thực tiễn',
    chapterId: 'ch-9',
    chapterName: 'Chương IX: Sinh trưởng & Phát triển',
    level: 'van_dung',
    question: 'Các nhà vườn trồng hoa cúc ở Đà Lạt thường thắp đèn điện vào ban đêm nhằm mục đích gì?',
    options: [
      'Để sưởi ấm cho hoa không bị sương muối làm thối',
      'Ức chế sự phân hoá mầm hoa sớm, kích thích thân cây sinh trưởng cao to và hoa nở đúng dịp Tết',
      'Để thu hút ong bướm đến thụ phấn ban đêm',
      'Để làm biến đổi màu sắc cánh hoa cúc sang màu khác'
    ],
    correctIndex: 1,
    explanation: 'Cúc là cây ngày ngắn (chỉ ra hoa khi ngày ngắn lại vào mùa đông). Thắp đèn ngắt đêm dài sẽ ức chế ra hoa sớm, giúp cây kéo dài sinh trưởng thân lá, khi ngừng thắp đèn hoa sẽ đồng loạt nở to đẹp đón Tết.',
    textbookRef: 'SGK KHTN 7 - Trang 153'
  },
  {
    id: 'q-b38-nb-1',
    lessonId: 'bai-38',
    lessonTitle: 'Bài 38: Thực hành: Quan sát sự sinh trưởng và phát triển ở một số sinh vật',
    chapterId: 'ch-9',
    chapterName: 'Chương IX: Sinh trưởng & Phát triển',
    level: 'nhan_biet',
    question: 'Vòng đời của bướm trải qua các giai đoạn biến thái hoàn toàn lần lượt là gì?',
    options: [
      'Trứng -> Bướm trưởng thành -> Nhộng -> Sâu non',
      'Trứng -> Sâu non (ấu trùng) -> Nhộng -> Bướm trưởng thành',
      'Bướm trưởng thành -> Nhộng -> Trứng -> Sâu non',
      'Trứng -> Nòng nọc -> Bướm con -> Bướm lớn'
    ],
    correctIndex: 1,
    explanation: 'Vòng đời biến thái hoàn toàn của bướm: Trứng nở thành Sâu non (giai đoạn phá hoại mùa màng nhiều nhất), hoá thành Nhộng tĩnh lặng trong kén, rồi vũ hoá thành Bướm trưởng thành.',
    textbookRef: 'SGK KHTN 7 - Trang 156'
  },

  // ===================== CHƯƠNG X: SINH SẢN Ở SINH VẬT =====================
  {
    id: 'q-b39-th-2',
    lessonId: 'bai-39',
    lessonTitle: 'Bài 39: Sinh sản vô tính ở sinh vật',
    chapterId: 'ch-10',
    chapterName: 'Chương X: Sinh sản ở sinh vật',
    level: 'thong_hieu',
    question: 'Ưu điểm nổi bật nhất của phương pháp nhân giống vô tính (như chiết cành, ghép cành, giâm cành) trong trồng trọt là gì?',
    options: [
      'Tạo ra các biến dị di truyền phong phú thích nghi môi trường mới',
      'Giữ nguyên vẹn các đặc tính quý của cây mẹ và rút ngắn thời gian thu hoạch quả',
      'Không cần tốn công chăm sóc hay bón phân',
      'Luôn tạo ra quả không hạt'
    ],
    correctIndex: 1,
    explanation: 'Sinh sản sinh dưỡng giữ nguyên đặc tính di truyền tốt từ cây mẹ (như quả ngọt, thơm, năng suất cao) và cây nhanh ra hoa kết trái hơn gieo hạt.',
    textbookRef: 'SGK KHTN 7 - Trang 161'
  },
  {
    id: 'q-b40-vd-2',
    lessonId: 'bai-40',
    lessonTitle: 'Bài 40: Sinh sản hữu tính ở sinh vật',
    chapterId: 'ch-10',
    chapterName: 'Chương X: Sinh sản ở sinh vật',
    level: 'van_dung',
    question: 'Để tăng tỉ lệ đậu quả cho cây ngô (bắp) khi trồng ở những vùng ít gió hoặc vườn nhà, người ta thường dùng biện pháp nào?',
    options: [
      'Bón thật nhiều phân đạm vào gốc',
      'Tiến hành thụ phấn nhân tạo (lấy bông cờ rung phấn lên râu ngô)',
      'Tưới nước thật đẫm cả ngày lẫn đêm',
      'Cắt bỏ hết phần ngọn của cây ngô'
    ],
    correctIndex: 1,
    explanation: 'Ngô là cây thụ phấn nhờ gió (bông cờ ở đỉnh chứa phấn, râu ngô là vòi nhuỵ ở nách lá). Thụ phấn bổ sung nhân tạo giúp hạt bắp đóng đều kín bắp, tránh hiện tượng bắp bị khuyết hạt.',
    textbookRef: 'SGK KHTN 7 - Trang 167'
  },
  {
    id: 'q-b41-nb-2',
    lessonId: 'bai-41',
    lessonTitle: 'Bài 41: Một số yếu tố ảnh hưởng và điều hoà, điều khiển sinh sản ở sinh vật',
    chapterId: 'ch-10',
    chapterName: 'Chương X: Sinh sản ở sinh vật',
    level: 'nhan_biet',
    question: 'Các yếu tố môi trường chủ yếu ảnh hưởng trực tiếp đến sinh sản ở sinh vật bao gồm:',
    options: [
      'Nhiệt độ, ánh sáng, độ ẩm và chế độ dinh dưỡng',
      'Áp suất khí quyển và từ trường trái đất',
      'Độ cao so với mực nước biển',
      'Màu sắc của đất trồng'
    ],
    correctIndex: 0,
    explanation: 'Nhiệt độ, ánh sáng, độ ẩm và đặc biệt là chất dinh dưỡng có vai trò quyết định tới quá trình hình thành giao tử, thời điểm sinh sản và tỉ lệ giới tính ở sinh vật.',
    textbookRef: 'SGK KHTN 7 - Trang 169'
  },
  {
    id: 'q-b42-vd-1',
    lessonId: 'bai-42',
    lessonTitle: 'Bài 42: Cơ thể sinh vật là một thể thống nhất',
    chapterId: 'ch-10',
    chapterName: 'Chương X: Sinh sản ở sinh vật',
    level: 'van_dung',
    question: 'Khi một vận động viên chạy nhanh 100m, nhịp tim và nhịp thở của anh ấy đều tăng nhanh rõ rệt. Hiện tượng này thể hiện mối quan hệ thống nhất nào trong cơ thể?',
    options: [
      'Hệ tuần hoàn và hệ hô hấp phối hợp nhịp nhàng để cung cấp thêm oxygen và chất dinh dưỡng cho cơ bắp hoạt động, đồng thời thải nhanh khí CO2 và nhiệt',
      'Các hệ cơ quan hoạt động hoàn toàn độc lập và không liên quan đến nhau',
      'Chỉ có phổi hoạt động còn tim không thay đổi',
      'Cơ bắp không cần năng lượng khi vận động nhanh'
    ],
    correctIndex: 0,
    explanation: 'Cơ thể là một thể thống nhất: khi cơ bắp co mạnh cần nhiều năng lượng ATP, tim phải đập nhanh hơn và phổi phải thở dồn dập hơn để đáp ứng kịp thời nhu cầu trao đổi chất.',
    textbookRef: 'SGK KHTN 7 - Trang 174'
  },
  {
    id: 'q-b10-th-1',
    lessonId: 'bai-10',
    lessonTitle: 'Bài 10: Đồ thị quãng đường – thời gian',
    chapterId: 'ch-3',
    chapterName: 'Chương III: Tốc độ chuyển động',
    level: 'thong_hieu',
    question: 'Trong đồ thị quãng đường – thời gian của một chuyển động thẳng, độ dốc (độ nghiêng) của đường đồ thị càng lớn thì điều đó thể hiện điều gì?',
    options: [
      'Vật chuyển động càng nhanh (tốc độ càng lớn)',
      'Vật chuyển động càng chậm',
      'Thời gian chuyển động càng dài',
      'Quãng đường đi được bằng 0'
    ],
    correctIndex: 0,
    explanation: 'Độ dốc của đường biểu diễn s theo t đặc trưng cho tốc độ v = s/t. Đường càng dốc đứng chứng tỏ trong cùng khoảng thời gian vật đi được quãng đường càng lớn, tức tốc độ càng nhanh.',
    textbookRef: 'SGK KHTN 7 - Trang 54'
  },
  {
    id: 'q-b19-nb-1',
    lessonId: 'bai-19',
    lessonTitle: 'Bài 19: Từ trường',
    chapterId: 'ch-6',
    chapterName: 'Chương VI: Từ & Nam châm điện',
    level: 'nhan_biet',
    question: 'Không gian xung quanh nam châm hoặc xung quanh dòng điện có tính chất tác dụng lực từ lên kim nam châm đặt trong nó được gọi là gì?',
    options: ['Điện trường', 'Từ trường', 'Trọng trường', 'Quang trường'],
    correctIndex: 1,
    explanation: 'Từ trường là môi trường vật chất đặc biệt tồn tại xung quanh nam châm hoặc dòng điện và tác dụng lực từ lên vật liệu từ hoặc kim nam châm.',
    textbookRef: 'SGK KHTN 7 - Trang 91'
  },
  {
    id: 'q-b20-th-1',
    lessonId: 'bai-20',
    lessonTitle: 'Bài 20: Chế tạo nam châm điện đơn giản',
    chapterId: 'ch-6',
    chapterName: 'Chương VI: Từ & Nam châm điện',
    level: 'thong_hieu',
    question: 'Khi ngắt dòng điện chạy qua cuộn dây của nam châm điện có lõi sắt non, hiện tượng gì sẽ xảy ra?',
    options: [
      'Nam châm điện vẫn giữ nguyên lực hút sắt mãi mãi',
      'Từ tính của nam châm điện biến mất ngay lập tức và các mẩu sắt rơi ra',
      'Lõi sắt non phát nổ',
      'Cực Bắc và cực Nam của nam châm tự đảo chiều'
    ],
    correctIndex: 1,
    explanation: 'Sắt non mất từ tính rất nhanh sau khi ngắt dòng điện. Đây là ưu điểm vượt trội của nam châm điện (có thể bật tắt từ tính linh hoạt).',
    textbookRef: 'SGK KHTN 7 - Trang 96'
  },
  {
    id: 'q-b21-th-1',
    lessonId: 'bai-21',
    lessonTitle: 'Bài 21: Khái quát về trao đổi chất và chuyển hoá năng lượng',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'thong_hieu',
    question: 'Năng lượng ánh sáng mặt trời được thực vật hấp thụ trong quang hợp chuyển hoá thành dạng năng lượng nào tích luỹ trong các liên kết hoá học của chất hữu cơ?',
    options: ['Cơ năng', 'Hoá năng', 'Nhiệt năng', 'Điện năng'],
    correctIndex: 1,
    explanation: 'Quang hợp là quá trình biến đổi quang năng (ánh sáng mặt trời) thành hoá năng dự trữ trong các hợp chất hữu cơ (như glucose, tinh bột).',
    textbookRef: 'SGK KHTN 7 - Trang 100'
  },
  {
    id: 'q-b22-nb-1',
    lessonId: 'bai-22',
    lessonTitle: 'Bài 22: Quang hợp ở thực vật',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'nhan_biet',
    question: 'Bào quan nào trong tế bào thực vật là nơi diễn ra quá trình quang hợp?',
    options: ['Ti thể', 'Lục lạp (chứa chất diệp lục)', 'Không bào', 'Nhân tế bào'],
    correctIndex: 1,
    explanation: 'Lục lạp chứa chất diệp lục có khả năng hấp thụ năng lượng ánh sáng mặt trời để thực hiện quá trình quang hợp.',
    textbookRef: 'SGK KHTN 7 - Trang 102'
  },
  {
    id: 'q-b25-nb-2',
    lessonId: 'bai-25',
    lessonTitle: 'Bài 25: Hô hấp tế bào',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'nhan_biet',
    question: 'Phương trình tổng quát của quá trình hô hấp tế bào là gì?',
    options: [
      'Glucose + Nước -> Carbon dioxide + Oxygen + Nhiệt',
      'Glucose + Oxygen -> Carbon dioxide + Nước + Năng lượng (ATP + nhiệt)',
      'Tinh bột + Ánh sáng -> Glucose + Oxygen',
      'Carbon dioxide + Nước -> Glucose + Oxygen'
    ],
    correctIndex: 1,
    explanation: 'Hô hấp tế bào là quá trình phân giải chất hữu cơ (chủ yếu là glucose) có sự tham gia của O2 tạo ra CO2, H2O và giải phóng năng lượng ATP cung cấp cho hoạt động sống.',
    textbookRef: 'SGK KHTN 7 - Trang 111'
  },
  {
    id: 'q-b25-vd-1',
    lessonId: 'bai-25',
    lessonTitle: 'Bài 25: Hô hấp tế bào',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'van_dung',
    question: 'Tại sao không nên để nhiều chậu hoa tươi hoặc cây xanh trong phòng ngủ kín vào ban đêm?',
    options: [
      'Vì ban đêm cây chỉ hô hấp, lấy khí O2 và thải ra khí CO2 làm không khí ngột ngạt thiếu dưỡng khí',
      'Vì cây phát ra ánh sáng huỳnh quang làm khó ngủ',
      'Vì ban đêm cây giải phóng nhiệt độ cực cao',
      'Vì rễ cây hút hết độ ẩm trong phòng'
    ],
    correctIndex: 0,
    explanation: 'Vào ban đêm không có ánh sáng, cây không quang hợp mà chỉ hô hấp tế bào, tiêu hao oxygen và thải carbon dioxide, có thể gây khó thở ngạt thở cho người trong phòng kín.',
    textbookRef: 'SGK KHTN 7 - Trang 112'
  },
  {
    id: 'q-b32-vd-1',
    lessonId: 'bai-32',
    lessonTitle: 'Bài 32: Thực hành: Chứng minh thân vận chuyển nước và lá thoát hơi nước',
    chapterId: 'ch-7',
    chapterName: 'Chương VII: Trao đổi chất & Năng lượng',
    level: 'van_dung',
    question: 'Trong thí nghiệm chứng minh lá thoát hơi nước, khi dùng túi nilon trong suốt bọc kín một cành cây còn nguyên lá và để ngoài nắng, hiện tượng quan sát thấy là gì?',
    options: [
      'Túi nilon bị teo nhỏ lại',
      'Thành trong của túi nilon mờ đi và đọng lại nhiều giọt nước nhỏ li ti',
      'Lá cây chuyển ngay sang màu tím',
      'Túi nilon chuyển sang màu đen'
    ],
    correctIndex: 1,
    explanation: 'Hơi nước thoát ra từ các lỗ khí khổng trên bề mặt lá gặp thành túi nilon lạnh hơn sẽ ngưng tụ lại thành các giọt nước li ti bám ở mặt trong của túi.',
    textbookRef: 'SGK KHTN 7 - Trang 137'
  },
  {
    id: 'q-b35-vd-1',
    lessonId: 'bai-35',
    lessonTitle: 'Bài 35: Thực hành: Cảm ứng ở sinh vật',
    chapterId: 'ch-8',
    chapterName: 'Chương VIII: Cảm ứng ở sinh vật',
    level: 'van_dung',
    question: 'Khi đặt chậu cây con nằm ngang, sau vài ngày quan sát thấy ngọn cây uốn cong lên trên còn rễ cây uốn cong đâm xuống dưới đất. Hiện tượng này chứng tỏ điều gì?',
    options: [
      'Ngọn cây có tính hướng trọng lực âm, rễ cây có tính hướng trọng lực dương',
      'Rễ cây luôn chạy trốn khỏi chất dinh dưỡng',
      'Ngọn cây và rễ cây phản ứng giống hệt nhau với trọng lực',
      'Đất đã hút ngọn cây uốn cong'
    ],
    correctIndex: 0,
    explanation: 'Rễ cây hướng đất dương (sinh trưởng theo chiều trọng lực xuống dưới để bám đất hút nước và khoáng), còn ngọn cây hướng đất âm (sinh trưởng ngược chiều trọng lực vươn lên đón ánh sáng).',
    textbookRef: 'SGK KHTN 7 - Trang 147'
  },
  {
    id: 'q-b38-vd-1',
    lessonId: 'bai-38',
    lessonTitle: 'Bài 38: Thực hành: Quan sát sự sinh trưởng và phát triển ở một số sinh vật',
    chapterId: 'ch-9',
    chapterName: 'Chương IX: Sinh trưởng & Phát triển',
    level: 'van_dung',
    question: 'Trong vòng đời phát triển biến thái hoàn toàn của loài ếch đồng, giai đoạn nào thở hoàn toàn bằng mang và bơi bằng đuôi giống như loài cá?',
    options: ['Ếch trưởng thành', 'Giai đoạn nòng nọc', 'Trứng chưa nở', 'Giai đoạn ếch con trên cạn'],
    correctIndex: 1,
    explanation: 'Nòng nọc sống hoàn toàn dưới nước, hô hấp bằng mang ngoài và mang trong, di chuyển bằng vây đuôi. Sau đó chúng tiêu biến đuôi, phát triển 4 chi và phổi để lên cạn thành ếch.',
    textbookRef: 'SGK KHTN 7 - Trang 157'
  }
];
