function counting(start, end) {
  var ith = start;
  add_num();
  
  function add_num() {
    console.log(ith);
    if (ith++ >= end) { return; }
    setTimeout(add_num, 100);
  }
}

(function testing() {
  return;
  counting(5, 10);
})();

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

(function testing() {
  return;
  var a = [1]
  console.log(a);
  console.log(make_arrays(a));
})();

(function testing() {
  return;
  var a = [1, 2]
  console.log(a);
  console.log(make_arrays(a));
})();

(function testing() {
  return;  
  var a = [1, 2, 3]
  console.log(a);
  console.log(make_arrays(a));
})();

(function testing() {
  return;
  var a = [1, 2, 3, 4]
  console.log(a);
  console.log(make_arrays(a));
})();

function reduceString(str, amount) {

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
}

(function testing() {
  return;
  console.log(reduceString('aaaabbbb', 2)); // aabb
  console.log(reduceString('xaaabbbb', 2)); // xaabb
  console.log(reduceString('aaaabbbb', 1)); // ab
  console.log(reduceString('aaxxxaabbbb', 2)); // aaxxaabb
})();

function isUSD(str) {

  var i = str.length - 1;
  for (; i > 0; i--) {
    if (str[i] === '.') { i--; break; }
    else if (!is_num(str[i])) { return false; }
  }

  var j = 0;
  for (; i > 0; i--, j++) {
    if ((str[i] === ',') && (j === 3)) { j = -1; }
    else if (!is_num(str[i])) { return false; }
  }

  if (str[0] !== '$') {  return false; }

  return true;

  function is_num(a) {
    var ascii_zero = 48; var ascii_nine = 57;
    var ascii_num = a.toLowerCase().charCodeAt(0);
    return ((ascii_num >= ascii_zero) && (ascii_num <= ascii_nine));
  }

}

(function testing() {
  return;
  var a = "$132.00";
  console.log(a, isUSD(a));
})();

(function testing() {
  return;
  var a = "$2.03";
  console.log(a, isUSD(a));
})();

(function testing() {
  return;
  var a = "$1.99";
  console.log(a, isUSD(a));
})();

(function testing() {
  return;
  var a = "$1,000.00";
  console.log(a, isUSD(a));
})();

(function testing() {
  return;
  var a = "$1,000,000,000.00";
  console.log(a, isUSD(a));
})();

(function testing() {
  return;
  var a = "$1,000,000.00";
  console.log(a, isUSD(a));
})();

(function testing() {
  return;
  var a = "1,000.99";
  console.log(a, isUSD(a));
})();

(function testing() {
  return;
  var a = "$2.000,00";
  console.log(a, isUSD(a));
})();

function perm(arr) {
  var new_arr = arr.slice();
  for (var i = arr.length -1; 0 < i ; i--) {
    var j = Math.floor(Math.random() * i);
    var old_arr_i = new_arr[i];
    new_arr[i] = new_arr[j];
    new_arr[j] = old_arr_i;
  }
  return new_arr;
}

(function testing() {
  return;
  var a = [1, 2, 3, 4];
  console.log(a);
  console.log(perm(a));
})();

function convertToBinary(num) {
  var number = parseInt(num, 10);
  var ans = "";
  while (number) {
    ans = ((number & 1) ? "1" : "0") + ans;
    number = number >> 1;
  }
  return ans;
}

(function test() {
  return;
  console.log(convertToBinary(128));
  console.log(convertToBinary(65));
})();

function duplicates(arr) {
  var counter = {};
  for (var i = 0; i < arr.length; i++) {
    var key = arr[i];
    if (counter[key] === undefined) {
      counter[key] = 0;
    }
    counter[key]++;
  }
  console.log(counter);
  var duplicated = [];
  Object.keys(counter).forEach(function(j) {
    if (counter[j] > 1) {
      duplicated[duplicated.length] = parseInt(j, 10);
    }
  })
  return duplicated;
}

(function testing () {
  return;
  var a = [2, 1, 2, 3, 2 , 4, 2];
  console.log(a);
  var b = duplicates(a);
  console.log(b);
})();

(function testing() {
  return;
  var a = [ 1, 2, 4, 4, 3, 3, 1, 5, 3 ];
  console.log(a);
  var b = duplicates(a);
  console.log(b);
})();

function remove_letter (arr, item) {

  var w = 0; // write index
  var s = 0; 
  for (var i = 0; i < arr.length; i++, w++) {
    arr[w] = arr[i];
    if (arr[i] === item) { w--; s++; }
  }
  console.log(w, arr);
  for (; s; s--) {
    arr.pop();
  }
  console.log(arr);
  return arr;
}

(function testing () {
  return;
  var a = [2, 1, 2, 3, 2 , 4, 2];
  console.log(a);
  remove_letter(a, 2);
  console.log(a);
})();

(function testing () {
  return;
  var a = [1, 2, 3, 2 , 4, 5, 2];
  console.log(a);
  remove_letter(a, 2);
  console.log(a);
})();