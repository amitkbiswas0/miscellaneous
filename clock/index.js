function clockMovement() {
  const time = new Date();

  const secondHand = document.querySelector(".secondHand");
  const minuteHand = document.querySelector(".minuteHand");
  const hourHand = document.querySelector(".hourHand");

  const seconds = time.getSeconds();
  const secondsDeg = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  const minutes = time.getMinutes();
  const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

  const hours = time.getHours();
  const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

function init() {
  setInterval(clockMovement, 1000);
}

window.addEventListener("DOMContentLoaded", init);
