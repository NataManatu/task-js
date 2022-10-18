//. Объект. Массивы. Строки. Введение в ООП

/* Задание 1
С помощью методов setTimeout() или setInterval() выведите в тело документа методом document.write() первую строку из монолога Гамлета «To be, or not to be, that
is the question...» так, чтобы буквы появлялись по одной
через 200-300 миллисекунд, а затем с новой строки также методом document.write() нужно вывести «William
Shakespeare, from "Hamlet"» (видео 1). Если видео не работает, посмотреть, как это выглядит, можно в файле
hamlet.gif (файл прикреплен к данному pdf-файлу). */

function text() {
    let txt1 = document.write("<h5> To be, or not to be, that is the question </h5>")
}
setTimeout(text, 2000)

