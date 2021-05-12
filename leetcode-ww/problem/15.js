// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//  

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 示例 2：

// 输入：nums = []
// 输出：[]
// 示例 3：

// 输入：nums = [0]
// 输出：[]
var threeSum = function(nums) {
    // 最左侧值为定值，右侧所有值进行两边推进计算
    let res = [];
    nums.sort((a, b) => a - b);
    let size = nums.length;
    if (nums[0] <= 0 && nums[size - 1] >= 0) {
        // 保证有正数负数
        let i = 0;
        while (i < size - 2) {
            if (nums[i] > 0) break; // 最左侧大于0，无解
            let first = i + 1;
            let last = size - 1;
            while (first < last) {
                if (nums[i] * nums[last] > 0) break; // 三数同符号，无解
                let sum = nums[i] + nums[first] + nums[last];
                if (sum === 0) {
                    res.push([nums[i], nums[first], nums[last]]);
                }
                if (sum <= 0) {
                    // 负数过小，first右移
                    while (nums[first] === nums[++first]) {} // 重复值跳过
                } else {
                    while (nums[last] === nums[--last]) {} // 重复值跳过
                }
            }
            while (nums[i] === nums[++i]) {}
        }
    }

    return res;
};
// var threeSum = function(nums) {
//     if (nums[0] === nums[1] && nums[1] === nums[2] && nums[0] === 0) return [[0,0,0]];
//     if (nums.length < 3) return [];
//     var arr = []
//     nums.sort((a, b) => {
//         return a - b;
//     })
//     for (var i = 0; i < nums.length; i++) {
//         debugger;
//         var result1 =0- nums[i];
//         for (var j = i + 1; j < nums.length; j++) {
//             var result2 = result1 - nums[j];
//             var index = nums.indexOf(result2);
//             if (index !== -1 && index !== i && index !==j) {
//                 arr.push([nums[i], nums[j], result2]);
//             }
//         }
//     }
//     return removeRepeat1(arr);
// };
//
// function removeRepeat1(arr){
//     const obj={};
//     return arr.filter(item=>{
//         if(!obj[item.toString()]) {
//             obj[item.toString()]=item.toString();
//             return item;
//         }
//     });
// }
console.log(threeSum([1,1,-2]))