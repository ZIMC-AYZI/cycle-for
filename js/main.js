// Вывести числа от 4 до 400 на экран.

// for (let i = 4; i < 400; i++) {
//   console.log(i);
// }

// Вывести числа в последовательности: 4 7 10 13 с помощью цикла.

// for (let i = 4; i <= 13; i = i + 3) {
//   console.log(i);
// }

// Вывести числа 654 653 652 до нуля.

// for (let i = 654; i >= 0; i--) {
//   console.log(i);
// }

// Вывести все годы с 1983 до 2017.
// for (let i = 1983; i <= 2017; i++) {
//   console.log(i);
// }

// Вывести числа -4 -2 0 2 4 6 ...100.
// for (let i = -4; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   } else continue;
// }

// С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.

// let i = 7;
// for (n = 2; n < 10; n++) {
//   console.log(i * n);
// }

// Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню,
// что спецсимвол получается комбинацией &#число; Например ӆ

// for (let i = 500; i <= 2000; i++) {
//   let p = (document.getElementsByTagName("p").innerHTML = `&#${i}`);
//   document.write(p);
// }

// Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
//   console.log(sum);
// }
// console.log("final result = " + sum);

// С помощью цикла вывести произведение чисел от 1 до 50.
// let bithovin = 1;
// for (let i = 1; i <= 50; i++) {
//   bithovin *= i;
// }
// console.log(bithovin);

// Заполните массив следующим образом: в первый элемент запишите 'x',
// во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.

// let arr = [];
// let length = arr.length;
// length = prompt("type length here...");
// let str = "";

// for (let i = 0; i < length; i++) {
//   str += "x";
//   arr.push(str);
// }

// console.log(arr);

// Заполните массив следующим образом: в первый элемент запишите '1',
// во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.

// let arr = [];
// let length = arr.length;
// length = prompt("type length here...");

// for (let i = 1; i < length; i++) {
//   let str = "";

//   for (let j = 0; j < i; j++) {
//     str += i;
//   }

//   arr.push(parseFloat(str));
// }

// console.log(arr);

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
//  чтобы в сумме получилось больше 10-ти.

// let array = [1, 2, 3, 4, 5];
// let sum = 0;
// let count = 0;
// for (let i = 0; i < array.length; i++) {
//   count++;
//   sum += array[i];
//   if (sum === 10) {
//     break;
//   }
//   continue;
// }
// console.log(`${count} : ${sum}`);

// Дан массив с числами. Не используя метода reverse переверните его элементы
// в обратном порядке.

// let array = [1, 2, 3, 4, 5, 6];
// array.sort((a, b) => b - a);
// console.log(array);

// Дан массив с числами. Запишите в новый массив только те числа,
// которые больше нуля и меньше 10-ти.

// let arr = [1, 2, -3, 4, 5, 6, 7, -2, 13];
// let newArray = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0 && arr[i] < 10) {
//     newArray.push(arr[i]);
//   }
// }
// console.log(newArray);

// Дан массив с целыми числами. Создайте из него новый массив,
//  где останутся лежать только четные из этих чисел.

// let arr = [2, 3, 6, 7, 9, 10, 22, 23, 41, 40];
// let newArray = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     newArray.push(arr[i]);
//   }
// }
// console.log(newArray);

// Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [2, 1, 4, 3, 6, 5]

// let arr = [1, 2, 3, 4, 5, 6];
// let current;
// for (let i = 0; i < arr.length; i += 2) {
//   current = arr[i];
//   arr[i] = arr[i + 1];
//   arr[i + 1] = current;
// }
// console.log(arr);

// Дан массив [1, 2, 3, 4, 5, 6]. Сделать из него массив [5, 6, 3, 4, 1, 2]

// let arr = [1, 2, 3, 4, 5, 6];
// arr.sort((a, b) => b - a);
// let current;
// for (let i = 0; i < arr.length; i += 2) {
//   current = arr[i];
//   arr[i] = arr[i + 1];
//   arr[i + 1] = current;
// }
// console.log(arr);

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму
// элементов этого массива.
// Массив, конечно же, может быть произвольным.

// let arr = [[1, 2, 3], [4, 5], [6]];
// var sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
// }
// console.log(sum);

// Сформировать 3 матрицы изображенные на картинке

// const size = 10;
// const matrix1 = [];

// for (let i = 0; i < size; i++) {
//   matrix1[i] = [];
//   for (let j = 0; j < size; j++) {
//     matrix1[i][j] = (i + 1) * (j + 1);
//   }
// }
// console.log(matrix1);

// вторая матрица

// const size = 10;
// const matrix2 = [];

// /* [i] строка*/
// /* [j] ЯЧЕЙКА*/

// for (let i = 0; i < size; i++) {
//   matrix2[i] = [];
//   for (let j = 0; j < size; j++) {
//     if (i === j) {
//       matrix2[i][j] = 1;
//     } else if (i == size - 1 - j) {
//       matrix2[i][j] = 2;
//     } else if (i < j && i <= size - 1 - j) {
//       matrix2[i][j] = 3;
//     } else if (i > j && j <= size - 1 - i) {
//       matrix2[i][j] = 6;
//     } else if (i > j && j <= size - 1 + j) {
//       matrix2[i][j] = 5;
//     } else if (i < j && j <= size - 1 + i) {
//       matrix2[i][j] = 4;
//     } else matrix2[i][j] = "x";
//   }
// }
// console.log(matrix2);

// третья матрица
// const size = 10;
// const matrix = [];

// for (let row = 0; row < size; row++) {
//   matrix[row] = [];
//   for (let cel = 0; cel <= row; cel++) {
//     if (cel === row) {
//       matrix[row][cel] = 1;
//     } else if (cel == 0) {
//       matrix[row][cel] = 1;
//     } else if (cel == row - 1) {
//       matrix[row][cel] = cel + 1;
//     } else if (cel == row / row) {
//       matrix[row][cel] = cel - 1 + row;
//     } else if (cel === 2) {
//       matrix[row][cel] = cel + row;
//     } else matrix[row][cel] = 0;
//   }
// }
// console.log(matrix);

// let pair =
//   (!!arr[i - 1][j - 1] ? arr[i - 1][j - 1] : 0) +
//   (!!arr[i - 1][j] ? arr[i - 1][j] : 0);
