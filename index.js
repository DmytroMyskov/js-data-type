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


//