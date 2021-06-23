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