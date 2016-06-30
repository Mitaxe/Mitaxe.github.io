'use strict';

$(function () {

  var questions = {
    firstQuestion: {
      question: "Какой язык программирования самый распространенный в мире на текущий момент?",
      firstAnswer: "C",
      secondAnswer: "PHP",
      thirdAnswer: "Java",
      fourthAnswer: "JavaScript"
    },
    secondQuestion: {
      question: "Как расшифровывается PHP?",
      firstAnswer: "Phrase Home Page",
      secondAnswer: "Present Hypper Page",
      thirdAnswer: "Hypertext Preprocessor"
    },
    thirdQuestion: {
      question: "Как правильно объявить переменную в стиле JavaScript?",
      firstAnswer: "var a;",
      secondAnswer: "int a;",
      thirdAnswer: "$a = null;",
      fourthAnswer: "var a:string"
    },
    fourthQuestion: {
      question: "Основные парадигмы ООП",
      firstAnswer: "Наследование, абстракция, виртуализация",
      secondAnswer: "Инкапсуляция, наследование, полиформизм",
      thirdAnswer: "Инкапсуляция, виртуализация, абстракция"
    }
  };

  // Сериализуем и записываем в localStorage

  for (var key in questions) {
    var q = JSON.stringify(questions[key]);
    localStorage.setItem(key, q);
  }

  // Парсим и записываем заново в questions

  for (key in questions) {
    questions[key] = JSON.parse(localStorage.getItem(key));
  }

  var test = $('#test').html();
  var content = tmpl(test, {
    questions: questions
  });

  $('body').append(content);

  $('#result').on('click', function () {

    var corrects = ['firstQuestion13', 'secondQuestion23', 'thirdQuestion31', 'fourthQuestion42'];

    var answers = [];

    var result = 0;

    $('input:checked').each(function () {
      answers.push($(this).attr('id'));
    });

    if (answers.length < 4) {
      alert('Пройдите тест до конца!');
      return;
    }

    for (var i = 0; i < answers.length; i++) {
      for (var j = 0; j < corrects.length; j++) {
        if (answers[i] == corrects[j]) {
          result++;
        }
      }
    }

    generateModal(result);

    function generateModal(r) {

      $('body').append('<div class="modal-wrapper">');
      $('.modal-wrapper').append('<div class="modal-b">');
      $('.modal-b').append('<p class="modal-contain">Вы набрали ' + result + ' балла(ов) из ' + corrects.length + ' возможных</p>');

      if (result <= 1) {
        $('.modal-b').append('Бросайте все и вперёд читать умные книжки! Ничего вы не знаете о программировании.');
      } else if (result <= 3 && result > 1) {
        $('.modal-b').append('Вы явно имеете представление что такое программирование, но до гуру вам далековато.');
      } else if (result > 3) {
        $('.modal-b').append('Вы просто молодец! Так держать! Вы явно хороший специалист');
      }
    }

    $('.modal-wrapper').on('click', function () {
      $('modal-b').remove();
      $(this).remove();
      result = 0;
      $(':radio').attr('checked', false);
    });
  });
});