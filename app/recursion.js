exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function list_files(data, dirName) {
    var files = [];
    if (data["files"] !== undefined) {
      dirName = (dirName === data["dir"]) ? undefined : dirName;
      data["files"].forEach(function(file) {
        if (typeof file === "string") {
          if (dirName === undefined) {
            files[files.length] = file;
          }
        } else {
          var others = list_files(file, dirName);
          others.forEach(function (f) {
            files[files.length] = f;
          });
        }
      });
    }
    return files; 
  },

  permute: function (arr) {
    return make_arrays(arr);

    function make_arrays(given_array) {
      if (given_array.length === 1) {
        return [ [ given_array[0] ] ];
      }
      
      var new_arrays = [];
      for (var i = 0 ; i < given_array.length; i++) {
        var sub_arrays = given_array.slice();
        sub_arrays.splice(i, 1);
        var some_arrays = make_arrays(sub_arrays);
        some_arrays.forEach(function(an_array) {
          an_array[an_array.length] = given_array[i];
          new_arrays[new_arrays.length] = an_array;
        });
      }
      return new_arrays;
    }
  },

  fibonacci: function fib(n, fn_2, fn_1) {
    
    fn_2 = fn_2 || 0; // fib(n-2) || 0
    fn_1 = fn_1 || 1; // fib(n-1) || 1

    if (n === 0) { return 0 /* fib(0) */; }
    if (n === 1) { return 1 /* fib(1) */; }
    if (n === 2) { return 1 /* fib(2) */; }

    return fn_1 + fib(n-1, fn_1, fn_1 + fn_2);
  },

  validParentheses: function(n) {
    return make_parens([], n, n);

    function make_parens(ans, ln, rn) {
      if (ln === rn) {
        ln--;
        ans[ans.length] = '(';
      }
      return ans;
    }
  }
};
