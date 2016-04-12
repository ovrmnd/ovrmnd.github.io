(function($) {
    $('input').keyup(function(e){
        if($(this).val()) {
            $(this).addClass('filled');
        } else {
            $(this).removeClass('filled');
        }
    });

    $('select' ).change(function(e) {
        if($(this).val()) {
            $(this).addClass('filled');
        } else {
            $(this).removeClass('filled');
        }
    });
})(jQuery);
