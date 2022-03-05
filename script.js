/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personsalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personsalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while (personsalMovieDB.count == '' || personsalMovieDB.count == null || isNaN(personsalMovieDB.count)) {
      personsalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function (){
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
  },
  detectPersonalLevel: function(){
    if (personsalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
  } else if (personsalMovieDB.count >= 10 && personsalMovieDB.count < 30){
    console.log("Вы классический зритель");
  } else if (personsalMovieDB.count >= 30){
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
  },
  showMyDB: function(hidden){
    if (!hidden){
      console.log(personsalMovieDB);
    }
  },
  toggleVisibleMyDB: function(){
    if (personsalMovieDB.privat){
      personsalMovieDB.privat = false;
    }else{
      personsalMovieDB.privat = true;
    }
  },
  writeYourGenres: function(){
    for (let i = 1; i < 2; i++){
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      // if (genre == '' || genre == null){
      //   console.log('Вы ввели некорректные данные или не ввели их вообще');
      //   i--;
      // }else {
      //   personsalMovieDB.genres[i - 1] = genre;
      // }
      let genres = prompt(`Введите Ваши любтмые жанры через запятую`).toLowerCase();
        if (genres == '' || genres == null){
        console.log('Вы ввели некорректные данные или не ввели их вообще');
        i--;
      }else {
        personsalMovieDB.genres = genres.split(', ');
        personsalMovieDB.genres.sort();
      }
    }
    personsalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }
};