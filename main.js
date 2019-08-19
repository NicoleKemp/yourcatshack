$(function () {
    const screenHeight = $(window).height();

    $('body').scrollspy({target: ".navbar"});

    $('.navbar li a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 300);
    });

    $('.bg-main .btn').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 300);
    });

    $('.arrow-down').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 300);
    });


    // Navbar darkening when scolling after a certain point.
    $(window).scroll(function (e) {
        if (e.currentTarget.pageYOffset >= screenHeight-100) {
            $('nav').addClass('navbar-dark');
        } else {
            $('nav').removeClass('navbar-dark');
        }
    })
}());