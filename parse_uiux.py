import re
import json
import os

input_file = r"C:\Users\TSC\Desktop\Nothing\MoreTest\UIUX file\UIUX.txt"
output_file = r"C:\Users\TSC\Desktop\Nothing\MoreTest\parsed_questions.json"

questions = []

with open(input_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

current_q = None
current_section = None # 'question', 'correct', 'wrong', 'explanation'
buffer_text = ""

def clean_text(t):
    # Remove leading '* ', '**', spaces
    t = re.sub(r'^\s*\*\s*', '', t)
    t = t.replace('**', '')
    return t.strip()

for i, line in enumerate(lines):
    line_clean = line.strip()
    if not line_clean:
        continue
    
    # Check for new question
    # Match: **Câu 001:** or Câu 048: or Câu 070 & 079:
    q_match = re.search(r'(?:\*\*)?Câu (\d+)(?:.*?):\s*(?:\*\*)?(.*)', line_clean, re.IGNORECASE)
    
    if q_match:
        if current_q:
            # Save the last section
            if current_section == 'explanation' and buffer_text:
                current_q['explanation'] += buffer_text
            questions.append(current_q)
            
        q_id = int(q_match.group(1))
        q_text = clean_text(q_match.group(2))
        
        current_q = {
            'id': q_id + 112, # offset to avoid conflict
            'original_id_str': q_match.group(1),
            'question': q_text,
            'correct_raw': [],
            'wrong_raw': [],
            'explanation': ""
        }
        current_section = 'question'
        buffer_text = ""
        continue
        
    # Check sections
    if 'Đáp án đúng:' in line_clean or 'Đáp án đúng (' in line_clean:
        current_section = 'correct'
        text = line_clean.split(':', 1)[1] if ':' in line_clean else ""
        text = clean_text(text)
        if text:
            current_q['correct_raw'].append(text)
        continue
        
    if 'Đáp án sai:' in line_clean or 'Đáp án sai (' in line_clean:
        current_section = 'wrong'
        text = line_clean.split(':', 1)[1] if ':' in line_clean else ""
        text = clean_text(text)
        if text:
            current_q['wrong_raw'].append(text)
        continue
        
    if 'Giải thích:' in line_clean:
        current_section = 'explanation'
        text = line_clean.split(':', 1)[1] if ':' in line_clean else ""
        text = clean_text(text)
        current_q['explanation'] = "Giải thích: " + text + "\n"
        buffer_text = ""
        continue
        
    # Handle continuation
    if current_section == 'question':
        # Append to question text
        current_q['question'] += " " + clean_text(line_clean)
        
    elif current_section == 'correct':
        text = clean_text(line_clean)
        if text:
            current_q['correct_raw'].append(text)
            
    elif current_section == 'wrong':
        text = clean_text(line_clean)
        if text:
            current_q['wrong_raw'].append(text)
            
    elif current_section == 'explanation':
        text = clean_text(line_clean)
        if text:
            buffer_text += text + "\n"

# Append the last question
if current_q:
    if current_section == 'explanation' and buffer_text:
        current_q['explanation'] += buffer_text
    questions.append(current_q)

# Post-process questions to format options
final_questions = []
for q in questions:
    options = []
    correct_answers = []
    
    # Process correct options
    for raw_correct in q['correct_raw']:
        # sometimes they are separated by semicolon ';'
        parts = [p.strip() for p in raw_correct.split(';') if p.strip()]
        for p in parts:
            options.append(p)
            correct_answers.append(len(options) - 1)
            
    # Process wrong options
    for raw_wrong in q['wrong_raw']:
        parts = [p.strip() for p in raw_wrong.split(';') if p.strip()]
        for p in parts:
            options.append(p)
            
    # Shuffle options? Or keep them as is. Let's keep them as is for now.
    
    # If no options found but there is text, skip or leave empty
    if len(options) == 0:
        continue
        
    final_q = {
        "id": q["id"],
        "question": q["question"].strip(),
        "chapter": None,
        "options": options,
        "correctAnswers": correct_answers,
        "explanation": q["explanation"].strip()
    }
    final_questions.append(final_q)

with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(final_questions, f, ensure_ascii=False, indent=2)

print(f"Parsed {len(final_questions)} questions.")
