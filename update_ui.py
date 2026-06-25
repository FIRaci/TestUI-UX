import re

with open(r'C:\Users\TSC\Desktop\Nothing\MoreTest\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add Google Fonts
fonts_html = """
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">
    <script src="js/quiz-data.js"></script>
"""
content = re.sub(r'<script src="js/quiz-data\.js"></script>', fonts_html.strip(), content)

# 2. Update CSS Variables and Base styles
new_css = """
        :root {
            --primary: #4f46e5;      /* Indigo 600 */
            --primary-dark: #4338ca;
            --secondary: #ec4899;    /* Pink 500 */
            --bg: #f8fafc;           /* Slate 50 */
            --surface: rgba(255, 255, 255, 0.8);
            --text: #0f172a;         /* Slate 900 */
            --text-secondary: #64748b;
            --border: #e2e8f0;
            --success: #10b981;
            --error: #ef4444;
            --shadow: 0 10px 40px -10px rgba(0,0,0,0.08);
            --shadow-hover: 0 20px 40px -10px rgba(79, 70, 229, 0.15);
            --radius: 20px;
            --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dark {
            --bg: #0f172a;
            --surface: rgba(30, 41, 59, 0.7);
            --text: #f8fafc;
            --text-secondary: #94a3b8;
            --border: #334155;
            --shadow: 0 10px 40px -10px rgba(0,0,0,0.5);
            --shadow-hover: 0 20px 40px -10px rgba(79, 70, 229, 0.25);
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            background: var(--bg);
            background-image: 
                radial-gradient(at 0% 0%, rgba(79, 70, 229, 0.1) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(236, 72, 153, 0.1) 0px, transparent 50%);
            background-attachment: fixed;
            color: var(--text);
            min-height: 100vh;
            transition: background-color 0.4s ease;
        }
        h1, h2, h3, h4, h5, h6, .btn, .badge {
            font-family: 'Outfit', sans-serif;
        }
        .screen { display: none; animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .screen.active { display: flex; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.03); } }
        .card {
            background: var(--surface);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            border: 1px solid rgba(255,255,255,0.2);
            transition: var(--transition);
        }
        .dark .card { border: 1px solid rgba(255,255,255,0.05); }
        .card:hover { box-shadow: var(--shadow-hover); transform: translateY(-2px); }
        .btn {
            padding: 14px 32px;
            border-radius: 14px;
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;
            border: none;
            transition: var(--transition);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            letter-spacing: 0.3px;
        }
        .btn:active { transform: scale(0.96); }
        .btn-primary { 
            background: linear-gradient(135deg, var(--primary), var(--secondary)); 
            color: white; 
            box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
        }
        .btn-primary:hover { 
            transform: translateY(-2px); 
            box-shadow: 0 8px 25px rgba(236, 72, 153, 0.4); 
            filter: brightness(1.1);
        }
        .btn-secondary { 
            background: transparent; 
            color: var(--text); 
            border: 2px solid var(--border); 
        }
        .btn-secondary:hover { 
            border-color: var(--primary); 
            color: var(--primary); 
            background: rgba(79, 70, 229, 0.05);
        }
        .option-btn {
            width: 100%;
            padding: 16px 20px;
            border-radius: 16px;
            border: 2px solid var(--border);
            background: var(--surface);
            color: var(--text);
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            text-align: left;
            display: flex;
            align-items: center;
            gap: 16px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }
        .option-btn:hover:not(.disabled) { 
            border-color: var(--primary); 
            background: rgba(79, 70, 229, 0.05); 
            transform: translateX(4px);
        }
        .option-btn.selected { 
            border-color: var(--primary); 
            background: rgba(79, 70, 229, 0.08); 
            transform: scale(1.01);
            box-shadow: 0 4px 15px rgba(79, 70, 229, 0.15);
        }
        .option-btn.correct { 
            border-color: var(--success); 
            background: rgba(16, 185, 129, 0.1); 
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.15);
        }
        .option-btn.wrong { 
            border-color: var(--error); 
            background: rgba(239, 68, 68, 0.1); 
            box-shadow: 0 4px 15px rgba(239, 68, 68, 0.15);
        }
        .option-btn.disabled { cursor: default; opacity: 0.8; }
        .option-letter {
            width: 36px; height: 36px;
            border-radius: 10px;
            display: flex; align-items: center; justify-content: center;
            font-family: 'Outfit', sans-serif;
            font-weight: 700; font-size: 16px;
            background: var(--bg); color: var(--text-secondary);
            flex-shrink: 0;
            transition: var(--transition);
        }
        .option-btn.selected .option-letter { background: var(--primary); color: white; transform: scale(1.1) rotate(-5deg); }
        .option-btn.correct .option-letter { background: var(--success); color: white; transform: scale(1.1) rotate(5deg); }
        .option-btn.wrong .option-letter { background: var(--error); color: white; transform: scale(1.1) rotate(5deg); }
        .progress-bar {
            height: 10px;
            background: var(--border);
            border-radius: 99px;
            overflow: hidden;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
        }
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            border-radius: 99px;
            transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
"""
content = re.sub(r':root\s*\{.*?(?=\.badge\s*\{)', new_css, content, flags=re.DOTALL)

with open(r'C:\Users\TSC\Desktop\Nothing\MoreTest\index.html', 'w', encoding='utf-8') as f:
    f.write(content)
