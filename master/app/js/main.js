$(document).ready(function(){


  // console.log($(window).height());

	// аккаунт
	$('.avatar').on('click', function(event) {
      $('.header-account-user__nav').toggle();
  });



  

  // стрелка date
  let input = $('.date-input input');
  let rotate = $('.date-input span');
  input.click(function(event) {
    rotate.css({
      transform: 'rotate(0)',
      transition: '.8s'
    });
  });
  $(document).mouseup(function (e){ 
        if (!rotate.is(e.target) 
            && rotate.has(e.target).length === 0) { 
            rotate.css({
              transform: 'rotate(180deg)',
              transition: '.8s'
            });
        }
    });



    $('.mobile').click(function() {
      $('.header-right').toggleClass('menu_active');
    });
    $('.menu-close').click(function() {
      $('.header-right').toggleClass('menu_active');
    });

    // $('.header__mobile-menu').click(function() {
    //   $('.header__mobile-content').toggleClass('header__mobile-active');
    // });
    // $('.header__mobile-close').click(function() {
    //   $('.header__mobile-content').toggleClass('header__mobile-active');
    // });



   // регистрация
    $('.header-account__btn').on('click', function(event) {
      event.preventDefault();
      $('.popup__check').fadeIn();
    });
    $('.sign-up').on('click', function(event) {
      event.preventDefault();
      $('.popup__login').fadeOut();
      $('.popup__successful').fadeOut();
      $('.popup__check').fadeIn();
    });
    $('.popup__check-close').on('click', function(event) {
      event.preventDefault();
      $('.popup__check').fadeOut();
    });

   // успешна регистрация
    $('.successful-btn').on('click', function(event) {
      event.preventDefault();
      $('.popup__check').fadeOut();
      $('.popup__successful').fadeIn();
    });
    $('.popup__successful-close').on('click', function(event) {
      event.preventDefault();
      $('.popup__successful').fadeOut();
    });
    $('.popup__successful-close').on('click', function(event) {
      event.preventDefault();
      $('.popup__successful').fadeOut();
    });
    $('.successful__btn').on('click', function(event) {
      event.preventDefault();
      $('.popup__successful').fadeOut();
    });
   // вход
    $('.login-btn').on('click', function(event) {
      event.preventDefault();
      $('.popup__check').fadeOut();
      $('.popup__login').fadeIn();
    });
    $('.sign-in').on('click', function(event) {
      event.preventDefault();
      $('.popup__forgot').fadeOut();
      $('.popup__login').fadeIn();
    });
    $('.popup__login-close').on('click', function(event) {
      event.preventDefault();
      $('.popup__login').fadeOut();
    });
   // смена пароля
    $('.forgot-btn').on('click', function(event) {
      event.preventDefault();
      $('.popup__login').fadeOut();
      $('.popup__forgot').fadeIn();
    });
    $('.popup__forgot-close').on('click', function(event) {
      event.preventDefault();
      $('.popup__forgot').fadeOut();
    });

    // tabs popup
    $(".tab-item").hide();
    $('.tab-active').show();
    $(".popup-tabs .tab").click(function () {
      $(".popup-tabs .tab").removeClass("tab-active").eq($(this).index()).addClass("tab-active");
      $(".tab-item").hide().eq($(this).index()).fadeIn()
    });


    $('#interest').selectmenu();
    $('#district').selectmenu();
    $('#events-filter').selectmenu();
    $('#date').datepicker({
      dateFormat:"MM dd, yy",
      dayNamesMin: [ "S", "M", "T", "W", "T", "F", "S" ]
    });
    $("#date").datepicker("setDate", new Date());



});