'use strict';

// new RegExp('pattern', 'flags');
// /pattern/flags

// const ans = prompt('Введите ваше число');

// const red = /\d/g;
// console.log(ans.match(red));

const str = 'My name is R2D2';

console.log(str.match(/\D/ig));

// \d
// \w
// \s

// i
// g
// m

// console.log(ans.search(red));
// console.log(ans.match(red));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, '*'));

console.log('12-34-56'.replace(/-/g, ':'));

