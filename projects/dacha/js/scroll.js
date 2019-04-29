$(window).ready(function () {
    $buttonScroll = $('.scroll-to');
    $buttonScroll.on('click', function (event) {

        var target = $(this.getAttribute('data-target'));

        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 20
            }, 1000);
        }
    });
})();