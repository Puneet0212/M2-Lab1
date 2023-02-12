// Question 1

console.log("*******************  QUESTION 1  *******************");

var favoriteMovies = ["Interstellar", "Inception", "Avatar", "Avengers: Endgame", "Titanic"];

console.log("Second favorite Movie: " + favoriteMovies[1]);


// Question 2

console.log("*******************  QUESTION 2  *******************");

var movies = new Array(5);
movies[0] = "Interstellar";
movies[1] = "Inception";
movies[2] = "Avatar";
movies[3] = "Avengers: Endgame";
movies[4] = "Titanic";

console.log("First Movie: " + movies[0]);


// Question 3

console.log("*******************  QUESTION 3  *******************");

var movies = new Array(5);
movies[0] = "Interstellar";
movies[1] = "Inception";
movies[2] = "Avatar";
movies[3] = "Avengers: Endgame";
movies[4] = "Titanic";
movies.splice(2,0,"Pathaan");

console.log(movies.length);

// Question 4

console.log("*******************  QUESTION 4  *******************");

var movies = ["Interstellar", "Inception", "Avatar", "Avengers: Endgame", "Titanic"];
// movies.shift();
delete movies[0];

console.log(movies);

// Question 5

console.log("*******************  QUESTION 5  *******************");

var movies = ["Interstellar", "Inception", "Avatar", "Avengers: Endgame", "Titanic", "Pathaan", "Don 2"];
for (var index in movies){
    console.log(movies[index]);
}


// Question 6

console.log("*******************  QUESTION 6  *******************");

var movies = ["Interstellar", "Inception", "Avatar", "Avengers: Endgame", "Titanic", "Pathaan", "Don 2"];
for(var movie of movies){
    console.log(movie);
}



// Question 7

console.log("*******************  QUESTION 7  *******************");

var movies = ["Interstellar", "Inception", "Avatar", "Avengers: Endgame", "Titanic", "Pathaan", "Don 2"];
movies.sort();
for(movie of movies){
    console.log(movie);
}


// Question 8

console.log("*******************  QUESTION 8  *******************");

var favMovies = ["Interstellar", "Inception", "Avatar", "Avengers: Endgame", "Titanic", "Pathaan", "Don 2"];
var leastFavMovies = ["Disaster Movie", "House of the Dead", "Humshakals"];

console.log("Movies I like: \n\n");
for(index in favMovies){
    console.log(favMovies[index]);
}

console.log("\nMovies I regret watching: \n\n");
for(index in leastFavMovies){
    console.log(leastFavMovies[index]);
}


// Question 9

console.log("*******************  QUESTION 9  *******************");

var favMovies = ["Interstellar", "Inception", "Avatar", "Avengers: Endgame", "Titanic", "Pathaan", "Don 2"];
var leastFavMovies = ["Disaster Movie", "House of the Dead", "Humshakals"];
var movies = favMovies.concat(leastFavMovies).sort().reverse();

console.log(movies);


// Question 10

console.log("*******************  QUESTION 10  *******************");

var favMovies = ["Interstellar", "Inception", "Avatar", "Avengers: Endgame", "Titanic", "Pathaan", "Don 2"];
var leastFavMovies = ["Disaster Movie", "House of the Dead", "Humshakals"];
var movies = favMovies.concat(leastFavMovies).sort().reverse();

console.log(movies.slice(-1));



// Question 11

console.log("*******************  QUESTION 11  *******************");

var favMovies = ["Interstellar", "Inception", "Avatar", "Avengers: Endgame", "Titanic", "Pathaan", "Don 2"];
var leastFavMovies = ["Disaster Movie", "House of the Dead", "Humshakals"];

var movies = favMovies.concat(leastFavMovies).sort().reverse();
console.log(movies.shift());



// Question 12

console.log("*******************  QUESTION 12  *******************");

var favMovies = ["Interstellar", "Inception", "Avatar", "Avengers: Endgame", "Titanic", "Pathaan", "Don 2"];
var leastFavMovies = ["Disaster Movie", "House of the Dead", "Humshakals"];
var movies = favMovies.concat(leastFavMovies).sort().reverse();
var leastFavMoviesIndices = [];

movies.forEach((movie, index) => {
    if (leastFavMovies.includes(movie)) {
      leastFavMoviesIndices.push(index); }
  });

var moreFavMovies = ["Dark", "Squid Game", "The Peripheral"];

leastFavMoviesIndices.forEach((index) => {
    movies[index] = moreFavMovies.shift();
});

for(var index in movies){
    console.log(movies[index]);
}


// Question 13

console.log("*******************  QUESTION 13  *******************");

var movies = [["Interstellar", 1], ["Inception", 2], ["Avatar", 3], ["Avengers: Endgame", 4], ["Titanic", 5]];
var movieNames = movies.filter(function (movie) {
    "use strict";
    return typeof movie[0] === "string";
})
console.log(movieNames.map(movie => movie[0]));



// Question 14

console.log("*******************  QUESTION 14  *******************");

var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var showEmployee = function(employees) {
    "use strict";
    console.log("Employees: \n");
    employees.forEach(function(employee) {
      console.log(employee);
    });
  };

showEmployee(employees);


// Question 15

console.log("*******************  QUESTION 15  *******************");

var array = [13, "Zak", "Raj", true, false, null, "", 0, 25];

var filterValues = function(array){
    return array.filter(function(a) {
  return a !== false && a !== null && a !== 0  && a !== "";
});
};

window.console.log(filterValues(array));

// Question 16

console.log("*******************  QUESTION 16  *******************");

function getRandomItem(arr) {
    "use strict";
    const randomIndex = Math.floor(Math.random() * 10);
    return arr[randomIndex];
}
var numbers = [13, 23, 63, 84, 95, 26, 17, 68, 59, 70];
const randomNumber = getRandomItem(numbers);
console.log("The random number from the array is: " + randomNumber);

// Question 17

console.log("*******************  QUESTION 17  *******************");
function getLargestNumber(arr) {
    "use strict";
    arr.sort();
    return arr.slice(-1);
}
var numbers = [13, 23, 63, 84, 99, 26, 17, 68, 59, 70];
const largestNumber = getLargestNumber(numbers);
console.log("The largest number from the array is: " + largestNumber);


