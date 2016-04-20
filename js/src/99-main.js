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
        if($(el).val()) {
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
    $('input, textarea, select').blur(function(e){
        toggleFilled(this);
    });

    /**
     *  Toggle the mobile menu
     */
    $('.mobile-menu').click(function(e) {
        e.preventDefault();
        $('.mobile-nav').toggleClass('open');
        $(this).toggleClass('open');
    });

    $('.mobile-nav a').click(function(e) {
        $('.mobile-nav, .mobile-menu').removeClass('open');
        $(this).removeClass('open');
    });
    $(window).resize(function(e) {
        $('.mobile-nav, .mobile-menu').removeClass('open');
        $(this).removeClass('open');
    });

    /**
     *  Initialize midnight
     */
    $('.header').midnight();

    /**
     *  Smooth scroll window to an element
     */
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        console.log($(this).attr('href'));
        if($(this).attr('href') !== '#') {
            $('html, body').animate({
                scrollTop: ($($.attr(this, 'href')).offset().top) - $('.header').height()
            }, 500);
        }
    });

    /**
     *  Handle submitting the contact for to Formspree
     */
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
})(jQuery);
