$(function () {
  $(this).carousel({
    speed: 500
  });

  var profile = $('#profile').html();

  var data = [
    {
      name: 'Носовицкий Богдан Геннадьевич',
      who: 'Студент GoIT',
      first_list: 'Это круто',
      second_list: 'Это здорово',
      third_list: 'Это перспективно',
      photo: 'me.jpg'
    },
  ];

  var content = tmpl(profile, {
    person: data
  });

  $('.profile').append(content);

});