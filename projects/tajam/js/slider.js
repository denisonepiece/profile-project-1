$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.feedback__slider_text').slick({
        dots: false,
        arrows: false,
        asNavFor: '.feedback__slider_img'
    });

    $('.feedback__slider_img').slick({
        asNavFor: '.feedback__slider_text',
        centerMode: true,
        centerPadding: '75px',
        slidesToShow: 3,
        arrows: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});