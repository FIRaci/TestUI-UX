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
    "question": "Bước nào sau đây là một trong sáu bước thực hiện theo USTM?",
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
    "question": "Bước nào sau đây là một trong sáu bước thực hiện theo USTM?",
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
