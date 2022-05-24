'use strict';

(function () {

  var LEFTARROW_KEYCODE = 37;
  var RIGHTARROW_KEYCODE = 39;

  var slideIndex = 1;
  var carouselItemsElements = document.querySelectorAll('.carousel__item');
  var projectsItemsElements = document.querySelectorAll('.projects__item');
  var buttonPrevElement = document.querySelector('.carousel__prev');
  var buttonNextElement = document.querySelector('.carousel__next');

  // Controls
  var plusSlides = function (n) {
    showSlides(slideIndex += n);
  };

  // Previous control
  var prevSlides = function () {
    plusSlides(-1);
  };

  // Next control
  var nextSlides = function () {
    plusSlides(1);
  };

  var onArrowKeyDown = function (evt) {
    if (evt.keyCode === LEFTARROW_KEYCODE && evt.ctrlKey) {
      plusSlides(-1);
    }
    if (evt.keyCode === RIGHTARROW_KEYCODE && evt.ctrlKey) {
      plusSlides(1);
    }
  };

  // Thumbnail image controls
  // var currentSlide = function (evt) {
  //   evt.stopPropagation();
  //   evt.preventDefault();
  //   var n = parseInt(evt.currentTarget.getAttribute('data-index'), 10);
  //   window.modal.onModalOpenClick();
  //   showSlides(slideIndex = n);
  // };

  var showSlides = function (n) {
    var i;
    slideIndex = n;
    if (n > carouselItemsElements.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = carouselItemsElements.length;
    }
    for (i = 0; i < carouselItemsElements.length; i++) {
      carouselItemsElements[i].classList.add('hidden');
    }
    carouselItemsElements[slideIndex - 1].classList.remove('hidden');
  };

  // buttonPrevElement.addEventListener('click', prevSlides);
  // buttonNextElement.addEventListener('click', nextSlides);
  // document.addEventListener('keydown', onArrowKeyDown);
  // document.addEventListener('keydown', onArrowKeyDown);

  window.carousel = {
    slideIndex: slideIndex,
    projectsItemsElements: projectsItemsElements,
    buttonPrevElement: buttonPrevElement,
    buttonNextElement: buttonNextElement,

    showSlides: showSlides,
    onArrowKeyDown: onArrowKeyDown,
    prevSlides: prevSlides,
    nextSlides: nextSlides,
  };

})();
