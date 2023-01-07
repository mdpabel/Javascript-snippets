/**
  1 2 3 4 5 0
  6 7 8 9 0 4
  1 2 3 4 5 3
  6 7 8 9 0 2
  1 2 3 4 5 1

  1,1,2,3
  
  7 8 9
  2 3 4
 */

function regionSum({ matrix, row1, col1, row2, col2 }) {
  let sum = 0;
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      sum += matrix[i][j];
    }
  }

  return sum;
}

const matrix = [
  [1, 2, 3, 4, 5, 0],
  [6, 7, 8, 9, 0, 4],
  [1, 2, 3, 4, 5, 3],
  [6, 7, 8, 9, 0, 2],
  [1, 2, 3, 4, 5, 1],
];
const row1 = 1,
  col1 = 1,
  row2 = 2,
  col2 = 3;

const res = regionSum({ matrix, row1, row2, col1, col2 });
console.log(res);
