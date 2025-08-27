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
        640: { slidesPerView: 2.5 },
        768: { slidesPerView: 4.5 },
        1024: { slidesPerView: 5.5 },
        1200: { slidesPerView: 6.5 },
        1366: { slidesPerView: 7.1 },
      },
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
        disableOnInteraction: false,
        reverseDirection: true,
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

    // copyright year update
    $('#autoyear').text(new Date().getFullYear());
    // copyright year update end

    // technoloy slider start

    var swiper = new Swiper('.technology-slider', {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
        1366: {
          slidesPerView: 4,
        },
      },
    });

    // technoloy slider ends

    // work slider start

    var swiper = new Swiper('.technology-slider', {
      slidesPerView: 6,
      spaceBetween: 20,
      loop: true,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 3.1,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
        1366: {
          slidesPerView: 6,
        },
      },
    });

    // work slider ends
  });
})(jQuery);
