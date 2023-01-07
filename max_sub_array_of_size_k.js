`
2, 1, 5, 1, 3, 2

2 + 1 + 5

`;

function max_sub_array_of_size_k(arr, k) {
  let max = 0;
  for (let i = 0; i < arr.length - k + 1; i++) {
    let current_sum = 0;
    for (let j = i; j < i + k; j++) {
      current_sum += arr[j];
    }
    max = Math.max(current_sum, max);
  }
  return max;
}

`
2, 1, 5, 1, 3, 2

[2, 1, 5]
[1, 5, 1]
`;

function max_sub_array_of_size_v2(arr, k) {
  let current_sum = 0;
  let window_start = 0;
  let max = 0;

  for (let window_end = 0; window_end < arr.length; window_end++) {
    current_sum += arr[window_end];
    if (window_end >= k - 1) {
      max = Math.max(max, current_sum);
      current_sum -= arr[window_start];
      window_start += 1;
    }
  }

  return max;
}

const arr = [2, 1, 5, 1, 3, 2],
  k = 3;

const res = max_sub_array_of_size_v2(arr, k);
console.log(res);
