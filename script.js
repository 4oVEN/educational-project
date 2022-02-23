/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

function start (){
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();

const personsalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};



function rememberMyFilms(){
  for (let i = 0; i < 2; i++){
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оценице его?', '');
  if (a != null && b != null && a != '' && b != '' && a.length < 50){
     personsalMovieDB.movies[a] = b;
     console.log('done');
  } else {
    console.log('error');
    i--;
  }      
}
}
// rememberMyFilms();



function detectPersonalLevel(){
  if (personsalMovieDB.count < 10){
  console.log("Просмотрено довольно мало фильмов");
} else if (personsalMovieDB.count >= 10 && personsalMovieDB.count < 30){
  console.log("Вы классический зритель");
} else if (personsalMovieDB.count >= 30){
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}
}
// detectPersonalLevel();

function showMyDB(hidden){
  if (!hidden){
    console.log(personsalMovieDB);
  }
}
showMyDB(personsalMovieDB.privat);

function writeYourGenres(){
  for (let i = 1; i <= 3; i++){
    personsalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();