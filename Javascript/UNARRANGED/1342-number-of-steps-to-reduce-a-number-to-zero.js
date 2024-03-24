/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  var steps = 0;

  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num--;
    }
    steps++;
  }

  return steps;
};

const testCase1 = numberOfSteps(13);
console.log("testCase1:", testCase1);
