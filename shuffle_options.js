const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'js', 'quiz-data.js');
let content = fs.readFileSync(dataPath, 'utf8');

// Parse existing
let existing;
try {
    eval('existing = ' + content.replace('const quizData = ', '').replace(/;\s*$/, ''));
} catch (e) {
    console.error("Lỗi khi parse quiz-data.js:", e);
    process.exit(1);
}

let shuffledCount = 0;

for (let q of existing) {
    // Only shuffle new questions added recently (id >= 113) 
    // Wait, let's just shuffle all questions that have the correct answer at index 0 and 1, etc.?
    // Actually, just shuffle all new questions. The ID offset used was 112, so new IDs are >= 113.
    if (q.id >= 113) {
        // Create an array of objects to keep track of original indices
        let optObjs = q.options.map((text, idx) => ({
            text: text,
            isCorrect: q.correctAnswers.includes(idx)
        }));
        
        // Shuffle the optObjs array (Fisher-Yates)
        for (let i = optObjs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optObjs[i], optObjs[j]] = [optObjs[j], optObjs[i]];
        }
        
        // Reconstruct options and correctAnswers
        q.options = optObjs.map(o => o.text);
        q.correctAnswers = optObjs
            .map((o, idx) => o.isCorrect ? idx : -1)
            .filter(idx => idx !== -1);
            
        shuffledCount++;
    }
}

// Write back
fs.writeFileSync(dataPath, 'const quizData = ' + JSON.stringify(existing, null, 2) + ';\n', 'utf8');
console.log(`Đã xáo trộn vị trí đáp án ngẫu nhiên cho ${shuffledCount} câu hỏi mới.`);
