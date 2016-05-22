define(
  'model', [],
  function () {

    return function Model() {
      var data = ['Learn JS', 'Learn CSS', 'Make Coffee'];
      var self = this;

      self.data = data;

      self.addItem = function (item) {

        if (item.length === 0) {
          return;
        }

        self.data.push(item);

        return self.data;
      };

      self.removeItem = function (item) {
        var index = self.data.indexOf(item);

        if (index === -1) {
          return;
        }

        self.data.splice(index, 1);

        return self.data;
      };

      self.editItem = function (newData) {
        if (newData[1].length == 0) {
          self.data.splice(newData[0], 1);
        } else {
          data[newData[0]] = newData[1];

        }

        return self.data;
      }
    }
  }


);