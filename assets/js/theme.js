/**
 * @var $ jQuery
 */

// Full Height...
function fsHeight() {
    let winHeight = $(window).height();
    $('[data-height="viewport"]').css('height', winHeight, '!important');
    $('[data-min-height="viewport"]').css('minHeight', winHeight, '!important');
}

/* Window Load ---------------------- */

$(window).on('load', function () {

    setTimeout(function () {
        $('body').addClass('loaded');
    }, 400);

    setTimeout(function () {
        AOS.init({
            once: true,
            duration: 1000
        });
    }, 800);

});


/* Document Ready ---------------------- */

$(document).ready(function () {

    fsHeight();


    // Inline background image...
    $("[data-bg]").each(function () {
        const image = $(this).attr("data-bg");
        $(this).css({
            backgroundImage: 'url("' + image + '")',
        });
    });

});


/* Window Scroll ---------------------- */

$(window).on('scroll', function () {


});


/* Window Resize ---------------------- */

$(window).on('resize', function () {

    fsHeight();

});

// *****************stick navabar
$(window).scroll(function () {

    // Write code here
    var scroll = $(window).scrollTop();
    if (scroll >= 40) {
        $(".site-nav").addClass("animate__animated animate__fadeInDown");
        $(".site-nav").addClass("sticky");
    } else {
        $(".site-nav").removeClass("sticky");
        $(".site-nav").removeClass("animate__animated animate__fadeInDown");
    }
});
