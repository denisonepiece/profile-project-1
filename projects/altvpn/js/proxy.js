/* eslint-disable require-jsdoc */
// Modal only for proxy
addModal('.modal-buy-proxy-btn', '.modal-buy-proxy');
addModal('.modal-account-btn', '.modal-account');
addModal('.modal-account-active-btn', '.modal-account-active');
addModal('.modal-account-expired-btn', '.modal-account-expired');
addModal('.modal-extension-ip-btn', '.modal-extension-ip');

chooseIpAdresses();

function chooseIpAdresses(cls) {
  const thisModal = document.querySelector('.modal-extension-ip');
  const btnAdd = thisModal.querySelector('#btn-add-ip');
  const listIp = thisModal.querySelector('#ip-address');

  btnAdd.addEventListener('click', function(e) {
    e.preventDefault();
    listIp.classList.toggle('hidden');
  });
};


document.querySelector('.progress').rangeslider;


$('input[type="range"]').rangeslider({

  // Feature detection the default is `true`.
  // Set this to `false` if you want to use
  // the polyfill also in Browsers which support
  // the native <input type="range"> element.
  polyfill: false,

  // // Default CSS classes
  // rangeClass: 'rangeslider',
  // disabledClass: 'rangeslider--disabled',
  // horizontalClass: 'rangeslider--horizontal',
  // verticalClass: 'rangeslider--vertical',
  // fillClass: 'rangeslider__fill',
  // handleClass: 'rangeslider__handle',

  // Callback function
  onInit: function() {
  },

  // Callback function
  onSlide: function(position, value) {
  },

  // Callback function
  onSlideEnd: function(position, value) {
  },
});
