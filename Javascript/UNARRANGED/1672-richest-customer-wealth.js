/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  var richestPersonWealth = 0;
  for (var i = 0; i < accounts.length; i++) {
    var richPersonWealth = 0;
    for (var j = 0; j < accounts[i].length; j++) {
      richPersonWealth += accounts[i][j];
    }
    if (richestPersonWealth < richPersonWealth)
      richestPersonWealth = richPersonWealth;
  }
  return richestPersonWealth;
};
