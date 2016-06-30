(function ($) {

  $.fn.carousel = function (options) {

    var defaults = {
      speed: 500,
      step: 225
    };


    if (is_correct()) {
      $.extend(defaults, options);
    }

    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');

    var elementsList = $('.carousel-list');

    var pixelsOffset = defaults.step;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = -((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;


    function is_correct() {
      var limits = {
        max_speed: 1000,
        min_speed: 100
      };

      if (options.speed > limits.max_speed || options.speed < limits.min_speed) {
        return false;
      }

      return true;
    }



    leftUIEl.click(function () {
      if (currentLeftValue != maximumOffset) {
        currentLeftValue += defaults.step;

        elementsList.animate({

          left: currentLeftValue + "px"

        }, defaults.speed);
      }

    });


    rightUIEl.click(function () {
      if (currentLeftValue != minimumOffset) {
        currentLeftValue -= defaults.step;

        elementsList.animate({

          left: currentLeftValue + "px"

        }, defaults.speed);
      }
    });
  }

})(jQuery);