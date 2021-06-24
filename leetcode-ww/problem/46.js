// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

//  

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]
function dfs(nums, idx, arr, result) {
    debugger;
    if (arr.length === nums.length) {
        result.push(arr);
        return;
    }
    for (let i = idx; i < nums.length; i++) {
        if (arr.length === nums.length) {
            arr.pop();
        }
        arr.push(nums[i]);
        i += 1;
        dfs(nums, i, arr, result);
    }
}
function initQuestionsList(nums) {
    var result = [];
    dfs(nums, 0, [], result);
    return result;
}
console.log(initQuestionsList([1,2,3]))
