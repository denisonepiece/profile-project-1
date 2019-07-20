/** Связывание кнопки и модального окна
 * @param {NodeElement} btn кнопка открытия модального окна
 * @param {NodeElement} modal модальное окно
 */
function addModal(btn, modal) {
  const modalCurrent = document.querySelector(modal);
  const allButtons = document.querySelectorAll(btn);
  const closeBtn = modalCurrent.querySelector('#btn-close');

  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function(e) {
      e.preventDefault();
      modalCurrent.classList.remove('modal-hidden');
    });
  }

  closeBtn.addEventListener('click', function() {
    modalCurrent.classList.add('modal-hidden');
  });

  // Если есть кнопка вернуться, она закрывает текущее модальное окно
  if (modalCurrent.querySelector('#button-back')) {
    modalCurrent.querySelector('#button-back')
        .addEventListener('click', function(e) {
          modalCurrent.classList.add('modal-hidden');
        });
  }

  modalCurrent.addEventListener('click', function(e) {
    if (!e.target.closest('.modal__body') &&
      !document.querySelector('#dlt-row')) {
      modalCurrent.classList.add('modal-hidden');
    }
  });
}
