'use strict';

const arr = [1, 12, 13, 6, 8, 99, 1];

arr.sort(compereNum);
console.log(arr);

function compereNum(a, b){
  return a - b;
}
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr){
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// for (let value of arr){
//   console.log(value);
// }

// const str = prompt('', '');
// const product = str.split(', ');
// product.sort();
// console.log(product.join('; '));