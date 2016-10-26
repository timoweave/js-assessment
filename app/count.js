exports = typeof window === 'undefined' ? global : window;


exports.countAnswers = {
  count: function (start, end) {
    var ith = start;
    var cancelCount = false;    

    keep_add_num();

    return { cancel : stop_add_num };

    function keep_add_num() {
      console.log(ith);
      if ((ith++ >= end) || (cancelCount)) { return; }
      setTimeout(keep_add_num, 100);
    }

    function stop_add_num() {
      cancelCount = true;
    }
  }
};
