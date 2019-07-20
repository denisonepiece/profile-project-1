function handleLanguage() {
    const langMenu = document.querySelector('.lang-menu');

    langMenu.addEventListener('click', function () {
        this.classList.toggle('active');
    });
}

handleLanguage();

function handMenuList() {
    const clickedMenu = document.querySelector('.menu__item-clicked');

    clickedMenu.addEventListener('click', function () {
        this.classList.toggle('active');
    });
}

handMenuList();