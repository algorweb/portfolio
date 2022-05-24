'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var modalElement = document.querySelector('.modal');
  var buttonModalCloseElement = document.querySelector('.modal__close');

  var onModalEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      onButtonModalCloseClick();
    }
  };

  var onModalOutPress = function (evt) {
    if (evt.target === modalElement) {
      onButtonModalCloseClick();
    }
  };

  var onButtonModalCloseKeydown = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      onButtonModalCloseClick();
    }
  };

  var onButtonModalCloseClick = function () {
    modalElement.classList.add('hidden');
    buttonModalCloseElement.removeEventListener('click', onButtonModalCloseClick);
    buttonModalCloseElement.removeEventListener('click', onButtonModalCloseKeydown);
    document.removeEventListener('keydown', onModalEscPress);
    document.removeEventListener('mousedown', onModalOutPress);

    window.carousel.buttonPrevElement.removeEventListener('click', window.carousel.prevSlides);
    window.carousel.buttonNextElement.removeEventListener('click', window.carousel.nextSlides);
    document.removeEventListener('keydown', window.carousel.onArrowKeyDown);
    document.removeEventListener('keydown', window.carousel.onArrowKeyDown);
  };

  window.modal = {
    modalElement: modalElement,
    buttonModalCloseElement: buttonModalCloseElement,

    onModalEscPress: onModalEscPress,
    onModalOutPress: onModalOutPress,
    onButtonModalCloseClick: onButtonModalCloseClick,
    onButtonModalCloseKeydown: onButtonModalCloseKeydown,
  };

})();
