`
araaci

a
ar
ara
araa
araac
raac
aac
aaci
aci
ci
`;

const longest_substring_with_k_distinct = function (str, k) {
  let windowStart = 0,
    maxLength = 0,
    seen = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (!(rightChar in seen)) {
      seen[rightChar] = 0;
    }
    seen[rightChar] += 1;

    while (Object.keys(seen).length > k) {
      const leftChar = str[windowStart];
      seen[leftChar] -= 1;
      if (seen[leftChar] == 0) {
        delete seen[leftChar];
      }
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

const string = 'araaci',
  k = 2;

const res = longest_substring_with_k_distinct(string, k);
console.log(res);
