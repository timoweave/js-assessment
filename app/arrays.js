exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {

  indexOf: function(arr, item) {

    return arr.reduce(find_index_matching_item, -1);

    function find_index_matching_item(result, value, index) {
      if (value === item) {
        return index;
      }
      return result;
    }
  },

  sum: function(arr) {

    return arr.reduce(sum_all, 0);

    function sum_all(total, value) {
      return total + value;
    }
  },

  remove: function(arr, item) {

    var ans = [];
    for (var i=0; i<arr.length; i++) {
      if (arr[i] === item) { continue; }
      ans.push(arr[i]);
    }
    return ans;

  },

  removeWithoutCopy: function(arr, item) {
    var read_index = 0;
    var write_index = 0;
    var item_count = 0;

    for (read_index = 0; read_index< arr.length; read_index++, write_index++) {
      arr[write_index] = arr[read_index];
      if (arr[read_index] === item) { write_index--; item_count++; }
    }

    for (; item_count ; item_count--) {
      arr.pop();
    }
    return arr;
  },

  append: function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    for (var i = arr.length; i > 0; i--) {
      arr[i] = arr[i-1];
    } 
    arr[0] = item;
    return arr;
  },

  curtail: function(arr) {
    for (var i = 1; i < arr.length; i++) {
      arr[i-1] = arr[i];
    } 
    arr.pop();
    return arr;
  },

  concat: function(arr1, arr2) {
    var i = arr1.length;
    for(var j = 0; j < arr2.length; j++, i++) {
      arr1[i] = arr2[j];
    }
    return arr1;
  },

  insert: function(arr, item, index) {
    if (arr.length <= index) {
      arr[index] = item;
    } else {
      for (var i = arr.length - 1; i >= index; i--) {
        arr[i+1] = arr[i];
      }
      arr[index] = item;
    }
    return arr;
  },

  count: function(arr, item) {
    var total = 0;
    for (var i=0; i < arr.length; i++) {
      if (item === arr[i]) {
        total++;
      }
    }
    return total;
  },

  duplicates: function(arr) {
    var counter = {};
    for (var i = 0; i < arr.length; i++) {
      var key = arr[i];
      if (counter[key] === undefined) {
        counter[key] = 0;
      }
      counter[key]++;
    }
    var duplicate = [];
    Object.keys(counter).forEach(function(j) {
      if (counter[j] > 1) {
        duplicate[duplicate.length] = parseInt(j, 10);
      }
    })
    return duplicate;
  },

  square: function(arr) {
    var ans = [];
    for (var i=0; i < arr.length; i++) {
      ans[i] = arr[i] *arr[i];
    }
    return ans;
  },

  findAllOccurrences: function(arr, target) {
    var ans = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        ans.push(i);
      }
    }
    return ans;
  }
};
