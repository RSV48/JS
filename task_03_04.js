// 4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

for (let count = 1; count <= 20; count++) {
    let star = '';
    for (let count_star = 1; count_star <= count; count_star++) {
        star += '*';
    }
    console.log(star)
}