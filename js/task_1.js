let numberOfFilms;

function start() {
    numberOfFilms = "";
        while (numberOfFilms == '' || numberOfFilms === null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '0');
        }
        console.log(numberOfFilms);
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: ['', '', ''],
    privat: false
};

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[i - 1] = genre;
    }
}

function rememberMyFilms() {
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
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count <= 10 && personalMovieDB.count > 0) {
        alert ("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB <= 30) {
        alert ("Вы классический зритель!");
    } else if (personalMovieDB.count > 30) {
        alert ("Вы киноман");
    } else {
        alert ("Произошла ошибка");
    }
}

detectPersonalLevel();

writeYourGenres();

showMyDB();