$(function () {

  // ---------------TABS---------------

  $('.tab-area a').on('click', function (e) {
    e.preventDefault();
  });

  $('#first').on('click', function () {
    $('a').removeClass("active");
    $(this).addClass("active");

    $('.tab-content p').removeClass('active-tab');
    $('.tab-content p:first-child').addClass("active-tab");
  });

  $('#second').on('click', function () {
    $('a').removeClass("active");
    $(this).addClass("active");

    $('.tab-content p').removeClass('active-tab');
    $('.tab-content p:nth-child(2)').addClass("active-tab");

  });

  $('#third').on('click', function () {
    $('a').removeClass("active");
    $(this).addClass("active");


    $('.tab-content p').removeClass('active-tab');
    $('.tab-content p:nth-child(3)').addClass("active-tab");
  });

  // ---------------HINTS---------------
  
  $('#fio1').on('mouseover', function () {
      $('#fio1 + div').stop(true, true).animate({
          opacity: 1
      }, 500)
  }).on('mouseout', function() {
        $('#fio1 + div').stop(true, true).animate({
          opacity: 0
      }, 500)
  });
  
   $('#password1').on('mouseover', function () {
      $('#password1 + div').stop(true, true).animate({
          opacity: 1
      }, 500)
  }).on('mouseout', function() {
        $('#password1 + div').stop(true, true).animate({
          opacity: 0
      }, 500)
  });
  
  
    // ---------------BUTTON---------------
  
  $('input[type = button]').on("click", function() {
     $('.hint').animate({
        opacity: 1
     }, 500);
  });

});