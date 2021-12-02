
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        while (this.count == '' || this.count === null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели ?', '0');
        }
        console.log(this.count);
    },
    showMyDB: function () {
        if (!this.privat) {
            console.log(this);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <=3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

             if (genre === null || genre === '') {
              console.log('Вы ввели некорректные данные или не ввели их вовсе');
              i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
            this.genres.forEach(function(item, i)
            {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
        
    },
     
    
    rememberMyFilms: function () {
        for (let i = 0; i < this.count; i++) {
            let lastFilm = '';
            let scoreFilm = '';
                while (lastFilm === '' || scoreFilm === '' || 
                lastFilm.length > 50 || lastFilm === null || scoreFilm === null) {
                    lastFilm = prompt('Один из послдених просмотренных фильмов', '');
                    scoreFilm = prompt('На сколько оцените его?', '');
                    if (lastFilm !== '' && scoreFilm !== '' && lastFilm.length < 50 &&
                         lastFilm !== null && scoreFilm !== null) {
                        this.movies[lastFilm] = scoreFilm;
                    }
                    
            }
            
        }
    },
    detectPersonalLevel: function () {
        if (this.count <= 10 && this.count > 0) {
            alert ("Просмотрено довольно мало фильмов");
        } else if (this.count > 10 && this.count <= 30) {
            alert ("Вы классический зритель!");
        } else if (this.count > 30) {
            alert ("Вы киноман");
        } else {
            alert ("Произошла ошибка");
        }
    },
    toggleVisibleMyDB: function () {
       (this.privat === false) ? true : false;
    }

};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();