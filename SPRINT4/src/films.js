
// Exercise 1: Get the array of all directors.

function getAllDirectors(array) {

  const rstDirectors = array.map(llista => llista.director);

  return rstDirectors;

}

// Exercise 2: Get the films of a certain director

function getMoviesFromDirector(array, director) {

 const rstDirectorFilms = array.filter(llista => llista.director === director);

 return rstDirectorFilms;

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  const directorFilms = array.filter(llista => llista.director === director);

  const rstPunctuation = directorFilms.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);

  const rstAverage = parseFloat((rstPunctuation / directorFilms.length).toFixed(2));

  return rstAverage;

}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  const copy = [...array];

  const order = copy.sort((a, b) => a.title.localeCompare(b.title));

  const length = order.slice(0, 20);

  if (length.length > 20) {
    return array;
  }

  const result = length.map(movie => movie.title);

  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const rstCopy = [...array];

  const rstOrder = rstCopy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });

  return rstOrder;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

  let moviesCopy = [...array];

  const rstFilter = moviesCopy = array.filter(movie => {

    if (typeof (movie.score) !== 'number');

    else {
      return movie.genre.includes(genre);
    }

  });

  const rstScore = rstFilter.reduce((accumulator, movie) => accumulator + movie.score, 0);

  const rstAverage = Number((rstScore / moviesCopy.length).toFixed(2));

  return rstAverage;
}



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

    const copy = array.map(movie => {

    const movieCopy = { ...movie };

    const durationMatch = movieCopy.duration.match(/(\d+)\s*(h|hour|hours)?\s*(\d*)\s*(min|minute|minutes)?/i);

    if (durationMatch) {
      const hours = parseInt(durationMatch[1], 10) || 0;
      const minutes = parseInt(durationMatch[3], 10) || 0;
      const totalMinutes = hours * 60 + minutes;

      movieCopy.duration = totalMinutes;
    }

    return movieCopy;
  });
  
  return copy;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
