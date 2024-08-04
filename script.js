const hourText = document.querySelector(".hour");
const minsText = document.querySelector(".mins");
const secondText = document.querySelector(".seconds");

setInterval(() => {
  const date = new Date();
  hourText.innerHTML = (date.getHours() < 10 ? "0" : "") + date.getHours();
  minsText.innerHTML = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  secondText.innerHTML =
    (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
}, 1000);
