$(function () {

    $('.changeLanguage').click(function () {

        var code = $(this).attr('data-code');

        $.ajax({
            type: 'POST',
            url: '/Home/ChangeLanguage',
            data: { lg: code },
            success: function (resp) {
                document.location.reload();
            },
            error: function () {
                console.log('Failed to change language');
            }
        });

    });
});
