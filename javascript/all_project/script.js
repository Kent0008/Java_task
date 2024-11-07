// Задание 1: Площадь прямоугольника
let x1 = 2;
let y1 = 3;
let x2 = 10;
let y2 = 5;
let width = Math.abs(x2 - x1);
let height = Math.abs(y2 - y1);

let area = width * height;

console.log("Площадь прямоугольника:", area);

// Задание 2: Сравнение дробных частей чисел
const a = 13.123456789;
const b = 2.123;
const n = 5;

const fractionalA = Math.floor((a % 1) * Math.pow(10, n));
const fractionalB = Math.floor((b % 1) * Math.pow(10, n));

console.log("Дробная часть числа a:", fractionalA);
console.log("Дробная часть числа b:", fractionalB);

console.log("fractionalA > fractionalB:", fractionalA > fractionalB);
console.log("fractionalA < fractionalB:", fractionalA < fractionalB);
console.log("fractionalA >= fractionalB:", fractionalA >= fractionalB);
console.log("fractionalA <= fractionalB:", fractionalA <= fractionalB);
console.log("fractionalA === fractionalB:", fractionalA === fractionalB);
console.log("fractionalA !== fractionalB:", fractionalA !== fractionalB);


// Задание 3: Генерация случайных чисел и их сравнение
const n1 = 0;
const m1 = 100;
const min1 = Math.min(n1, m1);
const max1 = Math.max(n1, m1);

const random1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
const random2 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;

console.log("Случайное число 1:", random1);
console.log("Случайное число 2:", random2);

console.log("random1 > random2:", random1 > random2);
console.log("random1 < random2:", random1 < random2);
console.log("random1 >= random2:", random1 >= random2);
console.log("random1 <= random2:", random1 <= random2);
console.log("random1 === random2:", random1 === random2);
console.log("random1 !== random2:", random1 !== random2);


// Задание 4: Проверка надёжности пароля
const password = "1234-";

if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
    console.log("Пароль надёжный");
} else {
    console.log("Пароль недостаточно надёжный");
}


// Задание 5: Форматирование имени и фамилии
const userName = "jOhN";
const userSurname = "doE";

const formattedName = userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase();
const formattedSurname = userSurname.charAt(0).toUpperCase() + userSurname.substring(1).toLowerCase();

console.log("Имя:", formattedName);
console.log("Фамилия:", formattedSurname);

console.log(userName === formattedName ? "Имя осталось без изменений" : "Имя было преобразовано");
console.log(userSurname === formattedSurname ? "Фамилия осталась без изменений" : "Фамилия была преобразована");


// Задание 6: Проверка четности числа
const number = 2;
const message = (number % 2 === 0) ? "Число чётное" : "Число нечётное";
console.log(message);


// Задание 7: Генерация массива случайных чисел
const n2 = 0;
const m2 = 100;
const count = 10;

const min2 = Math.min(n2, m2);
const max2 = Math.max(n2, m2);
const array = [];

for (let i = 0; i < count; i++) {
    array.push(Math.floor(Math.random() * (max2 - min2 + 1)) + min2);
}

console.log(array);


// Задание 8: Перемешивание массива
const shuffleCount = 5;
const shuffleArray = [];

for (let i = 1; i <= shuffleCount; i++) {
    shuffleArray.push(i);
}

for (let i = shuffleArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
}

console.log(shuffleArray);


// Задание 9: Объединение двух массивов
const arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
const arr2 = [12, 44, 23, 5];
const result = [];

const maxLength = arr1.length + arr2.length;
for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
        result.push(arr1[i]);
    } else {
        result.push(arr2[i - arr1.length]);
    }
}

console.log(result);

// Задание 10: вывод возраста
function getAge(birthYear) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return currentYear - birthYear;
}

console.log(getAge(1998));
console.log(getAge(1991));
console.log(getAge(2007));

// Задание 11: e-mail адресов которых нету в черном списке
function filter(whiteList, blackList) {
  return whiteList.filter(email => !blackList.includes(email));
}

const whiteList = [
  "user1@example.com",
  "user2@example.com",
  "user3@example.com",
  "user4@example.com"
];
const blackList = [
  "user2@example.com",
  "user4@example.com"
];

let res = filter(whiteList, blackList);
console.log(res);

