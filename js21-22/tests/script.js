// POW function

var app = {
  isInteger: function (a) {
    if (a % 1 == 0 && a != '') {
      return true;
    } else return false;
  },
  
  pow: function (a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= a;
    }
    return result;
  }
}

module.exports = app;