$(function () {

  $('a').on('click', function () {
    $('#load').show();

    var query = $("input[type='text']").val();
    $('.riffsy-result').remove();
    $('p').remove();
    
    $.ajax({
      url: 'http://api.riffsy.com/v1/search?tag=<' + query + '>&limit=30',
      dataType: "json",
      success: function (data) {

        $('#load').hide();
        if (data.results == 0) {
          var msg = '<p>По вашему запросу ничего не найдено :(</p>';
          $('body').append(msg);
          return;
        }

        var page = $('#riffsy').html();
        var content = tmpl(page, {
          data: data
        });

        $('body').append(content);
      }
    });

  })


})