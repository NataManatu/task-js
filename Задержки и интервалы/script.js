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