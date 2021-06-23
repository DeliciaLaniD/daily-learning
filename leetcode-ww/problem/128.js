var longestConsecutive = function(nums) {
  if (!nums.length) return 0;
  nums.sort((a, b) => {
    return a - b;
  })
  var result = 1;
  var arr = [];
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      result++;
    } else if (nums[i] - nums[i - 1] === 0) {
      continue;
    }else {
      arr.push(result);ta
      result = 1;
    }
  }
  arr.push(result);
  return Math.max(...arr);
};
console.log(longestConsecutive(nums = [1,2,0,1]))