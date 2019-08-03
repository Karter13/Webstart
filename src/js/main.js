let button = document.querySelector("#button");
let modal = document.querySelector("#modal");

// получение кнопки ЗАКРЫТЬ
// let close = document.querySelector("#close");



button.addEventListener("click", function () {
  modal.classList.add("modal_activ");

  window.setTimeout(function () {
    modal.classList.remove("modal_activ");
  }, 5000);

});



// function timer() {
//   modal.classList.remove("modal_activ");
// }

//  убирает модальное окно при нажатии кнопки ЗАКРЫТЬ

// close.addEventListener("click", function () {
//   modal.classList.remove("modal_activ");
// });

