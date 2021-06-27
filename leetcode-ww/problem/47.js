// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

//  

// 示例 1：

// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// 示例 2：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let result = [];
  nums.sort((a, b) => {
    return a - b;
  })
  let vis = new Array(nums.length).fill(false);
  dfs(nums, [], result, vis);
  return result;
};
var dfs = function(nums, arr, result, vis) {
  if (arr.length === nums.length) {
    result.push(arr.slice(0));
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    debugger;
    if (vis[i] == true || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
      continue;
    }
    arr.push(nums[i]);
    vis[i] = true;
    dfs(nums, arr, result, vis);
    vis[i] = false;
    arr.pop();
  }
}
console.log(permuteUnique([1, 1, 2]));