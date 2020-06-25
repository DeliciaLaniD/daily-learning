const nums = [0, 0, 0];
var arr = []
var threeSum = function (nums) {
  nums.sort((a, b) => {
    return a - b
  })
  if (nums === null) return [];
  if (nums.length < 3) return [];
  for (var i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i + 1]) {
      continue;
    }
    for (var j = i + 1; j < nums.length - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      for (var k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) {
          continue;
        }
        if (nums[i] + nums[j] + nums[k] === 0) {
          arr.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }
  return arr;
}
console.log(threeSum(nums))