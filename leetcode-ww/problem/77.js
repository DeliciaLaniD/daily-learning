// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

// 示例:

// 输入: n = 4, k = 2
// 输出:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = []
    dfs(1, [],result, k, n);
    return result;
};
let dfs = function(idx, arr,result, k, n) {
    if (arr.length === k) {
        result.push([...arr]);
        return;
    }
    if (idx > n) {
        return;
    }
    for (let i = idx; i <= n; i++) {
        dfs(i+1, [...arr, i],result, k, n)
    }
}
console.log(combine(4, 2))