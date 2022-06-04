const span = document.querySelector("span");

function Scroll() {
  const news = document.querySelector(".trends__news");
  const hots = document.querySelector(".trends__hots");

  news.classList.toggle("hidden");
  hots.classList.toggle("hidden");
}
