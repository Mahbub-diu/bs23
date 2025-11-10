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
        360: { slidesPerView: 3 },
        575: { slidesPerView: 4.5 },
        767: { slidesPerView: 5.5 },
        991: { slidesPerView: 6 },
        1200: { slidesPerView: 7.1 },
        1366: { slidesPerView: 7.5 },
      },
    });

    // trusted company slider ends

    // programming slider start

    var swiper = new Swiper('.programming-slider1', {
      slidesPerView: 7.5,

      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        414: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        575: {
          slidesPerView: 4.5,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 5.5,
          spaceBetween: 25,
        },
        991: {
          slidesPerView: 6.5,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 7.1,
          spaceBetween: 35,
        },
        1366: {
          slidesPerView: 7.5,
          spaceBetween: 40,
        },
      },
    });
    var swiper = new Swiper('.programming-slider2', {
      slidesPerView: 7.5,
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        414: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        575: {
          slidesPerView: 4.5,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 5.5,
          spaceBetween: 25,
        },
        991: {
          slidesPerView: 6.5,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 7.1,
          spaceBetween: 35,
        },
        1366: {
          slidesPerView: 7.5,
          spaceBetween: 40,
        },
      },
    });
    // programming slider ends

    // copyright year update
    $('#autoyear').text(new Date().getFullYear());
    // copyright year update end

    // technoloy slider start

    var swiper = new Swiper('.technology-slider', {
      spaceBetween: 20,
      loop: true,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        414: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 3.1,
        },
        767: {
          slidesPerView: 3.5,
        },
        991: {
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

    // blog filter start

    var $grid = $('.blog-filter-grid').isotope({
      itemSelector: '.single-blog',
      layoutMode: 'fitRows',
    });

    // bind filter button click
    $('#filters').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });

      // change active class
      $('#filters button').removeClass('is-checked');
      $(this).addClass('is-checked');
    });

    // blog filter ends

    // mobile menus start

    var $ul = $('.mobile-menu-items > ul');

    $ul.find('li > a .arrow_icon').click(function (e) {
      e.preventDefault();

      var $li = $(this).closest('li');

      if ($li.find('ul').length > 0) {
        if ($li.hasClass('selected')) {
          $li.removeClass('selected').find('li').removeClass('selected');
          $li.find('ul').slideUp(400);
          $li.find('a i').removeClass('mdi-flip-v');
        } else {
          if ($li.parents('li.selected').length == 0) {
            $ul.find('li').removeClass('selected');
            $ul.find('ul').slideUp(400);
            $ul.find('li a i').removeClass('mdi-flip-v');
          } else {
            $li.parent().find('li').removeClass('selected');
            $li.parent().find('> li ul').slideUp(400);
            $li.parent().find('> li a i').removeClass('mdi-flip-v');
          }

          $li.addClass('selected');
          $li.find('>ul').slideDown(400);
          $li.find('>a>i').addClass('mdi-flip-v');
        }
      }
    });

    $('.mobile-menu-items > ul ul').each(function (i) {
      if ($(this).find('>li>ul').length > 0) {
        var paddingLeft = $(this)
          .parent()
          .parent()
          .find('>li>a')
          .css('padding-left');
        var pIntPLeft = parseInt(paddingLeft);
        var result = pIntPLeft + 4;

        $(this).find('>li>a').css('padding-left', result);
      } else {
        var paddingLeft = $(this)
          .parent()
          .parent()
          .find('>li>a')
          .css('padding-left');
        var pIntPLeft = parseInt(paddingLeft);
        var result = pIntPLeft + 4;

        $(this)
          .find('>li>a')
          .css('padding-left', result)
          .parent()
          .addClass('selected--last');
      }
    });

    var activeLi = $('li.selected');
    if (activeLi.length) {
      opener(activeLi);
    }

    function opener(li) {
      var ul = li.closest('ul');
      if (ul.length) {
        li.addClass('selected');
        ul.addClass('open');
        li.find('>a>i').addClass('mdi-flip-v');

        if (ul.closest('li').length) {
          opener(ul.closest('li'));
        } else {
          return false;
        }
      }
    }

    // mobile menu end

    $(document).on('click', '#header-bar', function () {
      $(this).toggleClass('active');

      $('#targetElement').slideToggle(600);
    });
  });
})(jQuery);
