'use sctrict';

const animationHeaderLogo = function() {
  const logoBlock = document.querySelector('.header__logo');
  window.addEventListener('scroll', () => {
    logoBlock.style.transform = 'rotate(' + window.pageYOffset / 2 + 'deg)';
  });
};

const animationNickName = function() {
  const preview = document.querySelector('.preview');
  const nickNumbers = document.querySelector('.nick-numbers');
  const pizza = document.querySelector('.pizza');
  const pieces = pizza.querySelectorAll('img');
  let top = -345;

  setInterval(() => {
    if (top <= 0) {
      nickNumbers.style.top = top + 'px';
    }

    if (top === 30) {
      preview.style.display = 'none';
    }

    switch (top) {
      case -345:
        pieces[5].style.opacity = 0.3;
        break;
      case -274:
        pieces[4].style.opacity = 0.3;
        break;
      case -205:
        pieces[3].style.opacity = 0.3;
        break;
      case -137:
        pieces[2].style.opacity = 0.3;
        break;
      case -69:
        pieces[1].style.opacity = 0.3;
        break;
      case 0:
        pieces[0].style.opacity = 1;
        break;
    }

    top++;
  }, 7);
};

const flicker = function() {
  const body = document.body;
  let sec = 0;
  let invert = false;

  setInterval(() => {
    if (sec === 80) {
      invert = !invert;
    }

    if (sec === 82) {
      invert = !invert;
    }

    if (sec === 92) {
      invert = !invert;
    }

    if (sec === 95) {
      invert = !invert;
    }

    if (sec === 98) {
      invert = !invert;
    }

    if (sec === 100) {
      sec = 0;
      invert = !invert;
    }

    if (invert) {
      body.style.filter = 'invert(1)';
    } else {
      body.style.filter = 'invert(0)';
    }

    sec += 1;
  }, 100);
};

animationHeaderLogo();
animationNickName();
// flicker();
