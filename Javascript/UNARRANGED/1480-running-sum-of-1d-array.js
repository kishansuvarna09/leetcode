/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }
  return nums;
};

const testCase1 = runningSum([1, 2, 3, 4]);
const testCase2 = runningSum([1, 1, 1, 1]);
const testCase3 = runningSum([3, 1, 2, 10, 1]);

console.log(testCase1);
console.log(testCase2);
console.log(testCase3);
