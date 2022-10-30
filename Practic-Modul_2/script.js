// WEEK-1 PZ-DZ

/* Задание
Создать объект, описывающий прямоугольник (хранит коор-
динаты левой верхней и правой нижней точек), и написать следу-
ющие функции для работы с таким объектом.
1
Функция принимает объект-прямоугольник и выводит
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
console.log('height', heightPlus)


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
1
Функция для вывода на экран информации об автомобиле.
2
Функция для подсчета необходимого времени для пре-
одоления переданного расстояния со средней скоростью.
Учтите, что через каждые 4 часа дороги водителю необхо-
димо делать перерыв на 1 час. */

// let honda = {
//     country: "Japan",
//     model: "Steem",
//     year: 2020,
//     speed: 80
// }
// function info() {
//     console.log(honda)
//     let distance = prompt("Введите растояние");
//     let relax = distance / honda.speed
//     alert(`вам ехать ${relax} часа`)
//     if (relax <= 4) {
//         console.log("отдых не требуется")
//     }
//     else {
//         console.log("отдохните")
//     }
// }
// info()

let distance = prompt("Введите расстояние");
let speed = prompt("Введите среднюю скорость");

let timeInWay = distance / speed;

let timeInRest = (timeInWay % 4 == 0) ? (timeInWay / 4 | 0) - 1 : timeInWay / 4 | 0;

let timeTotal = distance / speed + timeInRest;

alert(`Общее время в пути Время в пути = ${timeTotal} часов`);


