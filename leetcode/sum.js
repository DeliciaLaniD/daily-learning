s = 11, nums = [1,2,3,4,5]
let lengthArray = [];
var minSubArrayLen = function(s, nums) {
  if (nums.length === 0 || s < nums[0]) return 0;
  for (var i = 0; i < nums.length; i++) {
    let sum = 0;
    for (var j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum < s) {
        continue;
      } else {
        lengthArray.push(j - i + 1);
        break;
      }
    }
  }
  return Math.min(...lengthArray);
};
console.log(minSubArrayLen(s, nums))