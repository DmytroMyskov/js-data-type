//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

let sum = ((0.1 * 10 + 0.2 * 10) / 10).toFixed(1);
console.log(sum);


//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

let a = "1";
let b = 2;
let result = Number(a) + b;
console.log(result);


//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

let flashSizeGB = prompt("Введіть обсяг флешки в ГБ:");
let flashSizeMB = flashSizeGB * 1024;
let fileSizeMB = 820;
let fileCount = Math.floor(flashSizeMB / fileSizeMB);

console.log(`На флешку поміститься ${fileCount} файл(ів) по 820 МБ.`);


//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

let money = prompt("Введіть суму грошей в гаманці:");
let price = prompt("Введіть ціну однієї шоколадки:");
let chocolateCount = Math.floor(money / price);
let change = money % price;

console.log(`Виможе купити ${chocolateCount} шоколадок. Решта: ${change} грн.`);


//Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

let number = prompt("Введіть тризначне число:");
let reversedNumber = number.toString().split("").reverse().join("");
console.log(reversedNumber);


//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

let deposit = prompt("Введіть суму вкладу:");
let annualRate = 0.05;
let periodMonths = 2;

let interest = deposit * annualRate * (periodMonths / 12);

console.log(`Нараховані відсотки за 2 місяці: ${interest.toFixed(2)} грн`);


//Що повернуть вирази:
console.log(2 && 0 && 3)  //повертає перше false-значення — 0

console.log(2 || 0 || 3)  //повертає перше true-значення — 2

console.log(2 && 0 || 3)  //2 && 0 → 0, потім 0 || 3 → 3