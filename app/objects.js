exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.apply(obj, arguments);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var ans = [];
    Object.keys(obj).forEach(function(k) {
      ans[ans.length] = "" + k + ": " + obj[k];
    });
    return ans;
  }
};
