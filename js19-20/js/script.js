  $(document).ready(function () {
    $('#coin-slider').coinslider({
      width: 1200,
      height: 450,
      navigation: true,
      delay: 5000
    });

    
    $('.accord__item').on('click', function () {


      var id = $(this).attr('id');
      
      var value = $('#' + id + ' .accord__item__sign').html();
      value == '+' ? $('#' + id + ' .accord__item__sign').html('-') : $('#' + id + ' .accord__item__sign').html('+');
      
      $('#' + id + ' .accord__item__sign').toggleClass('active_accord');
      $('#' + id + ' .accord__item__name').toggleClass('active_accord');
       $('#' + id + ' #accord_b').slideToggle();

    });

  });