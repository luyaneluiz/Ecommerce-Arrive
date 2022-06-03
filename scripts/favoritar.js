// function Favoritar(e) {
//   e.classList.toggle("favoritado");

//   if (e.classList.contains("favoritado")) {
//     e.setAttribute("src", "./assets/ico-heart-solid.svg");
//   } else {
//     e.setAttribute("src", "./assets/ico-heart.svg");
//   }
// }

function Favoritar(e) {
  e.classList.toggle("favoritado");

  if (e.classList.contains("favoritado")) {
    e.setAttribute("type", "solid");
  } else {
    e.setAttribute("type", "");
    e.setAttribute("name", "heart");
  }
}
