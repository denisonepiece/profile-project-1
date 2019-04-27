// Обрезание текста

function textCut() {

var box = document.querySelector('.box'),
    text = box.innerHTML,
    clone = document.createElement('div');

clone.style.position = 'absolute';
clone.style.visibility = 'hidden';
clone.style.width = box.clientWidth + 'px';
clone.innerHTML = text;
document.body.appendChild(clone);

var l = text.length - 1;
for (; l >= 0 && clone.clientHeight > box.clientHeight; --l) {
    clone.innerHTML = text.substring(0, l) + ' ...';
}

box.innerHTML = clone.innerHTML;

}

// textCut();


// Обрезание текста END

// HEADER


$('#header-burger').on('click', function (e) {
    e.preventDefault();
    $('.header__main').toggleClass('header__main-links-active');
});


$('.search-icon').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('search-icon_active');
    $('.header__search').addClass('header__search_active');
    $('.header__rubric').css('margin-left', '10px');

});

$('#search-ok').on('click', function (e) {
    e.preventDefault();
    $('.search-icon').removeClass('search-icon_active');
    $('.header__search').removeClass('header__search_active');
    $('.header__rubric').css('margin-left', '0px');


});

$('#more-links-btn').on('click', function (e) {
    e.preventDefault();
    $('.header__more-links').toggleClass('header__more-links_active');
});

$('#rubric-btn').on('click', function (e) {
    e.preventDefault();
    $('.header__more-links').toggleClass('header__more-links_active');
});


// HEADER END

function changePlaceholder() {
    if ($(window).width() < 1024) {
        $(".input-with-button input[type='email']").attr('placeholder', 'Email');
        $(".input-border input").attr('placeholder', 'Email');
    }
    else {
        $(".input-with-button input[type='email']").attr('placeholder', 'Напишите ваш email');
        $(".input-border input").attr('placeholder', 'Напишите ваш email');
    }
}

changePlaceholder();

$(window).resize(function(){
    changePlaceholder();
});

$(window).on('scroll',function () {
   if($(window).scrollTop() > 0) {
       $(".header").css('box-shadow','0px 2px 24px 0px rgba(0, 0, 0, 0.12)');
   }
   else {
       $(".header").css('box-shadow','none');
   }
});

