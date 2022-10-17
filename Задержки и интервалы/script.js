//SETTIMEOUT
// function HelloWorld(){
//     alert("Hello world!");
//    }
//    setTimeout(HelloWorld, 1000);

// setTimeout(function() {
//     alert("dd")}, 100);

/* Попробуем передать аргументы в функцию: */
// function Sum(a,b){
//  alert(a+b);
// }
// setTimeout(Sum, 1000,1,2);//3

// setTimeout("alert('hi')", 1000);

/* 
После установки таймера возвращается идентификатор. Его можно использовать для отмены вызова функции. */

// var id = setTimeout(function () {
//     alert("Boom!")
// }, 3000);

// alert("id timer: " + id);

/* Функция отмены
таймера clearTimeout. */
// clearTimeout(идентификатор_таймера)

// var id = setTimeout(function () {
//     alert("Boom!")
// }, 3000);

// clearTimeout(id);

//SETINTERVAL

// setInterval(
//     function(){
//     alert("Boom!");
//     },
//     2000);

/* Теперь добавим вызов clearInterval. */

// var id = setInterval(IntervalFunc, 2000);
// var counter = 0;
// function IntervalFunc() {
//     if (counter == 3) {
//         clearInterval(id);
//         return;
//     }
//     counter++;
//     alert("Boom");
// }

let interval = document.querySelector(".interval")
// let counter = 0
// setTimeout(function () {
//     interval.style.display = "none"
// },
//     2000)


