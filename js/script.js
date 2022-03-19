'use strict';

// filter

// const names = ['Nikita', 'Olga', 'Kiril', 'Bogdan', 'Platon'];

// const shortNames = names.filter(function(name){
//   return name.length < 5;
// });

// console.log(shortNames);

// map

// const answers = ['NIliTa', 'OLga', 'HellO'];

// const result = answers.map(item => item.toLowerCase());
// console.log(result);

// every/some

// const some = [4, 'wds', 'qwertyuiop'];

// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);

// const arr = ['apple', 'orange', 'banana', ];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);


const obj = {
   nikita: 'persone',
   olga: 'persone',
   dog: 'animal',
   cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArr);
