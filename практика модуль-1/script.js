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

// let hoursMin = prompt("Введите текущее время в часах и минутах")


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

let number = prompt("Введите пятизначное число")




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