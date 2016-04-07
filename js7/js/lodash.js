$(function () {

  var tmpl = _.template($('#profile_lodash').html());
  
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

  var result = tmpl({
     data: data
  });

  $('body').append(result);

});