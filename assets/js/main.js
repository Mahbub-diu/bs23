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
  });
})(jQuery);
