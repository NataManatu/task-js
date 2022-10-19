//. Объект. Массивы. Строки. Введение в ООП

/* Задание 1
С помощью методов setTimeout() или setInterval() выведите в тело документа методом document.write() первую строку из монолога Гамлета «To be, or not to be, that
is the question...» так, чтобы буквы появлялись по одной
через 200-300 миллисекунд, а затем с новой строки также методом document.write() нужно вывести «William
Shakespeare, from "Hamlet"» (видео 1). Если видео не работает, посмотреть, как это выглядит, можно в файле
hamlet.gif (файл прикреплен к данному pdf-файлу). */

// let str = " To be, or not to be, that is the question"

// let str2 = "<br>William Shakespeare, from 'Hamlet'"

// for (let i = 0; i < str.length; i++) {
//     setTimeout(function () {
//         let element = str[i];
//         document.write(element)
//     }, 3000)

// }
// for (let i = 0; i < str2.length; i++) {
//     setTimeout(function () {
//         let element = str2[i];
//         document.write(element)
//     }, 4000)

// }

/* Задание 2
Рассчитайте, сколько дней, часов, минут и секунд
осталось до Нового года. Выведите эти значения красиво, используя метод document.write() с тегами <p> и
<span> и классами для них. Стили можно записать в отдельном css-файле. Если одно из чисел будет меньше 10,
то его нужно вывести с ведущим 9.Сделайте свой скрипт универсальным, задав дату следующего Нового года 
относительно текущей даты с помощью методов объекта Date.  */


today = new Date()
newYear = new Date("December 31, 2022")
getDays = Math.round((newYear - today) / 24 / 60 / 60 / 1000);
getHours = Math.round((newYear - today) / 60 / 60 / 1000);
getMin = Math.round((newYear - today) / 60 / 1000);
getSecond = Math.round((newYear - today) / 1000);
console.log(getHours)
console.log(getSecond)
document.write(`<p>До Нового года осталось</p><br> <span>${getDays}</span>  <span>${getHours}</span>  <span>${getMin}</span>  <span>${getSecond}</span><br><br> <span id="span">дня</span> <span id="span">часа</span> <span id="span">минут</span> <span id="span">секунд</span> `) 