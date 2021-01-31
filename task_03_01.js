// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

function primeNbr(num) {
    let i = 2
    let res = 2
    while (i <= Math.floor(num / 2)) {
        if (num % i == 0) res++;
        i++
    }
    return (res == 2) ? (1) : (0);
}
let n = 2
while (n < 100) {
    if (primeNbr(n) == 1) console.log(n);
    n++
}