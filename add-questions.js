const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'js', 'quiz-data.js');
let content = fs.readFileSync(dataPath, 'utf8');

let existing;
eval('existing = ' + content.replace('const quizData = ', '').replace(/;\s*$/, ''));

const existingIds = new Set(existing.map(q => q.id));

const newQuestions = [
  // ===== CHUONG I: CAC KIEU TUONG TAC & THIET KE GIAO DIEN CHUYEN BIET (CAU 102-112) =====
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
    "correctAnswers": [0],
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
    "correctAnswers": [1, 2, 3],
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
    "correctAnswers": [0, 3],
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
    "correctAnswers": [1],
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
    "correctAnswers": [3],
    "explanation": "Giai doan nhung nam 1980 la thoi hoang kim cua he dieu hanh MS-DOS va cac he thong dong lenh (CLI). Mac du giao dien do hoa (GUI) da bat dau duoc Xerox va Apple phat trien, nhung doi voi cac may tinh ca nhan pho thong thuong mai thoi ky do, giao dien van ban (Text-based / CLI) van la cong cu chu dao de tuong tac."
  },
  {
    "id": 109,
    "question": "Cong cu chu yeu de nguoi dung nhap lieu trong giao dien van ban la gi?",
    "chapter": 3,
    "options": ["Ban phim.", "Man hinh cam ung.", "Chuot.", "Cam bien van tay.", "Giong noi."],
    "correctAnswers": [0],
    "explanation": "Giao dien van ban (Text-based UI) dua hoan toan vao viec nhan cac chuoi ky tu dang dong lenh. Vi vay, ban phim (Keyboard) la thiet bi ngoai vi dau vao so khai va quan trong nhat de truyen tai du lieu truc tiep vao he thong xu ly dong lenh."
  },
  {
    "id": 110,
    "question": "Cong cu chu yeu de nguoi dung nhap lieu trong giao dien ngon ngu tu nhien la gi?",
    "chapter": 3,
    "options": ["Micro.", "Ban phim.", "Man hinh cam ung.", "Cam bien van tay.", "Chuot."],
    "correctAnswers": [0],
    "explanation": "Giao dien ngon ngu tu nhien (Natural Language Interface - NUI) cho phep nguoi dung ra lenh bang loi noi giong nhu giao tiep giua con nguoi voi nhau. Thiet bi thu am (Microphone) la kenh vao (input channel) co hoc cot loi de chuyen doi song am giong noi thanh tin hieu ky thuat so phuc vu xu ly ngon ngu tu nhien (NLP)."
  },
  {
    "id": 111,
    "question": "Cac cong cu chu yeu de nguoi dung nhap lieu trong giao dien tu nhien la gi?",
    "chapter": 3,
    "options": ["Micro.", "Ban phim.", "Man hinh cam ung.", "Cam bien van tay.", "Chuot."],
    "correctAnswers": [0, 2, 3],
    "explanation": "Giao dien tu nhien (Natural User Interface - NUI) huong den viec loai bo cac thiet bi trung gian nhan tao cung nhac nhu chuot hay ban phim vat ly. Thay vao do, no tan dung cac hanh vi sinh hoc nguyen ban cua con nguoi nhu: Cham truc tiep bang tay (Man hinh cam ung), Noi (Micro), hoac quet dac diem sinh trac hoc co the (Cam bien van tay)."
  },
  {
    "id": 112,
    "question": "Dac tinh nao khong duoc xem xet khi thiet ke he tuong tac theo khia canh cong thai hoc?",
    "chapter": 2,
    "options": ["Than thien voi nguoi dung.", "Nhat quan.", "Phu hop voi su khac biet cua nguoi dung.", "Phuc hoi.", "Huong dan nguoi dung."],
    "correctAnswers": [3],
    "explanation": "Cong thai hoc (Ergonomics) tap trung giai quyet cac van de tuong thich ve mat vat ly, sinh ly va gioi han co the cua con nguoi khi van hanh thiet bi. \"Phuc hoi\" (Recoverability) la mot thuoc tinh ky thuat phan mem thuoc nhom tinh dung duoc (Usability Heuristics) nham giup he thong khoi phuc sau loi du lieu, hoan toan khong thuoc pham tru do luong vat ly cua cong thai hoc."
  },

  // ===== CHUONG II: CAC MO HINH YEU CAU NGUOI DUNG & PHAN TICH NHIEM VU (CAU 113-127) =====
  {
    "id": 113,
    "question": "Mo hinh nao sau day khong duoc su dung de mo hinh hoa yeu cau nguoi dung?",
    "chapter": 5,
    "options": ["Mo hinh du doan.", "HTA (Hierarchy Task Analysis).", "OSTA.", "Mo hinh da cach nhin.", "SSM."],
    "correctAnswers": [1],
    "explanation": "HTA la mo hinh dung de phan ra nhiem vu (Task Analysis) thanh cac buoc thao tac cu the, phuc vu viec phan tich hanh vi nguoi dung lam gi tren may tinh. Trong khi do, OSTA (Open System Task Analysis), SSM (Soft Systems Methodology), va cac mo hinh da cach nhin (Multiview) la cac phuong phap luan dung de khao sat, dinh hinh va mo hinh hoa yeu cau cua nguoi dung tu giai doan so khai cua du an."
  },
  {
    "id": 114,
    "question": "Cac mo hinh nguoi dung nao sau day thuoc nhom cac mo hinh ky thuat xa hoi?",
    "chapter": 5,
    "options": ["SSM.", "Da cach nhin.", "Mo hinh nhan thuc.", "USTM/CUSTOM.", "OSTA."],
    "correctAnswers": [3, 4],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [1, 4],
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
    "correctAnswers": [1, 2],
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
    "correctAnswers": [0],
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
    "correctAnswers": [2, 4],
    "explanation": "Rang buoc logic (Logical Constraints) su dung moi quan he hop ly, tuong dong ve mat lap luan hoac thi giac de goi y hanh dong dung. Viec phoi ghep trung khop ma mau (xanh cam vao cong xanh, do cam vao cong do) hay viec nhin nhan dan o mat tren dia CD giup nguoi dung suy luan logic ra cach van hanh chinh xac cua thiet bi."
  },
  {
    "id": 121,
    "question": "Dau la mot mo hinh phan ra nhiem vu?",
    "chapter": 6,
    "options": ["OSTA.", "USTM.", "Mo hinh hinh sao.", "HTA (Hierarchical Task Analysis).", "Mo hinh thac nuoc."],
    "correctAnswers": [3],
    "explanation": "HTA la cong cu kinh dien nhat dung de phan ra mot nhiem vu lon (Goal) thanh mot cay phan cap cac nhiem vu con (Sub-tasks) va cac hanh dong (Actions), kem theo mot so do ke hoach thuc hien (Plan) ro rang."
  },
  {
    "id": 122,
    "question": "GOMS la cum tu viet tat cua tu nao?",
    "chapter": 6,
    "options": ["Goals Operators Methods Selections.", "Goal Operation Mechanism Selection.", "Goals Option Management System.", "Goal Orientation Methods Selections.", "Go Operator Mode Select."],
    "correctAnswers": [0],
    "explanation": "GOMS la mo hinh nhan thuc phan tich thao tac cua nguoi dung, viet tat cua: Goals (Muc tieu), Operators (Cac thao tac co ban), Methods (Cac phuong thuc/chuoi thao tac de dat muc tieu), va Selection rules (Cac quy tac lua chon phuong thuc toi uu)."
  },
  {
    "id": 123,
    "question": "TAG la cum tu viet tat cua tu nao?",
    "chapter": 6,
    "options": ["Teacher Advisor Grammar.", "Technical Advisory Group.", "Technique Architecture Graph.", "Task-Action Grammar.", "Test-Action Grade."],
    "correctAnswers": [3],
    "explanation": "TAG (Ngu phap Tac vu - Hanh dong) la mo hinh mo ta ngon ngu doi thoai cua he thong duoi dang cac quy tac ngu phap, giup do luong muc do nhat quan va do kho trong mo hinh nhan thuc cua nguoi dung khi chuyen dich tu y dinh (Task) sang hanh dong go phim/lenh cu the (Action)."
  },
  {
    "id": 124,
    "question": "Luat de mo ta van pham doi thoai BNF co dang nao?",
    "chapter": 6,
    "options": ["ten ::= bieu thuc", "ten:, ten, bieu thuc, ::=", "ten :: bieu thuc", "ten = bieu thuc", "ten => bieu thuc"],
    "correctAnswers": [0],
    "explanation": "Trong tin hoc va HCI, BNF (Backus-Naur Form) la cu phap mo ta van pham doi thoai. Quy tac cua no co cau truc chuan la ve trai chua thuc the doi thoai lien ket voi ve phai qua ky hieu dinh nghia ::=, co dang tong quat: ten_doi_thoai ::= bieu_thuc_hanh_dong."
  },
  {
    "id": 125,
    "question": "Dau la cac ky thuat su dung de thu thap yeu cau nguoi dung?",
    "chapter": 5,
    "options": ["Phong van.", "GOMS.", "USTA.", "Quan sat tu nhien.", "Phan tich tai lieu."],
    "correctAnswers": [0, 3, 4],
    "explanation": "Phong van (Interviews), Quan sat thuc te (Observations), va Nghien cuu tai lieu quy trinh cu (Studying documentation) la 3 ky thuat thu thap thong tin truc tiep tu nguoi dung va moi truong lam viec cua ho. GOMS la mo hinh phan tich hieu nang thao tac nhan thuc, khong dung de thu thap yeu cau ban dau."
  },
  {
    "id": 126,
    "question": "Cac mo thuc danh gia nao co ket qua danh gia mang tinh dinh luong?",
    "chapter": 9,
    "options": ["Quick and Dirty.", "Usability Testing.", "Field Studies.", "Predictive.", "Cognitive walkthrough."],
    "correctAnswers": [1, 2],
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
    "correctAnswers": [3],
    "explanation": "Viec \"khong the giam am luong khi da o muc 0\" la mot rang buoc logic/vat ly hien nhien cua he thong (he thong khong the co am luong am). Cac phuong an con lai deu su dung cac quy uoc van hoa pho bien da duoc dinh hinh trong tam tri con nguoi (nhu ky hieu X, hinh cai loa, hay ma mau xanh/do cua cuoc goi)."
  },

  // ===== CHUONG III: DANH GIA TRUC QUAN & CAC NGUYEN TAC CUA DONALD NORMAN (CAU 128-145) =====
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
    "correctAnswers": [0],
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
    "correctAnswers": [1],
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
    "correctAnswers": [0, 1],
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
    "correctAnswers": [1],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0, 1],
    "explanation": "Nguyen tac \"dam bao tinh dong\" (Closure) cua Shneiderman yeu cau mot chuoi hanh dong phai co diem dau, diem giua va thong diep hoan thanh ro rang o diem cuoi. Dieu nay tuong ung voi viec he thong phai hien thi truc quan (Visibility) cac buoc va dua ra phan hoi (Feedback) tuc thi de nguoi dung biet ho da hoan thanh nhiem vu thanh cong."
  },
  {
    "id": 134,
    "question": "Voi cung so luong nguoi dung, phuong phap thiet ke lay nguoi dung lam trung tam (UCD) nao sau day co chi phi thuc hien cao nhat?",
    "chapter": 4,
    "options": ["Interviews (Phong van).", "Participatory design.", "Workshop.", "Questionnaires.", "Focus groups."],
    "correctAnswers": [0],
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
    "correctAnswers": [0, 1, 2],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0, 1],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0, 1, 2],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0, 1],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0, 1],
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
    "correctAnswers": [0],
    "explanation": "Tinh dung duoc (Usability) la mot thuoc tinh khach quan cua san pham duoc do luong truc tiep thong qua hieu nang cua nguoi dung cuoi. No phu thuoc vao quy trinh thiet ke, cong nghe nen tang va phuong phap danh gia thuc nghiem, chu khong phu thuoc vao \"cam tinh ca nhan\" hay danh tinh cua nguoi ve ra giao dien do."
  },

  // ===== CHUONG IV: THIET KE WEB & THIET KE DI DONG (CAU 147-219) =====
  {
    "id": 147,
    "question": "Dau la cac nguyen tac cua thiet ke Web?",
    "chapter": 10,
    "options": ["To chuc.", "Tiet kiem.", "Giao tiep.", "Trang tri.", "Phuc tap."],
    "correctAnswers": [0, 1, 2],
    "explanation": "Day la 3 nguyen tac nen tang cua thiet ke thong tin tren Web: To chuc (Cung cap cau truc ro rang nhat quan), Tiet kiem (Toi gian cac yeu to truc quan thua), va Giao tiep (Trinh bay noi dung phu hop voi nang luc nhan thuc cua nguoi dung)."
  },
  {
    "id": 149,
    "question": "Cai nao khong phai la ngon ngu thiet ke thong dung cho cac ung dung di dong hien nay?",
    "chapter": 11,
    "options": ["Metro design.", "Skeuomorph design.", "Flat design.", "Material design.", "Thiet ke man hinh (Screen design)."],
    "correctAnswers": [4],
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
    "correctAnswers": [1],
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
    "correctAnswers": [0],
    "explanation": "Mot sai lam chet nguoi trong UX di dong la co gang thu nho giao dien may tinh de ban (Desktop UI) vua khit vao man hinh dien thoai di dong nho be. Thiet ke di dong doi hoi phai tu duy lai hoan toan boi canh su dung, thiet ke cac tuong tac cham ngon tay (Touch targets) thay the chuot, toi gian luong di va tang cuong tinh de di chuyen (Mobility)."
  },
  {
    "id": 153,
    "question": "Thuoc tinh co huu cua mo hinh tinh toan khap noi ma khong the xu ly nhu xu ly loi la:",
    "chapter": 12,
    "options": ["Mat ket noi.", "Thieu nang luong.", "Tan cong mang.", "Loi phan cung.", "Loi he dieu hanh."],
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
    "explanation": "Retrospective Testing la viec cho nguoi dung xem lai doan video ghi hinh thao tac cua chinh ho truoc do, roi phong van ho de giai thich ly do tai sao tai giay thu 45 ho lai khung lai phan van hoac bam nham nut. Dieu nay giup loai bo su sai lech cua tri nho sau khi hoan thanh task."
  },
  {
    "id": 160,
    "question": "Dau khong phai la khuyen cao khi thiet ke giao dien cho cac tro choi tren thiet bi di dong?",
    "chapter": 11,
    "options": [
      "Cung cap mot giai phap day du nhat co the.",
      "Chon giai phap don gian.",
      "Tu dong luu tro choi.",
      "Ho tro tam dung.",
      "Khong lang phi thoi gian nguoi dung."
    ],
    "correctAnswers": [0],
    "explanation": "Thiet ke game di dong doi hoi tinh toi gian cao (Minimalism) do gioi han khong gian hien thi va do tap trung ngan cua nguoi choi di dong. Co gang nhoi nhet \"day du moi tinh nang, menu phuc tap\" cua phien ban PC/Console vao di dong se lam qua tai nhan thuc cua nguoi choi."
  },
  {
    "id": 162,
    "question": "Dau khong phai la khuyen cao khi thiet ke giao dien cho cac tro choi tren thiet bi di dong?",
    "chapter": 11,
    "options": [
      "Loai bo cac chuc nang luu va tam dung.",
      "Chon giai phap don gian.",
      "Tu dong luu tro choi.",
      "Ho tro tam dung.",
      "Không lang phi thoi gian nguoi dung."
    ],
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0, 1],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
    "explanation": "Moi truong tuong tac bao gom toan bo boi canh vat ly, xa hoi, to chuc va cong nghe xung quanh nguoi dung khi ho thuc hien nhiem vu."
  },

  // ===== CHUONG V: THUC NGHIEM DANH GIA & DO LUONG DINH TINH / DINH LUONG (CAU 170-243) =====
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0, 1],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
    "explanation": "Think-aloud yeu cau nguoi dung noi ra hoac viet ra nhung suy nghi, cam nhan cua ho trong qua trinh thao tac."
  },
  {
    "id": 184,
    "question": "Mo hinh nao cho phep du bao day cac thao tac va thoi gian thuc hien theo mo hinh xu ly cua con nguoi?",
    "chapter": 6,
    "options": ["CMN GOMS.", "BNF.", "HTA.", "KLM GOMS.", "TAG."],
    "correctAnswers": [0],
    "explanation": "Card, Moran, va Newell GOMS (CMN-GOMS) la mo hinh goc phan tich nhan thuc con nguoi theo cac chuoi xu ly thong tin song song de tinh toan du bao chinh xac thoi gian thuc hien tac vu cua nguoi dung chuyen nghiep."
  },
  {
    "id": 185,
    "question": "Cach to chuc cua mot website duoc quy dinh boi cai gi?",
    "chapter": 10,
    "options": ["So do website (Site map).", "Luong duyet giua cac trang (User flow).", "Bo cuc trang web (Layout).", "Kieu chu.", "Tieu de cac noi dung."],
    "correctAnswers": [0, 1, 2],
    "explanation": "Ba yeu to nay dinh hinh nen cau truc xuong song, kien truc thong tin (Information Architecture) va phuong thuc to chuc noi dung tong the cua mot trang web. Kieu chu hay tieu de chi thuoc ve lop giao dien truc quan be mat (Surface)."
  },
  {
    "id": 186,
    "question": "Ky thuat tao mau thu nao cho phep tao ra cach hoat dong chi tiet cho mot so tinh nang duoc chon?",
    "chapter": 8,
    "options": ["Vertical prototypes (Mau thu chieu doc).", "Pencils and papers mockups.", "Wizard of Oz.", "Horizontal prototypes.", "Scenario."],
    "correctAnswers": [0],
    "explanation": "Mau thu chieu doc (Vertical Prototyping) dao sau chi tiet ky thuat va hanh vi hoat dong day du cua duy nhat mot vai tinh nang trong tam da chon, thay vi xay dung giao dien nong trai rong cho toan bo he thong (Horizontal Prototyping)."
  },
  {
    "id": 187,
    "question": "Dau la nhung nhan to anh huong den thanh cong cua thiet ke giao dien web?",
    "chapter": 10,
    "options": ["Tinh dung duoc (Usability).", "Tinh tien loi (Utility).", "Mau sac.", "Font chu.", "Hieu ung dong."],
    "correctAnswers": [0, 1],
    "explanation": "Su phoi hop giua Usability (su dung de dang) va Utility (cung cap dung chuc nang huu ich can thiet) se tao nen Tinh huu dung (Usefulness) cua he thong, quyet dinh su thanh cong cot loi cua website."
  },
  {
    "id": 188,
    "question": "Tinh huu dung (usefulness) cua mot he tuong tac duoc hieu la su phoi hop giua:",
    "chapter": 1,
    "options": ["Tinh dung duoc (usability).", "Tinh tien loi (Utility).", "Tinh bao mat.", "Tinh tham my.", "Chi phi thap."],
    "correctAnswers": [0, 1],
    "explanation": "Usefulness = Usability + Utility. Mot he thong co ich khi no vua de su dung (Usability) vua co dung chuc nang can thiet (Utility)."
  },
  {
    "id": 189,
    "question": "Cac hanh dong nao sau day thuoc ve quy trinh phat trien website?",
    "chapter": 10,
    "options": ["Tao noi dung.", "Chay thu.", "Bao tri.", "Cai dat.", "Tao ban tinh chinh."],
    "correctAnswers": [0],
    "explanation": "Viec \"Tao noi dung\" (Content Creation) la mot phan cot loi cua viec xay dung thong tin tren trang web."
  },
  {
    "id": 190,
    "question": "Chung ta su dung cac phuong thuc nao sau day de thu thap du lieu dinh luong?",
    "chapter": 9,
    "options": ["Performance measurement (Do hieu nang).", "User testing (Kiem thu nguoi dung).", "Phong van.", "Quan sat.", "Nghien cuu tai lieu."],
    "correctAnswers": [0, 1],
    "explanation": "Do hieu nang va User testing thu thap cac so lieu do luong duoc (thoi gian, ty le loi, so click) -> dinh luong."
  },
  {
    "id": 191,
    "question": "Chung ta su dung cac ky thuat nao sau day de danh gia hinh thanh?",
    "chapter": 9,
    "options": ["Pencils and papers mockups (Mau thu giay).", "Walkthrough (Duyet qua nhan thuc).", "Logging and tracking.", "Remote testing.", "Performance measurement."],
    "correctAnswers": [0, 1],
    "explanation": "Danh gia hinh thanh (Formative) thuong dung mau thu do tin cay thap (pencil/paper mockups) va ky thuat duyet qua nhan thuc (cognitive walkthrough) o giai doan som."
  },
  {
    "id": 192,
    "question": "Hanh dong nao sau day khong thuoc ve quy trinh phat trien website?",
    "chapter": 10,
    "options": ["Ket xuat noi dung (Rendering).", "Tao noi dung.", "Thiet ke giao dien.", "Kiem thu.", "Bao tri."],
    "correctAnswers": [0],
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
    "correctAnswers": [0, 1],
    "explanation": "HTA chi phan ra nhiem vu hanh vi cua con nguoi (ho lam gi de dat muc tieu). No hoan toan khong dac ta cau truc ngon ngu doi thoai cua may tinh (nhu BNF hay State Transition Diagrams) va cung khong co kha nang do luong hieu nang phan cung cua may tinh."
  },
  {
    "id": 197,
    "question": "De du doan thoi gian thuc hien cua nguoi dung, can su dung mo hinh nao?",
    "chapter": 6,
    "options": ["KLM GOMS (Keystroke-Level Model GOMS).", "CMN GOMS.", "BNF.", "HTA.", "TAG."],
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
    "explanation": "Material Design la ngon ngu thiet ke phi vat ly mo phong giay xep lop. No hoan toan KHONG PHAI la thiet ke phang (Flat Design) vi no su dung do sau (Elevation), truc Z va bong do (Shadows) de tao cau truc phan lop truc quan."
  },
  {
    "id": 204,
    "question": "Dau khong phai la nguyen tac heuristic de tinh chinh HTA?",
    "chapter": 6,
    "options": ["Dua vao cap hanh dong.", "Dam bao tinh can bang cua cac nhanh cay.", "Chia de tri.", "Khai quat hoa nhiem vu.", "Toi uu phan ra."],
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
    "explanation": "Thiet ke luong duyet (navigation flow) phu hop mang lai trai nghiem vua du, dap ung dung nhu cau ma khong gay qua tai hoac thieu hut thong tin."
  },
  {
    "id": 211,
    "question": "Dinh nghia cua ACM SIGCHI ve tuong tac nguoi may khong de cap den cac doi tuong nao sau day?",
    "chapter": 1,
    "options": ["Con nguoi.", "Moi truong phat trien.", "May tinh.", "He thong tuong tac.", "Hieu nang su dung."],
    "correctAnswers": [0, 1, 2],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0, 1, 2],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0, 1],
    "explanation": "Cac doi tuong nguoi dung co tri thuc va ngon ngu khac nhau bat buoc phai co cac ban thiet ke cau hoi rieng biet phu hop voi ho. Dac biet, noi dung bang hoi phai do nha nghien cuu kiem soat nghiem ngat ve tinh khach quan de tranh dinh kien (bias), khong the giao quyen quyet dinh noi dung cho nguoi dung."
  },
  {
    "id": 223,
    "question": "Van de nao sau day khong phai la van de chinh cua viec thu thap yeu cau nguoi dung?",
    "chapter": 5,
    "options": ["Ban chat cua ky thuat.", "Muc tieu.", "Lua chon nguoi tham gia.", "Quan he giua nhung nguoi tham gia.", "Dan dat yeu cau."],
    "correctAnswers": [0],
    "explanation": "Cac van de chinh trong thu thap yeu cau nguoi dung bao gom: muc tieu, chon nguoi tham gia, quan he giua cac ben, va dan dat yeu cau. \"Ban chat cua ky thuat\" khong phai van de chinh."
  },
  {
    "id": 224,
    "question": "\"_____ duoc thuc hien theo kich ban nhung nhung van de thu vi co the duoc kham pha sau hon. Loai phong van nay co the duy tri su can bang giua tinh phong phu cua noi dung phong van va kha nang mo rong kich ban phong van.\"",
    "chapter": 5,
    "options": ["Phong van ban cau truc.", "Phong van co cau truc.", "Phong van khong cau truc.", "Phong van nhom.", "Phong van sau."],
    "correctAnswers": [0],
    "explanation": "Phong van ban cau truc (Semi-structured interview) thiet lap mot bo khung cau hoi chuan bi truoc nhung cho phep nguoi phong van linh hoat dao sau, hoi them cac cau hoi phat sinh dua vao cau tra loi cua ung vien, ket hop hoan hao giua do rong va do sau thong tin."
  },
  {
    "id": 225,
    "question": "\"_____ duoc thuc hien theo mot kich ban chat che, thuong giong nhu mot bang cau hoi kieu phong van nay co the trien rong nhung co the thieu su phong phu ve mat noi dung phong van.\"",
    "chapter": 5,
    "options": ["Phong van co cau truc.", "Phong van ban cau truc.", "Phong van khong cau truc.", "Phong van nhom.", "Phong van sau."],
    "correctAnswers": [0],
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
    "correctAnswers": [0, 1],
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
    "correctAnswers": [0, 1, 2],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
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
    "correctAnswers": [0],
    "explanation": "Day la cot loi cua triet ly UI/UX. Phan mem lam ra phuc vu cho dai chung xa hoi voi moi trinh do, tuoi tac khac nhau. Thiet ke giao dien tot giup xoa bo rao can ky thuat, cho phep nhung nguoi khong biet lap trinh van van hanh he thong tron tru."
  },
  {
    "id": 241,
    "question": "\"_____ cung cap su hieu biet ve cac nhiem vu ma nguoi dung can thuc hien de dat duoc cac muc tieu nhat dinh.\"",
    "chapter": 6,
    "options": ["HTA (hierarchical task analysis).", "GOMS.", "BNF.", "TAG.", "OSTA."],
    "correctAnswers": [0],
    "explanation": "HTA (Hierarchical Task Analysis) la phuong phap phan tich nhiem vu phan cap, giup hieu ro cac buoc ma nguoi dung can thuc hien de hoan thanh muc tieu."
  },
  {
    "id": 242,
    "question": "\"_____ tham chieu toi cach doi tuong nen duoc su dung, mot manh moi truc quan ve chuc nang va cong dung cua doi tuong do.\"",
    "chapter": 7,
    "options": ["the cho (affordance).", "anh xa (mapping).", "rang buoc (constraints).", "phan hoi (feedback).", "truc quan (visibility)."],
    "correctAnswers": [0],
    "explanation": "Affordance la tinh chat goi y truc quan cua mot doi tuong ve cach no nen duoc su dung, nhu hinh dang cai nut goi y viec bam."
  },
  {
    "id": 243,
    "question": "\"_____ la cach bieu dien cau truc cua website.\"",
    "chapter": 10,
    "options": ["Site map (So do trang).", "Layout.", "Navigation.", "Wireframe.", "Content."],
    "correctAnswers": [0],
    "explanation": "So do trang (Site map) la bieu do the hien cau truc phan cap cua cac trang trong mot website, giup hieu ro cach to chuc thong tin."
  },

  // ===== CHUONG VI: QUY TRINH THIET KE LAP & CAC NGUYEN LY THI GIAC GESTALT (CAU 244-349) =====
  {
    "id": 244,
    "question": "Bang cau hoi thuc hien sau khi kiem thu tinh dung duoc (usability testing) thuong duoc su dung de do:",
    "chapter": 9,
    "options": ["Muc do hai long cua nguoi dung.", "Toc do xu ly.", "So loi lap trinh.", "Do phuc tap cua code.", "Chi phi phat trien."],
    "correctAnswers": [0],
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
    "correctAnswers": [0],
    "explanation": "Storyboarding thuong duoc thuc hien o giai doan thiet ke do tin cay thap (Lo-Fi) de phac hoa luong tuong tac cua nguoi dung."
  },
  {
    "id": 246,
    "question": "Cung cap cac tien ich gia tri gia tang, vi du nhu cac phim tat nham nang cao:",
    "chapter": 7,
    "options": ["Tinh nang suat.", "Tinh bao mat.", "Tinh tham my.", "Tinh tuong thich.", "Tinh mo rong."],
    "correctAnswers": [0],
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
    "correctAnswers": [0],
    "explanation": "Luong duyet (User flow / Information flow) la so do mo ta chinh xac buoc tiep theo nguoi dung phai bam vao dau, re nhanh logic the nao de di tu diem bat dau den diem hoan thanh muc tieu."
  },
  {
    "id": 250,
    "question": "Theo cac nguyen ly thiet ke cua Norman, banh xe giua 2 phim chuot phai / trai la _____ cua thao tac lan, khong phai thao tac nhan.",
    "chapter": 7,
    "options": ["The cho (Affordance).", "Anh xa (Mapping).", "Rang buoc (Constraint).", "Phan hoi (Feedback).", "Truc quan (Visibility)."],
    "correctAnswers": [0],
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
    "correctAnswers": [0],
    "explanation": "Feedback (Phan hoi) ngay lap tuc giup nguoi dung kiem chung xem hanh dong cua ho da tac dong the nao den trang thai may tinh. Thieu phan hoi, nguoi dung se tu suy dien bua bai va xay dung nen mot mo hinh nhan thuc sai lam ve cach hoat dong cua he thong."
  },
  {
    "id": 252,
    "question": "He tuong tac can quan tam den kha nang sai sot va so suat cua nguoi dung de tranh truong hop nguoi dung:",
    "chapter": 7,
    "options": ["Gap nhieu tinh huong phat sinh loi.", "Quen thao tac.", "Thoat ung dung.", "Tai lieu bi mat.", "Mat du lieu."],
    "correctAnswers": [0],
    "explanation": "He thong can du doan va phong truoc cac loi ma nguoi dung co the mac phai, giam thieu cac tinh huong loi phat sinh."
  },
  {
    "id": 253,
    "question": "He tuong tac can co tinh anh xa (mapping) de tranh truong hop nguoi dung:",
    "chapter": 7,
    "options": ["Nho nhieu.", "Bam nham.", "Thoat ung dung.", "Mat du lieu.", "Quen mat khau."],
    "correctAnswers": [0],
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
    "correctAnswers": [0],
    "explanation": "Rang buoc vat ly va the cho giup nguoi dung de dang nhan biet duoc hanh dong nao co the thuc hien va hanh dong nao khong, tranh tinh trang lung tung."
  },
  {
    "id": 255,
    "question": "He tuong tac can co tinh nhat quan de tranh truong hop nguoi dung:",
    "chapter": 7,
    "options": ["Nho nhieu.", "Quen thao tac.", "Bam nham.", "Thoat ung dung.", "Mat du lieu."],
    "correctAnswers": [0],
    "explanation": "Tinh nhat quan giup nguoi dung ap dung cac kien thuc da hoc tu phan nay sang phan khac cua ung dung, giam tai bo nho."
  }
];

// Check for duplicates
const toAdd = [];
for (const q of newQuestions) {
  if (!existingIds.has(q.id)) {
    toAdd.push(q);
    existingIds.add(q.id);
  } else {
    console.log(`Skipping duplicate id: ${q.id}`);
  }
}

// Merge and sort by id
const merged = [...existing, ...toAdd].sort((a, b) => a.id - b.id);
const output = 'const quizData = ' + JSON.stringify(merged, null, 2) + ';\n';
fs.writeFileSync(dataPath, output, 'utf8');
console.log(`Added ${toAdd.length} new questions. Total: ${merged.length}`);
