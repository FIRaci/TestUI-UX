const chapterKnowledge = {
  1: {
    title: "Chương 1: Tổng quan về HCI",
    summary: "Hệ tương tác là hệ thống chấp nhận đầu vào từ người dùng và cung cấp đầu ra. HCI là lĩnh vực liên ngành nghiên cứu thiết kế, đánh giá hệ thống tương tác. UX bao gồm cảm xúc, niềm tin, nhận thức trước-trong-sau khi sử dụng. Tính dùng được (Usability) theo ISO 9241-11: Hiệu quả, Năng suất, Hài lòng. Theo Nielsen: Dễ học, Hiệu quả, Dễ nhớ, Ít lỗi, Dễ chịu.",
    keyPoints: [
      "Hệ tương tác: input → xử lý → output",
      "HCI: liên ngành (CS, AI, Tâm lý, Thiết kế đồ họa...)",
      "UX: chủ quan, định tính > < Usability: khách quan, đo lường",
      "6 thành tố UX: Motivation, Expectation, Perception, Abilities, Flow, Culture",
      "Usability ISO: Effectiveness, Efficiency, Satisfaction",
      "Usability Nielsen: Learnability, Efficiency, Memorability, Errors, Satisfaction"
    ]
  },
  2: {
    title: "Chương 2: Con người và Máy tính",
    summary: "Con người là hệ thống xử lý thông tin với 4 kênh vào/ra: Thị giác, Thính giác, Xúc giác, Vận động. Công thái học nghiên cứu mối quan hệ sinh lý với không gian làm việc. Persona là nhân vật đại diện cho nhóm người dùng. Máy tính gồm thiết bị I/O, bộ nhớ, bộ xử lý.",
    keyPoints: [
      "Con người = bộ xử lý thông tin (memory, perception, motor skills)",
      "4 kênh giao tiếp: Thị giác, Thính giác, Xúc giác, Vận động",
      "Công thái học: bố trí thiết bị, ánh sáng, giảm mệt mỏi",
      "Persona: nhân vật đại diện cho nhóm người dùng mục tiêu",
      "Máy tính: I/O devices, Memory (RAM/HDD), Processing (Batch/Online)"
    ]
  },
  3: {
    title: "Chương 3: Giao diện của các hệ tương tác",
    summary: "UI gồm Input (bàn phím, chuột, cảm ứng, giọng nói) và Output (màn hình, âm thanh). 8 kiểu tương tác: Command line, Menus, Natural language, Q&A, Form fill-in, WIMP, Direct manipulation, VR. Giao diện tiến hóa: TUI → GUI → NUI → OUI. Mô hình PIE: Input → State change → Output.",
    keyPoints: [
      "8 kiểu tương tác: Command line, Menus, NL, Q&A, Form, WIMP, DM, VR",
      "WIMP = Windows, Icons, Menus, Pointers",
      "TUI (Text) → GUI (Graphical) → NUI (Natural) → OUI (Organic)",
      "NUI: Lắng nghe → Phân tích văn cảnh → Thực thi",
      "OUI: hình dạng thay đổi, không phân biệt input/output",
      "Mô hình PIE: Perception → Event → Display/Result"
    ]
  },
  4: {
    title: "Chương 4: Quy trình thiết kế",
    summary: "Thiết kế lấy người dùng làm trung tâm (UCD) bắt đầu từ nhu cầu người dùng, khác với System-centered design. ISO 9241-210: 6 nguyên tắc UCD. Quy trình lặp 4 bước: Hiểu bối cảnh → Đặc tả yêu cầu → Tạo giải pháp → Đánh giá. 5 giai đoạn thực tế: Analysis → Spec → Design → Prototype & Evaluate → Deploy.",
    keyPoints: [
      "UCD: Biết người dùng → thiết kế theo nhu cầu",
      "System-centered: Xây cái dễ nhất từ công cụ có sẵn",
      "ISO 9241-210: 6 nguyên tắc UCD",
      "4 bước lặp: Context → Requirements → Solutions → Evaluate",
      "5 giai đoạn: Analysis → Spec → Design → Prototype → Deploy",
      "Design gồm: sketches, wireframes, lo-fi prototype, style-guide"
    ]
  },
  5: {
    title: "Chương 5: Yêu cầu người dùng",
    summary: "Tháp nhu cầu: Functionality (đáy) → Usability (giữa) → Pleasure (đỉnh). 5 nhóm yêu cầu: Chức năng, Dữ liệu, Môi trường, Người dùng, Tính dùng được. 5 kỹ thuật thu thập: Khảo sát, Phỏng vấn, Quan sát, Nhóm tập trung, Nghiên cứu tài liệu. Các mô hình: OSTA, USTA, GOMS, KEYSTROKE.",
    keyPoints: [
      "Tháp nhu cầu: Functionality → Usability → Pleasure",
      "5 nhóm yêu cầu: Chức năng, Dữ liệu, Môi trường, Người dùng, Usability",
      "5 kỹ thuật: Khảo sất (câu hỏi đóng), Phỏng vấn (câu hỏi mở), Quan sát, Focus group, Nghiên cứu tài liệu",
      "3 dạng phỏng vấn: Có cấu trúc, Không cấu trúc, Bán cấu trúc",
      "Mô hình dự đoán: GOMS, KEYSTROKE"
    ]
  },
  6: {
    title: "Chương 6: Phân tích nhiệm vụ",
    summary: "Phân tích nhiệm vụ nghiên cứu Actions, Objects, Knowledge của người dùng. 4 phương pháp: Task Decomposition (HTA), Knowledge-based (GOMS), Entity-relation, Linguistic (TAG, BNF). HTA chia nhiệm vụ thành cây phân cấp với Plan chỉ thứ tự. GOMS: Goal → Operator → Methods → Selection.",
    keyPoints: [
      "3 yếu tố phân tích: Actions, Objects, Knowledge",
      "4 phương pháp: Task Decomposition, Knowledge-based, Entity-relation, Linguistic",
      "HTA: phân cấp nhiệm vụ + Plan chỉ thứ tự thực hiện",
      "GOMS: Goal (mục đích), Operator (thao tác), Methods (phương pháp), Selection (lựa chọn)",
      "Phân tích Trạng thái - Sự kiện: dùng Production rules",
      "Linguistic models: BNF, TAG"
    ]
  },
  7: {
    title: "Chương 7: Thiết kế giao diện",
    summary: "6 nguyên tắc Norman: Visibility, Feedback, Constraints, Mapping, Consistency, Affordances. 8 quy tắc vàng Shneiderman: Consistency, Shortcuts, Feedback, Closure, Error handling, Undo, Control, Reduce memory load. 2 loại nhất quán: Internal (trong app) và External (giữa các app).",
    keyPoints: [
      "6 nguyên tắc Norman: Visibility, Feedback, Constraints, Mapping, Consistency, Affordances",
      "Thế chỗ (Affordances): Vật lý (dựa thuộc tính) + Nhận thức (gợi ý/quy ước)",
      "Nhất quán: Internal (trong 1 app) vs External (giữa các app)",
      "8 quy tắc vàng Shneiderman: Consistency, Shortcuts, Feedback, Closure, Error handling, Undo, Locus of control, Reduce memory load",
      "Ví dụ vi phạm nhất quán ngoài: bàn phím số điện thoại vs máy tính"
    ]
  },
  8: {
    title: "Chương 8: Tạo mẫu thử",
    summary: "Mẫu thử (Prototype) là bản thiết kế thử nghiệm chưa hoàn thiện. Lo-Fi: chi phí thấp, làm nhanh, tập trung khái niệm. Hi-Fi: tương tác thật, giống sản phẩm cuối. Kỹ thuật Lo-Fi: Sketching, Storyboarding. Kỹ thuật Hi-Fi: Computer simulation (Vertical/Horizontal/Scenario), Wizard of Oz, Slideshow.",
    keyPoints: [
      "Mẫu thử: thiết kế thử nghiệm, chưa hoàn thiện, chi phí thấp",
      "Lo-Fi: bỏ chi tiết, tập trung khái niệm, làm nhanh, rẻ",
      "Hi-Fi: giống sản phẩm thật, tương tác được, tốn chi phí",
      "Lo-Fi techniques: Sketching, Storyboarding",
      "Hi-Fi techniques: Vertical/Horizontal/Scenario simulation, Wizard of Oz, Slideshow",
      "Wizard of Oz: người ẩn sau điều khiển hệ thống mô phỏng"
    ]
  },
  9: {
    title: "Chương 9: Kiểm tra đánh giá",
    summary: "Testing ≠ Evaluation. Testing: tìm bug kỹ thuật. Evaluation: kiểm tra tính dùng được. 4 mô thức: Quick & dirty, Usability testing, Field studies, Predictive. Phân loại: Formative (sớm, rẻ), Summative (cuối, đắt), Post-summative (sau triển khai). Kỹ thuật: Thinking Aloud, Shadowing, Logging, Retrospective.",
    keyPoints: [
      "Testing: lỗi kỹ thuật ≠ Evaluation: tính dùng được",
      "4 mô thức: Quick&dirty, Usability testing, Field studies, Predictive",
      "Formative: sớm, rẻ, thường xuyên → Summative: cuối, đắt, tập trung",
      "Post-summative: sau triển khai, chi phí sửa lỗi rất lớn",
      "Thinking Aloud: người dùng nói suy nghĩ khi dùng",
      "Shadowing: chuyên gia quan sát và tự giải thích",
      "Logging: ghi tự động, dữ liệu lớn, vấn đề đạo đức/riêng tư"
    ]
  },
  10: {
    title: "Chương 10: Thiết kế giao diện Web",
    summary: "Web design tập trung vào nội dung và điều hướng. Khác biệt Web vs GUI: Thiết bị đa dạng, tập trung vào duyệt tin, phụ thuộc mạng, bảo mật thấp, điều hướng bằng link. Nguyên tắc: Organization, Economy, Communication. 4 nguyên tắc kết xuất: Simplicity, Clarity, Distinctiveness, Emphasis.",
    keyPoints: [
      "Web: thiết kế nội dung + điều hướng, không chỉ dữ liệu",
      "Web vs GUI: thiết bị đa dạng, duyệt tin nhanh, mạng không ổn định, bảo mật thấp",
      "Người dùng web lướt (scan) chứ không đọc",
      "Menu: 7±2 mục, độ sâu 3-4 cấp",
      "Trang chủ: < 10 giây tải, trả lời: cung cấp gì? ai cung cấp? liên hệ?",
      "White space: tạo điểm nhấn, tăng đọc hiểu"
    ]
  },
  11: {
    title: "Chương 11: Thiết kế giao diện di động",
    summary: "Mobile computing: thiết bị di chuyển, không kết nối liên tục. Desktop vs Mobile: khác biệt về mục đích, nguồn/kết nối, input, hiển thị. Nguyên tắc: 'Mobile, không thu nhỏ', ưu tiên tính năng, thích ứng ngữ cảnh. Design languages: Skeuomorph, Flat, Modern/Metro, Material Design.",
    keyPoints: [
      "Mobile: tra cứu nhanh, giao tiếp tức thời, phụ thuộc pin",
      "Mất kết nối di động là phổ biến, không hẳn là lỗi",
      "Nguyên tắc: Mobile ≠ thu nhỏ Desktop, ưu tiên tính năng",
      "Skeuomorph: mô phỏng thực tế (iOS < 7)",
      "Flat Design: tối giản, không 3D/shadow, nhẹ",
      "Material Design: vật chất 3D, bóng đổ, màu đậm, Roboto/Noto"
    ]
  },
  12: {
    title: "Chương 12: Các giao diện khác (HMI)",
    summary: "HMI trong hàng không, ô tô và máy móc. Automotive HMI chuyển từ thụ động sang chủ động, đa phương thức. 11 kỹ thuật tương tác: Remote, Button/Touchscreen, Hard/Softkeys, Gesture, Voice, Eyetracking, Braincomputing, Multimodal. 3 nguyên tắc HMI ô tô: Historical, Consistency, State-based.",
    keyPoints: [
      "HMI: giao diện người-máy trong hàng không, ô tô, máy móc",
      "Automotive HMI: đa phương thức (voice, gesture, face, AR, fingerprint)",
      "11 kỹ thuật tương tác: Remote → Button → Gesture → Eye → Brain → Multimodal",
      "Nguyên tắc lịch sử: giữ trạng thái khi quay lại",
      "Nhất quán vị trí: nút Back cùng vị trí mọi app",
      "Tùy biến theo trạng thái vận hành: dừng vs đang chạy"
    ]
  },
  13: {
    title: "UX Tools: Persona, Story, Journey Map",
    summary: "9 công cụ UX: User Personas (chân dung), User Stories (câu chuyện), Empathy Map (bản đồ thấu cảm: Says/Thinks/Does/Feels), User Flows (luồng người dùng), User Scenarios (kịch bản), Sitemap (sơ đồ trang), Wireframe (khung), Storyboard (phân cảnh), Journey Map (bản đồ hành trình).",
    keyPoints: [
      "Persona: nhân vật đại diện, gồm nhân khẩu, mục tiêu, rào cản",
      "User Story: 'Là một [vai trò], tôi muốn [tính năng] bởi vì [lý do]'",
      "Empathy Map: Says - Thinks - Does - Feels (4 góc)",
      "User Flow: sơ đồ các bước + decision points",
      "Wireframe: khung xương, không màu sắc/hình ảnh thật",
      "Storyboard: khung hình truyện tranh mô tả tương tác",
      "Journey Map: bảng stages × actions/thoughts/emotions"
    ]
  }
};
