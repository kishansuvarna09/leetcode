const teraform = (rowIn, colIn, grid) => {
  if (
    grid[rowIn] === undefined ||
    grid[rowIn][colIn] === undefined ||
    grid[rowIn][colIn] === "0"
  ) {
    return;
  }

  grid[rowIn][colIn] = "0";

  teraform(rowIn - 1, colIn, grid);
  teraform(rowIn + 1, colIn, grid);
  teraform(rowIn, colIn - 1, grid);
  teraform(rowIn, colIn + 1, grid);
};
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  let countIslands = 0;

  for (let rowIndex in grid) {
    for (let columnIndex in grid[rowIndex]) {
      if (grid[rowIndex][columnIndex] === "1") {
        countIslands++;
        teraform(parseInt(rowIndex), parseInt(columnIndex), grid);
      }
    }
  }

  return countIslands;
};
