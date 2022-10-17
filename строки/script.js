// // \t — табуляция
// var str = "Sun\t is going \\down\\";
// // Sun is going \down\
// alert(str);

// var str = "trees and fruits";
// // на экране trees and fruits
// alert(str);
// // на экране t
// alert(str[0]);
// // на экране s
// alert(str[4]);

// var str = "FootbalL";
// var newStr = str.toLowerCase();
// // football
// alert(newStr);
// // FootbalL
// alert(str);


// var str = "earth and sun";
// var index = str.indexOf("sun");
// // значение индекса равно 10
// alert(index);
// index = str.indexOf("moon");
// // значение индекса равно -1
// // так как moon нет в строке
// alert(index);

/* А теперь посчитаем сколько раз некоторое слово
встречается в строке: */


// var str = "test it is test sun test no";
// var counter = 0;
// var wordToFind = "test";
// var index = str.indexOf(wordToFind);
// while(index != -1){
//  counter++;
//  index = str.indexOf(wordToFind,index+1);
// }
// // 3
// alert(counter);



