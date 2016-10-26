exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var promise = { };
    promise.then = function do_something(f_ok, f_no) {
      setTimeout(function() {
        if ((value === true) || (value === "success")) {
            f_ok(value);
        } else {
          f_no(value);
        }
      }, 0 /* end of current event loop */);
    };
    return promise
  },

  manipulateRemoteData: function(url) {
    var promise = { };
    promise.then = function do_something(f_ok, f_no) {
      $.get(url, function(data) {
        console.log(data);
        var names = [];
        for(var i = 0; i < data.people.length; i++) {
          names[names.length] = data.people[i].name;
        }
        f_ok(names.sort());
      });
    };
    return promise;
  }
};
