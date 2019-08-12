const animationNickName = function() {
  const preview = document.querySelector('.preview');
  const nickNumbers = document.querySelector('.nick-numbers');
  const pizza = document.querySelector('.pizza');
  const pieces = pizza.querySelectorAll('img');
  let top = -400;
  document.body.style.overflowY = 'hidden';
  preview.querySelector('.container').style.opacity = '1';
  setTimeout(() => {
    setInterval(() => {
      if (top <= 0) {
        nickNumbers.style.top = top + 'px';
      }

      if (top === 30) {
        preview.style.display = 'none';
        document.body.style.overflowY = 'scroll';
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
  }, 1000);
};

// animationNickName();
