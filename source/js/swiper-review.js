import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

new Swiper('.reviews__swiper', {
  modules: [Navigation],
  spaceBetween: 40,
  loop: false,
  slidesPerView: 1,
  speed: 500,
  mousewheel: true,
  keyboard: true,
  autoheight: true,
  breakpoints: {
    1366: {
      simulateTouch: false
    }
  },

  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  }
});


