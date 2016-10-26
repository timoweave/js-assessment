exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return (num >> (bit -1)) & 1;
  },

  base10: function(str) {
    var ans = 0;
    var power = 1;
    str.split('').reverse().forEach(function(char) {
      if (char === '1') {
        ans += power;
      }
      power = power << 1;
    });
    return ans;

  },

  convertToBinary: function(num) {
    var number = parseInt(num, 10);
    var ans = "";
    while (number) {
      ans = ((number & 1) ? "1" : "0") + ans;
      number = number >> 1;
    }
    while (ans.length < 8) {
      ans = "0" + ans;
    }
    return ans;
  },

  multiply: function(a, b) {
    var a_tens = Math.pow(10, String(a).length - String(a).indexOf('.') - 1);
    var b_tens = Math.pow(10, String(b).length - String(b).indexOf('.') - 1);
    var result = (a * a_tens) * (b * b_tens) / (a_tens * b_tens);
    return result;
  }
};
