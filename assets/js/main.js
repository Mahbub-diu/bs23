(function ($) {
  $(document).ready(function () {
    // Background image area start here
    $('[data-background]').each(function () {
      var bgImage = $(this).attr('data-background');
      if (bgImage) {
        $(this).css({
          'background-image': 'url(' + bgImage + ')',
          'background-size': 'cover',
          'background-position': 'center center',
          'background-repeat': 'no-repeat',
        });
      }
    });

    // Background image area end here

    $('.video-popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });

    // trusted company slider
    var swiper = new Swiper('.trusted-company-slider', {
      slidesPerView: 7.5,
      spaceBetween: 20,
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 4.5,
        },
        1024: {
          slidesPerView: 5.5,
        },
        1200: {
          slidesPerView: 6.5,
        },
        1366: {
          slidesPerView: 7.1,
        },
      },
    });
    var sliderEl = document.querySelector('.trusted-company-slider');

    sliderEl.addEventListener('mouseenter', function () {
      swiper.autoplay.stop();
    });

    sliderEl.addEventListener('mouseleave', function () {
      swiper.autoplay.start();
    });
    // trusted company slider ends

    // programming slider start

    var swiper = new Swiper('.programming-slider1', {
      slidesPerView: 7.5,
      spaceBetween: 40,
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 4.5,
        },
        1024: {
          slidesPerView: 5.5,
        },
        1200: {
          slidesPerView: 6.5,
        },
        1366: {
          slidesPerView: 7.1,
        },
      },
    });
    var swiper = new Swiper('.programming-slider2', {
      slidesPerView: 7.5,
      spaceBetween: 40,
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false, reverseDirection: true, 
      },
      breakpoints: {
        640: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 4.5,
        },
        1024: {
          slidesPerView: 5.5,
        },
        1200: {
          slidesPerView: 6.5,
        },
        1366: {
          slidesPerView: 7.1,
        },
      },
    });
    // programming slider ends
  });
})(jQuery);
