'use strict';

let str = 'some';
let strObg = new String(str);

console.log(typeof(str));
console.log(typeof(strObg));

console.dir([1,2,3]);

const solder = {
  healht: 400,
  armor: 100,
};

const jonh = Object.create(solder);

// const jonh = {
//   healht: 100,
// };

// jonh.__proto__ = solder;

// Object.setPrototypeOf(jonh, solder);
console.log(jonh);