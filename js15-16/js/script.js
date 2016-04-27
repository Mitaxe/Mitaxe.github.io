function GoogleCallback(jqueryObj, data) {
  $('.results').empty();
  $('.results').append("<p class='rslt_count'>Результатов: примерно " + data.cursor['resultCount'] + " (" + data.cursor['searchResultTime'] + ")</p>")
  for (var i = 0; i < data.results.length; i++) {
    $current = $("<div class='item'></div>");
    $('.results').append($current);
    $($current).append("<h1 class='title'><a href=" + data.results[i]['url'] + ">" + data.results[i]['title'] + "</a></h1>");

    $($current).append("<p class='url'>" + data.results[i]['url']) + "</p>";
    $($current).append("<p class='content'>" + data.results[i]['content']) + "</p>";
  }
  if (data.results.length == 0) {
    $('.results').append("<p class='not_found'>По вашему запросу ничего не найдено</p>");
  }
  console.log('data', data);

}

$(function () {

  $('.page__header__logo').on('click', function () {
    location.reload();
  });

  $("input[type='submit']").on('click', function (e) {

    e.preventDefault();

    var task = $("input[type='text']").val();
    $.ajax({
      url: 'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=8&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=' + task + '&callback=GoogleCallback&context=?',
      dataType: "jsonp"
    });

  });


});

//Prototype orientieded programming

function Human(name, age, gender, weight) {
  this.name = name;
  this.age = age
  this.gender = gender;
  this.weight = weight;
};

function Worker() {
  this.work = function (place, salary) {
    this.workPlace = place;
    this.salary = salary;
  }
};

function Student() {
   this.watchTV = function(studyPlace, stipend) {
     this.studyPlace = studyPlace;
     this.stipend = stipend;
   } 
};


Worker.prototype = new Human('Bogdan', 21, 'male', 60);
Student.prototype = new Human('Petya', 40, 'male', 80);
var newWorker = new Worker();
var newStudent = new Student();

newWorker.work('Bank', 2000);
newStudent.watchTV('KPI', 800);
console.log(newWorker);
console.log(newStudent);