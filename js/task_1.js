const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '0');

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB);

const lastFilm = prompt('Один из послдених просмотренных фильмов', ''),
        scorFilm = prompt('На сколько оцените его?', ''),
        lastFilm1 = prompt('Один из послдених просмотренных фильмов', ''),
        scorFilm1 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = scorFilm;
personalMovieDB.movies[lastFilm1] = scorFilm1;

console.log(personalMovieDB);

