exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    return str.split('').reduce(shrink_duplicates, "");

    function shrink_duplicates(prev_str, value, index, container) {
      if (index < amount - 1) {
        prev_str += value;
        return prev_str;
      }
      var count = 0;
      for (var i = 0; i < amount ; i++) {
        if (container[index - i - 1] === container[index - i]) {
          count++;
        } else { // diff, non continuous char
          prev_str += value;
          return prev_str;
        }
      }
      if (count === amount) {
        return prev_str;
      } else {
        prev_str += value;
      }
      return prev_str;
    }
  },

  wordWrap: function(str, cols) {
    var splitted = str.split(' ');
    var splitted_evenly = splitted.reduce(even_out, []);
    return splitted_evenly.join('\n');

    function even_out(all_words, word) {
      var size = all_words.length;
      var last = size - 1;
      if (size === 0) {
        all_words[size] = word;
      } else if (all_words[last].length + word.length  + 1 <= cols) {
        all_words[last] += " " + word;
      } else {
        all_words[size] = word;
      }
      return all_words;
    }
  },

  reverseString: function(str) {
    var new_str = "";
    for (var i = str.length - 1; i >= 0; i--) {
      new_str += str[i];
    }
    return new_str;
  }
};
