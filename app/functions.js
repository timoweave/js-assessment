exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj, arguments);
  },

  functionFunction: function(str) {
    return function(str2) {
      return [str, str2].join(', ');
    };
  },

  makeClosures: function(arr, fn) {
    var data = [];
    for (var i = 0; i < arr.length; i++) {
      data[data.length] = fn_close_over(arr[i]);
    }
    return data;

    function fn_close_over(arr_i) {
      return function() {
        return fn(arr_i);
      };
    }
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn.call(this, str1, str2, str3);
    }
  },

  useArguments: function() {
    var sum = 0;
    for (var i = 0; i< arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    var args = [];
    for (var i = 1; i< arguments.length; i++) {
      args[i-1] = arguments[i];
    }
    return fn.apply(this, args);
  },

  partialUsingArguments: function(fn) {
    var args = [];
    for (var i = 1; i< arguments.length; i++) {
      args[i-1] = arguments[i];
    }
    
    return partial_using_args(args);

    function partial_using_args(arg_list) {
      return function() {
        for (var i = 0; i< arguments.length; i++) {
          arg_list[args.length] = arguments[i];
        }
        return fn.apply(this, arg_list);
      }
    }
  },

  curryIt: function(fn) {

    return curry_fn(fn);

    function curry_fn(func) {
      var arg_need = fn.length;
      var arg_list = [];

      return function curry_all_args(arg) {
        if (arg_need) {
          arg_list[arg_list.length] = arg;
          arg_need--;
        }
        if (arg_need === 0) {
          return func.apply(this, arg_list);
        } else {
          return curry_all_args;
        }
      }
    }
  }
};
