const today = new Date();
console.log(today);
let date1 = new Date("2021-05-17"); // год-месяц-день
console.log(date1);
let date2 = new Date("06/25/2021"); // месяц/день/год
console.log(date2);
const date3 = new Date('November 2, 1999 13:25:00');
console.log(date3);
const date4 = new Date('1999-11-02T13:25:00');
console.log(date4);
const date5 = new Date('02 November 1999 13:25:00');
console.log(date5);
const date6 = new Date(2022, 0, 12, 03, 45, 12, 500);
// год, месяц 0-11, день, часы, минуты, секунды,
// миллисекунды
console.log(date6);
/* Созданный любым из перечисленных методов объект
Date содержит число миллисекунд, прошедших с 1 января
1970 г. Поэтому любые экземпляры объекта Date можно
вычитать друг из друга, узнавая разницу между ними в
миллисекундах, а затем переводить в часы, дни, годы и
т.п., например: */

console.log('Разница между датами в миллисекундах ',
    date2 - date1);
console.log('Разница между датами в днях ',
    Math.round((date2 - date1) / 24 / 60 / 60 / 1000));

/*  Например, нам нужно получить переменную с текущей датой, т.е. сегодняшнем днем, а также переменные
с вчерашней и завтрашней датой. Проще всего это сделать на основе последнего способа создания экземпляра
объекта Date. */

let toDay = new Date();
let yesterday = new Date(today - 24 * 60 * 60 * 1000);
let tomorrow = new Date(today + 24 * 60 * 60 * 1000);
console.log(yesterday, toDay, tomorrow);

/* Объект Date имеет ряд методов, с помощью которых
вы можете получить доступ к отдельным данным из переменной-даты:
■ getFullYear() — возвращает год, состоящий из 4 цифр
■ getMonth() — возвращает номер месяца от 0 (январь) до 11 (декабрь).
■ getDate() — возвращает день месяца, от 1 до 31.
■ getHours(), getMinutes(), getSeconds(),
getMilliseconds() — возвращают соответственно,
часы, минуты, секунды или миллисекунды.
■ getDay() — возвращает день недели: 0 соответствует
воскресенью, 1 — понедельнику, 2 — вторнику и так
далее. */


/* Типичная задача на использование одного из методов — это определение того, на какой день недели приходился день рождения пользователя. */

let userdata = prompt("Enter your birthday in year-month-day format", "2002-08-14");
let birthday = new Date(userdata) == 'Invalid Date' ?
    new Date() : new Date(userdata);
console.log(birthday);
let days = ['sunday', 'monday', 'tuesday', 'wednesday',
    'thursday', 'friday', 'saturday'];
alert("You were born on " + days[birthday.getDay()]);

/* В следующем примере мы зададим дату, а затем будем выяснять, в каких еще месяцах этот день выпадает на
тот же день недели. В нашем примере это понедельник. В том случае, если эта дата приходится на понедельник в
другом месяце, мы выведем эту дату в консоль. */

let d = new Date('02/07/2022');
let month = d.getMonth(), weekDay = d.getDay();
console.log(weekDay, d.toLocaleDateString());
for (let i = 0; i < 12; i++) {
    if (i == month) continue;
    d.setMonth(i);
    if (weekDay == d.getDay())
        console.log(d, d.toLocaleDateString());
}
/* В консоли мы увидим следующее:
Mon Mar 07 2022 00:00:00 GMT+0200 “07.03.2022”
Mon Nov 07 2022 00:00:00 GMT+0200 “07.11.2022” */
