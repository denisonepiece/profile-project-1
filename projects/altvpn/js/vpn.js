addModal('.modal-device-btn', '.modal-device');
addModal('.modal-download-btn', '.modal-download');
addModal('.modal-buy-btn', '.modal-buy');

function showExtension() {
    const clickedMenu = document.querySelector('.show-extension-block'),
        shoBlock = document.querySelector('.hide-modal-vpn');

    clickedMenu.addEventListener('click', function () {
        shoBlock.classList.toggle('open');
    });
}

showExtension();
