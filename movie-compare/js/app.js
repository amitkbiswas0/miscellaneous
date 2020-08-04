// global variables
let leftMovie;
let rightMovie;

// custom config object for movies
const autocompleteConfig = {
  type: "Movie",
  // how items of the dropdown will render
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
    <img src="${imgSrc}"/>
    <h3>${movie.Title} (${movie.Year})</h3>
    `;
  },
  // change input value according to this property
  inputValue(movie) {
    return movie.Title;
  },
  // fetch search results
  async searchMovie(movieName) {
    const response = await axios.get("http://www.omdbapi.com/", {
      // params are added at the end of the url as query strings
      params: {
        apikey: "api_key", // enter omdb api key here
        s: movieName,
      },
    });
    if (response.data.Error) return [];
    return response.data.Search;
  },
};
// create individual widgets
createWidget({
  root: document.querySelector("#left-autocomplete"),
  ...autocompleteConfig,
  // upon selecting a movie
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    showMovie(movie.imdbID, "#left-summery");
  },
});
createWidget({
  root: document.querySelector("#right-autocomplete"),
  ...autocompleteConfig,
  // upon selecting a movie
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    showMovie(movie.imdbID, "#right-summery");
  },
});
/**
 * @param {string} imdbID id of the movie to be fetched
 * @returns {object} with movie data
 */
async function showMovie(imdbID, summerElem) {
  // fetch movie using ID
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "api_key", // enter omdb api key here
      i: imdbID,
    },
  });

  // generate template
  const movie = await response.data;
  document.querySelector(summerElem).innerHTML = movieTemplate(movie);

  // check if both movie loaded
  if (summerElem === "#right-summery") rightMovie = movie;
  else leftMovie = movie;
  if (leftMovie && rightMovie) {
    compareMovies();
  }
}

// change color according to value
const compareMovies = () => {
  const leftSide = document.querySelectorAll("#left-summery .notification");
  const rightSide = document.querySelectorAll("#right-summery .notification");

  leftSide.forEach((leftStat, index) => {
    const rightStat = rightSide[index];

    // load value from data-value
    const leftValue = leftStat.dataset.value;
    const rightValue = rightStat.dataset.value;

    leftStat.classList.remove("is-primary");
    rightStat.classList.remove("is-primary");
    // change color
    if (leftValue > rightValue) {
      rightStat.classList.add("lost");
      leftStat.classList.add("won");
    } else if (rightValue > leftValue) {
      leftStat.classList.add("lost");
      rightStat.classList.add("won");
    }
  });
};
