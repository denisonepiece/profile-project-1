window.addEventListener('DOMContentLoaded', function () {

  // animationHeaderLogo();
  animationNickName();

  function animationHeaderLogo() {
    let logoBlock = document.querySelector('.header__logo'),
      logo = logoBlock.querySelector('img');

    window.addEventListener('scroll', function () {
      logoBlock.style.transform = 'rotate(' + window.pageYOffset / 2 + 'deg)';
    });
  };

  function animationNickName() {
    let nickNumbers = document.querySelector('.nick-numbers'),
      top = -345,
      up = true,
      rotate = 0,
      height = 200,
      pizza = document.querySelector('.pizza'),
      pieces = pizza.querySelectorAll('img'),
      emptyDiv = document.createElement('div');


    let stopId = setInterval(function () {
      if (top == -345) {
        up = false;
      }

      if (top == 0) {
        up = true;
        pieces[0].style.position = 'unset';
      }

      if (rotate == -264) {
        clearInterval(stopId);
      }

      switch (top) {
        case -345:
          pieces[5].style.opacity = 0;
          break;
        case -274:
          pieces[4].style.opacity = 0;
          break;
        case -205:
          pieces[3].style.opacity = 0;
          break;
        case -137:
          pieces[2].style.opacity = 0;
          break;
        case -69:
          pieces[1].style.opacity = 0;
          break;
        case 0:
          pieces[0].style.opacity = 1;
          break;
      }

      switch (up) {
        case true:
          rotate -= 6;
          height += 1;
          break;
        case false:
          top++;
          break;
      }

      nickNumbers.style.top = top + 'px';
    }, 10);
  };


});