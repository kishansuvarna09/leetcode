/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  var answer = [];
  for (var i = 1; i <= n; i++) {
    var divisibleBy3 = i % 3 === 0;
    var divisibleBy5 = i % 5 === 0;
    if (divisibleBy3) {
      if (divisibleBy5) {
        answer.push("FizzBuzz");
      } else {
        answer.push("Fizz");
      }
    } else if (divisibleBy5) {
      answer.push("Buzz");
    } else {
      answer.push(String(i));
    }
  }
  return answer;
};

const testCase1 = fizzBuzz(3);
console.log("testCase1", testCase1);
