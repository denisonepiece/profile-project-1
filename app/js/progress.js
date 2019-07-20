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
