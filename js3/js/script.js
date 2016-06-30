var Page = {
  testTitle: function () {
    var title = document.createElement('div');
    title.innerHTML = '<h1>Тест по программированию</h1>';
    title.classList.add('title');
    var body = document.querySelector('body');
    body.appendChild(title);
  },

  centerBlock: function () {
    var center = document.createElement('main');
    var body = document.querySelector('body');
    body.appendChild(center);
  },

  testQuestions: function () {

    var listItem = [];
    var checkbox = [];
    var label = [];
    var list = [];
    var question = [];
    var idNum = 0;

    var form = document.createElement('form');
    form.method = 'post';
    form.action = ' ';
    var main = document.querySelector('main');
    main.appendChild(form);


    for (var i = 0; i < 3; i++) {

      question[i] = document.createElement('h2');
      question[i].innerHTML = i + 1 + '. Вопрос № ' + (i + 1);
      var main = document.querySelector('form');
      main.appendChild(question[i]);

      list[i] = document.createElement('ul');
      for (var j = 0; j < 3; j++) {
        listItem[j] = document.createElement('li');
                label[j] = document.createElement('label');
        label[j].htmlFor = 'answ' + (idNum);
        checkbox[j] = document.createElement('input');
        checkbox[j].id = 'answ' + (idNum);

        idNum++;
        checkbox[j].type = 'checkbox';
        label[j].innerHTML = 'Вариант ответа № ' + (j + 1);
      }

      for (var j = 0; j < 3; j++) {
        list[i].appendChild(listItem[j]);

        listItem[j].appendChild(checkbox[j]);
        listItem[j].appendChild(label[j]);
      }

      main.appendChild(list[i]);
    }
  },

  Button: function () {
    var center = document.createElement('div');
    var form = document.querySelector('form');
    center.classList.add('center');
    form.appendChild(center);

    var button = document.createElement('button');
    button.innerHTML = 'Проверить мои результаты';
    button.classList.add('check-test-but');
    button.type = 'button';
    button.classList.add('btn-lg');
    button.classList.add('btn-primary');

    center.appendChild(button);

  }
};

Page.testTitle();
Page.centerBlock();
Page.testQuestions();
Page.Button();