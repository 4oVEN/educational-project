const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personsalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt('Один из последних простотренных фильмов?', ''),
      b = prompt('На сколько оценице его?', ''),
      c = prompt('Один из последних простотренных фильмов?', ''),
      d = prompt('На сколько оценице его?', '');

personsalMovieDB.movies[a] = b;
personsalMovieDB.movies[c] = d;
console.log(personsalMovieDB);