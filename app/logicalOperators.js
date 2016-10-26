exports = typeof window === 'undefined' ? global : window;

exports.logicalOperatorsAnswers = {
  or: function(a, b) {
    if (a === true) { return true; }
    if (b === true) { return true; }
    return false;
  },
  
  and: function(a, b) {
    if (a === false) { return false; }
    if (b === false) { return false; }
    return true;
  }
};
