//Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
//вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
var str = window.prompt('Введите шестизначное число','123321');
var sumFirst3Num = Number(str[0]) + Number(str[1]) + Number(str[2]);
var sumSecond3Num = Number(str[3]) + Number(str[4]) + Number(str[5]);
var checkSum;
 if (sumFirst3Num === sumSecond3Num) {
   check = 'да';
 } else {
   check = 'нет';
 }

 alert(check);
