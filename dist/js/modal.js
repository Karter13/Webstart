
$(document).ready(function () {
    let button = $("#button");
    let modal = $("#modal");
    let close = $("#close");
    let cardLink = $(".card__link");
    let left = $(".modal-column_left");
    let modalof = $(".modal-dialog");

    /*Для кнопки Перезвони мне*/
    button.on("click", function () {
        left.addClass("modal_left");
        modalof.css({ "max-width": "500px" });
        modal.addClass("modal_activ");
    });

    /*Для блок price*/
    cardLink.on("click", function (event) {
        event.preventDefault();
        modal.addClass("modal_activ");
        let target = $(this).attr("data-target");
        $(".modal-content").load(target + ".html");
    });


    close.on("click", function () {
        modal.removeClass("modal_activ");
    });
});


/*Кнопка прокрутки страницы вверх*/
$(document).ready(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });

    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });

});


