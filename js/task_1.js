
let numberOfFilmsStr = "";

while (numberOfFilmsStr == '' || numberOfFilmsStr === null) {
    numberOfFilmsStr = prompt('Сколько фильмов вы уже посмотрели ?', '0');
}

const numberOfFilms = +numberOfFilmsStr;

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count <= 10 && personalMovieDB.count > 0) {
    alert ("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB <= 30) {
    alert ("Вы классический зритель!");
} else if (personalMovieDB.count > 30) {
    alert ("Вы киноман");
} else {
    alert ("Произошла ошибка");
}

console.log(personalMovieDB);

for (let i = 0; i < numberOfFilms; i++) {
    let lastFilm = '';
    let scoreFilm = '';
        while (lastFilm === '' || scoreFilm === '' || lastFilm.length > 50 || lastFilm === null || scoreFilm === null) {
            lastFilm = prompt('Один из послдених просмотренных фильмов', '');
            scoreFilm = prompt('На сколько оцените его?', '');
            if (lastFilm !== '' && scoreFilm !== '' && lastFilm.length < 50 &&
                 lastFilm !== null && scoreFilm !== null) {
                personalMovieDB.movies[lastFilm] = scoreFilm;
            }
            
    }
    
}

console.log(personalMovieDB);

