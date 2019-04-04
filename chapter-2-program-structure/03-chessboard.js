//
// Write a program that creates a string that represents
// an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or
// a "#" character. The characters should form a chessboard.”

const GRID_SIZE = 8;

let grid = '';

for (var i = 0; i < GRID_SIZE; i++) {
  let line = '';

  for (var j = 0; j < GRID_SIZE; j++) {
    line += (j % 2) ? '#' : ' ';
  }

  line = (i % 2) ? line.split('').reverse().join('') : line;

  grid += `${line}\n`;
}
console.log(grid);
