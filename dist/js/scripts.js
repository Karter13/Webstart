/*Обработка и отправка формы через AJAX */
$("#offer-form").on("submit", function (event) {
    event.preventDefault();
    $.ajax({
        url: "mail.php",
        type: "POST",
        data: $(this).serialize(),
        success: function (data) {
            $(".success").html(data + ", Ваша форма отправлена");
            // $(".modal").addClass("modal_activ"); // активация модального окна при верной отпраке
            $("#form-clean1").val("");
            $("#form-clean2").val("");
        }
    });
});


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