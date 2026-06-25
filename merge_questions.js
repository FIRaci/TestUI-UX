const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'js', 'quiz-data.js');
const newDataPath = path.join(__dirname, 'parsed_questions.json');

let content = fs.readFileSync(dataPath, 'utf8');

// Parse existing
let existing;
try {
    eval('existing = ' + content.replace('const quizData = ', '').replace(/;\s*$/, ''));
} catch (e) {
    console.error("Lỗi khi parse quiz-data.js:", e);
    process.exit(1);
}

// Parse new
const newQuestions = JSON.parse(fs.readFileSync(newDataPath, 'utf8'));

const existingIds = new Set(existing.map(q => q.id));

let addedCount = 0;
for (const q of newQuestions) {
    if (!existingIds.has(q.id)) {
        existing.push(q);
        addedCount++;
    }
}

// Write back
fs.writeFileSync(dataPath, 'const quizData = ' + JSON.stringify(existing, null, 2) + ';\n', 'utf8');
console.log(`Đã thêm thành công ${addedCount} câu hỏi mới vào js/quiz-data.js. Tổng số câu: ${existing.length}`);
