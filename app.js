"use strict";

const numbersOfFilms = +prompt("how many films you watched?", "");




const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



const a = prompt("one of the last watched films?", ""),
      b = prompt("how much you rate it?", ""),
      c = prompt("one of the last watched films?", ""),
      d = prompt("how much you rate it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);