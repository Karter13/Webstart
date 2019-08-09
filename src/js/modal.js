$(document).ready(function () {
    let button = $("#button");
    let modal = $("#modal");
    let close = $("#close");

    button.on("click", function () {
        modal.addClass("modal_activ");
    });

    close.on("click", function () {
        modal.removeClass("modal_activ");
    });
});

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


