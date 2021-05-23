// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

//  

// 示例：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
// var threeSum = function(nums, target) {
//   nums.sort((a, b) => {
//     return a - b;
//   })
//   var result = 0;
//   var index = nums.indexOf(target);
//   if (index !== -1) {
//     result = nums[index] + nums[index - 1] + nums[index + 1];
//     return result;
//   } else {
//     var leftValue = target - 1;
//     var rightValue = target + 1;
//     while(index === -1) {
//       if (nums.indexOf(leftValue) !== -1) {
//         // -之后存在
//         index = nums.indexOf(leftValue);
//       } else if (nums.indexOf(rightValue) !== -1) {
//         // +之后存在
//         index = nums.indexOf(rightValue);
//       } else {
//         leftValue -= 1;
//         rightValue += 1;
//       }
//     }
//     // 此时拿到了离target最近的index值
//     if (index === 0) {
//       result = nums[index] + nums[index + 2] + nums[index + 1];
//     } else if (index === 2 && nums.length === 3) {
//       result = nums[index] + nums[index - 1] + nums[index - 2];
//     } else {
//       result = nums[index] + nums[index - 1] + nums[index + 1];
//     }
//     return result;
//   }
// }
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  var len = nums.length;
  var result = 0;
  nums.sort((a, b) => {
    return a - b;
  })
  var ans = nums[0] + nums[1] + nums[2];
  for (let index = 0; index < len; index++) {
    let left = index + 1;
    let right = len - 1;
    while(left < right) {
      var tempSum = nums[index] + nums[left] + nums[right];
      if(Math.abs(target-tempSum)<Math.abs(target-ans)){
        ans=tempSum;
      }
      if (tempSum === ans) {
        result = target;
        break;
      } else if (tempSum > ans) {
        right--;
      } else {
        left++;
      }
    }
  }
  return ans;
}
console.log(threeSumClosest([0, 1, 2], 0))