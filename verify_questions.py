import re
import json

txt_file = r"C:\Users\TSC\Desktop\Nothing\MoreTest\UIUX file\UIUX.txt"
json_file = r"C:\Users\TSC\Desktop\Nothing\MoreTest\parsed_questions.json"
js_file = r"C:\Users\TSC\Desktop\Nothing\MoreTest\js\quiz-data.js"

# 1. Count occurrences of "Câu \d+:" in UIUX.txt
with open(txt_file, 'r', encoding='utf-8') as f:
    text = f.read()

# findall matches like **Câu 001:** or Câu 048:
matches = re.findall(r'(?:\*\*)?Câu (\d+)(?:.*?):', text, re.IGNORECASE)
print(f"Tổng số lần xuất hiện chữ 'Câu <số>:' trong UIUX.txt: {len(matches)}")
print(f"Số lượng ID duy nhất trong UIUX.txt: {len(set(matches))}")

# 2. Check parsed_questions.json
with open(json_file, 'r', encoding='utf-8') as f:
    parsed = json.load(f)

parsed_ids = [q['id'] for q in parsed]
print(f"Tổng số câu hỏi parse được: {len(parsed)}")
print(f"Số lượng ID duy nhất sau khi parse: {len(set(parsed_ids))}")

# 3. Check quiz-data.js
with open(js_file, 'r', encoding='utf-8') as f:
    js_content = f.read()

js_content = js_content.replace('const quizData = ', '').strip()
if js_content.endswith(';'):
    js_content = js_content[:-1]
    
# We might need to use a simple approach to find IDs in js file because eval() is JS only
# Let's extract IDs using regex
js_ids = re.findall(r'"id":\s*(\d+)', js_content)
js_ids = set(int(i) for i in js_ids)

missing_ids = [i for i in set(parsed_ids) if i not in js_ids]
print(f"Tổng số ID trong quiz-data.js: {len(js_ids)}")
print(f"Số ID từ parsed_json bị thiếu trong quiz-data.js: {len(missing_ids)}")

if not missing_ids:
    print("Tất cả các câu hỏi được parse thành công đều đã có mặt trong web!")
else:
    print("Các ID bị thiếu:", missing_ids)
    
# Check for content missing options
missing_options = [q['original_id_str'] for q in parsed if len(q['options']) == 0]
if missing_options:
    print(f"CẢNH BÁO: Có {len(missing_options)} câu hỏi không lấy được đáp án (có thể do sai format): {missing_options}")
else:
    print("Tuyệt vời: Toàn bộ câu hỏi parse được đều có chứa đáp án!")

# Compare original number to parsed
print(f"Chi tiết: ID gốc lớn nhất trong txt là: {max(int(m) for m in matches if m.isdigit()) if matches else 'N/A'}")
