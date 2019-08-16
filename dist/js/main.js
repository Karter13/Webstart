// let button = document.querySelector("#button");
// let modal = document.querySelector("#modal");

// получение кнопки ЗАКРЫТЬ
// let close = document.querySelector("#close");



// button.addEventListener("click", function() {
//     modal.classList.add("modal_activ");

//     window.setTimeout(function() {
//         modal.classList.remove("modal_activ");
//     }, 5000);

// });



// function timer() {
//   modal.classList.remove("modal_activ");
// }

//  убирает модальное окно при нажатии кнопки ЗАКРЫТЬ

// close.addEventListener("click", function () {
//   modal.classList.remove("modal_activ");
// });

// подключение карты

function initMap() {

    let pos = { lat: 55.825847, lng: 37.318093 };
    let opt = {
        center: pos,
        zoom: 15
    };
    let map = new google.maps.Map(document.getElementById('map'), opt);

    let marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: " г. Москва, ул. Ленина, д. 10, корпус 2, оф. 308"
    });
}