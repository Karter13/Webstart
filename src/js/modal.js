
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
        left.removeClass("modal_left");
        modalof.css({ "max-width": "50%" });
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

$(document).ready(function () {
    mapShown = false;
    $(window).scroll(function () {
        if (!mapShown) {
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 5000) {
                showmap();
                mapShown = true;
            }
        }
    });
    function showmap() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A66df74f822098f131d5f0e4d39e17c3012742f03c1639c1d9421b8e4cc68209b&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"
        document.getElementById("map").appendChild(script);
    }
});


