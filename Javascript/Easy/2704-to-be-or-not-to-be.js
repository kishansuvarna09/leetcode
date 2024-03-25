/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (check) {
      if (val === check) return true;
      throw new Error("Not Equal");
    },
    notToBe: function (check) {
      if (val !== check) return true;
      throw new Error("Equal");
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
