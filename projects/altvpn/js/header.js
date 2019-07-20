/**
 * Change header on srolling
 */
function headerOnScroll() {
  const header = document.querySelector('header');

  if (window.pageYOffset > 0) {
    header.classList.add('header-onscroll');
  } else {
    header.classList.remove('header-onscroll');
  }
};

headerOnScroll();
window.onscroll = headerOnScroll;

/**
 * Обработка клика по бургеру
 */
function toggleMenu() {
  const burger = document.querySelector('.burger');
  const header = document.querySelector('.header');

  burger.addEventListener('click', function() {
    this.classList.toggle('burger-active');
    header.classList.toggle('header-menu-active');
  });
};

toggleMenu();
