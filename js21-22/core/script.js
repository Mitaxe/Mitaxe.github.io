var buttonOne = document.querySelector('.first-dz');
var buttonTwo = document.querySelector('.second-dz');

buttonOne.addEventListener('click', function () {
  dz1();
});

buttonTwo.addEventListener('click', function () {
  dz2();
});

function dz1() {
  var num = prompt('Введите число');
  var exp = prompt('Укажите степень');

  if (isInteger(num) && isInteger(exp)) {
    console.log('a^b :', (pow(num, exp)));

  } else {
    alert('Число не является целым');
  }

  function isInteger(a) {
    if (a % 1 == 0 && a != '') {
      return true;
    } else return false;
  }

  function pow(a, b) {

    var result = 1;

    for (var i = 0; i < b; i++) {
      result *= a;
    }

    return result;
  }
}

function dz2() {
  var arr = new Array();
  var user;
  var flag = false;

  for (var i = 0; i < 5; i++) {
    arr[i] = prompt('Введите элементы массива');
  }

  user = prompt('Введите имя пользователя');

  for (var i = 0; i < 5; i++) {
    if (arr[i] == user && arr[i] != null) {
      flag = true;
      alert(user + ', вы успешно вошли');
      break;
    }
  }

  if (!flag) {
    alert('Пользователя не существует');
  }
}