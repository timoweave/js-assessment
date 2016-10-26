var bubbleSort = function(array_data) {

  var ans = array_data.slice();

  for (var i = ans.length - 1; i > 0; i--) {
    var largest_i = i;
    for (var j = i - 1; j >= 0; j--) {
      if (ans[largest_i] < ans[j]) {
        largest_i = j;
        // swap(ans, i, j);
      }
    }
    swap(ans, i, largest_i);
    console.log(ans);
  }
  return ans;

  function swap(array_container, index_1, index_2) {
    var temp = array_container[index_2];
    array_container[index_2] = array_container[index_1];
    array_container[index_1] = temp;
  }
};

(function testing() {
  return;
  var input = [20, -10, -10, 2, 4, 299];
  console.log(input);
  console.log(bubbleSort(input));
})();


function Company() {

  var employeeDirectory = {
    Adam: {salary: 100000, department: "engneering", yearsAtCompany: 3},
    Betty: {salary: 40000, department: "customer service", yearsAtCompany: 3},
    Charlie: {salary: 500000, department: "marketing", yearsAtCompany: 1},
    Deborah: {salary: 85000, department: "finance", yearsAtCompany: 2},
    Evan: {salary: 100000, department: "engneering", yearsAtCompany: 2},
    Francine: {salary: 40000, department: "marketing", yearsAtCompany: 1},
    Grant: {salary: 500000, department: "marketing", yearsAtCompany: 3},
    Hermione: {salary: 85000, department: "finance", yearsAtCompany: 3},
    Ike: {salary: 45000, department: "customer service", yearsAtCompany: 1},
    Jean: {salary: 100000, department: "marketing", yearsAtCompany: 7},
    Kobe: {salary: 105000, department: "engneering", yearsAtCompany: 5},
    Lauren: {salary: 500000, department: "marketing", yearsAtCompany: 2},
    Murry: {salary: 100000, department: "engneering", yearsAtCompany: 2},
    Nancy: {salary: 120000, department: "finance", yearsAtCompany: 9},
    Ollie: {salary: 85000, department: "marketing", yearsAtCompany: 3},
    Patrice: {salary: 100000, department: "engneering", yearsAtCompany: 2},
    Rob: {salary: 102000, department: "engneering", yearsAtCompany: 4},
    Sarah:  {salary: 500000, department: "finance", yearsAtCompany: 2},
    Tom:  {salary: 20000, department: "customer service", yearsAtCompany: 1},
    Ursula: {salary: 40000, department: "customer service", yearsAtCompany: 2},
    Victor: {salary: 100000, department: "marketing", yearsAtCompany: 5},
    Winnie: {salary: 85000, department: "finance", yearsAtCompany: 6}
  };

  return {
    findMostExpensiveDepartment : findMostExpensiveDepartment,
    findHighestPayingDepartment : findHighestPayingDepartment,
    newEmpolyees : newEmpolyees,
    departmentCount : departmentCount,
    findHighestPaidEmployee : function() { return findHighestPaidEmployee(employeeDirectory); }
  };

  function findHighestPaidEmployee(directory) {
    var highest = 0;
    var who;
    for (var key in directory) {
      if (highest < directory[key].salary) {
        highest = directory[key].salary;
        who = key;
      } else if (highest === directory[key].salary) {
        who = who + " and " + key;
      }
    }
    return who;
  }

  function findMostExpensiveDepartment (directory){
    //fill in code here to identify the department that has the highest sum salaries
    var costs = Object.keys(employeeDirectory).reduce(sum_each_department_salaries, {});
    var department = Object.keys(costs).reduce(find_most_costly_department(costs), "");
    return department;

    function find_most_costly_department(cost_table) {
      return function(expensive_department, department) {
        if (expensive_department === "") { return department; }
        else if (cost_table[expensive_department] < cost_table[department]) {
          return department;
        }
        return expensive_department;
      };
    }

    function sum_each_department_salaries(department_costs, name) {
      var employee = employeeDirectory[name];
      if (department_costs[employee.department] === undefined) {
        department_costs[employee.department] = 0;
      }
      department_costs[employee.department] += employee.salary;
      return department_costs;
    }
  }

  var CEOSalary = 2000000;

  function findHighestPayingDepartment(directory){
    // fill in code here to find the difference in salary between the
    // CEO and the longest employed employee (use CEOSalary)
    var highest_person = Object.keys(employeeDirectory).reduce(find_longest_employee, "");
    return highest_pay_department;

    function find_longest_employee(longest_name, name) {
      if (longest_name === "") { return name; }
      var person = employeeDirectory[name];
      var longest_person = employeeDirectory[longest_name];
      if (person.yearsAtCompany  > longest_person.yearsAtCompany) {
        return name;
      }
      return longest_name;
    }
  }

  function newEmpolyees(directory) {
    //return list of employees that have worked at the company less than 2 years
    var juniors = Object.keys(employeeDirectory).reduce(juniors, []);
    return juniors;

    function juniors(people, name) {
      var person = employeeDirectory[name];
      if (person.yearsAtCompany < 2) {
        if ((directory === undefined) || (directory === person.department)) {
          people.push(name);
        }
      }
      return people;
    }
  }

  function departmentCount(directory) {
    //return the number of employees in each department
    var counts = Object.keys(employeeDirectory).reduce(count_employees_per_department, {});
    return counts;

    function count_employees_per_department(counter, name) {
      var person = employeeDirectory[name];
      if (counter[person.department] === undefined) {
        counter[person.department] = 0;
      }
      counter[person.department]++;
      return counter;
    }
  }
}


(function testing() {
  return;
  var sweat_shop = Company();
  console.log("newbies =", sweat_shop.newEmpolyees());
  console.log("department count =", sweat_shop.departmentCount());
  console.log("most expensive department =", sweat_shop.findMostExpensiveDepartment());
  console.log("highest pay person =", sweat_shop.findHighestPaidEmployee());
})();

(function testing() {
  return;
  console.log(0, ',', nthFibonacci(0));
  console.log(1, ',', nthFibonacci(1));
  console.log(2, ',', nthFibonacci(2));
  console.log(3, ',', nthFibonacci(3));
  console.log(4, ',', nthFibonacci(4));
  console.log(5, ',', nthFibonacci(5));
  console.log(6, ',', nthFibonacci(6));
  console.log(7, ',', nthFibonacci(7));
  console.log(8, ',', nthFibonacci(8));
})();


function nthFibonacci(n, fn_2, fn_1) {
  /* f(n) = f(n-2) + f(n-1)*/
  fn_2 = fn_2 || 0;
  fn_1 = fn_1 || 1;

  if (n === 0) { return 0; }
  if (n === 1) { return 1; }
  else { /* fn */ return fn_2 + /* fn_1 */ nthFibonacci(n-1, fn_1, (fn_1 + fn_2)); }
}

function fib(n, fn_2, fn_1) {

  fn_2 = fn_2 || 0;
  fn_1 = fn_1 || 1;

  if (n === 0) { return 0; } // f(0)
  if (n === 1) { return 1; } // f(1)
  else {  // f(n) = f(n-2) + f(n-1)
    return fn_2 + fib(n-1, fn_1, (fn_1 + fn_2));
  }
}

// gcwcid
var commonCharacters = function(string1, string2){
  var ans = "";
  var indexes = {};
  for (var i = 0; i < string2.length; i++) {
    var letter2 = string2[i];
    if (letter2 === ' ') { continue; }
    if (indexes[letter2] === undefined) {
      indexes[letter2] = 0;
    }
  }

  for (var j = 0; j < string1.length; j++) {
    var letter1 = string1[j];
    if (letter1 === ' ') { continue; }
    if (indexes[letter1] === 0) {
      indexes[letter1]++;
      ans += letter1;
    }
  }
  return ans;
};


function nthFibonacci(n) {
  var fn_2 = 0;
  var fn_1 = 1;
  if (n === 0) { return 0; }
  if (n === 1) { return 1; }

  var ans = 0;
  fn_1 = fn_2 + fn_1;
  while (n > 1) {
    ans = fn_2 + fn_1;
    fn_2 = fn_1;
    fn_1 = ans;
    n--;
  }
  return ans;
}


(function testing() {
  console.log(0, nthFibonacci(0));
  console.log(1, nthFibonacci(1));
  console.log(2, nthFibonacci(2));
  console.log(3, nthFibonacci(3));
  console.log(4, nthFibonacci(4));
  console.log(5, nthFibonacci(5));
  console.log(6, nthFibonacci(6));
  console.log(7, nthFibonacci(7));
  console.log(8, nthFibonacci(8));
  console.log(9, nthFibonacci(9));
})();
