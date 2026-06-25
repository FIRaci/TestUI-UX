const quizData = [
  {
    "id": 1,
    "question": "Phát biểu nào sau đây là đúng?",
    "chapter": 2,
    "options": [
      "Đĩa cứng là một dạng bộ nhớ ngắn hạn của máy tính",
      "Con người có hai loại tế bào cảm quang",
      "Con người có ba loại bộ nhớ",
      "Độ tương phản giữa màu chữ và màu nền nhỏ làm cho văn bản dễ đọc",
      "Con người có năm kiểu lập luận"
    ],
    "correctAnswers": [
      1,
      2
    ],
    "explanation": "Cau 1: 2 dap an dung.\n- \"Con nguoi co hai loai te bao cam quang\" dung: mat nguoi co 2 loai te bao cam quang la te bao non (nhin mau sac) va hinh que (nhin anh sang).\n- \"Con nguoi co ba loai bo nho\" dung: he thong xu ly thong tin cua con nguoi co 3 loai bo nho: Cam nhan, Ngan han va Dai han.\n- \"Do tuong phan giua mau chu va mau nen nho lam cho van ban de doc\" sai: do tuong phan nho lam chu RAT KHO DOC.\n- \"Con nguoi co nam kieu lap luan\" sai: lap luan cua con nguoi chu yeu la dien dich, quy nap, phan chung (khong phai 5).\n- \"Dia cung la mot dang bo nho ngan han cua may tinh\" sai: dia cung la bo nho luu tru DAI HAN, RAM moi la ngan han."
  },
  {
    "id": 3,
    "question": "Các thành phần chính của giao diện là:",
    "chapter": 1,
    "options": [
      "Con người, hệ thống",
      "Người dùng, hệ thống, đầu vào, đầu ra",
      "Con người, máy tính và giao diện",
      "Đầu vào, đầu ra",
      "Con người, máy tính, bối cảnh sử dụng và quy trình phát triển"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 3: Giao dien (Interface) thuan tuy la ranh gioi tiep xuc, noi no nhan lenh tu nguoi dung (dau vao - input) va hien thi phan hoi (dau ra - output).\n- \"Dau vao, dau ra\" la dap an dung.\n- Cac dap an khac mo ta he thong lon hon (he tuong tac) chu khong phai rieng giao dien."
  },
  {
    "id": 4,
    "question": "Các thành phần chính của hệ tương tác là:",
    "chapter": 1,
    "options": [
      "Đầu vào, đầu ra",
      "Con người, máy tính, bối cảnh sử dụng và quy trình phát triển",
      "Con người, máy tính và giao diện",
      "Người dùng, hệ thống, đầu vào, đầu ra",
      "Con người, hệ thống"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 4: Mot \"he tuong tac\" (Interactive System) toan dien khong chi co phan cung (may tinh) va nguoi dung, ma phai dat trong boi canh su dung cu the va duoc hinh thanh qua mot quy trinh phat trien chuan. Dap an dung: \"Con nguoi, may tinh, boi canh su dung va quy trinh phat trien\"."
  },
  {
    "id": 5,
    "question": "Các yếu tố chính của ngữ cảnh tương tác là:",
    "chapter": 1,
    "options": [
      "Con người, máy tính và giao diện",
      "Đầu vào, đầu ra",
      "Người dùng, hệ thống, đầu vào, đầu ra",
      "Con người, máy tính, bối cảnh sử dụng và quy trình phát triển",
      "Con người, hệ thống"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 5: Ngu canh tuong tac (Interaction Context) la moi truong noi cuoc doi thoai giua 2 thuc the cot loi dien ra: Con nguoi va He thong. Dap an dung: \"Con nguoi, he thong\"."
  },
  {
    "id": 6,
    "question": "Phát biểu nào sau đây là sai ?",
    "chapter": 2,
    "options": [
      "Con người có năm kiểu lập luận",
      "Độ tương phản giữa màu chữ và màu nền nhỏ làm cho văn bản dễ đọc",
      "Con người có ba loại bộ nhớ",
      "Con người có hai loại tế bào cảm quang",
      "Đĩa cứng là một dạng bộ nhớ ngắn hạn của máy tính"
    ],
    "correctAnswers": [
      0,
      1,
      4
    ],
    "explanation": "Cau 6: Cau hoi tim phat bieu SAI, chon 3 dap an:\n- \"Do tuong phan giua mau chu va mau nen nho lam cho van ban de doc\" SAI: do tuong phan nho lam chu RAT KHO DOC.\n- \"Con nguoi co nam kieu lap luan\" SAI: lap luan cua con nguoi chu yeu la dien dich, quy nap, phan chung (khong phai 5).\n- \"Dia cung la mot dang bo nho ngan han cua may tinh\" SAI: dia cung la bo nho luu tru DAI HAN.\n- \"Con nguoi co hai loai te bao cam quang\" DUNG.\n- \"Con nguoi co ba loai bo nho\" DUNG."
  },
  {
    "id": 8,
    "question": "Mô hình nào cho phép mô tả người dùng làm gì, máy tính làm gì?",
    "chapter": 6,
    "options": [
      "PIE",
      "ERD (Entity Relationship Diagrams)",
      "HTA (Hierarchy Task Analysis)",
      "CSP (Communicating Sequential Process)",
      "ATN (Augmented Transition Networks)"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 8: Phan tich nhiem vu phan cap (HTA) be gay cac cong viec phuc tap thanh cac buoc nho hon, mo ta ro hanh dong nao do nguoi thuc hien, thao tac nao do may dam nhan. Dap an dung: \"HTA (Hierarchy Task Analysis)\"."
  },
  {
    "id": 10,
    "question": "Mô hình nào cho phép phân tích nhiệm vụ người dùng?",
    "chapter": 6,
    "options": [
      "OSTA (Open System Task Analysis)",
      "ERD (Entity Relationship Diagrams)",
      "CSP (Communicating Sequential Process)",
      "PIE",
      "HTA (Hierarchy Task Analysis)"
    ],
    "correctAnswers": [
      0,
      4
    ],
    "explanation": "Cau 10: OSTA va HTA la hai ky thuat kinh dien trong nganh thiet ke tuong tac dung de phan tich va lap so do cac nhiem vu (tasks) ma nguoi dung can thuc hien. Dap an dung: \"OSTA\" va \"HTA\"."
  },
  {
    "id": 12,
    "question": "Định nghĩa tương tác người máy của Baecker và Buxton đề cập đến những yếu tố nào sau đây?",
    "chapter": 1,
    "options": [
      "Quy trình",
      "Giao tiếp",
      "Hành động",
      "Quá trình",
      "Đối thoại"
    ],
    "correctAnswers": [
      2,
      3,
      4
    ],
    "explanation": "Cau 12: Theo dinh nghia chuan cua Baecker va Buxton, HCI la mot chuoi cac \"hanh dong\", qua trinh va su \"doi thoai\" giua nguoi va may nham dat muc tieu cu the. Dap an dung: Hanh dong, Qua trinh, Doi thoai."
  },
  {
    "id": 15,
    "question": "Các yếu tố nào không được xét đến khi mô tả cách thức và bối cảnh sử dụng máy tính?",
    "chapter": 1,
    "options": [
      "Các thành phần xử lý của máy tính",
      "Các kĩ thuật đối thoại",
      "Môi trường và công việc",
      "Ứng dụng",
      "Sự phù hợp giữa con người và máy tính"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Cau 15: \"Ky thuat doi thoai\" va \"Thanh phan xu ly\" la cau truc ky thuat ben trong he thong (kien truc giao dien/phan cung), chung khong phai la yeu to mieu ta \"boi canh\" hay \"cach thuc\" (nhu moi truong lam viec hay do phu hop). Dap an dung (cac yeu to KHONG duoc xet den): \"Cac thanh phan xu ly cua may tinh\", \"Cac ki thuat doi thoai\"."
  },
  {
    "id": 16,
    "question": "Đâu là các chủ đề cần nghiên cứu về con người trong tương tác người máy?",
    "chapter": 2,
    "options": [
      "Phong tục tập quán",
      "Lập luận",
      "Thói quen",
      "Bộ nhớ",
      "Kênh vào ra"
    ],
    "correctAnswers": [
      1,
      3,
      4
    ],
    "explanation": "Cau 16: Trong HCI, con nguoi duoc xem nhu \"he thong xu ly thong tin\", do do trong tam nghien cuu la Sinh hoc & Tam ly hoc nhan thuc (Kenh giac quan, Cau truc bo nho, Kha nang suy luan). Dap an dung: \"Kenh vao ra\", \"Bo nho\", \"Lap luan\"."
  },
  {
    "id": 17,
    "question": "Yếu tố nào KHÔNG được đề cập đến như là một bộ phận của máy tính trong tương tác với người dùng?",
    "chapter": 2,
    "options": [
      "Thiết bị vào ra",
      "Kiến trúc đối thoại",
      "Các kỹ thuật hội thoại",
      "Các loại hội thoại",
      "Bộ nhớ máy tính"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 17: Trong goc do \"tuong tac truc tiep\" o be mat giao dien, nguoi dung tiep xuc voi thiet bi I/O va cac ky thuat/kien truc hoi thoai. Bo nho may la thanh phan an ben trong (Backend), nguoi dung khong tuong tac truc tiep voi no. Dap an dung: \"Bo nho may tinh\"."
  },
  {
    "id": 22,
    "question": "Đo, đánh giá tính dùng được của các hệ tương tác là đo, đánh giá những gì?",
    "chapter": 1,
    "options": [
      "Năng suất",
      "Hiệu quả",
      "Giá thành",
      "Mức độ thỏa mãn",
      "Số chức năng tương tác"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Cau 22: Theo chuan ISO 9241, Tinh dung duoc (Usability) duoc do luong bang 3 tieu chi cot loi: Hieu qua (Effectiveness), Nang suat (Efficiency) va Su thoa man (Satisfaction). Dap an dung: \"Nang suat\", \"Hieu qua\", \"Muc do thoa man\"."
  },
  {
    "id": 23,
    "question": "Quy trình mô hình hoá yêu cầu người dùng theo OSTA gồm bao nhiêu bước ?",
    "chapter": 5,
    "options": [
      "8",
      "7",
      "14",
      "2",
      "5"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cau 23: Ky thuat OSTA (Open System Task Analysis) co mot quy chuan co dinh duoc thiet ke bao gom chinh xac 8 buoc phan tich he thong ky thuat xa hoi. Dap an dung: \"8\"."
  },
  {
    "id": 25,
    "question": "Tính dùng được nghĩa là:",
    "chapter": 1,
    "options": [
      "Ít động não, ít động chân tay",
      "Năng suất, hiệu quả, thỏa mãn",
      "Ít động não, ít động chân tay, mang lại trải nghiệm thú vị khi tương tác",
      "Năng suất, chất lượng, hiệu quả",
      "Dễ học, dễ dùng"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 25: Day la cach dinh nghia theo ngon ngu binh dan va thuc dung nhat cua Usability: He thong phai truc quan (it dong nao suy nghi), thao tac ngan gon (it dong tay) va mang lai cam giac tot (thu vi). Dap an dung: \"It dong nao, it dong chan tay, mang lai trai nghiem thu vi khi tuong tac\"."
  },
  {
    "id": 26,
    "question": "Quy trình thiết kế tương tác gồm bao nhiêu bước?",
    "chapter": 4,
    "options": [
      "2",
      "8",
      "14",
      "5",
      "7"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 26: Quy trinh thiet ke tuong tac co ban thuong co 5 buoc: Kham pha/Thau cam -> Xac dinh yeu cau -> Thiet ke giai phap -> Tao mau thu (Prototyping) -> Danh gia. Dap an dung: \"5\"."
  },
  {
    "id": 27,
    "question": "Tương tác theo mô hình chu trình thực hiện đánh giá gồm bao nhiêu giai đoạn?",
    "chapter": 1,
    "options": [
      "7",
      "5",
      "2",
      "8",
      "14"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cau 27: Mo hinh vong doi hanh dong cua Donald Norman (Norman's Action Cycle) bao gom 7 giai doan: 1. Dat muc tieu -> 2. Lap chu y -> 3. Len chuoi hanh dong -> 4. Thuc thi -> 5. Nhan thuc he thong -> 6. Dien dich trang thai -> 7. Danh gia ket qua. Dap an dung: \"7\"."
  },
  {
    "id": 28,
    "question": "Các tiêu chí nào sau đây dùng để đo đánh giá tính dùng được:",
    "chapter": 1,
    "options": [
      "Năng suất, chất lượng, hiệu quả",
      "Năng suất, hiệu quả, thỏa mãn",
      "Ít động não, ít động chân tay, mang lại trải nghiệm thú vị khi tương tác",
      "Ít động não, ít động chân tay",
      "Dễ học, dễ dùng"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 28: Nhap lai theo chuan ISO 9241 ve Usability (giong cau 22). Dap an dung: \"Nang suat, hieu qua, thoa man\"."
  },
  {
    "id": 29,
    "question": "Cái gì không phải là thành phần cấu thành hệ tương tác?",
    "chapter": 1,
    "options": [
      "Quy trình phát triển hệ thống",
      "Cách dùng và bối cảnh sử dụng máy tính",
      "Các đặc tính của con người",
      "Các đặc tính của hệ thống máy tính và kiến trúc giao diện",
      "Quá trình sử dụng máy tính."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 29: \"Qua trinh su dung\" la mot chuoi hanh dong phat sinh dien ra theo thoi gian, no khong phai la mot \"thanh phan vat ly hay ly thuyet\" tao nen cau truc ban dau cua he tuong tac. Dap an dung: \"Qua trinh su dung may tinh.\""
  },
  {
    "id": 30,
    "question": "Nghiên cứu về công thái học giúp người phát triển tạo ra các hệ thống:",
    "chapter": 1,
    "options": [
      "Có tính bảo mật cao",
      "An toàn và dùng được",
      "Với nhiều chức năng phức tạp và giao diện đồ họa đẹp",
      "Phù hợp với đặc tả chức năng",
      "Phù hợp với các đặc tính vật lý của tương tác"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 30: Cong thai hoc (Ergonomics) la khoa hoc nghien cuu ve kich thuoc, hinh dang co the, va dac tinh vat ly sinh hoc cua con nguoi de thiet ke cac khong gian/thiet bi vat ly (vi du: tu the ngoi, khoang cach nhin man hinh) sao cho khop nhat voi nguoi dung. Dap an dung: \"Phu hop voi cac dac tinh vat ly cua tuong tac\"."
  },
  {
    "id": 31,
    "question": "Đâu là đặc trưng của bộ nhớ dài hạn:",
    "chapter": 2,
    "options": [
      "Hư hỏng nhanh (200ms)",
      "Khả năng nhớ hạn chế 7+/- 2 mục",
      "Cấu trúc tuyến tính",
      "Thời gian truy cập nhanh (700ms)",
      "Thông tin được lưu theo cách viết đè"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 31: Bo nho dai han co cac cau truc lien ket de luu tru ben vung (trong giao trinh nay ghi nhan dac trung tuyen tinh cho mot so loai truy xuat). Cac dap an sai thuoc ve Bo nho cam nhan va Ngan han (Quy tac 7+-2 la cua bo nho ngan han). Dap an dung: \"Cau truc tuyen tinh\"."
  },
  {
    "id": 32,
    "question": "Các thiết bị nào là thiết bị ra?",
    "chapter": 2,
    "options": [
      "Bảng vẽ",
      "Máy in",
      "Loa",
      "Chuột",
      "Bàn phím"
    ],
    "correctAnswers": [
      1,
      2
    ],
    "explanation": "Cau 32: Thiet bi ra (Output) nhan du lieu tu may tinh xuat ra cho nguoi dung thay/nghe. Dap an dung: \"May in\", \"Loa\"."
  },
  {
    "id": 33,
    "question": "Các thiết bị nào là thiết bị vào?",
    "chapter": 2,
    "options": [
      "Chuột",
      "Máy in",
      "Bàn phím",
      "Loa",
      "Bảng vẽ"
    ],
    "correctAnswers": [
      0,
      2,
      4
    ],
    "explanation": "Cau 33: Thiet bi vao (Input) nhan lenh tu nguoi dung day vao may tinh. Dap an dung: \"Chuot\", \"Ban phim\", \"Bang ve\"."
  },
  {
    "id": 34,
    "question": "Khả năng tiếp nhận âm thanh của con người phụ thuộc vào các yếu tố nào sau đây?",
    "chapter": 2,
    "options": [
      "Tiếng vọng",
      "Độ vang",
      "Âm điệu",
      "Tần số",
      "Cường độ âm thanh"
    ],
    "correctAnswers": [
      2,
      3,
      4
    ],
    "explanation": "Cau 34: Trong vat ly am thanh tac dong len tai nguoi, 3 yeu to quyet dinh kha nang nghe la Pitch (tan so/cao do), Timbre (am dieu/am sac), va Loudness (cuong do/am luong). Dap an dung: \"Tan so\", \"Am dieu\", \"Cuong do am thanh\"."
  },
  {
    "id": 35,
    "question": "Người dùng quan tâm những gì khi tương tác với hệ thống?",
    "chapter": 3,
    "options": [
      "Tốc độ hoạt động của hệ thống",
      "Hệ thống chạy trên nền tảng nào",
      "Lỗi của hệ thống",
      "Cách thức hoạt động của hệ thống",
      "Đầu vào và đầu ra của hệ thống"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 35: Nguoi dung binh thuong khong quan tam code viet bang ngon ngu gi, chay server nao. Ho chi quan tam \"Toi nhap cai nay vao (Input) thi man hinh tra ra cai gi (Output)\". Dap an dung: \"Dau vao va dau ra cua he thong\"."
  },
  {
    "id": 36,
    "question": "Những gì không phải đặc điểm của kiểu tương tác dòng lệnh?",
    "chapter": 2,
    "options": [
      "Ít sai sót",
      "Thích hợp với chuyên gia",
      "Dễ thích ứng dễ sửa lỗi",
      "Thích hợp với nhiệm vụ có tính lặp lại",
      "Không tốn công đào tạo"
    ],
    "correctAnswers": [
      0,
      2,
      4
    ],
    "explanation": "Cau 36: Dong lenh (Command Line) DOI HOI phai hoc thuoc long cu phap (ton cong dao tao), go sai 1 dau phay la hong (nhieu sai sot, kho sua loi). Do do 3 dac diem sai la: \"It sai sot\", \"De thich ung de sua loi\", \"Khong ton cong dao tao\". Dap an dung (cac dac diem KHONG PHAI cua CLI)."
  },
  {
    "id": 37,
    "question": "Góc nhìn phụ thuộc vào những yếu tố nào sau đây?",
    "chapter": 2,
    "options": [
      "Độ sáng, kích thước đối tượng và khoảng cách từ đối tượng đến mắt",
      "Khoảng cách từ đối tượng đến mắt",
      "Độ sáng",
      "Kích thước đối tượng",
      "Kích thước đối tượng và khoảng cách từ đối tượng đến mắt"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 37: Theo quang hoc va sinh ly thi giac, Visual Angle (Goc nhin) duoc tinh bang ty le giua kich thuoc vat ly cua vat the va khoang cach tu vat do toi dong tu mat nguoi. Dap an dung: \"Kich thuoc doi tuong va khoang cach tu doi tuong den mat\"."
  },
  {
    "id": 38,
    "question": "Đâu là mô thức cho phép người dùng tương tác mà không cần tập trung hình thành chủ ý ?",
    "chapter": 12,
    "options": [
      "Mô thức xử lý theo lô",
      "Mô thức WWW",
      "Mô thức phân chia thời gian",
      "Mô thức tính toán khắp nơi",
      "Mô thức mạng"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 38: Ubiquitous computing la cong nghe nhung vao moi truong xung quanh (nhu nha thong minh, cam bien tu dong bat den khi co nguoidi vao). May tinh tu hoat dong ngam, nguoi dung khong can co tinh thao tac. Dap an dung: \"Mo thuc tinh toan khap noi (Ubiquitous computing)\"."
  },
  {
    "id": 39,
    "question": "Lựa chọn nào sau đây không phải là một mức yêu cầu người dùng?",
    "chapter": 4,
    "options": [
      "Hiệu quả",
      "Chức năng",
      "Năng suất",
      "Dùng được",
      "Hài lòng"
    ],
    "correctAnswers": [
      0,
      2
    ],
    "explanation": "Cau 39: Thap yeu cau nguoi dung bao gom 3 muc do (tu day len dinh): Chuc nang (Functional) -> Su dung duoc (Usable/Dung duoc) -> Hai long (Pleasurable/Hai long). Hieu qua va Nang suat la tieu chi do luong Usability, khong phai cap do yeu cau. Dap an dung (cai KHONG PHAI yeu cau nguoi dung): \"Hieu qua\", \"Nang suat\"."
  },
  {
    "id": 40,
    "question": "Cần biết những gì về người dùng để xây dựng thành công hệ thống tương tác?",
    "chapter": 5,
    "options": [
      "Giới tính người dùng",
      "Khả năng ăn uống",
      "Khả năng tâm lý, khả năng tâm sinh lý",
      "Hoàn cảnh gia đình của người dùng",
      "Học vấn của người dùng"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 40: HCI co trong gioi han cua con nguoi ve mat nao bo (tam ly hoc nhan thuc, tri nho) va co the (tam sinh ly, tam nhin, toc do phan xa) de thiet ke giao dien phu hop. Dap an dung: \"Kha nang tam ly, kha nang tam sinh ly\"."
  },
  {
    "id": 41,
    "question": "Hệ vận động cung cấp các chức năng tích hợp từ các hệ thống nào sau đây?",
    "chapter": 2,
    "options": [
      "Hệ tiêu hóa",
      "Hệ khớp",
      "Hệ tuần hoàn",
      "Hệ thần kinh",
      "Hệ cơ"
    ],
    "correctAnswers": [
      1,
      3,
      4
    ],
    "explanation": "Cau 41: De thuc hien mot \"Hanh dong\" (vi du bam chuot), nao phai truyen tin hieu (he than kinh) toi cac co bap (he co) de keo cac khop xuong (he khop) ngon tay chuyen dong. Dap an dung: \"He than kinh\", \"He co\", \"He khop\"."
  },
  {
    "id": 42,
    "question": "Thời gian lưu lại thông tin của bộ nhớ cảm nhận thị giác là bao nhiêu?",
    "chapter": 2,
    "options": [
      "Khoảng 500ms",
      "Khoảng 1200ms",
      "Khoảng 700ms",
      "Khoảng 200ms",
      "Khoảng 1500ms"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 42: Bo nho bieu tuong (Iconic memory - thi giac) tan bien cuc ky nhanh, thuong chi ton tai trong vong vai tram mili-giay (khoang 200ms). Dap an dung: \"Khoang 200ms\"."
  },
  {
    "id": 43,
    "question": "Nghiên cứu về HCI giúp người phát triển tạo ra các hệ thống:",
    "chapter": 1,
    "options": [
      "Có tính bảo mật cao",
      "An toàn và dùng được",
      "Với nhiều chức năng phức tạp và giao diện đồ họa đẹp",
      "Phù hợp với đặc tả chức năng",
      "Phù hợp với các đặc tính vật lý của tương tác"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 43: Muc tieu toi thuong cua Thiet ke Tuong tac (HCI) la su an toan cho nguoi dung (han che loi gay hau qua nghiem trong) va tinh kha dung (Usability). Dap an dung: \"An toan va dung duoc\"."
  },
  {
    "id": 44,
    "question": "Mô hình tương tác bằng thị giác là sự phụ thuộc của cảm nhận thị giác vào những yếu tố nào?",
    "chapter": 2,
    "options": [
      "Màu sắc, ánh sáng",
      "Ánh sáng, độ sáng tối, độ tương phản",
      "Ánh sáng, độ sáng tối, màu sắc, kích thước",
      "Kích thước, màu sắc",
      "Độ tương phản"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 44: Mat nguoi phan tich hinh anh thong qua cuong do anh sang, dai mau, su chenh lech sang toi (do choi) va kich thuoc vat the. Dap an dung: \"Anh sang, do sang toi, mau sac, kich thuoc\"."
  },
  {
    "id": 45,
    "question": "Những gì ảnh hưởng đến việc lựa chọn các phương pháp thu thập yêu cầu người dùng?",
    "chapter": 5,
    "options": [
      "Địa điểm và khả năng tiếp cận các bên liên quan",
      "Quy trình",
      "nguyên tắc và chuẩn thu thập thông tin",
      "Nguồn thông tin cần thu thập",
      "Loại thông tin muốn thu thập",
      "Nhóm tập trung"
    ],
    "correctAnswers": [
      0,
      3,
      4
    ],
    "explanation": "Cau 45: Tu vao viec ban muon hoi ai (Nguon), hoi de lam gi (Loai thong tin dinh luong/dinh tinh), va hoi o dau (Dia ly), ban se chon Phong van, Khao sat hay Quan sat. Dap an dung: \"Loai thong tin muon thu thap\", \"Nguon thong tin can thu thap\", \"Dia diem va kha nang tiep can cac ben lien quan\"."
  },
  {
    "id": 46,
    "question": "Yếu tố nào khó để nhận biết nhất đối với hệ thống thị giác?",
    "chapter": 2,
    "options": [
      "Biểu tượng",
      "Góc nhìn",
      "Họa tiết",
      "Màu sắc",
      "Hình dạng"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 46: Hoa tiet (Texture) the hien do gon ghe, nham cua be mat. Thong qua giao dien man hinh phang 2D, nguoi dung rat kho nhan dien chinh xac hoa tiet so voi viec so bang Xuc giac. Dap an dung: \"Hoa tiet\"."
  },
  {
    "id": 47,
    "question": "Những yếu tố nào sau đây ảnh hưởng đến nhận thức trực quan của thị giác?",
    "chapter": 2,
    "options": [
      "Khoảng cách",
      "Kích thước và chiều cao",
      "Sự thay đổi của độ sáng",
      "Sự chuyển động",
      "Độ tương phản"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Cau 47: Nhan thuc truc quan ve hinh hoc cua thi giac duoc dinh hinh manh me nhat boi khoang cach xa gan va kich thuoc khong gian cua vat the (luat phoi canh). Dap an dung: \"Khoang cach\", \"Kich thuoc va chieu cao\"."
  },
  {
    "id": 48,
    "question": "Thời gian lưu lại thông tin của bộ nhớ cảm nhận thính giác là bao nhiêu?",
    "chapter": 2,
    "options": [
      "Khoảng 500ms",
      "Khoảng 200ms",
      "Khoảng 700ms",
      "Khoảng 1200ms",
      "Khoảng 1500ms"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 48: Bo nho am thanh (Echoic memory) ton tai lau hon bo nho thi giac mot chut, thuong giu lai tieng vang trong khoang 1,5 den vai giay de nao kip xu ly ngu nghia. Dap an dung: \"Khoang 1500ms\"."
  },
  {
    "id": 49,
    "question": "Da người có thể cảm nhận được các kích thích nào sau đây?",
    "chapter": 2,
    "options": [
      "Sức căng do áp suất",
      "Đáp ứng nhanh và chậm (cơ học)",
      "Tiếng ồn",
      "Nhiệt",
      "Ánh sáng"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Cau 49: Da (xuc giac) co cac thu the cam nhan nhiet do (nong/lanh), cam nhan ap luc de len da, va cac thu the phan ung voi va cham co hoc. Dap an dung: \"Suc cang do ap suat\", \"Dap ung nhanh va cham (co hoc)\", \"Nhiet\"."
  },
  {
    "id": 50,
    "question": "Nguyên tắc nào sau đây không phải là nguyên tắc thiết kế của Shneiderman?",
    "chapter": 7,
    "options": [
      "Tính ánh xạ",
      "Thiết kế hội thoại đảm bảo tính đóng",
      "Cung cấp phím tắt",
      "Cung cấp thông tin phản hồi cho tất cả các hành động",
      "Tính nhất quán"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cau 50: \"Tinh anh xa\" (Mapping) la nguyen tac noi tieng cua Donald Norman. Shneiderman noi tieng voi bo \"8 quy tac vang\" (8 Golden Rules) khong co Mapping. Dap an dung: \"Tinh anh xa\"."
  },
  {
    "id": 51,
    "question": "Yêu cầu người dùng được hình dung theo 3 mức cao dần là:",
    "chapter": 4,
    "options": [
      "Hài lòng >> Chức năng >> Sử dụng",
      "Chức năng >> Hài lòng >> Sử dụng",
      "Hài lòng >> Sử dụng >> Chức năng",
      "Chức năng >> Sử dụng >> Hài lòng",
      "Sử dụng >> Chức năng >> Hài lòng"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 51: Nhu da giai thich o cau 39, he thong truoc tien phai lam duoc viec (Chuc nang), sau do phai de thao tac (Su dung duoc), va cuoi cung la mang lai niem vui (Hai long). Dap an dung: \"Chuc nang >> Su dung >> Hai long\"."
  },
  {
    "id": 52,
    "question": "Thể thống nhất xuất hiện dựa vào tính tương tự khi nào trong các trường hợp sau đây?",
    "chapter": 2,
    "options": [
      "Khi các đối tượng có một phần tử được nhận biết như là một sự nối dài của phần tử khác",
      "Khi đối tượng có các hình ảnh xuất hiện một cách không đầy đủ",
      "Khi các đối tượng phân biệt có các thuộc tính trực quan tương tự nhau",
      "Khi các đối tượng chứa các thông tin tương tự với các thông tin đã biết",
      "Khi các đối tượng gần nhau"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 52: Theo Luat dong dang (Law of Similarity) cua Gestalt, nao bo tu dong gom nhom cac phan tu co chung mau sac, kich thuoc, hinh dang thanh mot \"the thong nhat\". Dap an dung: \"Khi cac doi tuong phan biet co cac thuoc tinh truc quan tuong tu nhau\"."
  },
  {
    "id": 53,
    "question": "Lập luận phản chứng là:",
    "chapter": 2,
    "options": [
      "Từ những giả thiết có sẵn dẫn dắt để đi tới điều cần chứng minh là đúng",
      "Sử dụng toán học để chứng minh luận điểm",
      "Dùng những chứng cứ thu thập trong quá trình quan sát để đi tới kết luận",
      "Tư duy bằng các phương pháp luận giữa con người và thế giới tự nhiên",
      "Tư duy trong trường hợp đối lập so với luận điểm cần chứng minh, từ đó chứng minh điều tư duy là sai dẫn tới điều cần chứng minh là đúng"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 53: Lap luan phan chung (Reductio ad absurdum) la gia su nguoc lai dieu can chung minh. Neu cai gia su do vo ly/sai, thi dieu goc ban dau phai la dung."
  },
  {
    "id": 54,
    "question": "Khi xây dựng hệ tương tác, cần quan tâm đến những khía cạnh nào của các nhiệm vụ cần yêu cầu hệ thống thực hiện?",
    "chapter": 6,
    "options": [
      "Các bước cài đặt nhiệm vụ",
      "Độ phức tạp về mặt tính toán của nhiệm vụ",
      "Số lượng môđun cần thiết để cài đặt nhiệm vụ",
      "Bộ nhớ máy tính cần thiết để thực hiện nhiệm vụ",
      "Cách thức tổ chức và môi trường xung quanh của nhiệm vụ đó"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 54: Doi voi goc do nguoi thiet ke, do phuc tap cua \"Task\" (nhung nguoi dung phai lam bao nhieu thao tac, suy nghi bao nhieu buoc) la quan trong nhat de tinh gon UI. Dap an dung: \"Do phuc tap ve mat tinh toan cua nhiem vu\"."
  },
  {
    "id": 55,
    "question": "Phát biểu nào về hệ thống thính giác của con người sau đây là sai?",
    "chapter": 2,
    "options": [
      "Ngưỡng nghe là 0 - 130dB",
      "Khi cảm nhận thông tin, hệ thống thính giác cần lọc bỏ tạp âm để giữ lại thông tin cần thiết",
      "Con người có thể nghe được những âm thanh trong khoảng 15Hz đến 20 KHz",
      "Tần số khác nhau kích thích vùng cảm nhận khác nhau của não gây xung động khác nhau",
      "Khả năng tiếp nhận của hệ thống thính giác phụ thuộc vào các yếu tố: độ vang, âm sắc, tần số"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 55: Tai nguoi khoe manh nghe duoc chuan trong dai tu 20Hz den 20kHz. Viec ghi 15Hz la sai ve mat sinh hoc co ban. Dap an dung (cau SAI): \"Con nguoi co the nghe duoc nhung am thanh trong khoang 15Hz den 20 KHz\"."
  },
  {
    "id": 56,
    "question": "Điều nào sau đây đúng khi nói về hiệu ứng Muller-Lyer?",
    "chapter": 2,
    "options": [
      "Hiệu ứng Muller-Lyer không làm thay đổi cảm nhận về kích thước của vật được quan sát",
      "Hiệu ứng Muller-Lyer làm méo hình dạng của vật được quan sát",
      "Hiệu ứng Muller-Lyer làm thay đổi cảm nhận về kích thước và hình dạng của vật được quan sát",
      "Hiệu ứng Muller-Lyer làm biến đổi liên tục màu sắc của vật được quan sát",
      "Hiệu ứng Muller-Lyer làm người quan sát cảm nhận kích thước của vật được quan sát lớn hơn kích thước thật"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 56: Ao anh quang hoc Muller-Lyer gom 2 doan thang bang nhau, nhung do chieu cua mui ten o 2 dau khac nhau nen nao bo bi lua, cam nhan mot duong dai hon duong kia. Dap an dung: \"Hieu ung Muller-Lyer lam nguoi quan sat cam nhan kich thuoc cua vat duoc quan sat lon hon kich thuoc that\"."
  },
  {
    "id": 57,
    "question": "Câu nào sau đây là sai khi nói về bộ nhớ dài hạn?",
    "chapter": 2,
    "options": [
      "Dùng để lưu trữ các thông tin của con người",
      "Bộ nhớ dài hạn thường được xử lý thông qua 3 giai đoạn",
      "Có 2 loại bộ nhớ dài hạn đó là: bộ nhớ phân đoạn và bộ nhớ ngữ nghĩa",
      "Khả năng lưu trữ của bộ nhớ dài hạn là vô hạn",
      "Thời gian nhớ lại của các thông tin ít sử dụng thường lâu hơn các thông tin hay sử dụng"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 57: He thong bo nho noi chung moi chia 3 giai doan (Cam nhan -> Ngan han -> Dai han). Con ban than bo nho dai han chia lam cac loai cau truc luu tru (phan doan, su kien), khong chia \"3 giai doan xu ly\". Dap an dung (cau SAI): \"Bo nho dai han thuong duoc xu ly thong qua 3 giai doan\"."
  },
  {
    "id": 58,
    "question": "Các lỗi nào sau đây là sơ suất?",
    "chapter": 2,
    "options": [
      "Người dùng biết dấu X trên cửa sổ là đóng cửa sổ nhưng lại ấn nhầm dấu bên cạnh \"_\" là ẩn cửa sổ",
      "Người dùng có suy nghĩ Ctrl+S là thoát ứng dụng Word",
      "Người dùng dùng Microsoft Word nghĩ phím nhanh Ctrl+C là dán đoạn văn bản",
      "Người dùng nghĩ copy cả đoạn văn bản trong Word là tổ hợp phím Ctrl+X",
      "Người dùng có ý định ấn vào nút thu nhỏ cửa sổ nhưng lại ấn nhầm sang nút đóng cửa sổ"
    ],
    "correctAnswers": [
      0,
      4
    ],
    "explanation": "Cau 58: Loi So suat (Slips) la khi ban HIEU DUNG muc tieu nhung THAO TAC SAI (bam nham truot tay). Dap an dung: \"Nguoi dung biet dau X la cua so nhung lai an nham dau '-'\", \"Nguoi dung dinh an nut thu nho nhung lai an nham nut dong\"."
  },
  {
    "id": 59,
    "question": "Các trường hợp nào sau đây là được coi là sai sót của người dùng?",
    "chapter": 2,
    "options": [
      "Người dùng dùng Microsoft Word nghĩ phím nhanh Ctrl+C là dán đoạn văn bản",
      "Người dùng nhầm tưởng nút lưu văn bản là nút in văn bản",
      "Người dùng có suy nghĩ Ctrl+X là thoát ứng dụng Word",
      "Người dùng biết là nhấn Ctrl+K để share tài liệu nhưng lại ấn nhầm Ctrl+O",
      "Người dùng không biết dùng tổ hợp phím tắt nào để copy cả đoạn văn bản trong Word"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Cau 59: Loi Sai sot (Mistakes) la do nao bo HIEU SAI quy tac hoat dong cua he thong ngay tu dau. Dap an dung: \"Nguoi dung nghi phim Ctrl+C la dan doan van ban\", \"Nguoi dung nham tuong nut luu van ban la nut in\"."
  },
  {
    "id": 60,
    "question": "Đâu là ưu điểm khi sử dụng cách tương tác bằng ngôn ngữ tự nhiên?",
    "chapter": 3,
    "options": [
      "Phù hợp với các công nghệ hiện tại",
      "Thích hợp với tất cả các thiết bị điện tử hiện tại",
      "Người dùng thoải mái đối thoại ra lệnh cho hệ thống như đối tượng con người thực sự",
      "Con người không phải học một cú pháp lệnh hay một phương pháp hoạt động của hệ tương tác",
      "Sử dụng ngôn ngữ tự nhiên luôn luôn thu hút người dùng hơn là lựa chọn qua màn hình hiển thị"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 60: Ngon ngu tu nhien (Voice/Chat AI) dung chinh ngon ngu me de cua ban, nen duong cong hoc tap gan nhu bang 0, khong can ghi nho ma lenh phuc tap. Dap an dung: \"Con nguoi khong phai hoc mot cu phap lenh hay mot phuong phap hoat dong cua he tuong tac\"."
  },
  {
    "id": 61,
    "question": "Kênh vào của hệ thống xử lý thông tin của con người là:",
    "chapter": 2,
    "options": [
      "Các cơ quan tiếp nhận các kích thích từ môi trường bên ngoài",
      "Kênh ra",
      "Bất cứ bộ phận nào của cơ thể thực hiện việc hồi đáp các kích thích từ môi trường bên ngoài",
      "Các giác quan",
      "Các loại bộ nhớ"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cau 61: Mo phong theo may tinh, Input cua con nguoi la 5 giac quan. Dap an dung: \"Cac co quan tiep nhan cac kich thich tu moi truong ben ngoai\"."
  },
  {
    "id": 62,
    "question": "Kênh ra của hệ thống xử lý thông tin của con người là:",
    "chapter": 2,
    "options": [
      "Các loại bộ nhớ",
      "Kênh vào",
      "Các giác quan",
      "Các cơ quan tiếp nhận các kích thích từ môi trường bên ngoài",
      "Bất cứ bộ phận nào của cơ thể thực hiện việc hồi đáp các kích thích từ môi trường bên ngoài"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 62: Output cua con nguoi la hanh dong tay chan hoac loi noi. Dap an dung: \"Bat cu bo phan nao cua co the thuc hien viec hoi dap cac kich thich tu moi truong ben ngoai\"."
  },
  {
    "id": 63,
    "question": "Đâu là mô tả sai về bộ nhớ ngắn hạn:",
    "chapter": 2,
    "options": [
      "Khả năng hạn chế",
      "Thông tin của bộ nhớ ngắn hạn được lấy từ bộ nhớ cảm nhận",
      "Thời gian truy cập nhanh",
      "Thông tin từ bộ nhớ ngắn hạn bị quên hoặc được chuyển dịch sang bộ nhớ cảm nhận",
      "Hư hỏng nhanh"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 63: Dong thong tin di mot chieu: Cam nhan -> Ngan han -> Dai han. Tu ngan han no se \"chuyen sang bo nho dai han\" hoac bi quen, KHONG BAO GIO quay nguoc lui ve bo nho cam nhan. Dap an dung (cau SAI): \"Thong tin tu bo nho ngan han bi quen hoac duoc chuyen dich sang bo nho cam nhan\"."
  },
  {
    "id": 64,
    "question": "Đáp án nào miêu tả đúng tính trực quan trong nguyên tắc thiết kế giao diện của Norman?",
    "chapter": 7,
    "options": [
      "Người dùng có thấy các chức năng của hệ thống cung cấp hay không",
      "Icon của sản phẩm phải bắt mắt",
      "Các icon trên giao diện phải thể hiện được các chức năng",
      "Giao diện của sản phẩm phải rực rỡ",
      "Giao diện tối giản nhất là giao diện tốt nhất"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cau 64: Nguyen tac Truc quan (Visibility) cua Norman yeu cau cac cong cu, nut bam phai hien thi ro rang tren man hinh de user biet he thong co the lam duoc gi, thay vi giau chung vao cac menu sau. Dap an dung: \"Nguoi dung co thay cac chuc nang cua he thong cung cap hay khong\"."
  },
  {
    "id": 65,
    "question": "Tính năng nào sau đây không phải là cung cấp thông tin phản hồi cho hành động người dùng?",
    "chapter": 7,
    "options": [
      "Khi có cuộc gọi đến, ngắt các âm thanh từ các ứng dụng như media player đang hoạt động ... và ưu tiên dành cho âm cuộc gọi",
      "Yêu cầu xác nhận lại khi xóa một thứ",
      "Hiển thị thông báo lỗi cho người dùng",
      "Sau khi nhấn nút, nút bị mờ đi",
      "Sau khi nhấn nút, có tiếng kêu phát ra"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cau 65: Viec ngat nhac khi co cuoc goi la do HDH dien thoai chu dong \"cuop quyen\" de uu tien tac vu, no khong phai la \"Feedback\" tra ve tu mot thao tac bam nut cua nguoi dung. Dap an dung: \"Khi co cuoc goi den, ngat cac am thanh tu cac ung dung nhu media player...\"."
  },
  {
    "id": 66,
    "question": "Tính phản hồi được thể hiện trong ví dụ nào sau đây?",
    "chapter": 7,
    "options": [
      "Sau khi nhấn nút, nút bị mờ đi",
      "Hiển thị thông báo lỗi cho người dùng",
      "Yêu cầu xác nhận lại khi xóa một thứ",
      "Sau khi nhấn nút, có tiếng kêu phát ra",
      "Khi có cuộc gọi đến, ngắt các âm thanh từ các ứng dụng như media player đang hoạt động ... và ưu tiên dành cho âm cuộc gọi"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Cau 66: Phan hoi (Feedback) la tin hieu (am thanh, doi mau do hoa, van ban popup) gui ve cho nguoi dung NGAY LAP TUC sau khi ho thao tac de xac nhan he thong da nhan lenh. Dap an dung: \"Sau khi nhan nut, co tieng keu phat ra\", \"Sau khi nhan nut, nut bi mo di\", \"Hien thi thong bao loi cho nguoi dung\"."
  },
  {
    "id": 67,
    "question": "Tính thế chỗ được thể hiện trong ví dụ nào sau đây?",
    "chapter": 7,
    "options": [
      "Biểu tượng hình tin nhắn ở giao diện lại khác nhau",
      "Người dùng vuốt thanh cuộn lên trên mà màn hình lại di chuyển xuống dưới",
      "Khi có cuộc gọi đến, điện thoại ngắt các âm thanh từ các ứng dụng đang hoạt động ... và ưu tiên dành cho âm cuộc gọi",
      "Khi có cuộc gọi đến, nút kéo trên thanh cuộn nằm ở vị trí bên trái, nổi và có hình mũi tên hướng sang phải",
      "Nút gọi đổi từ màu xanh sang màu đỏ sau khi nhấn"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 67: Affordance (Goi y/The cho) la tinh chat cua thiet ke tu no mach bao nguoi dung cach su dung. Cai mui ten chi sang phai GOI Y ro rang rang \"ban phai vuot/keo toi sang phai di\". Dap an dung: \"Khi co cuoc goi den, nut keo tren thanh cuon nam o vi tri ben trai, noi va co hinh mui ten huong sang phai\"."
  },
  {
    "id": 68,
    "question": "Tính nhất quán bị vi phạm trong ví dụ nào sau đây?",
    "chapter": 7,
    "options": [
      "Nút gọi đổi từ màu xanh sang màu đỏ sau khi nhấn",
      "Biểu tượng hình tin nhắn ở hai màn hình giao diện của cùng ứng dụng lại khác nhau",
      "Người dùng vuốt thanh cuộn lên trên mà màn hình lại di chuyển xuống dưới",
      "Khi có cuộc gọi đến, điện thoại ngắt các âm thanh từ các ứng dụng như media player đang hoạt động ... và ưu tiên dành cho âm cuộc gọi",
      "Khi có cuộc gọi đến, nút kéo trên thanh cuộn nằm ở vị trí bên trái, nổi và có hình mũi tên hướng sang phải"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 68: Tinh nhat quan (Consistency) yeu cau cac icon, mau sac, font chu phai dong bo xuyen suot ung dung. Cung chuc nang tin nhan ma thiet ke 2 icon khac nhau se gay boi roi. Dap an dung: \"Bieu tuong hinh tin nhan o hai man hinh giao dien cua cung ung dung lai khac nhau\"."
  },
  {
    "id": 69,
    "question": "Tính ánh xạ bị vi phạm trong ví dụ nào sau đây?",
    "chapter": 7,
    "options": [
      "Nút gọi đổi từ màu xanh sang màu đỏ sau khi nhấn",
      "Biểu tượng hình tin nhắn ở giao diện lại khác nhau",
      "Khi có cuộc gọi đến, nút kéo trên thanh cuộn nằm ở vị trí bên trái, nổi và có hình mũi tên hướng sang phải",
      "Người dùng vuốt thanh cuộn lên trên mà màn hình lại di chuyển xuống dưới",
      "Khi có cuộc gọi đến, điện thoại ngắt các âm thanh từ các ứng dụng như media player đang hoạt động ... và ưu tiên dành cho âm cuộc gọi"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 69: Anh xa la moi lien he tu nhien giua bang dieu khien va ket qua. Vuot tay len (Up) thi man hinh phai cuon noi dung len (Up). Vuot len ma noi dung troi xuong la anh xa sai. Dap an dung: \"Nguoi dung vuot thanh cuon len tren ma man hinh lai di chuyen xuong duoi\"."
  },
  {
    "id": 70,
    "question": "Bước nào sau đây là một trong sáu bước thực hiện theo USTM? (1)",
    "chapter": 5,
    "options": [
      "Xác định và mô tả các nhóm làm việc, kể cả các nhóm chính thức và không chính thức",
      "Phân tích hệ thống xã hội",
      "Thiết lập môi trường bên ngoài",
      "Phân tích hệ thống kỹ thuật",
      "Liệt kê các nhiệm vụ chính"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cau 70: USTM (User Skills and Task Match) tap trung vao phan tich quy trinh lam viec va ky nang. Buoc chi dich danh cac nhom lam viec thuoc ve quy trinh USTM. Dap an dung: \"Xac dinh va mo ta cac nhom lam viec, ke ca cac nhom chinh thuc va khong chinh thuc\"."
  },
  {
    "id": 74,
    "question": "Quy tắc vàng của thiết kế giao diện hướng người dùng là gì?",
    "chapter": 4,
    "options": [
      "Điều chỉnh người dùng",
      "Thích nghi với người dùng",
      "Làm người dùng hài lòng",
      "Phục vụ người dùng",
      "Hiểu người dùng"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 74: User-Centered Design (UCD) co cham ngon so 1: \"Know your user\" (Thau hieu nguoi dung). Moi quyet dinh thiet ke deu khoi nguon tu viec hieu ro Persona, Needs va Pain points cua ho. Dap an dung: \"Hieu nguoi dung\"."
  },
  {
    "id": 75,
    "question": "Cái gì không phải nguyên tắc thiết kế lấy người dùng làm trung tâm (UCD)?",
    "chapter": 4,
    "options": [
      "Quan sát",
      "Kiểm thử tính dùng được",
      "Nhóm tập trung",
      "Phỏng vấn",
      "Đặt câu hỏi"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 75: Phong van la mot ky thuat thu thap thong tin nho le, khong phai la mot \"nguyen tac triet ly\" thiet ke bao trum cua he thong UCD. Dap an dung: \"Phong van\"."
  },
  {
    "id": 76,
    "question": "Bước nào sau đây không phải là một trong tám bước thực hiện theo OSTA?",
    "chapter": 5,
    "options": [
      "Xác định và mô tả các cặp nhiệm vụ - đối tượng",
      "Liệt kê các nhiệm vụ chính",
      "Đặc tả yêu cầu về mức độ hiệu năng thỏa mãn",
      "Phân tích hệ thống xã hội: vai trò, đặc tính, chất lượng",
      "Đặc tả yêu cầu về chức năng, tính dùng được, tính chấp nhận được cho hệ thống kỹ thuật mới"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cau 76: Trong quy trinh 8 buoc cua OSTA, phan tich nhiem vu tap trung vao input/output va he thong chuc nang, khong co khai niem tao \"cap nhiem vu - doi tuong\" (day thuoc ve mo hinh hoa OOP). Dap an dung: \"Xac dinh va mo ta cac cap nhiem vu - doi tuong\"."
  },
  {
    "id": 78,
    "question": "Bước nào sau đây là một trong bảy bước thực hiện theo SSM?",
    "chapter": 5,
    "options": [
      "Đặc tả yêu cầu về mức độ hiệu năng thỏa mãn",
      "Phân tích hệ thống kỹ thuật",
      "Ghi nhận các vấn đề và bắt đầu phân tích",
      "Phân tích hệ thống xã hội",
      "Đặc tả yêu cầu về chức năng, tính dùng được, tính chấp nhận được cho hệ thống kỹ thuật mới"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 78: SSM (Soft Systems Methodology) la phuong phap luan giai quyet cac van de mo ho. Buoc dau tien luon la \"Nhan thuc/ghi nhan van de\" chua cau truc. Dap an dung: \"Ghi nhan cac van de va bat dau phan tich\"."
  },
  {
    "id": 79,
    "question": "Bước nào sau đây là một trong sáu bước thực hiện theo USTM? (2)",
    "chapter": 5,
    "options": [
      "Định nghĩa mô hình khái niệm",
      "Ghi nhận các vấn đề và bắt đầu phân tích",
      "Mô tả ngữ cảnh tổ chức",
      "Xác định các thay đổi hữu ích cho toàn bộ hệ thống",
      "Tạo lập định nghĩa gốc từ quan điểm của một bên liên quan bất kỳ"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 79: Ky thuat USTM co buoc thiet yeu la phai thau hieu \"Ngu canh to chuc\" noi nguoi dung dang lam viec (van hoa cong ty, quy trinh quan ly). Dap an dung: \"Mo ta ngu canh to chuc\"."
  },
  {
    "id": 82,
    "question": "Đâu là nhược điểm chính của kỹ thuật tạo mẫu thử phác thảo (sketches):",
    "chapter": 8,
    "options": [
      "Được tạo ra với chi phí thấp",
      "Không thể hình dung trình tự tương tác với hệ thống",
      "Quá phức tạp và dài dòng",
      "Không thể hình dung cách bố trí nội dung tương tác",
      "Không thể tái sử dụng"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 82: Phac thao tren giay (Sketches) chi la cac buc ve tinh. Nguoi xem khong the bam hay chuyen trang nen khong hieu duoc \"luong/Flow\" thao tac. Dap an dung: \"Khong the hinh dung trinh tu tuong tac voi he thong\"."
  },
  {
    "id": 83,
    "question": "Người dùng tiềm năng của một hệ tương tác được mô hình hóa bởi:",
    "chapter": 1,
    "options": [
      "Tri thức, hành vi, bộ nhớ, cảm xúc, năng lực, năng suất",
      "Tri thức, hành vi, kinh nghiệm",
      "Tri thức, hành vi, năng lực, năng suất, công thái học",
      "Tri thức, hành vi, năng lực, năng suất, sự tập trung",
      "Tri thức, hành vi, sự tập trung"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 83: De so hoa mot \"Persona\", he thong thong tin mo hinh hoa ho qua khoi luong tri thuc ho co, thoi quen hanh vi, nang luc vat ly/nhan thuc, va do tap trung (Attention) khi lam task. Dap an dung: \"Tri thuc, hanh vi, nang luc, nang suat, su tap trung\"."
  },
  {
    "id": 84,
    "question": "Nhận định nào SAI về kỹ thuật đặt câu hỏi ?",
    "chapter": 5,
    "options": [
      "Không nên sử dụng kỹ thuật đặt câu hỏi phối hợp với các kỹ thuật khác",
      "Chỉ nên thiết kế câu hỏi mở cho người dùng",
      "Đặt câu hỏi để tìm ra thông tin người dùng",
      "Câu hỏi nên thiết kế ở dạng đóng",
      "Dùng câu hỏi đóng để chốt yêu cầu, câu hỏi mở để tìm hiểu nhu cầu"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Cau 84: Mot bang hoi tot phai mix ca cau hoi Dong va Mo. Dac biet, viec thu thap thong tin tot nhat khi phoi hop Cau hoi voi Phong van hoac Quan sat (khong dung don doc). Dap an dung (2 cau SAI): \"Khong nen su dung ky thuat dat cau hoi phoi hop voi cac ky thuat khac\", \"Chi nen thiet ke cau hoi mo cho nguoi dung\"."
  },
  {
    "id": 86,
    "question": "Kỹ thuật nào không phải đánh giá hình thành?",
    "chapter": 9,
    "options": [
      "Cognitive walkthrough",
      "Logging and tracking",
      "Cooperative evaluation",
      "Pencil and paper mock-ups",
      "Scenario-based evaluation"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 86: Formative Evaluation lam o GIAI DOAN DAU (thiet ke mau giay, Cognitive walkthrough). Logging & Tracking la theo doi log he thong khi app DA CHAY (thuoc ve Summative - Tong ket). Dap an dung: \"Logging and tracking\"."
  },
  {
    "id": 88,
    "question": "2 đặc trưng của kiểu tương tác dòng lệnh là:",
    "chapter": 2,
    "options": [
      "Sai sót thấp",
      "Dễ thích ứng dễ sửa lỗi",
      "Không tốn công đào tạo",
      "Thích hợp với nhiệm vụ có tính lặp lại; Thích hợp với những người có kinh nghiệm"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 88: CLI manh me vi ban co the viet script cho no chay tu dong (lap lai), va coder/sysadmin (nguoi co kinh nghiem) thao tac se rat nhanh khong can tim chuot. Dap an dung: \"Thich hop voi nhiem vu co tinh lap lai; Thich hop voi nhung nguoi co kinh nghiem\"."
  },
  {
    "id": 89,
    "question": "Khả năng của con người bị giới hạn bởi:",
    "chapter": 2,
    "options": [
      "Hưng phấn",
      "Cảm xúc, sức khỏe",
      "Cảm xúc, trạng thái",
      "Môi trường tương tác",
      "Phương, chiều, vị trí tương đối của đầu người so với trọng tâm trái đất"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 89: Duoi goc do sinh hoc nhan thuc, kha nang xu ly thong tin bi sut giam cuc manh khi con nguoi gap cac rao can ve tam ly (cang thang, buc tuc, met moi trang thai). Dap an dung: \"Cam xuc, trang thai\"."
  },
  {
    "id": 91,
    "question": "Kỹ thuật nào được sử dụng để đánh giá hình thành?",
    "chapter": 9,
    "options": [
      "Retrospective testing",
      "Cognitive walkthrough",
      "Logging and tracking",
      "Lab-based techniques",
      "Remote testing"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 91: Cognitive Walkthrough (Duyet qua nhan thuc) la chuyen gia UX tu dat minh vao vai user tung buoc tren ban phac thao som -> No la Danh gia Hinh thanh (Early stage). Dap an dung: \"Cognitive walkthrough\"."
  },
  {
    "id": 93,
    "question": "Kỹ thuật nào không phải kỹ thuật đánh giá sơ kết?",
    "chapter": 9,
    "options": [
      "Retrospective testing",
      "Cognitive walkthrough",
      "Lab-based techniques",
      "Remote testing",
      "Logging and tracking"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 93: Cognitive Walkthrough la Danh gia Hinh thanh, khong phai Danh gia So ket (Summative). Dap an dung: \"Cognitive walkthrough\"."
  },
  {
    "id": 94,
    "question": "Để xây dựng thành công các hệ thống tương tác, chúng ta cần biết về:",
    "chapter": 6,
    "options": [
      "Các ràng buộc kỹ thuật của môi trường trong đó hệ thống thực hiện nhiệm vụ",
      "khả năng tâm sinh lý của người dùng hệ thống",
      "các khía cạnh tổ chức và môi trường",
      "Khả năng tâm lý",
      "Trình độ của người dùng hệ thống",
      "Các thiết bị hỗ trợ tương tác",
      "Những nhiệm vụ cần yêu cầu hệ thống thực hiện: loại nhiệm vụ"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      3,
      6
    ],
    "explanation": "Cau 94: Thiet ke tot phai can bang \"Tam giac\": User (Tam ly con nguoi), Task (Viec ho muon lam) va Context/Environment (Rang buoc he thong). Dap an dung: \"Kha nang tam/sinh ly cua nguoi dung\", \"Nhiem vu can he thong thuc hien\", \"Cac rang buoc ky thuat cua moi truong\"."
  },
  {
    "id": 95,
    "question": "Bước nào sau đây là một trong tám bước thực hiện theo OSTA?",
    "chapter": 5,
    "options": [
      "Củng cố và kiểm tra các yêu cầu",
      "Xác định các nhu cầu của các bên liên quan",
      "Xác định và mô tả các nhóm làm việc, kể cả các nhóm chính thức và không chính thức",
      "Xác định và mô tả các cặp nhiệm vụ - đối tượng",
      "Xác định đầu vào của các nhiệm vụ (bên ngoài hệ thống)"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 95: OSTA rat chu trong vao phan ra Task, quy dinh ro buoc phai lam ro Input (dau vao) cua nhiem vu do den tu nguon ngoai nao. Dap an dung: \"Xac dinh dau vao cua cac nhiem vu (ben ngoai he thong)\"."
  },
  {
    "id": 96,
    "question": "Giao diện nào sau đây là giao diện người dùng hữu cơ?",
    "chapter": 2,
    "options": [
      "Chuột chơi game được thiết kế hình dạng đặc biệt",
      "Tai nghe có thể gập lại làm vòng đeo tay",
      "Ô tô có khả năng thay đổi hình dạng thành robot",
      "Máy tính bảng dẻo nhận đầu vào từ các hành động miết, gập",
      "Máy tính có thể tách rời bàn phím để tạo thành một máy tính bảng"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 96: Organic User Interface (OUI) la tuong lai giao dien, dung vat lieu thay doi hinh dang vat ly (deo, dan hoi) lam man hinh dieu khien. Dap an dung: \"May tinh bang deo nhan dau vao tu cac hanh dong miet, gap\"."
  },
  {
    "id": 97,
    "question": "WIMP là viết tắt của:",
    "chapter": 3,
    "options": [
      "Window, Interface, Mouse, Pointer",
      "Widget, Icons, Menu, Pointer",
      "Windows, Icons, Menus, Pointer",
      "Window, Interaction, Mouse, Pointer",
      "Widget, Interaction, Menu, Plugin"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 97: Mo thuc WIMP la nen tang cua he dieu hanh Desktop hien dai: Cac cua so (Window), Bieu tuong (Icon), Menu va con tro chuot (Pointer). Dap an dung: \"Windows, Icons, Menus, Pointer\"."
  },
  {
    "id": 98,
    "question": "Có những loại quy trình phỏng vấn nào?",
    "chapter": 5,
    "options": [
      "Không cấu trúc",
      "Bán cấu trúc",
      "Nhóm tập trung",
      "Đặt câu hỏi",
      "Có cấu trúc"
    ],
    "correctAnswers": [
      0,
      1,
      4
    ],
    "explanation": "Cau 98: Phong van duoc phan loai bang do tu do cua kich ban hoi: Tuan thu 100% list (Co cau truc); Tro chuyen tu do (Khong cau truc); va Ket hop ca hai (Ban cau truc). Dap an dung: \"Co cau truc\", \"Khong cau truc\", \"Ban cau truc\"."
  },
  {
    "id": 99,
    "question": "Đâu là các mô hình yêu cầu người dùng?",
    "chapter": 5,
    "options": [
      "Quan sát tự nhiên",
      "Phân tích tài liệu",
      "Phỏng vấn",
      "USTM",
      "OSTA"
    ],
    "correctAnswers": [
      3,
      4
    ],
    "explanation": "Cau 99: OSTA va USTM cung cap Frame-work/Mo hinh toan hoc, phan cap de to chuc cac Requirement da thu thap duoc. Dap an dung: \"OSTA\", \"USTM\"."
  },
  {
    "id": 100,
    "question": "Đâu không phải là ưu điểm của kiểu giao tiếp điền mẫu (form fill-in) ?",
    "chapter": 3,
    "options": [
      "Không cần nhiều giải thích",
      "Giúp người dùng dễ hình dung mối quan hệ các dữ liệu do cùng hiển thị trên cùng một màn hình",
      "Phù hợp cho chuyên gia do cách nhập trực tiếp và có nhiều tùy chọn cho các câu lệnh trong từng bối cảnh nhất định",
      "Hạn chế lỗi do có gán nhãn và hạn chế miền giá trị nhập vào",
      "Dữ liệu nhanh chóng được nhập vào các ô định sẵn"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 100: Dien Form duoc tao ra cho nguoi moi (Novice) vi no co cac o gan nhan don co san. Chuyen gia khong thich Form vi no dai dong, ho thich go ma lenh (CLI) de tuy bien manh hon. Dap an dung (KHONG PHAI uu diem): \"Phu hop cho chuyen gia do cach nhap truc tiep va co nhieu tuy chon cho cac cau lenh trong tung boi canh nhat dinh\"."
  },
  {
    "id": 101,
    "question": "Điều nào sau đây là không đúng khi xây dựng danh mục hỏi đáp cho người dùng?",
    "chapter": 3,
    "options": [
      "Nên giữ cách trình bày câu trả lời ngắn gọn, từ 25 đến 40 ký tự căn lề trái",
      "Nếu người dùng cần tương tác cần cho phép người dùng trả lời ngắn gọn",
      "Tại một thời điểm, chỉ nên đưa ra một ý tưởng hoặc một câu hỏi",
      "Cho phép người dùng quan sát các câu trả lời trước đó để tiện cho quá trình giao tiếp với máy tính",
      "Câu hỏi dạng mở, để người dùng trình bày được những gì mình mong muốn"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 101: Khi may tinh doi thoai hoi dap voi nguoi dung tren man hinh console, CAM ky dung cau hoi mo vi he thong rat kho xu ly Data tu do. Phai dung cau hoi Dong/Menu chon san. Dap an dung (cau SAI): \"Cau hoi dang mo, de nguoi dung trinh bay duoc nhung gi minh mong muon\"."
  },
  {
    "id": 102,
    "question": "Dau khong phai la khuyen cao khi xay dung menu tuyen tinh?",
    "chapter": 3,
    "options": [
      "Nguoi dung khong the hoan tac.",
      "Nguoi dung co the tuy y ket thuc hoac bat dau chuoi hanh dong.",
      "Nguoi dung duoc gioi thieu nhieu lua chon de khop voi nhung gi nguoi dung mong doi.",
      "Nguoi dung co the quay lai man hinh truoc do.",
      "Nguoi dung nhan biet duoc ho dang thuc hien den buoc nao trong chuoi hanh dong."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Menu tuyen tinh (Linear Menu) dan dat nguoi dung qua mot chuoi cac buoc co dinh. Khuyen cao thiet ke cot loi la phai luon cho phep nguoi dung kiem soat quy trinh, bao gom kha nang hoan tac (Undo) hoac quay lai buoc truoc de sua loi. Viec thiet ke he thong ma \"nguoi dung khong the hoan tac\" vi pham nghiem trong nguyen tac kiem soat va tu do cua nguoi dung (User Control and Freedom)."
  },
  {
    "id": 104,
    "question": "3 giao dien nao sau day la giao dien con nguoi (human interface)?",
    "chapter": 3,
    "options": [
      "Giao dien may tinh ca nhan.",
      "Giao dien iPod.",
      "Giao dien dien thoai Blackberry.",
      "Giao dien trang web tim kiem Google.",
      "Giao dien terminal trong Ubuntu."
    ],
    "correctAnswers": [
      1,
      2,
      3
    ],
    "explanation": "Khái niệm \"Giao diện con người\" (Human Interface) nhấn mạnh vào các ranh giới giao tiếp được tối ưu hóa sâu sắc cho các giác quan, thói quen sinh lý tự nhiên và mô hình nhận thức của con người (như bánh xe xoay vật lý của iPod, bàn phím QWERTY vật lý tối ưu lực bấm của Blackberry, hay ô tìm kiếm tối giản của Google). Trái lại, giao diện terminal dòng lệnh mang tính kỹ thuật thô sơ (system-centered), hướng đến máy tính nhiều hơn."
  },
  {
    "id": 105,
    "question": "2 giao dien nao sau day la giao dien nguoi dung (user interface)?",
    "chapter": 3,
    "options": [
      "Giao dien terminal trong Ubuntu.",
      "Giao dien iPod.",
      "Giao dien may tinh ca nhan.",
      "Giao dien trang web tim kiem Google.",
      "Giao dien dien thoai Blackberry."
    ],
    "correctAnswers": [
      0,
      3
    ],
    "explanation": "Giao dien nguoi dung (User Interface - UI) la thuat ngu rong dung de chi cac phuong tien do hoa, van ban hoac dong lenh ky thuat so ma qua do nguoi dung tuong tac truc tiep voi mot he thong phan mem (nhu man hinh dong lenh cua Terminal hay giao dien do hoa Web cua Google)."
  },
  {
    "id": 107,
    "question": "Mot nguoi dung thuc hien quay hoac dich chuyen cac vat the tren be mat thiet bi de choi nhac, tuong tac nay thuoc loai nao?",
    "chapter": 3,
    "options": [
      "Giao dien tu nhien.",
      "Giao dien do hoa va giao dien thuc ly.",
      "Giao dien tu nhien va giao dien huu co.",
      "Giao dien huu co.",
      "Giao dien do hoa va giao dien tu nhien."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giao dien thuc ly (Tangible User Interface - TUI) cho phep con nguoi tuong tac voi du lieu so thong qua cac vat the vat ly ngoai doi thuc (nhu viec xoay cac num vat ly hoac dich chuyen cac khoi gach vat ly tren ban tuong tac). Khi hanh dong co hoc nay dieu khien phan mem nhac co hien thi do hoa di kem, no tao ra su ket hop giua Giao dien do hoa (GUI) va Giao dien thuc ly (TUI)."
  },
  {
    "id": 108,
    "question": "Cac dong may tinh ca nhan pho bien trong nhung nam 1980 su dung giao dien loai nao?",
    "chapter": 3,
    "options": [
      "Giao dien tu nhien.",
      "Giao dien do hoa.",
      "Giao dien huu co va giao dien tu nhien.",
      "Giao dien van ban.",
      "Giao dien van ban va giao dien do hoa."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Giai doan nhung nam 1980 la thoi hoang kim cua he dieu hanh MS-DOS va cac he thong dong lenh (CLI). Mac du giao dien do hoa (GUI) da bat dau duoc Xerox va Apple phat trien, nhung doi voi cac may tinh ca nhan pho thong thuong mai thoi ky do, giao dien van ban (Text-based / CLI) van la cong cu chu dao de tuong tac."
  },
  {
    "id": 109,
    "question": "Cong cu chu yeu de nguoi dung nhap lieu trong giao dien van ban la gi?",
    "chapter": 3,
    "options": [
      "Ban phim.",
      "Man hinh cam ung.",
      "Chuot.",
      "Cam bien van tay.",
      "Giong noi."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giao dien van ban (Text-based UI) dua hoan toan vao viec nhan cac chuoi ky tu dang dong lenh. Vi vay, ban phim (Keyboard) la thiet bi ngoai vi dau vao so khai va quan trong nhat de truyen tai du lieu truc tiep vao he thong xu ly dong lenh."
  },
  {
    "id": 110,
    "question": "Cong cu chu yeu de nguoi dung nhap lieu trong giao dien ngon ngu tu nhien la gi?",
    "chapter": 3,
    "options": [
      "Micro.",
      "Ban phim.",
      "Man hinh cam ung.",
      "Cam bien van tay.",
      "Chuot."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giao dien ngon ngu tu nhien (Natural Language Interface - NUI) cho phep nguoi dung ra lenh bang loi noi giong nhu giao tiep giua con nguoi voi nhau. Thiet bi thu am (Microphone) la kenh vao (input channel) co hoc cot loi de chuyen doi song am giong noi thanh tin hieu ky thuat so phuc vu xu ly ngon ngu tu nhien (NLP)."
  },
  {
    "id": 111,
    "question": "Cac cong cu chu yeu de nguoi dung nhap lieu trong giao dien tu nhien la gi?",
    "chapter": 3,
    "options": [
      "Micro.",
      "Ban phim.",
      "Man hinh cam ung.",
      "Cam bien van tay.",
      "Chuot."
    ],
    "correctAnswers": [
      0,
      2,
      3
    ],
    "explanation": "Giao dien tu nhien (Natural User Interface - NUI) huong den viec loai bo cac thiet bi trung gian nhan tao cung nhac nhu chuot hay ban phim vat ly. Thay vao do, no tan dung cac hanh vi sinh hoc nguyen ban cua con nguoi nhu: Cham truc tiep bang tay (Man hinh cam ung), Noi (Micro), hoac quet dac diem sinh trac hoc co the (Cam bien van tay)."
  },
  {
    "id": 112,
    "question": "Dac tinh nao khong duoc xem xet khi thiet ke he tuong tac theo khia canh cong thai hoc?",
    "chapter": 2,
    "options": [
      "Than thien voi nguoi dung.",
      "Nhat quan.",
      "Phu hop voi su khac biet cua nguoi dung.",
      "Phuc hoi.",
      "Huong dan nguoi dung."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cong thai hoc (Ergonomics) tap trung giai quyet cac van de tuong thich ve mat vat ly, sinh ly va gioi han co the cua con nguoi khi van hanh thiet bi. \"Phuc hoi\" (Recoverability) la mot thuoc tinh ky thuat phan mem thuoc nhom tinh dung duoc (Usability Heuristics) nham giup he thong khoi phuc sau loi du lieu, hoan toan khong thuoc pham tru do luong vat ly cua cong thai hoc."
  },
  {
    "id": 113,
    "question": "Mo hinh nao sau day khong duoc su dung de mo hinh hoa yeu cau nguoi dung?",
    "chapter": 5,
    "options": [
      "HTA (Hierarchy Task Analysis).",
      "Mo hinh da cach nhin.",
      "OSTA.",
      "SSM.",
      "Mo hinh du doan."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "HTA la mo hinh dung de phan ra nhiem vu (Task Analysis) thanh cac buoc thao tac cu the, phuc vu viec phan tich hanh vi nguoi dung lam gi tren may tinh. Trong khi do, OSTA (Open System Task Analysis), SSM (Soft Systems Methodology), va cac mo hinh da cach nhin (Multiview) la cac phuong phap luan dung de khao sat, dinh hinh va mo hinh hoa yeu cau cua nguoi dung tu giai doan so khai cua du an."
  },
  {
    "id": 114,
    "question": "Cac mo hinh nguoi dung nao sau day thuoc nhom cac mo hinh ky thuat xa hoi?",
    "chapter": 5,
    "options": [
      "USTM/CUSTOM.",
      "Mo hinh nhan thuc.",
      "SSM.",
      "OSTA.",
      "Da cach nhin."
    ],
    "correctAnswers": [
      0,
      3
    ],
    "explanation": "Cac mo hinh ky thuat xa hoi (Socio-technical models) nhu USTM (User Skills and Task Match) va OSTA tap trung phan tich su dung hoa giua he thong ky thuat (thiet bi, phan mem) voi he thong xa hoi cua to chuc (con nguoi, van hoa, cau truc nhom lam viec)."
  },
  {
    "id": 115,
    "question": "Khi thiet ke cay ATM thi vi tri dat ban phim can thoa man dieu kien cong thai hoc nao sau day?",
    "chapter": 5,
    "options": [
      "Thiet ke theo nguong trung binh chieu cao nguoi truong thanh.",
      "Thiet ke tinh toan den do tuoi nguoi dung, va dieu chinh sao cho phu hop voi nang luc hanh vi cua cac doi tuong nguoi dung khac nhau.",
      "Thiet ke theo nguong chieu cao cua tre vi thanh nien.",
      "Thiet ke theo chieu cao toi thieu cua nguoi truong thanh.",
      "Thiet ke sao cho nguoi ngoi xe lan co the voi toi."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Trong cong thai hoc vat ly, nguyen tac thiet ke bao dung (Inclusive Design) yeu cau cac thiet bi cong cong nhu cay ATM phai phuc vu duoc ca nhung nhom nguoi yeu the hoac khuyet tat. Do do, ban phim phai duoc dat o cao do va khoang cach ma mot nguoi ngoi xe lan co the de dang tiep can va thao tac mot cach doc lap."
  },
  {
    "id": 116,
    "question": "Phat bieu nao sau day la sai?",
    "chapter": 2,
    "options": [
      "Thiet ke man hinh su dung pull-down menu va cac icon de giam tai bo nho ngan han cua con nguoi.",
      "Nen thiet ke cau hoi dang dong (chon dap an co san) thay vi cau hoi dang yeu cau nguoi dung phai suy nghi, hoi tuong de co cau tra loi.",
      "Bo nho cam nhan cua con nguoi gioi han boi 7+/-2 muc tin.",
      "Cung cap phim tat (shortcut) cung la cach de giam tai bo nho lam viec.",
      "Ky thuat \"Nhan biet thay vi nho lai\" la 1 phuong phap de giam tai bo nho  han cua con nguoi."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Theo quy luat tam ly hoc nhan thuc cua George Miller, gioi han luu tru 7 +/- 2 muc tin (chunks) la dac tinh cua Bo nho ngan han / Bo nho lam viec (Short-term / Working Memory), hoan toan khong phai cua Bo nho cam nhan (Sensory Memory - noi luu tru thong tin giac quan tho cuc nhanh chi trong vai tram mili-giay)."
  },
  {
    "id": 117,
    "question": "Nhung dap an nao SAI khi noi ve mo hinh SSM?",
    "chapter": 5,
    "options": [
      "Quan diem cua cac ben lien quan ve cung mot he thong la khong giong nhau.",
      "Cho phep nhan biet su khac biet giua the gioi thuc va he thong.",
      "Tap trung vao viec xac dinh cac yeu cau cua con nguoi va he thong.",
      "Tap trung vao viec hieu hien trang cua to chuc.",
      "Gom 2 giai doan. Giai doan 1 nhan biet, phan tich van de roi mo ta chi tiet bai toan. Giai doan 2 khoi tao dinh nghia goc cho he thong."
    ],
    "correctAnswers": [
      2,
      4
    ],
    "explanation": "SSM (Soft Systems Methodology) la phuong phap luan mem he thong, dung de tiep can cac van de phi cau truc, hon loan trong to chuc noi quan diem con nguoi khac nhau. No khong tap trung cung nhac vao viec \"dac ta ky thuat yeu cau he thong\" ngay tu dau va cung khong duoc chia tho san thanh 2 giai doan nhu phat bieu tren (SSM thuc te co chu trinh 7 buoc lap)."
  },
  {
    "id": 118,
    "question": "Cac truong hop nao the hien su rang buoc van hoa trong nguyen tac thiet ke giao dien cua Norman?",
    "chapter": 7,
    "options": [
      "Ky hieu X duoc su dung la ky hieu danh dau cau tra loi dung va sai tuy thuoc vao tung quoc gia.",
      "Vien do, xanh xung quanh chan cam cua loa tuong ung voi mau cua day cam vao tung vi tri.",
      "Ky hieu tam giac vien do la ky hieu canh bao duoc su dung tren toan the gioi.",
      "Dia CD co dan nhan de nguoi dung khong dua nguoc chieu dia vao dau doc.",
      "Cong HDMI duoc thiet ke voi mot dau to mot dau nho khien nguoi dung khong the cam nguoc."
    ],
    "correctAnswers": [
      0,
      2
    ],
    "explanation": "Rang buoc van hoa (Cultural Constraints) dua tren cac quy uoc, ky hieu da duoc xa hoi hoa va thua nhan rong rai boi mot cong dong hoac toan the gioi qua qua trinh giao duc va lich su (nhu mau sac canh bao cua bien bao tam giac, y nghia bieu tuong X). Cac phuong an sai thuoc ve rang buoc vat ly hoac logic."
  },
  {
    "id": 119,
    "question": "Truong hop nao the hien su rang buoc vat ly trong nguyen tac thiet ke giao dien cua Norman?",
    "chapter": 7,
    "options": [
      "Ky hieu X duoc su dung la ky hieu danh dau cau tra loi dung va sai tuy thuoc vao tung quoc gia.",
      "Cong HDMI duoc thiet ke voi mot dau to mot dau nho khien nguoi dung khong the cam nguoc.",
      "Ky hieu tam giac vien do la ky hieu canh bao duoc su dung tren toan the gioi.",
      "Vien do, xanh xung quanh chan cam cua loa tuong ung voi mau cua day cam vao tung vi tri.",
      "Dia CD co dan nhan de nguoi dung khong dua nguoc chieu dia vao dau doc."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Rang buoc vat ly (Physical Constraints) su dung truc tiep cac gioi han co hoc, hinh hoc cua the gioi vat chat de ngan chan hanh dong sai (Poka-yoke). Viec thiet ke cong HDMI co dang hinh thang (mot dau to, mot dau nho) lam cho nguoi dung ve mat vat ly khong the cam nguoc dau day duoc, du ho co co tinh hay vo y."
  },
  {
    "id": 120,
    "question": "Cac truong hop nao the hien su rang buoc logic trong nguyen tac thiet ke giao dien cua Norman?",
    "chapter": 7,
    "options": [
      "Cong HDMI duoc thiet ke voi mot dau to mot dau nho khien nguoi dung khong the cam nguoc.",
      "Ky hieu tam giac vien do la ky hieu canh bao duoc su dung tren toan the gioi.",
      "Ky hieu X duoc su dung la ky hieu danh dau cau tra loi dung va sai tuy thuoc vao tung quoc gia.",
      "Dia CD co dan nhan de nguoi dung khong dua nguoc chieu dia vao dau doc.",
      "Vien do, xanh xung quanh chan cam cua loa tuong ung voi mau cua day cam vao tung vi tri."
    ],
    "correctAnswers": [
      3,
      4
    ],
    "explanation": "Rang buoc logic (Logical Constraints) su dung moi quan he hop ly, tuong dong ve mat lap luan hoac thi giac de goi y hanh dong dung. Viec phoi ghep trung khop ma mau (xanh cam vao cong xanh, do cam vao cong do) hay viec nhin nhan dan o mat tren dia CD giup nguoi dung suy luan logic ra cach van hanh chinh xac cua thiet bi."
  },
  {
    "id": 121,
    "question": "Dau la mot mo hinh phan ra nhiem vu?",
    "chapter": 6,
    "options": [
      "HTA (Hierarchical Task Analysis).",
      "OSTA.",
      "USTM.",
      "Mo hinh hinh sao.",
      "Mo hinh thac nuoc."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "HTA la cong cu kinh dien nhat dung de phan ra mot nhiem vu lon (Goal) thanh mot cay phan cap cac nhiem vu con (Sub-tasks) va cac hanh dong (Actions), kem theo mot so do ke hoach thuc hien (Plan) ro rang."
  },
  {
    "id": 122,
    "question": "GOMS la cum tu viet tat cua tu nao?",
    "chapter": 6,
    "options": [
      "Goal Operation Mechanism Selection.",
      "Go Operator Mode Select.",
      "Goals Option Management System.",
      "Goals Operators Methods Selections.",
      "Goal Orientation Methods Selections."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "GOMS la mo hinh nhan thuc phan tich thao tac cua nguoi dung, viet tat cua: Goals (Muc tieu), Operators (Cac thao tac co ban), Methods (Cac phuong thuc/chuoi thao tac de dat muc tieu), va Selection rules (Cac quy tac lua chon phuong thuc toi uu)."
  },
  {
    "id": 123,
    "question": "TAG la cum tu viet tat cua tu nao?",
    "chapter": 6,
    "options": [
      "Task-Action Grammar.",
      "Test-Action Grade.",
      "Technique Architecture Graph.",
      "Teacher Advisor Grammar.",
      "Technical Advisory Group."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "TAG (Ngu phap Tac vu - Hanh dong) la mo hinh mo ta ngon ngu doi thoai cua he thong duoi dang cac quy tac ngu phap, giup do luong muc do nhat quan va do kho trong mo hinh nhan thuc cua nguoi dung khi chuyen dich tu y dinh (Task) sang hanh dong go phim/lenh cu the (Action)."
  },
  {
    "id": 124,
    "question": "Luat de mo ta van pham doi thoai BNF co dang nao?",
    "chapter": 6,
    "options": [
      "ten => bieu thuc",
      "ten ::= bieu thuc",
      "ten:, ten, bieu thuc, ::=",
      "ten :: bieu thuc",
      "ten = bieu thuc"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Trong tin hoc va HCI, BNF (Backus-Naur Form) la cu phap mo ta van pham doi thoai. Quy tac cua no co cau truc chuan la ve trai chua thuc the doi thoai lien ket voi ve phai qua ky hieu dinh nghia ::=, co dang tong quat: ten_doi_thoai ::= bieu_thuc_hanh_dong."
  },
  {
    "id": 125,
    "question": "Dau la cac ky thuat su dung de thu thap yeu cau nguoi dung?",
    "chapter": 5,
    "options": [
      "GOMS.",
      "Phan tich tai lieu.",
      "Quan sat tu nhien.",
      "Phong van.",
      "USTA."
    ],
    "correctAnswers": [
      1,
      2,
      3
    ],
    "explanation": "Phong van (Interviews), Quan sat thuc te (Observations), va Nghien cuu tai lieu quy trinh cu (Studying documentation) la 3 ky thuat thu thap thong tin truc tiep tu nguoi dung va moi truong lam viec cua ho. GOMS la mo hinh phan tich hieu nang thao tac nhan thuc, khong dung de thu thap yeu cau ban dau."
  },
  {
    "id": 126,
    "question": "Cac mo thuc danh gia nao co ket qua danh gia mang tinh dinh luong?",
    "chapter": 9,
    "options": [
      "Cognitive walkthrough.",
      "Predictive.",
      "Usability Testing.",
      "Quick and Dirty.",
      "Field Studies."
    ],
    "correctAnswers": [
      2,
      4
    ],
    "explanation": "Usability Testing thuc hien trong phong thi nghiem thu thap du lieu dinh luong chinh xac (nhu thoi gian hoan thanh task, ty le loi chuot, nhip tim). Field Studies (Nghien cuu thuc dia) mac du thu thap nhieu du lieu dinh tinh nhung cung mang lai cac so lieu thong ke dinh luong ve tan suat, hieu suat hoat dong thuc te cua nguoi dung ngoai moi truong tu nhien."
  },
  {
    "id": 127,
    "question": "Trong cac vi du sau, vi du nao khong the hien rang buoc ve van hoa theo cac nguyen tac thiet ke cua Norman?",
    "chapter": 7,
    "options": [
      "Trong mot trinh duyet, \"X\" ky hieu nut dung de thoat khoi trinh duyet do.",
      "Khong the dieu chinh giam am luong khi vach chi muc do am luong bang 0.",
      "Bieu tuong ong nghe mau xanh de nhan cuoc goi, ong nghe mau do de ket thuc cuoc goi.",
      "Hinh chiec loa la bieu tuong gan tren nut dieu chinh am luong."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Viec \"khong the giam am luong khi da o muc 0\" la mot rang buoc logic/vat ly hien nhien cua he thong (he thong khong the co am luong am). Cac phuong an con lai deu su dung cac quy uoc van hoa pho bien da duoc dinh hinh trong tam tri con nguoi (nhu ky hieu X, hinh cai loa, hay ma mau xanh/do cua cuoc goi)."
  },
  {
    "id": 128,
    "question": "Phat bieu nao sau day la DUNG khi noi ve mo hinh da cach nhin (multiview model)?",
    "chapter": 4,
    "options": [
      "Khong co phuong phap kiem tra cu the.",
      "La mo hinh don gian chi gom mot cach tiep can duy nhat.",
      "Chi tap trung vao khia canh ky thuat phan cung.",
      "La mot cach tiep can to hop nhieu cach tiep can trong mot giai doan, co phuong phap kiem tra.",
      "Chi ap dung duoc trong giai doan cuoi cung cua phat trien."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Mo hinh da cach nhin (Multiview) la mot phuong phap luan linh hoat, tich hop ca khia canh ky thuat he thong lan khia canh xa hoi, con nguoi trong phan tich thiet ke, cho phep nguoi thiet ke ap dung dong thoi nhieu goc nhin kiem chung khac nhau trong cung mot giai doan phat trien."
  },
  {
    "id": 129,
    "question": "Dau la muc tieu cua phuong phap nghien cuu tai truong (field studies)?",
    "chapter": 9,
    "options": [
      "Danh gia xem cong nghe anh huong nhu the nao den cac cong viec hang ngay cua nguoi dung.",
      "Kiem thu don vi phan mem.",
      "Thu thap du lieu tu cau hoi truc tuyen.",
      "Do luong thoi gian phan hoi cua may chu.",
      "Kiem tra toc do xu ly cua he thong trong phong lab."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Muc tieu toi thuong cua Field Studies la dua cac nha thiet ke roi khoi phong lab de quan sat truc tiep hanh vi cua nguoi dung trong boi canh tu nhien hang ngay cua ho, tu do hieu ro cong nghe moi se lam xao tron hoac giup ich the nao cho cuoc song cua ho."
  },
  {
    "id": 130,
    "question": "Nhung mo ta nao khong the hien rang buoc logic theo nguyen tac cua Norman?",
    "chapter": 7,
    "options": [
      "Thanh cuon cua chuot may tinh chi co the miet len tren hoac xuong duoi de dieu khien.",
      "Cong HDMI duoc thiet ke voi mot dau to mot dau nho khien nguoi dung khong the cam nguoc.",
      "Vien do, xanh xung quanh chan cam cua loa tuong ung voi mau cua day cam vao tung vi tri.",
      "Bieu tuong nhan cuoc goi tren may dien thoai co hinh ong nghe mau xanh va co mui ten huong sang phai; bieu tuong tu choi cuoc goi co hinh ong nghe mau do kem theo dau gach va mui ten huong sang trai.",
      "Dia CD co dan nhan de nguoi dung khong dua nguoc chieu dia vao dau doc."
    ],
    "correctAnswers": [
      0,
      3
    ],
    "explanation": "Bieu tuong cuoc goi xanh/do the hien rang buoc van hoa va anh xa (mapping). Thanh cuon chuot miet len/xuong the hien the cho (affordance) vat ly va rang buoc vat ly cua thiet bi. Cac phuong an khac nhu ma mau chan cam hay huong mui ten ATM moi la rang buoc logic."
  },
  {
    "id": 131,
    "question": "Mo ta nao the hien tinh the cho (affordance) theo nguyen tac cua Norman?",
    "chapter": 7,
    "options": [
      "Dia CD co dan nhan de nguoi dung khong dua nguoc chieu dia vao dau doc.",
      "Bieu tuong nhan cuoc goi tren may dien thoai co hinh ong nghe mau xanh va co mui ten huong sang phai.",
      "Thanh cuon cua chuot may tinh chi co the miet len tren hoac xuong duoi de dieu khien.",
      "Vien do, xanh xung quanh chan cam cua loa tuong ung voi mau cua day cam vao tung vi tri.",
      "Cong HDMI duoc thiet ke voi mot dau to mot dau nho khien nguoi dung khong the cam nguoc."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Affordance (Tinh the cho / Goi y su dung) la thuoc tinh vat ly cua mot vat the goi y truc quan cho con nguoi cach van hanh no. Thiet ke hinh tru tron lom cua banh xe cuon chuot tu no goi y truc tiep hanh dong miet/lan ngon tay len hoac xuong ma khong can dan nhan huong dan."
  },
  {
    "id": 132,
    "question": "Mo ta nao the hien tinh anh xa (mapping) theo nguyen tac cua Norman?",
    "chapter": 7,
    "options": [
      "Bieu tuong nhan cuoc goi tren may dien thoai co hinh ong nghe mau xanh va co mui ten huong sang phai; bieu tuong tu choi cuoc goi co hinh ong nghe mau do kem theo dau gach va mui ten huong sang trai.",
      "Thanh cuon cua chuot may tinh chi co the miet len tren hoac xuong duoi de dieu khien.",
      "Cong HDMI duoc thiet ke voi mot dau to mot dau nho khien nguoi dung khong the cam nguoc.",
      "Ky hieu tam giac vien do la ky hieu canh bao duoc su dung tren toan the gioi.",
      "Ky hieu X duoc su dung la ky hieu danh dau cua tra loi dung va sai."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Mapping (Anh xa) la moi quan he tuong dong giua cach bo tri bo dieu khien va ket qua hoat dong thuc te ngoai doi. Nut nhan cuoc goi vuot sang phai (thuan chieu hanh dong bat dau), nut tu choi vuot sang trai (chieu ket thuc/huy bo) tao nen mot so do anh xa nhan thuc cuc ky tu nhien."
  },
  {
    "id": 133,
    "question": "Cac nguyen tac thiet ke nao cua Norman tuong ung voi nguyen tac thiet ke hoi thoai dam bao tinh dong cua Shneiderman?",
    "chapter": 7,
    "options": [
      "Tinh the cho (Affordance).",
      "Tinh anh xa (Mapping).",
      "Tinh phan hoi (Feedback).",
      "Tinh truc quan (Visibility).",
      "Rang buoc (Constraints)."
    ],
    "correctAnswers": [
      2,
      3
    ],
    "explanation": "Nguyen tac \"dam bao tinh dong\" (Closure) cua Shneiderman yeu cau mot chuoi hanh dong phai co diem dau, diem giua va thong diep hoan thanh ro rang o diem cuoi. Dieu nay tuong ung voi viec he thong phai hien thi truc quan (Visibility) cac buoc va dua ra phan hoi (Feedback) tuc thi de nguoi dung biet ho da hoan thanh nhiem vu thanh cong."
  },
  {
    "id": 134,
    "question": "Voi cung so luong nguoi dung, phuong phap thiet ke lay nguoi dung lam trung tam (UCD) nao sau day co chi phi thuc hien cao nhat?",
    "chapter": 4,
    "options": [
      "Participatory design.",
      "Workshop.",
      "Focus groups.",
      "Questionnaires.",
      "Interviews (Phong van)."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Phong van doi hoi tien hanh tuong tac truc tiep 1-1 giua chuyen gia nghien cuu va tung nguoi dung don le. Chi phi thoi gian cua chuyen gia, chi phi thue phong va phan tich bang ghi am cho tung ca nhan nhan len theo so luong nguoi dung lam cho Phong van dat do hon nhieu so voi viec phat bang hoi (Questionnaires) hang loat hay to chuc hoi thao nhom (Workshops / Focus Groups)."
  },
  {
    "id": 135,
    "question": "Dau la cac cach tiep can cua ky thuat tao mau thu mo phong bang may tinh (computer-based simulation)?",
    "chapter": 8,
    "options": [
      "Tao mau thu giay (Paper prototyping).",
      "Tao mau thu theo chieu ngang (Horizontal prototyping).",
      "Tao mau thu theo kich ban (Scenario-based prototyping).",
      "Tao mau thu tuong tac (Interactive prototyping).",
      "Tao mau thu theo chieu doc (Vertical prototyping)."
    ],
    "correctAnswers": [
      1,
      2,
      4
    ],
    "explanation": "Ba cach tiep can kinh dien nay mo ta pham vi cua prototype: Chieu doc (hoat dong chi tiet cho mot vai tinh nang chinh), Chieu ngang (mo phong dien rong tat ca man hinh nhung khong co chuc nang sau), va Kich ban (chi mo phong dung mot luong di cu the cua nguoi dung)."
  },
  {
    "id": 136,
    "question": "Phat bieu nao sau day la SAI khi noi ve mo hinh nhan thuc (mental model)?",
    "chapter": 4,
    "options": [
      "Mo hinh nhan thuc dai dien cho nhung gi duoc cho la sai, khong dai dien cho nhung gi duoc cho la dung.",
      "Mo hinh nhan thuc la su hieu biet cua nguoi dung ve cach he thong hoat dong.",
      "Mo hinh nhan thuc giup nguoi dung du doan ket qua hanh dong truoc khi thuc hien.",
      "Mo hinh nhan thuc co the khac biet giua nguoi dung va nha thiet ke.",
      "Mo hinh nhan thuc duoc hinh thanh qua trai nghiem su dung."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Mo hinh nhan thuc dai dien cho nhung gi con nguoi tin la dung ve cach thuc hoat dong cua mot he thong, giup ho du doan va simulation ket qua hanh dong cua minh truoc khi bam nut."
  },
  {
    "id": 137,
    "question": "Phat bieu nao sau day la SAI khi noi ve mau thu do tin cay thap (Lo-Fi prototypes)?",
    "chapter": 8,
    "options": [
      "Mau thu do tin cay thap giup phat hien cac van de ve bo cuc som.",
      "Mau thu do tin cay thap co tinh tuong tac day du.",
      "Mau thu do tin cay thap mo phong hau het cac chuc nang cua san pham cuoi cung.",
      "Mau thu do tin cay thap duoc tao ra nhanh chong.",
      "Mau thu do tin cay thap thuong la phac thao giay."
    ],
    "correctAnswers": [
      1,
      2
    ],
    "explanation": "Mau thu do tin cay thap (nhu phac thao giay - paper sketches) co tinh bo qua cac chuc nang xu ly sau va hoan toan khong co tinh tuong tac ky thuat so day du de tiet kiem thoi gian, tap trung hoan toan vao viec kiem tra nhanh bo cuc (layout) va cac khai niem thiet ke so khoi."
  },
  {
    "id": 139,
    "question": "De ho tro nguoi dung tranh loi hoac khac phuc loi, khong can tra loi cau hoi nao sau day?",
    "chapter": 7,
    "options": [
      "Nguoi dung muc tieu la nhung ai?",
      "Canh bao loi xuat hien o dau?",
      "Co the cung cap phan hoi gi de nguoi dung biet ho dang lam gi?",
      "Co che xac nhan hanh dong duoc thiet ke nhu the nao?",
      "Lam the nao de nguoi dung co the quan sat trang thai cua website?"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cau hoi \"Nguoi dung muc tieu la ai\" dung de xay dung User Persona (Ho so nguoi dung) o giai doan dau phan tich chien luoc. Khi da buoc sang giai doan thiet ke tinh nang phong chong loi (Error Prevention & Recovery), nha thiet ke can tra loi cac cau hoi ky thuat truc tiep ve phan hoi he thong (Feedback), kha nang quan sat trang thai cua website (Visibility) va co che xac nhan hanh dong (Confirmations)."
  },
  {
    "id": 140,
    "question": "Ky thuat phu thuy xu than tien (wizard of Oz) thuong duoc su dung de:",
    "chapter": 8,
    "options": [
      "Thiet ke giao dien do hoa tinh.",
      "Cac thu nghiem va phat trien he thong nhan dang giong noi.",
      "Kiem thu hieu nang xu ly cua may chu.",
      "Thu nghiem cho cac he thong khong ton tai.",
      "Thiet ke he thong thong minh."
    ],
    "correctAnswers": [
      1,
      3,
      4
    ],
    "explanation": "Wizard of Oz la ky thuat mo phong he thong chua he duoc lap trinh (khong ton tai), dac biet hieu qua trong cac he thong thong minh/nhan dang giong noi phuc tap. Nguoi dung nghi rang ho dang noi chuyen voi mot AI tu dong, nhung thuc te dang sau hau truong co mot chuyen gia con nguoi (phu thuy) dang go lenh phan hoi thu cong."
  },
  {
    "id": 141,
    "question": "De thiet ke website theo thi hieu nguoi dung, can tra loi cau hoi nao sau day?",
    "chapter": 10,
    "options": [
      "Co the cung cap phan hoi gi de nguoi dung biet ho dang lam gi?",
      "Nguoi dung muc tieu la nhung ai?",
      "Co che xac nhan hanh dong duoc thiet ke nhu the nao?",
      "Lam the nao de nguoi dung co the quan sat trang thai cua website?",
      "Canh bao loi xuat hien o dau?"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "De thiet ke tham my, mau sac, phong cach noi dung phu hop voi thi hieu, nha thiet ke bat buoc phai dinh danh chinh xac doi tuong muc tieu (Persona) la ai (vi du: the he Gen Z tre trung nang dong hay nhung nguoi lon tuoi can su toi gian, ro rang)."
  },
  {
    "id": 142,
    "question": "2 thiet ke nao sau day tuan thu nguyen tac \"Cho phep huy bo cac hanh dong da thuc hien\"?",
    "chapter": 7,
    "options": [
      "Bam nut X de dong cua so trinh duyet.",
      "Trong khi dang copy mot file ta co the huy bo qua trinh copy nay.",
      "Su dung phim F5 de tai lai trang.",
      "Nhan Ctrl+S de luu file van ban.",
      "Sau khi mo 1 trang web moi, trinh duyet cho quay ve trang cu."
    ],
    "correctAnswers": [
      1,
      4
    ],
    "explanation": "Nut quay lai (Back) cua trinh duyet va nut Huy (Cancel) giua chung khi sao chep file la cac thiet ke kinh dien tuan thu nguyen tac thoat hiem khan cap cho nguoi dung, cho phep ho quay nguoc trang thai he thong ve thoi diem truoc khi hanh dong sai lam dien ra."
  },
  {
    "id": 143,
    "question": "Dieu nao sau day la sai voi phuong phap nghien cuu tai lieu (studying documentation)?",
    "chapter": 5,
    "options": [
      "Phan tich tai lieu quy trinh hien co.",
      "Thu thap tai lieu to chuc.",
      "Khong can lam ro pham vi thu thap.",
      "Xac dinh cac ben lien quan.",
      "Ghi nhan cac quy tac nghiep vu."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Khi nghien cuu tai lieu quy trinh hoat dong cu, neu khong xac dinh va khoanh vung ro pham vi thu thap (Scope), nha nghien cuu se bi ngap lut trong hang ngan trang tai lieu to chuc loi thoi, ton thoi gian ma khong chat loc duoc yeu cau cot loi."
  },
  {
    "id": 144,
    "question": "Chi ra 2 ly do can thiet ke lay nguoi dung lam trung tam (UCD):",
    "chapter": 4,
    "options": [
      "Tim kiem cau tra loi cho cau hoi ve nguoi dung, cac nhiem vu va cac muc tieu tuong ung, tu do dinh huong viec thiet ke va phat trien.",
      "Giam thoi gian chay test tu dong.",
      "Giam chi phi phat trien phan cung.",
      "Tang toc do bien dich code.",
      "Cai thien tinh dung duoc va tinh huu dung cua san pham."
    ],
    "correctAnswers": [
      0,
      4
    ],
    "explanation": "Triet ly UCD sinh ra de chong lai loi thiet ke huong he thong (System-centered). No bat buoc moi quyet dinh lap trinh phai xoay quanh nang luc hanh vi thuc te cua nguoi dung, dam bao san pham lam ra khong chi chay duoc ma con phai de su dung (Usable) va co ich (Useful)."
  },
  {
    "id": 145,
    "question": "Tinh dung duoc cua website KHONG phu thuoc vao yeu to nao?",
    "chapter": 10,
    "options": [
      "Quy trinh thiet ke.",
      "Phuong phap danh gia thuc nghiem.",
      "Nguoi thiet ke.",
      "Cong nghe nen tang.",
      "Nguoi dung cuoi."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Tinh dung duoc (Usability) la mot thuoc tinh khach quan cua san pham duoc do luong truc tiep thong qua hieu nang cua nguoi dung cuoi. No phu thuoc vao quy trinh thiet ke, cong nghe nen tang va phuong phap danh gia thuc nghiem, chu khong phu thuoc vao \"cam tinh ca nhan\" hay danh tinh cua nguoi ve ra giao dien do."
  },
  {
    "id": 147,
    "question": "Dau la cac nguyen tac cua thiet ke Web?",
    "chapter": 10,
    "options": [
      "To chuc.",
      "Giao tiep.",
      "Trang tri.",
      "Tiet kiem.",
      "Phuc tap."
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Day la 3 nguyen tac nen tang cua thiet ke thong tin tren Web: To chuc (Cung cap cau truc ro rang nhat quan), Tiet kiem (Toi gian cac yeu to truc quan thua), va Giao tiep (Trinh bay noi dung phu hop voi nang luc nhan thuc cua nguoi dung)."
  },
  {
    "id": 149,
    "question": "Cai nao khong phai la ngon ngu thiet ke thong dung cho cac ung dung di dong hien nay?",
    "chapter": 11,
    "options": [
      "Metro design.",
      "Skeuomorph design.",
      "Material design.",
      "Thiet ke man hinh (Screen design).",
      "Flat design."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Metro design (Microsoft), Skeuomorph design (Thiet ke gia lap thuc te cua Apple thoi ky dau), Flat design (Thiet ke phang), va Material design (Google) la cac ngon ngu / truong phai thiet ke he thong lon. \"Thiet ke man hinh\" chi la mot cong viec ky thuat cu the, khong phai la mot ngon ngu thiet ke he thong."
  },
  {
    "id": 150,
    "question": "Phuong an nao the hien dung moi lien he giua su phat trien phan cung, giao dien va su da dang cua nguoi dung:",
    "chapter": 11,
    "options": [
      "Giao dien - Phan cung - Nguoi dung.",
      "Phan cung - Giao dien - Nguoi dung.",
      "Nguoi dung - Phan cung - Giao dien.",
      "Nguoi dung - Giao dien - Phan cung.",
      "Giao dien - Nguoi dung - Phan cung."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Su tien hoa cong nghe dien ra theo trinh tu: Phan cung phat trien truoc (tao ra cac nang luc xu ly moi) -> Doi hoi thiet ke giao dien tuong thich (de giao tiep voi phan cung do) -> Giup thu hut va dap ung su da dang cua cac nhom nguoi dung cuoi khac nhau trong doi song xa hoi."
  },
  {
    "id": 151,
    "question": "Dau khong phai la nguyen ly chinh duoc su dung trong thiet ke giao dien di dong?",
    "chapter": 11,
    "options": [
      "Thu nho giao dien desktop hien co.",
      "Thiet ke cac tuong tac cham ngon tay.",
      "Toi gian luong di.",
      "Thiet ke lai boi canh su dung.",
      "Tang cuong tinh de di chuyen."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Mot sai lam chet nguoi trong UX di dong la co gang thu nho giao dien may tinh de ban (Desktop UI) vua khit vao man hinh dien thoai di dong nho be. Thiet ke di dong doi hoi phai tu duy lai hoan toan boi canh su dung, thiet ke cac tuong tac cham ngon tay (Touch targets) thay the chuot, toi gian luong di va tang cuong tinh de di chuyen (Mobility)."
  },
  {
    "id": 153,
    "question": "Thuoc tinh co huu cua mo hinh tinh toan khap noi ma khong the xu ly nhu xu ly loi la:",
    "chapter": 12,
    "options": [
      "Tan cong mang.",
      "Thieu nang luong.",
      "Loi phan cung.",
      "Mat ket noi.",
      "Loi he dieu hanh."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Mo hinh tinh toan khap noi (Ubiquitous/Pervasive computing) phan bo hang ngan cam bien va thiet bi di dong trong moi truong tu nhien. Su di chuyen lien tuc cua con nguoi ngoai thuc dia lam cho hien tuong mat ket noi mang (Disconnection) xay ra thuong xuyen va ngau nhien. Day la thuoc tinh co huu cua moi truong vat ly, he thong phai tu thich ung bang cac co che luu tru ngoai tuyen chu khong the coi no la mot loi lap trinh thong thuong de quang ma loi (Exception)."
  },
  {
    "id": 154,
    "question": "Phuong phap danh gia kem cap (coaching method) dung de lam gi?",
    "chapter": 9,
    "options": [
      "Phan tich ma nguon.",
      "Thiet ke giao dien.",
      "Kiem thu hieu nang mang.",
      "Danh gia tuong tac giua nguoi dung - he thong va nguoi dung - nguoi kem cap.",
      "Do luong thoi gian xu ly cua may chu."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Trong Coaching method, nguoi dung thuc hien nhiem vu duoi su ho tro truc tiep cua mot nguoi kem cap (Coach). Phuong phap nay giup nha thiet ke quan sat khong chi su tuong tac voi phan mem ma con ca cuoc doi thoai, cac cau hoi phat sinh giua nguoi dung va nguoi huong dan de phat hien ra cac diem gay kho hieu sau sac cua giao dien."
  },
  {
    "id": 155,
    "question": "Phuong phap phat bieu suy nghi (think aloud protocol) dung de lam gi?",
    "chapter": 9,
    "options": [
      "Toi uu ma nguon.",
      "Hieu man hinh nhan thuc cua nguoi dung ve he thong va cac nhiem vu, ho gap kho khan o dau khi tim hieu va su dung he thong.",
      "Thiet kien truc he thong.",
      "Do luong hieu suat xu ly.",
      "Kiem thu tinh nang phan mem."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Bang viec yeu cau nguoi dung lien tuc noi ra nhung gi ho dang nghi, dang tim kiem va cam thay boi roi trong dau khi thao tac (Think-Aloud), nha nghien cuu co the nhin thau suot mo hinh nhan thuc (Mental Model) cua ho de phat hien ra su lech pha giua tu duy cua nguoi dung va thiet ke cua lap trinh vien."
  },
  {
    "id": 156,
    "question": "Phuong phap dat cau hoi (question asking protocol) dung de lam gi?",
    "chapter": 9,
    "options": [
      "Kiem thu tai trong he thong.",
      "Hieu mo hinh nhan thuc cua nguoi dung ve he thong va cac nhiem vu, ho gap kho khan o dau khi tim hieu va su dung he thong.",
      "Thu thap du lieu dinh luong.",
      "Phan tich yeu cau.",
      "Thiet ke giao dien do hoa."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Phuong phap nay chu dong dat cac cau hoi phong van truc tiep tai cac thoi diem then chot cua qua trinh thu nghiem de lam ro ly do tai sao nguoi dung lai thuc hien hanh dong do, giup khai thac sau mo hinh nhan thuc cua ho."
  },
  {
    "id": 157,
    "question": "Mo ta nao sau day khop voi phuong phap danh gia kem cap (coaching method)?",
    "chapter": 9,
    "options": [
      "Nhom chuyen gia thao luan ve giao dien.",
      "Nguoi dung chuyen gia theo sat nguoi dung binh thuong de chi dan cho ho cach su dung he thong.",
      "Nguoi dung tu thao tac ma khong co su tro giup.",
      "May tinh tu dong cham diem bai kiem tra.",
      "Nguoi dung ghi lai nhat ky su dung."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Trong Coaching method, nguoi dung co kinh nghiem (chuyen gia) ngoi canh va chi dan truc tiep cho nguoi dung moi (nguoi binh thuong) trong qua trinh ho thuc hien nhiem vu."
  },
  {
    "id": 158,
    "question": "Mo ta nao sau day khop voi phuong phap danh gia tu xa (remote testing)?",
    "chapter": 9,
    "options": [
      "Chuyen gia ngồi canh nguoi dung de ghi chep.",
      "Nguoi dung den phong thi nghiem de tham gia kiem thu.",
      "Co phan mem tu dong huong dan nguoi dung thuc hien cac nhiem vu va ghi lai cac hoat dong cua nguoi dung.",
      "Nguoi nghien cuu den tan noi lam viec cua nguoi dung.",
      "Nhom tap trung thao luan ve san pham."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Kiem thu tu xa (Remote testing) su dung cac cong cu tu dong hoa truc tuyen (nhu Maze, Hotjar) de phan phat nhiem vu va tu dong ghi hinh man hinh, ghi nhan click chuot ma khong can su hien dien truc tiep cua dieu phoi vien ben canh nguoi dung."
  },
  {
    "id": 159,
    "question": "Mo ta nao sau day khop voi phuong phap kiem thu hoi tuong (retrospective testing)?",
    "chapter": 9,
    "options": [
      "May tinh tu dong tao bao cao kiem thu.",
      "Nguoi dung dien bang cau hoi sau khi kiem thu.",
      "Nguoi kiem thu cung xem lai cac phien kiem thu da duoc ghi lai voi nguoi dung, hoi lai nguoi dung ve nhung gi da xay ra.",
      "Nguoi dung thuc hien nhiem vu ma khong co su giam sat.",
      "Chuyen gia phong van nguoi dung truoc khi kiem thu."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Retrospective Testing la viec cho nguoi dung xem lai doan video ghi hinh thao tac cua chinh ho truoc do, roi phong van ho de giai thich ly do tai sao tai giay thu 45 ho lai khung lai phan van hoac bam nham nut. Dieu nay giup loai bo su sai lech cua tri nho sau khi hoan thanh task."
  },
  {
    "id": 160,
    "question": "Dau khong phai la khuyen cao khi thiet ke giao dien cho cac tro choi tren thiet bi di dong? (1)",
    "chapter": 11,
    "options": [
      "Tu dong luu tro choi.",
      "Cung cap mot giai phap day du nhat co the.",
      "Chon giai phap don gian.",
      "Ho tro tam dung.",
      "Khong lang phi thoi gian nguoi dung."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Thiet ke game di dong doi hoi tinh toi gian cao (Minimalism) do gioi han khong gian hien thi va do tap trung ngan cua nguoi choi di dong. Co gang nhoi nhet \"day du moi tinh nang, menu phuc tap\" cua phien ban PC/Console vao di dong se lam qua tai nhan thuc cua nguoi choi."
  },
  {
    "id": 162,
    "question": "Dau khong phai la khuyen cao khi thiet ke giao dien cho cac tro choi tren thiet bi di dong? (2)",
    "chapter": 11,
    "options": [
      "Loai bo cac chuc nang luu va tam dung.",
      "Không lang phi thoi gian nguoi dung.",
      "Chon giai phap don gian.",
      "Tu dong luu tro choi.",
      "Ho tro tam dung."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Boi canh di dong cuc ky phan manh (nguoi choi co the phai tat game dot ngot de nghe dien thoai hoac xuong xe bus). Viec thieu nut tam dung (Pause) va tu dong luu (Save) se pha hong hoan toan trai nghiem choi game."
  },
  {
    "id": 163,
    "question": "Phuong phap cung kham pha (co-discovery learning method) dung de lam gi?",
    "chapter": 9,
    "options": [
      "Kiem thu don vi phan mem.",
      "Do luong thoi gian phan hoi.",
      "Phan tich yeu cau nguoi dung.",
      "Kiem thu tinh dung duoc cua cac san pham ho tro nguoi dung lam viec trong moi truong cong tac.",
      "Thiet ke kien truc he thong."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Co-discovery lien quan den viec cho HAI nguoi dung cung thuc hien mot nhiem vu chung va tro chuyen truc tiep voi nhau. Phuong phap nay mo phong moi truong lam viec nhom, rat hoan hao de kiem tra cac phan mem cong tac (Collaborative/Multiplayer softwares)."
  },
  {
    "id": 164,
    "question": "Dieu gi sau day la dung voi phuong phap danh gia heuristic?",
    "chapter": 9,
    "options": [
      "May tinh tu dong phan tich ma nguon.",
      "Phong van tung nguoi dung mot.",
      "Khao sat truc tuyen voi nhieu nguoi dung.",
      "Nguoi dung thu nghiem san pham trong phong lab.",
      "Mot nhom cac chuyen gia danh gia kha nang su dung mot giao dien nguoi dung theo mot tap hop cac nguyen tac chung."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Danh gia Heuristic la phuong phap danh gia chuyen gia (Expert Review). Mot nhom nho cac nha thiet ke (thuong tu 3-5 nguoi) se ra soat giao dien dua tren 10 nguyen tac thiet ke kinh dien cua Jakob Nielsen de tim loi thiet ke ma khong can chay thu nghiem voi nguoi dung cuoi."
  },
  {
    "id": 165,
    "question": "Mo ta nao sau day tuong ung voi giao dien do hoa (GUI)?",
    "chapter": 3,
    "options": [
      "Su dung giong noi de dieu khien.",
      "Cho phep nguoi dung giao tiep voi may tinh thong qua cac bieu tuong, bieu trung truc quan va thiet bi tro.",
      "Nhap lenh bang van ban.",
      "Su dung vat the vat ly.",
      "Tuong tac bang cam ung."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giao dien do hoa (GUI) cho phep nguoi dung tuong tac voi may tinh thong qua cac bien tuong (Icons), menu, cua so (Windows), va thiet bi tro (Pointer - nhu chuot), tao nen mo hinh WIMP kinh dien."
  },
  {
    "id": 166,
    "question": "Mo ta nao tuong ung voi nguyen tac thiet ke web \"Tiet kiem\"?",
    "chapter": 10,
    "options": [
      "Tan dung cac quy uoc thiet ke hien co, chi thay doi khi nguoi thiet ke chac chan y tuong cua ho tot hon.",
      "Su dung nhieu mau sac khac nhau.",
      "Cung cap cau truc ro rang.",
      "Bieu dien noi dung phu hop voi kha nang nguoi dung.",
      "Nguoi dung lam duoc nhieu viec nhat voi it yeu to thi giac nhat."
    ],
    "correctAnswers": [
      0,
      4
    ],
    "explanation": "Nguyen tac Tiet kiem (Economy) yeu cau giao dien phai dat hieu suat cao voi gia thanh thi giac thap nhat. Viec tan dung cac quy uoc quen thuoc cua nganh (nhu bieu tuong gio hang cho mua sam) giup giam cong suc hoc tap cua nguoi dung, toi gian mau sac va hoa tiet thua de tang toc do xu ly thong tin truc quan."
  },
  {
    "id": 167,
    "question": "Mo ta nao tuong ung voi nguyen tac thiet ke web \"Giao tiep\"?",
    "chapter": 10,
    "options": [
      "Nguoi dung lam duoc nhieu viec nhat voi it yeu to thi giac nhat.",
      "Cung cap cau truc ro rang nhat quan.",
      "Bieu dien noi dung phu hop voi kha nang cua nguoi dung.",
      "Su dung nhieu hieu ung dong.",
      "Tan dung cac quy uoc thiet ke hien co."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Nguyen tac Giao tiep (Communication) nhan manh viec he thong phai \"noi chuyen\" bang ngon ngu cua nguoi dung (ngon ngu tu nhien, de hieu, phong chu de doc, co chu du lon, do tuong phan cao), dam bao noi dung truyen tai an khop hoan hao voi kha nang nhan thuc cua nhom doi tuong muc tieu."
  },
  {
    "id": 168,
    "question": "Mo ta nao tuong ung voi nguyen tac thiet ke web \"To chuc\"?",
    "chapter": 10,
    "options": [
      "Bieu dien noi dung phu hop voi kha nang nguoi dung.",
      "Toi da hoa so luong phan tu tren man hinh.",
      "Tan dung cac quy uoc thiet ke hien co.",
      "Nguoi dung lam duoc nhieu viec nhat voi it yeu to thi giac nhat.",
      "Cung cap cho nguoi dung mot cau truc ro rang nhat quan."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Nguyen tac To chuc (Organization) yeu cau sap xep cac phan tu UI thanh mot cau truc phan cap thi giac (Visual Hierarchy) ro rang, su dung luoi thiet ke (Grids) va su nhat quan ve vi tri menu giup nguoi dung de dang dinh vi ban than tren website."
  },
  {
    "id": 169,
    "question": "Yeu cau ve moi truong tuong tac bao gom:",
    "chapter": 1,
    "options": [
      "Yeu cau ve phan cung may tinh.",
      "Yeu cau ve boi canh su dung, xa hoi, muc do nguoi dung ho tro thuc hien nhiem vu va cac cong nghe lien quan.",
      "Yeu cau ve toc do mang.",
      "Yeu cau ve he dieu hanh.",
      "Yeu cau ve mau sac va font chu."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Moi truong tuong tac bao gom toan bo boi canh vat ly, xa hoi, to chuc va cong nghe xung quanh nguoi dung khi ho thuc hien nhiem vu."
  },
  {
    "id": 170,
    "question": "Voi mo thuc danh gia quick and dirty, can:",
    "chapter": 9,
    "options": [
      "Xay dung mo hinh GOMS chi tiet.",
      "To chuc phong thi nghiem chinh quy.",
      "Tien hanh khao sat quy mo lon.",
      "Tranh luan khong chinh thuc voi nguoi dung o bat cu khi nao khi su dung duoc mau thu.",
      "Thue chuyen gia phan tich thong ke."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Mo thuc Quick and Dirty la danh gia nhanh, khong chinh thong, thuong dung trong thiet ke lap som de lay phan hoi tuc thi bang cach gap bat cu ai, dua cho ho xem ban ve nhap va tro chuyen nhanh de sua doi thiet ke ngay lap tuc."
  },
  {
    "id": 171,
    "question": "Voi mo thuc danh gia field studies, can:",
    "chapter": 9,
    "options": [
      "Moi nguoi dung den phong thi nghiem.",
      "Gui bang cau hoi truc tuyen.",
      "Thuc hien danh gia heuristic.",
      "Phan tich log he thong.",
      "Den cho nguoi dung phong van hay quan sat viec su dung mau thu."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Khac voi phong thi nghiem, Field Studies bat buoc nghien cuu vien phai di ra thuc dia de ghi nhan boi canh thuc te."
  },
  {
    "id": 172,
    "question": "Voi mo thuc danh gia predictive, can:",
    "chapter": 9,
    "options": [
      "Thiet lap phong lab chuyen nghiep.",
      "Ghi hinh va phan tich sau.",
      "Tuyen dung nhieu nguoi dung tham gia.",
      "Danh gia ma khong can su co mat cua nguoi dung.",
      "Su dung su hieu biet cua cac chuyen gia ve nguoi dung de du doan cac van de ve tinh dung duoc."
    ],
    "correctAnswers": [
      3,
      4
    ],
    "explanation": "Danh gia du doan (Predictive Evaluation - nhu mo hinh GOMS hay Heuristic) su dung ly thuyet va kinh nghiem cua chuyen gia de mo phong, tinh toan va du doan hanh vi, thoi gian thuc hien cua nguoi dung ma khong can tuyen mo nguoi tham gia thu nghiem truc tiep."
  },
  {
    "id": 173,
    "question": "Voi mo thuc danh gia usability testing, can:",
    "chapter": 9,
    "options": [
      "Khao sat truc tuyen.",
      "Khong can nguoi dung tham gia.",
      "Quan sat nguoi dung va ghi lai hieu suat nguoi dung khi thuc hien cac nhiem vu.",
      "Chi du dua vao y kien chuyen gia.",
      "Phan tich ma nguon he thong."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Mo thuc Usability Testing chuan trong phong Lab yeu cau thiet lap kich ban thao tac nghiêm ngat, ghi hinh va do dac chinh xac hieu suat (thoi gian lam task, so loi bam nham) cua nguoi dung de thu thap so lieu dinh luong."
  },
  {
    "id": 174,
    "question": "Co the ap dung phuong phap phat bieu suy nghi (think aloud protocol) vao giai doan nao trong quy trinh phat trien he tuong tac, ket qua danh gia la dinh luong hay dinh tinh?",
    "chapter": 9,
    "options": [
      "Chi ap dung o giai doan kiem thu, ket qua la dinh luong.",
      "Ap dung o giai doan thiet ke, ket qua la dinh luong.",
      "Ap dung o giai doan trien khai, ket qua la dinh luong.",
      "Chi ap dung o giai doan phan tich, ket qua la dinh tinh.",
      "Ap dung o bat cu giai doan nao, ket qua la dinh tinh."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Think-Aloud co the thuc hien rat som tren mau giay (Lo-Fi) cho den mau thu do phan giai cao (Hi-Fi) hoac app da chay that. Du lieu thu ve la loi noi, suy nghi, cam xuc chu quan cua nguoi dung nen no mang tinh chat dinh tinh (Qualitative) thuan tuy."
  },
  {
    "id": 175,
    "question": "Co the ap dung phuong phap theo sat nhu bong voi hinh (shadowing method) vao giai doan nao, ket qua la dinh luong hay dinh tinh?",
    "chapter": 9,
    "options": [
      "Chi ap dung o giai doan thiet ke, ket qua la dinh luong.",
      "Ap dung o giai doan phan tich, ket qua la dinh tinh.",
      "Ap dung o giai doan nghien cuu, ket qua la dinh tinh.",
      "Ap dung o giai doan kiem thu, ket qua la dinh luong.",
      "Ap dung o bat cu giai doan nao, ket qua la dinh tinh."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Shadowing method thuong duoc thuc hien trong giai doan kiem thu, thu thap du lieu ve thoi gian, tan suat va do chinh xac cua cac thao tac -> ket qua dinh luong."
  },
  {
    "id": 176,
    "question": "Co the ap dung phuong phap do hieu nang (performance measurement) vao giai doan nao, ket qua la dinh luong hay dinh tinh?",
    "chapter": 9,
    "options": [
      "Ap dung o bat cu giai doan nao, ket qua la dinh tinh.",
      "Ap dung o giai doan thiet ke, ket qua la dinh tinh.",
      "Ap dung o giai doan phan tich yeu cau, ket qua la dinh luong.",
      "Ap dung o giai doan kiem thu, ket qua la dinh luong.",
      "Chi ap dung o giai doan nghien cuu, ket qua la dinh tinh."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Do hieu nang (tinh bang giay hoan thanh, so click chuot) chi co the thuc hien khi da co mot mau thu hoat dong (kiem thu) va ket qua do dac bang so hoc hien nhien la dinh luong (Quantitative)."
  },
  {
    "id": 177,
    "question": "Co the ap dung phuong phap huong dan (teaching method) vao giai doan nao, ket qua la dinh luong hay dinh tinh?",
    "chapter": 9,
    "options": [
      "Chi ap dung o giai doan trien khai, ket qua la dinh tinh.",
      "Ap dung o giai doan thiet ke, ket qua la dinh luong.",
      "Ap dung o giai doan kiem thu, ket qua la dinh tinh.",
      "Ap dung o bat cu giai doan nao, ket qua la dinh luong.",
      "Ap dung o giai doan phan tich, ket qua la dinh luong."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Teaching method thu thap phan hoi chu quan, cac cau hoi, kho khan cua nguoi dung khi duoc huong dan -> ket qua dinh tinh, va duoc thuc hien o giai doan kiem thu."
  },
  {
    "id": 178,
    "question": "Co the ap dung phuong phap dat cau hoi (question-asking protocol) vao giai doan nao, ket qua la dinh luong hay dinh tinh?",
    "chapter": 9,
    "options": [
      "Ap dung o giai doan nghien cuu, ket qua la dinh tinh.",
      "Ap dung o bat cu giai doan nao, ket qua la dinh luong.",
      "Ap dung o giai doan kiem thu, ket qua la dinh tinh.",
      "Ap dung o giai doan phan tich, ket qua la dinh luong.",
      "Chi ap dung o giai doan thiet ke, ket qua la dinh luong."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Question-asking protocol thu thap cac cau tra loi chu quan tu nguoi dung -> dinh tinh, duoc thuc hien o giai doan kiem thu."
  },
  {
    "id": 179,
    "question": "Co the ap dung phuong phap kiem thu tu xa (remote testing) vao giai doan nao, ket qua la dinh luong hay dinh tinh?",
    "chapter": 9,
    "options": [
      "Chi ap dung o giai doan phan tich, ket qua la dinh luong.",
      "Ap dung o giai doan nghien cuu, ket qua la dinh tinh.",
      "Ap dung o giai doan kiem thu, ket qua la dinh luong.",
      "Ap dung o giai doan thiet ke, ket qua la dinh tinh.",
      "Ap dung o bat cu giai doan nao, ket qua la dinh tinh."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Remote testing thu thap du lieu do luong tu dong (thoi gian, click, ty le thanh cong) -> dinh luong, duoc thuc hien o giai doan kiem thu."
  },
  {
    "id": 180,
    "question": "Co the ap dung phuong phap kiem thu hoi tuong (retrospective testing) vao giai doan nao, ket qua la dinh luong hay dinh tinh?",
    "chapter": 9,
    "options": [
      "Chi ap dung o giai doan phan tich, ket qua la dinh luong.",
      "Ap dung o bat cu giai doan nao, ket qua la dinh tinh.",
      "Ap dung o giai doan nghien cuu, ket qua la dinh tinh.",
      "Ap dung o giai doan thiet ke, ket qua la dinh tinh.",
      "Ap dung o giai doan kiem thu, ket qua la dinh luong."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Dù phỏng vấn hồi tưởng thu thập nhiều dữ liệu chủ quan, kết quả được sử dụng để đo lường và đánh giá mức độ nhận thức, nhớ lại của người dùng - mang tính định lượng. Thực hiện ở giai đoạn kiểm thử."
  },
  {
    "id": 181,
    "question": "Cau nao sau day dung ve phuong phap cung kham pha (co-discovery learning)?",
    "chapter": 9,
    "options": [
      "Chi ap dung duoc o giai doan trien khai.",
      "Khong the ap dung trong thiet ke tuong tac.",
      "Chi ap dung cho kiem thu phan cung.",
      "Ap dung duy nhat o giai doan kiem thu.",
      "Phuong phap nay co the ap dung trong bat ky giai doan nao cua quy trinh phat trien he tuong tac."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Co-discovery method linh hoat, co the su dung som tren phac thao giay hoac muon tren san pham hoan thien."
  },
  {
    "id": 182,
    "question": "Cau nao sau day dung ve phuong phap kem cap (coaching method)?",
    "chapter": 9,
    "options": [
      "Chi ap dung cho kiem thu tu dong.",
      "May tinh tu dong cham diem.",
      "Nguoi tham gia se duoc chuyen gia kem cap ho tro.",
      "Nguoi tham gia tu thuc hien nhiem vu ma khong co tro giup.",
      "Khong can su tham gia cua nguoi dung."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Coaching method co su tham gia cua mot chuyen gia (coach) ho tro, huong dan nguoi dung trong qua trinh kiem thu."
  },
  {
    "id": 183,
    "question": "Cau nao sau day dung ve phuong phap phat bieu suy nghi (think aloud protocol)?",
    "chapter": 9,
    "options": [
      "Nguoi dung duoc yeu cau viet ra cam tuong, suy nghi va y kien ca nhan khi su dung he thong.",
      "May tinh tu dong ghi lai thao tac.",
      "Chuyen gia quan sat va tu suy luan.",
      "Nguoi dung thuc hien nhiem vu trong im lang.",
      "Khong can ghi lai gi."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Think-aloud yeu cau nguoi dung noi ra hoac viet ra nhung suy nghi, cam nhan cua ho trong qua trinh thao tac."
  },
  {
    "id": 184,
    "question": "Mo hinh nao cho phep du bao day cac thao tac va thoi gian thuc hien theo mo hinh xu ly cua con nguoi?",
    "chapter": 6,
    "options": [
      "TAG.",
      "KLM GOMS.",
      "HTA.",
      "CMN GOMS.",
      "BNF."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Card, Moran, va Newell GOMS (CMN-GOMS) la mo hinh goc phan tich nhan thuc con nguoi theo cac chuoi xu ly thong tin song song de tinh toan du bao chinh xac thoi gian thuc hien tac vu cua nguoi dung chuyen nghiep."
  },
  {
    "id": 185,
    "question": "Cach to chuc cua mot website duoc quy dinh boi cai gi?",
    "chapter": 10,
    "options": [
      "Kieu chu.",
      "Tieu de cac noi dung.",
      "So do website (Site map).",
      "Luong duyet giua cac trang (User flow).",
      "Bo cuc trang web (Layout)."
    ],
    "correctAnswers": [
      2,
      3,
      4
    ],
    "explanation": "Ba yeu to nay dinh hinh nen cau truc xuong song, kien truc thong tin (Information Architecture) va phuong thuc to chuc noi dung tong the cua mot trang web. Kieu chu hay tieu de chi thuoc ve lop giao dien truc quan be mat (Surface)."
  },
  {
    "id": 186,
    "question": "Ky thuat tao mau thu nao cho phep tao ra cach hoat dong chi tiet cho mot so tinh nang duoc chon?",
    "chapter": 8,
    "options": [
      "Pencils and papers mockups.",
      "Horizontal prototypes.",
      "Scenario.",
      "Wizard of Oz.",
      "Vertical prototypes (Mau thu chieu doc)."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Mau thu chieu doc (Vertical Prototyping) dao sau chi tiet ky thuat va hanh vi hoat dong day du cua duy nhat mot vai tinh nang trong tam da chon, thay vi xay dung giao dien nong trai rong cho toan bo he thong (Horizontal Prototyping)."
  },
  {
    "id": 187,
    "question": "Dau la nhung nhan to anh huong den thanh cong cua thiet ke giao dien web?",
    "chapter": 10,
    "options": [
      "Hieu ung dong.",
      "Mau sac.",
      "Tinh dung duoc (Usability).",
      "Tinh tien loi (Utility).",
      "Font chu."
    ],
    "correctAnswers": [
      2,
      3
    ],
    "explanation": "Su phoi hop giua Usability (su dung de dang) va Utility (cung cap dung chuc nang huu ich can thiet) se tao nen Tinh huu dung (Usefulness) cua he thong, quyet dinh su thanh cong cot loi cua website."
  },
  {
    "id": 188,
    "question": "Tinh huu dung (usefulness) cua mot he tuong tac duoc hieu la su phoi hop giua:",
    "chapter": 1,
    "options": [
      "Tinh tham my.",
      "Tinh bao mat.",
      "Tinh tien loi (Utility).",
      "Chi phi thap.",
      "Tinh dung duoc (usability)."
    ],
    "correctAnswers": [
      2,
      4
    ],
    "explanation": "Usefulness = Usability + Utility. Mot he thong co ich khi no vua de su dung (Usability) vua co dung chuc nang can thiet (Utility)."
  },
  {
    "id": 189,
    "question": "Cac hanh dong nao sau day thuoc ve quy trinh phat trien website?",
    "chapter": 10,
    "options": [
      "Tao noi dung.",
      "Tao ban tinh chinh.",
      "Cai dat.",
      "Bao tri.",
      "Chay thu."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Viec \"Tao noi dung\" (Content Creation) la mot phan cot loi cua viec xay dung thong tin tren trang web."
  },
  {
    "id": 190,
    "question": "Chung ta su dung cac phuong thuc nao sau day de thu thap du lieu dinh luong?",
    "chapter": 9,
    "options": [
      "Quan sat.",
      "Phong van.",
      "Performance measurement (Do hieu nang).",
      "Nghien cuu tai lieu.",
      "User testing (Kiem thu nguoi dung)."
    ],
    "correctAnswers": [
      2,
      4
    ],
    "explanation": "Do hieu nang va User testing thu thap cac so lieu do luong duoc (thoi gian, ty le loi, so click) -> dinh luong."
  },
  {
    "id": 191,
    "question": "Chung ta su dung cac ky thuat nao sau day de danh gia hinh thanh?",
    "chapter": 9,
    "options": [
      "Logging and tracking.",
      "Pencils and papers mockups (Mau thu giay).",
      "Performance measurement.",
      "Remote testing.",
      "Walkthrough (Duyet qua nhan thuc)."
    ],
    "correctAnswers": [
      1,
      4
    ],
    "explanation": "Danh gia hinh thanh (Formative) thuong dung mau thu do tin cay thap (pencil/paper mockups) va ky thuat duyet qua nhan thuc (cognitive walkthrough) o giai doan som."
  },
  {
    "id": 192,
    "question": "Hanh dong nao sau day khong thuoc ve quy trinh phat trien website?",
    "chapter": 10,
    "options": [
      "Kiem thu.",
      "Ket xuat noi dung (Rendering).",
      "Tao noi dung.",
      "Bao tri.",
      "Thiet ke giao dien."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "\"Ket xuat noi dung\" la mot tac vu ky thuat tu dong do trinh duyet web (Browser) thuc hien khi bien dich ma nguon HTML/CSS/JS, hoan toan khong phai la mot buoc hanh dong quan ly trong quy trinh thiet ke va phat trien website cua con nguoi."
  },
  {
    "id": 195,
    "question": "Nhung gi khong la muc tieu cua HTA?",
    "chapter": 6,
    "options": [
      "Xac dinh cac hanh dong cu the.",
      "Do hieu nang thuc hien cua may tinh.",
      "Dac ta hoi thoai nguoi dung / may tinh.",
      "Mo ta ke hoach thuc hien.",
      "Phan ra nhiem vu thanh cac buoc nho."
    ],
    "correctAnswers": [
      1,
      2
    ],
    "explanation": "HTA chi phan ra nhiem vu hanh vi cua con nguoi (ho lam gi de dat muc tieu). No hoan toan khong dac ta cau truc ngon ngu doi thoai cua may tinh (nhu BNF hay State Transition Diagrams) va cung khong co kha nang do luong hieu nang phan cung cua may tinh."
  },
  {
    "id": 197,
    "question": "De du doan thoi gian thuc hien cua nguoi dung, can su dung mo hinh nao?",
    "chapter": 6,
    "options": [
      "BNF.",
      "KLM GOMS (Keystroke-Level Model GOMS).",
      "HTA.",
      "CMN GOMS.",
      "TAG."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "KLM-GOMS la mo hinh dinh luong thuoc ho GOMS, be gay hanh dong thanh cac don vi cuc nho bang giay vat ly (nhu K: go phim = 0.2s, P: tro chuot = 1.1s, H: di tay sang chuot = 0.4s) de cong tong va du doan chinh xac thoi gian hoan thanh task cua nguoi dung."
  },
  {
    "id": 199,
    "question": "Lua chon nao sau day khong phai van de thuong gap khi thiet ke giao dien di dong?",
    "chapter": 11,
    "options": [
      "Dieu huong phuc tap.",
      "Khong gian man hinh nho gay bam nham (Fat finger problem).",
      "Hien thi phan hoi trang thai cho ro rang.",
      "Thoa man su thay doi nhu cau nguoi dung mot cach linh hoat.",
      "Boi canh chuyen dong nhieu thiet bi nhieu loan."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Viec \"thoa man su thay doi nhu cau mot cach linh hoat\" la thach thuc chung cua moi quy trinh phan mem (Software Engineering). Thiet ke di dong thuc te doi mat voi cac van de dac thu hon nhu khong gian man hinh nho gay bam nham (Fat finger problem), boi canh chuyen dong nhieu va hien thi phan hoi trang thai cho."
  },
  {
    "id": 200,
    "question": "Khi thiet ke giao dien di dong, chung ta phai bao dam nhung gi?",
    "chapter": 11,
    "options": [
      "Thu nho giao dien desktop lai.",
      "Them nhieu chuc nang phuc tap.",
      "Ho tro tam dung va luu doi voi tro choi di dong.",
      "Su dung nhieu mau sac.",
      "Luon yeu cau ket noi mang."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Boi canh su dung di dong dut quang, viec ho tro tam dung (Pause) va tu dong luu (Save) la yeu cau bat buoc."
  },
  {
    "id": 201,
    "question": "Phat bieu nao sau day la sai voi thiet ke vat chat (Material design)?",
    "chapter": 11,
    "options": [
      "Material design duoc lay cam hung tu the gioi vat chat.",
      "Cac phan tu trong Material design co cac do cao khac nhau.",
      "Material design la thiet ke phang.",
      "Cac thanh phan nam trong cac lop khac nhau co bong do khac nhau.",
      "Material design su dung mau sac ruc ro."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Material Design la ngon ngu thiet ke phi vat ly mo phong giay xep lop. No hoan toan KHONG PHAI la thiet ke phang (Flat Design) vi no su dung do sau (Elevation), truc Z va bong do (Shadows) de tao cau truc phan lop truc quan."
  },
  {
    "id": 204,
    "question": "Dau khong phai la nguyen tac heuristic de tinh chinh HTA?",
    "chapter": 6,
    "options": [
      "Chia de tri.",
      "Toi uu phan ra.",
      "Khai quat hoa nhiem vu.",
      "Dua vao cap hanh dong.",
      "Dam bao tinh can bang cua cac nhanh cay."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Viec tinh chinh mo hinh phan ra HTA tuan theo cac nguyen tac he thong nhu: Dam bao tinh can bang cua cac nhanh cay, Chia de tri, va Khai quat hoa nhiem vu."
  },
  {
    "id": 206,
    "question": "Co may loai ung dung di dong, la nhung loai nao?",
    "chapter": 11,
    "options": [
      "Chi co 1 loai: mobile app.",
      "4 loai: iOS, Android, Windows, Web.",
      "2 loai: native app va web app.",
      "5 loai: game, social, utility, education, business.",
      "3 loai: hybrid app, mobile web app, native app."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Native App: Code truc tiep bang ngon ngu goc cua he dieu hanh (Swift cho iOS, Kotlin cho Android). Mobile Web App: Trang web duoc toi uu hien thi responsive tren trinh duyet di dong. Hybrid App: Web boc trong khung ung dung native (viet bang HTML/CSS/JS chay qua WebView)."
  },
  {
    "id": 210,
    "question": "Thiet ke luong duyet man hinh di dong co the dem den cac loai trai nghiem nao sau day cho nguoi dung:",
    "chapter": 11,
    "options": [
      "Excellent experience.",
      "Premium experience.",
      "Bad experience.",
      "Adequate experience (Trai nghiem vua du/thich hop).",
      "Poor experience."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Thiet ke luong duyet (navigation flow) phu hop mang lai trai nghiem vua du, dap ung dung nhu cau ma khong gay qua tai hoac thieu hut thong tin."
  },
  {
    "id": 211,
    "question": "Dinh nghia cua ACM SIGCHI ve tuong tac nguoi may khong de cap den cac doi tuong nao sau day?",
    "chapter": 1,
    "options": [
      "Hieu nang su dung.",
      "May tinh.",
      "Moi truong phat trien.",
      "He thong tuong tac.",
      "Con nguoi."
    ],
    "correctAnswers": [
      1,
      2,
      4
    ],
    "explanation": "Dinh nghia chinh thuc cua ACM SIGCHI su dung thuat ngu chuyen mon \"interactive computing systems\" va \"human use\", hoan toan khong dung cac tu don gian nhu \"may tinh\" (computers) hay \"moi truong phat trien\" (development environment)."
  },
  {
    "id": 213,
    "question": "Moi truong va ngu canh cua he tuong tac khong bi gioi han boi yeu to to chuc, xa hoi, cong viec, linh vuc ung dung nao?",
    "chapter": 1,
    "options": [
      "Linh vuc ung dung.",
      "Cong viec.",
      "Xa hoi.",
      "Tro giup truc tuyen hoac dieu khien he thong lien tuc va tro giup thiet ke.",
      "To chuc."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "\"Tro giup truc tuyen hoac dieu khien he thong lien tuc va tro giup thiet ke\" la cac chuc nang ky thuat, khong phai la yeu to boi canh."
  },
  {
    "id": 214,
    "question": "Boi canh xa hoi anh huong nhu the nao den thiet ke he thong tuong tac dieu khien cac thiet bi tren xe hoi?",
    "chapter": 1,
    "options": [
      "Chuc nang, kenh tuong tac, giao dien, kha nang dieu khien.",
      "Chi mau sac va kieu dang.",
      "Chi gia thanh san pham.",
      "Chi kich thuoc man hinh.",
      "Chi toc do xu ly."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Boi canh xa hoi (vi du: lai xe can tap trung, co nhieu tap trung khac) anh huong den chuc nang nao duoc uu tien, kenh tuong tac nao (giong noi hay cham), giao dien the nao de giam phan tam va kha nang dieu khien ra sao."
  },
  {
    "id": 215,
    "question": "Menh de nao sau day noi ve muc tieu cua mau sac trong tiep nhan thong tin truc quan cua con nguoi?",
    "chapter": 2,
    "options": [
      "Mau sac duoc su dung de tang cuong su goi nho, ghi nho.",
      "Mau sac khong co tac dung voi thong tin.",
      "Mau sac duoc su dung de tao ra giao dien thu hut.",
      "Mau sac duoc su dung de goi nho cac du lieu dac biet.",
      "Mau sac chi de trang tri."
    ],
    "correctAnswers": [
      0,
      2,
      3
    ],
    "explanation": "Mau sac co 3 muc tieu chinh trong tiep nhan thong tin: (1) Tao diem nhan de goi nho du lieu dac biet, (2) Tao su thu hut thi giac cho giao dien, va (3) Tang cuong kha nang ghi nho thong tin (color coding)."
  },
  {
    "id": 219,
    "question": "Cac ky thuat thu thap du lieu co the duoc phoi hop voi nhau KHONG dua tren yeu to nao?",
    "chapter": 5,
    "options": [
      "Nguon thong tin can thu thap.",
      "Muc tieu nghien cuu.",
      "Dinh huong thu thap du lieu.",
      "Vi tri va kha nang tiep can cac ben lien quan.",
      "Loai thong tin can thu thap."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Viec phoi hop cac ky thuat thu thap dua tren loai thong tin, nguon thong tin, vi tri dia ly, chu khong phai dua tren \"dinh huong thu thap\" - day la he qua cua viec phoi hop chu khong phai yeu to quyet dinh."
  },
  {
    "id": 220,
    "question": "Dat cau hoi la mot trong cac ky thuat thu thap du lieu. Trong so cac menh de sau day ve thiet ke cau hoi, menh de nao sai?",
    "chapter": 5,
    "options": [
      "Cau hoi can phu hop voi doi tuong khao sat.",
      "Khong can cac phien ban khac nhau cua bang cau hoi cho cac tap nguoi dung khac nhau.",
      "Tranh cau hoi dan dat.",
      "Cau hoi nen ro rang, de hieu.",
      "Nguoi dung quyet dinh noi dung bang cau hoi thien ve tich cuc, tieu cuc hay dan xen."
    ],
    "correctAnswers": [
      1,
      4
    ],
    "explanation": "Cac doi tuong nguoi dung co tri thuc va ngon ngu khac nhau bat buoc phai co cac ban thiet ke cau hoi rieng biet phu hop voi ho. Dac biet, noi dung bang hoi phai do nha nghien cuu kiem soat nghiem ngat ve tinh khach quan de tranh dinh kien (bias), khong the giao quyen quyet dinh noi dung cho nguoi dung."
  },
  {
    "id": 223,
    "question": "Van de nao sau day khong phai la van de chinh cua viec thu thap yeu cau nguoi dung?",
    "chapter": 5,
    "options": [
      "Muc tieu.",
      "Dan dat yeu cau.",
      "Quan he giua nhung nguoi tham gia.",
      "Ban chat cua ky thuat.",
      "Lua chon nguoi tham gia."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cac van de chinh trong thu thap yeu cau nguoi dung bao gom: muc tieu, chon nguoi tham gia, quan he giua cac ben, va dan dat yeu cau. \"Ban chat cua ky thuat\" khong phai van de chinh."
  },
  {
    "id": 224,
    "question": "\"_____ duoc thuc hien theo kich ban nhung nhung van de thu vi co the duoc kham pha sau hon. Loai phong van nay co the duy tri su can bang giua tinh phong phu cua noi dung phong van va kha nang mo rong kich ban phong van.\"",
    "chapter": 5,
    "options": [
      "Phong van nhom.",
      "Phong van khong cau truc.",
      "Phong van sau.",
      "Phong van co cau truc.",
      "Phong van ban cau truc."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Phong van ban cau truc (Semi-structured interview) thiet lap mot bo khung cau hoi chuan bi truoc nhung cho phep nguoi phong van linh hoat dao sau, hoi them cac cau hoi phat sinh dua vao cau tra loi cua ung vien, ket hop hoan hao giua do rong va do sau thong tin."
  },
  {
    "id": 225,
    "question": "\"_____ duoc thuc hien theo mot kich ban chat che, thuong giong nhu mot bang cau hoi kieu phong van nay co the trien rong nhung co the thieu su phong phu ve mat noi dung phong van.\"",
    "chapter": 5,
    "options": [
      "Phong van ban cau truc.",
      "Phong van nhom.",
      "Phong van sau.",
      "Phong van co cau truc.",
      "Phong van khong cau truc."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Phong van co cau truc (Structured interview) di theo mot kich ban cau hoi co dinh, cung nhac, khong co su linh hoat chuyen y. No giup de dang chuan hoa va so sanh du lieu dien rong nhung han che viec dao sau cac goc khuat tam ly cua nguoi dung."
  },
  {
    "id": 226,
    "question": "Yeu to nao khong anh huong den viec lua chon phuong phap thu thap yeu cau cua nguoi dung?",
    "chapter": 5,
    "options": [
      "Quy trinh, nguyen tac va tieu chuan thu thap thong tin.",
      "Nhom nguoi dung trong tam.",
      "Nguon thong tin can thu thap.",
      "Vi tri va kha nang tiep can cac ben lien quan.",
      "Loai thong tin can thu thap."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Loai thong tin, nguon thong tin, vi tri va kha nang tiep can la nhung yeu to anh huong. Quy trinh, nguyen tac thu thap va nhom nguoi dung trong tam khong phai yeu to anh huong truc tiep."
  },
  {
    "id": 227,
    "question": "Phat bieu nao sau day ve mau thu va qua trinh tao mau thu la DUNG?",
    "chapter": 8,
    "options": [
      "Tao mau thu khong phai la cach lam re.",
      "Trong mau thu tuong tac do tin cay cao, so do dieu huong duoc dinh nghia ro rang.",
      "Trong thiet ke tuong tac, mau thu giao dien co the duoc su dung de kiem tra cac phan co the nhin thay cua thiet ke.",
      "Trong mau thu giao dien do tin cay thap, co the phat hien cac van de ve bo cuc man hinh.",
      "Mau thu do tin cay thap ton nhieu thoi gian."
    ],
    "correctAnswers": [
      1,
      2,
      3
    ],
    "explanation": "Mau thu (prototype) duoc su dung de kiem tra cac phan nhin thay cua thiet ke. Mau thu do tin cay cao co so do dieu huong ro rang. Mau thu do tin cay thap giup phat hien van de bo cuc som."
  },
  {
    "id": 235,
    "question": "Giam doc cong ty ABC quyet dinh su dung mot phan mem quan ly cong viec trong cong ty voi giao dien command-line. Dieu gi se xay ra khi phan mem nay duoc trien khai trong thuc te?",
    "chapter": 3,
    "options": [
      "Khong co van de gi xay ra.",
      "Nang suat se tang cao.",
      "Hau het nhan vien se cam thay mat tinh than va khong muon su dung phan mem nay.",
      "Nhan vien se rat hai long vi tinh nang manh me.",
      "Nhan vien se de dang thich nghi."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Giao dien dong lenh (Command-line) doi hoi nguoi dung phai co ky nang ky thuat cao, nho chinh xac cu phap lenh va ton cuc ky nhieu thoi gian dao tao. Ap dung no cho nhan vien van phong pho thong (non-experts) se gay ra su sut giam nghiem trong ve dong luc lam viec va ty le chap nhan he thong thap."
  },
  {
    "id": 236,
    "question": "Ly do nao sau day la ly do chinh dang de dua am thanh vao giao dien?",
    "chapter": 7,
    "options": [
      "So voi tin hieu hinh anh, nguoi dung phan ung voi tin hieu am thanh nhanh hon.",
      "Am thanh giam chi phi san xuat.",
      "Am thanh lam giao dien dep hon.",
      "Am thanh tiet kiem bo nho.",
      "Am thanh de thiet ke hon."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Nghien cuu sinh ly hoc than kinh chung minh rang thoi gian phan xa cua nao bo doi voi kich thich thinh giac (am thanh) nhanh hon so voi kich thich thi giac (hinh anh). Viec dua am thanh canh bao ngan (Beep/Ping) giup nguoi dung phan ung khan cap voi cac loi he thong nhanh nhat."
  },
  {
    "id": 238,
    "question": "Ly do nao sau day la ly do chinh dang de ban quan tam den viec thiet ke mot giao dien tot cho phan mem?",
    "chapter": 1,
    "options": [
      "Giao dien dep giup ban ban phan mem dat hon.",
      "Khong phai moi nguoi dung deu la chuyen gia may tinh.",
      "Giao dien tot lam tang toc do mang.",
      "Giao dien tot giam thoi gian bien dich.",
      "Giao dien tot giam dung luong o cung."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Day la cot loi cua triet ly UI/UX. Phan mem lam ra phuc vu cho dai chung xa hoi voi moi trinh do, tuoi tac khac nhau. Thiet ke giao dien tot giup xoa bo rao can ky thuat, cho phep nhung nguoi khong biet lap trinh van van hanh he thong tron tru."
  },
  {
    "id": 241,
    "question": "\"_____ cung cap su hieu biet ve cac nhiem vu ma nguoi dung can thuc hien de dat duoc cac muc tieu nhat dinh.\"",
    "chapter": 6,
    "options": [
      "BNF.",
      "GOMS.",
      "TAG.",
      "HTA (hierarchical task analysis).",
      "OSTA."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "HTA (Hierarchical Task Analysis) la phuong phap phan tich nhiem vu phan cap, giup hieu ro cac buoc ma nguoi dung can thuc hien de hoan thanh muc tieu."
  },
  {
    "id": 242,
    "question": "\"_____ tham chieu toi cach doi tuong nen duoc su dung, mot manh moi truc quan ve chuc nang va cong dung cua doi tuong do.\"",
    "chapter": 7,
    "options": [
      "rang buoc (constraints).",
      "anh xa (mapping).",
      "truc quan (visibility).",
      "the cho (affordance).",
      "phan hoi (feedback)."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Affordance la tinh chat goi y truc quan cua mot doi tuong ve cach no nen duoc su dung, nhu hinh dang cai nut goi y viec bam."
  },
  {
    "id": 243,
    "question": "\"_____ la cach bieu dien cau truc cua website.\"",
    "chapter": 10,
    "options": [
      "Navigation.",
      "Content.",
      "Wireframe.",
      "Site map (So do trang).",
      "Layout."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "So do trang (Site map) la bieu do the hien cau truc phan cap cua cac trang trong mot website, giup hieu ro cach to chuc thong tin."
  },
  {
    "id": 244,
    "question": "Bang cau hoi thuc hien sau khi kiem thu tinh dung duoc (usability testing) thuong duoc su dung de do:",
    "chapter": 9,
    "options": [
      "Chi phi phat trien.",
      "Do phuc tap cua code.",
      "Toc do xu ly.",
      "Muc do hai long cua nguoi dung.",
      "So loi lap trinh."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cac thang do chuan hoa quoc te phat sau khi test (nhu SUS - System Usability Scale, hay CSUQ) tap trung do luong tinh chu quan: Muc do hai long, trai nghiem de chiu va su ua chuong cua nguoi dung doi voi he thong."
  },
  {
    "id": 245,
    "question": "Phuong phap tao kich ban (storyboarding):",
    "chapter": 8,
    "options": [
      "Khong duoc su dung trong thiet ke tuong tac.",
      "La phuong phap kiem thu tu dong.",
      "Chi dung trong thiet ke do tin cay cao.",
      "Thuong duoc hien trong thiet ke do tin cay thap.",
      "La cong cu phan tich yeu cau."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Storyboarding thuong duoc thuc hien o giai doan thiet ke do tin cay thap (Lo-Fi) de phac hoa luong tuong tac cua nguoi dung."
  },
  {
    "id": 246,
    "question": "Cung cap cac tien ich gia tri gia tang, vi du nhu cac phim tat nham nang cao:",
    "chapter": 7,
    "options": [
      "Tinh mo rong.",
      "Tinh nang suat.",
      "Tinh bao mat.",
      "Tinh tuong thich.",
      "Tinh tham my."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Phim tat (Shortcuts) giup nguoi dung bo qua thao tac di chuot ruom ra qua nhieu lop menu do hoa, truc tiep kich hoat lenh bang 1 to hop phim go, toi uu hoa toc do thuc hien nhiem vu (Nang suat / Efficiency)."
  },
  {
    "id": 248,
    "question": "Luong thong tin cua mot website thuong chi ra:",
    "chapter": 10,
    "options": [
      "Kich thuoc hinh anh.",
      "Thu tu cac hanh dong nguoi dung can lam de hoan thanh mot nhiem vu.",
      "Cach bo tri mau sac.",
      "Dung luong trang web.",
      "Kieu font chu su dung."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Luong duyet (User flow / Information flow) la so do mo ta chinh xac buoc tiep theo nguoi dung phai bam vao dau, re nhanh logic the nao de di tu diem bat dau den diem hoan thanh muc tieu."
  },
  {
    "id": 250,
    "question": "Theo cac nguyen ly thiet ke cua Norman, banh xe giua 2 phim chuot phai / trai la _____ cua thao tac lan, khong phai thao tac nhan.",
    "chapter": 7,
    "options": [
      "The cho (Affordance).",
      "Rang buoc (Constraint).",
      "Anh xa (Mapping).",
      "Truc quan (Visibility).",
      "Phan hoi (Feedback)."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Banh xe cuon chuot co hinh dang tru tron goi y hanh dong lan (xoay) bang ngon tay, day la affordance (the cho) vat ly."
  },
  {
    "id": 251,
    "question": "He tuong tac can cung cap cac phan hoi chinh xac va phu hop de tranh truong hop nguoi dung:",
    "chapter": 7,
    "options": [
      "Mat ket noi mang.",
      "Thoat ung dung ngoai y muon.",
      "Tai file qua cham.",
      "Hieu nham cach hoat dong thuc te cua he thong.",
      "Quen mat khau."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Feedback (Phan hoi) ngay lap tuc giup nguoi dung kiem chung xem hanh dong cua ho da tac dong the nao den trang thai may tinh. Thieu phan hoi, nguoi dung se tu suy dien bua bai va xay dung nen mot mo hinh nhan thuc sai lam ve cach hoat dong cua he thong."
  },
  {
    "id": 252,
    "question": "He tuong tac can quan tam den kha nang sai sot va so suat cua nguoi dung de tranh truong hop nguoi dung:",
    "chapter": 7,
    "options": [
      "Mat du lieu.",
      "Tai lieu bi mat.",
      "Gap nhieu tinh huong phat sinh loi.",
      "Quen thao tac.",
      "Thoat ung dung."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "He thong can du doan va phong truoc cac loi ma nguoi dung co the mac phai, giam thieu cac tinh huong loi phat sinh."
  },
  {
    "id": 253,
    "question": "He tuong tac can co tinh anh xa (mapping) de tranh truong hop nguoi dung:",
    "chapter": 7,
    "options": [
      "Nho nhieu.",
      "Bam nham.",
      "Quen mat khau.",
      "Thoat ung dung.",
      "Mat du lieu."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Anh xa tu nhien (Natural mapping) giup thiet ke bo dieu khien trung khop voi mo hinh khong gian vat ly thuc te. Anh xa tot giup nguoi dung thao tac truc giac ma khong can ton bo nho de ghi nho quy tac."
  },
  {
    "id": 254,
    "question": "He tuong tac can co tinh rang buoc vat ly va the cho de tranh truong hop nguoi dung:",
    "chapter": 7,
    "options": [
      "Thoat ung dung.",
      "Quen mat khau.",
      "Khong ro phai lam gi voi he thong.",
      "Mat du lieu.",
      "Bam nham nut."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Rang buoc vat ly va the cho giup nguoi dung de dang nhan biet duoc hanh dong nao co the thuc hien va hanh dong nao khong, tranh tinh trang lung tung."
  },
  {
    "id": 255,
    "question": "He tuong tac can co tinh nhat quan de tranh truong hop nguoi dung:",
    "chapter": 7,
    "options": [
      "Nho nhieu.",
      "Mat du lieu.",
      "Thoat ung dung.",
      "Bam nham.",
      "Quen thao tac."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Tinh nhat quan giup nguoi dung ap dung cac kien thuc da hoc tu phan nay sang phan khac cua ung dung, giam tai bo nho."
  },
  {
    "id": 350,
    "question": "Các yêu cầu chức năng chỉ ra những gì hệ thống phải làm trong khi các yêu cầu phi chức năng chỉ ra:",
    "chapter": 5,
    "options": [
      "Các bảo đảm",
      "Độ đậm nhạt",
      "Ràng buộc người dùng",
      "Thiết kế dữ liệu",
      "Ràng buộc hệ thống"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 350: Non-functional requirements (VD: App phai load duoi 2s, bao mat ma hoa SSL) khong tao ra tinh nang moi, ma tao ra CAC RANG BUOC KY THUAT (Constraints) cho he thong do. Dap an dung: \"Rang buoc he thong\"."
  },
  {
    "id": 351,
    "question": "Mô hình nào mô tả giao diện người dùng cùng với tất cả thông tin hỗ trợ?",
    "chapter": 5,
    "options": [
      "Mô hình thực hiện",
      "Mô hình của người dùng",
      "Nhận thức hệ thống",
      "Mô hình kỹ thuật xã hội OSTA",
      "Mô hình người dùng"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cau 351: Theo dinh nghia cua Alan Cooper, Implementation Model mo ta cach may moc/phan mem thuc su duoc cai dat ben duoi (code, database, kien truc ho tro) dung sau giao dien. Dap an dung: \"Mo hinh thuc hien (Implementation model)\"."
  },
  {
    "id": 352,
    "question": "Trong kịch bản sau: \"Kỹ sư điều khiển một cánh tay robot thông qua một phần mềm điều khiển mô phỏng trên thiết bị di động\", đâu là tương tác?",
    "chapter": 11,
    "options": [
      "Kỹ sư",
      "Phần mềm mô phỏng",
      "Robat",
      "Thiết bị di động",
      "Điều khiển cánh tay robot"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 352: Tuong tac (Interaction) la DONG TU/Hanh dong giao tiep giua chu the va doi tuong. O day \"Thiet bi\", \"Ky su\", \"Robot\" la danh tu thuc the. \"Dieu khien\" la qua trinh tuong tac. Dap an dung: \"Dieu khien canh tay robot\"."
  },
  {
    "id": 354,
    "question": "Trong các mô thức đánh giá thiết kế, mô thức nào có vai trò của người dùng trong đánh giá là thấp nhất?",
    "chapter": 9,
    "options": [
      "Kiểm tra tính dùng được",
      "Nhanh",
      "Vai trò của người dùng trong các mô thức đánh giá là như nhau",
      "Dự đoán",
      "Nghiên cứu thực địa"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 354: Danh gia du doan (nhu Heuristic Evaluation) hoan toan do cac CHUYEN GIA UX tu ngoi ra soat dua tren luat thiet ke, hoan toan KHONG MOI nguoi dung tham gia. Dap an dung: \"Du doan (Predictive evaluation)\"."
  },
  {
    "id": 355,
    "question": "Yếu tố nào nên được hạn chế trong một thiết kế giao diện web?",
    "chapter": 10,
    "options": [
      "Sự nổi bật của tiêu đề chính",
      "Số lượng font chữ",
      "Dữ liệu được hiển thị",
      "Số lượng hình ảnh",
      "Khoảng trắng"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 355: Luat thiet ke Typography co ban: Mot website/app khong nen dung qua 2-3 ho Font (Typefaces). Dung nhieu font khien thiet ke hon loan, mat tinh nhat quan va tai cham. Dap an dung: \"So luong font chu\"."
  },
  {
    "id": 356,
    "question": "Tính nhất quán của giao diện được thể hiện qua:",
    "chapter": 10,
    "options": [
      "Các ứng dụng phải được thiết kế giống các ứng dụng đã có",
      "Các phương pháp điều hướng nhạy cảm với ngữ cảnh",
      "Cơ chế input giống nhau trong suốt ứng dụng",
      "Mỗi ứng dụng phải có giao diện riêng biệt",
      "Các hình ảnh được thiết kế theo cùng một tiêu chuẩn"
    ],
    "correctAnswers": [
      2,
      4
    ],
    "explanation": "Cau 356: Nhat quan (Consistency) la su dong bo Noi bo: Cung mot app thi nut Submit o trang nao cung phai co mau Xanh, icon Stroke do day 2px phai bang nhau. Dap an dung: \"Co che input giong nhau trong suot ung dung\", \"Cac hinh anh duoc thiet ke theo cung mot tieu chuan\"."
  },
  {
    "id": 357,
    "question": "Những yếu tố nào không được đưa vào một thiết kế wireframe?",
    "chapter": 10,
    "options": [
      "Các loại font chữ",
      "Bố cục",
      "Vị trí các khoảng trắng",
      "Ảnh",
      "Màu sắc"
    ],
    "correctAnswers": [
      0,
      3,
      4
    ],
    "explanation": "Cau 357: Wireframe la \"ban phac thao khung xuong\" o dang trung thuc thap (Low-fidelity), chi xai thang mau xam (Grayscale), xai o gach cheo thay cho anh that, nham tap trung duyet BO CUC truoc. Dap an dung (cac yeu to KHONG co trong wireframe): \"Cac loai font chu\", \"Anh\", \"Mau sac\"."
  },
  {
    "id": 358,
    "question": "Người dùng đọc một trang web như thế nào?",
    "chapter": 10,
    "options": [
      "Từ phải sang trái, từ trên xuống dưới",
      "Từ trung tâm màn hình ra ngoài",
      "Người dùng không đọc, chỉ scan cả trang web để chọn các câu và từ riêng biệt",
      "Từ trái sang phải, từ trên xuống dưới",
      "Xem các thành phần đồ họa trước, sau đó đọc text"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 358: Theo nghien cuu mat cua Nielsen Norman Group, User hiem khi doc tung chu (read). Ho thuong \"quet\" (Scan) theo hinh chu F hoac chu Z de bat tu khoa (Keywords). Dap an dung: \"Nguoi dung khong doc, chi scan ca trang web de chon cac cau va tu rieng biet\"."
  },
  {
    "id": 359,
    "question": "Khái niệm nào sau đây KHÔNG PHẢI là ngôn ngữ thiết kế cho thiết bị di động?",
    "chapter": 11,
    "options": [
      "Flat design",
      "Metro design",
      "Responsive design",
      "Skeuomorph design",
      "Material design"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 359: Responsive Design la ky thuat CSS (Media queries) giup web co gian theo man hinh. Material (Google), Flat, Skeuomorph (Apple cu) moi la truong phai tham my (Ngon ngu thiet ke). Dap an dung: \"Responsive design\"."
  },
  {
    "id": 360,
    "question": "Đề xuất nào sau đây là SAI về tính dùng được của trò chơi di động?",
    "chapter": 11,
    "options": [
      "Không lãng phí thời gian của người dùng",
      "Người dùng phải luôn có khả năng tạm dừng",
      "Xây dựng các yếu tố trò chơi dựa trên âm thanh",
      "Chọn giải pháp đơn giản",
      "Tự động lưu trò chơi khi người dùng thoát khỏi trò chơi"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 360: Nguoi choi Mobile Game thuong choi o cho dong nguoi (bus, van phong) va tat tieng (Mute). Thiet ke core-game phu thuoc 100% vao am thanh se lam game khong the choi duoc. Dap an dung (cau SAI): \"Xay dung cac yeu to tro choi dua tren am thanh\"."
  },
  {
    "id": 361,
    "question": "Hai loại tương tác điều hướng cho thiết bị di động là:",
    "chapter": 11,
    "options": [
      "Touch & drag",
      "Click & scroll",
      "Drag & scroll",
      "Touch & scroll",
      "Click & drag"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 361: Tren dien thoai cam ung, hanh dong tu nhien nhat la Tap/Touch (cham) thay cho Click chuot, va Vuot/Scroll (cuon) de xem them noi dung. Dap an dung: \"Touch & scroll\"."
  },
  {
    "id": 362,
    "question": "Chỉ ra luồng thông tin thông thường trên thiết bị di động?",
    "chapter": 11,
    "options": [
      "Header - Content - Navigation - Footer",
      "Navigation - Content - Navigation - Footer",
      "Header - Navigation - Content - Navigation",
      "Header - Navigation - Content - Navigation - Footer",
      "Navigation - Header - Content - Footer"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 362: Bo cuc Mobile Web kinh dien: Phan dau (Header/Logo) -> Thanh Menu tren (Nav) -> Noi dung chinh -> Thanh phan trang/menu duoi (Nav) -> Chan trang (Footer). Dap an dung: \"Header - Navigation - Content - Navigation - Footer\"."
  },
  {
    "id": 363,
    "question": "Giao diện được thiết kế với nhiều hình ảnh chuyển động có thể:",
    "chapter": 10,
    "options": [
      "Làm người dùng phân tâm",
      "Tạo ra sản phẩm sinh động",
      "Làm người dùng chăm chú",
      "Tăng tính hấp dẫn",
      "Gây chú ý nhiều hơn"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cau 363: Mat nguoi co phan xa bi hut vao vat the chuyen dong. Neu lam dung Animation (qua nhieu anh GIF dong), User se bi xao nhanh khoi thong tin/chu viet cot loi. Dap an dung: \"Lam nguoi dung phan tam\"."
  },
  {
    "id": 364,
    "question": "Tăng độ tương phản trên màn hình có thể:",
    "chapter": 2,
    "options": [
      "Tăng chất lượng hiển thị",
      "Thay đổi sự tương tác",
      "Đảm bảo tính rõ ràng",
      "Gây chói mắt",
      "Tăng khả năng tái sử dụng"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 364: Contrast (Tuong phan) giua chu va nen (VD: Chu Den tren nen Trang) la yeu to hang dau trong chuan Accessibility (WCAG), giup chu sac net, Ro rang (Legibility). Dap an dung: \"Dam bao tinh ro rang\"."
  },
  {
    "id": 365,
    "question": "Mệnh đề nào sau đây là đúng?",
    "chapter": 4,
    "options": [
      "Tại bước 3 của quy trình thiết kế lấy người dùng làm trung tâm, cần đo đánh giá chất lượng sản phẩm từ quan điểm của người dùng",
      "cần chú trọng dự báo phân khúc thị trường để sản phẩm được thị trường chấp nhận",
      "Với quy trình thiết kế lấy người dùng làm trung tâm",
      "Tại bước 3 của quy trình thiết kế lấy người dùng làm trung tâm, chỉ chú trọng vào người dùng vào giai đoạn cuối của thiết kế",
      "Quy trình thiết kế lấy người dùng làm trung tâm không chú trọng vào việc định nghĩa tính dùng được, bao gồm tính dễ học, dễ sử dụng và phân khúc người dùng",
      "bước đầu tiên là xác định và phân loại người dùng tiềm năng trong tương lai",
      "Tại bước 3 của quy trình thiết kế lấy người dùng làm trung tâm"
    ],
    "correctAnswers": [
      1,
      2,
      5,
      6
    ],
    "explanation": "Cau 365: User-Centered Design LUON dinh nghia user dau tien. Buoc phan tich chien luoc (buoc 3 theo giao trinh nay) can du bao thi truong (Market segment) de dam bao App ban duoc. Dap an dung: \"UCD buoc dau la xac dinh phan loai nguoi dung tiem nang\", \"UCD buoc 3 chu trong du bao phan khuc thi truong chap nhan\"."
  },
  {
    "id": 366,
    "question": "Khi thiết kế giao diện cho các trò chơi trên thiết bị di động, chúng ta phải:",
    "chapter": 11,
    "options": [
      "Hỗ trợ các tính năng tạm dừng (pause) và lưu (save)",
      "Bảo đảm người dùng luôn có kết nối mạng",
      "Bảo đảm các thành phần được thu nhỏ lại để vừa với màn hình di động",
      "Không cung cấp giải thưởng cho người chơi",
      "Hỗ trợ nhiều tính năng thay vì tính đơn giản của trò chơi"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cau 366: Boi canh choi Mobile game mang tinh dut quang cao (dang choi thi co sep goi, dien thoai den, het tram xe bus). Do do nut Pause va Autosave la song con. Dap an dung: \"Ho tro cac tinh nang tam dung (pause) va luu (save)\"."
  },
  {
    "id": 367,
    "question": "Phát biểu nào sau đây là sai?",
    "chapter": 2,
    "options": [
      "Các phần tử trong Material Design có các độ cao khác nhau",
      "Material Design được lấy cảm hứng từ thế giới vật chất và các kết cấu của nó, bao gồm cả cách chúng phản chiếu ánh sáng và đổ bóng",
      "Các thành phần nằm trong các lớp khác nhau có bóng đổ khác nhau",
      "Material Design là thiết kế phẳng",
      "Material Design sử dụng màu sắc rực rỡ"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 367: Material Design (cua Google) CHONG LAI thiet ke phang truyen thong. No mo phong to giay (Material), xep chong len nhau theo truc Z (Do cao/Z-index) va co danh Bong do (Drop Shadow). Dap an dung (cau SAI): \"Material Design la thiet ke phang\"."
  },
  {
    "id": 368,
    "question": "Storyboarding là kỹ thuật tạo mẫu thử cho phép người thiết kế:",
    "chapter": 8,
    "options": [
      "Giới thiệu giao diện người dùng",
      "Mô phỏng các hành vi tương tác và các chức năng ứng dụng cung cấp",
      "Thảo luận chi tiết về sản phẩm cuối cùng cũng như các kế hoạch đưa sản phẩm này ra thị trường",
      "Tập trung vào các nhiệm vụ người dùng đang thực hiện",
      "Tạo ra môi trường tương tác sống động như thật, chi tiết cho mọi người dùng"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 368: Storyboard (Bang truyen) vay muon tu dien anh. No ve ra cac hoat canh mo ta \"Cau chuyen\" User dang o dau, thao tac lam viec/Task cua ho giai quyet van de doi song the nao. Dap an dung: \"Tap trung vao cac nhiem vu nguoi dung dang thuc hien\"."
  },
  {
    "id": 369,
    "question": "Wizard of Oz là kỹ thuật tạo mẫu thử cho phép người thiết kế:",
    "chapter": 8,
    "options": [
      "Tập trung vào các nhiệm vụ người dùng đang thực hiện",
      "Vạch ra các kịch bản người dùng (user scenario) và các luồng hành vi của ứng dụng",
      "Mô phỏng các hành vi tương tác và các chức năng ứng dụng cung cấp",
      "Thảo luận chi tiết về sản phẩm cuối cùng cũng như các kế hoạch đưa sản phẩm này ra thị trường",
      "Minh họa mục tiêu và các hoạt động cần thiết để thực hiện mục tiêu đó"
    ],
    "correctAnswers": [
      1,
      2
    ],
    "explanation": "Cau 369: Ky thuat \"Phu thuy xu Oz\" la cho User dung 1 ban Prototype trong nhu co AI that, nhung thuc ra co 1 nguoi dieu khien (phu thuy) nap o phong sau bam nut thay may. Ky thuat nay tuyet voi de Mo phong luong hanh vi tuong tac phuc tap (Voice AI) ma chua can code. Dap an dung: \"Vach ra cac kich ban nguoi dung (user scenario) va cac luong hanh vi\", \"Mo phong cac hanh vi tuong tac va cac chuc nang\"."
  },
  {
    "id": 370,
    "question": "Khi muốn phỏng vấn người dùng về cảm tưởng của họ với một tính năng của một ứng dụng cụ thể, nên sử dụng câu hỏi nào?",
    "chapter": 5,
    "options": [
      "Hãy liệt kê một số nhược điểm của tính năng ABC của ứng dụng XYZ mà bạn không thích?",
      "Bạn có thích tính năng ABC của ứng dụng XYZ không?",
      "Tính năng ABC của ứng dụng XYZ làm bạn hài lòng phải không?",
      "Bạn nghĩ thế nào về tính năng ABC của ứng dụng XYZ?",
      "Trên thang điểm 100",
      "bạn cho tính năng ABC của ứng dụng XYZ bao nhiêu điểm hài lòng?"
    ],
    "correctAnswers": [
      3,
      4,
      5
    ],
    "explanation": "Cau 370: Ky nang Phong van UX (User Interview) cam ky hoi cau Dan dat (Leading question - nhu \"Ban thich khong?\"). Phai hoi trung lap \"Ban nghi the nao\" de ho boc bach, va hoi thang diem de lay dinh luong. Dap an dung: \"Ban nghi the nao ve tinh nang ABC...?\", \"Tren thang diem 100, ban cho tinh nang ABC... bao nhieu diem?\""
  },
  {
    "id": 371,
    "question": "Bạn thực hiện mua sắm trên một trang thương mại điện tử. Bạn biết rằng nếu bạn đăng ký gói dịch vụ ưu đãi giao hàng của bên thứ 3, bạn sẽ được miễn phí 10 lần giao hàng. Tuy nhiên, bạn không biết là bạn sẽ được hưởng ưu đãi này ngay khi đăng ký trên trang thương mại điện tử, hay phải đợi đến lúc có xác nhận của nhà cung cấp gói dịch vụ ưu đãi giao hàng. Tiêu chí / nguyên tắc thiết kế nào dưới đây đã bị vi phạm?",
    "chapter": 7,
    "options": [
      "Dự báo lỗi (Error prevention)",
      "Giúp người dùng nhận biết, chẩn đoán và khắc phục lỗi (Help users recognize, diagnose, and recover from errors)",
      "Trợ giúp và tài liệu (Help and documentation)",
      "Quyền kiểm soát và quyền tự do của người dùng (User control and freedom)",
      "Tính trực quan (Visibility)"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 371: Viec he thong thieu di cac nut dau hoi (Tooltip/FAQ/Help) de giai thich RO RANG luat choi/dieu khoan cho user chinh la vi pham nguyen tac \"Cung cap tai lieu tro giup\" cua he thong heuristics. Dap an dung: \"Tro giup va tai lieu (Help and documentation)\"."
  },
  {
    "id": 372,
    "question": "Chọn phát biểu sai trong thiết kế giao diện web:",
    "chapter": 10,
    "options": [
      "Kết xuất là cách định dạng, tổ chức nội dung web và quan hệ logic giữa chúng",
      "Các thông tin có trên trang web gồm văn bản, đồ họa, mẫu biểu, liên kết hay các phần tử tương tác gọi là nội dung web",
      "Điều hướng là việc cho phép người dùng di chuyển trong website",
      "Trợ giúp tương tác là nói với người dùng họ đang ở đâu, và họ có thể tiếp tục đi đến đâu",
      "Thiết kế giao diện cho các website và ứng dụng sử dụng giao thức web"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 372: \"Noi voi user ho dang o dau va di den dau\" la dinh nghia cua BO DIEU HUONG (Navigation System - VD: Breadcrumbs). No khong phai dinh nghia cua cong cu \"Tro giup\" (Help). Dap an dung (cau SAI): \"Tro giup tuong tac la noi voi nguoi dung ho dang o dau, va ho co the tiep tuc di den dau\"."
  },
  {
    "id": 373,
    "question": "Đâu không phải nhiệm vụ chính của thiết kế giao diện web ?",
    "chapter": 10,
    "options": [
      "Thiết kế điều hướng",
      "Thiết kế dữ liệu",
      "Thiết kế kết xuất nội dung",
      "Thiết kế nội dung",
      "Thiết kế hỗ trợ tương tác"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 373: UI Designer/Web Designer phu trach \"Be mat\" (Frontend): Bo cuc, Dieu huong, Font chu. Cau truc va Thiet ke Database (CSDL) la viec cua Ky su Backend/Data Architect. Dap an dung: \"Thiet ke du lieu\"."
  },
  {
    "id": 380,
    "question": "Chọn phát biểu sai đối với việc đánh giá tính dùng được của hệ tương tác?",
    "chapter": 9,
    "options": [
      "Kiểm thử người dùng có thể là một đánh giá hình thành hoặc đánh giá tổng kết",
      "Đánh giá hình thành được sử dụng để nhận biết tính dùng được",
      "Đánh giá tính dùng được của hệ tương tác để xác định thiết kế tương tác đáp ứng yêu cầu người dùng",
      "Khi đánh giá tính dùng được của hệ tương tác, có thể đặt câu hỏi trực tiếp với người tham gia",
      "Đánh giá tổng kết được sử dụng để đánh giá mức độ đạt được các tiêu chí của tính dùng được"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 380: Danh gia hinh thanh (Formative) lam o giai doan so khai nham tim LUONG/LOI thiet ke de sua chua. De ket luan/do luong App do co Usability ra sao (Dat chuan chua), phai xai Danh gia Tong ket (Summative). Dap an dung (cau SAI): \"Danh gia hinh thanh duoc su dung de nhan biet tinh dung duoc\"."
  },
  {
    "id": 382,
    "question": "Đâu không phải là nhiệm vụ trong đánh giá tương tác ?",
    "chapter": 9,
    "options": [
      "Khẳng định tính hiệu quả trong giao tiếp người dùng",
      "Xác định các vấn đề tồn tại của hệ thống đối với người dùng",
      "Đánh giá sự hài lòng của người dùng",
      "Đánh giá về khả năng sử dụng",
      "Khẳng định sự an toàn của hệ thống"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 382: Danh gia tuong tac (Usability Testing) tim kiem loi UX, su thoa man va rao can thao tac. Xac dinh \"van de ton tai cua he thong\" (Bugs he thong/hong server/bao tri) thuoc ve System Testing. Dap an dung: \"Xac dinh cac van de ton tai cua he thong doi voi nguoi dung\"."
  },
  {
    "id": 383,
    "question": "Kỹ thuật kiểm thử người dùng trong môi trường làm việc của họ (onsite) và kỹ thuật kiểm thử người dùng tại nơi phát triển hệ tương tác (lab-based) giống nhau ở:",
    "chapter": 9,
    "options": [
      "Đối tượng tham gia kiểm thử",
      "Điều kiện môi trường",
      "Các yếu tố chi phối người dùng",
      "Hình thức giao tiếp",
      "Thời gian thực hiện"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 383: Field study (Thuc dia) khac hoan toan Lab-based (Phong Lab) ve boi canh co on ao hay khong, hinh thuc trao doi. Chung chi chia se chung mot quy trinh (chuan bi, chay test, phong van sau do) va deu ton kha nhieu Thoi gian thuc hien. Dap an dung: \"Thoi gian thuc hien\"."
  },
  {
    "id": 384,
    "question": "Đâu là phát biểu không đúng về đánh giá hình thành?",
    "chapter": 8,
    "options": [
      "Đánh giá hình thành t hu hút sự tham gia sớm của người dùng",
      "Đánh giá hình thành cho phép kiểm tra các giả định",
      "Đánh giá hình thành ghi lại những điều mà người dùng suy nghĩ",
      "Đánh giá hình thành yêu cầu người dùng thực hiện một nhiệm vụ trên mẫu thử",
      "Đánh giá hình thành bắt đầu từ mẫu thử độ tin cậy thấp"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 384: Danh gia hinh thanh tap trung phan tich task, su co xat cua nguoi thiet ke voi ban ve nhap. Viec bat nguoi dung lam bam suy nghi (Think Aloud) thuong la ky thuat ap dung pho bien trong Usability Testing luc chay thuc te. Dap an dung (phat bieu KHONG DUNG): \"Danh gia hinh thanh ghi lai nhung dieu ma nguoi dung suy nghi\"."
  },
  {
    "id": 385,
    "question": "Phát biểu nào sau đây là sai về người dùng trong đánh giá tính dùng được của hệ tương tác ?",
    "chapter": 1,
    "options": [
      "các đối tượng người dùng khác nhau có thể có kiến thức và kĩ năng khác nhau",
      "không biết giao diện tốt như thế nào cho đến khi người dùng sử dụng nó",
      "có thể dự đoán được người dùng sẽ làm gì",
      "cần đánh giá về phản hồi cảm xúc của người dùng",
      "thời gian làm việc của người dùng là một yếu tố quan trọng"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 385: Nguyen tac so 1 trong nganh UX: \"Nguoi dung khong bao gio cu xu nhu ban nghi\". Ban KHONG THE du doan 100% huong click chuot cua ho, do la ly do chung ta buoc phai lam User Testing. Dap an dung (cau SAI): \"co the du doan duoc nguoi dung se lam gi\"."
  },
  {
    "id": 386,
    "question": "Phát biểu nào sau đây là sai về đánh giá tính dùng được?",
    "chapter": 1,
    "options": [
      "Đảm bảo tách biệt về không gian và thời gian giữa tester và người dùng",
      "Chỉ nên sử dụng một phương pháp phù hợp",
      "Không nên sử dụng hình thức đặt câu hỏi trực tiếp",
      "Dữ liệu kiểm tra có thể được lấy từ nhật ký",
      "Có thể sử dụng kinh nghiệm trong quá khứ của người dùng"
    ],
    "correctAnswers": [
      3,
      4
    ],
    "explanation": "Cau 386: Viec trich xuat Log file (Nhat ky) va hoi kinh nghiem qua khu (Retrospective) LA NHUNG PHUONG PHAP DUNG de danh gia Usability. Dap an dung theo dap an cua de: \"Du lieu kiem tra co the duoc lay tu nhat ky\", \"Co the su dung kinh nghiem trong qua khu cua nguoi dung\"."
  },
  {
    "id": 395,
    "question": "Khẳng định nào là đúng đối với kỹ thuật kiểm thử người dùng trong phòng thí nghiệm (chọn 3) ?",
    "chapter": 9,
    "options": [
      "được thực hiện nhanh với các dữ liệu giống nhau",
      "dùng để kiểm tra giả thiết cụ thể",
      "với một nhiệm vụ cụ thể cho trước khả năng xảy ra lỗi là ít",
      "xác định rõ ràng bối cảnh thực hiện",
      "có thể thực hiện tự nhiên mà không bị gián đoạn"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Cau 395: Phong Lab la moi truong bi kiem soat cach ly, rat tot de Test cac thao tac tinh gio (gia thiet cu the), nhung vi xa roi moi truong thuc te (khong co sep goi, khong tieng on) nen user it mac loi phan tam hon. Dap an dung: \"dung de kiem tra gia thiet cu the\", \"duoc thuc hien nhanh voi cac du lieu giong nhau\", \"voi mot nhiem vu cu the cho truoc kha nang xay ra loi la it\"."
  },
  {
    "id": 400,
    "question": "Điều nào sau đây KHÔNG phải là ví dụ về tăng tốc?",
    "chapter": 7,
    "options": [
      "Phím F1 trên bàn phím",
      "Tổ hợp phím Ctrl-S để lưu file trong ứng dụng soạn thảo văn bản Microsoft Word",
      "Thao tác vuốt để xóa trong iOS",
      "Các phần tử trong menu \"Insert\" của ứng dụng soạn thảo văn bản Microsoft Word",
      "Phím tắt Siri của hệ điều hành iOS"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 400: Tang toc (Accelerator) la cac Phim tat/Chi thao tac nhanh danh cho user quen tay (Kinh nghiem) de bo qua buoc di chuyen chuot. Viec dung chuot click keo menu \"Insert\" truyen thong ton thoi gian, khong phai lenh tang toc. Dap an dung: \"Cac phan tu trong menu 'Insert' cua ung dung soan thao van ban Microsoft Word\"."
  },
  {
    "id": 401,
    "question": "Đâu là các yếu tố ảnh hưởng tới khả năng cảm nhận bằng thị giác của con người?",
    "chapter": 2,
    "options": [
      "Khoảng cách",
      "Hành động",
      "Thay đổi về ánh sáng",
      "Chuyển động",
      "Kích thước và chiều cao"
    ],
    "correctAnswers": [
      0,
      4
    ],
    "explanation": "Cau 401: Lap lai kien thuc cua cau 047. Kich co vat the tren vong mac (visual angle) bi chiu phoi boi Kich thuoc that va Khoang cach dat vat. Dap an dung: \"Kich thuoc va chieu cao\", \"Khoang cach\"."
  },
  {
    "id": 402,
    "question": "Luật Fitts được dùng để:",
    "chapter": 2,
    "options": [
      "Đánh giá hệ thống mà thời gian cần thiết để định vị một đối tượng là không quan trọng",
      "Mô hình hóa thời gian chuyển động đủ để vẽ một đối tượng",
      "Mô tả hiệu năng của các thiết bị vào",
      "Dự báo rằng thời gian cần thiết để nhanh chóng di chuyển đến một vị trí đích phụ thuộc vào khoảng cách tới đích và kích thước đích",
      "Mô hình hóa thời gian chuyển động đủ để lựa chọn một đối tượng"
    ],
    "correctAnswers": [
      2,
      3,
      4
    ],
    "explanation": "Cau 402: Fitts's Law (T = a + b*log2(D/W + 1)) la cong thuc toan hoc huyen thoai trong UI. Nut bam cang TO (W) va khoang cach di chuyen chuot cang NGAN (D) thi ban bam nut do cang NHANH (T). Dap an dung: \"Mo ta hieu nang cua cac thiet bi vao\", \"Du bao rang thoi gian can thiet de nhanh chong di chuyen den mot vi tri dich phu thuoc vao khoang cach toi dich va kich thuoc dich\", \"Mo hinh hoa thoi gian chuyen dong du de lua chon mot doi tuong\"."
  },
  {
    "id": 403,
    "question": "Xác định các sơ suất của con người trong các tình huống sau:",
    "chapter": 2,
    "options": [
      "bạn gõ sai một từ tiếng Anh dù bạn biết từ đó đánh vần như thế nào",
      "Bạn cài đặt phần mềm MySQL để lưu trữ các dữ liệu cần khai thác bằng truy vấn SQL",
      "nhưng bạn quên mất mật khẩu quản trị để cài đặt phần mềm này",
      "Khi bạn soạn một văn bản",
      "Bạn cài đặt phần mềm MS Excel trên máy tính để lưu trữ các dữ liệu cần khai thác bằng truy vấn SQL",
      "Bạn cho rằng câu lệnh printf(\"%d\", z) trong ngôn ngữ lập trình C sẽ in ra màn hình được xâu z",
      "đặt máy tính lên trên bàn phủ khăn nỉ với hi vọng máy tính thoát nhiệt tốt hơn"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Cau 403: Slip la Truot/So suat. Loi tri nho (biet nhung quen mat pass) va Loi co bap (biet chu do nhung go truot phim) la Slip. Loi Mistake la khi hoan toan ngu ngoc/hieu sai luat (lay Excel lam SQL). Dap an dung: \"Khi ban soan mot van ban, ban go sai mot tu tieng Anh du ban biet tu do danh van nhu the nao\", \"Ban cai dat phan mem MySQL... nhung ban quen mat mat khau quan tri\"."
  },
  {
    "id": 404,
    "question": "Các phát biểu nào sau đây là đúng?",
    "chapter": 11,
    "options": [
      "Material design là phương pháp thiết kế dành riêng cho các ứng dụng desktop",
      "lứa tuổi ... cần cung cấp nhiều kiểu tương tác khác nhau để thực hiện chức năng này",
      "Trong khung tương tác Abowd và Beale, phép dịch từ đầu ra đến người dùng (hay còn gọi là quan sát ) tương ứng với bước \"Đánh giá trạng thái hệ thống theo mục đích và chủ ý\" của chu trình Norman",
      "Chất lượng giao tiếp phụ thuộc chất lượng tương tác",
      "trình độ",
      "Sự có mặt của người lạ trong môi trường làm việc thường không làm ảnh hưởng đến hiệu quả công việc của người sử dụng máy tính",
      "Xét chức năng \"gọi điện thoại\" trên điện thoại di động. Khi có nhiều lớp người dùng khác nhau về năng lực hành vi"
    ],
    "correctAnswers": [
      1,
      3,
      4,
      6
    ],
    "explanation": "Cau 404: Su linh hoat (Flexibility) trong Tuong tac yeu cau He thong phai cho phep User da dang hoa cach su dung (vd nguoi gia thich bam so tay, gioi tre thich truot danh ba, nguoi mu dung Voice). Dap an dung: \"Chat luong giao tiep phu thuoc chat luong tuong tac\", \"Xet chuc nang goi dien thoai tren di dong, can cung cap nhieu kieu tuong tac khac nhau cho cac lop user khac nhau\"."
  },
  {
    "id": 146,
    "question": "Khả năng tiếp nhận âm thanh của con người phụ thuộc vào các yếu tố nào sau đây? (chọn 3)",
    "chapter": null,
    "options": [
      "Cường độ âm thanh.",
      "* Tần số",
      "Âm điệu",
      "Tiếng vọng.",
      "* Độ vang"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Giải thích: * Thính giác con người cảm nhận âm thanh chủ yếu qua 3 biến số vật lý: Pitch (Tần số/Độ cao), Loudness (Cường độ/Độ lớn), và Timbre (Âm sắc/Âm điệu).\n---"
  },
  {
    "id": 152,
    "question": "Cần biết những gì về người dùng để xây dựng thành công hệ thống tương tác?",
    "chapter": null,
    "options": [
      "Khả năng ăn uống",
      "* Khả năng tâm lý, khả năng tâm sinh lý.",
      "Học vấn của người dùng.",
      "* Hoàn cảnh gia đình",
      "Giới tính người dùng"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: * Xây dựng hệ tương tác (HCI) chủ yếu dựa vào Cognitive Psychology (Tâm lý học nhận thức). Cần biết giới hạn ghi nhớ, giới hạn chú ý, khả năng điều khiển vận động,... để thiết kế UI phù hợp.\n---"
  },
  {
    "id": 161,
    "question": "Da người có thể cảm nhận được các kích thích nào sau đây? (chọn 3)",
    "chapter": null,
    "options": [
      "Đáp ứng nhanh và chậm (cơ học)",
      "Ánh sáng",
      "Sức căng do áp suất",
      "Nhiệt",
      "Tiếng ồn"
    ],
    "correctAnswers": [
      0,
      2,
      3
    ],
    "explanation": "Giải thích: Xúc giác của da hoạt động nhờ các thụ thể sinh học chuyên biệt: thụ thể nhiệt (cảm nhận nóng/lạnh) và các thụ thể cơ học (cảm nhận áp suất, độ căng, độ rung). Da không có tế bào quang học để nhận biết ánh sáng hay cấu trúc màng nhĩ để nghe tiếng ồn."
  },
  {
    "id": 194,
    "question": "Đâu là nhược điểm chính của kỹ thuật tạo mẫu thử phác thảo (sketches):",
    "chapter": null,
    "options": [
      "Không thể hình dung trình tự tương tác với hệ thống."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: Bản vẽ phác tay (Low-fidelity) trên giấy rất rẻ và nhanh, nhưng nó tĩnh. Người dùng không bấm được vào các nút ảo để thấy màn hình chuyển hướng như thế nào, do đó thiếu đi cảm giác về luồng chuyển động (flow) thực tế."
  },
  {
    "id": 196,
    "question": "Nhận định nào sai về kỹ thuật đặt câu hỏi (chọn 2)",
    "chapter": null,
    "options": [
      "Không nên sử dụng kỹ thuật đặt câu hỏi phối hợp với các kỹ thuật khác.",
      "Chỉ nên thiết kế câu hỏi mở cho người dùng."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Giải thích: Một bảng câu hỏi tốt luôn kết hợp cả câu hỏi đóng (để thu thập dữ liệu định lượng, gút lại yêu cầu) và câu hỏi mở (để khám phá insight mới). Ngoài ra, luôn nên kết hợp khảo sát với phỏng vấn, quan sát để dữ liệu không bị phiến diện."
  },
  {
    "id": 207,
    "question": "Bước nào sau đây là một trong tám bước thực hiện theo OSTA?",
    "chapter": null,
    "options": [
      "Xác định đầu vào của các nhiệm vụ (bên ngoài hệ thống)."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ""
  },
  {
    "id": 208,
    "question": "Giao diện nào sau đây là giao diện người dùng hữu cơ (OUI)?",
    "chapter": null,
    "options": [
      "Máy tính bảng dẻo nhận đầu vào từ các hành động miết, gập."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: Organic User Interface (OUI) là khái niệm vượt ra khỏi mặt phẳng tĩnh của màn hình cứng. OUI cho phép người dùng bóp, gập, uốn cong các thiết bị có tính vật lý đàn hồi (dẻo) để ra lệnh cho hệ thống."
  },
  {
    "id": 209,
    "question": "WIMP là viết tắt của:",
    "chapter": null,
    "options": [
      "Windows, Icons, Menus, Pointer"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: Dịch ra tiếng Việt là Cửa sổ, Biểu tượng, Trình đơn, và Con trỏ. Đây là mô hình kinh điển làm nên sự thành công của các hệ điều hành đồ họa như Windows và macOS hiện đại."
  },
  {
    "id": 194,
    "question": "",
    "chapter": null,
    "options": [
      "Được tạo ra với chi phí thấp",
      "Không thể tái sử dụng",
      "Quá phức tạp và dài dòng",
      "Không thể hình dung cách bố trí nội dung tương tác."
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 196,
    "question": "",
    "chapter": null,
    "options": [
      "Câu hỏi nên thiết kế ở dạng đóng",
      "Đặt câu hỏi để tìm ra thông tin người dùng",
      "Dùng câu hỏi đóng để chốt yêu cầu, câu hỏi mở để tìm hiểu nhu cầu."
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 198,
    "question": "",
    "chapter": null,
    "options": [
      "Pencil and paper mock-ups",
      "Retrospective testing.",
      "Cooperative evaluation",
      "Lab-based techniques",
      "Remote testing",
      "Scenario-based evaluation"
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 205,
    "question": "",
    "chapter": null,
    "options": [
      "Lab-based techniques",
      "Remote testing",
      "Logging and tracking.",
      "Retrospective testing"
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 207,
    "question": "",
    "chapter": null,
    "options": [
      "Xác định và mô tả các nhóm làm việc, kể cả các nhóm chính thức và không chính thức.",
      "Xác định và mô tả các cặp nhiệm vụ - đối tượng",
      "Xác định các nhu cầu của các bên liên quan",
      "Củng cố và kiểm tra các yêu cầu"
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 208,
    "question": "",
    "chapter": null,
    "options": [
      "Máy tính có thể tách rời bàn phím để tạo thành một máy tính bảng",
      "Chuột chơi game được thiết kế hình dạng đặc biệt",
      "Tai nghe có thể gập lại làm vòng đeo tay",
      "Ô tô có khả năng thay đổi hình dạng thành robot."
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 209,
    "question": "",
    "chapter": null,
    "options": [
      "Window, Interface, Mouse, Pointer",
      "Widget, Icons, Menu, Pointer",
      "Window, Interaction, Mouse, Pointer.",
      "Widget, Interaction, Menu, Plugin"
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 230,
    "question": "",
    "chapter": null,
    "options": [
      "Cổng HDMI được thiết kế với một đầu to một đầu nhỏ khiến người dùng không thể cắm ngược",
      "Đĩa CD có dán nhãn để người dùng không đưa ngược chiều đĩa vào đầu đọc",
      "Viền đỏ, xanh xung quanh chân cắm của loa tương ứng với màu của dây cắm vào từng vị trí."
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 231,
    "question": "",
    "chapter": null,
    "options": [
      "Ký hiệu tam giác viền đỏ là ký hiệu cảnh báo được sử dụng trên toàn thế giới",
      "Viền đỏ, xanh xung quanh chân cắm của loa tương ứng với màu của dây cắm vào từng vị trí",
      "Đĩa CD có dán nhãn để người dùng không đưa ngược chiều đĩa vào đầu đọc",
      "Ký hiệu X được sử dụng là ký hiệu đánh dấu câu trả lời đúng và sai tùy thuộc vào nền văn hóa."
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 232,
    "question": "",
    "chapter": null,
    "options": [
      "Ký hiệu X được sử dụng là ký hiệu đánh dấu câu trả lời đúng và sai tùy thuộc vào nền văn hóa",
      "Cổng HDMI được thiết kế với một đầu to một đầu nhỏ khiến người dùng không thể cắm ngược",
      "Ký hiệu tam giác viền đỏ là ký hiệu cảnh báo được sử dụng trên toàn thế giới."
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 233,
    "question": "",
    "chapter": null,
    "options": [
      "USTM",
      "Mô hình hình sao",
      "OSTA",
      "Mô hình thác nước."
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 234,
    "question": "",
    "chapter": null,
    "options": [
      "Goal Option Methods Selection.",
      "Goal Operation Methods Selection",
      "Goal Option Methods Subtraction",
      "Go Operator Methods Selection"
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 237,
    "question": "",
    "chapter": null,
    "options": [
      "GOMS",
      "USTA."
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 239,
    "question": "",
    "chapter": null,
    "options": [
      "Trong một trình duyệt, \"X\" ký hiệu nút dùng để thoát khỏi trình duyệt đó",
      "Biểu tượng ống nghe màu xanh để nhận cuộc gọi, ống nghe màu đỏ để kết thúc cuộc gọi.",
      "\"<-\" là biểu tượng thoát khỏi chương trình",
      "Hình chiếc loa là biểu tượng gắn trên nút điều chỉnh âm lượng"
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 240,
    "question": "",
    "chapter": null,
    "options": [
      "Mô hình một số khía cạnh hiểu biết, trí thức, ý định và cách xử lý của người dùng.",
      "Là mô hình kỹ thuật xã hội nổi bật nhất để thiết kế hệ thống",
      "Mô tả cách thức làm việc với người dùng trong quá trình thiết kế",
      "Mô hình này giúp đội thiết kế hiểu và ghi lại yêu cầu người dùng"
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 247,
    "question": "",
    "chapter": null,
    "options": [
      "Tạo mẫu thử theo phần cứng máy tính.",
      "Tạo mẫu thử theo khuôn mẫu"
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 249,
    "question": "",
    "chapter": null,
    "options": [
      "Mẫu thử độ tin cậy thấp bỏ qua các chi tiết thiết kế và thường cung cấp các chức năng hạn chế...",
      "Mẫu thử độ tin cậy thấp không xét đến khía cạnh tương tác giữa người dùng và hệ thống",
      "Mẫu thử độ dùng để thử nghiệm bố cục màn hình, các phiên bản thiết kế giao diện hay làm rõ các khái niệm."
    ],
    "correctAnswers": [],
    "explanation": ""
  },
  {
    "id": 256,
    "question": "Chỉ ra 2 lý do cần thiết kế lấy người dùng làm trung tâm (UCD):",
    "chapter": null,
    "options": [
      "Tránh các lỗi logic trong quá trình phát triển phần mềm",
      "* Nâng cao hiệu suất của chương trình",
      "* * Cải thiện tính dùng được và tính hữu dụng của sản phẩm.",
      "Tìm kiếm câu trả lời cho câu hỏi về người dùng, các nhiệm vụ và các mục tiêu tương ứng, từ đó định hướng việc thiết kế và phát triển.",
      "Giảm chi phí phát triển sản phẩm."
    ],
    "correctAnswers": [
      2,
      3
    ],
    "explanation": "Giải thích: * User-Centered Design (UCD) giải quyết bài toán về \"Trải nghiệm\" (Usability/Utility). Các vấn đề về giảm bug (lỗi logic), tăng tốc độ code (hiệu suất) hay giảm chi phí thuộc về quy trình Quản lý kỹ thuật phần mềm (Software Engineering)."
  },
  {
    "id": 257,
    "question": "Tính dùng được của website KHÔNG phụ thuộc vào yếu tố nào?",
    "chapter": null,
    "options": [
      "* Quy trình thiết kế",
      "* Người thiết kế.",
      "Công nghệ",
      "Cách đánh giá",
      "Quản lý dự án."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: * Tính dùng được (Usability) là một thuộc tính khách quan của sản phẩm. Một sản phẩm tốt hay dở phụ thuộc vào quy trình có chuẩn không, công nghệ có đáp ứng không, và test có kỹ không. Nó không (và không được phép) phụ thuộc vào cảm tính, danh tính hay sở thích cá nhân của \"Người thiết kế\"."
  },
  {
    "id": 258,
    "question": "Đâu là các nguyên tắc của thiết kế Web? (chọn 3)",
    "chapter": null,
    "options": [
      "Giao tiếp.",
      "Thăm dò.",
      "Tiết kiệm",
      "* Chọn lọc và tinh chỉnh",
      "* Tổ chức"
    ],
    "correctAnswers": [
      0,
      2,
      4
    ],
    "explanation": "Giải thích: * 3 trụ cột của thiết kế UI trên Web bao gồm: Tổ chức (Organization - bố cục rõ ràng), Tiết kiệm (Economy - tối giản, không thừa thãi), và Giao tiếp (Communication - UI phải tự giải thích được chức năng cho người dùng)."
  },
  {
    "id": 261,
    "question": "Cái nào không phải là ngôn ngữ thiết kế thông dụng cho các ứng dụng di động hiện nay?",
    "chapter": null,
    "options": [
      "Thiết kế vật liệu (Material design).",
      "* Thiết kế hiện đại (Metro design)",
      "* Thiết kế màn hình (Screen design).",
      "Thiết kế thực tế mô phỏng (Skeuomorph design)",
      "Thiết kế phẳng (Flat design)"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Giải thích: * Metro (Microsoft), Skeuomorphic (Apple thời Steve Jobs), Flat (Apple thời Tim Cook) và Material (Google Android) đều là các \"Ngôn ngữ thiết kế\" (Design Systems) lừng danh. \"Screen design\" chỉ là từ vựng chỉ công việc thiết kế mặt màn hình nói chung."
  },
  {
    "id": 262,
    "question": "Phương án nào thể hiện đúng mối liên hệ giữa sự phát triển phần cứng, giao diện và sự đa dạng của người dùng:",
    "chapter": null,
    "options": [
      "Người dùng - Phần cứng - Giao diện",
      "* Phần cứng - Người dùng - Giao diện",
      "Người dùng - Giao diện - Phần cứng",
      "* Phần cứng - Giao diện - Người dùng.",
      "Giao diện - Phần cứng - Người dùng."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Giải thích: * Lịch sử máy tính tiến hóa theo dòng thời gian: Ban đầu bị giới hạn bởi năng lực Phần cứng (máy tính to bằng căn phòng). Khi phần cứng mạnh lên, người ta sáng tạo ra Giao diện đồ họa (GUI). Có giao diện dễ dùng rồi, máy tính mới tiếp cận được tới đại chúng Người dùng đa dạng."
  },
  {
    "id": 263,
    "question": "Đâu không phải là nguyên lý chính được sử dụng trong thiết kế giao diện di động?",
    "chapter": null,
    "options": [
      "Tăng cường các ngữ cảnh người dùng",
      "Tăng cường tính dễ di chuyển.",
      "Giả lập và mô phỏng",
      "* Kiểm soát sự phổ biến của các thiết bị",
      "* Thu nhỏ giao diện desktop hiện có."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Giải thích: * Việc bê nguyên website trên máy tính bàn (desktop) rồi \"thu nhỏ\" lại nhét vào điện thoại là một sai lầm chết người trong UX. Điện thoại cần triết lý thiết kế riêng (Mobile-first) vì ngón tay người dùng to và màn hình thì quá nhỏ."
  },
  {
    "id": 265,
    "question": "Thuộc tính cố hữu của mô hình tính toán khắp nơi mà không thể xử lý như xử lý lỗi là:",
    "chapter": null,
    "options": [
      "Mô hình tính toán",
      "* Mất kết nối.",
      "* Thời gian tính toán",
      "Khoảng cách địa lí",
      "Tốc độ tính toán."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: * Trong Ubiquitous Computing (Máy tính mọi nơi/IoT), các thiết bị liên tục di chuyển và dùng mạng không dây. Sự cố rớt mạng/mất kết nối xảy ra như cơm bữa (thuộc tính cố hữu), do đó hệ thống phải được thiết kế để tự động đồng bộ lại khi có mạng, chứ không thể coi nó là \"lỗi (bug)\" bắt người dùng tự sửa."
  },
  {
    "id": 266,
    "question": "Phương pháp đánh giá kèm cặp (coaching method) dùng để làm gì?",
    "chapter": null,
    "options": [
      "* Đánh giá về mặt ghi nhớ và mức độ chính xác của người dùng",
      "Đánh giá tính học được của người dùng khi được theo sát và giải thích",
      "Đánh giá tương tác giữa người dùng - hệ thống và người dùng - người kèm cặp.",
      "Đánh giá về mặt cảm xúc, những phản hồi của người dùng",
      "* Tìm hiểu nhu cầu thông tin của người dùng để hướng dẫn và cung cấp tài liệu tốt hơn cũng như có thể thiết kế lại giao diện để tránh người dùng thất vọng."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": ""
  },
  {
    "id": 267,
    "question": "Phương pháp phát biểu suy nghĩ (think aloud protocol) dùng để làm gì?",
    "chapter": null,
    "options": [
      "* Hiểu mô hình nhận thức của người dùng về hệ thống và các nhiệm vụ, họ gặp khó khăn ở đâu khi tìm hiểu và sử dụng hệ thống.",
      "* Lấy phản hồi từ người dùng về một chức năng quan trọng hoặc lấy báo cáo định kỳ từ người dùng",
      "Đánh giá về mặt cảm xúc, những phản hồi của người dùng.",
      "Đánh giá về mặt ghi nhớ và mức độ chính xác của người dùng",
      "Kiểm thử tính dùng được của các sản phẩm hỗ trợ người dùng làm việc trong môi trường cộng tác"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: * Think-aloud yêu cầu người dùng liên tục nói ra những gì họ đang nghĩ trong đầu khi thao tác. Nó giúp Researcher thấu hiểu \"Mental Model\" (Mô hình nhận thức) để biết tại sao user lại bấm vào nút A mà không phải nút B."
  },
  {
    "id": 268,
    "question": "Phương pháp đặt câu hỏi (question asking protocol) dùng để làm gì?",
    "chapter": null,
    "options": [
      "* Lấy phản hồi từ người dùng...",
      "Kiểm thử tính dùng được...",
      "Đánh giá về mặt ghi nhớ...",
      "Đánh giá về mặt cảm xúc...",
      "* Hiểu mô hình nhận thức của người dùng về hệ thống và các nhiệm vụ, họ gặp khó khăn ở đâu khi tìm hiểu và sử dụng hệ thống."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Giải thích: * Tương tự Think-aloud, Question-asking (liên tục hỏi user \"Tại sao bạn làm vậy?\") cũng là để moi móc luồng tư duy và nhận thức của họ."
  },
  {
    "id": 269,
    "question": "Mô tả nào sau đây khớp với phương pháp đánh giá kèm cặp (coaching method)?",
    "chapter": null,
    "options": [
      "* Người kiểm thử theo sát người dùng...",
      "Người kiểm thử theo sát người dùng chuyên gia...",
      "Một người dùng chuyên gia ngồi cạnh... để giải thích hành vi của người dùng thường cho người kiểm thử",
      "* Người dùng chuyên gia theo sát người dùng bình thường để chỉ dẫn cho họ cách sử dụng hệ thống.",
      "Người kiểm thử phải đánh giá trên cả hành vi..."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Giải thích: * Coaching là phương pháp mà một chuyên gia (hoặc người kiểm thử đóng vai chuyên gia) đứng cạnh để giải đáp ngay lập tức các thắc mắc của người dùng mới, từ đó phát hiện ra giao diện đang thiếu sót thông tin gì."
  },
  {
    "id": 270,
    "question": "Mô tả nào sau đây khớp với phương pháp đánh giá từ xa (remote testing)?",
    "chapter": null,
    "options": [
      "* Người dùng chuyên gia theo sát...",
      "Người kiểm thử theo sát...",
      "* Có phần mềm tự động hướng dẫn người dùng thực hiện các nhiệm vụ và ghi lại các hoạt động của người dùng.",
      "Người kiểm thử hỏi trực tiếp...",
      "Người kiểm thử phải đánh giá..."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": ""
  },
  {
    "id": 271,
    "question": "Mô tả nào sau đây khớp với phương pháp kiểm thử hồi tưởng (retrospective testing)?",
    "chapter": null,
    "options": [
      "Người kiểm thử phải đánh giá trên cả hành vi...",
      "* Người kiểm thử cùng xem lại các phiên kiểm thử đã được ghi lại với người dùng, hỏi lại người dùng về những gì đã xảy ra.",
      "Người kiểm thử theo sát người dùng để quan sát...",
      "* Người dùng chuyên gia theo sát...",
      "Người kiểm thử theo sát người dùng chuyên gia..."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: * \"Hồi tưởng\" nghĩa là sau khi test xong, Researcher bật lại video quay màn hình lúc nãy và hỏi user \"Lúc này tại sao bạn lại khựng lại?\". Nó khắc phục nhược điểm của Think-aloud là không làm gián đoạn việc sử dụng tự nhiên của user."
  },
  {
    "id": 272,
    "question": "Đâu không phải là khuyến cáo khi thiết kế giao diện cho các trò chơi trên thiết bị di động?",
    "chapter": null,
    "options": [
      "Bảo đảm tính nhất quán",
      "Phải tạo ra danh sách người chơi có điểm cao nhất",
      "Phải có cấu trúc bảng chọn rõ ràng",
      "Loại bỏ các chức năng lưu và tạm dừng.",
      "* * Cung cấp một giải pháp đầy đủ nhất có thể.",
      "* Phải hỗ trợ các chức năng lưu và tạm dừng",
      "Sử dụng các phím điều khiển có sẵn trên thiết bị",
      "Cung cấp một giải pháp tối giản."
    ],
    "correctAnswers": [
      3,
      4
    ],
    "explanation": "Giải thích: * Chơi game trên Mobile thường bị gián đoạn (có tin nhắn, cuộc gọi), nên tuyệt đối không được \"loại bỏ chức năng Pause/Save\". Đồng thời, màn hình nhỏ yêu cầu thiết kế UI game phải Tối giản, không được tham lam nhồi nhét \"đầy đủ nhất có thể\" làm rối mắt."
  },
  {
    "id": 275,
    "question": "Phương pháp cùng khám phá (co-discovery learning method) dùng để làm gì?",
    "chapter": null,
    "options": [
      "Hiểu mô hình nhận thức...",
      "Lấy phản hồi từ người dùng...",
      "* Kiểm thử tính dùng được của các sản phẩm hỗ trợ người dùng làm việc trong môi trường cộng tác.",
      "Đánh giá về mặt ghi nhớ...",
      "* Đánh giá về mặt cảm xúc..."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": ""
  },
  {
    "id": 276,
    "question": "Điều gì sau đây là đúng với phương pháp đánh giá heuristic?",
    "chapter": null,
    "options": [
      "* Một nhóm các chuyên gia đánh giá khả năng sử dụng một giao diện người dùng theo một tập hợp các nguyên tắc chung.",
      "Các thành viên trong nhóm thiết kế thực hiện đánh giá...",
      "Một nhóm các nhà tâm lí học xây dựng...",
      "Một nhóm các chuyên gia đánh giá... theo một danh sách kiểm tra chi tiết",
      "* Một nhóm người dùng tiến hành thử nghiệm..."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: * Đánh giá Heuristic là việc thuê các chuyên gia UX về \"soi lỗi\" giao diện. Họ không dùng checklist quá chi tiết, mà dùng các \"Nguyên tắc kinh nghiệm chung\" (Ví dụ: 10 nguyên tắc Heuristic của Jakob Nielsen)."
  },
  {
    "id": 277,
    "question": "Mô tả nào sau đây tương ứng với giao diện đồ họa (GUI)?",
    "chapter": null,
    "options": [
      "Tham chiếu tới giao diện người dùng ẩn.",
      "Là giao diện người dùng mà đầu ra được biểu diễn dưới dạng văn bản",
      "* Tận dụng các quy ước thiết kế hiện có...",
      "Là giao diện người dùng hiển thị trên những màn hình không phẳng",
      "* Cho phép người dùng giao tiếp với máy tính thông qua các biểu tượng, biểu trưng trực quan và thiết bị trỏ."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": ""
  },
  {
    "id": 278,
    "question": "Mô tả nào tương ứng với nguyên tắc thiết kế web \"Tiết kiệm\"? (chọn 2)",
    "chapter": null,
    "options": [
      "Biểu diễn nội dung phù hợp với khả năng của người dùng",
      "* * Tận dụng các quy ước thiết kế hiện có, chỉ thay đổi khi người thiết kế chắc chắn ý tưởng của họ tốt hơn.",
      "Giúp người dùng hoàn thành các nhiệm vụ một cách dễ dàng, thoải mái.",
      "* Cung cấp cho người dùng một cấu trúc rõ ràng nhất quán",
      "Người dùng làm đc nhiều việc nhất với ít yếu tố thị giác nhất."
    ],
    "correctAnswers": [
      1,
      4
    ],
    "explanation": ""
  },
  {
    "id": 279,
    "question": "Mô tả nào tương ứng với nguyên tắc thiết kế web \"Giao tiếp\"?",
    "chapter": null,
    "options": [
      "* Biểu diễn nội dung phù hợp với khả năng của người dùng.",
      "* Cung cấp cho người dùng một cấu trúc rõ ràng nhất quán",
      "Giúp người dùng hoàn thành các nhiệm vụ một cách dễ dàng, thoải mái",
      "Tận dụng các quy ước thiết kế hiện có...",
      "Người dùng làm đc nhiều việc nhất với ít yếu tố thị giác nhất"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ""
  },
  {
    "id": 280,
    "question": "Mô tả nào tương ứng với nguyên tắc thiết kế web \"Tổ chức\"?",
    "chapter": null,
    "options": [
      "* Cung cấp cho người dùng một cấu trúc rõ ràng nhất quán.",
      "Người dùng làm đc nhiều việc nhất với ít yếu tố thị giác nhất.",
      "* Tận dụng các quy ước thiết kế hiện có...",
      "Giúp người dùng hoàn thành các nhiệm vụ một cách dễ dàng, thoải mái",
      "Biểu diễn nội dung phù hợp với khả năng của người dùng"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ""
  },
  {
    "id": 281,
    "question": "Yêu cầu về môi trường tương tác bao gồm:",
    "chapter": null,
    "options": [
      "* Yêu cầu về bối cảnh sử dụng, xã hội, mức độ người dùng hỗ trợ thực hiện nhiệm vụ và các công nghệ liên quan.",
      "Mức độ người dùng hỗ trợ...",
      "Yêu cầu về bối cảnh sử dụng, xã hội, các công nghệ...",
      "Yêu cầu về bối cảnh sử dụng, mức độ người dùng hỗ trợ...",
      "* Yêu cầu về bối cảnh sử dụng, xã hội, mức độ người dùng..."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: * Đáp án đúng là câu dài nhất vì nó liệt kê đầy đủ 4 yếu tố cấu thành môi trường: Bối cảnh vật lý, Bối cảnh xã hội, Sự hỗ trợ của user khác, và Nền tảng công nghệ."
  },
  {
    "id": 282,
    "question": "Với mô thức đánh giá quick and dirty (nhanh và thô), cần:",
    "chapter": null,
    "options": [
      "* Sử dụng sự hiểu biết của các chuyên gia...",
      "Đến chỗ người dùng phỏng vấn hay quan sát...",
      "* Tranh luận không chính thức với người dùng ở bất cứ khi nào khi sử dụng được mẫu thử.",
      "Đánh giá mà không cần sự có mặt của người dùng",
      "Quan sát người dùng và ghi lại hiệu suất..."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Giải thích: * \"Quick and Dirty\" là kiểu túm lấy một đồng nghiệp hoặc khách hàng bất kỳ ngoài hành lang, chìa bản vẽ ra và tranh luận góp ý nhanh, không cần quy trình bài bản phức tạp."
  },
  {
    "id": 283,
    "question": "Với mô thức đánh giá field studies (nghiên cứu thực địa), cần:",
    "chapter": null,
    "options": [
      "Sử dụng sự hiểu biết của các chuyên gia...",
      "Quan sát người dùng và ghi lại hiệu suất... (trong lab).",
      "* Tranh luận không chính thức...",
      "* Đến chỗ người dùng phỏng vấn hay quan sát việc sử dụng mẫu thử.",
      "Đánh giá mà không cần sự có mặt của người dùng"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": ""
  },
  {
    "id": 284,
    "question": "Với mô thức đánh giá predictive (dự đoán), cần: (chọn 2)",
    "chapter": null,
    "options": [
      "* Tranh luận không chính thức...",
      "Đến chỗ người dùng phỏng vấn...",
      "Sử dụng sự hiểu biết của các chuyên gia về người dùng để dự đoán các vấn đề về tính dùng được.",
      "* * Đánh giá mà không cần sự có mặt của người dùng.",
      "Quan sát người dùng và ghi lại hiệu suất..."
    ],
    "correctAnswers": [
      2,
      3
    ],
    "explanation": "Giải thích: * Mô thức Dự đoán (như Heuristic hay Cognitive Walkthrough) chỉ cần các UX Expert ngồi vào máy, dựa theo kinh nghiệm tự suy luận lỗi, không cần tốn tiền mời user thật đến test."
  },
  {
    "id": 285,
    "question": "Với mô thức đánh giá usability testing (kiểm thử tính khả dụng), cần:",
    "chapter": null,
    "options": [
      "---",
      "(Lưu ý: Đối với loạt câu hỏi từ 174 đến 180 dưới đây, phần tick đáp án trong đề có những sự đặc thù quy ước riêng của giáo trình, tôi tổng hợp đúng nguyên văn kết quả hệ thống đã chọn)*",
      "Tranh luận không chính thức...",
      "Đến chỗ người dùng phỏng vấn...",
      "* Quan sát người dùng và ghi lại hiệu suất người dùng khi thực hiện các nhiệm vụ.",
      "* Đánh giá mà không cần sự có mặt của người dùng",
      "Sử dụng sự hiểu biết của chuyên gia..."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": ""
  },
  {
    "id": 286,
    "question": "Có thể áp dụng phương pháp phát biểu suy nghĩ (think aloud protocol) vào giai đoạn nào... kết quả đánh giá là định lượng hay định tính?",
    "chapter": null,
    "options": [
      "Áp dụng ở giai đoạn kiểm thử, kết quả là định lượng",
      "Áp dụng ở giai đoạn thiết kế giao diện và chức năng, kết quả là định lượng.",
      "Áp dụng ở giai đoạn thiết kế giao diện, kết quả là định tính",
      "* Áp dụng ở bất cứ giai đoạn nào, kết quả là định tính.",
      "* Áp dụng ở giai đoạn phân tích yêu cầu, kết quả là định tính"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": ""
  },
  {
    "id": 287,
    "question": "Có thể áp dụng phương pháp theo sát như hình với bóng (shadowing method) vào giai đoạn nào...",
    "chapter": null,
    "options": [
      "* Áp dụng ở giai đoạn thiết kế giao diện, kết quả là định tính",
      "Áp dụng ở bất cứ giai đoạn nào, kết quả là định tính.",
      "Áp dụng ở giai đoạn phân tích yêu cầu, kết quả là định tính",
      "Áp dụng ở giai đoạn thiết kế giao diện và chức năng, kết quả là định lượng",
      "* Áp dụng ở giai đoạn kiểm thử, kết quả là định lượng. *(Theo đáp án được tick trong ảnh)*."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": ""
  },
  {
    "id": 288,
    "question": "Có thể áp dụng phương pháp đo hiệu năng (performance measurement) vào giai đoạn nào...",
    "chapter": null,
    "options": [
      "Áp dụng ở giai đoạn thiết kế... định tính.",
      "Áp dụng ở giai đoạn thiết kế... định lượng",
      "* Áp dụng ở giai đoạn kiểm thử, kết quả là định lượng.",
      "Áp dụng ở bất cứ giai đoạn nào...",
      "* Áp dụng ở giai đoạn phân tích yêu cầu..."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": ""
  },
  {
    "id": 289,
    "question": "Có thể áp dụng phương pháp hướng dẫn (teaching method) vào giai đoạn nào...",
    "chapter": null,
    "options": [
      "Áp dụng ở bất cứ giai đoạn nào...",
      "Áp dụng ở giai đoạn kiểm thử, kết quả là định lượng.",
      "* Áp dụng ở giai đoạn kiểm thử, kết quả là định tính.",
      "* Áp dụng ở giai đoạn phân tích...",
      "Áp dụng ở giai đoạn thiết kế..."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": ""
  },
  {
    "id": 290,
    "question": "Có thể áp dụng phương pháp đặt câu hỏi (questing-asking protocol) vào giai đoạn nào...",
    "chapter": null,
    "options": [
      "Áp dụng ở giai đoạn phân tích yêu cầu...",
      "* Áp dụng ở giai đoạn kiểm thử, kết quả là định tính.",
      "* Áp dụng ở giai đoạn kiểm thử... định lượng",
      "Áp dụng ở giai đoạn thiết kế...",
      "Áp dụng ở bất cứ giai đoạn nào..."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": ""
  },
  {
    "id": 291,
    "question": "Có thể áp dụng phương pháp kiểm thử từ xa (remote testing) vào giai đoạn nào...",
    "chapter": null,
    "options": [
      "Áp dụng ở giai đoạn phân tích...",
      "* Áp dụng ở giai đoạn kiểm thử, kết quả là định lượng.",
      "Áp dụng ở bất cứ giai đoạn nào...",
      "Áp dụng ở giai đoạn thiết kế...",
      "* Áp dụng ở giai đoạn thiết kế..."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": ""
  },
  {
    "id": 292,
    "question": "Có thể áp dụng phương pháp kiểm thử hồi tưởng (retrospective testing) vào giai đoạn nào...",
    "chapter": null,
    "options": [
      "Áp dụng ở giai đoạn phân tích...",
      "Áp dụng ở bất cứ giai đoạn nào...",
      "* Áp dụng ở giai đoạn kiểm thử, kết quả là định lượng.",
      "---",
      "Áp dụng ở giai đoạn thiết kế...",
      "* Áp dụng ở giai đoạn thiết kế..."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": ""
  },
  {
    "id": 293,
    "question": "Câu nào sau đây đúng về phương pháp cùng khám phá (co-discovery learning)?",
    "chapter": null,
    "options": [
      "* Người tham gia sẽ làm việc dưới sự giám sát của chuyên gia",
      "Người tham gia sẽ được chuyên gia kèm cặp hỗ trợ.",
      "Phương pháp này chỉ áp dụng cho giai đoạn thiết kế",
      "Người dùng được yêu cầu viết ra cảm tưởng...",
      "* Phương pháp này có thể áp dụng trong bất kỳ giai đoạn nào của quy trình phát triển hệ tương tác."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": ""
  },
  {
    "id": 294,
    "question": "Câu nào sau đây đúng về phương pháp kèm cặp (coaching method)?",
    "chapter": null,
    "options": [
      "Người dùng được yêu cầu viết ra cảm tưởng...",
      "Phương pháp này chỉ áp dụng cho giai đoạn thiết kế.",
      "* Phương pháp này có thể áp dụng trong bất kỳ giai đoạn nào...",
      "Người tham gia sẽ làm việc dưới sự giám sát của chuyên gia",
      "* Người tham gia sẽ được chuyên gia kèm cặp hỗ trợ."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": ""
  },
  {
    "id": 295,
    "question": "Câu nào sau đây đúng về phương pháp phát biểu suy nghĩ (think aloud protocol)?",
    "chapter": null,
    "options": [
      "* Người dùng được yêu cầu viết ra cảm tưởng, suy nghĩ và ý kiến cá nhân khi sử dụng hệ thống. *(Lưu ý: Thực tế Think Aloud là nói bằng miệng, nhưng đây là đáp án được đánh dấu đúng trong hệ thống của bạn).*",
      "Người tham gia sẽ làm việc dưới sự giám sát của chuyên gia.",
      "Phương pháp này có thể áp dụng trong bất kỳ giai đoạn nào...",
      "* Người tham gia sẽ được chuyên gia kèm cặp hỗ trợ",
      "Phương pháp này chỉ áp dụng cho giai đoạn thiết kế"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ""
  },
  {
    "id": 296,
    "question": "Mô hình nào cho phép dự báo dãy các thao tác và thời gian thực hiện theo mô hình xử lý của con người?",
    "chapter": null,
    "options": [
      "TAG.",
      "* BNF",
      "* CMN GOMS.",
      "HTA",
      "KLM GOMS"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Giải thích: * Các mô hình GOMS (Goals, Operators, Methods, Selection rules) dùng để tính toán và dự báo xem người dùng sẽ mất bao nhiêu thời gian để hoàn thành 1 tác vụ. CMN GOMS là một trong những biến thể đó."
  },
  {
    "id": 297,
    "question": "Cách tổ chức của một website được quy định bởi cái gì? (chọn 3)",
    "chapter": null,
    "options": [
      "* * Sơ đồ web site (Site map)",
      "Luồng duyệt giữa các trang trong một website (User flow)",
      "Tiêu đề các nội dung.",
      "Bố cục trang web (Layout)",
      "* Kiểu chữ"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Giải thích: * Kiến trúc thông tin (Information Architecture) quyết định sự \"tổ chức\" của web. Kiểu chữ (Font) và tiêu đề thuộc về khâu thiết kế UI bề mặt và nội dung content."
  },
  {
    "id": 298,
    "question": "Kỹ thuật tạo mẫu thử nào cho phép tạo ra cách hoạt động chi tiết cho một số tính năng được chọn?",
    "chapter": null,
    "options": [
      "Wizard of Oz",
      "Horizontal prototypes",
      "Scenario.",
      "* Vertical prototypes (Mẫu thử chiều dọc).",
      "* Pencils and papers mockups"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Giải thích: * Prototype \"chiều dọc\" (Vertical) cắt sâu vào hệ thống: chỉ làm 1 chức năng nhưng làm tới bến (gõ phím được, lưu data được). Prototype \"chiều ngang\" (Horizontal) thì làm dàn trải toàn bộ các màn hình nhưng chỉ xem được vỏ ngoài, không có chức năng thực.\nTÀI LIỆU ÔN TẬP UI/UX (TỪ CÂU 187 ĐẾN 253)"
  },
  {
    "id": 299,
    "question": "Đâu là những nhân tố ảnh hưởng đến thành công của thiết kế giao diện web? (chọn 2)",
    "chapter": null,
    "options": [
      "Bố cục trang web",
      "Tính dùng được (Usability)",
      "Các kỹ thuật hiện thị trực quan",
      "Hướng dẫn sử dụng.",
      "Tính tiện lợi (Utility)."
    ],
    "correctAnswers": [
      1,
      4
    ],
    "explanation": "Giải thích: Sự thành công cốt lõi của một sản phẩm số dựa trên hai yếu tố: Nó có dễ dùng không (Tính dùng được) và nó có giải quyết được việc/có ích cho người dùng không (Tính tiện lợi/hữu dụng)."
  },
  {
    "id": 300,
    "question": "Tính hữu dụng (usefulness) của một hệ tương tác được hiểu là sự phối hợp giữa: (chọn 2)",
    "chapter": null,
    "options": [
      "Tính phù hợp",
      "Tính dễ học.",
      "Tính chấp nhận được",
      "Tính tiện lợi (Utility).",
      "Tính dùng được (usability)"
    ],
    "correctAnswers": [
      3,
      4
    ],
    "explanation": "Giải thích: Theo công thức chuẩn của Nielsen: Usefulness (Tính hữu dụng) = Utility (cung cấp đúng các tính năng cần thiết) + Usability (các tính năng đó dễ dàng sử dụng)."
  },
  {
    "id": 301,
    "question": "Các hành động nào sau đây không thuộc về quy trình phát triển website?",
    "chapter": null,
    "options": [
      "Chạy thử",
      "Cài đặt",
      "Bảo trì",
      "Tạo nội dung.",
      "Tạo bản tinh chỉnh."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Giải thích: Quy trình \"phát triển\" (Development) tập trung vào khía cạnh kỹ thuật phần mềm (code, test, deploy, maintain). Việc \"Tạo nội dung\" (Content creation - viết bài, chụp ảnh) thuộc về khía cạnh Marketing/Content, thường chạy song song hoặc tách biệt với quy trình Dev."
  },
  {
    "id": 302,
    "question": "Chúng ta sử dụng các phương thức nào sau đây để thu thập dữ liệu định lượng (chọn 2)",
    "chapter": null,
    "options": [
      "Coaching",
      "Performance measurement (Đo lường hiệu năng)",
      "User testing (Kiểm thử người dùng).",
      "Teaching.",
      "Shadowing"
    ],
    "correctAnswers": [
      1,
      2
    ],
    "explanation": "Giải thích: Dữ liệu định lượng (Quantitative) là các con số đếm được (thời gian hoàn thành, số lượt click, tỷ lệ lỗi). Đo lường hiệu năng và User testing cung cấp các số liệu này. Các phương pháp còn lại (theo dõi, kèm cặp) cho ra dữ liệu định tính (Qualitative - cảm xúc, hành vi)."
  },
  {
    "id": 303,
    "question": "Chúng ta sử dụng các kỹ thuật nào sau đây để đánh giá hình thành? (chọn 2)",
    "chapter": null,
    "options": [
      "User testing.",
      "Walkthrough (Duyệt qua).",
      "Retrospective testing",
      "Logging and tracking",
      "Pencils and papers mockups (Mẫu thử giấy bút)"
    ],
    "correctAnswers": [
      1,
      4
    ],
    "explanation": "Giải thích: Đánh giá hình thành (Formative evaluation) diễn ra ở giai đoạn đầu để tìm hướng thiết kế. Do đó, việc dùng bản vẽ nháp trên giấy hoặc duyệt qua các bước (Walkthrough) là phù hợp nhất, vừa nhanh vừa rẻ."
  },
  {
    "id": 304,
    "question": "Hành động nào sau đây không thuộc về quy trình phát triển website?",
    "chapter": null,
    "options": [
      "Thăm dò.",
      "Tạo bản tinh chỉnh",
      "Khám phá",
      "Cài đặt.",
      "Kết xuất nội dung",
      "(Ghi chú: Câu hỏi này có vẻ sử dụng một framework từ vựng riêng của giáo trình. Các bước Khám phá/Thăm dò thuộc về khâu UX Research ban đầu, không phải khâu \"Phát triển\" (Development) code kỹ thuật)."
    ],
    "correctAnswers": [
      0,
      2,
      4
    ],
    "explanation": ""
  },
  {
    "id": 307,
    "question": "Những gì không là mục tiêu của HTA (chọn 2)",
    "chapter": null,
    "options": [
      "Đặt các hành động này trong cấu trúc phân cấp nhiệm vụ / nhiệm vụ con",
      "Mô tả thứ tự thực hiện các nhiệm vụ con.",
      "Mô tả các hành động người dùng cần thực hiện",
      "Đo hiệu năng thực hiện của máy tính.",
      "Đặc tả hội thoại người dùng / máy tính"
    ],
    "correctAnswers": [
      3,
      4
    ],
    "explanation": "Giải thích: HTA (Hierarchical Task Analysis) chuyên dùng để chia nhỏ một \"công việc\" thành các \"tác vụ con\" theo sơ đồ hình cây. Nó KHÔNG đo lường tốc độ xử lý của chip máy tính, cũng không viết kịch bản hội thoại."
  },
  {
    "id": 309,
    "question": "Để dự đoán thời gian thực hiện của người dùng, cần sử dụng mô hình nào?",
    "chapter": null,
    "options": [
      "HTA",
      "BNF.",
      "KLM GOMS (Keystroke-Level Model).",
      "TAG",
      "PIE"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Giải thích: KLM là một biến thể của họ mô hình GOMS, dùng để tính toán chính xác người dùng sẽ mất bao nhiêu giây (hoặc mili-giây) để ấn một phím, rê chuột, hoặc suy nghĩ trước khi hành động."
  },
  {
    "id": 311,
    "question": "Lựa chọn nào sau đây không phải vấn đề thường gặp khi thiết kế giao diện di động?",
    "chapter": null,
    "options": [
      "Xác định được việc thực hiện các thao tác là đúng hay sai.",
      "Thỏa mãn sự thay đổi nhu cầu người dùng một cách linh hoạt.",
      "Cách thiết kế để tránh dẫn đến thao tác sai",
      "Xác định trạng thái chờ hành động...",
      "Xác định thiết bị đang sử dụng trong môi trường có nhiều thiết bị"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: Việc \"đáp ứng thay đổi nhu cầu linh hoạt\" là mục tiêu chung của quản lý dự án phần mềm (ví dụ mô hình Agile), không phải là một \"vấn đề rào cản\" cụ thể của thiết kế UI trên màn hình điện thoại (như ngón tay to dễ bấm nhầm, môi trường bên ngoài mất tập trung)."
  },
  {
    "id": 312,
    "question": "Khi thiết kế giao diện di động, chúng ta phải bảo đảm những gì? (Ghi chú: Mặc dù ảnh không hiện dấu check rõ ràng, nhưng dựa trên nguyên tắc HCI, đáp án hợp lý nhất là:)",
    "chapter": null,
    "options": [
      "Người dùng luôn có kết nối mạng (Sai, di động hay rớt mạng)",
      "Hỗ trợ nhiều tiềm năng thay vì tính đơn giản (Sai, di động cần tối giản)",
      "Các thành phần trong các lớp khác nhau có bóng đổ khác nhau (Đây là luật của Material Design, không phải nguyên tắc bắt buộc cho mọi thiết kế di động).",
      "Hỗ trợ tạm dừng và lưu đối với trò chơi di động.",
      "Các thành phần được thu nhỏ lại để vừa với màn hình (Sai, tuyệt đối không được thu nhỏ web desktop bê vào điện thoại, phải thiết kế lại từ đầu)"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": ""
  },
  {
    "id": 313,
    "question": "Phát biểu nào sau đây là sai với thiết kế vật chất (Material design)?",
    "chapter": null,
    "options": [
      "Các thành phần nằm trong các lớp khác nhau có bóng đổ khác nhau",
      "Material design sử dụng màu sắc rực rỡ.",
      "Các biểu tượng nên thiết kế giống như chúng ta gấp từ giấy",
      "Các phần tử... có các độ cao khác nhau",
      "Material design là thiết kế phẳng."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Giải thích: Google tạo ra Material Design để mô phỏng \"thế giới vật lý\" (giấy và mực). Nó sử dụng trục Z (độ cao) và đổ bóng để phân tầng thông tin, do đó nó không phải là thiết kế phẳng (Flat Design) hoàn toàn 2D."
  },
  {
    "id": 316,
    "question": "Đâu không phải là nguyên tắc heuristic đồ thị phân rã HTA?",
    "chapter": null,
    "options": [
      "Khái quát hóa",
      "Cân bằng",
      "Chia để trị (Divide and Conquer). (Ghi chú: Trong đề tích vào \"Chia để trị\" nhưng câu hỏi là \"Đâu KHÔNG PHẢI\". Có thể đề bị lỗi logic từ ngữ. Theo cốt lõi HTA, chia để trị là nguyên tắc ĐÚNG. Hãy theo sát đáp án thầy cô cung cấp).",
      "Dựa vào cặp hành động.",
      "Tái cấu trúc"
    ],
    "correctAnswers": [
      0,
      1,
      3,
      4
    ],
    "explanation": ""
  },
  {
    "id": 318,
    "question": "Có mấy loại ứng dụng di động, là những loại nào?",
    "chapter": null,
    "options": [
      "3 loại: hybrid app, mobile web app, native app.",
      "2 loại: mobile web app, hybrid app",
      "2 loại: native app, hybrid app",
      "1 loại: native app",
      "2 loại: native app, mobile web app."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ""
  },
  {
    "id": 322,
    "question": "Thiết kế luồng duyệt màn hình di động có thể đem đến các loại trải nghiệm nào sau đây cho người dùng:",
    "chapter": null,
    "options": [
      "Mobile experience",
      "Adequate experience (Trải nghiệm vừa đủ).",
      "Intensive experience",
      "Broadcast experience.",
      "Native experience"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": ""
  },
  {
    "id": 323,
    "question": "Định nghĩa của ACM SIGCHI về tương tác người máy không đề cập đến các đối tượng nào sau đây? (chọn 3) (Ghi chú: Định nghĩa gốc của ACM SIGCHI: \"HCI là bộ môn liên quan đến thiết kế, đánh giá và triển khai CÁC HỆ THỐNG TÍNH TOÁN TƯƠNG TÁC cho CON NGƯỜI sử dụng, và nghiên cứu CÁC HIỆN TƯỢNG XUNG QUANH chúng\". Căn cứ vào file đề, hệ thống đã chấm các đáp án sau):",
    "chapter": null,
    "options": [
      "Máy tính (như một vật thể phần cứng độc lập)",
      "Môi trường phát triển",
      "Các hệ thống tương tác được con người sử dụng. (Lưu ý: Đáp án cuối có thể là bẫy chữ, SIGCHI dùng cụm từ \"interactive computing systems\" - hệ thống tính toán tương tác)."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": ""
  },
  {
    "id": 325,
    "question": "Môi trường và ngữ cảnh của hệ tương tác không bị giới hạn bởi yếu tố tổ chức, xã hội, công việc, lĩnh vực ứng dụng nào?",
    "chapter": null,
    "options": [
      "Cá nhân hoặc nhóm",
      "Trợ giúp trực tuyến hoặc điều khiển hệ thống liên tục...",
      "Thiết bị đầu cuối.",
      "Giao tiếp hướng thông điệp",
      "Giao tiếp hướng văn bản"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Giải thích: \"Thiết bị đầu cuối\" thuộc về hệ thống máy tính/phần cứng, nó không thuộc về các yếu tố \"môi trường xã hội/tổ chức\"."
  },
  {
    "id": 326,
    "question": "Bối cảnh xã hội ảnh hưởng như thế nào đến thiết kế hệ thống tương tác điều khiển các thiết bị trên xe hơi?",
    "chapter": null,
    "options": [
      "Chức năng điều khiển",
      "Khả năng điều khiển các thiết bị trên xe hơi",
      "Kênh tương tác người dùng / xe hơi",
      "Giao diện người dùng / xe hơi.",
      "Chức năng, kênh tương tác, giao diện, khả năng điều khiển (Ảnh hưởng đến tất cả)."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": ""
  },
  {
    "id": 327,
    "question": "Mệnh đề nào sau đây nói về mục tiêu của màu sắc trong tiếp nhận thông tin trực quan của con người (chọn 3)",
    "chapter": null,
    "options": [
      "Màu sắc được sử dụng để tăng cường sự gợi nhớ, ghi nhớ",
      "Màu sắc được sử dụng để gợi nhớ các dữ liệu đặc biệt",
      "Màu sắc được sử dụng để tăng số lượng mã hóa dữ liệu.",
      "Màu sắc được sử dụng để tạo ra giao diện thu hút",
      "Màu sắc được sử dụng để cá nhân hóa giao diện."
    ],
    "correctAnswers": [
      1,
      2,
      3
    ],
    "explanation": "Giải thích: Màu sắc trong UI chủ yếu để: Highlighting (làm nổi bật cảnh báo), Aesthetics (thẩm mỹ), và Color-coding (phân loại biểu đồ, mã hóa)."
  },
  {
    "id": 331,
    "question": "Các kỹ thuật thu thập dữ liệu có thể được phối hợp với nhau KHÔNG dựa trên yếu tố nào?",
    "chapter": null,
    "options": [
      "Bản chất của kỹ thuật",
      "Định hướng thu thập dữ liệu",
      "Đối tượng tham gia",
      "Các tài nguyên hiện có.",
      "Mục tiêu thu thập dữ liệu."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Giải thích: Về mặt lý thuyết luận khoa học, việc chọn phương pháp nghiên cứu phải đi từ Mục tiêu, Định hướng và Đối tượng. Việc đổ lỗi cho \"Tài nguyên hạn hẹp\" không phải là cơ sở học thuật để phối hợp kỹ thuật."
  },
  {
    "id": 332,
    "question": "Đặt câu hỏi là một trong các kỹ thuật thu thập dữ liệu. Trong số các mệnh đề sau đây về thiết kế câu hỏi, mệnh đề nào sai? (chọn 2)",
    "chapter": null,
    "options": [
      "Không cần các phiên bản khác nhau của bảng câu hỏi cho các tập người dùng khác nhau.",
      "Phải cung cấp hướng dẫn rõ ràng về cách hoàn thành bản câu hỏi",
      "Cân bằng giữa sử dụng dòng trống và giữ cho bảng câu hỏi nhỏ gọn.",
      "Người dùng quyết định nội dung bảng câu hỏi thiên về tích cực, tiêu cực hay đan xen.",
      "Tác động của một câu hỏi có thể bị ảnh hưởng bởi trật tự câu hỏi"
    ],
    "correctAnswers": [
      0,
      3
    ],
    "explanation": "Giải thích: Mỗi tệp người dùng (người trẻ vs người già, chuyên gia vs nghiệp dư) cần một bảng câu hỏi được \"may đo\" ngôn ngữ riêng. Nhà nghiên cứu (Researcher) mới là người quyết định nội dung câu hỏi, không phải người dùng."
  },
  {
    "id": 335,
    "question": "Vấn đề nào sau đây không phải là vấn đề chính của việc thu thập yêu cầu người dùng?",
    "chapter": null,
    "options": [
      "Bản chất của kỹ thuật",
      "Dẫn dắt yêu cầu.",
      "Lựa chọn người tham gia",
      "Mục tiêu",
      "Quan hệ giữa những người tham gia."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": ""
  },
  {
    "id": 336,
    "question": "...được thực hiện theo kịch bản nhưng những vấn đề thú vị có thể được khám phá sâu hơn. Loại phỏng vấn này có thể duy trì sự cân bằng...",
    "chapter": null,
    "options": [
      "Phỏng vấn bán cấu trúc (Semi-structured interview).",
      "Phỏng vấn trực tuyến.",
      "Phỏng vấn có cấu trúc",
      "Phỏng vấn qua điện thoại",
      "Phỏng vấn không có cấu trúc"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ""
  },
  {
    "id": 337,
    "question": "...được thực hiện theo một kịch bản chặt chẽ, thường giống như một bảng câu hỏi...",
    "chapter": null,
    "options": [
      "Phỏng vấn qua điện thoại",
      "Phỏng vấn bán cấu trúc",
      "Phỏng vấn trực tuyến",
      "Phỏng vấn có cấu trúc (Structured interview).",
      "Phỏng vấn không có cấu trúc."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": ""
  },
  {
    "id": 338,
    "question": "Yếu tố nào không ảnh hưởng đến việc lựa chọn phương pháp thu thập yêu cầu của người dùng? (chọn 2)",
    "chapter": null,
    "options": [
      "Nguồn thông tin cần thu thập",
      "Quy trình, nguyên tắc và tiêu chuẩn thu thập thông tin.",
      "Vị trí và khả năng tiếp cận.",
      "Loại thông tin cần thu thập",
      "Nhóm người dùng trọng tâm (Focus group)."
    ],
    "correctAnswers": [
      1,
      4
    ],
    "explanation": "Giải thích: Focus group bản thân nó là một \"phương pháp\" chứ không phải một \"yếu tố\" ảnh hưởng đến việc chọn phương pháp."
  },
  {
    "id": 339,
    "question": "Phát biểu nào sau đây về mẫu thử và quá trình tạo mẫu thử là ĐÚNG? (chọn 3)",
    "chapter": null,
    "options": [
      "Tạo mẫu thử không phải là cách làm rẻ và dễ dàng để nhận phản hồi",
      "Trong mẫu thử giao diện độ tin cậy thấp, có thể phát hiện các vấn đề về bố cục màn hình.",
      "Trong mẫu thử tương tác độ tin cậy cao, sơ đồ điều hướng được định nghĩa rõ ràng.",
      "Trong thiết kế tương tác, mẫu thử giao diện có thể được sử dụng để kiểm tra các phần có thể nhìn thấy của thiết kế.",
      "Mẫu thử độ tin cậy thấp là công việc tốn nhiều thời gian."
    ],
    "correctAnswers": [
      1,
      2,
      3
    ],
    "explanation": ""
  },
  {
    "id": 347,
    "question": "Giám đốc công ty ABC quyết định sử dụng phần mềm... giao diện command-line. Điều gì sẽ xảy ra...",
    "chapter": null,
    "options": [
      "Tất cả các nhân viên đều có thể sử dụng... mà không cần đào tạo.",
      "Hầu hết nhân viên sẽ cảm thấy mất tinh thần và không muốn sử dụng phần mềm này.",
      "Tất cả nhân viên sẽ thích... sau khi thành thạo...",
      "Tất cả nhân viên đều thích...",
      "Hầu hết nhân viên sẽ muốn trở thành chuyên gia..."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: Giao diện dòng lệnh (Command-line) yêu cầu người dùng phải học thuộc lòng hàng chục câu lệnh. Bắt nhân viên văn phòng thông thường sử dụng CLI thay vì giao diện đồ họa (GUI) sẽ tạo ra sự sụp đổ về mặt trải nghiệm và tâm lý."
  },
  {
    "id": 348,
    "question": "Lý do nào sau đây là lý do chính đáng để đưa âm thanh vào giao diện?",
    "chapter": null,
    "options": [
      "So với tín hiệu hình ảnh, người dùng phản ứng chậm hơn",
      "So với tín hiệu hình ảnh, người dùng phản ứng với tín hiệu âm thanh nhanh hơn.",
      "Máy tính phản ứng với âm thanh giống con người",
      "Người dùng phản ứng với âm thanh và hình ảnh như nhau...",
      "Âm thanh luôn truyền đạt ý nghĩa"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: Các nghiên cứu sinh học thần kinh chứng minh rằng thời gian phản xạ của con người với âm thanh (khoảng 140-160ms) nhanh hơn so với hình ảnh (180-200ms). Đó là lý do còi báo động luôn dùng âm thanh."
  },
  {
    "id": 353,
    "question": "...cung cấp sự hiểu biết về các nhiệm vụ mà người dùng cần thực hiện để đạt được các mục tiêu nhất định.",
    "chapter": null,
    "options": [
      "Đặc tả yêu cầu",
      "Bảng câu hỏi phỏng vấn",
      "Mô hình người dùng",
      "Thiết kế giao diện.",
      "Biểu đồ HTA (Hierarchical Task Analysis)."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": ""
  },
  {
    "id": 375,
    "question": "Luồng thông tin của một website thường chỉ ra:",
    "chapter": null,
    "options": [
      "Bảng màu của giao diện",
      "Những phần tử điều khiển nào cần đặt trên giao diện người dùng.",
      "Cấu trúc giao diện",
      "Thứ tự các hành động người dùng cần làm để hoàn thành một nhiệm vụ.",
      "Lý do tại sao người dùng cần 1 số nhiệm vụ đặc biệt"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Giải thích: Luồng thông tin/Luồng duyệt (User Flow / Task Flow) là một sơ đồ dạng bước (Step-by-step), vạch ra hành trình đường đi cụ thể từ màn hình A sang màn hình B, C để user hoàn thành mục tiêu (ví dụ luồng Mua hàng, luồng Đăng nhập). Nó không liên quan đến màu sắc hay hình dáng thiết kế tĩnh."
  },
  {
    "id": 376,
    "question": "Khả năng tiếp nhận âm thanh của con người không phụ thuộc vào các yếu tố nào sau đây? (chọn 2)",
    "chapter": null,
    "options": [
      "Độ vang",
      "Tiếng vọng",
      "Âm điệu (Timbre)",
      "Cường độ âm thanh (Loudness)."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Giải thích: Thính giác của con người cảm nhận một âm thanh độc lập dựa trên 3 đặc tính vật lý cốt lõi: Tần số (Độ cao), Cường độ (Độ to), và Âm sắc (Âm điệu). \"Độ vang\" và \"Tiếng vọng\" là hiệu ứng phản xạ âm thanh của môi trường/phòng ốc, không phải là đặc tính tiếp nhận của màng nhĩ."
  },
  {
    "id": 377,
    "question": "Lập luận quy nạp (Induction) là:",
    "chapter": null,
    "options": [
      "Tư duy trong trường hợp đối lập so với luận điểm...",
      "Dùng những chứng cứ thu thập trong quá trình quan sát để đi tới kết luận.",
      "Từ những giả thiết có sẵn dẫn dắt để đi tới điều cần chứng minh là đúng",
      "Tư duy bằng các phương pháp luận giữa con người và thế giới tự nhiên",
      "Sử dụng toán học để chứng minh."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: Quy nạp là quá trình tư duy đi từ những trường hợp cụ thể (tiểu thuyết/quan sát thực tế) để rút ra một quy luật/kết luận mang tính tổng quát. Ví dụ: Quan sát thấy 100 con thiên nga có màu trắng -> Kết luận: Mọi con thiên nga đều màu trắng."
  },
  {
    "id": 378,
    "question": "Suy luận/Diễn dịch (Deduction) là:",
    "chapter": null,
    "options": [
      "Sử dụng toán học...",
      "Từ những giả thiết có sẵn dẫn dắt để đi tới điều cần chứng minh là đúng.",
      "Tư duy trong trường hợp đối lập...",
      "Dùng những chứng cứ thu thập trong quá trình quan sát...",
      "Tư duy bằng các phương pháp luận..."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: Ngược lại với Quy nạp, Diễn dịch đi từ các nguyên lý/quy luật chung (đã được công nhận là đúng) để suy ra kết quả của một trường hợp cụ thể. Mệnh đề nổi tiếng nhất: \"Mọi con người đều phải chết. Socrates là con người. Suy ra: Socrates phải chết\"."
  },
  {
    "id": 379,
    "question": "Lập luận không phải là (chọn 2):",
    "chapter": null,
    "options": [
      "Sử dụng toán học để chứng minh luận điểm.",
      "Từ những giả thiết có sẵn dẫn dắt để đi tới điều cần chứng minh là đúng (Diễn dịch)",
      "Tư duy bằng các phương pháp luận giữa con người và thế giới tự nhiên.",
      "Dùng những chứng cứ thu thập trong quá trình quan sát để đi tới kết luận (Quy nạp)",
      "Tư duy trong trường hợp đối lập so với luận điểm... (Phản chứng)."
    ],
    "correctAnswers": [
      0,
      2
    ],
    "explanation": "Giải thích: Trong Tâm lý học nhận thức, cơ chế Lập luận (Reasoning) của con người chia làm 3 loại hình cơ bản: Diễn dịch, Quy nạp, và Loại suy/Phản chứng. Các thao tác tính toán toán học không thuộc định nghĩa này."
  },
  {
    "id": 381,
    "question": "Kiểu chữ nào sau đây thường được sử dụng để nhấn mạnh nội dung văn bản?",
    "chapter": null,
    "options": [
      "Kết hợp nghiêng và gạch chân",
      "Thường",
      "Đậm (Bold).",
      "Gạch chân",
      "Nghiêng."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Giải thích: Chữ in đậm làm tăng \"trọng lượng thị giác\" (Visual weight), thu hút ánh mắt người dùng ngay lập tức. Cần tránh dùng \"Gạch chân\" để nhấn mạnh, vì trong môi trường Web, chữ gạch chân mặc định được não bộ người dùng hiểu là một Link liên kết (Hyperlink) có thể bấm vào."
  },
  {
    "id": 387,
    "question": "Trong một thiết kế tương tác người - máy tốt, phát biểu nào sau đây là sai? (chọn 2)",
    "chapter": null,
    "options": [
      "Âm thanh có thể truyền tải ý nghĩa.",
      "Chức năng phức tạp nên được điều khiển theo quy trình (dưới dạng một chuỗi thao tác).",
      "Các chức năng được khởi động độc lập.",
      "Cần có phím tắt (như ctrl + z) để khôi phục",
      "Các biểu tượng có thể mang ý nghĩa cụ thể"
    ],
    "correctAnswers": [
      1,
      2
    ],
    "explanation": "Giải thích: Ép buộc các chức năng phức tạp luôn phải chạy theo một \"quy trình tuần tự\" (Wizard) cứng nhắc sẽ triệt tiêu sự linh hoạt, làm người dùng chuyên nghiệp cảm thấy bị kìm hãm. Tương tác hiện đại khuyến khích thiết kế Không hộp thoại hóa (Non-modal) để người dùng tự do điều hướng."
  },
  {
    "id": 388,
    "question": "Phát biểu nào sau đây là đúng đối với một thiết kế tốt?",
    "chapter": null,
    "options": [
      "Thiết kế tốt có thể đến từ việc chỉnh sửa giao diện ở bước cuối cùng",
      "Thiết kế tốt chỉ cần giao diện đẹp",
      "Thiết kế tốt cần đến từ một quy trình lặp hướng đến người dùng.",
      "Thiết kế tốt là cung cấp đủ thông tin theo chức năng cho người dùng",
      "Thiết kế tốt đáp ứng đủ những nhu cầu thông thường."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Giải thích: Thiết kế không phải là nghệ thuật vẽ 1 lần là xong. UI/UX tốt bắt buộc phải ra đời từ quá trình \"Iterative Design\": Thiết kế -> Làm mẫu thử -> Đưa người dùng Test -> Thu thập feedback -> Sửa lại thiết kế. Vòng lặp này phải diễn ra liên tục."
  },
  {
    "id": 389,
    "question": "Nguyên tắc thiết kế giao diện nào sau đây làm giảm tải bộ nhớ của người dùng? (chọn 3) (Ghi chú: Theo nguyên lý HCI)",
    "chapter": null,
    "options": [
      "Cung cấp thông tin theo sự tiến bộ (Progressive disclosure).",
      "Thiết lập các giá trị mặc định có ý nghĩa (Default values).",
      "Cung cấp hướng dẫn trực tuyến (Contextual help/Tooltips)."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Giải thích: Nguyên tắc \"Nhận biết thay vì nhớ lại\" (Recognition rather than recall): Điền sẵn các giá trị mặc định giúp não không phải lôi dữ liệu cũ ra; Tiết lộ thông tin dần dần giúp màn hình bớt rác; Cung cấp hướng dẫn tại chỗ giúp user không phải đi mò mẫm tài liệu học."
  },
  {
    "id": 390,
    "question": "Loại giao diện người dùng nào cung cấp đầu vào bằng cách nhập một chuỗi kí tự từ bàn phím?",
    "chapter": null,
    "options": [
      "Giao diện ngôn ngữ tự nhiên.",
      "Giao diện người dùng đồ họa (GUI)",
      "Giao diện menu",
      "Giao diện người dùng dòng lệnh (CLI - Command Line Interface).",
      "Giao diện người dùng sử dụng giọng nói hoặc dòng lệnh"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": ""
  },
  {
    "id": 391,
    "question": "Ưu điểm khi sử dụng bảng câu hỏi (Questionnaires) so với phỏng vấn là gì? (chọn 3)",
    "chapter": null,
    "options": [
      "Dễ phân tích và so sánh.",
      "Có thể tiếp cận một nhóm chủ đề rộng (lượng người dùng lớn).",
      "Khai thác thông tin của các nhóm người dùng đặc trưng",
      "Kết quả tổng hợp mang tính định tính.",
      "Dễ lặp lại."
    ],
    "correctAnswers": [
      0,
      1,
      4
    ],
    "explanation": "Giải thích: Khảo sát trực tuyến qua bảng câu hỏi thu về dữ liệu bằng con số (định lượng), vì thế có thể gửi cho hàng ngàn người (tiếp cận diện rộng), cực kỳ dễ đưa vào biểu đồ để so sánh và làm lại nhiều lần với chi phí siêu rẻ."
  },
  {
    "id": 392,
    "question": "Điều nào sau đây là vấn đề với việc tạo mẫu thử độ tin cậy thấp (Low-Fi prototype)? (chọn 2)",
    "chapter": null,
    "options": [
      "Người kiểm tra có xu hướng nhận xét các khía cạnh có lợi...",
      "Kỳ vọng của người dùng có thể được đặt quá cao.",
      "Người phát triển mất quá nhiều thời gian để xây dựng mẫu thử",
      "Không kiểm chứng được tính dùng được và các thao tác.",
      "Không chắc chắn trong quá trình thử nghiệm."
    ],
    "correctAnswers": [
      3,
      4
    ],
    "explanation": "Giải thích: Bản vẽ tay nháp (Low-Fi) thì không thể \"bấm\" (click) được thực sự. Do đó, rất khó để đo lường chính xác tốc độ thao tác hay hiệu quả tương tác (Usability) vì người dùng phần lớn phải tự \"tưởng tượng\" ra màn hình chuyển tiếp theo, dẫn đến sự không chắc chắn về kết quả test."
  },
  {
    "id": 393,
    "question": "Đặc tính quan trọng nhất mà một mẫu thử (prototype) cần phải có là gì?",
    "chapter": null,
    "options": [
      "Dễ dàng loại bỏ.",
      "Giống hệt sản phẩm cuối cùng",
      "Biểu diễn thông tin giao tiếp",
      "Hỗ trợ các thử nghiệm của người dùng",
      "Cho phép người dùng thử nghiệm các thiết kế chính."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Giải thích: Lý do sinh ra Prototype không phải để ngắm, mà là để tạo ra một môi trường giả lập nhằm TEST (thử nghiệm) xem luồng tính năng và bố cục thiết kế cốt lõi có phù hợp với người dùng thực tế hay không trước khi tốn tiền đưa cho lập trình viên code."
  },
  {
    "id": 394,
    "question": "Trong thiết kế giao diện người dùng, bố cục màn hình thể hiện: (chọn 3)",
    "chapter": null,
    "options": [
      "Thiết kế đồ họa và vị trí của các phần tử giao diện.",
      "Các menu chính và menu con.",
      "Các nội dung văn bản cần loại bỏ trên màn hình",
      "Cách thức kiểm tra thao tác của người dùng.",
      "Xác định đặc điểm kỹ thuật của các cửa sổ."
    ],
    "correctAnswers": [
      0,
      1,
      4
    ],
    "explanation": "Giải thích: \"Bố cục\" (Layout) là việc hoạch định không gian hiển thị: Nút này to hay nhỏ, lưới đặt ở đâu, vùng nào dành cho Menu, vùng nào dành cho Cửa sổ pop-up."
  },
  {
    "id": 396,
    "question": "Lĩnh vực nào sau đây có ảnh hưởng đến tương tác người - máy?",
    "chapter": null,
    "options": [
      "Tâm lý học nhận thức, công thái học, khoa học máy tính.",
      "(Các tổ hợp thiếu 1 trong 3 ngành kể trên)."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: Cội nguồn của ngành HCI (Tương tác Người - Máy) được xây dựng trên thế chân vạc: Công nghệ (Khoa học máy tính để lập trình), Tư duy (Tâm lý học để hiểu cách não người xử lý thông tin), và Thể chất (Công thái học để hiểu thao tác vận động của tay, mắt)."
  },
  {
    "id": 397,
    "question": "Loại mẫu thử nào sau đây cho phép kiểm tra tính trực quan của các chức năng của một ứng dụng:",
    "chapter": null,
    "options": [
      "Mẫu thử giao diện độ tin cậy thấp.",
      "Mẫu thử tương tác độ tin cậy cao",
      "Mẫu thử nhanh",
      "Mẫu thử giao diện độ tin cậy cao (Hi-Fi Prototype).",
      "Mẫu thử tương tác độ tin cậy thấp"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Giải thích: \"Tính trực quan\" (Aesthetics/Visuals) đòi hỏi sự trau chuốt về thẩm mỹ: Font chữ thật, đổ bóng, màu sắc gradient, hình ảnh rõ nét. Chỉ có Mẫu thử độ tin cậy cao (thiết kế chi tiết trên Figma/XD) mới thể hiện được điều này."
  },
  {
    "id": 398,
    "question": "Loại mẫu thử nào sau đây cho phép kiểm tra bảng màu (color scheme) của một ứng dụng:",
    "chapter": null,
    "options": [
      "(Các loại mẫu thử thấp, nhanh, tương tác).",
      "Mẫu thử giao diện độ tin cậy cao."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: Tương tự câu trên, Mẫu thử thấp (Low-Fi) thường chỉ vẽ bằng bút chì đen trắng. Muốn test xem hệ thống màu Đỏ - Xanh có bị chói mắt hay vi phạm độ tương phản không, bắt buộc phải dùng Hi-Fi Prototype."
  },
  {
    "id": 399,
    "question": "Đâu là ưu điểm của mẫu thử độ tin cậy cao (Hi-Fi)? (chọn 2)",
    "chapter": null,
    "options": [
      "So với các loại mẫu thử khác, cần ít nỗ lực và thời gian hơn...",
      "So với các loại mẫu thử khác, cần nhiều nỗ lực và thời gian hơn... (Đây là ĐẶC ĐIỂM/NHƯỢC ĐIỂM, không phải \"ưu điểm\").",
      "Người dùng có thể có rất nhiều phản hồi về các chức năng của ứng dụng (do nó chạy giống ứng dụng thật).",
      "Người dùng sẽ tập trung rất nhiều vào các chi tiết thiết kế, như logo, phông chữ, bảng màu.",
      "Người dùng không sa đà vào việc bình luận về màu sắc..."
    ],
    "correctAnswers": [
      2,
      3
    ],
    "explanation": ""
  },
  {
    "id": 405,
    "question": "Cho 2 phát biểu sau: ... (Luật Fitts) ... (Người gõ phím nhanh mắc lỗi thấp)...",
    "chapter": null,
    "options": [
      "Cả hai phát biểu đều Đúng.",
      "Chỉ có Phát biểu 1 là Đúng",
      "Cả hai phát biểu đều Sai.",
      "Phát biểu 2 chỉ đúng với những người dùng chưa quen...",
      "Chỉ có Phát biểu 2 là Đúng"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: Luật Fitts (thời gian trỏ chuột đến mục tiêu phụ thuộc vào kích thước nút và khoảng cách) là định lý toán học chuẩn xác trong HCI. Phát biểu 2 cũng đúng vì những người đánh máy siêu tốc (chuyên gia) thường dùng \"Muscle memory\" (Trí nhớ cơ bắp) chuẩn xác hơn hẳn so với người gõ mổ cò (chậm và hay sai)."
  },
  {
    "id": 406,
    "question": "Một phần mềm có thể cho phép người dùng tương tác qua (chọn 3):",
    "chapter": null,
    "options": [
      "Bàn phím và chuột.",
      "Giọng nói.",
      "Lệnh bàn phím.",
      "Giọng nói và trực giác.",
      "Trực giác"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Giải thích: Kênh đầu vào (Input) của máy tính bắt buộc phải là các tín hiệu vật lý/âm thanh tác động lên các thiết bị ngoại vi. \"Trực giác\" thuộc về tư duy trừu tượng trong não bộ, máy tính không thể đọc được trực giác của bạn."
  },
  {
    "id": 407,
    "question": "Yếu tố nào sau đây là quan trọng trong thiết kế giao diện? (chọn 2)",
    "chapter": null,
    "options": [
      "Xây dựng sản phẩm",
      "Yêu cầu của người dùng, thao tác kiểm tra.",
      "Tổng hợp yêu cầu và thử nghiệm sản phẩm",
      "Thực thi chương trình và đánh giá.",
      "Có sự tham gia của người dùng, trải nghiệm của người dùng."
    ],
    "correctAnswers": [
      1,
      4
    ],
    "explanation": "Giải thích: UX/UI Design là về \"Trải nghiệm\" và \"Người dùng\". Những yếu tố liên quan đến \"Xây dựng/Thực thi chương trình (Code)\" là phần việc của khâu phát triển phần mềm (Software Development)."
  },
  {
    "id": 408,
    "question": "Thiết kế lấy người dùng làm trung tâm rất quan trọng vì:",
    "chapter": null,
    "options": [
      "Thiết kế phải phục vụ cho nhu cầu cụ thể của người sử dụng.",
      "Người dùng cần được dạy cách sử dụng thiết kế",
      "Hài hòa lợi ích giữa người thiết kế và người dùng",
      "Cần phải biết môi trường người dùng trong khi xây dựng thiết kế",
      "Thiết kế phải đủ trực quan cho người dùng."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: Bản chất của thiết kế sản phẩm không phải là tạo ra một thứ trông thật nghệ thuật, mà là cung cấp một CÔNG CỤ để phục vụ/giải quyết tận gốc vấn đề (nhu cầu) của những người sẽ trực tiếp sử dụng nó."
  },
  {
    "id": 409,
    "question": "Quy trình thiết kế lặp (Iterative Design Process) là:",
    "chapter": null,
    "options": [
      "Thiết kế - Mã hóa - Thực thi.",
      "Phân tích - Thiết kế - Mã hóa",
      "Thiết kế - Tạo mẫu thử - Thực thi",
      "Thiết kế - Tạo mẫu thử - Đánh giá.",
      "Thiết kế - Mã hóa - Đánh giá"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Giải thích: Vòng lặp UX Design chuẩn mực diễn ra theo 3 khâu: Thiết kế (Đưa ra ý tưởng) -> Tạo mẫu thử (Prototype giả lập) -> Đánh giá (Đưa người dùng test). Vòng lặp này tuyệt đối chưa có sự can thiệp của việc \"Mã hóa\" (Code) hay \"Thực thi\" (Implement)."
  },
  {
    "id": 411,
    "question": "Trong quy trình thiết kế lặp, bước tạo mẫu thử:",
    "chapter": null,
    "options": [
      "Được tiến hành lặp đi lặp lại với bước xây dựng ứng dụng",
      "Cần được thực hiện theo yêu cầu của người dùng.",
      "Sẽ được thực hiện sau bước đánh giá",
      "Có thể không cần thiết đối với các sản phẩm đơn giản.",
      "Nhằm tạo sản phẩm cuối cùng của quy trình thiết kế"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: Mẫu thử (Prototype) được vẽ ra dựa trên việc chuyển đổi các \"Yêu cầu người dùng\" đã thu thập ban đầu thành dạng hình ảnh trực quan. Nó luôn đi trước bước đánh giá, và mẫu thử chỉ là đồ giả lập, vĩnh viễn không bao giờ là \"Sản phẩm cuối cùng\"."
  },
  {
    "id": 413,
    "question": "Mệnh đề nào sau đây đúng với khái niệm trải nghiệm người dùng (viết tắt là \"UX\")? (chọn 2)",
    "chapter": null,
    "options": [
      "Tập trung vào cảm giác hoặc trải nghiệm khi sử dụng giao diện.",
      "Bao gồm các vấn đề về hiệu suất, ảnh hưởng và sự hài lòng của người dùng.",
      "Chỉ về tốc độ của người dùng trong việc học một giao diện được thiết kế",
      "Chỉ được quan sát trực tiếp thông qua các hành vi của người dùng",
      "Chỉ tính đến những trải nghiệm của chuyên gia."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Giải thích: Theo định nghĩa chuẩn của ISO 9241-210, Trải nghiệm người dùng (UX) bao gồm nhận thức, cảm xúc (sự hài lòng, vui vẻ, bực bội), niềm tin, sở thích, và các phản ứng vật lý/tâm lý (hiệu suất) xảy ra trước, trong, và sau khi tương tác với sản phẩm."
  },
  {
    "id": 414,
    "question": "So với email không có ảnh GIF động, các email có GIFS động được người dùng cảm nhận:",
    "chapter": null,
    "options": [
      "Ít tích cực hơn.",
      "Bột buon te (Lỗi OCR của đề, có thể là \"Bớt buồn tẻ\").",
      "Đáng tin cậy hơn",
      "Rối mắt hơn",
      "Có giá trị hơn"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: Các nghiên cứu UX về Email Marketing chỉ ra rằng ảnh GIF động thường khiến email tải chậm hơn, dễ bị các bộ lọc đánh dấu là thư rác (spam), và thường tạo cảm giác kém chuyên nghiệp hoặc gây mất tập trung (phân tán thị giác) so với văn bản và hình ảnh tĩnh. Do đó, người dùng thường có ấn tượng \"ít tích cực hơn\"."
  },
  {
    "id": 415,
    "question": "Điều nào sau đây mô tả đánh giá hình thành trải nghiệm người dùng?",
    "chapter": null,
    "options": [
      "Kiểm tra khả năng sử dụng (ví dụ trên một trang web) trực tiếp để hiểu nó so với các đối thủ như thế nào",
      "Điều hành một nhóm tập trung để hiểu nhu cầu của đối tượng mục tiêu",
      "Kiểm tra trên website đã được khách hàng nghiệm thu và triển khai chính thức từ 2020",
      "Kiểm tra khả năng sử dụng trên phiên bản hiện tại để thiết lập đường cơ sở cho việc đo lường một cách định lượng.",
      "Kiểm tra khả năng sử dụng một cách định tính trên một mẫu thử nghiệm để tìm ra những thay đổi nào cần được thực hiện."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Giải thích: Đánh giá hình thành (Formative Evaluation) diễn ra trong quá trình thiết kế. Mục tiêu của nó là thu thập dữ liệu định tính (lý do tại sao user gặp khó khăn) thông qua các bản mẫu (prototype) để chỉnh sửa, uốn nắn (tìm ra thay đổi cần thực hiện) trước khi code."
  },
  {
    "id": 416,
    "question": "Bản đồ thấu cảm (empathy map) là gì?",
    "chapter": null,
    "options": [
      "Một sơ đồ trực quan hóa các mối quan hệ giữa các thành phần dịch vụ... (Đây là Service Blueprint).",
      "Hình ảnh tổng hợp trình bày những gì chúng ta biết về một kiểu người dùng (Đây là Persona)",
      "Tự tưởng tượng nếu mình là người dùng thì nghĩ gì làm gì nói gì cảm thấy gì khi sử dụng một sản phẩm cụ thể.",
      "Hình dung về toàn bộ trải nghiệm mà một người chung chung trải qua để đạt được mục tiêu",
      "Quá trình mà một người trải qua để hoàn thành mục tiêu gắn liền với một sản phẩm cụ thể"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Giải thích: Bản đồ thấu cảm (Empathy Map) là một công cụ chia làm 4 góc phần tư: Thấy gì (See), Nói & Làm gì (Say & Do), Nghe gì (Hear), và Nghĩ & Cảm thấy gì (Think & Feel). Nó giúp team thiết kế \"nhập vai\" và thấu hiểu sâu sắc tâm lý người dùng."
  },
  {
    "id": 417,
    "question": "Wireframes là cách thức hữu ích để chỉ ra:",
    "chapter": null,
    "options": [
      "Cách bố trí các phần tử điều khiển trên giao diện người dùng.",
      "Bảng màu của giao diện người dùng",
      "Thiết kế kiểu chữ, phông chữ trên giao diện người dùng",
      "Thứ tự các hành động của người dùng cần thiết để hoàn thành một tác vụ.",
      "Lý do tại sao người dùng cần các tác vụ cụ thể"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: Wireframe là bản vẽ khung xương (thường là đen trắng/xám). Nó KHÔNG chứa màu sắc, phông chữ đẹp (những cái này thuộc về UI Mockup/Hi-Fi). Nó chỉ dùng để chốt bố cục (layout): nút bấm nằm đâu, hình ảnh to nhường nào."
  },
  {
    "id": 421,
    "question": "Trong số các lựa chọn sau đây, đâu là các mẫu thử (prototype)? (chọn 2)",
    "chapter": null,
    "options": [
      "Bản phác thảo tương tác (sketch).",
      "Khung tương tác (Interaction framework).",
      "Bản phác thảo giấy (mock-ups).",
      "Mô hình khái niệm (conceptual models)",
      "Phiên bản beta (beta versions)"
    ],
    "correctAnswers": [
      0,
      2
    ],
    "explanation": "Giải thích: Mẫu thử (Prototype) có thể tồn tại ở độ tin cậy rất thấp (vẽ trên giấy) đến mức độ cao (bản vẽ có thể click tương tác trên máy tính). Mô hình khái niệm hay khung tương tác là lý thuyết, phiên bản beta là sản phẩm đã code xong phần mềm."
  },
  {
    "id": 423,
    "question": "Tính chất nào sau đây mô tả người dùng đã xác định đúng mục tiêu tương tác và hoàn thành đúng việc cần làm trong một bối cảnh cụ thể?",
    "chapter": null,
    "options": [
      "Độ hiệu quả (Effectiveness).",
      "Tính dùng được (Usability)",
      "Độ hài lòng (Satisfaction).",
      "Tính tiện lợi (Utility)",
      "Năng suất (Efficiency)"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: Theo định nghĩa Usability, \"Effectiveness\" (Tính hiệu quả) đo lường việc người dùng có hoàn thành được chính xác mục tiêu hay không (Làm đúng việc). Còn \"Efficiency\" (Năng suất) đo lường việc họ làm điều đó nhanh cỡ nào (Làm việc đúng cách)."
  },
  {
    "id": 424,
    "question": "Loại menu nào sau đây tối ưu hóa thời gian di chuyển dự kiến từ con trỏ (được đặt trên nhân menu) đến một tùy chọn tùy ý bên trong menu?",
    "chapter": null,
    "options": [
      "Menu phân cấp (hierarchical menu)",
      "Menu kéo xuống (pulldown menu)",
      "Menu bánh số hoặc menu vòng cung (pie or radial menu).",
      "Menu hình chữ nhật hoặc hình vuông (rectangle or square menu).",
      "Menu tuyến tính (linear menu)"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Giải thích: Theo Luật Fitts (Fitts's Law), thời gian trỏ chuột phụ thuộc vào khoảng cách. Ở menu vòng cung (Radial menu), khoảng cách từ tâm (chỗ nhấp chuột) đến TẤT CẢ các tùy chọn xung quanh là bằng nhau và rất ngắn, giúp tốc độ thao tác cực kỳ nhanh và tạo thành trí nhớ cơ bắp."
  },
  {
    "id": 425,
    "question": "Mục tiêu của thiết kế hệ thống tương tác là:",
    "chapter": null,
    "options": [
      "Đảm bảo các chức năng chạy đúng.",
      "Tối đa tính dùng được (Usability).",
      "Giảm thời gian thiết kế",
      "Giảm giá thành",
      "Giảm công sức lập trình"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: Tương tác Người - Máy (HCI/UX) sinh ra không phải để tối ưu cho code (Dev) hay túi tiền của doanh nghiệp (Business), mà mục tiêu duy nhất của nó là tối ưu trải nghiệm và sự dễ dùng (Usability) cho người dùng cuối."
  },
  {
    "id": 429,
    "question": "Trong giai đoạn đầu của thiết kế tương tác, cách thức sử dụng màu tốt nhất là:",
    "chapter": null,
    "options": [
      "Sử dụng màu càng nhiều càng tốt",
      "Tránh dùng màu sáng.",
      "Tránh dùng màu đen",
      "Tránh dùng màu tương phản",
      "Không sử dụng màu."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Giải thích: Giai đoạn đầu (Vẽ Wireframe/Low-Fi), các Designer thường chỉ dùng dải màu xám (Grayscale). Lý do là để người dùng và các bên liên quan (Stakeholders) tập trung 100% vào luồng logic và bố cục, tránh bị phân tâm bởi việc tranh cãi xem \"Nút này màu xanh hay màu đỏ thì đẹp hơn\"."
  },
  {
    "id": 432,
    "question": "Tính dùng được cho phép:",
    "chapter": null,
    "options": [
      "Xác định cách mà con người quan sát và đánh giá sản phẩm",
      "Xác định cách sử dụng sản phẩm.",
      "Xác định cách thức người dùng sử dụng sản phẩm.",
      "Xác định xem có nên đồng ý trả tiền cho sản phẩm hay không",
      "Xác định cách thức người phát triển dùng sản phẩm"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": ""
  },
  {
    "id": 433,
    "question": "Trên Windows Explorer, để di chuyển một tập / thư mục (nguồn) đến một thư mục đích, người dùng có thể chọn biểu tượng tên thư mục nguồn và thực hiện thao tác kéo thả chúng vào thư mục đích. Đây là một ví dụ về (chọn 3):",
    "chapter": null,
    "options": [
      "Mô tả ý định của người dùng.",
      "Nguyên tắc nhận biết (recognition).",
      "Sự đáp ứng của máy tính đối với người dùng.",
      "Biểu diễn thao tác (Direct manipulation).",
      "Mô phỏng hoạt động của máy tính"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ],
    "explanation": "Giải thích: Thao tác \"Kéo thả\" (Drag & Drop) là đỉnh cao của Thao tác trực tiếp (Direct manipulation). Thay vì phải gõ lệnh \"Move C:\\Folder A to D:\\Folder B\" (phải nhớ), người dùng chỉ cần nhìn thấy thư mục (nhận biết) và dùng chuột cầm nó thả sang chỗ khác (mô tả ý định vật lý y như ngoài đời thực)."
  },
  {
    "id": 434,
    "question": "Khi thực hiện thao tác kéo một thư mục sang một thư mục khác, trên màn hình xuất hiện một ảnh động thể hiện thao tác copy/move thư mục này sang thư mục khác. Đây là một ví dụ về:",
    "chapter": null,
    "options": [
      "Tính ánh xạ (mapping)",
      "Sự mô phỏng (simulation)",
      "Tính ánh xạ (mapping) và tính phản hồi (feedback)",
      "Tính phản hồi (feedback).",
      "Tính trực quan (visibility)."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Giải thích: Hình ảnh động (animation) chiếc tài liệu bay từ thư mục này sang thư mục kia là cách máy tính \"nói\" với người dùng rằng: \"Tôi đã nhận được lệnh của bạn và hệ thống đang xử lý việc sao chép đây\". Đó chính là Phản hồi."
  },
  {
    "id": 435,
    "question": "Một mô hình khái niệm (conceptual model) là gì?",
    "chapter": null,
    "options": [
      "Tập hợp các thành phần trong hệ thống",
      "Thể hiện chế độ tương tác",
      "Không gian vấn đề khi thu thập các yêu cầu của người dùng.",
      "Mô hình tương tác",
      "Mô tả ở mức độ trừu tượng cao về cách hệ thống được tổ chức và cách nó hoạt động."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Giải thích: Mô hình khái niệm là cách những nhà thiết kế \"đơn giản hóa\" một hệ thống máy tính phức tạp thành một hình tượng dễ hiểu cho con người. Ví dụ: Máy tính không có \"thư mục\" hay \"thùng rác\" thật, đó chỉ là các Mô hình khái niệm trừu tượng để con người dễ hình dung cách file được lưu trữ và xóa đi."
  },
  {
    "id": 437,
    "question": "Chọn phương án có thứ tự tối ưu nhất để thu thập yêu cầu người dùng:",
    "chapter": null,
    "options": [
      "Khảo sát -> Thảo luận nhóm tập trung -> Phỏng vấn.",
      "Thảo luận nhóm tập trung -> Phỏng vấn -> Khảo sát",
      "Khảo sát -> Phỏng vấn -> Thảo luận nhóm tập trung",
      "Phỏng vấn -> Thảo luận nhóm tập trung -> Khảo sát.",
      "Khảo sát -> Phỏng vấn -> Kiểm thử tính dùng được"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: Trình tự nghiên cứu kinh điển đi từ Rộng đến Hẹp:\nKhảo sát (Survey): Phát diện rộng để lấy số liệu định lượng, tìm ra \"Trend\" hoặc vấn đề nổi cộm.\nNhóm tập trung (Focus Group): Mời 5-7 người để thảo luận chung, lọc ra các nhóm vấn đề chuyên sâu.\nPhỏng vấn (Interview 1-1): Đào sâu vào tâm lý, động cơ cá nhân của từng người để lấy Insight chất lượng nhất."
  },
  {
    "id": 438,
    "question": "Trong mô hình HTA mối quan hệ giữa nhiệm vụ (tasks), hành động (actions) và mục tiêu (goals) thể hiện như thế nào?",
    "chapter": null,
    "options": [
      "Các nhiệm vụ đảm bảo việc hoàn thành một mục tiêu nào đó.",
      "Một nhiệm vụ bao gồm các mục tiêu và hành động để hoàn thành các mục tiêu đó.",
      "Một hành động biến một nhiệm vụ thành một mục tiêu",
      "Các hành động chỉ phục vụ cho mục tiêu cụ thể",
      "Một mục tiêu bao gồm một tập hợp các hành động để hoàn thành một nhiệm vụ"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: HTA (Hierarchical Task Analysis) chia nhỏ công việc theo cấu trúc cây. Từ Nhiệm vụ chính, chẻ ra thành các Mục tiêu con, và dưới Mục tiêu con là các Hành động vật lý cụ thể (ví dụ: bấm nút, di chuột) để đạt được chúng."
  },
  {
    "id": 439,
    "question": "Mục tiêu của phân tích nhiệm vụ (Task Analysis) là gì?",
    "chapter": null,
    "options": [
      "Để xác định các giới hạn thời gian cho các nhiệm vụ",
      "Để xác định các tác vụ mà người dùng có nhiều khả năng thực hiện nhất.",
      "Để biết các công việc cần phải thực hiện khi xây dựng sản phẩm",
      "Để xác định tần suất các tác vụ được thực hiện.",
      "Để xác định các nhiệm vụ mà các nhà phát triển đã thiết kế"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: Task Analysis giúp chúng ta biết được trong một quy trình, người dùng thực tế đang làm gì, bước nào là quan trọng và hay được dùng nhất. Từ đó thiết kế luồng (flow) xoay quanh các tác vụ trọng tâm này."
  },
  {
    "id": 442,
    "question": "Đâu là nhược điểm của việc tạo mẫu thử có độ tin cậy cao (Hi-Fi Prototype)?",
    "chapter": null,
    "options": [
      "Người dùng không thích các nguyên mẫu có độ trung thực cao",
      "Xây dựng các nguyên mẫu có độ trung thực cao tốn nhiều thời gian.",
      "Người dùng tập trung quá nhiều vào các chi tiết nhỏ như logo",
      "Người dùng đưa ra nhiều phản hồi về chức năng của ứng dụng.",
      "Mẫu thử chỉ phù hợp với người thiết kế"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: Hi-Fi Prototype nhìn giống hệt app thật (đầy đủ màu sắc, hiệu ứng bóng đổ, font chữ, animation). Để vẽ và nối luồng cho nó tốn rất nhiều công sức. Nếu làm sai và phải đập đi thiết kế lại, chi phí thời gian bỏ ra là cực kỳ lớn."
  },
  {
    "id": 443,
    "question": "Điều nào sau đây là phù hợp cho việc tạo mẫu thử độ tin cậy thấp (Low-Fi)? (chọn 2)",
    "chapter": null,
    "options": [
      "Phác thảo trên giấy.",
      "Thể hiện các tương tác cần thiết.",
      "Chỉ bố cục đen trắng.",
      "Tạo một biểu trưng đầy màu sắc cho ứng dụng của bạn",
      "Quyết định cách phối màu"
    ],
    "correctAnswers": [
      0,
      2
    ],
    "explanation": "Giải thích: Low-fi là bản phác thảo thô ráp, rẻ tiền, nhanh chóng. Do đó nó vứt bỏ toàn bộ yếu tố mỹ thuật (màu sắc, logo) và các tương tác click chuột phức tạp."
  },
  {
    "id": 445,
    "question": "Một ... có thể được thêm vào bản trình bày (slide) để đi đến nhiều vị trí khác nhau (ví dụ: địa chỉ web, địa chỉ e-mail, chương trình hoặc tài liệu).",
    "chapter": null,
    "options": [
      "Siêu liên kết (Hyperlink).",
      "Liên kết công cụ (Tool link)",
      "Tất cả các đáp án trên.",
      "Liên kết menu (Menu link)",
      "Liên kết trong trình bày (Slide link)"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": ""
  },
  {
    "id": 446,
    "question": "Đâu là một nhiệm vụ khó khăn khi điều hướng trên một trang web thương mại điện tử?",
    "chapter": null,
    "options": [
      "Cập nhật đơn hàng.",
      "Hủy mua hàng.",
      "Tạo tài khoản / Đăng nhập",
      "Thanh toán và tiến hành mua hàng",
      "Tìm một sản phẩm và thêm vào giỏ hàng"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: Về mặt kinh doanh, các công ty muốn giữ chân khách hàng và dòng tiền. Do đó, nút \"Mua hàng\" luôn to và rõ ràng, trong khi các tính năng như \"Hủy đơn hàng\" hay \"Xóa tài khoản\" thường bị giấu kỹ trong nhiều lớp menu. Trong UX, điều này đôi khi bị gọi là \"Dark Patterns\" (Giao diện hắc ám)."
  },
  {
    "id": 447,
    "question": "Hình thức trợ giúp tốt nhất là:",
    "chapter": null,
    "options": [
      "Tra cứu online.",
      "Xem tài liệu",
      "Sử dụng trợ giúp trực tiếp",
      "Không cần trợ giúp.",
      "Tìm hiểu các ứng dụng tương tự"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Giải thích: \"The best interface is no interface\" hoặc \"Thiết kế tốt thì không cần sách hướng dẫn\". Một giao diện hoàn hảo là giao diện tuân theo trực giác của con người (Intuitive), người dùng nhìn vào là tự biết cách dùng ngay mà không cần đọc Help hay FAQs."
  },
  {
    "id": 448,
    "question": "So với những người dùng bỏ qua hướng dẫn để sử dụng một ứng dụng game trên thiết bị di động, những người dùng xem qua hướng dẫn sẽ:",
    "chapter": null,
    "options": [
      "Ít có khả năng hoàn thành nhiệm vụ trong ứng dụng",
      "Sẽ sử dụng ứng dụng nhiều hơn",
      "Cảm thấy nhiệm vụ trong ứng dụng ít thú vị hơn.",
      "Thực hiện một tác vụ trong ứng dụng nhanh hơn",
      "Có trải nghiệm tốt hơn."
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Giải thích: Tâm lý học trò chơi (Gamification) chỉ ra rằng, niềm vui của việc chơi game đến từ sự \"khám phá\" và vượt qua \"thử thách\". Nếu bắt user đọc một bản hướng dẫn dài ngoằng (Tutorial) dạy họ mọi thứ, sự tò mò và cảm giác thành tựu sẽ biến mất."
  },
  {
    "id": 449,
    "question": "Sự khác biệt giữa bản đồ hành trình của khách hàng (customer journey map) và bản đồ trải nghiệm (experience map) là gì?",
    "chapter": null,
    "options": [
      "Bản đồ trải nghiệm không phù hợp với thời kỳ sản phẩm cụ thể nào, trong khi Bản đồ hành trình của khách hàng gắn liền với một sản phẩm hoặc dịch vụ cụ thể.",
      "Cả hai loại bản đồ trên không phân biệt với nhau",
      "Bản đồ hành trình tập trung vào khách hàng, trong khi bản đồ trải nghiệm tập trung vào nhân viên",
      "Bản đồ hành trình cung cấp góc nhìn chung... không dành cho đối tượng cụ thể",
      "Bản đồ hành trình mô tả sự kiện theo thời gian, nhưng trải nghiệm không theo thời gian..."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: \nExperience Map: Rất chung chung. Ví dụ: Trải nghiệm \"Việc đi sinh con của một bà bầu\" (không gắn với bệnh viện nào).\nCustomer Journey Map: Cụ thể. Ví dụ: Hành trình \"Bà bầu A sử dụng dịch vụ sinh con trọn gói tại Bệnh viện Vinmec\"."
  },
  {
    "id": 450,
    "question": "Một user persona trong bối cảnh thiết kế tương tác: (chọn 2)",
    "chapter": null,
    "options": [
      "Được sử dụng để nhập vai thông qua một thiết kế giao diện.",
      "Đại diện cho một kiểu người dùng cụ thể.",
      "Là người thật",
      "Đại diện cho một người dùng bình thường",
      "Mô tả cho thói quen của người dùng."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Giải thích: Persona (Chân dung người dùng) là một nhân vật giả tưởng (không phải người thật) được đúc kết từ dữ liệu nghiên cứu, đại diện cho một tập hợp/kiểu khách hàng mục tiêu. Nó giúp team thiết kế hình dung cụ thể họ đang làm sản phẩm cho ai để \"nhập vai\" thiết kế cho chuẩn."
  },
  {
    "id": 451,
    "question": "Luật Fitts về sự dịch chuyển chỉ ra:",
    "chapter": null,
    "options": [
      "Người sử dụng dễ dàng nhớ được vị trí đầu tiên và cuối cùng... (Đây là Hiệu ứng vị trí nối tiếp - Serial Position Effect)",
      "Thời gian đến mục tiêu phụ thuộc vào khoảng cách và kích thước của mục tiêu đó.",
      "Cảm nhận của thị giác phụ thuộc vào kích thước hay khoảng cách tương đối...",
      "Năng suất làm việc tăng khi máy tính và người dùng tương tác dưới 400ms...",
      "Thời gian đưa ra quyết định tăng lên phụ thuộc vào số lượng và sự phức tạp... (Đây là Luật Hick)"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": ""
  },
  {
    "id": 452,
    "question": "Thông tin về các kích thích (stimulus) đi qua bộ nhớ con người theo thứ tự như thế nào?",
    "chapter": null,
    "options": [
      "(1) Sensory memory -> (2) Short-term memory -> (3) Long-term memory.",
      "Các trình tự sắp xếp ngược hoặc lộn xộn khác."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: \nThông tin từ môi trường đập vào mắt/tai (Bộ nhớ cảm giác - Sensory).\nNếu ta chú ý đến nó, nó vào Não bộ xử lý tạm thời (Bộ nhớ ngắn hạn - Short-term).\nNếu ta ôn tập/nhắc lại, nó được khắc sâu vĩnh viễn (Bộ nhớ dài hạn - Long-term)."
  },
  {
    "id": 453,
    "question": "Khái niệm nào sau đây KHÔNG nằm trong lý thuyết Gestalt:",
    "chapter": null,
    "options": [
      "Tính gần nhau (proximity)",
      "Tính nhất quán (consistency).",
      "Tính liên tục (continuation).",
      "Tính đóng (closure)",
      "Tính tương tự (similarity)"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: Lý thuyết Gestalt mô tả cách não bộ con người gom nhóm các vật thể thị giác (gần nhau thì thành nhóm, giống nhau thì thành nhóm, đường đứt nét thì tự nối lại thành hình). \"Tính nhất quán\" là nguyên tắc thiết kế UI của Nielsen/Shneiderman, không phải là định luật tâm lý học Gestalt."
  },
  {
    "id": 454,
    "question": "Hai kiểu bộ nhớ có ý thức (Explicit/Declarative) của bộ nhớ dài hạn là:",
    "chapter": null,
    "options": [
      "Rời rạc và Cấu trúc",
      "Có cấu trúc và Thủ tục",
      "Rời rạc (Episodic) và Ngữ nghĩa (Semantic).",
      "Rời rạc và Liên tục.",
      "Thủ tục và Ngữ nghĩa"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Giải thích: Trí nhớ dài hạn chia làm 2 loại:\nTrí nhớ Không ý thức (Implicit): Kỹ năng/Thủ tục (Ví dụ: cách đi xe đạp).\nTrí nhớ Có ý thức (Explicit): Gồm Trí nhớ sự kiện/rời rạc (Episodic - Nhớ về ngày sinh nhật năm ngoái) và Trí nhớ ngữ nghĩa/sự thật (Semantic - Nhớ thủ đô Việt Nam là Hà Nội)."
  },
  {
    "id": 455,
    "question": "Hình ảnh minh họa khái niệm gì trong lý thuyết Gestalt? (Một chuỗi chấm tròn đen và xám xếp thành 2 đường chéo nhau).",
    "chapter": null,
    "options": [
      "Tính gần nhau (Proximity)",
      "Tính đóng (Closure).",
      "Tính tương đồng (Similarity)",
      "Tính đối xứng (Symmetry)",
      "Tính liên tục (Continuity)."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Giải thích: Luật Liên tục chỉ ra rằng mắt người có xu hướng tự động theo dõi và kết nối các vật thể xếp theo một đường thẳng hoặc đường cong mượt mà, coi chúng là một luồng chảy duy nhất."
  },
  {
    "id": 456,
    "question": "Trong điều kiện ánh sáng tối, chúng ta khó cảm nhận được màu sắc do:",
    "chapter": null,
    "options": [
      "Các tế bào hình que nhạy cảm với ánh sáng",
      "Các tế bào hình nón kém nhạy cảm với ánh sáng.",
      "Ba loại tế bào hình que cảm nhận ánh sáng với các bước sóng khác nhau.",
      "Võng mạc mắt",
      "Xử lý về màu sắc trong não bộ"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: Mắt người có 2 loại tế bào: Tế bào hình Nón (Cones) cảm nhận MÀU SẮC nhưng cần ánh sáng mạnh để hoạt động. Tế bào hình Que (Rods) chỉ thấy ĐEN/TRẮNG nhưng hoạt động rất tốt trong bóng tối. Do đó, vào ban đêm, tế bào Nón bị \"vô hiệu hóa\" nên ta thấy mọi thứ chỉ có màu xám xịt."
  },
  {
    "id": 457,
    "question": "Cái nào sau đây không phải là một kiểu tương tác (interaction style)?",
    "chapter": null,
    "options": [
      "Nhận dạng giọng nói.",
      "Menu",
      "Ngôn ngữ tự nhiên.",
      "Hỏi đáp truy vấn",
      "Dòng lệnh"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giải thích: \"Kiểu tương tác\" là triết lý/cách thức thiết kế phần mềm để giao tiếp với người. \"Nhận dạng giọng nói\" (Voice Recognition) chỉ là một công nghệ đầu vào (Input technology). Ngôn ngữ tự nhiên (Natural language) mới là kiểu tương tác khai thác công nghệ đó."
  },
  {
    "id": 458,
    "question": "Thành phần nào sau đây không được sử dụng để điều hướng?",
    "chapter": null,
    "options": [
      "Thanh trượt (slider)",
      "Tập hợp những liên kết giúp người dùng xác định vị trí hiện tại (Breadcrumb).",
      "Menu",
      "Biểu tượng (Icon)",
      "Thanh tiến trình (Progress bar)."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Giải thích: Điều hướng (Navigation) là việc di chuyển từ trang này sang trang khác (Menu, Breadcrumb) hoặc di chuyển trong 1 trang (Thanh cuộn/slider). \"Thanh tiến trình\" chỉ dùng để thông báo Trạng thái hệ thống (đang tải được 50%), nó không di chuyển bạn đi đâu cả."
  },
  {
    "id": 460,
    "question": "Những yếu tố nào là quan trọng trong việc thiết kế giao diện? (chọn 2)",
    "chapter": null,
    "options": [
      "Thực hành thiết kế lặp.",
      "Hiểu người dùng và các tác vụ của họ.",
      "Sử dụng các công cụ tự động trong thiết kế giao diện người dùng",
      "Đưa ra các giả thuyết về cách thức người dùng tương tác với hệ thống",
      "Nắm rõ cách thức hệ thống hoạt động."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Giải thích: Cốt lõi của UI/UX là phải thấu hiểu User (Research) và không ngừng tạo mẫu - test - sửa chữa liên tục (Iterative Design). Việc tự \"đưa ra giả thuyết\" (đoán mò) là điều tối kỵ."
  },
  {
    "id": 461,
    "question": "Kỹ thuật thu thập yêu cầu người dùng nào là phù hợp nhất để hiểu ngữ cảnh các hoạt động của người dùng?",
    "chapter": null,
    "options": [
      "Phỏng vấn",
      "Nhóm tập trung và hội thảo.",
      "Bảng câu hỏi",
      "Quan sát tự nhiên.",
      "Nghiên cứu tài liệu"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Giải thích: Để hiểu \"Ngữ cảnh\" (Context - môi trường xung quanh ồn ào hay yên tĩnh, user làm việc một tay hay hai tay), không gì tốt bằng việc xuống tận hiện trường để Quan sát người dùng làm việc (Field study / Naturalistic observation) thay vì ngồi trong phòng thí nghiệm hỏi."
  },
  {
    "id": 462,
    "question": "Các yêu cầu chức năng chỉ ra những gì hệ thống phải làm trong khi các yêu cầu phi chức năng chỉ ra:",
    "chapter": null,
    "options": [
      "Thiết kế dữ liệu",
      "Độ đậm nhạt",
      "Các bảo đảm.",
      "Ràng buộc hệ thống.",
      "Ràng buộc người dùng"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Giải thích: \nYêu cầu chức năng: Hệ thống \"phải\" làm gì? (Ví dụ: phải cho phép đăng nhập).\nYêu cầu phi chức năng: Hệ thống phải làm điều đó \"như thế nào\" (Các ràng buộc chất lượng/kỹ thuật - Ví dụ: Tốc độ load không quá 2 giây, chịu được 10.000 người truy cập cùng lúc)."
  },
  {
    "id": 463,
    "question": "Mô hình nào mô tả giao diện người dùng cùng với tất cả thông tin hỗ trợ?",
    "chapter": null,
    "options": [
      "Nhận thức hệ thống.",
      "Mô hình thực hiện (Implementation Model).",
      "Mô hình kỹ thuật xã hội OSTA",
      "Mô hình người dùng",
      "Mô hình của người dùng"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Giải thích: Mô hình thực hiện (System/Implementation model) là mô hình miêu tả chính xác cách hệ thống máy tính thực sự hoạt động ở tầng kỹ thuật (code, database, giao diện) theo góc nhìn của Developer."
  },
  {
    "id": 464,
    "question": "Trong kịch bản sau: \"Kỹ sư điều khiển một cánh tay robot thông qua một phần mềm điều khiển mô phỏng trên thiết bị di động\", đâu là tương tác?",
    "chapter": null,
    "options": [
      "Kỹ sư.",
      "Phần mềm mô phỏng",
      "Thiết bị di động",
      "Điều khiển cánh tay robot.",
      "Robot"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Giải thích: Kỹ sư là \"Con người\". Thiết bị/Robot/Phần mềm là \"Hệ thống\". Tương tác (Interaction) chính là hành động/động từ diễn ra giữa người và hệ thống đó (hành động Điều khiển)."
  },
  {
    "id": 466,
    "question": "Trong các mô thức đánh giá thiết kế, mô thức nào có vai trò của người dùng trong đánh giá là thấp nhất?",
    "chapter": null,
    "options": [
      "Kiểm tra tính dùng được",
      "Vai trò của người dùng trong các mô thức đánh giá là như nhau",
      "Nghiên cứu thực địa.",
      "Nhanh",
      "Dự đoán (Predictive Evaluation)."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Giải thích: Đánh giá dự đoán (Ví dụ: Heuristic) do chuyên gia UX tự thực hiện dựa trên kinh nghiệm của họ để soi lỗi UI, hoàn toàn không cần sự tham gia của người dùng thực tế."
  },
  {
    "id": 498,
    "question": "Phát biểu nào sau đây là sai về đánh giá tính dùng được? (Lưu ý: Đề yêu cầu tìm phát biểu SAI. Dựa trên lý thuyết UX, 3 phát biểu đầu tiên là sai kiến thức, 2 phát biểu sau là đúng kiến thức).",
    "chapter": null,
    "options": [
      "Không nên sử dụng hình thức đặt câu hỏi trực tiếp.",
      "Chỉ nên sử dụng một phương pháp phù hợp.",
      "Đảm bảo tách biệt về không gian và thời gian giữa tester và người dùng.",
      "Có thể sử dụng kinh nghiệm trong quá khứ của người dùng.",
      "Dữ liệu kiểm tra có thể được lấy từ nhật ký (log)."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Giải thích: Trong đánh giá UX, việc \"đặt câu hỏi trực tiếp\" (phỏng vấn, think-aloud) là vô cùng phổ biến. Tester và User thường ngồi ngay cạnh nhau (không tách biệt không gian) trong phòng lab để quan sát. Và nguyên tắc vàng là phải \"kết hợp nhiều phương pháp\" (Triangulation) chứ không bao giờ chỉ dùng một phương pháp duy nhất."
  },
  {
    "id": 507,
    "question": "Khẳng định nào là đúng đối với kỹ thuật kiểm thử người dùng trong phòng thí nghiệm (lab-based testing)? (chọn 3)",
    "chapter": null,
    "options": [
      "Xác định rõ ràng bối cảnh thực hiện.",
      "Dùng để kiểm tra giả thiết cụ thể.",
      "Có thể thực hiện tự nhiên mà không bị gián đoạn.",
      "Được thực hiện nhanh với các dữ liệu giống nhau.",
      "Với một nhiệm vụ cụ thể cho trước khả năng xảy ra lỗi là ít."
    ],
    "correctAnswers": [
      1,
      3,
      4
    ],
    "explanation": "Giải thích: Kiểm thử trong phòng thí nghiệm (Lab testing) là môi trường được kiểm soát chặt chẽ. Ưu điểm là test được các giả thuyết hẹp, ép nhiều user làm cùng một kịch bản với dữ liệu chuẩn hóa, từ đó hạn chế các lỗi nhiễu từ môi trường. Nhược điểm của nó là \"thiếu tự nhiên\" và \"không phản ánh được bối cảnh thực tế\" (đây lại là ưu điểm của Field Studies - Nghiên cứu thực địa)."
  },
  {
    "id": 512,
    "question": "Điều nào sau đây KHÔNG phải là ví dụ về tăng tốc (accelerator)?",
    "chapter": null,
    "options": [
      "Thao tác vuốt để xóa trong iOS",
      "Tổ hợp phím Ctrl-S để lưu file.",
      "Phím F1 trên bàn phím",
      "Phím tắt Siri của hệ điều hành iOS",
      "Các phần tử trong menu \"Insert\" của ứng dụng soạn thảo văn bản Microsoft Word."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Giải thích: \"Tăng tốc\" (Accelerators) là những phím tắt, cử chỉ ẩn (vuốt), hoặc tổ hợp phím được thiết kế để giúp người dùng chuyên nghiệp bỏ qua các bước menu rườm rà, tiết kiệm thời gian. Một danh mục hiển thị lù lù trên thanh công cụ như tab \"Insert\" là đường dẫn điều hướng cơ bản dành cho người mới, không phải là tính năng tăng tốc."
  },
  {
    "id": 513,
    "question": "Đâu là các yếu tố ảnh hưởng tới khả năng cảm nhận bằng thị giác của con người? (chọn 2)",
    "chapter": null,
    "options": [
      "Kích thước và chiều cao.",
      "Khoảng cách.",
      "Thay đổi về ánh sáng",
      "Chuyển động",
      "Hành động."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Giải thích: Khả năng nhìn rõ to/nhỏ của vật thể phụ thuộc vào Góc nhìn (Visual Angle) trên võng mạc. Góc này được quyết định bởi 2 biến số vật lý: Kích thước thật của vật thể đó, và Khoảng cách từ mắt đến vật thể."
  },
  {
    "id": 514,
    "question": "Luật Fitts được dùng để: (chọn 3)",
    "chapter": null,
    "options": [
      "Mô hình hóa thời gian chuyển động đủ để vẽ một đối tượng.",
      "Đánh giá hệ thống mà thời gian cần thiết để định vị một đối tượng là không quan trọng.",
      "Mô hình hóa thời gian chuyển động đủ để lựa chọn một đối tượng.",
      "Mô tả hiệu năng của các thiết bị vào.",
      "Dự báo rằng thời gian cần thiết để nhanh chóng di chuyển đến một vị trí đích phụ thuộc vào khoảng cách tới đích và kích thước đích."
    ],
    "correctAnswers": [
      2,
      3,
      4
    ],
    "explanation": "Giải thích: Định luật Fitts là công thức toán học tính toán thời gian trỏ chuột (chọn/click). Nó sinh ra dành cho các tác vụ mang tính \"thời gian là quan trọng\", thường dùng để so sánh xem Chuột, Trackpad hay Màn hình cảm ứng (các thiết bị đầu vào) cái nào cho hiệu năng click nhanh hơn. Nó không dùng cho các thao tác \"Vẽ\" (Drawing) liên tục."
  },
  {
    "id": 515,
    "question": "Xác định các sơ suất (slips/lapses) của con người trong các tình huống sau: (chọn 2)",
    "chapter": null,
    "options": [
      "trong ngôn ngữ C sẽ in ra màn hình được xóa a.",
      "Bạn cho rằng câu lệnh printf(\"%d\", a)",
      "Khi bạn soạn một văn bản, bạn gõ sai một từ tiếng Anh dù bạn biết từ đó đánh vần như thế nào.",
      "Đặt máy tính lên trên bàn phủ khăn nỉ với hi vọng máy tính thoát nhiệt tốt hơn.",
      "Bạn cài đặt phần mềm MS Excel trên máy tính để lưu trữ các dữ liệu cần khai thác bằng truy vấn SQL.",
      "Bạn cài đặt phần mềm MySQL, để lưu trữ các dữ liệu cần khai thác bằng truy vấn SQL, nhưng bạn quên mất mật khẩu quản trị để cài đặt."
    ],
    "correctAnswers": [
      2,
      5
    ],
    "explanation": "Giải thích: \nSơ suất (Slips/Lapses): Xảy ra khi bạn biết cách làm đúng nhưng lúc thực hiện lại bị trượt tay (gõ sai phím) hoặc quên ngang (lỗi bộ nhớ ngắn hạn - quên pass). Đây là lỗi ở tầng thực thi.\nSai lầm (Mistakes): Xảy ra khi kiến thức/suy luận của bạn bị sai ngay từ đầu (Ví dụ: nghĩ Excel chạy được SQL, không thuộc cú pháp C, hoặc không hiểu nguyên lý tản nhiệt vật lý). Các đáp án sai ở trên đều là Mistakes, không phải Slips."
  },
  {
    "id": 516,
    "question": "Các phát biểu nào sau đây là đúng? (chọn 2)",
    "chapter": null,
    "options": [
      "Material design là phương pháp thiết kế dành riêng cho các ứng dụng desktop.",
      "Trong khung tương tác Abowd và Beale, phép dịch từ đầu ra đến người dùng thay còn gọi là quan sát tương ứng với bước \"Đánh giá trong thời hệ thống theo mục đích và chú ý\" của chu trình Norman.",
      "Xét chức năng \"gọi điện thoại\" trên điện thoại di động. Khi có nhiều lớp người dùng khác nhau về năng lực, hành vi, trình độ, lứa tuổi... cần cung cấp nhiều kiểu tương tác khác nhau để thực hiện chức năng này.",
      "Sự có mặt của người lạ trong môi trường làm việc thường không làm ảnh hưởng đến hiệu quả công việc của người sử dụng máy tính.",
      "Chất lượng giao tiếp phụ thuộc chất lượng tương tác."
    ],
    "correctAnswers": [
      2,
      4
    ],
    "explanation": "Giải thích: \nTheo nguyên tắc \"Linh hoạt\" (Flexibility), một chức năng tốt phải có nhiều cách thao tác để phục vụ người mới (thích dùng menu) và chuyên gia (thích phím tắt).\nTại sao các câu kia sai: Sự có mặt của người lạ (yếu tố xã hội) ảnh hưởng cực mạnh đến tâm lý và hiệu suất UX. Material Design ban đầu được Google tạo ra tập trung cho Mobile (Android), không phải \"dành riêng\" cho Desktop.\ncontext Đó, đây là toàn bộ nội dung trong cái file đề thi cuối kỳ, giờ thì bro làm, sửa web, cho đống câu hỏi nó đúng chuẩn với ngần này câu hỏi, đáp án đúng, khi mà chọn sai ở trên web thì phải hiển thị là sai nếu chọn đúng hiển thị là dúng, nói chung là bro cứ làm từ từ thong thả nhé :>, tôi tin bạn :>\ncontext"
  }
];
