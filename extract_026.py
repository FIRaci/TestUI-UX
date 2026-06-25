lines=open(r'C:\Users\TSC\Desktop\Nothing\MoreTest\UIUX file\UIUX.txt', encoding='utf8').readlines()
out = open(r'C:\Users\TSC\Desktop\Nothing\MoreTest\026.txt', 'w', encoding='utf8')
printing = False
for l in lines:
    if 'Câu 026:' in l: printing = True
    elif 'Câu 027:' in l: break
    if printing: out.write(l)
out.close()
