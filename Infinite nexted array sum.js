const arr = [
  1,
  [2],
  [[3]],
  [[[4]]],
  [5],
  [[[[[[[[[[[[7]]]]]]]], 1]]]],
  7,
  [[[10], [[[[[[[[1]]]]]]]]]],
];

function arraySum(arr) {
  sum = 0;
  for (const item of arr) {
    if (Array.isArray(item)) {
      sum += arraySum(item);
    } else {
      sum += item;
    }
  }
  return sum;
}

res = arraySum(arr);

console.log(res);
