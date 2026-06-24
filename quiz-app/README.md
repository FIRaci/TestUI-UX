# On tap HCI - Ung dung kiem tra kien thuc

Ung dung web kiem tra kien thuc ve tuong tac Nguoi-May tinh (HCI) va Thiet ke giao dien. Bao gom 109 cau hoi trac nghiem theo 13 chuong, co giai thich chi tiet.

## Tinh nang

- 109 cau hoi trac nghiem bao quat 13 chuong
- Hoc che do single-select va multi-select
- Loc cau hoi theo chuong
- Tron ngau nhien cau hoi
- Tinh gio lam bai
- Xem lai cau tra loi voi dap an dung/sai
- Tong quan kien thuc theo tung chuong
- Che do sang/toi (dark/light mode)
- Dieu huong bang ban phim (1-5 chon dap an, mui ten trai/phai)
- Tuong thich dien thoai (responsive)
- Luu tien do lam bai (localStorage)

## Cac chuong

| Chuong | Noi dung |
|--------|----------|
| 1 | Tong quan ve HCI |
| 2 | Con nguoi va May tinh |
| 3 | Giao dien cua cac he tuong tac |
| 4 | Quy trinh thiet ke |
| 5 | Yeu cau nguoi dung |
| 6 | Phan tich nhiem vu |
| 7 | Thiet ke giao dien |
| 8 | Tao mau thu |
| 9 | Kiem tra danh gia |
| 10 | Thiet ke Web |
| 11 | Thiet ke di dong |
| 12 | Cac giao dien khac (HMI) |
| 13 | UX Tools |

## Trien khai voi GitHub Pages

1. Tao repository tren GitHub
2. Day toan bo thu muc len repository:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/<username>/<repository>.git
   git push -u origin main
   ```
3. Vao GitHub repository > Settings > Pages
4. Trong "Build and deployment" > "Branch" chon `main` > `/ (root)` > Save
5. Sau vai phut, ung dung se hoat dong tai `https://<username>.github.io/<repository>`

Hoac co the chay truc tiep bang mo file `index.html` trong trinh duyet.

## Tuy chinh cau hoi

De them, sua hoac xoa cau hoi, mo file `js/quiz-data.js`.

Cau truc moi cau hoi:
```js
{
  id: 1,                    // ID duy nhat
  chapter: 1,               // Chuong (1-13)
  question: "Noi dung cau hoi?",
  options: ["Dap an A", "Dap an B", "Dap an C", "Dap an D"],
  correctAnswers: [0],       // Mang index dap an dung (ho tro nhieu dap an)
  explanation: "Giai thich chi tiet"
}
```

De cap nhat kien thuc chuong, mo file `js/knowledge.js`.

## Cai dat

Khong yeu cau cai dat. Chi can trinh duyet hien dai (Chrome, Firefox, Edge, Safari).

## Cong nghe

- HTML5 + CSS3 (Tailwind CSS)
- Vanilla JavaScript
- Font Awesome 6
- Google Fonts (Inter)
- localStorage
