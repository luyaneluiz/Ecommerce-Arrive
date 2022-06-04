// function timer() {
//   let secounds = 60;

//   while (secounds < 61) {
//     secounds = secounds--;
//   }
//   console.log(secounds);
// }
// document.querySelector("[secound]").innerHTML = secounds;

// let secound = document.querySelector("[secound]");
// let contador = 60;

// setInterval(() => (secound.innerHTML = contador--), 1500);

// if (contador == 0) {
//   contador = 60;
// } else {
//   setInterval(() => (secound.innerHTML = contador--), 1500);
// }

var secound = 60;
var minutes = 15;
var hours = 4;

const tempo = 900;

let contador;

contador = setInterval(() => {
  timer();
}, tempo);

function timer() {
  secound--;
  if (secound == 0) {
    secound = 60;
    minutes--;

    if (minutes == 0) {
      minutes = 60;
      hours--;
    }
  }

  document.querySelector("[secound]").innerHTML = secound;
  document.querySelector("[minutes]").innerHTML = minutes;
  document.querySelector("[hours]").innerHTML = hours;
}
