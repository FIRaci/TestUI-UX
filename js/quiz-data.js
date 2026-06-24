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
      "Mo hinh du doan.",
      "HTA (Hierarchy Task Analysis).",
      "OSTA.",
      "Mo hinh da cach nhin.",
      "SSM."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "HTA la mo hinh dung de phan ra nhiem vu (Task Analysis) thanh cac buoc thao tac cu the, phuc vu viec phan tich hanh vi nguoi dung lam gi tren may tinh. Trong khi do, OSTA (Open System Task Analysis), SSM (Soft Systems Methodology), va cac mo hinh da cach nhin (Multiview) la cac phuong phap luan dung de khao sat, dinh hinh va mo hinh hoa yeu cau cua nguoi dung tu giai doan so khai cua du an."
  },
  {
    "id": 114,
    "question": "Cac mo hinh nguoi dung nao sau day thuoc nhom cac mo hinh ky thuat xa hoi?",
    "chapter": 5,
    "options": [
      "SSM.",
      "Da cach nhin.",
      "Mo hinh nhan thuc.",
      "USTM/CUSTOM.",
      "OSTA."
    ],
    "correctAnswers": [
      3,
      4
    ],
    "explanation": "Cac mo hinh ky thuat xa hoi (Socio-technical models) nhu USTM (User Skills and Task Match) va OSTA tap trung phan tich su dung hoa giua he thong ky thuat (thiet bi, phan mem) voi he thong xa hoi cua to chuc (con nguoi, van hoa, cau truc nhom lam viec)."
  },
  {
    "id": 115,
    "question": "Khi thiet ke cay ATM thi vi tri dat ban phim can thoa man dieu kien cong thai hoc nao sau day?",
    "chapter": 5,
    "options": [
      "Thiet ke sao cho nguoi ngoi xe lan co the voi toi.",
      "Thiet ke theo nguong trung binh chieu cao nguoi truong thanh.",
      "Thiet ke theo nguong chieu cao cua tre vi thanh nien.",
      "Thiet ke tinh toan den do tuoi nguoi dung, va dieu chinh sao cho phu hop voi nang luc hanh vi cua cac doi tuong nguoi dung khac nhau.",
      "Thiet ke theo chieu cao toi thieu cua nguoi truong thanh."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Trong cong thai hoc vat ly, nguyen tac thiet ke bao dung (Inclusive Design) yeu cau cac thiet bi cong cong nhu cay ATM phai phuc vu duoc ca nhung nhom nguoi yeu the hoac khuyet tat. Do do, ban phim phai duoc dat o cao do va khoang cach ma mot nguoi ngoi xe lan co the de dang tiep can va thao tac mot cach doc lap."
  },
  {
    "id": 116,
    "question": "Phat bieu nao sau day la sai?",
    "chapter": 2,
    "options": [
      "Bo nho cam nhan cua con nguoi gioi han boi 7+/-2 muc tin.",
      "Ky thuat \"Nhan biet thay vi nho lai\" la 1 phuong phap de giam tai bo nho  han cua con nguoi.",
      "Thiet ke man hinh su dung pull-down menu va cac icon de giam tai bo nho ngan han cua con nguoi.",
      "Nen thiet ke cau hoi dang dong (chon dap an co san) thay vi cau hoi dang yeu cau nguoi dung phai suy nghi, hoi tuong de co cau tra loi.",
      "Cung cap phim tat (shortcut) cung la cach de giam tai bo nho lam viec."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Theo quy luat tam ly hoc nhan thuc cua George Miller, gioi han luu tru 7 +/- 2 muc tin (chunks) la dac tinh cua Bo nho ngan han / Bo nho lam viec (Short-term / Working Memory), hoan toan khong phai cua Bo nho cam nhan (Sensory Memory - noi luu tru thong tin giac quan tho cuc nhanh chi trong vai tram mili-giay)."
  },
  {
    "id": 117,
    "question": "Nhung dap an nao SAI khi noi ve mo hinh SSM?",
    "chapter": 5,
    "options": [
      "Tap trung vao viec hieu hien trang cua to chuc.",
      "Tap trung vao viec xac dinh cac yeu cau cua con nguoi va he thong.",
      "Cho phep nhan biet su khac biet giua the gioi thuc va he thong.",
      "Quan diem cua cac ben lien quan ve cung mot he thong la khong giong nhau.",
      "Gom 2 giai doan. Giai doan 1 nhan biet, phan tich van de roi mo ta chi tiet bai toan. Giai doan 2 khoi tao dinh nghia goc cho he thong."
    ],
    "correctAnswers": [
      1,
      4
    ],
    "explanation": "SSM (Soft Systems Methodology) la phuong phap luan mem he thong, dung de tiep can cac van de phi cau truc, hon loan trong to chuc noi quan diem con nguoi khac nhau. No khong tap trung cung nhac vao viec \"dac ta ky thuat yeu cau he thong\" ngay tu dau va cung khong duoc chia tho san thanh 2 giai doan nhu phat bieu tren (SSM thuc te co chu trinh 7 buoc lap)."
  },
  {
    "id": 118,
    "question": "Cac truong hop nao the hien su rang buoc van hoa trong nguyen tac thiet ke giao dien cua Norman?",
    "chapter": 7,
    "options": [
      "Cong HDMI duoc thiet ke voi mot dau to mot dau nho khien nguoi dung khong the cam nguoc.",
      "Ky hieu X duoc su dung la ky hieu danh dau cau tra loi dung va sai tuy thuoc vao tung quoc gia.",
      "Ky hieu tam giac vien do la ky hieu canh bao duoc su dung tren toan the gioi.",
      "Dia CD co dan nhan de nguoi dung khong dua nguoc chieu dia vao dau doc.",
      "Vien do, xanh xung quanh chan cam cua loa tuong ung voi mau cua day cam vao tung vi tri."
    ],
    "correctAnswers": [
      1,
      2
    ],
    "explanation": "Rang buoc van hoa (Cultural Constraints) dua tren cac quy uoc, ky hieu da duoc xa hoi hoa va thua nhan rong rai boi mot cong dong hoac toan the gioi qua qua trinh giao duc va lich su (nhu mau sac canh bao cua bien bao tam giac, y nghia bieu tuong X). Cac phuong an sai thuoc ve rang buoc vat ly hoac logic."
  },
  {
    "id": 119,
    "question": "Truong hop nao the hien su rang buoc vat ly trong nguyen tac thiet ke giao dien cua Norman?",
    "chapter": 7,
    "options": [
      "Cong HDMI duoc thiet ke voi mot dau to mot dau nho khien nguoi dung khong the cam nguoc.",
      "Vien do, xanh xung quanh chan cam cua loa tuong ung voi mau cua day cam vao tung vi tri.",
      "Dia CD co dan nhan de nguoi dung khong dua nguoc chieu dia vao dau doc.",
      "Ky hieu tam giac vien do la ky hieu canh bao duoc su dung tren toan the gioi.",
      "Ky hieu X duoc su dung la ky hieu danh dau cau tra loi dung va sai tuy thuoc vao tung quoc gia."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Rang buoc vat ly (Physical Constraints) su dung truc tiep cac gioi han co hoc, hinh hoc cua the gioi vat chat de ngan chan hanh dong sai (Poka-yoke). Viec thiet ke cong HDMI co dang hinh thang (mot dau to, mot dau nho) lam cho nguoi dung ve mat vat ly khong the cam nguoc dau day duoc, du ho co co tinh hay vo y."
  },
  {
    "id": 120,
    "question": "Cac truong hop nao the hien su rang buoc logic trong nguyen tac thiet ke giao dien cua Norman?",
    "chapter": 7,
    "options": [
      "Cong HDMI duoc thiet ke voi mot dau to mot dau nho khien nguoi dung khong the cam nguoc.",
      "Ky hieu X duoc su dung la ky hieu danh dau cau tra loi dung va sai tuy thuoc vao tung quoc gia.",
      "Dia CD co dan nhan de nguoi dung khong dua nguoc chieu dia vao dau doc.",
      "Ky hieu tam giac vien do la ky hieu canh bao duoc su dung tren toan the gioi.",
      "Vien do, xanh xung quanh chan cam cua loa tuong ung voi mau cua day cam vao tung vi tri."
    ],
    "correctAnswers": [
      2,
      4
    ],
    "explanation": "Rang buoc logic (Logical Constraints) su dung moi quan he hop ly, tuong dong ve mat lap luan hoac thi giac de goi y hanh dong dung. Viec phoi ghep trung khop ma mau (xanh cam vao cong xanh, do cam vao cong do) hay viec nhin nhan dan o mat tren dia CD giup nguoi dung suy luan logic ra cach van hanh chinh xac cua thiet bi."
  },
  {
    "id": 121,
    "question": "Dau la mot mo hinh phan ra nhiem vu?",
    "chapter": 6,
    "options": [
      "OSTA.",
      "USTM.",
      "Mo hinh hinh sao.",
      "HTA (Hierarchical Task Analysis).",
      "Mo hinh thac nuoc."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "HTA la cong cu kinh dien nhat dung de phan ra mot nhiem vu lon (Goal) thanh mot cay phan cap cac nhiem vu con (Sub-tasks) va cac hanh dong (Actions), kem theo mot so do ke hoach thuc hien (Plan) ro rang."
  },
  {
    "id": 122,
    "question": "GOMS la cum tu viet tat cua tu nao?",
    "chapter": 6,
    "options": [
      "Goals Operators Methods Selections.",
      "Goal Operation Mechanism Selection.",
      "Goals Option Management System.",
      "Goal Orientation Methods Selections.",
      "Go Operator Mode Select."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "GOMS la mo hinh nhan thuc phan tich thao tac cua nguoi dung, viet tat cua: Goals (Muc tieu), Operators (Cac thao tac co ban), Methods (Cac phuong thuc/chuoi thao tac de dat muc tieu), va Selection rules (Cac quy tac lua chon phuong thuc toi uu)."
  },
  {
    "id": 123,
    "question": "TAG la cum tu viet tat cua tu nao?",
    "chapter": 6,
    "options": [
      "Teacher Advisor Grammar.",
      "Technical Advisory Group.",
      "Technique Architecture Graph.",
      "Task-Action Grammar.",
      "Test-Action Grade."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "TAG (Ngu phap Tac vu - Hanh dong) la mo hinh mo ta ngon ngu doi thoai cua he thong duoi dang cac quy tac ngu phap, giup do luong muc do nhat quan va do kho trong mo hinh nhan thuc cua nguoi dung khi chuyen dich tu y dinh (Task) sang hanh dong go phim/lenh cu the (Action)."
  },
  {
    "id": 124,
    "question": "Luat de mo ta van pham doi thoai BNF co dang nao?",
    "chapter": 6,
    "options": [
      "ten ::= bieu thuc",
      "ten:, ten, bieu thuc, ::=",
      "ten :: bieu thuc",
      "ten = bieu thuc",
      "ten => bieu thuc"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Trong tin hoc va HCI, BNF (Backus-Naur Form) la cu phap mo ta van pham doi thoai. Quy tac cua no co cau truc chuan la ve trai chua thuc the doi thoai lien ket voi ve phai qua ky hieu dinh nghia ::=, co dang tong quat: ten_doi_thoai ::= bieu_thuc_hanh_dong."
  },
  {
    "id": 125,
    "question": "Dau la cac ky thuat su dung de thu thap yeu cau nguoi dung?",
    "chapter": 5,
    "options": [
      "Phong van.",
      "GOMS.",
      "USTA.",
      "Quan sat tu nhien.",
      "Phan tich tai lieu."
    ],
    "correctAnswers": [
      0,
      3,
      4
    ],
    "explanation": "Phong van (Interviews), Quan sat thuc te (Observations), va Nghien cuu tai lieu quy trinh cu (Studying documentation) la 3 ky thuat thu thap thong tin truc tiep tu nguoi dung va moi truong lam viec cua ho. GOMS la mo hinh phan tich hieu nang thao tac nhan thuc, khong dung de thu thap yeu cau ban dau."
  },
  {
    "id": 126,
    "question": "Cac mo thuc danh gia nao co ket qua danh gia mang tinh dinh luong?",
    "chapter": 9,
    "options": [
      "Quick and Dirty.",
      "Usability Testing.",
      "Field Studies.",
      "Predictive.",
      "Cognitive walkthrough."
    ],
    "correctAnswers": [
      1,
      2
    ],
    "explanation": "Usability Testing thuc hien trong phong thi nghiem thu thap du lieu dinh luong chinh xac (nhu thoi gian hoan thanh task, ty le loi chuot, nhip tim). Field Studies (Nghien cuu thuc dia) mac du thu thap nhieu du lieu dinh tinh nhung cung mang lai cac so lieu thong ke dinh luong ve tan suat, hieu suat hoat dong thuc te cua nguoi dung ngoai moi truong tu nhien."
  },
  {
    "id": 127,
    "question": "Trong cac vi du sau, vi du nao khong the hien rang buoc ve van hoa theo cac nguyen tac thiet ke cua Norman?",
    "chapter": 7,
    "options": [
      "Trong mot trinh duyet, \"X\" ky hieu nut dung de thoat khoi trinh duyet do.",
      "Hinh chiec loa la bieu tuong gan tren nut dieu chinh am luong.",
      "Bieu tuong ong nghe mau xanh de nhan cuoc goi, ong nghe mau do de ket thuc cuoc goi.",
      "Khong the dieu chinh giam am luong khi vach chi muc do am luong bang 0."
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Viec \"khong the giam am luong khi da o muc 0\" la mot rang buoc logic/vat ly hien nhien cua he thong (he thong khong the co am luong am). Cac phuong an con lai deu su dung cac quy uoc van hoa pho bien da duoc dinh hinh trong tam tri con nguoi (nhu ky hieu X, hinh cai loa, hay ma mau xanh/do cua cuoc goi)."
  },
  {
    "id": 128,
    "question": "Phat bieu nao sau day la DUNG khi noi ve mo hinh da cach nhin (multiview model)?",
    "chapter": 4,
    "options": [
      "La mot cach tiep can to hop nhieu cach tiep can trong mot giai doan, co phuong phap kiem tra.",
      "Chi tap trung vao khia canh ky thuat phan cung.",
      "Khong co phuong phap kiem tra cu the.",
      "Chi ap dung duoc trong giai doan cuoi cung cua phat trien.",
      "La mo hinh don gian chi gom mot cach tiep can duy nhat."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Mo hinh da cach nhin (Multiview) la mot phuong phap luan linh hoat, tich hop ca khia canh ky thuat he thong lan khia canh xa hoi, con nguoi trong phan tich thiet ke, cho phep nguoi thiet ke ap dung dong thoi nhieu goc nhin kiem chung khac nhau trong cung mot giai doan phat trien."
  },
  {
    "id": 129,
    "question": "Dau la muc tieu cua phuong phap nghien cuu tai truong (field studies)?",
    "chapter": 9,
    "options": [
      "Kiem tra toc do xu ly cua he thong trong phong lab.",
      "Danh gia xem cong nghe anh huong nhu the nao den cac cong viec hang ngay cua nguoi dung.",
      "Thu thap du lieu tu cau hoi truc tuyen.",
      "Do luong thoi gian phan hoi cua may chu.",
      "Kiem thu don vi phan mem."
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Muc tieu toi thuong cua Field Studies la dua cac nha thiet ke roi khoi phong lab de quan sat truc tiep hanh vi cua nguoi dung trong boi canh tu nhien hang ngay cua ho, tu do hieu ro cong nghe moi se lam xao tron hoac giup ich the nao cho cuoc song cua ho."
  },
  {
    "id": 130,
    "question": "Nhung mo ta nao khong the hien rang buoc logic theo nguyen tac cua Norman?",
    "chapter": 7,
    "options": [
      "Bieu tuong nhan cuoc goi tren may dien thoai co hinh ong nghe mau xanh va co mui ten huong sang phai; bieu tuong tu choi cuoc goi co hinh ong nghe mau do kem theo dau gach va mui ten huong sang trai.",
      "Thanh cuon cua chuot may tinh chi co the miet len tren hoac xuong duoi de dieu khien.",
      "Vien do, xanh xung quanh chan cam cua loa tuong ung voi mau cua day cam vao tung vi tri.",
      "Dia CD co dan nhan de nguoi dung khong dua nguoc chieu dia vao dau doc.",
      "Cong HDMI duoc thiet ke voi mot dau to mot dau nho khien nguoi dung khong the cam nguoc."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Bieu tuong cuoc goi xanh/do the hien rang buoc van hoa va anh xa (mapping). Thanh cuon chuot miet len/xuong the hien the cho (affordance) vat ly va rang buoc vat ly cua thiet bi. Cac phuong an khac nhu ma mau chan cam hay huong mui ten ATM moi la rang buoc logic."
  },
  {
    "id": 131,
    "question": "Mo ta nao the hien tinh the cho (affordance) theo nguyen tac cua Norman?",
    "chapter": 7,
    "options": [
      "Bieu tuong nhan cuoc goi tren may dien thoai co hinh ong nghe mau xanh va co mui ten huong sang phai.",
      "Thanh cuon cua chuot may tinh chi co the miet len tren hoac xuong duoi de dieu khien.",
      "Cong HDMI duoc thiet ke voi mot dau to mot dau nho khien nguoi dung khong the cam nguoc.",
      "Vien do, xanh xung quanh chan cam cua loa tuong ung voi mau cua day cam vao tung vi tri.",
      "Dia CD co dan nhan de nguoi dung khong dua nguoc chieu dia vao dau doc."
    ],
    "correctAnswers": [
      1
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
      "Tinh truc quan (Visibility).",
      "Tinh phan hoi (Feedback).",
      "Tinh the cho (Affordance).",
      "Tinh anh xa (Mapping).",
      "Rang buoc (Constraints)."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Nguyen tac \"dam bao tinh dong\" (Closure) cua Shneiderman yeu cau mot chuoi hanh dong phai co diem dau, diem giua va thong diep hoan thanh ro rang o diem cuoi. Dieu nay tuong ung voi viec he thong phai hien thi truc quan (Visibility) cac buoc va dua ra phan hoi (Feedback) tuc thi de nguoi dung biet ho da hoan thanh nhiem vu thanh cong."
  },
  {
    "id": 134,
    "question": "Voi cung so luong nguoi dung, phuong phap thiet ke lay nguoi dung lam trung tam (UCD) nao sau day co chi phi thuc hien cao nhat?",
    "chapter": 4,
    "options": [
      "Interviews (Phong van).",
      "Participatory design.",
      "Workshop.",
      "Questionnaires.",
      "Focus groups."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Phong van doi hoi tien hanh tuong tac truc tiep 1-1 giua chuyen gia nghien cuu va tung nguoi dung don le. Chi phi thoi gian cua chuyen gia, chi phi thue phong va phan tich bang ghi am cho tung ca nhan nhan len theo so luong nguoi dung lam cho Phong van dat do hon nhieu so voi viec phat bang hoi (Questionnaires) hang loat hay to chuc hoi thao nhom (Workshops / Focus Groups)."
  },
  {
    "id": 135,
    "question": "Dau la cac cach tiep can cua ky thuat tao mau thu mo phong bang may tinh (computer-based simulation)?",
    "chapter": 8,
    "options": [
      "Tao mau thu theo chieu doc (Vertical prototyping).",
      "Tao mau thu theo chieu ngang (Horizontal prototyping).",
      "Tao mau thu theo kich ban (Scenario-based prototyping).",
      "Tao mau thu giay (Paper prototyping).",
      "Tao mau thu tuong tac (Interactive prototyping)."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Ba cach tiep can kinh dien nay mo ta pham vi cua prototype: Chieu doc (hoat dong chi tiet cho mot vai tinh nang chinh), Chieu ngang (mo phong dien rong tat ca man hinh nhung khong co chuc nang sau), va Kich ban (chi mo phong dung mot luong di cu the cua nguoi dung)."
  },
  {
    "id": 136,
    "question": "Phat bieu nao sau day la SAI khi noi ve mo hinh nhan thuc (mental model)?",
    "chapter": 4,
    "options": [
      "Mo hinh nhan thuc dai dien cho nhung gi duoc cho la sai, khong dai dien cho nhung gi duoc cho la dung.",
      "Mo hinh nhan thuc giup nguoi dung du doan ket qua hanh dong truoc khi thuc hien.",
      "Mo hinh nhan thuc duoc hinh thanh qua trai nghiem su dung.",
      "Mo hinh nhan thuc co the khac biet giua nguoi dung va nha thiet ke.",
      "Mo hinh nhan thuc la su hieu biet cua nguoi dung ve cach he thong hoat dong."
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
      "Mau thu do tin cay thap co tinh tuong tac day du.",
      "Mau thu do tin cay thap mo phong hau het cac chuc nang cua san pham cuoi cung.",
      "Mau thu do tin cay thap duoc tao ra nhanh chong.",
      "Mau thu do tin cay thap thuong la phac thao giay.",
      "Mau thu do tin cay thap giup phat hien cac van de ve bo cuc som."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Mau thu do tin cay thap (nhu phac thao giay - paper sketches) co tinh bo qua cac chuc nang xu ly sau va hoan toan khong co tinh tuong tac ky thuat so day du de tiet kiem thoi gian, tap trung hoan toan vao viec kiem tra nhanh bo cuc (layout) va cac khai niem thiet ke so khoi."
  },
  {
    "id": 139,
    "question": "De ho tro nguoi dung tranh loi hoac khac phuc loi, khong can tra loi cau hoi nao sau day?",
    "chapter": 7,
    "options": [
      "Nguoi dung muc tieu la nhung ai?",
      "Co the cung cap phan hoi gi de nguoi dung biet ho dang lam gi?",
      "Lam the nao de nguoi dung co the quan sat trang thai cua website?",
      "Co che xac nhan hanh dong duoc thiet ke nhu the nao?",
      "Canh bao loi xuat hien o dau?"
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
      "Thiet ke he thong thong minh.",
      "Thu nghiem cho cac he thong khong ton tai.",
      "Cac thu nghiem va phat trien he thong nhan dang giong noi.",
      "Kiem thu hieu nang xu ly cua may chu.",
      "Thiet ke giao dien do hoa tinh."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Wizard of Oz la ky thuat mo phong he thong chua he duoc lap trinh (khong ton tai), dac biet hieu qua trong cac he thong thong minh/nhan dang giong noi phuc tap. Nguoi dung nghi rang ho dang noi chuyen voi mot AI tu dong, nhung thuc te dang sau hau truong co mot chuyen gia con nguoi (phu thuy) dang go lenh phan hoi thu cong."
  },
  {
    "id": 141,
    "question": "De thiet ke website theo thi hieu nguoi dung, can tra loi cau hoi nao sau day?",
    "chapter": 10,
    "options": [
      "Nguoi dung muc tieu la nhung ai?",
      "Co the cung cap phan hoi gi de nguoi dung biet ho dang lam gi?",
      "Lam the nao de nguoi dung co the quan sat trang thai cua website?",
      "Co che xac nhan hanh dong duoc thiet ke nhu the nao?",
      "Canh bao loi xuat hien o dau?"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "De thiet ke tham my, mau sac, phong cach noi dung phu hop voi thi hieu, nha thiet ke bat buoc phai dinh danh chinh xac doi tuong muc tieu (Persona) la ai (vi du: the he Gen Z tre trung nang dong hay nhung nguoi lon tuoi can su toi gian, ro rang)."
  },
  {
    "id": 142,
    "question": "2 thiet ke nao sau day tuan thu nguyen tac \"Cho phep huy bo cac hanh dong da thuc hien\"?",
    "chapter": 7,
    "options": [
      "Sau khi mo 1 trang web moi, trinh duyet cho quay ve trang cu.",
      "Trong khi dang copy mot file ta co the huy bo qua trinh copy nay.",
      "Bam nut X de dong cua so trinh duyet.",
      "Su dung phim F5 de tai lai trang.",
      "Nhan Ctrl+S de luu file van ban."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Nut quay lai (Back) cua trinh duyet va nut Huy (Cancel) giua chung khi sao chep file la cac thiet ke kinh dien tuan thu nguyen tac thoat hiem khan cap cho nguoi dung, cho phep ho quay nguoc trang thai he thong ve thoi diem truoc khi hanh dong sai lam dien ra."
  },
  {
    "id": 143,
    "question": "Dieu nao sau day la sai voi phuong phap nghien cuu tai lieu (studying documentation)?",
    "chapter": 5,
    "options": [
      "Khong can lam ro pham vi thu thap.",
      "Phan tich tai lieu quy trinh hien co.",
      "Xac dinh cac ben lien quan.",
      "Thu thap tai lieu to chuc.",
      "Ghi nhan cac quy tac nghiep vu."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Khi nghien cuu tai lieu quy trinh hoat dong cu, neu khong xac dinh va khoanh vung ro pham vi thu thap (Scope), nha nghien cuu se bi ngap lut trong hang ngan trang tai lieu to chuc loi thoi, ton thoi gian ma khong chat loc duoc yeu cau cot loi."
  },
  {
    "id": 144,
    "question": "Chi ra 2 ly do can thiet ke lay nguoi dung lam trung tam (UCD):",
    "chapter": 4,
    "options": [
      "Cai thien tinh dung duoc va tinh huu dung cua san pham.",
      "Tim kiem cau tra loi cho cau hoi ve nguoi dung, cac nhiem vu va cac muc tieu tuong ung, tu do dinh huong viec thiet ke va phat trien.",
      "Giam chi phi phat trien phan cung.",
      "Tang toc do bien dich code.",
      "Giam thoi gian chay test tu dong."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Triet ly UCD sinh ra de chong lai loi thiet ke huong he thong (System-centered). No bat buoc moi quyet dinh lap trinh phai xoay quanh nang luc hanh vi thuc te cua nguoi dung, dam bao san pham lam ra khong chi chay duoc ma con phai de su dung (Usable) va co ich (Useful)."
  },
  {
    "id": 145,
    "question": "Tinh dung duoc cua website KHONG phu thuoc vao yeu to nao?",
    "chapter": 10,
    "options": [
      "Nguoi thiet ke.",
      "Quy trinh thiet ke.",
      "Cong nghe nen tang.",
      "Phuong phap danh gia thuc nghiem.",
      "Nguoi dung cuoi."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Tinh dung duoc (Usability) la mot thuoc tinh khach quan cua san pham duoc do luong truc tiep thong qua hieu nang cua nguoi dung cuoi. No phu thuoc vao quy trinh thiet ke, cong nghe nen tang va phuong phap danh gia thuc nghiem, chu khong phu thuoc vao \"cam tinh ca nhan\" hay danh tinh cua nguoi ve ra giao dien do."
  },
  {
    "id": 147,
    "question": "Dau la cac nguyen tac cua thiet ke Web?",
    "chapter": 10,
    "options": [
      "To chuc.",
      "Tiet kiem.",
      "Giao tiep.",
      "Trang tri.",
      "Phuc tap."
    ],
    "correctAnswers": [
      0,
      1,
      2
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
      "Flat design.",
      "Material design.",
      "Thiet ke man hinh (Screen design)."
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Metro design (Microsoft), Skeuomorph design (Thiet ke gia lap thuc te cua Apple thoi ky dau), Flat design (Thiet ke phang), va Material design (Google) la cac ngon ngu / truong phai thiet ke he thong lon. \"Thiet ke man hinh\" chi la mot cong viec ky thuat cu the, khong phai la mot ngon ngu thiet ke he thong."
  },
  {
    "id": 150,
    "question": "Phuong an nao the hien dung moi lien he giua su phat trien phan cung, giao dien va su da dang cua nguoi dung:",
    "chapter": 11,
    "options": [
      "Nguoi dung - Giao dien - Phan cung.",
      "Phan cung - Giao dien - Nguoi dung.",
      "Giao dien - Phan cung - Nguoi dung.",
      "Nguoi dung - Phan cung - Giao dien.",
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
      "Thiet ke lai boi canh su dung.",
      "Thiet ke cac tuong tac cham ngon tay.",
      "Toi gian luong di.",
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
      "Mat ket noi.",
      "Thieu nang luong.",
      "Tan cong mang.",
      "Loi phan cung.",
      "Loi he dieu hanh."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Mo hinh tinh toan khap noi (Ubiquitous/Pervasive computing) phan bo hang ngan cam bien va thiet bi di dong trong moi truong tu nhien. Su di chuyen lien tuc cua con nguoi ngoai thuc dia lam cho hien tuong mat ket noi mang (Disconnection) xay ra thuong xuyen va ngau nhien. Day la thuoc tinh co huu cua moi truong vat ly, he thong phai tu thich ung bang cac co che luu tru ngoai tuyen chu khong the coi no la mot loi lap trinh thong thuong de quang ma loi (Exception)."
  },
  {
    "id": 154,
    "question": "Phuong phap danh gia kem cap (coaching method) dung de lam gi?",
    "chapter": 9,
    "options": [
      "Danh gia tuong tac giua nguoi dung - he thong va nguoi dung - nguoi kem cap.",
      "Do luong thoi gian xu ly cua may chu.",
      "Kiem thu hieu nang mang.",
      "Phan tich ma nguon.",
      "Thiet ke giao dien."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Trong Coaching method, nguoi dung thuc hien nhiem vu duoi su ho tro truc tiep cua mot nguoi kem cap (Coach). Phuong phap nay giup nha thiet ke quan sat khong chi su tuong tac voi phan mem ma con ca cuoc doi thoai, cac cau hoi phat sinh giua nguoi dung va nguoi huong dan de phat hien ra cac diem gay kho hieu sau sac cua giao dien."
  },
  {
    "id": 155,
    "question": "Phuong phap phat bieu suy nghi (think aloud protocol) dung de lam gi?",
    "chapter": 9,
    "options": [
      "Hieu man hinh nhan thuc cua nguoi dung ve he thong va cac nhiem vu, ho gap kho khan o dau khi tim hieu va su dung he thong.",
      "Do luong hieu suat xu ly.",
      "Kiem thu tinh nang phan mem.",
      "Toi uu ma nguon.",
      "Thiet kien truc he thong."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Bang viec yeu cau nguoi dung lien tuc noi ra nhung gi ho dang nghi, dang tim kiem va cam thay boi roi trong dau khi thao tac (Think-Aloud), nha nghien cuu co the nhin thau suot mo hinh nhan thuc (Mental Model) cua ho de phat hien ra su lech pha giua tu duy cua nguoi dung va thiet ke cua lap trinh vien."
  },
  {
    "id": 156,
    "question": "Phuong phap dat cau hoi (question asking protocol) dung de lam gi?",
    "chapter": 9,
    "options": [
      "Hieu mo hinh nhan thuc cua nguoi dung ve he thong va cac nhiem vu, ho gap kho khan o dau khi tim hieu va su dung he thong.",
      "Thu thap du lieu dinh luong.",
      "Kiem thu tai trong he thong.",
      "Thiet ke giao dien do hoa.",
      "Phan tich yeu cau."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Phuong phap nay chu dong dat cac cau hoi phong van truc tiep tai cac thoi diem then chot cua qua trinh thu nghiem de lam ro ly do tai sao nguoi dung lai thuc hien hanh dong do, giup khai thac sau mo hinh nhan thuc cua ho."
  },
  {
    "id": 157,
    "question": "Mo ta nao sau day khop voi phuong phap danh gia kem cap (coaching method)?",
    "chapter": 9,
    "options": [
      "Nguoi dung chuyen gia theo sat nguoi dung binh thuong de chi dan cho ho cach su dung he thong.",
      "Nguoi dung tu thao tac ma khong co su tro giup.",
      "May tinh tu dong cham diem bai kiem tra.",
      "Nhom chuyen gia thao luan ve giao dien.",
      "Nguoi dung ghi lai nhat ky su dung."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Trong Coaching method, nguoi dung co kinh nghiem (chuyen gia) ngoi canh va chi dan truc tiep cho nguoi dung moi (nguoi binh thuong) trong qua trinh ho thuc hien nhiem vu."
  },
  {
    "id": 158,
    "question": "Mo ta nao sau day khop voi phuong phap danh gia tu xa (remote testing)?",
    "chapter": 9,
    "options": [
      "Co phan mem tu dong huong dan nguoi dung thuc hien cac nhiem vu va ghi lai cac hoat dong cua nguoi dung.",
      "Nguoi nghien cuu den tan noi lam viec cua nguoi dung.",
      "Nguoi dung den phong thi nghiem de tham gia kiem thu.",
      "Chuyen gia ngồi canh nguoi dung de ghi chep.",
      "Nhom tap trung thao luan ve san pham."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Kiem thu tu xa (Remote testing) su dung cac cong cu tu dong hoa truc tuyen (nhu Maze, Hotjar) de phan phat nhiem vu va tu dong ghi hinh man hinh, ghi nhan click chuot ma khong can su hien dien truc tiep cua dieu phoi vien ben canh nguoi dung."
  },
  {
    "id": 159,
    "question": "Mo ta nao sau day khop voi phuong phap kiem thu hoi tuong (retrospective testing)?",
    "chapter": 9,
    "options": [
      "Nguoi kiem thu cung xem lai cac phien kiem thu da duoc ghi lai voi nguoi dung, hoi lai nguoi dung ve nhung gi da xay ra.",
      "Nguoi dung thuc hien nhiem vu ma khong co su giam sat.",
      "May tinh tu dong tao bao cao kiem thu.",
      "Chuyen gia phong van nguoi dung truoc khi kiem thu.",
      "Nguoi dung dien bang cau hoi sau khi kiem thu."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Retrospective Testing la viec cho nguoi dung xem lai doan video ghi hinh thao tac cua chinh ho truoc do, roi phong van ho de giai thich ly do tai sao tai giay thu 45 ho lai khung lai phan van hoac bam nham nut. Dieu nay giup loai bo su sai lech cua tri nho sau khi hoan thanh task."
  },
  {
    "id": 160,
    "question": "Dau khong phai la khuyen cao khi thiet ke giao dien cho cac tro choi tren thiet bi di dong? (1)",
    "chapter": 11,
    "options": [
      "Cung cap mot giai phap day du nhat co the.",
      "Chon giai phap don gian.",
      "Tu dong luu tro choi.",
      "Ho tro tam dung.",
      "Khong lang phi thoi gian nguoi dung."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Thiet ke game di dong doi hoi tinh toi gian cao (Minimalism) do gioi han khong gian hien thi va do tap trung ngan cua nguoi choi di dong. Co gang nhoi nhet \"day du moi tinh nang, menu phuc tap\" cua phien ban PC/Console vao di dong se lam qua tai nhan thuc cua nguoi choi."
  },
  {
    "id": 162,
    "question": "Dau khong phai la khuyen cao khi thiet ke giao dien cho cac tro choi tren thiet bi di dong? (2)",
    "chapter": 11,
    "options": [
      "Loai bo cac chuc nang luu va tam dung.",
      "Chon giai phap don gian.",
      "Tu dong luu tro choi.",
      "Ho tro tam dung.",
      "Không lang phi thoi gian nguoi dung."
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
      "Kiem thu tinh dung duoc cua cac san pham ho tro nguoi dung lam viec trong moi truong cong tac.",
      "Do luong thoi gian phan hoi.",
      "Kiem thu don vi phan mem.",
      "Phan tich yeu cau nguoi dung.",
      "Thiet ke kien truc he thong."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Co-discovery lien quan den viec cho HAI nguoi dung cung thuc hien mot nhiem vu chung va tro chuyen truc tiep voi nhau. Phuong phap nay mo phong moi truong lam viec nhom, rat hoan hao de kiem tra cac phan mem cong tac (Collaborative/Multiplayer softwares)."
  },
  {
    "id": 164,
    "question": "Dieu gi sau day la dung voi phuong phap danh gia heuristic?",
    "chapter": 9,
    "options": [
      "Mot nhom cac chuyen gia danh gia kha nang su dung mot giao dien nguoi dung theo mot tap hop cac nguyen tac chung.",
      "Nguoi dung thu nghiem san pham trong phong lab.",
      "May tinh tu dong phan tich ma nguon.",
      "Khao sat truc tuyen voi nhieu nguoi dung.",
      "Phong van tung nguoi dung mot."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Danh gia Heuristic la phuong phap danh gia chuyen gia (Expert Review). Mot nhom nho cac nha thiet ke (thuong tu 3-5 nguoi) se ra soat giao dien dua tren 10 nguyen tac thiet ke kinh dien cua Jakob Nielsen de tim loi thiet ke ma khong can chay thu nghiem voi nguoi dung cuoi."
  },
  {
    "id": 165,
    "question": "Mo ta nao sau day tuong ung voi giao dien do hoa (GUI)?",
    "chapter": 3,
    "options": [
      "Cho phep nguoi dung giao tiep voi may tinh thong qua cac bieu tuong, bieu trung truc quan va thiet bi tro.",
      "Nhap lenh bang van ban.",
      "Su dung giong noi de dieu khien.",
      "Tuong tac bang cam ung.",
      "Su dung vat the vat ly."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giao dien do hoa (GUI) cho phep nguoi dung tuong tac voi may tinh thong qua cac bien tuong (Icons), menu, cua so (Windows), va thiet bi tro (Pointer - nhu chuot), tao nen mo hinh WIMP kinh dien."
  },
  {
    "id": 166,
    "question": "Mo ta nao tuong ung voi nguyen tac thiet ke web \"Tiet kiem\"?",
    "chapter": 10,
    "options": [
      "Tan dung cac quy uoc thiet ke hien co, chi thay doi khi nguoi thiet ke chac chan y tuong cua ho tot hon.",
      "Nguoi dung lam duoc nhieu viec nhat voi it yeu to thi giac nhat.",
      "Cung cap cau truc ro rang.",
      "Bieu dien noi dung phu hop voi kha nang nguoi dung.",
      "Su dung nhieu mau sac khac nhau."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Nguyen tac Tiet kiem (Economy) yeu cau giao dien phai dat hieu suat cao voi gia thanh thi giac thap nhat. Viec tan dung cac quy uoc quen thuoc cua nganh (nhu bieu tuong gio hang cho mua sam) giup giam cong suc hoc tap cua nguoi dung, toi gian mau sac va hoa tiet thua de tang toc do xu ly thong tin truc quan."
  },
  {
    "id": 167,
    "question": "Mo ta nao tuong ung voi nguyen tac thiet ke web \"Giao tiep\"?",
    "chapter": 10,
    "options": [
      "Bieu dien noi dung phu hop voi kha nang cua nguoi dung.",
      "Tan dung cac quy uoc thiet ke hien co.",
      "Cung cap cau truc ro rang nhat quan.",
      "Nguoi dung lam duoc nhieu viec nhat voi it yeu to thi giac nhat.",
      "Su dung nhieu hieu ung dong."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Nguyen tac Giao tiep (Communication) nhan manh viec he thong phai \"noi chuyen\" bang ngon ngu cua nguoi dung (ngon ngu tu nhien, de hieu, phong chu de doc, co chu du lon, do tuong phan cao), dam bao noi dung truyen tai an khop hoan hao voi kha nang nhan thuc cua nhom doi tuong muc tieu."
  },
  {
    "id": 168,
    "question": "Mo ta nao tuong ung voi nguyen tac thiet ke web \"To chuc\"?",
    "chapter": 10,
    "options": [
      "Cung cap cho nguoi dung mot cau truc ro rang nhat quan.",
      "Tan dung cac quy uoc thiet ke hien co.",
      "Bieu dien noi dung phu hop voi kha nang nguoi dung.",
      "Nguoi dung lam duoc nhieu viec nhat voi it yeu to thi giac nhat.",
      "Toi da hoa so luong phan tu tren man hinh."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Nguyen tac To chuc (Organization) yeu cau sap xep cac phan tu UI thanh mot cau truc phan cap thi giac (Visual Hierarchy) ro rang, su dung luoi thiet ke (Grids) va su nhat quan ve vi tri menu giup nguoi dung de dang dinh vi ban than tren website."
  },
  {
    "id": 169,
    "question": "Yeu cau ve moi truong tuong tac bao gom:",
    "chapter": 1,
    "options": [
      "Yeu cau ve boi canh su dung, xa hoi, muc do nguoi dung ho tro thuc hien nhiem vu va cac cong nghe lien quan.",
      "Yeu cau ve mau sac va font chu.",
      "Yeu cau ve toc do mang.",
      "Yeu cau ve he dieu hanh.",
      "Yeu cau ve phan cung may tinh."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Moi truong tuong tac bao gom toan bo boi canh vat ly, xa hoi, to chuc va cong nghe xung quanh nguoi dung khi ho thuc hien nhiem vu."
  },
  {
    "id": 170,
    "question": "Voi mo thuc danh gia quick and dirty, can:",
    "chapter": 9,
    "options": [
      "Tranh luan khong chinh thuc voi nguoi dung o bat cu khi nao khi su dung duoc mau thu.",
      "To chuc phong thi nghiem chinh quy.",
      "Thue chuyen gia phan tich thong ke.",
      "Xay dung mo hinh GOMS chi tiet.",
      "Tien hanh khao sat quy mo lon."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Mo thuc Quick and Dirty la danh gia nhanh, khong chinh thong, thuong dung trong thiet ke lap som de lay phan hoi tuc thi bang cach gap bat cu ai, dua cho ho xem ban ve nhap va tro chuyen nhanh de sua doi thiet ke ngay lap tuc."
  },
  {
    "id": 171,
    "question": "Voi mo thuc danh gia field studies, can:",
    "chapter": 9,
    "options": [
      "Den cho nguoi dung phong van hay quan sat viec su dung mau thu.",
      "Moi nguoi dung den phong thi nghiem.",
      "Gui bang cau hoi truc tuyen.",
      "Phan tich log he thong.",
      "Thuc hien danh gia heuristic."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Khac voi phong thi nghiem, Field Studies bat buoc nghien cuu vien phai di ra thuc dia de ghi nhan boi canh thuc te."
  },
  {
    "id": 172,
    "question": "Voi mo thuc danh gia predictive, can:",
    "chapter": 9,
    "options": [
      "Danh gia ma khong can su co mat cua nguoi dung.",
      "Su dung su hieu biet cua cac chuyen gia ve nguoi dung de du doan cac van de ve tinh dung duoc.",
      "Tuyen dung nhieu nguoi dung tham gia.",
      "Thiet lap phong lab chuyen nghiep.",
      "Ghi hinh va phan tich sau."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Danh gia du doan (Predictive Evaluation - nhu mo hinh GOMS hay Heuristic) su dung ly thuyet va kinh nghiem cua chuyen gia de mo phong, tinh toan va du doan hanh vi, thoi gian thuc hien cua nguoi dung ma khong can tuyen mo nguoi tham gia thu nghiem truc tiep."
  },
  {
    "id": 173,
    "question": "Voi mo thuc danh gia usability testing, can:",
    "chapter": 9,
    "options": [
      "Quan sat nguoi dung va ghi lai hieu suat nguoi dung khi thuc hien cac nhiem vu.",
      "Chi du dua vao y kien chuyen gia.",
      "Khong can nguoi dung tham gia.",
      "Phan tich ma nguon he thong.",
      "Khao sat truc tuyen."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Mo thuc Usability Testing chuan trong phong Lab yeu cau thiet lap kich ban thao tac nghiêm ngat, ghi hinh va do dac chinh xac hieu suat (thoi gian lam task, so loi bam nham) cua nguoi dung de thu thap so lieu dinh luong."
  },
  {
    "id": 174,
    "question": "Co the ap dung phuong phap phat bieu suy nghi (think aloud protocol) vao giai doan nao trong quy trinh phat trien he tuong tac, ket qua danh gia la dinh luong hay dinh tinh?",
    "chapter": 9,
    "options": [
      "Ap dung o bat cu giai doan nao, ket qua la dinh tinh.",
      "Chi ap dung o giai doan kiem thu, ket qua la dinh luong.",
      "Ap dung o giai doan thiet ke, ket qua la dinh luong.",
      "Chi ap dung o giai doan phan tich, ket qua la dinh tinh.",
      "Ap dung o giai doan trien khai, ket qua la dinh luong."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Think-Aloud co the thuc hien rat som tren mau giay (Lo-Fi) cho den mau thu do phan giai cao (Hi-Fi) hoac app da chay that. Du lieu thu ve la loi noi, suy nghi, cam xuc chu quan cua nguoi dung nen no mang tinh chat dinh tinh (Qualitative) thuan tuy."
  },
  {
    "id": 175,
    "question": "Co the ap dung phuong phap theo sat nhu bong voi hinh (shadowing method) vao giai doan nao, ket qua la dinh luong hay dinh tinh?",
    "chapter": 9,
    "options": [
      "Ap dung o giai doan kiem thu, ket qua la dinh luong.",
      "Ap dung o giai doan phan tich, ket qua la dinh tinh.",
      "Ap dung o bat cu giai doan nao, ket qua la dinh tinh.",
      "Chi ap dung o giai doan thiet ke, ket qua la dinh luong.",
      "Ap dung o giai doan nghien cuu, ket qua la dinh tinh."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Shadowing method thuong duoc thuc hien trong giai doan kiem thu, thu thap du lieu ve thoi gian, tan suat va do chinh xac cua cac thao tac -> ket qua dinh luong."
  },
  {
    "id": 176,
    "question": "Co the ap dung phuong phap do hieu nang (performance measurement) vao giai doan nao, ket qua la dinh luong hay dinh tinh?",
    "chapter": 9,
    "options": [
      "Ap dung o giai doan kiem thu, ket qua la dinh luong.",
      "Ap dung o giai doan thiet ke, ket qua la dinh tinh.",
      "Ap dung o bat cu giai doan nao, ket qua la dinh tinh.",
      "Ap dung o giai doan phan tich yeu cau, ket qua la dinh luong.",
      "Chi ap dung o giai doan nghien cuu, ket qua la dinh tinh."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Do hieu nang (tinh bang giay hoan thanh, so click chuot) chi co the thuc hien khi da co mot mau thu hoat dong (kiem thu) va ket qua do dac bang so hoc hien nhien la dinh luong (Quantitative)."
  },
  {
    "id": 177,
    "question": "Co the ap dung phuong phap huong dan (teaching method) vao giai doan nao, ket qua la dinh luong hay dinh tinh?",
    "chapter": 9,
    "options": [
      "Ap dung o giai doan kiem thu, ket qua la dinh tinh.",
      "Ap dung o giai doan thiet ke, ket qua la dinh luong.",
      "Ap dung o giai doan phan tich, ket qua la dinh luong.",
      "Chi ap dung o giai doan trien khai, ket qua la dinh tinh.",
      "Ap dung o bat cu giai doan nao, ket qua la dinh luong."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Teaching method thu thap phan hoi chu quan, cac cau hoi, kho khan cua nguoi dung khi duoc huong dan -> ket qua dinh tinh, va duoc thuc hien o giai doan kiem thu."
  },
  {
    "id": 178,
    "question": "Co the ap dung phuong phap dat cau hoi (question-asking protocol) vao giai doan nao, ket qua la dinh luong hay dinh tinh?",
    "chapter": 9,
    "options": [
      "Ap dung o giai doan kiem thu, ket qua la dinh tinh.",
      "Ap dung o giai doan phan tich, ket qua la dinh luong.",
      "Chi ap dung o giai doan thiet ke, ket qua la dinh luong.",
      "Ap dung o bat cu giai doan nao, ket qua la dinh luong.",
      "Ap dung o giai doan nghien cuu, ket qua la dinh tinh."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Question-asking protocol thu thap cac cau tra loi chu quan tu nguoi dung -> dinh tinh, duoc thuc hien o giai doan kiem thu."
  },
  {
    "id": 179,
    "question": "Co the ap dung phuong phap kiem thu tu xa (remote testing) vao giai doan nao, ket qua la dinh luong hay dinh tinh?",
    "chapter": 9,
    "options": [
      "Ap dung o giai doan kiem thu, ket qua la dinh luong.",
      "Ap dung o giai doan thiet ke, ket qua la dinh tinh.",
      "Chi ap dung o giai doan phan tich, ket qua la dinh luong.",
      "Ap dung o bat cu giai doan nao, ket qua la dinh tinh.",
      "Ap dung o giai doan nghien cuu, ket qua la dinh tinh."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Remote testing thu thap du lieu do luong tu dong (thoi gian, click, ty le thanh cong) -> dinh luong, duoc thuc hien o giai doan kiem thu."
  },
  {
    "id": 180,
    "question": "Co the ap dung phuong phap kiem thu hoi tuong (retrospective testing) vao giai doan nao, ket qua la dinh luong hay dinh tinh?",
    "chapter": 9,
    "options": [
      "Ap dung o giai doan kiem thu, ket qua la dinh luong.",
      "Ap dung o giai doan thiet ke, ket qua la dinh tinh.",
      "Chi ap dung o giai doan phan tich, ket qua la dinh luong.",
      "Ap dung o bat cu giai doan nao, ket qua la dinh tinh.",
      "Ap dung o giai doan nghien cuu, ket qua la dinh tinh."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Dù phỏng vấn hồi tưởng thu thập nhiều dữ liệu chủ quan, kết quả được sử dụng để đo lường và đánh giá mức độ nhận thức, nhớ lại của người dùng - mang tính định lượng. Thực hiện ở giai đoạn kiểm thử."
  },
  {
    "id": 181,
    "question": "Cau nao sau day dung ve phuong phap cung kham pha (co-discovery learning)?",
    "chapter": 9,
    "options": [
      "Phuong phap nay co the ap dung trong bat ky giai doan nao cua quy trinh phat trien he tuong tac.",
      "Chi ap dung duoc o giai doan trien khai.",
      "Khong the ap dung trong thiet ke tuong tac.",
      "Chi ap dung cho kiem thu phan cung.",
      "Ap dung duy nhat o giai doan kiem thu."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Co-discovery method linh hoat, co the su dung som tren phac thao giay hoac muon tren san pham hoan thien."
  },
  {
    "id": 182,
    "question": "Cau nao sau day dung ve phuong phap kem cap (coaching method)?",
    "chapter": 9,
    "options": [
      "Nguoi tham gia se duoc chuyen gia kem cap ho tro.",
      "Nguoi tham gia tu thuc hien nhiem vu ma khong co tro giup.",
      "May tinh tu dong cham diem.",
      "Khong can su tham gia cua nguoi dung.",
      "Chi ap dung cho kiem thu tu dong."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Coaching method co su tham gia cua mot chuyen gia (coach) ho tro, huong dan nguoi dung trong qua trinh kiem thu."
  },
  {
    "id": 183,
    "question": "Cau nao sau day dung ve phuong phap phat bieu suy nghi (think aloud protocol)?",
    "chapter": 9,
    "options": [
      "Nguoi dung duoc yeu cau viet ra cam tuong, suy nghi va y kien ca nhan khi su dung he thong.",
      "Nguoi dung thuc hien nhiem vu trong im lang.",
      "May tinh tu dong ghi lai thao tac.",
      "Chuyen gia quan sat va tu suy luan.",
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
      "CMN GOMS.",
      "BNF.",
      "HTA.",
      "KLM GOMS.",
      "TAG."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Card, Moran, va Newell GOMS (CMN-GOMS) la mo hinh goc phan tich nhan thuc con nguoi theo cac chuoi xu ly thong tin song song de tinh toan du bao chinh xac thoi gian thuc hien tac vu cua nguoi dung chuyen nghiep."
  },
  {
    "id": 185,
    "question": "Cach to chuc cua mot website duoc quy dinh boi cai gi?",
    "chapter": 10,
    "options": [
      "So do website (Site map).",
      "Luong duyet giua cac trang (User flow).",
      "Bo cuc trang web (Layout).",
      "Kieu chu.",
      "Tieu de cac noi dung."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Ba yeu to nay dinh hinh nen cau truc xuong song, kien truc thong tin (Information Architecture) va phuong thuc to chuc noi dung tong the cua mot trang web. Kieu chu hay tieu de chi thuoc ve lop giao dien truc quan be mat (Surface)."
  },
  {
    "id": 186,
    "question": "Ky thuat tao mau thu nao cho phep tao ra cach hoat dong chi tiet cho mot so tinh nang duoc chon?",
    "chapter": 8,
    "options": [
      "Vertical prototypes (Mau thu chieu doc).",
      "Pencils and papers mockups.",
      "Wizard of Oz.",
      "Horizontal prototypes.",
      "Scenario."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Mau thu chieu doc (Vertical Prototyping) dao sau chi tiet ky thuat va hanh vi hoat dong day du cua duy nhat mot vai tinh nang trong tam da chon, thay vi xay dung giao dien nong trai rong cho toan bo he thong (Horizontal Prototyping)."
  },
  {
    "id": 187,
    "question": "Dau la nhung nhan to anh huong den thanh cong cua thiet ke giao dien web?",
    "chapter": 10,
    "options": [
      "Tinh dung duoc (Usability).",
      "Tinh tien loi (Utility).",
      "Mau sac.",
      "Font chu.",
      "Hieu ung dong."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Su phoi hop giua Usability (su dung de dang) va Utility (cung cap dung chuc nang huu ich can thiet) se tao nen Tinh huu dung (Usefulness) cua he thong, quyet dinh su thanh cong cot loi cua website."
  },
  {
    "id": 188,
    "question": "Tinh huu dung (usefulness) cua mot he tuong tac duoc hieu la su phoi hop giua:",
    "chapter": 1,
    "options": [
      "Tinh dung duoc (usability).",
      "Tinh tien loi (Utility).",
      "Tinh bao mat.",
      "Tinh tham my.",
      "Chi phi thap."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Usefulness = Usability + Utility. Mot he thong co ich khi no vua de su dung (Usability) vua co dung chuc nang can thiet (Utility)."
  },
  {
    "id": 189,
    "question": "Cac hanh dong nao sau day thuoc ve quy trinh phat trien website?",
    "chapter": 10,
    "options": [
      "Tao noi dung.",
      "Chay thu.",
      "Bao tri.",
      "Cai dat.",
      "Tao ban tinh chinh."
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
      "Performance measurement (Do hieu nang).",
      "User testing (Kiem thu nguoi dung).",
      "Phong van.",
      "Quan sat.",
      "Nghien cuu tai lieu."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Do hieu nang va User testing thu thap cac so lieu do luong duoc (thoi gian, ty le loi, so click) -> dinh luong."
  },
  {
    "id": 191,
    "question": "Chung ta su dung cac ky thuat nao sau day de danh gia hinh thanh?",
    "chapter": 9,
    "options": [
      "Pencils and papers mockups (Mau thu giay).",
      "Walkthrough (Duyet qua nhan thuc).",
      "Logging and tracking.",
      "Remote testing.",
      "Performance measurement."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Danh gia hinh thanh (Formative) thuong dung mau thu do tin cay thap (pencil/paper mockups) va ky thuat duyet qua nhan thuc (cognitive walkthrough) o giai doan som."
  },
  {
    "id": 192,
    "question": "Hanh dong nao sau day khong thuoc ve quy trinh phat trien website?",
    "chapter": 10,
    "options": [
      "Ket xuat noi dung (Rendering).",
      "Tao noi dung.",
      "Thiet ke giao dien.",
      "Kiem thu.",
      "Bao tri."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "\"Ket xuat noi dung\" la mot tac vu ky thuat tu dong do trinh duyet web (Browser) thuc hien khi bien dich ma nguon HTML/CSS/JS, hoan toan khong phai la mot buoc hanh dong quan ly trong quy trinh thiet ke va phat trien website cua con nguoi."
  },
  {
    "id": 195,
    "question": "Nhung gi khong la muc tieu cua HTA?",
    "chapter": 6,
    "options": [
      "Dac ta hoi thoai nguoi dung / may tinh.",
      "Do hieu nang thuc hien cua may tinh.",
      "Phan ra nhiem vu thanh cac buoc nho.",
      "Mo ta ke hoach thuc hien.",
      "Xac dinh cac hanh dong cu the."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "HTA chi phan ra nhiem vu hanh vi cua con nguoi (ho lam gi de dat muc tieu). No hoan toan khong dac ta cau truc ngon ngu doi thoai cua may tinh (nhu BNF hay State Transition Diagrams) va cung khong co kha nang do luong hieu nang phan cung cua may tinh."
  },
  {
    "id": 197,
    "question": "De du doan thoi gian thuc hien cua nguoi dung, can su dung mo hinh nao?",
    "chapter": 6,
    "options": [
      "KLM GOMS (Keystroke-Level Model GOMS).",
      "CMN GOMS.",
      "BNF.",
      "HTA.",
      "TAG."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "KLM-GOMS la mo hinh dinh luong thuoc ho GOMS, be gay hanh dong thanh cac don vi cuc nho bang giay vat ly (nhu K: go phim = 0.2s, P: tro chuot = 1.1s, H: di tay sang chuot = 0.4s) de cong tong va du doan chinh xac thoi gian hoan thanh task cua nguoi dung."
  },
  {
    "id": 199,
    "question": "Lua chon nao sau day khong phai van de thuong gap khi thiet ke giao dien di dong?",
    "chapter": 11,
    "options": [
      "Thoa man su thay doi nhu cau nguoi dung mot cach linh hoat.",
      "Khong gian man hinh nho gay bam nham (Fat finger problem).",
      "Boi canh chuyen dong nhieu thiet bi nhieu loan.",
      "Hien thi phan hoi trang thai cho ro rang.",
      "Dieu huong phuc tap."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Viec \"thoa man su thay doi nhu cau mot cach linh hoat\" la thach thuc chung cua moi quy trinh phan mem (Software Engineering). Thiet ke di dong thuc te doi mat voi cac van de dac thu hon nhu khong gian man hinh nho gay bam nham (Fat finger problem), boi canh chuyen dong nhieu va hien thi phan hoi trang thai cho."
  },
  {
    "id": 200,
    "question": "Khi thiet ke giao dien di dong, chung ta phai bao dam nhung gi?",
    "chapter": 11,
    "options": [
      "Ho tro tam dung va luu doi voi tro choi di dong.",
      "Thu nho giao dien desktop lai.",
      "Su dung nhieu mau sac.",
      "Them nhieu chuc nang phuc tap.",
      "Luon yeu cau ket noi mang."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Boi canh su dung di dong dut quang, viec ho tro tam dung (Pause) va tu dong luu (Save) la yeu cau bat buoc."
  },
  {
    "id": 201,
    "question": "Phat bieu nao sau day la sai voi thiet ke vat chat (Material design)?",
    "chapter": 11,
    "options": [
      "Material design la thiet ke phang.",
      "Material design su dung mau sac ruc ro.",
      "Material design duoc lay cam hung tu the gioi vat chat.",
      "Cac phan tu trong Material design co cac do cao khac nhau.",
      "Cac thanh phan nam trong cac lop khac nhau co bong do khac nhau."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Material Design la ngon ngu thiet ke phi vat ly mo phong giay xep lop. No hoan toan KHONG PHAI la thiet ke phang (Flat Design) vi no su dung do sau (Elevation), truc Z va bong do (Shadows) de tao cau truc phan lop truc quan."
  },
  {
    "id": 204,
    "question": "Dau khong phai la nguyen tac heuristic de tinh chinh HTA?",
    "chapter": 6,
    "options": [
      "Dua vao cap hanh dong.",
      "Dam bao tinh can bang cua cac nhanh cay.",
      "Chia de tri.",
      "Khai quat hoa nhiem vu.",
      "Toi uu phan ra."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Viec tinh chinh mo hinh phan ra HTA tuan theo cac nguyen tac he thong nhu: Dam bao tinh can bang cua cac nhanh cay, Chia de tri, va Khai quat hoa nhiem vu."
  },
  {
    "id": 206,
    "question": "Co may loai ung dung di dong, la nhung loai nao?",
    "chapter": 11,
    "options": [
      "3 loai: hybrid app, mobile web app, native app.",
      "2 loai: native app va web app.",
      "4 loai: iOS, Android, Windows, Web.",
      "Chi co 1 loai: mobile app.",
      "5 loai: game, social, utility, education, business."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Native App: Code truc tiep bang ngon ngu goc cua he dieu hanh (Swift cho iOS, Kotlin cho Android). Mobile Web App: Trang web duoc toi uu hien thi responsive tren trinh duyet di dong. Hybrid App: Web boc trong khung ung dung native (viet bang HTML/CSS/JS chay qua WebView)."
  },
  {
    "id": 210,
    "question": "Thiet ke luong duyet man hinh di dong co the dem den cac loai trai nghiem nao sau day cho nguoi dung:",
    "chapter": 11,
    "options": [
      "Adequate experience (Trai nghiem vua du/thich hop).",
      "Excellent experience.",
      "Poor experience.",
      "Bad experience.",
      "Premium experience."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Thiet ke luong duyet (navigation flow) phu hop mang lai trai nghiem vua du, dap ung dung nhu cau ma khong gay qua tai hoac thieu hut thong tin."
  },
  {
    "id": 211,
    "question": "Dinh nghia cua ACM SIGCHI ve tuong tac nguoi may khong de cap den cac doi tuong nao sau day?",
    "chapter": 1,
    "options": [
      "Con nguoi.",
      "Moi truong phat trien.",
      "May tinh.",
      "He thong tuong tac.",
      "Hieu nang su dung."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Dinh nghia chinh thuc cua ACM SIGCHI su dung thuat ngu chuyen mon \"interactive computing systems\" va \"human use\", hoan toan khong dung cac tu don gian nhu \"may tinh\" (computers) hay \"moi truong phat trien\" (development environment)."
  },
  {
    "id": 213,
    "question": "Moi truong va ngu canh cua he tuong tac khong bi gioi han boi yeu to to chuc, xa hoi, cong viec, linh vuc ung dung nao?",
    "chapter": 1,
    "options": [
      "Tro giup truc tuyen hoac dieu khien he thong lien tuc va tro giup thiet ke.",
      "To chuc.",
      "Xa hoi.",
      "Cong viec.",
      "Linh vuc ung dung."
    ],
    "correctAnswers": [
      0
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
      "Chi toc do xu ly.",
      "Chi kich thuoc man hinh.",
      "Chi gia thanh san pham."
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
      "Mau sac duoc su dung de goi nho cac du lieu dac biet.",
      "Mau sac duoc su dung de tao ra giao dien thu hut.",
      "Mau sac duoc su dung de tang cuong su goi nho, ghi nho.",
      "Mau sac chi de trang tri.",
      "Mau sac khong co tac dung voi thong tin."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Mau sac co 3 muc tieu chinh trong tiep nhan thong tin: (1) Tao diem nhan de goi nho du lieu dac biet, (2) Tao su thu hut thi giac cho giao dien, va (3) Tang cuong kha nang ghi nho thong tin (color coding)."
  },
  {
    "id": 219,
    "question": "Cac ky thuat thu thap du lieu co the duoc phoi hop voi nhau KHONG dua tren yeu to nao?",
    "chapter": 5,
    "options": [
      "Dinh huong thu thap du lieu.",
      "Loai thong tin can thu thap.",
      "Nguon thong tin can thu thap.",
      "Vi tri va kha nang tiep can cac ben lien quan.",
      "Muc tieu nghien cuu."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Viec phoi hop cac ky thuat thu thap dua tren loai thong tin, nguon thong tin, vi tri dia ly, chu khong phai dua tren \"dinh huong thu thap\" - day la he qua cua viec phoi hop chu khong phai yeu to quyet dinh."
  },
  {
    "id": 220,
    "question": "Dat cau hoi la mot trong cac ky thuat thu thap du lieu. Trong so cac menh de sau day ve thiet ke cau hoi, menh de nao sai?",
    "chapter": 5,
    "options": [
      "Khong can cac phien ban khac nhau cua bang cau hoi cho cac tap nguoi dung khac nhau.",
      "Nguoi dung quyet dinh noi dung bang cau hoi thien ve tich cuc, tieu cuc hay dan xen.",
      "Cau hoi nen ro rang, de hieu.",
      "Tranh cau hoi dan dat.",
      "Cau hoi can phu hop voi doi tuong khao sat."
    ],
    "correctAnswers": [
      0,
      1
    ],
    "explanation": "Cac doi tuong nguoi dung co tri thuc va ngon ngu khac nhau bat buoc phai co cac ban thiet ke cau hoi rieng biet phu hop voi ho. Dac biet, noi dung bang hoi phai do nha nghien cuu kiem soat nghiem ngat ve tinh khach quan de tranh dinh kien (bias), khong the giao quyen quyet dinh noi dung cho nguoi dung."
  },
  {
    "id": 223,
    "question": "Van de nao sau day khong phai la van de chinh cua viec thu thap yeu cau nguoi dung?",
    "chapter": 5,
    "options": [
      "Ban chat cua ky thuat.",
      "Muc tieu.",
      "Lua chon nguoi tham gia.",
      "Quan he giua nhung nguoi tham gia.",
      "Dan dat yeu cau."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cac van de chinh trong thu thap yeu cau nguoi dung bao gom: muc tieu, chon nguoi tham gia, quan he giua cac ben, va dan dat yeu cau. \"Ban chat cua ky thuat\" khong phai van de chinh."
  },
  {
    "id": 224,
    "question": "\"_____ duoc thuc hien theo kich ban nhung nhung van de thu vi co the duoc kham pha sau hon. Loai phong van nay co the duy tri su can bang giua tinh phong phu cua noi dung phong van va kha nang mo rong kich ban phong van.\"",
    "chapter": 5,
    "options": [
      "Phong van ban cau truc.",
      "Phong van co cau truc.",
      "Phong van khong cau truc.",
      "Phong van nhom.",
      "Phong van sau."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Phong van ban cau truc (Semi-structured interview) thiet lap mot bo khung cau hoi chuan bi truoc nhung cho phep nguoi phong van linh hoat dao sau, hoi them cac cau hoi phat sinh dua vao cau tra loi cua ung vien, ket hop hoan hao giua do rong va do sau thong tin."
  },
  {
    "id": 225,
    "question": "\"_____ duoc thuc hien theo mot kich ban chat che, thuong giong nhu mot bang cau hoi kieu phong van nay co the trien rong nhung co the thieu su phong phu ve mat noi dung phong van.\"",
    "chapter": 5,
    "options": [
      "Phong van co cau truc.",
      "Phong van ban cau truc.",
      "Phong van khong cau truc.",
      "Phong van nhom.",
      "Phong van sau."
    ],
    "correctAnswers": [
      0
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
      "Loai thong tin can thu thap.",
      "Nguon thong tin can thu thap.",
      "Vi tri va kha nang tiep can cac ben lien quan."
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
      "Trong thiet ke tuong tac, mau thu giao dien co the duoc su dung de kiem tra cac phan co the nhin thay cua thiet ke.",
      "Trong mau thu tuong tac do tin cay cao, so do dieu huong duoc dinh nghia ro rang.",
      "Trong mau thu giao dien do tin cay thap, co the phat hien cac van de ve bo cuc man hinh.",
      "Tao mau thu khong phai la cach lam re.",
      "Mau thu do tin cay thap ton nhieu thoi gian."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ],
    "explanation": "Mau thu (prototype) duoc su dung de kiem tra cac phan nhin thay cua thiet ke. Mau thu do tin cay cao co so do dieu huong ro rang. Mau thu do tin cay thap giup phat hien van de bo cuc som."
  },
  {
    "id": 235,
    "question": "Giam doc cong ty ABC quyet dinh su dung mot phan mem quan ly cong viec trong cong ty voi giao dien command-line. Dieu gi se xay ra khi phan mem nay duoc trien khai trong thuc te?",
    "chapter": 3,
    "options": [
      "Hau het nhan vien se cam thay mat tinh than va khong muon su dung phan mem nay.",
      "Nhan vien se rat hai long vi tinh nang manh me.",
      "Nhan vien se de dang thich nghi.",
      "Nang suat se tang cao.",
      "Khong co van de gi xay ra."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Giao dien dong lenh (Command-line) doi hoi nguoi dung phai co ky nang ky thuat cao, nho chinh xac cu phap lenh va ton cuc ky nhieu thoi gian dao tao. Ap dung no cho nhan vien van phong pho thong (non-experts) se gay ra su sut giam nghiem trong ve dong luc lam viec va ty le chap nhan he thong thap."
  },
  {
    "id": 236,
    "question": "Ly do nao sau day la ly do chinh dang de dua am thanh vao giao dien?",
    "chapter": 7,
    "options": [
      "So voi tin hieu hinh anh, nguoi dung phan ung voi tin hieu am thanh nhanh hon.",
      "Am thanh lam giao dien dep hon.",
      "Am thanh giam chi phi san xuat.",
      "Am thanh de thiet ke hon.",
      "Am thanh tiet kiem bo nho."
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
      "Khong phai moi nguoi dung deu la chuyen gia may tinh.",
      "Giao dien dep giup ban ban phan mem dat hon.",
      "Giao dien tot giam thoi gian bien dich.",
      "Giao dien tot lam tang toc do mang.",
      "Giao dien tot giam dung luong o cung."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Day la cot loi cua triet ly UI/UX. Phan mem lam ra phuc vu cho dai chung xa hoi voi moi trinh do, tuoi tac khac nhau. Thiet ke giao dien tot giup xoa bo rao can ky thuat, cho phep nhung nguoi khong biet lap trinh van van hanh he thong tron tru."
  },
  {
    "id": 241,
    "question": "\"_____ cung cap su hieu biet ve cac nhiem vu ma nguoi dung can thuc hien de dat duoc cac muc tieu nhat dinh.\"",
    "chapter": 6,
    "options": [
      "HTA (hierarchical task analysis).",
      "GOMS.",
      "BNF.",
      "TAG.",
      "OSTA."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "HTA (Hierarchical Task Analysis) la phuong phap phan tich nhiem vu phan cap, giup hieu ro cac buoc ma nguoi dung can thuc hien de hoan thanh muc tieu."
  },
  {
    "id": 242,
    "question": "\"_____ tham chieu toi cach doi tuong nen duoc su dung, mot manh moi truc quan ve chuc nang va cong dung cua doi tuong do.\"",
    "chapter": 7,
    "options": [
      "the cho (affordance).",
      "anh xa (mapping).",
      "rang buoc (constraints).",
      "phan hoi (feedback).",
      "truc quan (visibility)."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Affordance la tinh chat goi y truc quan cua mot doi tuong ve cach no nen duoc su dung, nhu hinh dang cai nut goi y viec bam."
  },
  {
    "id": 243,
    "question": "\"_____ la cach bieu dien cau truc cua website.\"",
    "chapter": 10,
    "options": [
      "Site map (So do trang).",
      "Layout.",
      "Navigation.",
      "Wireframe.",
      "Content."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "So do trang (Site map) la bieu do the hien cau truc phan cap cua cac trang trong mot website, giup hieu ro cach to chuc thong tin."
  },
  {
    "id": 244,
    "question": "Bang cau hoi thuc hien sau khi kiem thu tinh dung duoc (usability testing) thuong duoc su dung de do:",
    "chapter": 9,
    "options": [
      "Muc do hai long cua nguoi dung.",
      "Toc do xu ly.",
      "So loi lap trinh.",
      "Do phuc tap cua code.",
      "Chi phi phat trien."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cac thang do chuan hoa quoc te phat sau khi test (nhu SUS - System Usability Scale, hay CSUQ) tap trung do luong tinh chu quan: Muc do hai long, trai nghiem de chiu va su ua chuong cua nguoi dung doi voi he thong."
  },
  {
    "id": 245,
    "question": "Phuong phap tao kich ban (storyboarding):",
    "chapter": 8,
    "options": [
      "Thuong duoc hien trong thiet ke do tin cay thap.",
      "Chi dung trong thiet ke do tin cay cao.",
      "Khong duoc su dung trong thiet ke tuong tac.",
      "La phuong phap kiem thu tu dong.",
      "La cong cu phan tich yeu cau."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Storyboarding thuong duoc thuc hien o giai doan thiet ke do tin cay thap (Lo-Fi) de phac hoa luong tuong tac cua nguoi dung."
  },
  {
    "id": 246,
    "question": "Cung cap cac tien ich gia tri gia tang, vi du nhu cac phim tat nham nang cao:",
    "chapter": 7,
    "options": [
      "Tinh nang suat.",
      "Tinh bao mat.",
      "Tinh tham my.",
      "Tinh tuong thich.",
      "Tinh mo rong."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Phim tat (Shortcuts) giup nguoi dung bo qua thao tac di chuot ruom ra qua nhieu lop menu do hoa, truc tiep kich hoat lenh bang 1 to hop phim go, toi uu hoa toc do thuc hien nhiem vu (Nang suat / Efficiency)."
  },
  {
    "id": 248,
    "question": "Luong thong tin cua mot website thuong chi ra:",
    "chapter": 10,
    "options": [
      "Thu tu cac hanh dong nguoi dung can lam de hoan thanh mot nhiem vu.",
      "Cach bo tri mau sac.",
      "Kieu font chu su dung.",
      "Kich thuoc hinh anh.",
      "Dung luong trang web."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Luong duyet (User flow / Information flow) la so do mo ta chinh xac buoc tiep theo nguoi dung phai bam vao dau, re nhanh logic the nao de di tu diem bat dau den diem hoan thanh muc tieu."
  },
  {
    "id": 250,
    "question": "Theo cac nguyen ly thiet ke cua Norman, banh xe giua 2 phim chuot phai / trai la _____ cua thao tac lan, khong phai thao tac nhan.",
    "chapter": 7,
    "options": [
      "The cho (Affordance).",
      "Anh xa (Mapping).",
      "Rang buoc (Constraint).",
      "Phan hoi (Feedback).",
      "Truc quan (Visibility)."
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
      "Hieu nham cach hoat dong thuc te cua he thong.",
      "Quen mat khau.",
      "Tai file qua cham.",
      "Mat ket noi mang.",
      "Thoat ung dung ngoai y muon."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Feedback (Phan hoi) ngay lap tuc giup nguoi dung kiem chung xem hanh dong cua ho da tac dong the nao den trang thai may tinh. Thieu phan hoi, nguoi dung se tu suy dien bua bai va xay dung nen mot mo hinh nhan thuc sai lam ve cach hoat dong cua he thong."
  },
  {
    "id": 252,
    "question": "He tuong tac can quan tam den kha nang sai sot va so suat cua nguoi dung de tranh truong hop nguoi dung:",
    "chapter": 7,
    "options": [
      "Gap nhieu tinh huong phat sinh loi.",
      "Quen thao tac.",
      "Thoat ung dung.",
      "Tai lieu bi mat.",
      "Mat du lieu."
    ],
    "correctAnswers": [
      0
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
      "Thoat ung dung.",
      "Mat du lieu.",
      "Quen mat khau."
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
      "Khong ro phai lam gi voi he thong.",
      "Bam nham nut.",
      "Thoat ung dung.",
      "Mat du lieu.",
      "Quen mat khau."
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Rang buoc vat ly va the cho giup nguoi dung de dang nhan biet duoc hanh dong nao co the thuc hien va hanh dong nao khong, tranh tinh trang lung tung."
  },
  {
    "id": 255,
    "question": "He tuong tac can co tinh nhat quan de tranh truong hop nguoi dung:",
    "chapter": 7,
    "options": [
      "Nho nhieu.",
      "Quen thao tac.",
      "Bam nham.",
      "Thoat ung dung.",
      "Mat du lieu."
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
      "Thiết kế dữ liệu",
      "Ràng buộc hệ thống",
      "Các bảo đảm",
      "Độ đậm nhạt",
      "Ràng buộc người dùng"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 350: Non-functional requirements (VD: App phai load duoi 2s, bao mat ma hoa SSL) khong tao ra tinh nang moi, ma tao ra CAC RANG BUOC KY THUAT (Constraints) cho he thong do. Dap an dung: \"Rang buoc he thong\"."
  },
  {
    "id": 351,
    "question": "Mô hình nào mô tả giao diện người dùng cùng với tất cả thông tin hỗ trợ?",
    "chapter": 5,
    "options": [
      "Mô hình của người dùng",
      "Nhận thức hệ thống",
      "Mô hình người dùng",
      "Mô hình kỹ thuật xã hội OSTA",
      "Mô hình thực hiện"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 351: Theo dinh nghia cua Alan Cooper, Implementation Model mo ta cach may moc/phan mem thuc su duoc cai dat ben duoi (code, database, kien truc ho tro) dung sau giao dien. Dap an dung: \"Mo hinh thuc hien (Implementation model)\"."
  },
  {
    "id": 352,
    "question": "Trong kịch bản sau: \"Kỹ sư điều khiển một cánh tay robot thông qua một phần mềm điều khiển mô phỏng trên thiết bị di động\", đâu là tương tác?",
    "chapter": 11,
    "options": [
      "Kỹ sư",
      "Thiết bị di động",
      "Điều khiển cánh tay robot",
      "Robat",
      "Phần mềm mô phỏng"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 352: Tuong tac (Interaction) la DONG TU/Hanh dong giao tiep giua chu the va doi tuong. O day \"Thiet bi\", \"Ky su\", \"Robot\" la danh tu thuc the. \"Dieu khien\" la qua trinh tuong tac. Dap an dung: \"Dieu khien canh tay robot\"."
  },
  {
    "id": 354,
    "question": "Trong các mô thức đánh giá thiết kế, mô thức nào có vai trò của người dùng trong đánh giá là thấp nhất?",
    "chapter": 9,
    "options": [
      "Nghiên cứu thực địa",
      "Kiểm tra tính dùng được",
      "Vai trò của người dùng trong các mô thức đánh giá là như nhau",
      "Dự đoán",
      "Nhanh"
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
      "Khoảng trắng",
      "Số lượng font chữ",
      "Sự nổi bật của tiêu đề chính",
      "Số lượng hình ảnh",
      "Dữ liệu được hiển thị"
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
      "Các hình ảnh được thiết kế theo cùng một tiêu chuẩn",
      "Các ứng dụng phải được thiết kế giống các ứng dụng đã có",
      "Các phương pháp điều hướng nhạy cảm với ngữ cảnh",
      "Cơ chế input giống nhau trong suốt ứng dụng",
      "Mỗi ứng dụng phải có giao diện riêng biệt"
    ],
    "correctAnswers": [
      0,
      3
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
      "Ảnh",
      "Màu sắc",
      "Vị trí các khoảng trắng"
    ],
    "correctAnswers": [
      0,
      2,
      3
    ],
    "explanation": "Cau 357: Wireframe la \"ban phac thao khung xuong\" o dang trung thuc thap (Low-fidelity), chi xai thang mau xam (Grayscale), xai o gach cheo thay cho anh that, nham tap trung duyet BO CUC truoc. Dap an dung (cac yeu to KHONG co trong wireframe): \"Cac loai font chu\", \"Anh\", \"Mau sac\"."
  },
  {
    "id": 358,
    "question": "Người dùng đọc một trang web như thế nào?",
    "chapter": 10,
    "options": [
      "Xem các thành phần đồ họa trước, sau đó đọc text",
      "Từ phải sang trái, từ trên xuống dưới",
      "Từ trung tâm màn hình ra ngoài",
      "Người dùng không đọc, chỉ scan cả trang web để chọn các câu và từ riêng biệt",
      "Từ trái sang phải, từ trên xuống dưới"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 358: Theo nghien cuu mat cua Nielsen Norman Group, User hiem khi doc tung chu (read). Ho thuong \"quet\" (Scan) theo hinh chu F hoac chu Z de bat tu khoa (Keywords). Dap an dung: \"Nguoi dung khong doc, chi scan ca trang web de chon cac cau va tu rieng biet\"."
  },
  {
    "id": 359,
    "question": "Khái niệm nào sau đây KHÔNG PHẢI là ngôn ngữ thiết kế cho thiết bị di động?",
    "chapter": 11,
    "options": [
      "Responsive design",
      "Material design",
      "Metro design",
      "Flat design",
      "Skeuomorph design"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cau 359: Responsive Design la ky thuat CSS (Media queries) giup web co gian theo man hinh. Material (Google), Flat, Skeuomorph (Apple cu) moi la truong phai tham my (Ngon ngu thiet ke). Dap an dung: \"Responsive design\"."
  },
  {
    "id": 360,
    "question": "Đề xuất nào sau đây là SAI về tính dùng được của trò chơi di động?",
    "chapter": 11,
    "options": [
      "Xây dựng các yếu tố trò chơi dựa trên âm thanh",
      "Người dùng phải luôn có khả năng tạm dừng",
      "Chọn giải pháp đơn giản",
      "Tự động lưu trò chơi khi người dùng thoát khỏi trò chơi",
      "Không lãng phí thời gian của người dùng"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cau 360: Nguoi choi Mobile Game thuong choi o cho dong nguoi (bus, van phong) va tat tieng (Mute). Thiet ke core-game phu thuoc 100% vao am thanh se lam game khong the choi duoc. Dap an dung (cau SAI): \"Xay dung cac yeu to tro choi dua tren am thanh\"."
  },
  {
    "id": 361,
    "question": "Hai loại tương tác điều hướng cho thiết bị di động là:",
    "chapter": 11,
    "options": [
      "Drag & scroll",
      "Click & drag",
      "Click & scroll",
      "Touch & drag",
      "Touch & scroll"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 361: Tren dien thoai cam ung, hanh dong tu nhien nhat la Tap/Touch (cham) thay cho Click chuot, va Vuot/Scroll (cuon) de xem them noi dung. Dap an dung: \"Touch & scroll\"."
  },
  {
    "id": 362,
    "question": "Chỉ ra luồng thông tin thông thường trên thiết bị di động?",
    "chapter": 11,
    "options": [
      "Navigation - Header - Content - Footer",
      "Header - Content - Navigation - Footer",
      "Navigation - Content - Navigation - Footer",
      "Header - Navigation - Content - Navigation",
      "Header - Navigation - Content - Navigation - Footer"
    ],
    "correctAnswers": [
      4
    ],
    "explanation": "Cau 362: Bo cuc Mobile Web kinh dien: Phan dau (Header/Logo) -> Thanh Menu tren (Nav) -> Noi dung chinh -> Thanh phan trang/menu duoi (Nav) -> Chan trang (Footer). Dap an dung: \"Header - Navigation - Content - Navigation - Footer\"."
  },
  {
    "id": 363,
    "question": "Giao diện được thiết kế với nhiều hình ảnh chuyển động có thể:",
    "chapter": 10,
    "options": [
      "Làm người dùng phân tâm",
      "Gây chú ý nhiều hơn",
      "Tạo ra sản phẩm sinh động",
      "Tăng tính hấp dẫn",
      "Làm người dùng chăm chú"
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
      "Thay đổi sự tương tác",
      "Gây chói mắt",
      "Tăng khả năng tái sử dụng",
      "Đảm bảo tính rõ ràng",
      "Tăng chất lượng hiển thị"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 364: Contrast (Tuong phan) giua chu va nen (VD: Chu Den tren nen Trang) la yeu to hang dau trong chuan Accessibility (WCAG), giup chu sac net, Ro rang (Legibility). Dap an dung: \"Dam bao tinh ro rang\"."
  },
  {
    "id": 365,
    "question": "Mệnh đề nào sau đây là đúng?",
    "chapter": 4,
    "options": [
      "bước đầu tiên là xác định và phân loại người dùng tiềm năng trong tương lai",
      "Quy trình thiết kế lấy người dùng làm trung tâm không chú trọng vào việc định nghĩa tính dùng được, bao gồm tính dễ học, dễ sử dụng và phân khúc người dùng",
      "Với quy trình thiết kế lấy người dùng làm trung tâm",
      "cần chú trọng dự báo phân khúc thị trường để sản phẩm được thị trường chấp nhận",
      "Tại bước 3 của quy trình thiết kế lấy người dùng làm trung tâm, chỉ chú trọng vào người dùng vào giai đoạn cuối của thiết kế",
      "Tại bước 3 của quy trình thiết kế lấy người dùng làm trung tâm, cần đo đánh giá chất lượng sản phẩm từ quan điểm của người dùng",
      "Tại bước 3 của quy trình thiết kế lấy người dùng làm trung tâm"
    ],
    "correctAnswers": [
      0,
      2,
      3,
      6
    ],
    "explanation": "Cau 365: User-Centered Design LUON dinh nghia user dau tien. Buoc phan tich chien luoc (buoc 3 theo giao trinh nay) can du bao thi truong (Market segment) de dam bao App ban duoc. Dap an dung: \"UCD buoc dau la xac dinh phan loai nguoi dung tiem nang\", \"UCD buoc 3 chu trong du bao phan khuc thi truong chap nhan\"."
  },
  {
    "id": 366,
    "question": "Khi thiết kế giao diện cho các trò chơi trên thiết bị di động, chúng ta phải:",
    "chapter": 11,
    "options": [
      "Không cung cấp giải thưởng cho người chơi",
      "Hỗ trợ các tính năng tạm dừng (pause) và lưu (save)",
      "Bảo đảm người dùng luôn có kết nối mạng",
      "Bảo đảm các thành phần được thu nhỏ lại để vừa với màn hình di động",
      "Hỗ trợ nhiều tính năng thay vì tính đơn giản của trò chơi"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 366: Boi canh choi Mobile game mang tinh dut quang cao (dang choi thi co sep goi, dien thoai den, het tram xe bus). Do do nut Pause va Autosave la song con. Dap an dung: \"Ho tro cac tinh nang tam dung (pause) va luu (save)\"."
  },
  {
    "id": 367,
    "question": "Phát biểu nào sau đây là sai?",
    "chapter": 2,
    "options": [
      "Các thành phần nằm trong các lớp khác nhau có bóng đổ khác nhau",
      "Material Design sử dụng màu sắc rực rỡ",
      "Material Design là thiết kế phẳng",
      "Material Design được lấy cảm hứng từ thế giới vật chất và các kết cấu của nó, bao gồm cả cách chúng phản chiếu ánh sáng và đổ bóng",
      "Các phần tử trong Material Design có các độ cao khác nhau"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 367: Material Design (cua Google) CHONG LAI thiet ke phang truyen thong. No mo phong to giay (Material), xep chong len nhau theo truc Z (Do cao/Z-index) va co danh Bong do (Drop Shadow). Dap an dung (cau SAI): \"Material Design la thiet ke phang\"."
  },
  {
    "id": 368,
    "question": "Storyboarding là kỹ thuật tạo mẫu thử cho phép người thiết kế:",
    "chapter": 8,
    "options": [
      "Giới thiệu giao diện người dùng",
      "Tạo ra môi trường tương tác sống động như thật, chi tiết cho mọi người dùng",
      "Tập trung vào các nhiệm vụ người dùng đang thực hiện",
      "Thảo luận chi tiết về sản phẩm cuối cùng cũng như các kế hoạch đưa sản phẩm này ra thị trường",
      "Mô phỏng các hành vi tương tác và các chức năng ứng dụng cung cấp"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 368: Storyboard (Bang truyen) vay muon tu dien anh. No ve ra cac hoat canh mo ta \"Cau chuyen\" User dang o dau, thao tac lam viec/Task cua ho giai quyet van de doi song the nao. Dap an dung: \"Tap trung vao cac nhiem vu nguoi dung dang thuc hien\"."
  },
  {
    "id": 369,
    "question": "Wizard of Oz là kỹ thuật tạo mẫu thử cho phép người thiết kế:",
    "chapter": 8,
    "options": [
      "Thảo luận chi tiết về sản phẩm cuối cùng cũng như các kế hoạch đưa sản phẩm này ra thị trường",
      "Tập trung vào các nhiệm vụ người dùng đang thực hiện",
      "Vạch ra các kịch bản người dùng (user scenario) và các luồng hành vi của ứng dụng",
      "Mô phỏng các hành vi tương tác và các chức năng ứng dụng cung cấp",
      "Minh họa mục tiêu và các hoạt động cần thiết để thực hiện mục tiêu đó"
    ],
    "correctAnswers": [
      2,
      3
    ],
    "explanation": "Cau 369: Ky thuat \"Phu thuy xu Oz\" la cho User dung 1 ban Prototype trong nhu co AI that, nhung thuc ra co 1 nguoi dieu khien (phu thuy) nap o phong sau bam nut thay may. Ky thuat nay tuyet voi de Mo phong luong hanh vi tuong tac phuc tap (Voice AI) ma chua can code. Dap an dung: \"Vach ra cac kich ban nguoi dung (user scenario) va cac luong hanh vi\", \"Mo phong cac hanh vi tuong tac va cac chuc nang\"."
  },
  {
    "id": 370,
    "question": "Khi muốn phỏng vấn người dùng về cảm tưởng của họ với một tính năng của một ứng dụng cụ thể, nên sử dụng câu hỏi nào?",
    "chapter": 5,
    "options": [
      "Tính năng ABC của ứng dụng XYZ làm bạn hài lòng phải không?",
      "bạn cho tính năng ABC của ứng dụng XYZ bao nhiêu điểm hài lòng?",
      "Bạn nghĩ thế nào về tính năng ABC của ứng dụng XYZ?",
      "Trên thang điểm 100",
      "Hãy liệt kê một số nhược điểm của tính năng ABC của ứng dụng XYZ mà bạn không thích?",
      "Bạn có thích tính năng ABC của ứng dụng XYZ không?"
    ],
    "correctAnswers": [
      1,
      2,
      3
    ],
    "explanation": "Cau 370: Ky nang Phong van UX (User Interview) cam ky hoi cau Dan dat (Leading question - nhu \"Ban thich khong?\"). Phai hoi trung lap \"Ban nghi the nao\" de ho boc bach, va hoi thang diem de lay dinh luong. Dap an dung: \"Ban nghi the nao ve tinh nang ABC...?\", \"Tren thang diem 100, ban cho tinh nang ABC... bao nhieu diem?\""
  },
  {
    "id": 371,
    "question": "Bạn thực hiện mua sắm trên một trang thương mại điện tử. Bạn biết rằng nếu bạn đăng ký gói dịch vụ ưu đãi giao hàng của bên thứ 3, bạn sẽ được miễn phí 10 lần giao hàng. Tuy nhiên, bạn không biết là bạn sẽ được hưởng ưu đãi này ngay khi đăng ký trên trang thương mại điện tử, hay phải đợi đến lúc có xác nhận của nhà cung cấp gói dịch vụ ưu đãi giao hàng. Tiêu chí / nguyên tắc thiết kế nào dưới đây đã bị vi phạm?",
    "chapter": 7,
    "options": [
      "Trợ giúp và tài liệu (Help and documentation)",
      "Tính trực quan (Visibility)",
      "Dự báo lỗi (Error prevention)",
      "Quyền kiểm soát và quyền tự do của người dùng (User control and freedom)",
      "Giúp người dùng nhận biết, chẩn đoán và khắc phục lỗi (Help users recognize, diagnose, and recover from errors)"
    ],
    "correctAnswers": [
      0
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
      "Trợ giúp tương tác là nói với người dùng họ đang ở đâu, và họ có thể tiếp tục đi đến đâu",
      "Thiết kế giao diện cho các website và ứng dụng sử dụng giao thức web",
      "Điều hướng là việc cho phép người dùng di chuyển trong website"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 372: \"Noi voi user ho dang o dau va di den dau\" la dinh nghia cua BO DIEU HUONG (Navigation System - VD: Breadcrumbs). No khong phai dinh nghia cua cong cu \"Tro giup\" (Help). Dap an dung (cau SAI): \"Tro giup tuong tac la noi voi nguoi dung ho dang o dau, va ho co the tiep tuc di den dau\"."
  },
  {
    "id": 373,
    "question": "Đâu không phải nhiệm vụ chính của thiết kế giao diện web ?",
    "chapter": 10,
    "options": [
      "Thiết kế kết xuất nội dung",
      "Thiết kế hỗ trợ tương tác",
      "Thiết kế điều hướng",
      "Thiết kế dữ liệu",
      "Thiết kế nội dung"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Cau 373: UI Designer/Web Designer phu trach \"Be mat\" (Frontend): Bo cuc, Dieu huong, Font chu. Cau truc va Thiet ke Database (CSDL) la viec cua Ky su Backend/Data Architect. Dap an dung: \"Thiet ke du lieu\"."
  },
  {
    "id": 380,
    "question": "Chọn phát biểu sai đối với việc đánh giá tính dùng được của hệ tương tác?",
    "chapter": 9,
    "options": [
      "Đánh giá tổng kết được sử dụng để đánh giá mức độ đạt được các tiêu chí của tính dùng được",
      "Đánh giá hình thành được sử dụng để nhận biết tính dùng được",
      "Kiểm thử người dùng có thể là một đánh giá hình thành hoặc đánh giá tổng kết",
      "Đánh giá tính dùng được của hệ tương tác để xác định thiết kế tương tác đáp ứng yêu cầu người dùng",
      "Khi đánh giá tính dùng được của hệ tương tác, có thể đặt câu hỏi trực tiếp với người tham gia"
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
      "Đánh giá về khả năng sử dụng",
      "Đánh giá sự hài lòng của người dùng",
      "Xác định các vấn đề tồn tại của hệ thống đối với người dùng",
      "Khẳng định tính hiệu quả trong giao tiếp người dùng",
      "Khẳng định sự an toàn của hệ thống"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Cau 382: Danh gia tuong tac (Usability Testing) tim kiem loi UX, su thoa man va rao can thao tac. Xac dinh \"van de ton tai cua he thong\" (Bugs he thong/hong server/bao tri) thuoc ve System Testing. Dap an dung: \"Xac dinh cac van de ton tai cua he thong doi voi nguoi dung\"."
  },
  {
    "id": 383,
    "question": "Kỹ thuật kiểm thử người dùng trong môi trường làm việc của họ (onsite) và kỹ thuật kiểm thử người dùng tại nơi phát triển hệ tương tác (lab-based) giống nhau ở:",
    "chapter": 9,
    "options": [
      "Các yếu tố chi phối người dùng",
      "Đối tượng tham gia kiểm thử",
      "Điều kiện môi trường",
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
      "Đánh giá hình thành yêu cầu người dùng thực hiện một nhiệm vụ trên mẫu thử",
      "Đánh giá hình thành ghi lại những điều mà người dùng suy nghĩ",
      "Đánh giá hình thành bắt đầu từ mẫu thử độ tin cậy thấp",
      "Đánh giá hình thành cho phép kiểm tra các giả định",
      "Đánh giá hình thành t hu hút sự tham gia sớm của người dùng"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Cau 384: Danh gia hinh thanh tap trung phan tich task, su co xat cua nguoi thiet ke voi ban ve nhap. Viec bat nguoi dung lam bam suy nghi (Think Aloud) thuong la ky thuat ap dung pho bien trong Usability Testing luc chay thuc te. Dap an dung (phat bieu KHONG DUNG): \"Danh gia hinh thanh ghi lai nhung dieu ma nguoi dung suy nghi\"."
  },
  {
    "id": 385,
    "question": "Phát biểu nào sau đây là sai về người dùng trong đánh giá tính dùng được của hệ tương tác ?",
    "chapter": 1,
    "options": [
      "có thể dự đoán được người dùng sẽ làm gì",
      "thời gian làm việc của người dùng là một yếu tố quan trọng",
      "các đối tượng người dùng khác nhau có thể có kiến thức và kĩ năng khác nhau",
      "không biết giao diện tốt như thế nào cho đến khi người dùng sử dụng nó",
      "cần đánh giá về phản hồi cảm xúc của người dùng"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Cau 385: Nguyen tac so 1 trong nganh UX: \"Nguoi dung khong bao gio cu xu nhu ban nghi\". Ban KHONG THE du doan 100% huong click chuot cua ho, do la ly do chung ta buoc phai lam User Testing. Dap an dung (cau SAI): \"co the du doan duoc nguoi dung se lam gi\"."
  },
  {
    "id": 386,
    "question": "Phát biểu nào sau đây là sai về đánh giá tính dùng được?",
    "chapter": 1,
    "options": [
      "Không nên sử dụng hình thức đặt câu hỏi trực tiếp",
      "Đảm bảo tách biệt về không gian và thời gian giữa tester và người dùng",
      "Dữ liệu kiểm tra có thể được lấy từ nhật ký",
      "Chỉ nên sử dụng một phương pháp phù hợp",
      "Có thể sử dụng kinh nghiệm trong quá khứ của người dùng"
    ],
    "correctAnswers": [
      2,
      4
    ],
    "explanation": "Cau 386: Viec trich xuat Log file (Nhat ky) va hoi kinh nghiem qua khu (Retrospective) LA NHUNG PHUONG PHAP DUNG de danh gia Usability. Dap an dung theo dap an cua de: \"Du lieu kiem tra co the duoc lay tu nhat ky\", \"Co the su dung kinh nghiem trong qua khu cua nguoi dung\"."
  },
  {
    "id": 395,
    "question": "Khẳng định nào là đúng đối với kỹ thuật kiểm thử người dùng trong phòng thí nghiệm (chọn 3) ?",
    "chapter": 9,
    "options": [
      "có thể thực hiện tự nhiên mà không bị gián đoạn",
      "được thực hiện nhanh với các dữ liệu giống nhau",
      "xác định rõ ràng bối cảnh thực hiện",
      "với một nhiệm vụ cụ thể cho trước khả năng xảy ra lỗi là ít",
      "dùng để kiểm tra giả thiết cụ thể"
    ],
    "correctAnswers": [
      1,
      3,
      4
    ],
    "explanation": "Cau 395: Phong Lab la moi truong bi kiem soat cach ly, rat tot de Test cac thao tac tinh gio (gia thiet cu the), nhung vi xa roi moi truong thuc te (khong co sep goi, khong tieng on) nen user it mac loi phan tam hon. Dap an dung: \"dung de kiem tra gia thiet cu the\", \"duoc thuc hien nhanh voi cac du lieu giong nhau\", \"voi mot nhiem vu cu the cho truoc kha nang xay ra loi la it\"."
  },
  {
    "id": 400,
    "question": "Điều nào sau đây KHÔNG phải là ví dụ về tăng tốc?",
    "chapter": 7,
    "options": [
      "Tổ hợp phím Ctrl-S để lưu file trong ứng dụng soạn thảo văn bản Microsoft Word",
      "Thao tác vuốt để xóa trong iOS",
      "Phím F1 trên bàn phím",
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
      "Kích thước và chiều cao",
      "Hành động",
      "Thay đổi về ánh sáng",
      "Chuyển động",
      "Khoảng cách"
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
      "Mô tả hiệu năng của các thiết bị vào",
      "Mô hình hóa thời gian chuyển động đủ để vẽ một đối tượng",
      "Dự báo rằng thời gian cần thiết để nhanh chóng di chuyển đến một vị trí đích phụ thuộc vào khoảng cách tới đích và kích thước đích",
      "Đánh giá hệ thống mà thời gian cần thiết để định vị một đối tượng là không quan trọng",
      "Mô hình hóa thời gian chuyển động đủ để lựa chọn một đối tượng"
    ],
    "correctAnswers": [
      0,
      2,
      4
    ],
    "explanation": "Cau 402: Fitts's Law (T = a + b*log2(D/W + 1)) la cong thuc toan hoc huyen thoai trong UI. Nut bam cang TO (W) va khoang cach di chuyen chuot cang NGAN (D) thi ban bam nut do cang NHANH (T). Dap an dung: \"Mo ta hieu nang cua cac thiet bi vao\", \"Du bao rang thoi gian can thiet de nhanh chong di chuyen den mot vi tri dich phu thuoc vao khoang cach toi dich va kich thuoc dich\", \"Mo hinh hoa thoi gian chuyen dong du de lua chon mot doi tuong\"."
  },
  {
    "id": 403,
    "question": "Xác định các sơ suất của con người trong các tình huống sau:",
    "chapter": 2,
    "options": [
      "Khi bạn soạn một văn bản",
      "bạn gõ sai một từ tiếng Anh dù bạn biết từ đó đánh vần như thế nào",
      "Bạn cài đặt phần mềm MySQL để lưu trữ các dữ liệu cần khai thác bằng truy vấn SQL",
      "Bạn cài đặt phần mềm MS Excel trên máy tính để lưu trữ các dữ liệu cần khai thác bằng truy vấn SQL",
      "đặt máy tính lên trên bàn phủ khăn nỉ với hi vọng máy tính thoát nhiệt tốt hơn",
      "nhưng bạn quên mất mật khẩu quản trị để cài đặt phần mềm này",
      "Bạn cho rằng câu lệnh printf(\"%d\", z) trong ngôn ngữ lập trình C sẽ in ra màn hình được xâu z"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Cau 403: Slip la Truot/So suat. Loi tri nho (biet nhung quen mat pass) va Loi co bap (biet chu do nhung go truot phim) la Slip. Loi Mistake la khi hoan toan ngu ngoc/hieu sai luat (lay Excel lam SQL). Dap an dung: \"Khi ban soan mot van ban, ban go sai mot tu tieng Anh du ban biet tu do danh van nhu the nao\", \"Ban cai dat phan mem MySQL... nhung ban quen mat mat khau quan tri\"."
  },
  {
    "id": 404,
    "question": "Các phát biểu nào sau đây là đúng?",
    "chapter": 11,
    "options": [
      "Trong khung tương tác Abowd và Beale, phép dịch từ đầu ra đến người dùng (hay còn gọi là quan sát ) tương ứng với bước \"Đánh giá trạng thái hệ thống theo mục đích và chủ ý\" của chu trình Norman",
      "trình độ",
      "Material design là phương pháp thiết kế dành riêng cho các ứng dụng desktop",
      "Xét chức năng \"gọi điện thoại\" trên điện thoại di động. Khi có nhiều lớp người dùng khác nhau về năng lực hành vi",
      "lứa tuổi ... cần cung cấp nhiều kiểu tương tác khác nhau để thực hiện chức năng này",
      "Chất lượng giao tiếp phụ thuộc chất lượng tương tác",
      "Sự có mặt của người lạ trong môi trường làm việc thường không làm ảnh hưởng đến hiệu quả công việc của người sử dụng máy tính"
    ],
    "correctAnswers": [
      1,
      3,
      4,
      5
    ],
    "explanation": "Cau 404: Su linh hoat (Flexibility) trong Tuong tac yeu cau He thong phai cho phep User da dang hoa cach su dung (vd nguoi gia thich bam so tay, gioi tre thich truot danh ba, nguoi mu dung Voice). Dap an dung: \"Chat luong giao tiep phu thuoc chat luong tuong tac\", \"Xet chuc nang goi dien thoai tren di dong, can cung cap nhieu kieu tuong tac khac nhau cho cac lop user khac nhau\"."
  }
];
