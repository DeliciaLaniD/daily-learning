// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的数字可以无限制重复被选取。

// 说明：

// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。 
// 示例 1：

// 输入：candidates = [2,3,6,7], target = 7,
// 所求解集为：
// [
//   [7],
//   [2,2,3]
// ]
// 示例 2：

// 输入：candidates = [2,3,5], target = 8,
// 所求解集为：
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]
//  

// 提示：

// 1 <= candidates.length <= 30
// 1 <= candidates[i] <= 200
// candidate 中的每个元素都是独一无二的。
// 1 <= target <= 500

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    // candidates.sort((a, b) => {
    //     return a - b;
    // });
    // for (let i = 0; i < candidates.length; i++) {
    //     let res1 = target / candidates[i];
    //     let res2 = target % candidates[i];
    //     debugger;
    //     let arr1 = new Array(res1);
    //     if (res2 === 0) {
    //         for (let j = 0; j < arr1.length; j++) {
    //             arr1[j] = candidates[i];
    //         }
    //         result.push(arr1);
    //
    //     } else {
    //         if (candidates.indexOf(res2) !== -1) {
    //             for (let j = 0; j < arr1.length; j++) {
    //                 arr1[j] = candidates[i];
    //             }
    //             arr1[arr1.length] = res2;
    //             result.push(arr1);
    //         }
    //     }
    // }
    let dfs = function(target, combine, idx) {
        debugger;
        if (idx === candidates.length) {
            return;
        }
        if (target === 0) {
            result.push(combine);
            return;
        }
        //直接跳过
        dfs(target, combine, idx + 1);
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    }
    dfs(target, [], 0);
    return result;
};

console.log(combinationSum([2,3,5], 8));