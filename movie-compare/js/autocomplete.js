/**
 * @param {object} config configuration for the widget
 * @returns {HTMLElement} with input and auto-completion
 * enabled dropdown
 */
const createWidget = (config) => {
  // get values from config object
  const {
    type,
    root,
    renderOption,
    onOptionSelect,
    inputValue,
    searchMovie,
  } = config;

  // html content for input and autocompleted dropdown
  root.innerHTML = `
  <label for="input"><strong>Search for a ${type}</strong></label>
  <input type="text" class="input" name="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div 
  `;
  // selectors for created elements
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const content = root.querySelector(".dropdown-content");

  // listening to input
  input.addEventListener("input", debounce(onInput, 1000));
  // listening to click anywhere but inside root
  // remove dropdown if click isn't inside root element
  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });

  /**
   * Search movies, Creates clickable dropdown items
   * @param {event} event on input
   */
  async function onInput(event) {
    const items = (await searchMovie(event.target.value)) || [];
    // if no items found, don't show list
    if (!items.length) {
      content.innerHTML = "";
      // show msg if item not found
      const elem = document.createElement("div");
      elem.classList.add("dropdown-item");
      elem.innerHTML = `<h2>Movie not found!</h2>`;
      content.appendChild(elem);
      dropdown.classList.add("is-active");
      return;
    }
    // clears the dropdown
    content.innerHTML = "";
    dropdown.classList.add("is-active");

    // iterate over searched items
    for (let item of items) {
      // create element for dropdown item
      const elem = document.createElement("a");
      elem.classList.add("dropdown-item");
      elem.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        // change input value to original items property
        input.value = inputValue(item);
        // on item click, show item
        onOptionSelect(item);
      });
      // render item
      elem.innerHTML = renderOption(item);
      // add item to dropdown
      content.appendChild(elem);
    }
  }
};
