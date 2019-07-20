let mySwiper = undefined;

function initSwiper() {
  const windowWidth = window.innerWidth;
  const phoneList = document.querySelector('.phone__list');
  const phoneItems = document.querySelectorAll('.phone__item');
  const img = document.querySelector('.phone__device_apple')
      .querySelector('img');
  let imgSrc = img.src;

  imgSrc = imgSrc.substr(0, imgSrc.length - 5);


  if (windowWidth <= 900 && mySwiper == undefined) {
    for (let i = 0; i < phoneItems.length; i++) {
      phoneItems[i].classList.add('swiper-slide');
    }
    phoneList.classList.add('swiper-wrapper');
    mySwiper = new Swiper('.swiper-container', {
      slidespreView: 1,
      speed: 400,
      pagination: {
        el: '.swiper-pagination',
      },
    });

    mySwiper.on('slideChange', () => {
      img.src = imgSrc + (mySwiper.realIndex + 1) + '.png';

    });
  } else if (windowWidth > 900 && mySwiper != undefined) {
    mySwiper.destroy();
    mySwiper = undefined;
    for (let i = 0; i < phoneItems.length; i++) {
      phoneItems[i].classList.remove('swiper-slide');
      console.log('kek');
    }
  }
}

initSwiper();

window.onresize = () => initSwiper();

function slidesPhone() {
  const listItems = document.querySelectorAll('.phone__item');
  const img = document.querySelector('.phone__device_apple')
      .querySelector('img');
  let imgSrc = img.src;

  imgSrc = imgSrc.substr(0, imgSrc.length - 5);

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function() {
      this.classList.toggle('phone__item-active');

      if (i != 0) {
        listItems[i - 1].classList.add('phone__item-top');
      }

      img.src = imgSrc + (i + 1) + '.png';

      for (let j = 0; j < listItems.length; j++) {
        if (j != i) {
          listItems[j].classList.remove('phone__item-active');
        }

        if (j != (i - 1)) {
          listItems[j].classList.remove('phone__item-top');
        }
      }
    });
  }
}

slidesPhone();
