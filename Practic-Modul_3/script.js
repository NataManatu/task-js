/* Задание 1
Создать html-страницу для ввода имени пользователя.
Необходимо проверять каждый символ, который вводит поль-
зователь. Если он ввел цифру, то не отображать ее в input. */

const inputName = document.querySelector("#inputName")

inputName.addEventListener("change", function () {
    const valInp = inputName.value
    
    console.log(valInp)
})

