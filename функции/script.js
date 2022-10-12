//ФУНКИИ

/*  Создайте функцию sayError(), которая будет выводить (при помощи диалогового окна alert) сообщение 
 с текстом «Some error occurred!».*/

// function sayError() {
//     alert("Some error occurred!");
// }
// sayError()


//  Создайте функцию showError(x), которая будет выводить (при помощи диалогового окна alert) сообщение 
//  с текстом «Error X occurred!», где Х — текст из аргумента функции (например, вызов showError(‘Out of 
// memory’) должен вывести сообщение «Error Out of 
//  memory occurred!»).

// function showError(x,y) {
//     alert(`Error ${x} occurred! Code ${y}`);

// }
// showError("Out of memory",1)
// showError("All gone",2)


// Создайте функцию createHeaders(N), которая создаст
// на странице N заголовков второго уровня (<h2>) с надписями Header1, Header2 … HeaderN

/* let headers = document.querySelector("#headers")
function createHeaders(N) {
  let h1 = document.createElement("h1")
  h1.innerHTML = `<h1> ${N} </h1>`
  headers.appendChild(h1)
}
createHeaders("Header1")
createHeaders("Header2")
createHeaders("HeaderN") */


// Создайте функцию checkPassword(x), которая вернет 
// значение true, если в качестве аргумента в нее будет 
// передан допустимый пароль (одно из значений «Step», 
// «Web» или «JavaScript»). Иначе функция должна вернуть false.

/* function checkPassword(x) {
    const pass = ['Web', 'Step', 'JS']
    if(pass.includes(x)) {
        console.log(x, true)
    } else {
        console.log(x, false)
    }   
}
checkPassword('sfdsf')
checkPassword('Step')
checkPassword('web')
checkPassword('Web')
checkPassword('JS')
checkPassword('JavaScript') */

//решение 2

/* function checkPassword(x) {

  if (x == "Step" || x == "Web" || x == "JavaScript") {
    console.log(x, true)
  } else {
    console.log(x, false)
  }
}
checkPassword('sfdsf')
checkPassword('Step')
checkPassword('web')
checkPassword('Web')
checkPassword('JS')
checkPassword('JavaScript') */


/* Создайте функцию определения знака числа sign(x),
которая вернет значение –1, если аргумент «х» — отрицательное число, 1 — если положительное, 0 —
если аргумент «х» равен нулю */

function sign(x) {

  if (x > 0) {
    return 1;
  }
  if (x < 0) {
    return -1;
  }
  if (x == 0) {
    return 0
  }
  else {
    return NaN;
  }

}

console.log(sign(100))
console.log(sign(-100))
console.log(sign(0))
console.log(sign(-0))

//решение 2

// let x = prompt('Введите число');

// if (x > 0) {
//   alert(1);
// } else if (x < 0) {
//   alert(-1);
// } else if (x == 0) {
//   alert(0);
// }
// else {
//   return NaN;
// }


/*  Предложите имя (согласно правилам именования)
и создайте функцию, которая будет возвращать названия дней недели по их номеру: 0-Sunday, 1-Monday,
2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday */

// function weekDays(week){
//   if(week==0){
//     console.log("Sunday")
//   }
//   else if(week==1){
//     console.log("Monday")
//   }
//   else if(week==2){
//     console.log("Tuesday")
//   }
//   else if(week==3){
//     console.log("Wednesday")
//   }
//   else if(week==4){
//     console.log("Thursday")
//   }
//   else if(week==5){
//     console.log("Friday")
//   }
//   else if(week==6){
//     console.log("Saturday")
//   }
//   else{
//     console.log("ты не на той планете")
//   }

// }
// weekDays(0)
// weekDays(1)
// weekDays(2)
// weekDays(3)
// weekDays(4)
// weekDays(5)
// weekDays(6)
// weekDays(7)
