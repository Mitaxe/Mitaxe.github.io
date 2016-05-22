requirejs.config({
  paths: {
    'jQuery': "https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min"
  },
  shim: {
    'jQuery': {
      exports: 'jQuery'
    }
  }
});

require(
  [
    'jQuery',
    'model',
    'view',
    'controller',
    'tmpl'
  ],

  function ($ , Model, View, Controller, tmpl) {

    $(function () {
      var model = new Model();
      var view = new View(model);
      var controller = new Controller(model, view);
    })
  }

);