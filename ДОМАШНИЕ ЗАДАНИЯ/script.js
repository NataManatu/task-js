//. Объект. Массивы. Строки. Введение в ООП

/* Задание 1
С помощью методов setTimeout() или setInterval() выведите в тело документа методом document.write() первую строку из монолога Гамлета «To be, or not to be, that
is the question...» так, чтобы буквы появлялись по одной
через 200-300 миллисекунд, а затем с новой строки также методом document.write() нужно вывести «William
Shakespeare, from "Hamlet"» (видео 1). Если видео не работает, посмотреть, как это выглядит, можно в файле
hamlet.gif (файл прикреплен к данному pdf-файлу). */

// let str = " To be, or not to be, that is the question"

// let str2 = "<br>William Shakespeare, from 'Hamlet'"

// for (let i = 0; i < str.length; i++) {setTimeout(()=>{document.write(str[i])}, i*200)}


// setTimeout(secondStr, str.length*200+500)

// function secondStr() {
//     for (let i = 0; i < str2.length; i++) {
//         setTimeout(function () {
//             document.write(str2[i])
//         }, i*200)
//     }
// }

/* Задание 2
Рассчитайте, сколько дней, часов, минут и секунд
осталось до Нового года. Выведите эти значения красиво, используя метод document.write() с тегами <p> и
<span> и классами для них. Стили можно записать в отдельном css-файле. Если одно из чисел будет меньше 10,
то его нужно вывести с ведущим 0.Сделайте свой скрипт универсальным, задав дату следующего Нового года 
относительно текущей даты с помощью методов объекта Date.  */


// today = new Date()
// newYear = new Date("January 1, 2023")
// // getDays = Math.round((newYear - today) / 24 / 60 / 60 / 1000);
// // getHours = Math.round((newYear - today) / 60 / 60 / 1000);
// // getMin = Math.round((newYear - today) / 60 / 1000);
// getSecond = Math.round((newYear - today) / 1000);
// // console.log(getHours)
// // console.log(getSecond)
// document.write(`<p>До Нового года осталось</p><br> <span>${Math.floor(getSecond/24/60/60%365)}</span>  <span>${Math.floor(getSecond/60/60%24)}</span>  <span>${Math.floor(getSecond/60%60)}</span>  <span>${Math.floor(getSecond%60)}</span><br><br> <span id="span">дня</span> <span id="span">часа</span> <span id="span">минут</span> <span id="span">секунд</span> `) 


//ЗАДАЧА-3


let list = {
    produkt5: "apple",
    produkt3: "kiwi",
    produkt4: "tomato",
    produkt2: "potato",
    produkt1: "plum",
    produkt6: "lemon"
}


for (var i in list) {
    document.write(`<br> ${list[i]}`);//перебор значений
}

// console.log( Object.keys(list).sort())//сортировка по ключю(имени)

