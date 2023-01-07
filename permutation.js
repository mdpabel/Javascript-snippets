`
[1, 2, 3]

`;

function genaratePermutations(nums, permutate, permutates) {
  if (nums.length == 0 && permutate.length != 0) {
    permutates.push(permutate);
    return;
  } else {
    for (let i = 0; i < nums.length; i++) {
      const newNums = nums.filter((_, idx) => idx != i);
      const newPermutate = [...permutate, nums[i]];
      genaratePermutations(newNums, newPermutate, permutates);
    }
  }
}

const nums = [1, 2, 3];
permutates = [];
genaratePermutations(nums, [], permutates);

console.log(permutates);
