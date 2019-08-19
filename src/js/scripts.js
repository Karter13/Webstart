

/*запуск слайдера при прокрутке*/

$(document).ready(function () {
    let el = $('.price__card');
    console.log(el);
    $(window).scroll(function () {
        if ($(this).scrollTop() > el.offset().top - 400) {
            el.addClass('price__card-animation');
        }
    });
});