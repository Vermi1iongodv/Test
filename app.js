"use strict";

let numbersOfFilms;

function start() {
    numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
    while (numbersOfFilms == "" || numbersOfFilms == null || isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {

for (let i = 0; i < 2; i++) {
    const a = prompt("One of the last movies you watched?", ""),
        b = prompt("How much you like it?", "");

     if (a  && b  && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}
}
// rememberMyFilms();
// let count = 2;

// while (count > 0) {
//     const a = prompt("One of the last movies you watched?", ""),
//         b = prompt("How much you like it?", "");

//      if (a && b  &&  a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//         count--;
//     } else {
//         console.log("error");
        
//     }
// }

    
    
    
    
    
    function detectPersonalLevel() {
    
        if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {    
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();

function showMyDB(hidden) { 
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();