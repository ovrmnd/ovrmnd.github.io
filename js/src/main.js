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

    $('.mobile-menu').click(function(e) {
        e.preventDefault();
        $('.nav').toggleClass('open');
        $(this).toggleClass('open');
    });


    /**
     *  Scroll window to an element
     */
    $('a[href^="#"').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ($($.attr(this, 'href')).offset().top) - $('.header').height()
        }, 500);
    });

    // $(window).scroll(function(e) {
    //     if(($(this).scrollTop() + $('.header').height()) >= $('#contact').offset().top) {
    //         $('.nav a').removeClass('active');
    //         $('[href="#contact"]').addClass('active');
    //     } else if(($(this).scrollTop() + $('.header').height()) >= $('#services').offset().top) {
    //         $('.nav a').removeClass('active');
    //         $('[href="#services"]').addClass('active');
    //     } else if(($(this).scrollTop() + $('.header').height()) >= $('#approach').offset().top) {
    //         $('.nav a').removeClass('active');
    //         $('[href="#approach"]').addClass('active');
    //     } else {
    //         $('.nav a').removeClass('active');
    //     }
    // });
})(jQuery);
