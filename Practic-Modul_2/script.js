// WEEK-1 PZ-DZ

/* Задание
Создать объект, описывающий прямоугольник (хранит коор-
динаты левой верхней и правой нижней точек), и написать следу-
ющие функции для работы с таким объектом.


1.Функция принимает объект-прямоугольник и выводит
информацию о нем (где какая точка расположена). */

const rectangle = {
    startPoint: {
        x: 0,
        y: 0
    },
    endPoint: {
        x: 10,
        y: 15
    },
    getRectPoints: function () {
        console.log('startPoint (', this.startPoint.x, ',', this.startPoint.y, ')')
        console.log('endPoint (', this.endPoint.x, ',', this.endPoint.y, ')')
    },
    getRectWide: function () {
        return this.endPoint.x - this.startPoint.x
    },
    getRectHeight: function () {
        return this.endPoint.y - this.startPoint.y
    },
    getRectArea: function () {
        return this.getRectWide() * this.getRectHeight()
    },
    getRectPerim: function () {
        return (this.getRectWide() + this.getRectHeight()) * 2
    },

    getRectWidePlus: function () {
        return this.getRectWide()
    },
    getRectHeightPlus: function () {
        return this.getRectHeight() + 100
    },

}

rectangle.getRectPoints()


/* 2
Функция принимает объект-прямоугольник и возвращает
его ширину. */
let width = rectangle.getRectWide()
console.log('width', width)


// 3. Функция принимает объект-прямоугольник и возвращает его высоту.
let height = rectangle.getRectHeight()
console.log('height', height)


/* 4.Функция принимает объект-прямоугольник и возвращает
его площадь. */
let area = rectangle.getRectArea()
console.log('area', area)

/* 5
Функция принимает объект-прямоугольник и возвращает
его периметр. */
let perimetr = rectangle.getRectPerim()
console.log('perimetr', perimetr)

/* 6
Функция изменения ширины прямоугольника. Она прини-
мает объект-прямоугольник и на сколько единиц изменить
ширину. */
let widePlus = rectangle.getRectWidePlus()
console.log('wide', widePlus + 20)


/* 7
Функция изменения высоты прямоугольника. Она прини-
мает объект-прямоугольник и на сколько единиц изменить
высоту. */
let heightPlus = rectangle.getRectHeightPlus()
console.log('height', heightPlus + 10)


/* 8
Функция изменения ширины и высоты прямоугольника.
Она принимает объект-прямоугольник и два значения –
для изменения ширины и высоты. */


/* 9
Функция смещения прямоугольника по оси X. Она при-
нимает объект-прямоугольник и на сколько единиц его
сдвинуть. */


/* 10 Функция смещения прямоугольника по оси Y. Она при-
нимает объект-прямоугольник и на сколько единиц его
сдвинуть. */


/* 
11 Функция смещения прямоугольника и по оси X и по
оси Y. Она принимает объект-прямоугольник и два значе-
ния: сдвиг по оси X и сдвиг по оси Y. */



/* 12 Функция для проверки, находится ли точка внутри пря-
моугольника. Она принимает объект-прямоугольник и
координаты точки. */





/* Задание 1
Создать объект, описывающий автомобиль (производитель,
модель, год выпуска, средняя скорость), и следующие функции
для работы с этим объектом.
1.Функция для вывода на экран информации об автомобиле.
2.Функция для подсчета необходимого времени для пре-
одоления переданного расстояния со средней скоростью.
Учтите, что через каждые 4 часа дороги водителю необхо-
димо делать перерыв на 1 час. */

// const honda = {
//     country: "Japan",
//     model: "Stream",
//     year: 2020,
//     speed: 100,
//     showInfo() {
//         console.log(`Производитель: ${this.country},\n модель: ${this.model},\n Cредняя скорость: ${this.speed} `)
//     }
// };
// honda.showInfo()

// // alert("model" in honda)//true
// // alert("kdfj" in honda)//false

// function displayCar() {
//     for (key in honda) {
//         console.log(key);//достаем ключи
//         console.log(honda[key])//достаем значения из ключей
//     }
// }
// displayCar()

// function time() {
//     let distance = prompt("Введите расстояние");

//     let timeInWay = distance / honda.speed;

//     let timeInRest = (timeInWay % 4 == 0) ? (timeInWay / 4 | 0) - 1 : timeInWay / 4 | 0;

//     let timeTotal = distance / honda.speed + timeInRest;

//     alert(`Общее время в пути Время в пути = ${timeTotal} часов`);

// let distance = prompt("Введите расстояние");
// let speed = prompt("Введите среднюю скорость");

// let timeInWay = distance / speed;

// let timeInRest = (timeInWay % 4 == 0) ? (timeInWay / 4 | 0) - 1 : timeInWay / 4 | 0;

// let timeTotal = distance / speed + timeInRest;

// alert(`Общее время в пути Время в пути = ${timeTotal} часов`);


/* Задание 2
Создать объект, хранящий в себе отдельно числитель и зна-
менатель дроби, и следующие функции для работы с этим объ-
ектом.
1
Функция сложения 2-х объектов-дробей.
2
Функция вычитания 2-х объектов-дробей.
3
Функция умножения 2-х объектов-дробей.
4
Функция деления 2-х объектов-дробей.
5
Функция сокращения объекта-дроби */

// const obj = {
//     obj1: {
//         upNumb: 10,
//         downNumb: 2
//     },
//     obj2: {
//         upNumb: 30,
//         downNumb: 5
//     },

//     plus: function () {
//         let dr1 = this.obj1.upNumb / this.obj1.downNumb;
//         let dr2 = this.obj2.upNumb / this.obj2.downNumb;
//         let res = dr1 + dr2
//         console.log(res)
//     },

//     minus: function () {
//         let dr1 = this.obj1.upNumb / this.obj1.downNumb;
//         let dr2 = this.obj2.upNumb / this.obj2.downNumb;
//         let res1 = dr1 - dr2
//         console.log(res1)
//     },
//     multi: function () {
//         let dr1 = this.obj1.upNumb / this.obj1.downNumb;
//         let dr2 = this.obj2.upNumb / this.obj2.downNumb;
//         let res2 = dr1 * dr2
//         console.log(res2)
//     }

// }
// obj.plus()
// obj.minus()
// obj.multi()

/* Задание 3
Создать объект, описывающий время (часы, минуты, секун-
ды), и следующие функции для работы с этим объектом.
1
Функция вывода времени на экран.
2
Функция изменения времени на переданное количество
секунд.
3
Функция изменения времени на переданное количество
минут.
4
Функция изменения времени на переданное количество
часов.
Учтите, что в последних 3-х функциях, при изменении одной
части времени, может измениться и другая. Например: если ко
времени «20:30:45» добавить 30 секунд, то должно получиться
«20:31:15», а не «20:30:75». */

// const time = {
//     h: 2,
//     m: 23,
//     s: 40,
//     showTime() {
//         document.write(`${this.h}:${this.m}:${this.s}`);
//     }
// }
// time.showTime()


/* Задание 1
Создать массив из 10 случайных чисел и написать несколько
функций для работы с ним.
1.Функция принимает массив и выводит его на экран.
2.Функция принимает массив и выводит только четные
элементы.
3.Функция принимает массив и возвращает сумму всех
элементов массива.
4.Функция принимает массив и возвращает его максималь-
ный элемент.
5.Функция добавления нового элемента в массив по ука-
занному индексу.
6.Функция удаления элемента из массива по указанному
индексу.   
 */

// let arrNumb = [5, 7, 8, 2353, 45, 74, 1, 78, 89, 2]

// function showArr() {
//     document.write(arrNumb)
// };

// function showArr1() {
//     for (let i = 0; i <= arrNumb.length; i++) {
//         if (arrNumb[i] % 2 == 0) {
//             console.log(arrNumb[i]);
//         }
//     }
// }

// function sumArr() {
//     let result = arrNumb.reduce((sum, current) => sum + current, 0);
//     console.log(result);
// }

// function maxnumb() {
//     let result = Math.max.apply(null, arrNumb)
//     console.log(result);
// }
// function addNumb() {
//     arrNumb[3] = 124
//     console.log(arrNumb)
// }
// function delNumb() {
//     arrNumb.splice(3, 1)
//     console.log(arrNumb)
// }

// showArr1();
// showArr();
// sumArr();
// maxnumb();
// addNumb();
// delNumb()


/* Задание 2
Создать еще один массив из 5 случайных чисел и написать
следующие функции.
1.Функция принимает 2 массива и возвращает новый мас-
сив, в котором собраны все элементы из двух массивов
без повторений.
2.Функция принимает 2 массива и возвращает новый массив,
в котором собраны общие элементы (то есть элементы,
которые встречаются и в первом и во втором массивах)
без повторений.
3.Функция принимает 2 массива и возвращает новый мас-
сив, в котором собраны все элементы из первого массива,
которых нет во втором массиве. */

let arrNumb = [5, 7, 8, 2353, 45, 74, 1, 78, 89, 2];

let arr2Numb = [5, 78, 45, 234, 90]

function newArr() {
    let arr3 = arrNumb.concat(arr2Numb);
    console.log(arr3)
}
newArr()


function newArr2() {
    arr4 = arrNumb.filter(el => arr2Numb.indexOf(el) > -1);
    console.log(arr4)
}
newArr2()



/* Задание 3
Создать массив фруктов и отсортировать его по алфавиту.
Написать следующие функции.
1.Вывод на экран с помощью document.write() в виде списка
(с помощью тегов ul и li).
2.Поиск фрукта в массиве. Функция принимает название
фрукта и возвращает индекс найденного элемента или -1,
если не найден. Поиск должен быть нерегистрозависимым. */

let fruit = ["avocado", "pear", "persimmon", "fig", "date", "tangerine", "melon", "quince"];

function myFruit() {
    let arrFruit = fruit.sort();

    for (let i = 0; i < fruit.length; i++) {
        document.write(`<ul><li> ${arrFruit[i]} </li></ul>`)
    }
}
myFruit()


function myFruitName(name){
    document.write(fruit.indexOf(name))
}
myFruitName("pear")



