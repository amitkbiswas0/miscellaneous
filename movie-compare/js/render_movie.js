/**
 * @param {object} movieDetails contains details to be shown
 * @returns {HTMLElement} to render movie details
 */
function movieTemplate(movieDetails) {
  // extract values from movie object
  const awards = movieDetails.Awards.split(" ").reduce((acc, elem) => {
    if (isNaN(parseInt(elem))) return acc;
    return acc + parseInt(elem);
  }, 0);
  const boxOffice = parseInt(movieDetails.BoxOffice.match(/\d/g).join(""));
  const metaScore = parseInt(movieDetails.Metascore);
  const imdbRating = parseFloat(movieDetails.imdbRating);
  const imdbVotes = parseFloat(movieDetails.imdbVotes.match(/\d/g).join(""));

  return `
  <article class="media">
    <figure class="media-left">
      <p class="image">
        <img src="${movieDetails.Poster}" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h1>${movieDetails.Title} (${movieDetails.Year})</h1>
        <h4>${movieDetails.Genre}</h4>
        <p>${movieDetails.Plot}</p>
      </div>
    </div>
  </article>
  <article data-value=${awards} class="notification is-primary">
      <p class="title">${movieDetails.Awards}</p>
      <p class="subtitle">Awards</p>
    </article>
    <article data-value=${boxOffice} class="notification is-primary">
      <p class="title">${movieDetails.BoxOffice}</p>
      <p class="subtitle">Box Office</p>
    </article>
    <article data-value=${metaScore} class="notification is-primary">
      <p class="title">${movieDetails.Metascore}</p>
      <p class="subtitle">Meta Score</p>
    </article>
    <article data-value=${imdbRating} class="notification is-primary">
      <p class="title">${movieDetails.imdbRating}</p>
      <p class="subtitle">IMDB Rating</p>
    </article>
    <article data-value=${imdbVotes} class="notification is-primary">
      <p class="title">${movieDetails.imdbVotes}</p>
      <p class="subtitle">IMDB Votes</p>
    </article>
  </article>
  `;
}
