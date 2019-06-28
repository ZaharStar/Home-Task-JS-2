//Напишите скрипт, который по введенному дню (исп. значение переменной из 8
//задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
//т.д.). Скрипт определение поры года написать через switch.

var day = prompt('Введите коллличество дней');

if (day > 0 && day <= 32) {
        alert ('Январь');
} else { if (day > 31 && day <= 59) {
        alert ('Февраль');
} else { if (day > 59 && day <= 90) {
        alert('Март');    
} else { if (day > 90 && day <= 120) {
        alert ('Апрель');
} else { if (day > 120 && day <= 151) {
    alert ('Май');
} else { if (day > 151 && day <= 181) {
    alert ('Июнь');
} else { if (day > 181 && day <= 212) {
    alert ('Июль');
} else { if (day > 212 && day <= 243) {
    alert ('Август');
} else { if (day > 243 && day <= 273) {
    alert ('Сентябрь');
} else { if (day > 273 && day <= 304) {
    alert ('Октябрь');
} else { if (day > 304 && day <= 334) {
    alert ('Ноябрь');
} else { if (day > 334 && day <= 365) {
    alert ('Декабрь');
}}}}}}}}}}}}

switch (true) {
    case day > 0 && day < 60 || day > 334 && day < 366:
        alert ('Зима!');
        break;
    case day > 59 && day < 152 :
        alert ('Весна!');
        break;
    case day > 151 && day < 244 :
        alert ('Лето!');
        break;    
    case day > 243 && day < 335 :
        alert ('Осень!');
        break;  

    default:
        alert(' Lasciate ogni speranza, voi ch`entrate!');
        break;
}