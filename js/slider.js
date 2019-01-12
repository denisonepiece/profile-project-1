var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 5000;
var navBtnId = 0;
var translateWidth = 0;
var slideCurrent = 0;


$(document).ready(function() {
    selectBtn();
    // var switchInterval = setInterval(nextSlide, slideInterval);

    // $('#viewport').hover(function() {
    //     clearInterval(switchInterval);
    // }, function() {
    //     switchInterval = setInterval(nextSlide, slideInterval);
    //     selectBtn();
    // });

    $('#next-btn').click(function() {
        nextSlide();
        selectBtn();
    });

    $('#prev-btn').click(function() {
        prevSlide();
        selectBtn();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();
        slideCurrent = $(this).index();
        selectBtn();
        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        } 
    });

});


function selectBtn() {
    for(var i = 0; i < slideCount; i++) {
        if(slideCurrent == i) {
            $('.slide-nav-btn').eq(slideCurrent).addClass('btn-current');
        } else {
            $('.slide-nav-btn').eq(i).removeClass('btn-current');
        }
    }
}

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
        
    }
    slideCurrent = slideNow - 1; 
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--; 

    }
    slideCurrent = slideNow - 1; 
}