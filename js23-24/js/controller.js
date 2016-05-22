define(
  'controller', ['jQuery','model', 'view'],
  function () {
    return function Controller(model, view) {
      var self = this;
      
      view.elements.addBtn.on('click', addItem);
      view.elements.listContainer.on('click', '.delete-item', removeItem);
      view.elements.listContainer.on('click', 'i', editItemView);
      view.elements.listContainer.on('click', '.editBtn', editItem);

      function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
      }

      function removeItem() {
        var item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);

      }

      function editItemView() {
        var selfI = this;
        view.displayEdit(selfI);
      }

      function editItem() {
        var selfI = this;
        var editValue = view.getValue(selfI);
        model.editItem(editValue);
        view.renderList(model.data);

      }

    }
  }
);