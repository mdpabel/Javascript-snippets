`
[3, 4, 1, 1, 6], 8

[3,4,1]
`;

const smallest_subarray_sum = function (s, arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let current_sum = 0,
      count = 0;

    for (let j = i; j < arr.length; j++) {
      if (current_sum >= s) {
        min = Math.min(min, count);
        break;
      }
      count += 1;
      current_sum += arr[j];
    }
  }
  return min;
};

`
[3, 4, 1, 1, 6], 8

[3,4,1]
`;

const smallest_subarray_sum_v2 = function (s, arr) {
  let min = Infinity,
    sum = 0,
    window_start = 0;

  for (let window_end = 0; window_end < arr.length; window_end++) {
    sum += arr[window_end];
    if (sum >= s) {
      min = Math.min(min, window_end - window_start + 1);
      sum -= arr[window_start];
      window_start += 1;
    }
  }
  return min;
};

const arr = [3, 4, 1, 1, 6],
  s = 8;

const res = smallest_subarray_sum_v2(s, arr);
console.log(res);
