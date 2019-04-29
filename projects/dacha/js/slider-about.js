var swiper = new Swiper (".swiper-container-docs", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 38,
    navigation: {
        nextEl: ".next-docs",
        prevEl: ".prev-docs"
    },
    breakpoints: {
        1300: {
            spaceBetween: 20,
        },
        1209: {
            spaceBetween: 50,
            slidesPerView: 3,

        }
    }

});

var swiper1 = new Swiper (".swiper-container-life", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 2,
    navigation: {
        nextEl: ".next-life",
        prevEl: ".prev-life"
    },

});
