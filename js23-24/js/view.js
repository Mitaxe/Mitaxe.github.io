define(
  'view', ['jQuery', 'model'],
  function () {
    return function View(model) {
      var self = this;

      function init() {
        var wrapper = tmpl($('#wrapper-template').html());
        $('body').append(wrapper);


        self.renderList = function (data) {
          var list = tmpl($('#list-template').html(), {
            data: data
          });
          self.elements.listContainer.html(list);
        }

        self.elements = {
          input: $('.item-value'),
          addBtn: $('button'),
          listContainer: $('.item__list'),
        }
        self.renderList(model.data);
      }
      

      self.displayEdit = function (selfI) {

        var par = $(selfI).parent();
        var index = $(par).index();
        $(par).find('.edit-value').val(model.data[index]);
        $(par).find('.edit-value').toggle(500);
        $(par).find("input[type='button']").toggle(500);
      }

      self.getValue = function (selfI) {
        var result = [];

        var par = $(selfI).parent();

        result[0] = $(selfI).parent().index();
        result[1] = $(par).find('.edit-value').val();

        return result;
      }

   

      init();
    }
  }
);