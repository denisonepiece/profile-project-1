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

/**
 * Установка высоты прогресс бара относительно высоты экрана
 */
function progressBar() {
  const indicator = document.querySelector('.progress-bar__indicator');
  const scrollTop = document.body.scrollTop ||
    document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (scrollTop / height) * 100;

  indicator.style.height = progress + '%';
}

window.addEventListener('scroll', progressBar);

/**
 * Обрабатывает открытие всех социальных сетей в asidе
 * и вложенную кнопку копирования
 */
function showSocialData() {
  const socialItems = document.querySelectorAll('.social__item');

  socialItems.forEach(function(e, key) {
    const socialData = e.querySelector('.social__data');
    const copyBtn = e.querySelector('.btn-copy');
    const login = socialData.innerText.split('\n')[0];

    copyBtn.addEventListener('click', function() {
      navigator.clipboard.writeText(login);
    });

    e.addEventListener('click', function() {
      socialData.classList.toggle('social__data-open');
      hideAnotherSocialData(key, socialItems);
    });
  });
}

/**
 * Закрывает все кроме текущего социальные сети
 * @param {number} current текущий открытый элемент
 * @param {array} elements все элементы
 */
function hideAnotherSocialData(current, elements) {
  for (let i = 0; i < elements.length; i++) {
    const currentSocialData = elements[i].querySelector('.social__data');
    if (i !== current) {
      currentSocialData.classList.remove('social__data-open');
    }
  }
}

showSocialData();
