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
