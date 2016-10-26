exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

    if (num === undefined) { return false; }
    if (!Number.isInteger(num)) { return false; }

    var divisible3 = ((num % 3) === 0);
    var divisible5 = ((num % 5) === 0);
    if (divisible5 && divisible3 ) {return "fizzbuzz"; }
    if (divisible5) {return "buzz"; }
    if (divisible3) { return "fizz"; }
    return num;

  }
};
