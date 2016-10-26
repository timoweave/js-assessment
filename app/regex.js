exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    for (var i = 0; i < str.length; i++) {
      var num = parseInt(str[i], 10);
      if ((0 <= num) && (num <= 9)) {
        return true;
      }
    }
    return false;
  },

  containsRepeatingLetter: function(str) {
    for (var i = 1; i < str.length; i++) {
      if (Number.isInteger(parseInt(str[i], 10))) { continue; }
      if (str[i-1] === str[i])  {
        return true;
      }
    }
    return false;
  },

  endsWithVowel: function(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < vowels.length; i++) {
      if (str[str.length -1].toLowerCase() == vowels[i]) {
        return true;
      }
    }
    return false;
  },

  captureThreeNumbers: function(str) {
    var ans = "";
    for (var i = 0; i < str.length; i++) {
      if (Number.isInteger(parseInt(str[i], 10))) {
        ans += str[i];
        if (ans.length === 3) {
          return ans;
        }
      } else {
        ans = "";
      }
    }
    return false;
  },

  matchesPattern: function(str) {
    if (str.length != 12) { return false; }
    for (var i = 0; i < 12; i++) {
      if ((i === 3) || (i === 7)) {
        if (str[i] !== '-') { return false; }
      } else {
        var ascii_num_range = ((48 <= str[i].toLowerCase().charCodeAt(0)) &&
                               (str[i].toLowerCase().charCodeAt(0) <= 57));
        if (!ascii_num_range) {
          return false;
        }
      }
    }
    return true;
  },

  isUSD: function(str) {

    var i = str.length - 1;
    if (str.length > 3) {
      if (!is_num(str[i])) { return false; }
      if (!is_num(str[i - 1])) { return false; }
      if (str[i - 2] === '.') { i = i - 3; }
    }

    var j = 0;
    for (; i > 0; i--, j++) {
      if ((str[i] === ',') && (j === 3)) { j = -1; }
      else if (!is_num(str[i])) { return false; }
    }
    if (!is_num(str[1])) { return false; }
    if (str[0] !== '$') {  return false; }

    return true;

    function is_num(a) {
      var ascii_zero = 48; var ascii_nine = 57;
      var ascii_num = a.toLowerCase().charCodeAt(0);
      return ((ascii_num >= ascii_zero) && (ascii_num <= ascii_nine));
    }

  }
};
