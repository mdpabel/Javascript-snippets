const arr = [1, 1, 1, 1, 1, 2, 3, 4, 2, 3, 5];

arr.sort();

let flag = 1;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] !== arr[i - 1]) {
    arr[flag] = arr[i];
    flag++;
  }
}

console.log(arr);
