var app = require('../tests/script.js');

describe("app", function() {
  it("isInteger()", function() {
    
    var num = 2;
    var result;
    
    resultNum = app.isInteger(num);
    
    expect(resultNum).toBe(true);
  
  });
  
  it("pow()", function() {
    
      var num = 2;
      var exp = 3;
    
      var result;
  
      result = app.pow(num, exp);
    
      expect(result).toEqual(8);
  });
});