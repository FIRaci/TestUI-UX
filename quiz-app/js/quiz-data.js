const quizData = [
  {
    "id": 1,
    "question": "Phát biểu nào sau đây là đúng?",
    "chapter": 2,
    "options": ["Đĩa cứng là một dạng bộ nhớ ngắn hạn của máy tính", "Con người có hai loại tế bào cảm quang", "Con người có ba loại bộ nhớ", "Độ tương phản giữa màu chữ và màu nền nhỏ làm cho văn bản dễ đọc", "Con người có năm kiểu lập luận"],
    "correctAnswers": [1, 2],
    "explanation": "Đáp án đúng: B, C"
  },
  {
    "id": 3,
    "question": "Các thành phần chính của giao diện là:",
    "chapter": 1,
    "options": ["Con người, hệ thống", "Người dùng, hệ thống, đầu vào, đầu ra", "Con người, máy tính và giao diện", "Đầu vào, đầu ra", "Con người, máy tính, bối cảnh sử dụng và quy trình phát triển"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 4,
    "question": "Các thành phần chính của hệ tương tác là:",
    "chapter": 1,
    "options": ["Đầu vào, đầu ra", "Con người, máy tính, bối cảnh sử dụng và quy trình phát triển", "Con người, máy tính và giao diện", "Người dùng, hệ thống, đầu vào, đầu ra", "Con người, hệ thống"],
    "correctAnswers": [1],
    "explanation": "Đáp án đúng: B"
  },
  {
    "id": 5,
    "question": "Các yếu tố chính của ngữ cảnh tương tác là:",
    "chapter": 1,
    "options": ["Con người, máy tính và giao diện", "Đầu vào, đầu ra", "Người dùng, hệ thống, đầu vào, đầu ra", "Con người, máy tính, bối cảnh sử dụng và quy trình phát triển", "Con người, hệ thống"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 6,
    "question": "Phát biểu nào sau đây là sai ?",
    "chapter": 2,
    "options": ["Con người có năm kiểu lập luận", "Độ tương phản giữa màu chữ và màu nền nhỏ làm cho văn bản dễ đọc", "Con người có ba loại bộ nhớ", "Con người có hai loại tế bào cảm quang", "Đĩa cứng là một dạng bộ nhớ ngắn hạn của máy tính"],
    "correctAnswers": [0, 1, 4],
    "explanation": "Đáp án đúng: A, B, E"
  },
  {
    "id": 8,
    "question": "Mô hình nào cho phép mô tả người dùng làm gì, máy tính làm gì?",
    "chapter": 6,
    "options": ["PIE", "ERD (Entity Relationship Diagrams)", "HTA (Hierarchy Task Analysis)", "CSP (Communicating Sequential Process)", "ATN (Augmented Transition Networks)"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 10,
    "question": "Mô hình nào cho phép phân tích nhiệm vụ người dùng?",
    "chapter": 6,
    "options": ["OSTA (Open System Task Analysis)", "ERD (Entity Relationship Diagrams)", "CSP (Communicating Sequential Process)", "PIE", "HTA (Hierarchy Task Analysis)"],
    "correctAnswers": [0, 4],
    "explanation": "Đáp án đúng: A, E"
  },
  {
    "id": 12,
    "question": "Định nghĩa tương tác người máy của Baecker và Buxton đề cập đến những yếu tố nào sau đây?",
    "chapter": 1,
    "options": ["Quy trình", "Giao tiếp", "Hành động", "Quá trình", "Đối thoại"],
    "correctAnswers": [2, 3, 4],
    "explanation": "Đáp án đúng: C, D, E"
  },
  {
    "id": 15,
    "question": "Các yếu tố nào không được xét đến khi mô tả cách thức và bối cảnh sử dụng máy tính?",
    "chapter": 1,
    "options": ["Các thành phần xử lý của máy tính", "Các kĩ thuật đối thoại", "Môi trường và công việc", "Ứng dụng", "Sự phù hợp giữa con người và máy tính"],
    "correctAnswers": [0, 1],
    "explanation": "Đáp án đúng: A, B"
  },
  {
    "id": 16,
    "question": "Đâu là các chủ đề cần nghiên cứu về con người trong tương tác người máy?",
    "chapter": 2,
    "options": ["Phong tục tập quán", "Lập luận", "Thói quen", "Bộ nhớ", "Kênh vào ra"],
    "correctAnswers": [1, 3, 4],
    "explanation": "Đáp án đúng: B, D, E"
  },
  {
    "id": 17,
    "question": "Yếu tố nào KHÔNG được đề cập đến như là một bộ phận của máy tính trong tương tác với người dùng?",
    "chapter": 2,
    "options": ["Thiết bị vào ra", "Kiến trúc đối thoại", "Các kỹ thuật hội thoại", "Các loại hội thoại", "Bộ nhớ máy tính"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 22,
    "question": "Đo, đánh giá tính dùng được của các hệ tương tác là đo, đánh giá những gì?",
    "chapter": 1,
    "options": ["Năng suất", "Hiệu quả", "Giá thành", "Mức độ thỏa mãn", "Số chức năng tương tác"],
    "correctAnswers": [0, 1, 3],
    "explanation": "Đáp án đúng: A, B, D"
  },
  {
    "id": 23,
    "question": "Quy trình mô hình hoá yêu cầu người dùng theo OSTA gồm bao nhiêu bước ?",
    "chapter": 5,
    "options": ["8", "7", "14", "2", "5"],
    "correctAnswers": [0],
    "explanation": "Đáp án đúng: A"
  },
  {
    "id": 25,
    "question": "Tính dùng được nghĩa là:",
    "chapter": 1,
    "options": ["Ít động não, ít động chân tay", "Năng suất, hiệu quả, thỏa mãn", "Ít động não, ít động chân tay, mang lại trải nghiệm thú vị khi tương tác", "Năng suất, chất lượng, hiệu quả", "Dễ học, dễ dùng"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 26,
    "question": "Quy trình thiết kế tương tác gồm bao nhiêu bước?",
    "chapter": 4,
    "options": ["2", "8", "14", "5", "7"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 27,
    "question": "Tương tác theo mô hình chu trình thực hiện đánh giá gồm bao nhiêu giai đoạn?",
    "chapter": 1,
    "options": ["7", "5", "2", "8", "14"],
    "correctAnswers": [0],
    "explanation": "Đáp án đúng: A"
  },
  {
    "id": 28,
    "question": "Các tiêu chí nào sau đây dùng để đo đánh giá tính dùng được:",
    "chapter": 1,
    "options": ["Năng suất, chất lượng, hiệu quả", "Năng suất, hiệu quả, thỏa mãn", "Ít động não, ít động chân tay, mang lại trải nghiệm thú vị khi tương tác", "Ít động não, ít động chân tay", "Dễ học, dễ dùng"],
    "correctAnswers": [1],
    "explanation": "Đáp án đúng: B"
  },
  {
    "id": 29,
    "question": "Cái gì không phải là thành phần cấu thành hệ tương tác?",
    "chapter": 1,
    "options": ["Quy trình phát triển hệ thống", "Cách dùng và bối cảnh sử dụng máy tính", "Các đặc tính của con người", "Các đặc tính của hệ thống máy tính và kiến trúc giao diện", "Quá trình sử dụng máy tính."],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 30,
    "question": "Nghiên cứu về công thái học giúp người phát triển tạo ra các hệ thống:",
    "chapter": 1,
    "options": ["Có tính bảo mật cao", "An toàn và dùng được", "Với nhiều chức năng phức tạp và giao diện đồ họa đẹp", "Phù hợp với đặc tả chức năng", "Phù hợp với các đặc tính vật lý của tương tác"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 31,
    "question": "Đâu là đặc trưng của bộ nhớ dài hạn:",
    "chapter": 2,
    "options": ["Hư hỏng nhanh (200ms)", "Khả năng nhớ hạn chế 7+/- 2 mục", "Cấu trúc tuyến tính", "Thời gian truy cập nhanh (700ms)", "Thông tin được lưu theo cách viết đè"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 32,
    "question": "Các thiết bị nào là thiết bị ra?",
    "chapter": 2,
    "options": ["Bảng vẽ", "Máy in", "Loa", "Chuột", "Bàn phím"],
    "correctAnswers": [1, 2],
    "explanation": "Đáp án đúng: B, C"
  },
  {
    "id": 33,
    "question": "Các thiết bị nào là thiết bị vào?",
    "chapter": 2,
    "options": ["Chuột", "Máy in", "Bàn phím", "Loa", "Bảng vẽ"],
    "correctAnswers": [0, 2, 4],
    "explanation": "Đáp án đúng: A, C, E"
  },
  {
    "id": 34,
    "question": "Khả năng tiếp nhận âm thanh của con người phụ thuộc vào các yếu tố nào sau đây?",
    "chapter": 2,
    "options": ["Tiếng vọng", "Độ vang", "Âm điệu", "Tần số", "Cường độ âm thanh"],
    "correctAnswers": [2, 3, 4],
    "explanation": "Đáp án đúng: C, D, E"
  },
  {
    "id": 35,
    "question": "Người dùng quan tâm những gì khi tương tác với hệ thống?",
    "chapter": 3,
    "options": ["Tốc độ hoạt động của hệ thống", "Hệ thống chạy trên nền tảng nào", "Lỗi của hệ thống", "Cách thức hoạt động của hệ thống", "Đầu vào và đầu ra của hệ thống"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 36,
    "question": "Những gì không phải đặc điểm của kiểu tương tác dòng lệnh?",
    "chapter": 2,
    "options": ["Ít sai sót", "Thích hợp với chuyên gia", "Dễ thích ứng dễ sửa lỗi", "Thích hợp với nhiệm vụ có tính lặp lại", "Không tốn công đào tạo"],
    "correctAnswers": [0, 2, 4],
    "explanation": "Đáp án đúng: A, C, E"
  },
  {
    "id": 37,
    "question": "Góc nhìn phụ thuộc vào những yếu tố nào sau đây?",
    "chapter": 2,
    "options": ["Độ sáng, kích thước đối tượng và khoảng cách từ đối tượng đến mắt", "Khoảng cách từ đối tượng đến mắt", "Độ sáng", "Kích thước đối tượng", "Kích thước đối tượng và khoảng cách từ đối tượng đến mắt"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 38,
    "question": "Đâu là mô thức cho phép người dùng tương tác mà không cần tập trung hình thành chủ ý ?",
    "chapter": 12,
    "options": ["Mô thức xử lý theo lô", "Mô thức WWW", "Mô thức phân chia thời gian", "Mô thức tính toán khắp nơi", "Mô thức mạng"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 39,
    "question": "Lựa chọn nào sau đây không phải là một mức yêu cầu người dùng?",
    "chapter": 4,
    "options": ["Hiệu quả", "Chức năng", "Năng suất", "Dùng được", "Hài lòng"],
    "correctAnswers": [0, 2],
    "explanation": "Đáp án đúng: A, C"
  },
  {
    "id": 40,
    "question": "Cần biết những gì về người dùng để xây dựng thành công hệ thống tương tác?",
    "chapter": 5,
    "options": ["Giới tính người dùng", "Khả năng ăn uống", "Khả năng tâm lý, khả năng tâm sinh lý", "Hoàn cảnh gia đình của người dùng", "Học vấn của người dùng"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 41,
    "question": "Hệ vận động cung cấp các chức năng tích hợp từ các hệ thống nào sau đây?",
    "chapter": 2,
    "options": ["Hệ tiêu hóa", "Hệ khớp", "Hệ tuần hoàn", "Hệ thần kinh", "Hệ cơ"],
    "correctAnswers": [1, 3, 4],
    "explanation": "Đáp án đúng: B, D, E"
  },
  {
    "id": 42,
    "question": "Thời gian lưu lại thông tin của bộ nhớ cảm nhận thị giác là bao nhiêu?",
    "chapter": 2,
    "options": ["Khoảng 500ms", "Khoảng 1200ms", "Khoảng 700ms", "Khoảng 200ms", "Khoảng 1500ms"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 43,
    "question": "Nghiên cứu về HCI giúp người phát triển tạo ra các hệ thống:",
    "chapter": 1,
    "options": ["Có tính bảo mật cao", "An toàn và dùng được", "Với nhiều chức năng phức tạp và giao diện đồ họa đẹp", "Phù hợp với đặc tả chức năng", "Phù hợp với các đặc tính vật lý của tương tác"],
    "correctAnswers": [1],
    "explanation": "Đáp án đúng: B"
  },
  {
    "id": 44,
    "question": "Mô hình tương tác bằng thị giác là sự phụ thuộc của cảm nhận thị giác vào những yếu tố nào?",
    "chapter": 2,
    "options": ["Màu sắc, ánh sáng", "Ánh sáng, độ sáng tối, độ tương phản", "Ánh sáng, độ sáng tối, màu sắc, kích thước", "Kích thước, màu sắc", "Độ tương phản"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 45,
    "question": "Những gì ảnh hưởng đến việc lựa chọn các phương pháp thu thập yêu cầu người dùng?",
    "chapter": 5,
    "options": ["Địa điểm và khả năng tiếp cận các bên liên quan", "Quy trình", "nguyên tắc và chuẩn thu thập thông tin", "Nguồn thông tin cần thu thập", "Loại thông tin muốn thu thập", "Nhóm tập trung"],
    "correctAnswers": [0, 3, 4],
    "explanation": "Đáp án đúng: A, D, E"
  },
  {
    "id": 46,
    "question": "Yếu tố nào khó để nhận biết nhất đối với hệ thống thị giác?",
    "chapter": 2,
    "options": ["Biểu tượng", "Góc nhìn", "Họa tiết", "Màu sắc", "Hình dạng"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 47,
    "question": "Những yếu tố nào sau đây ảnh hưởng đến nhận thức trực quan của thị giác?",
    "chapter": 2,
    "options": ["Khoảng cách", "Kích thước và chiều cao", "Sự thay đổi của độ sáng", "Sự chuyển động", "Độ tương phản"],
    "correctAnswers": [0, 1],
    "explanation": "Đáp án đúng: A, B"
  },
  {
    "id": 48,
    "question": "Thời gian lưu lại thông tin của bộ nhớ cảm nhận thính giác là bao nhiêu?",
    "chapter": 2,
    "options": ["Khoảng 500ms", "Khoảng 200ms", "Khoảng 700ms", "Khoảng 1200ms", "Khoảng 1500ms"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 49,
    "question": "Da người có thể cảm nhận được các kích thích nào sau đây?",
    "chapter": 2,
    "options": ["Sức căng do áp suất", "Đáp ứng nhanh và chậm (cơ học)", "Tiếng ồn", "Nhiệt", "Ánh sáng"],
    "correctAnswers": [0, 1, 3],
    "explanation": "Đáp án đúng: A, B, D"
  },
  {
    "id": 50,
    "question": "Nguyên tắc nào sau đây không phải là nguyên tắc thiết kế của Shneiderman?",
    "chapter": 7,
    "options": ["Tính ánh xạ", "Thiết kế hội thoại đảm bảo tính đóng", "Cung cấp phím tắt", "Cung cấp thông tin phản hồi cho tất cả các hành động", "Tính nhất quán"],
    "correctAnswers": [0],
    "explanation": "Đáp án đúng: A"
  },
  {
    "id": 51,
    "question": "Yêu cầu người dùng được hình dung theo 3 mức cao dần là:",
    "chapter": 4,
    "options": ["Hài lòng >> Chức năng >> Sử dụng", "Chức năng >> Hài lòng >> Sử dụng", "Hài lòng >> Sử dụng >> Chức năng", "Chức năng >> Sử dụng >> Hài lòng", "Sử dụng >> Chức năng >> Hài lòng"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 52,
    "question": "Thể thống nhất xuất hiện dựa vào tính tương tự khi nào trong các trường hợp sau đây?",
    "chapter": 2,
    "options": ["Khi các đối tượng có một phần tử được nhận biết như là một sự nối dài của phần tử khác", "Khi đối tượng có các hình ảnh xuất hiện một cách không đầy đủ", "Khi các đối tượng phân biệt có các thuộc tính trực quan tương tự nhau", "Khi các đối tượng chứa các thông tin tương tự với các thông tin đã biết", "Khi các đối tượng gần nhau"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 53,
    "question": "Lập luận phản chứng là:",
    "chapter": 2,
    "options": ["Từ những giả thiết có sẵn dẫn dắt để đi tới điều cần chứng minh là đúng", "Sử dụng toán học để chứng minh luận điểm", "Dùng những chứng cứ thu thập trong quá trình quan sát để đi tới kết luận", "Tư duy bằng các phương pháp luận giữa con người và thế giới tự nhiên", "Tư duy trong trường hợp đối lập so với luận điểm cần chứng minh, từ đó chứng minh điều tư duy là sai dẫn tới điều cần chứng minh là đúng"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 54,
    "question": "Khi xây dựng hệ tương tác, cần quan tâm đến những khía cạnh nào của các nhiệm vụ cần yêu cầu hệ thống thực hiện?",
    "chapter": 6,
    "options": ["Các bước cài đặt nhiệm vụ", "Độ phức tạp về mặt tính toán của nhiệm vụ", "Số lượng môđun cần thiết để cài đặt nhiệm vụ", "Bộ nhớ máy tính cần thiết để thực hiện nhiệm vụ", "Cách thức tổ chức và môi trường xung quanh của nhiệm vụ đó"],
    "correctAnswers": [1],
    "explanation": "Đáp án đúng: B"
  },
  {
    "id": 55,
    "question": "Phát biểu nào về hệ thống thính giác của con người sau đây là sai?",
    "chapter": 2,
    "options": ["Ngưỡng nghe là 0 - 130dB", "Khi cảm nhận thông tin, hệ thống thính giác cần lọc bỏ tạp âm để giữ lại thông tin cần thiết", "Con người có thể nghe được những âm thanh trong khoảng 15Hz đến 20 KHz", "Tần số khác nhau kích thích vùng cảm nhận khác nhau của não gây xung động khác nhau", "Khả năng tiếp nhận của hệ thống thính giác phụ thuộc vào các yếu tố: độ vang, âm sắc, tần số"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 56,
    "question": "Điều nào sau đây đúng khi nói về hiệu ứng Muller-Lyer?",
    "chapter": 2,
    "options": ["Hiệu ứng Muller-Lyer không làm thay đổi cảm nhận về kích thước của vật được quan sát", "Hiệu ứng Muller-Lyer làm méo hình dạng của vật được quan sát", "Hiệu ứng Muller-Lyer làm thay đổi cảm nhận về kích thước và hình dạng của vật được quan sát", "Hiệu ứng Muller-Lyer làm biến đổi liên tục màu sắc của vật được quan sát", "Hiệu ứng Muller-Lyer làm người quan sát cảm nhận kích thước của vật được quan sát lớn hơn kích thước thật"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 57,
    "question": "Câu nào sau đây là sai khi nói về bộ nhớ dài hạn?",
    "chapter": 2,
    "options": ["Dùng để lưu trữ các thông tin của con người", "Bộ nhớ dài hạn thường được xử lý thông qua 3 giai đoạn", "Có 2 loại bộ nhớ dài hạn đó là: bộ nhớ phân đoạn và bộ nhớ ngữ nghĩa", "Khả năng lưu trữ của bộ nhớ dài hạn là vô hạn", "Thời gian nhớ lại của các thông tin ít sử dụng thường lâu hơn các thông tin hay sử dụng"],
    "correctAnswers": [1],
    "explanation": "Đáp án đúng: B"
  },
  {
    "id": 58,
    "question": "Các lỗi nào sau đây là sơ suất?",
    "chapter": 2,
    "options": ["Người dùng biết dấu X trên cửa sổ là đóng cửa sổ nhưng lại ấn nhầm dấu bên cạnh \"_\" là ẩn cửa sổ", "Người dùng có suy nghĩ Ctrl+S là thoát ứng dụng Word", "Người dùng dùng Microsoft Word nghĩ phím nhanh Ctrl+C là dán đoạn văn bản", "Người dùng nghĩ copy cả đoạn văn bản trong Word là tổ hợp phím Ctrl+X", "Người dùng có ý định ấn vào nút thu nhỏ cửa sổ nhưng lại ấn nhầm sang nút đóng cửa sổ"],
    "correctAnswers": [0, 4],
    "explanation": "Đáp án đúng: A, E"
  },
  {
    "id": 59,
    "question": "Các trường hợp nào sau đây là được coi là sai sót của người dùng?",
    "chapter": 2,
    "options": ["Người dùng dùng Microsoft Word nghĩ phím nhanh Ctrl+C là dán đoạn văn bản", "Người dùng nhầm tưởng nút lưu văn bản là nút in văn bản", "Người dùng có suy nghĩ Ctrl+X là thoát ứng dụng Word", "Người dùng biết là nhấn Ctrl+K để share tài liệu nhưng lại ấn nhầm Ctrl+O", "Người dùng không biết dùng tổ hợp phím tắt nào để copy cả đoạn văn bản trong Word"],
    "correctAnswers": [0, 1],
    "explanation": "Đáp án đúng: A, B"
  },
  {
    "id": 60,
    "question": "Đâu là ưu điểm khi sử dụng cách tương tác bằng ngôn ngữ tự nhiên?",
    "chapter": 3,
    "options": ["Phù hợp với các công nghệ hiện tại", "Thích hợp với tất cả các thiết bị điện tử hiện tại", "Người dùng thoải mái đối thoại ra lệnh cho hệ thống như đối tượng con người thực sự", "Con người không phải học một cú pháp lệnh hay một phương pháp hoạt động của hệ tương tác", "Sử dụng ngôn ngữ tự nhiên luôn luôn thu hút người dùng hơn là lựa chọn qua màn hình hiển thị"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 61,
    "question": "Kênh vào của hệ thống xử lý thông tin của con người là:",
    "chapter": 2,
    "options": ["Các cơ quan tiếp nhận các kích thích từ môi trường bên ngoài", "Kênh ra", "Bất cứ bộ phận nào của cơ thể thực hiện việc hồi đáp các kích thích từ môi trường bên ngoài", "Các giác quan", "Các loại bộ nhớ"],
    "correctAnswers": [0],
    "explanation": "Đáp án đúng: A"
  },
  {
    "id": 62,
    "question": "Kênh ra của hệ thống xử lý thông tin của con người là:",
    "chapter": 2,
    "options": ["Các loại bộ nhớ", "Kênh vào", "Các giác quan", "Các cơ quan tiếp nhận các kích thích từ môi trường bên ngoài", "Bất cứ bộ phận nào của cơ thể thực hiện việc hồi đáp các kích thích từ môi trường bên ngoài"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 63,
    "question": "Đâu là mô tả sai về bộ nhớ ngắn hạn:",
    "chapter": 2,
    "options": ["Khả năng hạn chế", "Thông tin của bộ nhớ ngắn hạn được lấy từ bộ nhớ cảm nhận", "Thời gian truy cập nhanh", "Thông tin từ bộ nhớ ngắn hạn bị quên hoặc được chuyển dịch sang bộ nhớ cảm nhận", "Hư hỏng nhanh"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 64,
    "question": "Đáp án nào miêu tả đúng tính trực quan trong nguyên tắc thiết kế giao diện của Norman?",
    "chapter": 7,
    "options": ["Người dùng có thấy các chức năng của hệ thống cung cấp hay không", "Icon của sản phẩm phải bắt mắt", "Các icon trên giao diện phải thể hiện được các chức năng", "Giao diện của sản phẩm phải rực rỡ", "Giao diện tối giản nhất là giao diện tốt nhất"],
    "correctAnswers": [0],
    "explanation": "Đáp án đúng: A"
  },
  {
    "id": 65,
    "question": "Tính năng nào sau đây không phải là cung cấp thông tin phản hồi cho hành động người dùng?",
    "chapter": 7,
    "options": ["Khi có cuộc gọi đến, ngắt các âm thanh từ các ứng dụng như media player đang hoạt động ... và ưu tiên dành cho âm cuộc gọi", "Yêu cầu xác nhận lại khi xóa một thứ", "Hiển thị thông báo lỗi cho người dùng", "Sau khi nhấn nút, nút bị mờ đi", "Sau khi nhấn nút, có tiếng kêu phát ra"],
    "correctAnswers": [0],
    "explanation": "Đáp án đúng: A"
  },
  {
    "id": 66,
    "question": "Tính phản hồi được thể hiện trong ví dụ nào sau đây?",
    "chapter": 7,
    "options": ["Sau khi nhấn nút, nút bị mờ đi", "Hiển thị thông báo lỗi cho người dùng", "Yêu cầu xác nhận lại khi xóa một thứ", "Sau khi nhấn nút, có tiếng kêu phát ra", "Khi có cuộc gọi đến, ngắt các âm thanh từ các ứng dụng như media player đang hoạt động ... và ưu tiên dành cho âm cuộc gọi"],
    "correctAnswers": [0, 1, 3],
    "explanation": "Đáp án đúng: A, B, D"
  },
  {
    "id": 67,
    "question": "Tính thế chỗ được thể hiện trong ví dụ nào sau đây?",
    "chapter": 7,
    "options": ["Biểu tượng hình tin nhắn ở giao diện lại khác nhau", "Người dùng vuốt thanh cuộn lên trên mà màn hình lại di chuyển xuống dưới", "Khi có cuộc gọi đến, điện thoại ngắt các âm thanh từ các ứng dụng đang hoạt động ... và ưu tiên dành cho âm cuộc gọi", "Khi có cuộc gọi đến, nút kéo trên thanh cuộn nằm ở vị trí bên trái, nổi và có hình mũi tên hướng sang phải", "Nút gọi đổi từ màu xanh sang màu đỏ sau khi nhấn"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 68,
    "question": "Tính nhất quán bị vi phạm trong ví dụ nào sau đây?",
    "chapter": 7,
    "options": ["Nút gọi đổi từ màu xanh sang màu đỏ sau khi nhấn", "Biểu tượng hình tin nhắn ở hai màn hình giao diện của cùng ứng dụng lại khác nhau", "Người dùng vuốt thanh cuộn lên trên mà màn hình lại di chuyển xuống dưới", "Khi có cuộc gọi đến, điện thoại ngắt các âm thanh từ các ứng dụng như media player đang hoạt động ... và ưu tiên dành cho âm cuộc gọi", "Khi có cuộc gọi đến, nút kéo trên thanh cuộn nằm ở vị trí bên trái, nổi và có hình mũi tên hướng sang phải"],
    "correctAnswers": [1],
    "explanation": "Đáp án đúng: B"
  },
  {
    "id": 69,
    "question": "Tính ánh xạ bị vi phạm trong ví dụ nào sau đây?",
    "chapter": 7,
    "options": ["Nút gọi đổi từ màu xanh sang màu đỏ sau khi nhấn", "Biểu tượng hình tin nhắn ở giao diện lại khác nhau", "Khi có cuộc gọi đến, nút kéo trên thanh cuộn nằm ở vị trí bên trái, nổi và có hình mũi tên hướng sang phải", "Người dùng vuốt thanh cuộn lên trên mà màn hình lại di chuyển xuống dưới", "Khi có cuộc gọi đến, điện thoại ngắt các âm thanh từ các ứng dụng như media player đang hoạt động ... và ưu tiên dành cho âm cuộc gọi"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 70,
    "question": "Bước nào sau đây là một trong sáu bước thực hiện theo USTM?",
    "chapter": 5,
    "options": ["Xác định và mô tả các nhóm làm việc, kể cả các nhóm chính thức và không chính thức", "Phân tích hệ thống xã hội", "Thiết lập môi trường bên ngoài", "Phân tích hệ thống kỹ thuật", "Liệt kê các nhiệm vụ chính"],
    "correctAnswers": [0],
    "explanation": "Đáp án đúng: A"
  },
  {
    "id": 74,
    "question": "Quy tắc vàng của thiết kế giao diện hướng người dùng là gì?",
    "chapter": 4,
    "options": ["Điều chỉnh người dùng", "Thích nghi với người dùng", "Làm người dùng hài lòng", "Phục vụ người dùng", "Hiểu người dùng"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 75,
    "question": "Cái gì không phải nguyên tắc thiết kế lấy người dùng làm trung tâm (UCD)?",
    "chapter": 4,
    "options": ["Quan sát", "Kiểm thử tính dùng được", "Nhóm tập trung", "Phỏng vấn", "Đặt câu hỏi"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 76,
    "question": "Bước nào sau đây không phải là một trong tám bước thực hiện theo OSTA?",
    "chapter": 5,
    "options": ["Xác định và mô tả các cặp nhiệm vụ - đối tượng", "Liệt kê các nhiệm vụ chính", "Đặc tả yêu cầu về mức độ hiệu năng thỏa mãn", "Phân tích hệ thống xã hội: vai trò, đặc tính, chất lượng", "Đặc tả yêu cầu về chức năng, tính dùng được, tính chấp nhận được cho hệ thống kỹ thuật mới"],
    "correctAnswers": [0],
    "explanation": "Đáp án đúng: A"
  },
  {
    "id": 78,
    "question": "Bước nào sau đây là một trong bảy bước thực hiện theo SSM?",
    "chapter": 5,
    "options": ["Đặc tả yêu cầu về mức độ hiệu năng thỏa mãn", "Phân tích hệ thống kỹ thuật", "Ghi nhận các vấn đề và bắt đầu phân tích", "Phân tích hệ thống xã hội", "Đặc tả yêu cầu về chức năng, tính dùng được, tính chấp nhận được cho hệ thống kỹ thuật mới"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 79,
    "question": "Bước nào sau đây là một trong sáu bước thực hiện theo USTM?",
    "chapter": 5,
    "options": ["Định nghĩa mô hình khái niệm", "Ghi nhận các vấn đề và bắt đầu phân tích", "Mô tả ngữ cảnh tổ chức", "Xác định các thay đổi hữu ích cho toàn bộ hệ thống", "Tạo lập định nghĩa gốc từ quan điểm của một bên liên quan bất kỳ"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 82,
    "question": "Đâu là nhược điểm chính của kỹ thuật tạo mẫu thử phác thảo (sketches):",
    "chapter": 8,
    "options": ["Được tạo ra với chi phí thấp", "Không thể hình dung trình tự tương tác với hệ thống", "Quá phức tạp và dài dòng", "Không thể hình dung cách bố trí nội dung tương tác", "Không thể tái sử dụng"],
    "correctAnswers": [1],
    "explanation": "Đáp án đúng: B"
  },
  {
    "id": 83,
    "question": "Người dùng tiềm năng của một hệ tương tác được mô hình hóa bởi:",
    "chapter": 1,
    "options": ["Tri thức, hành vi, bộ nhớ, cảm xúc, năng lực, năng suất", "Tri thức, hành vi, kinh nghiệm", "Tri thức, hành vi, năng lực, năng suất, công thái học", "Tri thức, hành vi, năng lực, năng suất, sự tập trung", "Tri thức, hành vi, sự tập trung"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 84,
    "question": "Nhận định nào SAI về kỹ thuật đặt câu hỏi ?",
    "chapter": 5,
    "options": ["Không nên sử dụng kỹ thuật đặt câu hỏi phối hợp với các kỹ thuật khác", "Chỉ nên thiết kế câu hỏi mở cho người dùng", "Đặt câu hỏi để tìm ra thông tin người dùng", "Câu hỏi nên thiết kế ở dạng đóng", "Dùng câu hỏi đóng để chốt yêu cầu, câu hỏi mở để tìm hiểu nhu cầu"],
    "correctAnswers": [0, 1],
    "explanation": "Đáp án đúng: A, B"
  },
  {
    "id": 86,
    "question": "Kỹ thuật nào không phải đánh giá hình thành?",
    "chapter": 9,
    "options": ["Cognitive walkthrough", "Logging and tracking", "Cooperative evaluation", "Pencil and paper mock-ups", "Scenario-based evaluation"],
    "correctAnswers": [1],
    "explanation": "Đáp án đúng: B"
  },
  {
    "id": 88,
    "question": "2 đặc trưng của kiểu tương tác dòng lệnh là:",
    "chapter": 2,
    "options": ["Sai sót thấp", "Dễ thích ứng dễ sửa lỗi", "Không tốn công đào tạo", "Thích hợp với nhiệm vụ có tính lặp lại; Thích hợp với những người có kinh nghiệm"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 89,
    "question": "Khả năng của con người bị giới hạn bởi:",
    "chapter": 2,
    "options": ["Hưng phấn", "Cảm xúc, sức khỏe", "Cảm xúc, trạng thái", "Môi trường tương tác", "Phương, chiều, vị trí tương đối của đầu người so với trọng tâm trái đất"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 91,
    "question": "Kỹ thuật nào được sử dụng để đánh giá hình thành?",
    "chapter": 9,
    "options": ["Retrospective testing", "Cognitive walkthrough", "Logging and tracking", "Lab-based techniques", "Remote testing"],
    "correctAnswers": [1],
    "explanation": "Đáp án đúng: B"
  },
  {
    "id": 93,
    "question": "Kỹ thuật nào không phải kỹ thuật đánh giá sơ kết?",
    "chapter": 9,
    "options": ["Retrospective testing", "Cognitive walkthrough", "Lab-based techniques", "Remote testing", "Logging and tracking"],
    "correctAnswers": [1],
    "explanation": "Đáp án đúng: B"
  },
  {
    "id": 94,
    "question": "Để xây dựng thành công các hệ thống tương tác, chúng ta cần biết về:",
    "chapter": 6,
    "options": ["Các ràng buộc kỹ thuật của môi trường trong đó hệ thống thực hiện nhiệm vụ", "khả năng tâm sinh lý của người dùng hệ thống", "các khía cạnh tổ chức và môi trường", "Khả năng tâm lý", "Trình độ của người dùng hệ thống", "Các thiết bị hỗ trợ tương tác", "Những nhiệm vụ cần yêu cầu hệ thống thực hiện: loại nhiệm vụ"],
    "correctAnswers": [0, 1, 2, 3, 6],
    "explanation": "Đáp án đúng: A, B, C, D, G"
  },
  {
    "id": 95,
    "question": "Bước nào sau đây là một trong tám bước thực hiện theo OSTA?",
    "chapter": 5,
    "options": ["Củng cố và kiểm tra các yêu cầu", "Xác định các nhu cầu của các bên liên quan", "Xác định và mô tả các nhóm làm việc, kể cả các nhóm chính thức và không chính thức", "Xác định và mô tả các cặp nhiệm vụ - đối tượng", "Xác định đầu vào của các nhiệm vụ (bên ngoài hệ thống)"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 96,
    "question": "Giao diện nào sau đây là giao diện người dùng hữu cơ?",
    "chapter": 2,
    "options": ["Chuột chơi game được thiết kế hình dạng đặc biệt", "Tai nghe có thể gập lại làm vòng đeo tay", "Ô tô có khả năng thay đổi hình dạng thành robot", "Máy tính bảng dẻo nhận đầu vào từ các hành động miết, gập", "Máy tính có thể tách rời bàn phím để tạo thành một máy tính bảng"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 97,
    "question": "WIMP là viết tắt của:",
    "chapter": 3,
    "options": ["Window, Interface, Mouse, Pointer", "Widget, Icons, Menu, Pointer", "Windows, Icons, Menus, Pointer", "Window, Interaction, Mouse, Pointer", "Widget, Interaction, Menu, Plugin"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 98,
    "question": "Có những loại quy trình phỏng vấn nào?",
    "chapter": 5,
    "options": ["Không cấu trúc", "Bán cấu trúc", "Nhóm tập trung", "Đặt câu hỏi", "Có cấu trúc"],
    "correctAnswers": [0, 1, 4],
    "explanation": "Đáp án đúng: A, B, E"
  },
  {
    "id": 99,
    "question": "Đâu là các mô hình yêu cầu người dùng?",
    "chapter": 5,
    "options": ["Quan sát tự nhiên", "Phân tích tài liệu", "Phỏng vấn", "USTM", "OSTA"],
    "correctAnswers": [3, 4],
    "explanation": "Đáp án đúng: D, E"
  },
  {
    "id": 100,
    "question": "Đâu không phải là ưu điểm của kiểu giao tiếp điền mẫu (form fill-in) ?",
    "chapter": 3,
    "options": ["Không cần nhiều giải thích", "Giúp người dùng dễ hình dung mối quan hệ các dữ liệu do cùng hiển thị trên cùng một màn hình", "Phù hợp cho chuyên gia do cách nhập trực tiếp và có nhiều tùy chọn cho các câu lệnh trong từng bối cảnh nhất định", "Hạn chế lỗi do có gán nhãn và hạn chế miền giá trị nhập vào", "Dữ liệu nhanh chóng được nhập vào các ô định sẵn"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 101,
    "question": "Điều nào sau đây là không đúng khi xây dựng danh mục hỏi đáp cho người dùng?",
    "chapter": 3,
    "options": ["Nên giữ cách trình bày câu trả lời ngắn gọn, từ 25 đến 40 ký tự căn lề trái", "Nếu người dùng cần tương tác cần cho phép người dùng trả lời ngắn gọn", "Tại một thời điểm, chỉ nên đưa ra một ý tưởng hoặc một câu hỏi", "Cho phép người dùng quan sát các câu trả lời trước đó để tiện cho quá trình giao tiếp với máy tính", "Câu hỏi dạng mở, để người dùng trình bày được những gì mình mong muốn"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 350,
    "question": "Các yêu cầu chức năng chỉ ra những gì hệ thống phải làm trong khi các yêu cầu phi chức năng chỉ ra:",
    "chapter": 5,
    "options": ["Thiết kế dữ liệu", "Ràng buộc hệ thống", "Các bảo đảm", "Độ đậm nhạt", "Ràng buộc người dùng"],
    "correctAnswers": [1],
    "explanation": "Đáp án đúng: B"
  },
  {
    "id": 351,
    "question": "Mô hình nào mô tả giao diện người dùng cùng với tất cả thông tin hỗ trợ?",
    "chapter": 5,
    "options": ["Mô hình của người dùng", "Nhận thức hệ thống", "Mô hình người dùng", "Mô hình kỹ thuật xã hội OSTA", "Mô hình thực hiện"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 352,
    "question": "Trong kịch bản sau: \"Kỹ sư điều khiển một cánh tay robot thông qua một phần mềm điều khiển mô phỏng trên thiết bị di động\", đâu là tương tác?",
    "chapter": 11,
    "options": ["Kỹ sư", "Thiết bị di động", "Điều khiển cánh tay robot", "Robat", "Phần mềm mô phỏng"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 354,
    "question": "Trong các mô thức đánh giá thiết kế, mô thức nào có vai trò của người dùng trong đánh giá là thấp nhất?",
    "chapter": 9,
    "options": ["Nghiên cứu thực địa", "Kiểm tra tính dùng được", "Vai trò của người dùng trong các mô thức đánh giá là như nhau", "Dự đoán", "Nhanh"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 355,
    "question": "Yếu tố nào nên được hạn chế trong một thiết kế giao diện web?",
    "chapter": 10,
    "options": ["Khoảng trắng", "Số lượng font chữ", "Sự nổi bật của tiêu đề chính", "Số lượng hình ảnh", "Dữ liệu được hiển thị"],
    "correctAnswers": [1],
    "explanation": "Đáp án đúng: B"
  },
  {
    "id": 356,
    "question": "Tính nhất quán của giao diện được thể hiện qua:",
    "chapter": 10,
    "options": ["Các hình ảnh được thiết kế theo cùng một tiêu chuẩn", "Các ứng dụng phải được thiết kế giống các ứng dụng đã có", "Các phương pháp điều hướng nhạy cảm với ngữ cảnh", "Cơ chế input giống nhau trong suốt ứng dụng", "Mỗi ứng dụng phải có giao diện riêng biệt"],
    "correctAnswers": [0, 3],
    "explanation": "Đáp án đúng: A, D"
  },
  {
    "id": 357,
    "question": "Những yếu tố nào không được đưa vào một thiết kế wireframe?",
    "chapter": 10,
    "options": ["Các loại font chữ", "Bố cục", "Ảnh", "Màu sắc", "Vị trí các khoảng trắng"],
    "correctAnswers": [0, 2, 3],
    "explanation": "Đáp án đúng: A, C, D"
  },
  {
    "id": 358,
    "question": "Người dùng đọc một trang web như thế nào?",
    "chapter": 10,
    "options": ["Xem các thành phần đồ họa trước, sau đó đọc text", "Từ phải sang trái, từ trên xuống dưới", "Từ trung tâm màn hình ra ngoài", "Người dùng không đọc, chỉ scan cả trang web để chọn các câu và từ riêng biệt", "Từ trái sang phải, từ trên xuống dưới"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 359,
    "question": "Khái niệm nào sau đây KHÔNG PHẢI là ngôn ngữ thiết kế cho thiết bị di động?",
    "chapter": 11,
    "options": ["Responsive design", "Material design", "Metro design", "Flat design", "Skeuomorph design"],
    "correctAnswers": [0],
    "explanation": "Đáp án đúng: A"
  },
  {
    "id": 360,
    "question": "Đề xuất nào sau đây là SAI về tính dùng được của trò chơi di động?",
    "chapter": 11,
    "options": ["Xây dựng các yếu tố trò chơi dựa trên âm thanh", "Người dùng phải luôn có khả năng tạm dừng", "Chọn giải pháp đơn giản", "Tự động lưu trò chơi khi người dùng thoát khỏi trò chơi", "Không lãng phí thời gian của người dùng"],
    "correctAnswers": [0],
    "explanation": "Đáp án đúng: A"
  },
  {
    "id": 361,
    "question": "Hai loại tương tác điều hướng cho thiết bị di động là:",
    "chapter": 11,
    "options": ["Drag & scroll", "Click & drag", "Click & scroll", "Touch & drag", "Touch & scroll"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 362,
    "question": "Chỉ ra luồng thông tin thông thường trên thiết bị di động?",
    "chapter": 11,
    "options": ["Navigation - Header - Content - Footer", "Header - Content - Navigation - Footer", "Navigation - Content - Navigation - Footer", "Header - Navigation - Content - Navigation", "Header - Navigation - Content - Navigation - Footer"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 363,
    "question": "Giao diện được thiết kế với nhiều hình ảnh chuyển động có thể:",
    "chapter": 10,
    "options": ["Làm người dùng phân tâm", "Gây chú ý nhiều hơn", "Tạo ra sản phẩm sinh động", "Tăng tính hấp dẫn", "Làm người dùng chăm chú"],
    "correctAnswers": [0],
    "explanation": "Đáp án đúng: A"
  },
  {
    "id": 364,
    "question": "Tăng độ tương phản trên màn hình có thể:",
    "chapter": 2,
    "options": ["Thay đổi sự tương tác", "Gây chói mắt", "Tăng khả năng tái sử dụng", "Đảm bảo tính rõ ràng", "Tăng chất lượng hiển thị"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 365,
    "question": "Mệnh đề nào sau đây là đúng?",
    "chapter": 4,
    "options": ["bước đầu tiên là xác định và phân loại người dùng tiềm năng trong tương lai", "Quy trình thiết kế lấy người dùng làm trung tâm không chú trọng vào việc định nghĩa tính dùng được, bao gồm tính dễ học, dễ sử dụng và phân khúc người dùng", "Với quy trình thiết kế lấy người dùng làm trung tâm", "cần chú trọng dự báo phân khúc thị trường để sản phẩm được thị trường chấp nhận", "Tại bước 3 của quy trình thiết kế lấy người dùng làm trung tâm, chỉ chú trọng vào người dùng vào giai đoạn cuối của thiết kế", "Tại bước 3 của quy trình thiết kế lấy người dùng làm trung tâm, cần đo đánh giá chất lượng sản phẩm từ quan điểm của người dùng", "Tại bước 3 của quy trình thiết kế lấy người dùng làm trung tâm"],
    "correctAnswers": [0, 2, 3, 6],
    "explanation": "Đáp án đúng: A, C, D, G"
  },
  {
    "id": 366,
    "question": "Khi thiết kế giao diện cho các trò chơi trên thiết bị di động, chúng ta phải:",
    "chapter": 11,
    "options": ["Không cung cấp giải thưởng cho người chơi", "Hỗ trợ các tính năng tạm dừng (pause) và lưu (save)", "Bảo đảm người dùng luôn có kết nối mạng", "Bảo đảm các thành phần được thu nhỏ lại để vừa với màn hình di động", "Hỗ trợ nhiều tính năng thay vì tính đơn giản của trò chơi"],
    "correctAnswers": [1],
    "explanation": "Đáp án đúng: B"
  },
  {
    "id": 367,
    "question": "Phát biểu nào sau đây là sai?",
    "chapter": 2,
    "options": ["Các thành phần nằm trong các lớp khác nhau có bóng đổ khác nhau", "Material Design sử dụng màu sắc rực rỡ", "Material Design là thiết kế phẳng", "Material Design được lấy cảm hứng từ thế giới vật chất và các kết cấu của nó, bao gồm cả cách chúng phản chiếu ánh sáng và đổ bóng", "Các phần tử trong Material Design có các độ cao khác nhau"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 368,
    "question": "Storyboarding là kỹ thuật tạo mẫu thử cho phép người thiết kế:",
    "chapter": 8,
    "options": ["Giới thiệu giao diện người dùng", "Tạo ra môi trường tương tác sống động như thật, chi tiết cho mọi người dùng", "Tập trung vào các nhiệm vụ người dùng đang thực hiện", "Thảo luận chi tiết về sản phẩm cuối cùng cũng như các kế hoạch đưa sản phẩm này ra thị trường", "Mô phỏng các hành vi tương tác và các chức năng ứng dụng cung cấp"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 369,
    "question": "Wizard of Oz là kỹ thuật tạo mẫu thử cho phép người thiết kế:",
    "chapter": 8,
    "options": ["Thảo luận chi tiết về sản phẩm cuối cùng cũng như các kế hoạch đưa sản phẩm này ra thị trường", "Tập trung vào các nhiệm vụ người dùng đang thực hiện", "Vạch ra các kịch bản người dùng (user scenario) và các luồng hành vi của ứng dụng", "Mô phỏng các hành vi tương tác và các chức năng ứng dụng cung cấp", "Minh họa mục tiêu và các hoạt động cần thiết để thực hiện mục tiêu đó"],
    "correctAnswers": [2, 3],
    "explanation": "Đáp án đúng: C, D"
  },
  {
    "id": 370,
    "question": "Khi muốn phỏng vấn người dùng về cảm tưởng của họ với một tính năng của một ứng dụng cụ thể, nên sử dụng câu hỏi nào?",
    "chapter": 5,
    "options": ["Tính năng ABC của ứng dụng XYZ làm bạn hài lòng phải không?", "bạn cho tính năng ABC của ứng dụng XYZ bao nhiêu điểm hài lòng?", "Bạn nghĩ thế nào về tính năng ABC của ứng dụng XYZ?", "Trên thang điểm 100", "Hãy liệt kê một số nhược điểm của tính năng ABC của ứng dụng XYZ mà bạn không thích?", "Bạn có thích tính năng ABC của ứng dụng XYZ không?"],
    "correctAnswers": [1, 2, 3],
    "explanation": "Đáp án đúng: B, C, D"
  },
  {
    "id": 371,
    "question": "Bạn thực hiện mua sắm trên một trang thương mại điện tử. Bạn biết rằng nếu bạn đăng ký gói dịch vụ ưu đãi giao hàng của bên thứ 3, bạn sẽ được miễn phí 10 lần giao hàng. Tuy nhiên, bạn không biết là bạn sẽ được hưởng ưu đãi này ngay khi đăng ký trên trang thương mại điện tử, hay phải đợi đến lúc có xác nhận của nhà cung cấp gói dịch vụ ưu đãi giao hàng. Tiêu chí / nguyên tắc thiết kế nào dưới đây đã bị vi phạm?",
    "chapter": 7,
    "options": ["Trợ giúp và tài liệu (Help and documentation)", "Tính trực quan (Visibility)", "Dự báo lỗi (Error prevention)", "Quyền kiểm soát và quyền tự do của người dùng (User control and freedom)", "Giúp người dùng nhận biết, chẩn đoán và khắc phục lỗi (Help users recognize, diagnose, and recover from errors)"],
    "correctAnswers": [0],
    "explanation": "Đáp án đúng: A"
  },
  {
    "id": 372,
    "question": "Chọn phát biểu sai trong thiết kế giao diện web:",
    "chapter": 10,
    "options": ["Kết xuất là cách định dạng, tổ chức nội dung web và quan hệ logic giữa chúng", "Các thông tin có trên trang web gồm văn bản, đồ họa, mẫu biểu, liên kết hay các phần tử tương tác gọi là nội dung web", "Trợ giúp tương tác là nói với người dùng họ đang ở đâu, và họ có thể tiếp tục đi đến đâu", "Thiết kế giao diện cho các website và ứng dụng sử dụng giao thức web", "Điều hướng là việc cho phép người dùng di chuyển trong website"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 373,
    "question": "Đâu không phải nhiệm vụ chính của thiết kế giao diện web ?",
    "chapter": 10,
    "options": ["Thiết kế kết xuất nội dung", "Thiết kế hỗ trợ tương tác", "Thiết kế điều hướng", "Thiết kế dữ liệu", "Thiết kế nội dung"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 380,
    "question": "Chọn phát biểu sai đối với việc đánh giá tính dùng được của hệ tương tác?",
    "chapter": 9,
    "options": ["Đánh giá tổng kết được sử dụng để đánh giá mức độ đạt được các tiêu chí của tính dùng được", "Đánh giá hình thành được sử dụng để nhận biết tính dùng được", "Kiểm thử người dùng có thể là một đánh giá hình thành hoặc đánh giá tổng kết", "Đánh giá tính dùng được của hệ tương tác để xác định thiết kế tương tác đáp ứng yêu cầu người dùng", "Khi đánh giá tính dùng được của hệ tương tác, có thể đặt câu hỏi trực tiếp với người tham gia"],
    "correctAnswers": [1],
    "explanation": "Đáp án đúng: B"
  },
  {
    "id": 382,
    "question": "Đâu không phải là nhiệm vụ trong đánh giá tương tác ?",
    "chapter": 9,
    "options": ["Đánh giá về khả năng sử dụng", "Đánh giá sự hài lòng của người dùng", "Xác định các vấn đề tồn tại của hệ thống đối với người dùng", "Khẳng định tính hiệu quả trong giao tiếp người dùng", "Khẳng định sự an toàn của hệ thống"],
    "correctAnswers": [2],
    "explanation": "Đáp án đúng: C"
  },
  {
    "id": 383,
    "question": "Kỹ thuật kiểm thử người dùng trong môi trường làm việc của họ (onsite) và kỹ thuật kiểm thử người dùng tại nơi phát triển hệ tương tác (lab-based) giống nhau ở:",
    "chapter": 9,
    "options": ["Các yếu tố chi phối người dùng", "Đối tượng tham gia kiểm thử", "Điều kiện môi trường", "Hình thức giao tiếp", "Thời gian thực hiện"],
    "correctAnswers": [4],
    "explanation": "Đáp án đúng: E"
  },
  {
    "id": 384,
    "question": "Đâu là phát biểu không đúng về đánh giá hình thành?",
    "chapter": 8,
    "options": ["Đánh giá hình thành yêu cầu người dùng thực hiện một nhiệm vụ trên mẫu thử", "Đánh giá hình thành ghi lại những điều mà người dùng suy nghĩ", "Đánh giá hình thành bắt đầu từ mẫu thử độ tin cậy thấp", "Đánh giá hình thành cho phép kiểm tra các giả định", "Đánh giá hình thành t hu hút sự tham gia sớm của người dùng"],
    "correctAnswers": [1],
    "explanation": "Đáp án đúng: B"
  },
  {
    "id": 385,
    "question": "Phát biểu nào sau đây là sai về người dùng trong đánh giá tính dùng được của hệ tương tác ?",
    "chapter": 1,
    "options": ["có thể dự đoán được người dùng sẽ làm gì", "thời gian làm việc của người dùng là một yếu tố quan trọng", "các đối tượng người dùng khác nhau có thể có kiến thức và kĩ năng khác nhau", "không biết giao diện tốt như thế nào cho đến khi người dùng sử dụng nó", "cần đánh giá về phản hồi cảm xúc của người dùng"],
    "correctAnswers": [0],
    "explanation": "Đáp án đúng: A"
  },
  {
    "id": 386,
    "question": "Phát biểu nào sau đây là sai về đánh giá tính dùng được?",
    "chapter": 1,
    "options": ["Không nên sử dụng hình thức đặt câu hỏi trực tiếp", "Đảm bảo tách biệt về không gian và thời gian giữa tester và người dùng", "Dữ liệu kiểm tra có thể được lấy từ nhật ký", "Chỉ nên sử dụng một phương pháp phù hợp", "Có thể sử dụng kinh nghiệm trong quá khứ của người dùng"],
    "correctAnswers": [2, 4],
    "explanation": "Đáp án đúng: C, E"
  },
  {
    "id": 395,
    "question": "Khẳng định nào là đúng đối với kỹ thuật kiểm thử người dùng trong phòng thí nghiệm (chọn 3) ?",
    "chapter": 9,
    "options": ["có thể thực hiện tự nhiên mà không bị gián đoạn", "được thực hiện nhanh với các dữ liệu giống nhau", "xác định rõ ràng bối cảnh thực hiện", "với một nhiệm vụ cụ thể cho trước khả năng xảy ra lỗi là ít", "dùng để kiểm tra giả thiết cụ thể"],
    "correctAnswers": [1, 3, 4],
    "explanation": "Đáp án đúng: B, D, E"
  },
  {
    "id": 400,
    "question": "Điều nào sau đây KHÔNG phải là ví dụ về tăng tốc?",
    "chapter": 7,
    "options": ["Tổ hợp phím Ctrl-S để lưu file trong ứng dụng soạn thảo văn bản Microsoft Word", "Thao tác vuốt để xóa trong iOS", "Phím F1 trên bàn phím", "Các phần tử trong menu \"Insert\" của ứng dụng soạn thảo văn bản Microsoft Word", "Phím tắt Siri của hệ điều hành iOS"],
    "correctAnswers": [3],
    "explanation": "Đáp án đúng: D"
  },
  {
    "id": 401,
    "question": "Đâu là các yếu tố ảnh hưởng tới khả năng cảm nhận bằng thị giác của con người?",
    "chapter": 2,
    "options": ["Kích thước và chiều cao", "Hành động", "Thay đổi về ánh sáng", "Chuyển động", "Khoảng cách"],
    "correctAnswers": [0, 4],
    "explanation": "Đáp án đúng: A, E"
  },
  {
    "id": 402,
    "question": "Luật Fitts được dùng để:",
    "chapter": 2,
    "options": ["Mô tả hiệu năng của các thiết bị vào", "Mô hình hóa thời gian chuyển động đủ để vẽ một đối tượng", "Dự báo rằng thời gian cần thiết để nhanh chóng di chuyển đến một vị trí đích phụ thuộc vào khoảng cách tới đích và kích thước đích", "Đánh giá hệ thống mà thời gian cần thiết để định vị một đối tượng là không quan trọng", "Mô hình hóa thời gian chuyển động đủ để lựa chọn một đối tượng"],
    "correctAnswers": [0, 2, 4],
    "explanation": "Đáp án đúng: A, C, E"
  },
  {
    "id": 403,
    "question": "Xác định các sơ suất của con người trong các tình huống sau:",
    "chapter": 2,
    "options": ["Khi bạn soạn một văn bản", "bạn gõ sai một từ tiếng Anh dù bạn biết từ đó đánh vần như thế nào", "Bạn cài đặt phần mềm MySQL để lưu trữ các dữ liệu cần khai thác bằng truy vấn SQL", "Bạn cài đặt phần mềm MS Excel trên máy tính để lưu trữ các dữ liệu cần khai thác bằng truy vấn SQL", "đặt máy tính lên trên bàn phủ khăn nỉ với hi vọng máy tính thoát nhiệt tốt hơn", "nhưng bạn quên mất mật khẩu quản trị để cài đặt phần mềm này", "Bạn cho rằng câu lệnh printf(\"%d\", z) trong ngôn ngữ lập trình C sẽ in ra màn hình được xâu z"],
    "correctAnswers": [0, 1, 2, 5],
    "explanation": "Đáp án đúng: A, B, C, F"
  },
  {
    "id": 404,
    "question": "Các phát biểu nào sau đây là đúng?",
    "chapter": 11,
    "options": ["Trong khung tương tác Abowd và Beale, phép dịch từ đầu ra đến người dùng (hay còn gọi là quan sát ) tương ứng với bước \"Đánh giá trạng thái hệ thống theo mục đích và chủ ý\" của chu trình Norman", "trình độ", "Material design là phương pháp thiết kế dành riêng cho các ứng dụng desktop", "Xét chức năng \"gọi điện thoại\" trên điện thoại di động. Khi có nhiều lớp người dùng khác nhau về năng lực hành vi", "lứa tuổi ... cần cung cấp nhiều kiểu tương tác khác nhau để thực hiện chức năng này", "Chất lượng giao tiếp phụ thuộc chất lượng tương tác", "Sự có mặt của người lạ trong môi trường làm việc thường không làm ảnh hưởng đến hiệu quả công việc của người sử dụng máy tính"],
    "correctAnswers": [1, 3, 4, 5],
    "explanation": "Đáp án đúng: B, D, E, F"
  },
];
