const navigator = document.querySelector(".navigator-desktop");
const btnMoreCategories = document.querySelector(".btn-more-categories");
const dropCategories = document.querySelector(".menu-drop");
const categories = document.querySelector(".categories");

function menuMobileOn() {
  navigator.classList.toggle("active");
  btnMoreCategories.setAttribute("name", "plus");
  dropCategories.classList.remove("active");

  closeButton();
}

function moreCategories() {
  const widthScreen = window.outerWidth;

  if (widthScreen <= 600) {
    dropCategories.classList.toggle("active");
    btnMoreCategories.setAttribute("name", "minus");

    if (dropCategories.classList.contains("active")) {
      btnMoreCategories.setAttribute("name", "minus");
    } else {
      btnMoreCategories.setAttribute("name", "plus");
    }
  }
}

function closeButton() {
  const btnClose = document.querySelector(".close-btn");

  btnClose.setAttribute("name", "x");
  btnClose.addEventListener("click", closeMenu);

  function closeMenu() {
    navigator.classList.remove("active");
  }
}
