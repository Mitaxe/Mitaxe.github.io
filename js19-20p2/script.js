var data = {

  uniqueSkills: function () {
    var arr = [];
    var k = 0;

    for (var i in dataJSON) {
      arr[k++] = dataJSON[i].skills;
    }

    var result = _.flatten(arr);
    result = _.uniq(result);

    var map = result.map(function (e, i) {
      return {
        index: i,
        value: e.toLowerCase()
      };
    });

    map.sort(function (a, b) {
      return +(a.value > b.value) || +(a.value === b.value) - 1;
    });

    var result = map.map(function (e) {
      return result[e.index];
    });

    return result;
  },

  names: function () {

    var arr = _.sortBy(dataJSON, function (o) {
      return o.friends
    })
    var names = [];
    for (var i = 0; i < arr.length; i++) {
      names[i] = arr[i].name;
    }

    return names.reverse();
  },

  allFriends: function () {

    var arr = [];
    var k = 0;
    for (var i = 0; i < dataJSON.length; i++) {
      for (var j = 0; j < dataJSON[i].friends.length; j++) {
        arr[k++] = dataJSON[i].friends[j].name;
      }
    }

    return _.uniq(arr);

  }
}

var skills = data.uniqueSkills();
var names = data.names();
var friends = data.allFriends();
data.names();
console.log(skills);
console.log(names);
console.log(friends);