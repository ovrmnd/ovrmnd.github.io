(function($) {

    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    /**
     *  Toggle whether a form fields is filled
     */
    var toggleFilled = function(el) {
        if($(el)) {
            $(el).addClass('filled');
        } else {
            $(el).removeClass('filled');
        }
    };

    /**
     *  Add 'filled' class to form elements if they have a value
     */
    $('input, textarea').keyup(function(e){
        toggleFilled(this);
    });
    $('select' ).change(function(e) {
        toggleFilled(this);
    });

    /**
     *  Toggle the mobile menu
     */
    $('.mobile-menu').click(function(e) {
        e.preventDefault();
        $('.nav').toggleClass('open');
        $(this).toggleClass('open');
    });


    /**
     *  Smooth scroll window to an element
     */
    $('a[href^="#"').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ($($.attr(this, 'href')).offset().top) - $('.header').height()
        }, 500);
    });

    $('.form-contact').submit(function(e) {
        e.preventDefault();

        $.ajax({
            url: "https://formspree.io/kjbrumm@gmail.com",
            method: "POST",
            data: $(this).serializeObject(),
            dataType: "json"
        }).done(function(data) {
            if(data.success) {
                $('.form-contact').hide();
                $('.form-notice').text('Your message has been sent. We will be in touch shortly!').fadeIn();
            }
        });
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
