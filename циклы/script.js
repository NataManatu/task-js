// FOR
// от 4 до 400
// let out = document.querySelector(".out")
// let tmp = " "
// for (let index = 4; index <= 400; index++) {
//     tmp = tmp + index + " "
//     out.innerText = tmp
// }


// от 654 до 0
// for (let index = 654; index >= 0; index--) {
//     tmp = tmp + index + "<br>"
//     out.innerHTML = tmp
// }


//от и до
// for (let index = -4; index <= 100; index++) {
//     tmp = tmp + index + " "
//     out.innerHTML = tmp
// }


// for (let index = 1; index <= 9; index++) {
//     tmp = tmp +7+"*"+index+"="+7*index+"<br>"
//     out.innerHTML = tmp
// }


// for (let index = 0; index < 8; index++) {
//     console.log(index)
//     if (index == 4) break
// }
// let person = "tom"
// console.log(`hello!${person}`)


//WHILE
/* 
величина ежемесячного платежа хранится в переменной
«monthlyPayment», сумма кредита — в переменной «creditAmount», кредитная ставка — в переменной «creditRate».
Дополнительно в переменной «month» будем хранить количество моделированных месяцев. Тогда программный
фрагмент будет выглядеть следующим образом */

// month = 0;
// while (creditAmount > 0) {
//     creditAmount = creditAmount * creditRate;//
//     creditAmount = creditAmount - monthlyPayment;//из суммы кредита вычитаем ежемесячный платеж
//     month++;
// }


/* Рассмотрим еще одну задачу: мы хотим накопить
1 миллион у.е., получая проценты по банковскому вкладу
(депозиту). Каждый год на наш вклад начисляется 10%
и эти начисления добавляются к основному вкладу. То
есть при вкладе 1000 у.е. в конце первого года будет начислено 100 у.е. и они добавятся к вкладу, увеличив его
до 1100 у.е. В конце второго года 10% уже будет начислено
13
Циклы
на текущую сумму и составит 110 у.е., увеличив в итоге
вклад до 1210 у.е. Нас интересует, за сколько лет наш
вклад достигнет 1 миллиона у.е.
Задача подобна предыдущей, только сумма вклада не
уменьшается, а увеличивается, и условие выхода заключается не в обнулении суммы, а достижения заданного
предела (1 млн.). Соответственно, для данной задачи также предпочтительно использовать условный цикл.
Оформим решение задачи в виде отдельного самостоятельного документа. */

// var fund = +prompt("Первоначальный взнос:");
// var years = 0;
// while (fund < 1e6) {
//     fund = fund + fund * 0.1; // 0.1 = 10%
//     years++;
// }
// alert(`Вы станете миллионером через ${years} лет`);



//DO WHILE
/* 
Мы хотим получить два случайных числа,
но не равных между собой. То есть при совпадении двух
чисел нам нужно повторить запрос случайного числа (совпадение часто бывает, когда количество чисел небольшое, например, при играх с кубиком). Если после повтора
снова обнаруживается равенство, нужно обеспечить еще
один повтор, и так далее.
Первое число получаем обычным образом «x1=Math.
random()». Второе число надо рассчитать как минимум
один раз, а при совпадении с первым — рассчитывать
повторно. Для этого как нельзя лучше подходит цикл
с постусловием: «do x2= Math.random(); while(x2==x1)».
Если второе число отличается от первого, то никаких
повторов не будет. Если же совпадет — сработает условие
цикла и расчет будет повторен.
Если второе число отличается от первого, то никаких
повторов не будет. Если же совпадет — сработает условие
цикла и расчет будет повторен. */

// x1 = Math.random();
// do
//     x2 = Math.random();
// while (x2 == x1)

//FOR
/* у  пользователя нужно получить
подтверждение некоторого действия. Мы не хотим использовать диалог «confirm», т.к. в нем можно случайно
нажать пробел, «Enter» или «Esc». Нам нужно уверенное
подтверждение, то есть пользователь должен ввести либо
«yes», либо «no». В ином случае мы будем выводить запрос повторно, ожидая одного из двух ответов. Так как
запрос нужно выводить как минимум один раз, цикл
с постусловием будет предпочтительным: */
// var txt;
// do
//     txt = prompt("Confirm: yes or no")
// while (txt != "yes" && txt != "no")



/* 
В качестве примера рассмотрим реализацию оставшихся функций кредитного калькулятора. В простейшем
случае мы рассчитываем ежемесячные платежи кредита,
оформленного на год. Будем считать, что годовая ставка
кредита составляет 20% и она сразу начисляется на всю
сумму, не меняясь в зависимости от ежемесячных платежей. */

// fund = +prompt("Сумма кредита");
// creditBody = fund + 0.2 * fund;
// monthlyPayment = creditBody / 12;
// for (i = 1; i <= 12; i++)
//     console.log("month " + i +
//         " payment " + monthlyPayment);



/*
Второй вариант калькулятора будет запрашивать
еще и срок кредитования. Будем считать, что срок должен вводиться в месяцах. Тогда в программе появится
дополнительная переменная «months», хранящая в себе
24
Unit 3. Циклы
указанный срок. Аналогично сумме кредита она будет
запрошена у пользователя диалоговым окном «prompt». */

// fund = +prompt("сумма кредита");
// months = +prompt("на какой период(месяц)");
// creditBody = fund + 0.2 * fund * months / 12;
// monthlyPayment = creditBody / months;
// for (i = 1; i <= months; i++)
//     console.log("month " + i + " payment " + monthlyPayment);


/* Задача: нужно сгенерировать не больше десяти случайных чисел из диапазона 1–7. В случае если выпадает
четверка, генерация прекращается. */

// for (i = 0; i < 10; i++) {
//     rnd = Math.round(Math.random() * 6) + 1;
//     if (rnd == 4) break;
//     console.log(rnd);
// }


/* Поменяем условие задачи — нужно сгенерировать
ровно 10 случайных чисел, но без четверок.
В данном случае появление четверки должно прерывать текущую итерацию цикла и запускать следующую,
пока не наберется 10 чисел. Т.к. числа случайные и появление четверок непредсказуемо, количество итераций
нам заведомо неизвестно. Значит, стоит отдать предпочтение условному циклу. Код тела цикла, в принципе,
остается таким же, только в отличие от предыдущего
условия задачи, остановка цикла заменяется на остановку итерации, то есть оператор «break» заменяется на
«continue». */

// i = 0;
// while (i < 10) {
//     rnd = Math.round(Math.random() * 6) + 1;
//     if (rnd == 4) continue;
//     i++
//     console.log(rnd);
// }


/* при помощи нескольких циклов, вложенных друг в друга. В такой ситуации может появиться необходимость
прервать итерацию или выполнение «верхнего» цикла,
а не только данного. Для реализации такой возможности
в JavaScript предусмотрены метки.
Метка представляет собой идентификатор (имя),
сформированный согласно общим правилам именования
переменных, после которого указывается двоеточие «:».
Метка служит для указания определенного места в коде,
как правило — цикла. В следующем примере использованы две метки: «loopI» и «loopJ», относящиеся к циклам
с соответствующей цикловой переменной (i или j). */


// loopI: for (i = 0; i < 5; i++)
//     loopJ: for (j = 0; j < 5; j++) {
//         console.log(i, j);
//         if (j == 3) break loopI;
//     }


//ЗАДАЧИ ПО ДЗ

/* 1. Напишите скрипт, который запрашивает у пользователя число N и выводит все четные числа от 2 до N
или N-1, если N нечетное. Например: ввод 10, вывод
2 4 6 8 10; ввод 7, вывод 2 4 6. */

// const num = +prompt("Введите число");

// let i = 0
// while (i < num) {
//     i++
//     if (i % 2 == 0) {
//         console.log(i);
//     }  
// }


/* 2. Напишите скрипт, который запрашивает у пользователя число N и выводит все нечетные числа от N(или
N - 1, если N четное) до 1 в порядке убывания.Например, ввод 7, вывод 7 5 3 1; ввод 10, вывод 9 7 5 3 1.
 */

// const num = +prompt("Введите число");

// for (let index = num; index >= 1; index--) {
//     if (index % 2) {
//         console.log(index);
//     }
// }


/* 3. Напишите скрипт, который запрашивает у пользователя число N и выводит все числа, на которые делится
N, включая число 1 (примеры: ввод N=10, вывод 1, 2,
5; ввод 11, вывод 1). */

// const num = +prompt("Введите число");

// let i = 0
// while (i < num) {
//     i++
//     if (num % i == 0) {
//         console.log(i);
//     }
// }


/* 4. Напишите скрипт, который принимает от пользователя величину годовой депозитной ставки (в процентах) и выводит количество лет, по прошествии
которых вклад увеличится вдвое. */


// let money = 1
// const yearDepozit = +prompt("введите величину годовой ставки (проценты)");
// const yDPercent = yearDepozit/100
// let i = 0;
// while(money<2){
//   money += money*yDPercent// выводим из процента
//   i++
// }
// console.log(`Через ${i} лет ваш вклад увеличится вдвое`)



/* 5. Напишите скрипт, который выводит ровно 10 случайных чисел из диапазона 1–20, кроме тех, которые
делятся на 4. */

// i = 0;
// while (i < 10) {
//     rnd = Math.round(Math.random() * 19) + 1;
//     if (rnd % 4 == 0) continue;
//     i++
//     console.log(rnd);
// }



/* 6. Из-за утечки из бака охлаждения ежедневно вытекает
10% налитой воды. При объеме воды менее 10 литров
возникает аварийная ситуация. Составьте программу, которая запрашивает у пользователя первоначальный объем воды и рассчитывает, на сколько дней
работы этого хватит. */

// let totalWaterVolume = prompt("Введите первоначальный объем воды");

// i = 10
// while (i < totalWaterVolume) {
//   const leakingWater = totalWaterVolume * 0.1; // процент вытекшей воды  0.1 = 10%
//   totalWaterVolume -= leakingWater; //   общий остаток 
//   i++

// }
// console.log(`вам хватит на ${i} дней`);


