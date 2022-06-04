const navigator = document.querySelector(".header__desktop");
const btnMoreCategories = document.querySelector(".btn-more-categories");
const dropCategories = document.querySelector(".header__menu-drop");
const categories = document.querySelector(".header__categories");
const widthScreen = window.outerWidth;

function menuMobileOn() {
  navigator.classList.toggle("active");
  btnMoreCategories.setAttribute("name", "plus");
  dropCategories.classList.remove("active");

  closeButton();
}

function moreCategories() {
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

if (widthScreen > 599) {
  btnMoreCategories.style.display = "none";
}
