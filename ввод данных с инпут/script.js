let inputIn = document.querySelector(".input-in");
let button = document.querySelector("button");
let div = document.querySelector(".out")


button.addEventListener("click", function () {
    // console.log(inputIn.value);
    let b = +inputIn.value;//перевести в число строку
    console.log(b + 10);
    div.innerHTML = b
    inputIn.value = "";

});