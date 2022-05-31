function menuMobileOn() {
  const navigator = document.querySelector(".navigator-desktop");
  const divBtn = document.querySelector(".btn-mobile");
  const btnClose = document.createElement("box-icon");

  //criar botão de fechar menu
  btnClose.setAttribute("name", "x"); //adicionar o atributo name correspondente ao nome do icone

  divBtn.appendChild(btnClose); //adicionando o filho btnClose no navigator
  navigator.appendChild(divBtn); //adicionando o filho btnClose no navigator
  navigator.insertAdjacentElement("afterbegin", divBtn); //definindo o btnClose como o primeiro filho do navigator

  //adicionar ou retirar classe de menu ativo conforme clique
  navigator.classList.toggle("active");

  //criar botão de ver mais categorias
  const moreCategories = document.querySelector(".more-categories");
  const btnMoreCategories = document.querySelector(".btn-more-categories");

  btnMoreCategories.setAttribute("name", "plus");

  moreCategories();
}

function moreCategories() {
  const dropCategories = document.querySelector(".menu-drop");

  dropCategories.classList.toggle("active");
  console.log("funfou");
}
