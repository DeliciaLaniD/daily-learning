// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
//  

// 示例 1：

// 输入：nums = [1,2,0]
// 输出：3
// 示例 2：

// 输入：nums = [3,4,-1,1]
// 输出：2
// 示例 3：

// 输入：nums = [7,8,9,11,12]
// 输出：1
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i]
    }
  } 
  for (let i = 0; i < len; i++) {
    nums[nums[i]] = -nums[nums[i]]
  }
  for (let i = 1; i < len + 1; i++) {
    if (nums[i] > 0) {
      return i;
    }
  }
};

console.log(firstMissingPositive([1, 2, 0]))