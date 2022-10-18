//. Объект. Массивы. Строки. Введение в ООП

/* Задание 1
С помощью методов setTimeout() или setInterval() выведите в тело документа методом document.write() первую строку из монолога Гамлета «To be, or not to be, that
is the question...» так, чтобы буквы появлялись по одной
через 200-300 миллисекунд, а затем с новой строки также методом document.write() нужно вывести «William
Shakespeare, from "Hamlet"» (видео 1). Если видео не работает, посмотреть, как это выглядит, можно в файле
hamlet.gif (файл прикреплен к данному pdf-файлу). */

let str = " To be, or not to be, that is the question"
let str2 = "<br>William Shakespeare, from 'Hamlet'"

for (let i = 0; i < str.length; i++) {
    setTimeout(function () {
        let element = str[i];
        document.write(element)
    }, 3000)

}
for (let i = 0; i < str2.length; i++) {
    setTimeout(function () {
        let element = str2[i];
        document.write(element)
    }, 4000)

}



