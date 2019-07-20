/* eslint-disable require-jsdoc */
window.addEventListener('DOMContentLoaded', function() {

  if (document.querySelector('.modal-code')) {
    addModal('.modal-code-btn', '.modal-code');
  }

  /**
   * Открытие списка программ на странице ВПН
   */
  function showDeviceList() {
    const device = document.querySelectorAll('.device');

    for (let i = 0; i < device.length; i++) {
      const clickZone = device[i].querySelector('.row-sb');
      clickZone.addEventListener('click', function() {
        removeFromAnoter('.device', 'device-open', i);
        device[i].classList.toggle('device-open');
      });
    }
  }

  function removeFromAnoter(from, what, notAnother) {
    const fromElements = document.querySelectorAll(from);

    for (let i = 0; i < fromElements.length; i++) {
      if (i == notAnother) {
        continue;
      } else {
        fromElements[i].classList.remove(what);
      }
    }
  }

  showDeviceList();

  function initCustomCounteries() {
    const counterBlock = document.querySelectorAll('.custom-counter');

    for (let i = 0; i < counterBlock.length; i++) {
      const btnUp = counterBlock[i].querySelector('.custom-counter__up');
      const btnDown = counterBlock[i].querySelector('.custom-counter__down');
      const counter = counterBlock[i].querySelector('.custom-counter__value');
      const input = counterBlock[i].querySelector('input');
      let counterValue = 1;

      btnUp.addEventListener('click', function() {
        counterValue++;
        counter.innerHTML = counterValue;
        input.value = counterValue;
      });

      btnDown.addEventListener('click', function() {
        if (counterValue > 1) {
          counterValue--;
        }
        counter.innerHTML = counterValue;
        input.value = counterValue;
      });
    }
  }

  initCustomCounteries();
  // CUSTOM COUNTER END

  // personal ip in modal
  function showPersonalIpBlock() {
    const checkbox = document.getElementById('checkbox-ip');
    const allElements = document.querySelectorAll('.personal-ip');
    const oneElement = document.querySelector('#block-ip');
    const btnAdd = document.querySelector('#btn-add-ip');

    if (checkbox) {
      checkbox.addEventListener('click', function() {
        allElements.forEach((el) => {
          el.classList.toggle('hidden');
        });
      });
    }

    btnAdd.addEventListener('click', function(e) {
      e.preventDefault();

      const clone = oneElement.cloneNode(true);
      const cloneSelects = clone.querySelectorAll('.custom-select');
      const cloneItem1 = clone.querySelectorAll('.select-selected');
      const cloneItem2 = clone.querySelectorAll('.select-items');
      const btnDlt = document.createElement('span');

      clone.querySelector('.custom-counter__value')
        .innerHTML = 1;
      clone.querySelector('input')
        .value = 1;

      for (let i = 0; i < cloneSelects.length; i++) {
        cloneItem1[i].parentNode.removeChild(cloneItem1[i]);
        cloneItem2[i].parentNode.removeChild(cloneItem2[i]);
      }

      btnDlt.id = 'dlt-row';
      btnDlt.className = 'btn-remove';
      clone.appendChild(btnDlt);

      oneElement.parentNode.
      insertBefore(clone, allElements[allElements.length - 1]);

      initCustomCounteries();
      initCusomSelect(cloneSelects);
      btnDlt.addEventListener('click', () => {
        clone.parentNode.removeChild(clone);
      });
    });
  }

  showPersonalIpBlock();

  function showWMselected(payList) {
    // payList = document.querySelector('.pay-sistem__list'),
    const labelRadio = payList.querySelectorAll('.radio');
    const radioBtns = [];
    const selectWm = payList.querySelector('.custom-select');

    for (let i = 0; i < labelRadio.length; i++) {
      radioBtns[i] = labelRadio[i].querySelector('input');
    }

    for (let i = 0; i < radioBtns.length; i++) {
      radioBtns[i].addEventListener('change', function() {
        if (i == 5) {
          selectWm.style.display = 'block';
        } else {
          selectWm.style.display = 'none';
        }
      });
    }
  }

  function getAllPayList() {
    const payLists = document.querySelectorAll('.pay-sistem__list');
    for (let i = 0; i < payLists.length; i++) {
      showWMselected(payLists[i]);
    }
  }

  getAllPayList();


  function togglePrivateIP() {
    const buyBlockCheckBox = document.querySelectorAll('.buy-block__cb');
    const privateIpBlock = document.querySelectorAll('.private-ip-block');

    for (let i = 0; i < buyBlockCheckBox.length; i++) {
      buyBlockCheckBox[i].addEventListener('change', function() {
        privateIpBlock[i].classList.toggle('hidden');
      });
    }
  }

  togglePrivateIP();


  function leftRangeColor() {
    const inputs = document.querySelectorAll('.progress');

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('change', function() {
        const value =
          (this.value - this.getAttribute('Min')) /
          (this.getAttribute('Max') - this.getAttribute('Min'));
        const inputLeft = this.parentNode.querySelector('.input');
        const selectLeft = this.parentNode.querySelector('.select-selected');

        if (inputLeft) {
          inputLeft.value = this.value;
        } else {
          selectLeft.innerHTML = this.value;
        }

        this.style.backgroundImage =
          '-webkit-gradient(linear, left top, right top, ' +
          'color-stop(' + value + ', #2278c7), ' +
          'color-stop(' + value + ', #d3d3db)' +
          ')';
      });
    }
  }

  leftRangeColor();
});



// const allCheckboxesIp = document.querySelectorAll('.checkbox')

// function scrollModal() {
//   const modal = document.querySelector('.modal-device');
//   const modalBody = modal.querySelector('.modal__body');

//   modalBody.addEventListener('mouseover', function() {
//     this.addEventListener('onwheel', function() {
//       console.log('kek');
//     });
//   });
// }

// scrollModal();
