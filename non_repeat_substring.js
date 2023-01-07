`

`;

const non_repeat_substring = function (str) {
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    seen = {};
    current_max = 1;
    seen[str[i]] = 1;

    for (let j = i + 1; j < str.length; j++) {
      if (str[j] in seen) {
        break;
      } else {
        seen[str[j]] = 1;
        current_max += 1;
      }
    }
    max = Math.max(current_max, max);
  }

  return max;
};

const string = 'abccde';

const non_repeat_substring_v2 = function (str) {
  let windowStart = 0,
    max = 0,
    seen = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in seen) {
      windowStart++;
    }
    seen[rightChar] = 1;
    max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max;
};

const res = non_repeat_substring_v2(string);

console.log(res);
