(function ($) {
  $(function () {
    $('.jcarousel').jcarousel();

    $('.jcarousel-control-prev')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '-=1'
      });

    $('.jcarousel-control-next')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '+=1'
      });

    $('.jcarousel-pagination')
      .on('jcarouselpagination:active', 'a', function () {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function () {
        $(this).removeClass('active');
      })
      .jcarouselPagination();


    $('select').niceSelect();

    $('.dropdown').hover(

      function () {
        $(this).children('.submenu').slideDown(200, stop());
        var timer = setInterval(function () {

        $('.submenu').children('li').stop(true,true).animate({
            backgroundColor: "#B61469",
          }, 500);
          clearInterval(timer);
        }, 200)
      },
      function () {
        $(this).children('.submenu').slideUp(200, stop());

          $('.menu li li').stop(true,true).animate({
            backgroundColor: "#85144b",

          }, 200)
        }

      
    );

    function stop() {
      $('.submenu').stop(true, true);
    }




  });
})(jQuery);