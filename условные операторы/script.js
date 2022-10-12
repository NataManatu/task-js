// let a = 2;
// if (a > 27) {
//     console.log("да")
// }
// else { console.log("нет") }

const button = document.querySelector("button");
const input = document.querySelector(".age");
// стрелочная функция для анонимной,если код пишется один раз
button.onclick = () => {
    let num = +input.value;
    if (num >= 16 && num < 60) {
        alert("welcome")
    }
    else if (num > 60) {
        alert("))))")
    }
    else {
        alert("не пройдешь")
    }
    input.value = ""

    switch (num) {
        case 15:
            alert("qq")
            break;
        case 16:
            alert("ww")
            break;
        case 17:
            alert("ee")
            break;
        default:
           alert("ok")
    }
}


