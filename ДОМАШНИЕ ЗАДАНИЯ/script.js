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



//Задание 3

// const list = {
//     values: ["apple", "kiwi", "tomato", "potato", "plum", "lemon"],
//     printList: function () {
//         newList = this.values.sort(function (a, b) {
//             if (a < b)
//                 return -1
//             if (a > b)
//                 return 1
//             return 0
//         })
//         for (let i in this.values) {
//             document.write(`<br>${Number(i) + 1}. ${this.values[i]}`);//перебор значений
//         }
//     },
//     add: function (item) {
//         this.values.push(item)
//     }
// }

// list.printList()
// list.add('carrot')
// list.printList()
// list.values = ['c++', 'js', 'ts', 'python']
// list.printList()
// console.log( Object.keys(list).sort())//сортировка по ключю(имени)


//задание 4


/* Создайте класс MyButton, который принимает 2 параметра в виде текста (text) и класса кнопки (btnClass).
Опишите в нем метод show(), который выводит методом
document.write() экземпляр кнопки в тело html-страницы. Предусмотрите геттер и сеттер, которые позволяют
получить и изменить свойство value кнопки, которое на
самом деле изменяет ее свойство text.
Опишите в стилях для страницы несколько классов,
которые позволят создать разные экземпляры кнопок.
Выведите несколько кнопок методом show(), для одной из них поменяйте текст:

Создайте класс ColorButton, который наследует класс
MyButton, добавив в него дополнительный класс, который позволяет менять цвет фона и текста кнопки, добавляя к экземпляру ColorButton 
помимо основного дополнительный класс. Например, экземпляр ColorButton
будет вызываться с такими параметрами:
let btnColor = new ColorButton("See more", "btn",
 "btn-danger");
Кнопка, выведенная с помощью метода show() будет
иметь такой код:
<button type="button" class="btn btn-danger">
 See more
</button> */

class MyButton {
    constructor(text, cssClass) {
        this.text = text
        this.cssClass = cssClass
    }
    show() {
        document.write(`
        <button type="button" class="${this.cssClass}">
            ${this.text}    
        </button>
    `)
    }
    getVal() {
        return this.text
    }
    setVal(t) {
        this.text = t
    }
}

b = new MyButton('save progress', 'btn_1')
b.show()
b.setVal('click me', 'btn_2')
b.show()
b.setVal('Download', 'btn_3')
b.show()
b.setVal('See more', 'btn_4')
b.show()