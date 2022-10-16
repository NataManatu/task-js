// создали объект
// var obj = {};
// obj.Name = "Oleg";
// // проверяем есть ли свойство Age
// // in вернет false, так как этого свойства нет
// if ("Age" in obj) {
//     alert("Существует");
// }
// else {
//     alert("не существует");
// }



// создали объект студента
// var student = {
//     name: "Daria",
//     lastName: "Kislicina",
//     age: 23,
//     adress: {
//         street: "Tiraspolskaya 5",
//         city: "Odessa",
//         country: "Ukraine"
//     }

// };
// /*
//  То же самое, что и выше
//  var student = {};
//  student.name = "Daria";
//  student.lastName = "Kislicina";
//  student.age = 23;
// */
// alert(student.lastName);
// alert(student.adress.street);
// alert(student.adress.city);

// var rect={
//     x:0,
//     y:0,
//     endX:10,
//     endY:10
//    };

//    for(var tempProperty in rect){
//     // отображаем название свойства
//     // alert(tempProperty);
//     // значение свойства
//     alert(rect[tempProperty]);
//    }