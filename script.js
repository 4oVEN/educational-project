

if (4 == 9){
  console.log('Ok');
} else {
  console.log('Error');
}



// if (num < 49) {
//   console.log('Error');
// } else if (num > 100){
//   console.log('Много');
// } else {
//   console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Много');

const num = '50';

switch (num){
  case '49':
    console.log('Неверно');
    break;
  case '100':
    console.log('Многовато');
    break;
  case '50':
    console.log('Ok!');
    break;
    default:
      console.log('Не в этот раз!');
      break;
}