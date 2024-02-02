/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss"
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector(".service__slider")) {
    new Swiper(".service__slider", {
      modules: [Navigation],
      observer: true,
      observeParents: true,

      speed: 800,

      // lazyPreloaderClass: 'preloader',

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація

      //   pagination: {
      //     el: ".service__pagination",
      //     clickable: true,
      //   },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".service__slider .button-prev",
        nextEl: ".service__slider .button-next",
      },

      // Брейкпоінти
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          autoHeight: true,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 20,
          autoHeight: false,
        },
        992: {
          slidesPerView: "auto",
          spaceBetween: 30,
          autoHeight: false,
        },
        1230: {
          slidesPerView: 3,
          spaceBetween: 45,
          autoHeight: false,
        },
      },

      // Події
      on: {},
    })
  }
  if (document.querySelector(".we-work__slider")) {
    new Swiper(".we-work__slider", {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      speed: 800,

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".we-work__slider .button-prev",
        nextEl: ".we-work__slider .button-next",
      },

      // Брейкпоінти
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 20,
          //   autoHeight: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          //   autoHeight: false,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 40,
          //   autoHeight: false,
        },
        1230: {
          slidesPerView: 1.8,
          spaceBetween: 70,
          //   autoHeight: false,
        },
      },
    })
  }
  if (document.querySelector(".stages__slider")) {
    new Swiper(".stages__slider", {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      speed: 800,

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".stages__slider .button-prev",
        nextEl: ".stages__slider .button-next",
      },

      // Брейкпоінти
      breakpoints: {
        320: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        992: {
          slidesPerView: "auto",
          spaceBetween: 40,
        },
        1230: {
          slidesPerView: "auto",
          spaceBetween: 70,
        },
      },
    })
  }

  for (const mobileSlider of document.querySelectorAll(".partners__slider")) {
    if (mobileSlider) {
      ;(function () {
        "use strict"

        const breakpoint = window.matchMedia("(min-width:768px)")
        let slider

        const enableSwiper = function () {
          slider = new Swiper(mobileSlider, {
            modules: [Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 2.4,
            spaceBetween: 30,

            speed: 1500,
            loop: true,
            loopAdditionalSlides: 5,
            allowTouchMove: false,

            autoplay: {
              delay: 0,
              disableOnInteraction: false,
            },
          })
        }

        const breakpointChecker = function () {
          if (breakpoint.matches === true) {
            if (slider !== undefined) slider.destroy(true, true)

            return
          } else if (breakpoint.matches === false) {
            return enableSwiper()
          }
        }

        breakpoint.addListener(breakpointChecker)
        breakpointChecker()
      })()
    }
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll")
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index]
      const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar")
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      })
      sliderScroll.scrollbar.updateSize()
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders()
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
})
