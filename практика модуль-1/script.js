//WEEK_1

/* 1.Запросите у пользователя число, возведите это число во
2-ю степень и выведите на экран. */

// let number = prompt("Введите число")
// alert( Math.pow(number, 2))


/* 2
Запросите у пользователя 2 числа и выведите среднее ариф-
метическое этих чисел. */

// let number = +prompt("Введите число")
// let number_2 = +prompt("Введите второе число")
// let res = number + number_2 / 2
// alert(res)


/* 3
Запросите у пользователя длину стороны квадрата и вы-
ведите площадь такого квадрата. */

// let number = +prompt("Введите длину квадрата")
// let res = (number + number) * 2
// alert(res)


/* 4
Реализуйте конвертор из километров в мили (пользователь
вводит километры, программа выводит мили). 1 км = 0,621371
миль. Это значение укажите в коде как константу. */

// let number = +prompt("Введите число (в км)")
// let res = number * 0.62
// alert (`в ${number} км ${res} миль`)


/* 5
Реализуйте калькулятор. Пользователь вводит два числа,
а программа выводит результаты действий + - * / между
этими числами. */

// let number = +prompt("Введите число")
// let number_2 = +prompt("Введите второе число")
// let resSum = number + number_2
// let resMin = number - number_2
// let resMulti = number * number_2
// alert(` сумма: ${resSum} разность: ${resMin} произведение: ${resMulti}`)


/*6
Пользователь вводит значения a и b для формулы a * x + b = 0,
а программа считает и выводит значение x. */

// let a = prompt("Введите значение а (для формулы : ax + b = 0)")
// let b = prompt("Введите значение b (для формулы : ax + b = 0)")
// let x = -b / a
// alert(`X = ${x}`)


/* 7
Запросите у пользователя текущее время (часы и минуты)
и выведите, сколько часов и минут осталось до следующего
дня. */

// let time = prompt("Введите текущее время в часах и минутах")


/* 8
Запросите у пользователя трехзначное число и выведите
вторую цифру этого числа. Для решения задачи используйте
оператор % (остаток от деления). */

// let number = prompt("Введите трехзначное число")
// let number_2 = Math.floor((number % 100) / 10)
// alert(number_2)


/* 9
Запросите у пользователя пятизначное число и переме-
стите последнюю цифру в начало (из числа 12345 должно
получиться число 51234). */

// let number = prompt("Введите пятизначное число")
// let number_2 = number % 10

// alert(number_2 + number)




/* 10 Зарплата работника составляет $250 + 10% от продаж.
Запросите общую сумму продаж за месяц и посчитайте
зарплату. */
// let sum = +prompt("Введите общую сумму продаж")
// let pr = sum * 0.1
// let zp = sum + pr
// alert(zp)




// //WEEK_2

/* 1
Запросить у пользователя число и определить, оно поло-
жительное, отрицательное или ноль. */
// let x = +prompt("Введите число ")

// if (x > 0) {
//     alert("вы ввели положительное число");
// }
// else if (x < 0) {
//     alert("вы ввели отрицательное число");

// }
// else if (x == 0) {
//     alert("вы ввели 0");
// }
// else {
//    alert("введите число!")
// }



/* 2
Запросить у пользователя его возраст и проверить кор-
ректность введенных данных (0–120 лет).
 */

// let year = prompt("Введите свой возраст")

// if (year > 120) {
//     alert("вы долгожитель")
// }
// else if (year <= 0) {
//     alert("введите корректные данные")
// }
// else if (year <= 120) {
//     alert("hello!")
// }

// else {
//     alert("введите корректные данные")
// }



/* 3
Запросить у пользователя число и вывести его модуль
(|7| = 7, |-7| = 7). */

// let number=prompt("Введите число")
// alert(Math.abs(number) )



/* 4
Запросить у пользователя время (часы, минуты, секунды)
и проверить корректность введенных данных. */

// let hoursMin = prompt("Введите время формат (часы, минуты, секунды)")



/* 5
Запросить координаты точки (x, y) и определить номер
четверти, в которую попала эта точка. Необходимо учесть
случаи попадания точки на оси X или Y или в начало
координат. */

// let x = prompt("введите координаты точки X");
// let y = prompt("введите координаты точки Y");

// if ((x > 0) && (y > 0))
//     console.log("I четверть");
// else {
//     if ((x < 0) && (y > 0))
//         console.log("II четверть");
//     else {
//         if ((x < 0) && (y < 0))
//             console.log("III четверть");
//         else {
//             if ((x > 0) && (y < 0))
//                 console.log("IV четверть");
//             else
//                 console.log("Точка лежит на оси");
//         }
//     }
// }



/* ■ Задания, в которых необходимо использовать SWITCH.
1.Запросить у пользователя номер месяца и вывести на экран
его название. */

// let month = prompt("введите номер месяца")
// switch (month) {
//     case '1':
//         document.write("январь")
//         break;
//     case '2':
//         document.write("февраль")
//         break;
//     case '3':
//         document.write("март")
//         break;
//     case '4':
//         document.write("аперль")
//         break;
//     case '5':
//         document.write("май")
//         break;
//     case '6':
//         document.write("июнь")
//         break;
//     case '7':
//         document.write("июль")
//         break;
//     case '8':
//         document.write("август")
//         break;
//     case '9':
//         document.write("сентябрь")
//         break;
//     case '10':
//         document.write("октябрь")
//         break;
//     case '11':
//         document.write("ноябрь")
//         break;
//     case '12':
//         document.write("декабрь")
//         break;
//     default:
//         document.write("введите число от 0-12")
// }



/* 2
Реализовать калькулятор. Пользователь вводит 2 числа и
знак (+ - * /). В зависимости от введенного знака решить
пример и вывести результат. */

// let number = +prompt("Введите число")
// let number_2 = +prompt("Введите второе число")
// let operator = prompt("Введите оператор(+,-,/,*)")

// switch (operator) {
//     case "+":alert(number + number_2)
//         break;
//     case "-": alert(number - number_2)
//         break;
//     case "/": alert(number / number_2)
//         break;
//     case "*": alert(number * number_2)
//         break;

//     default:
//         alert("некорректные данные")
//         break;
// }



/* ■ Задания, в которых необходимо использовать тернарный
оператор. */
/* 1
Запросить 2 числа и вывести большее из них. */

// let number = +prompt("Введите число")
// let number_2 = +prompt("Введите второе число")

// if (number > number_2) alert(number);
// else if (number_2 > number) alert(number_2);
// else alert('=');



/* 2
Запросить 1 число и проверить, оно кратно 5 или нет. */

// let number = +prompt("Введите число")

// if (number % 5 == 0) {
//     alert("кратно 5")
// }
// else{alert("не кратно 5")}



/* 3
Запросить у пользователя название планеты. Если поль-
зователь ввел «Земля» или «земля», то вывести «Привет,
землянин!», в остальных случаях вывести «Привет, ино-
планетянин!». */

// let planet = prompt("введите название планеты")

// if (planet === "земля" || planet === "Земля") {
//     alert("Привет,землянин!")
// }
// else {
//     alert(" вы с другой планеты")
// }



//WEEK-3

/* 
Задание
Для вывода данных используйте alert() или document.
write(). Для ввода данных используйте prompt() и confirm().
■ Задания, в которых необходимо использовать WHILE. */


/* 1
Вывести # столько раз, сколько указал пользователь. */

// let number = prompt("введите число")

// i = 1
// while (i <= number) {
//     document.write("#")
//     i++ 
// }


/* 2
Пользователь ввел число, а на экран вывелись все числа
от введенного до 0 */

// let num = +prompt("введите число")

// for (let index = num; index >= 0; index--) {
//         document.write(index);
//     }


/* 3
Запросить число и степень. Возвести число в указанную
степень и вывести результат. */

// let num = +prompt("введите число")
// let st = +prompt("введите степень")

// document.write(Math.pow(num,st))


/* 4
Запросить 2 числа и найти все общие делители. */

// let num1 = +prompt("введите число")
// let num2 = +prompt("введите второе число")

// let i = 0
// while (i < num1) {
//     i++
//     if (num1 % i == 0) {
//         console.log(i);
//     }
// }
// let j = 0
// while (j < num2) {
//     j++
//     if (num2 % j == 0) {
//         console.log(j);
//     }

// }

/* 
5
Посчитать факториал введенного пользователем числа. */

// let num1 = +prompt("введите число")
// let i = 1;

// while (num1--)
//     i *= num1 + 1

// alert(i);


/* ■ Задания, в которых необходимо использовать DO WHILE.
1
Предлагать пользователю решить пример 2 + 2 * 2 до тех
пор, пока он не решит его правильно. */

// let num = +prompt("решите пример 2 + 2 * 2 =?")

// let i = 1;
// do {
// alert("не верно")
// } while (num == 6);


/* 2
Делить число 1000 на 2 до тех пор, пока не получится число
меньше 50 Вывести это число и сколько делений произвели. */



/* ■ Задания, в которых необходимо использовать FOR.
3
Вывести все числа от 1 до 100, которые кратные указанному
пользователем числу. */

// let num = +prompt("введите число от 1 до 100")
// let res = ""
// for (let i = 1; i < 100; i++) {
//     if (i % num == 0) {
//         alert(res = res + i + " ")
//     }
// }

/* 4
Вывести каждый 4-й элемент из указанного пользователем
диапазона. Пользователь указывает минимальное и мак-
симальное значения диапазона. */

// let num1 = parseInt(prompt("введите минимальное число"))
// let num2 = parseInt(prompt("введите максимальное число"))
// for (let index = num1; index <= num2; index+4) {
//   console.log(index)

// }


/* 5
Запросить число и проверить, простое ли оно. Простое
число делится без остатка только на себя и на единицу. */

// let num1 = parseInt(prompt("введите число"))

// for (let i = 2; i <= num1; i++) {
//   for (let j = 2; j <= i; j++) {
//     if ((i % j == 0) && (j != i)) {
//       break;
//     } else {
//       console.log(i);
//       break;
//     }
//   }
// }



//WEEK-4


/* 1
Написать функцию, которая принимает 2 числа и возвра-
щает меньшее из них. */

function num(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(num(10, 49))//выведет 10