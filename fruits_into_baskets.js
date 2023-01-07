`
['A', 'B', 'C', 'A', 'C']
count = 2
max = 0
set = 2
'A' -> 'B' -> 'C'
'B'

`;

const fruits_into_baskets = function (fruits) {
  let max = 0;
  for (let i = 0; i < fruits.length; i++) {
    let count = 0;
    const seen = new Set();
    for (let j = i; j < fruits.length; j++) {
      seen.add(fruits[j]);
      if (seen.size > 2) {
        break;
      }
      count += 1;
    }
    max = Math.max(count, max);
  }

  return max;
};

`
['A', 'B', 'C', 'A', 'C']

{
  'A' : 1,
  'B' : 1,
}

`;

const fruits_into_baskets_v2 = function (fruits) {
  let windowStart = 0;
  let seen = new Set();
  let max = 0;

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruits = fruits[windowEnd];
    seen.add(rightFruits);
    if (seen.size > 2) {
      const leftFruits = fruits[windowStart];
      seen.delete(leftFruits);
      windowStart++;
    }
    max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max;
};

const fruit = ['A', 'B', 'C', 'A', 'C'];
const res = fruits_into_baskets_v2(fruit);
console.log(res);
