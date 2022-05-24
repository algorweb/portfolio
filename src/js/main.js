import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

(function () {

  // Navigation
  var page = document.querySelector('.page');
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  page.classList.remove('no-js');

  var onNavMainOutPress = function (evt) {
    if (evt.target !== navMain && !navMain.contains(evt.target)) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  };

  document.addEventListener('mousedown', onNavMainOutPress);

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  // Modal and Carousel
  var currentSlide = function (evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var n = parseInt(evt.currentTarget.getAttribute('data-index'), 10);
    window.carousel.showSlides(n);

    window.modal.modalElement.classList.remove('hidden');
    window.modal.buttonModalCloseElement.addEventListener('click', window.modal.onButtonModalCloseClick);
    window.modal.buttonModalCloseElement.addEventListener('keydown', window.modal.onButtonModalCloseKeydown);
    document.addEventListener('keydown', window.modal.onModalEscPress);
    document.addEventListener('mousedown', window.modal.onModalOutPress);

    window.carousel.buttonPrevElement.addEventListener('click', window.carousel.prevSlides);
    window.carousel.buttonNextElement.addEventListener('click', window.carousel.nextSlides);
    document.addEventListener('keydown', window.carousel.onArrowKeyDown);
    document.addEventListener('keydown', window.carousel.onArrowKeyDown);
  };

  for (var i = 0; i < window.carousel.projectsItemsElements.length; i++) {
    window.carousel.projectsItemsElements[i].addEventListener('click', currentSlide);
  }
})();
