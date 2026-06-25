import re
import json

lines=open(r'C:\Users\TSC\Desktop\Nothing\MoreTest\UIUX file\UIUX.txt', encoding='utf8').readlines()
questions = []
current_q = None

for l in lines:
    m = re.search(r'(?:\*\*)?Câu (\d+)(?:.*?):\s*(?:\*\*)?(.*)', l.strip(), re.IGNORECASE)
    if m:
        if current_q: questions.append(current_q)
        current_q = {'id': m.group(1), 'lines': []}
    if current_q: current_q['lines'].append(l.strip())
if current_q: questions.append(current_q)

skipped = []
for q in questions:
    has_correct = any('Đáp án đúng' in x for x in q['lines'])
    has_wrong = any('Đáp án sai' in x for x in q['lines'])
    if not (has_correct and has_wrong): skipped.append(q['id'])

print(f'Skipped ({len(skipped)}):', skipped)
