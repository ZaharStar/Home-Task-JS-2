//Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
//(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
//вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
//недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели»,
//соответственно.

var day = prompt('Введите коллличество дней');



var years = day / 365;
var mounth = day / 31;
var weeks = day / 7;
var hours = day * 24;
var minuts =  day * 24 * 60;
var sec = day * 24 * 60 * 60;

    alert ('Дни: ' + day);
    if (years < 1 ) {
        alert ('Меньше года: '+ years);
    }
        if (mounth < 1) {
            alert ('Меньше месяца: ' + mounth);
        }
            if (weeks < 1) {
                alert ('Меньше недели: '+ weeks);
            }
            else {
                alert ('Недели: '+ weeks);
                alert ('Часы: '+hours);
                alert ('Минуты: '+ minuts);
                alert ('Секунды: '+sec);
            }

if (years>1 && mounth > 1 && weeks >1 ) {
    
    alert ('Дни: ' + day);
    alert ('Года: '+ years);
    alert ('Месяцы: ' + mounth);
    alert ('Недели: '+ weeks);
    alert ('Часы: '+hours);
    alert ('Минуты: '+ minuts);
    alert ('Секунды: '+sec);
}