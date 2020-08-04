// selectors
const btn = document.querySelector("button");
const card = document.querySelector(".card");
const image = document.querySelector(".card img");
const name = document.querySelector(".name");
const toWhom = document.querySelector(".to-whom");
const quote = document.querySelector(".quote");

// globals
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

btn.addEventListener("click", init);
// runs on button click
function init() {
  getData()
    .then((data) => {
      const date = new Date(data.appeared_at);
      let appeared = `${days[date.getDay()]}, ${
        months[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
      const value = data.value;
      const against = data.tags[0] || "Someone!";
      const source = data._embedded.source[0].url;

      // set values
      // change img/ to img\ if you're on windows
      image.src = `img/trump${Math.floor(Math.random() * 6)}.webp`;
      // console.log(image.src);
      name.innerHTML = `About:<br />${against}`;
      toWhom.innerHTML = `<a href="${source}" target="_blank"> Here </a><p>@ ${appeared}</p>`;
      quote.innerHTML = `${value}`;
    })
    .catch((err) => {
      card.innerHTML = `<h1>Something happened!<br />Check Console!</h1>`;
      console.log(err);
    });
}
// call the api and process data
async function getData() {
  const blob = await axios.get("https://api.tronalddump.io/random/quote");
  return blob.data;
}
