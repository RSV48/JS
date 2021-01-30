// 1. Почему код даёт именно такие результаты?

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 
/**
 * префиксаная запись оператора ++ инкремент. Значение в
 *  переменной а инкрементируется и полученый резултат 
 * записывается в перменную с. В результате
 * c = 2
 * а = 2;
 */
// d = b++; alert(d);           // 1
/**
 * постфиксная запись оператора инкремент. Извлекается 
 * значение переменной b записывается в перменную d, после 
 * переменная b инкрментируется. В результате
 * d = 1
 * b = 2
 */
// c = (2 + ++a); alert(c);      // 5
/**
 * К значению 2 добавлено инкрментированное значение переменной а (3). В результате
 * с = 5
 * а = 3
 */
// d = (2 + b++); alert(d);      // 4
/**
 * К значению 2 добавлено инкрментированное значение переменной а (3). В результате
 * d = 4
 * b = 3
 */
// alert(a);                    // 3
/**
 *  a = 3  в результате двух операций инкрементирования
 */
// alert(b);                    // 3
/**
 * b = 3  в результате двух операций инкрементирования
 */


// // 2. Чему будет равен x в примере ниже?
// // var a = 2; // a = 2
// // var x = 1 + (a *= 2); x = 2 * 2 +1 = 5

/**
 * 3. Объявить две целочисленные переменные a и b и задать
 *  им произвольные начальные значения. Затем написать
 * скрипт, который работает по следующему принципу:
 *  если a и b положительные, вывести их разность;
 * если а и b отрицательные, вывести их произведение;
 * если а и b разных знаков, вывести их сумму; ноль можно
 * считать положительным числом.
 */

var a, b;
a = Math.floor(Math.random() * (100)) - 50;
b = Math.floor(Math.random() * 1000) - 300;

alert('a = ' + a + '\nb = ' + b)

if (a >= 0 && b >= 0)
    alert('a и b >= 0. Разность равна:' + (a > b ? a - b : b - a));
else if (a < 0 && b < 0)
    alert('a и b <= 0. Произведение равно:' + (a * b));
else
    alert('a и b разных знаков. Сумма равна:' + (a + b));

/**
 * 5. Реализовать основные 4 арифметические операции в виде
 * функций с двумя параметрами. Обязательно использовать
 * оператор return.
 */

function getSumm(a, b) {
    return a + b;
}
function getDiff(a, b) {
    return a - b;
}
function getMult(a, b) {
    return a * b;
}
function getDiv(a, b) {
    if (b != 0)
        return a / b;
    else
        alert('Ошибка! Деление на ноль!')
}
/**
 * 6. Реализовать функцию с тремя параметрами: function 
 * mathOperation(arg1, arg2, operation), где arg1, arg2 – 
 * значения аргументов, operation – строка с названием 
 * операции. В зависимости от переданного значения операции 
 * выполнить одну из арифметических операций (использовать 
 * функции из пункта 5) и вернуть полученное значение 
 * (использовать switch).
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case operation = '+':
            return getSumm(arg1, arg2);
        case operation = '-':
            return getDiff(arg1, arg2);
        case operation = '*':
            return getMult(arg1, arg2);
        case operation = '/':
            return getDiv(arg1, arg2);
        default:
            alert('Операция не известна')
            break
    }

}

function isNumber(n) {
    let num = NaN
    while (num !== num) {
        num = Number.parseInt(prompt('Введите значение числа ' + n + ': '))
    }
    return num
}
function isOperation() {
    let operation;
    while (operation != '+' && operation != '-' && operation != '*' && operation != '/') {
        operation = prompt('Введите арифитическую операцию "+, -, *, /":')
    }
    return operation
}

var x = isNumber(1)
var y = isNumber(2);
var o = isOperation();
var result = mathOperation(x, y, o)
if (result != undefined) {
    alert(x + ' ' + o + ' ' + y + ' = ' + mathOperation(x, y, o))
}
/**
 * 7.*Сравнить null и 0. Попробуйте объяснить результат.
 * null > 0 или null < 0; // false
 * Для сравнения c нулем Null преобразутеся в 0+. Т.к. 0+ = 0, то результат False
 * null == 0; // false Алгоритм сравнения равенства выдает True для Null, только если занчение второго аргумента Null или undefined.
 * null >= 0; // true Алгоритм >= возвращает True, если алгоритм < возвращает False
 */


/**
 * 8. *С помощью рекурсии организовать функцию возведения
 * числа в степень. Формат: function power(val, pow), где
 * val – заданное число, pow – степень.
 */

function power(val, pow) {
    if (pow == 1)
        return val
    return val * power(val, --pow)
}

alert(power(2, 4))