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


//Задача № 5

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