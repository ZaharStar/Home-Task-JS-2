//Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
//частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
//квадрат.

var a = 10,
    b = 2;

var sum = a + b;
console.log (sum);

var diff = a - b;
console.log(diff);

var prod = a * b;
console.log(prod);

var quot = a / b;
console.log(quot);

if (sum > 1) {
    sum**=2;
}
console.log(sum);