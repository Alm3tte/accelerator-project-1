import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const swiperElement = document.querySelector('.swiper');
const swiperWrapper = swiperElement.querySelector('.swiper-wrapper');
const swiperSlides = swiperElement.querySelectorAll('.swiper-slide');
swiperSlides.forEach((slide) => {
  const clonedSlide = slide.cloneNode(true);
  swiperWrapper.appendChild(clonedSlide);
});

new Swiper('.juri__swiper-container', {
  modules: [Navigation],
  loop: true,
  slidesPerView: 'auto',
  speed: 500,
  autoHeight: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      simulateTouch: false
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


