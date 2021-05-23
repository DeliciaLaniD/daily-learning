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
let threeSum = function(nums) {
    let result = []; // 存结果
    nums.sort((a, b) => {
        return a - b;
    })
    let length = nums.length;
    if (nums[0] <= 0 && nums[length - 1] >= 0) {
        let i = 0;
        while(i < length - 2) {
            if (nums[i] > 0) break; // 在循环过程中，第一个基准值大于0，不可能出现和为0，不用继续往下走了
            let left = i + 1; // 第一个指针
            let right = length - 1; // 第二个指针
            while(left < right) {
                if (nums[i] * nums[right] > 0) break; // 三个同号，不可能出现和为0
                let sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (nums[left] === nums[++left]) {} // 重复值跳过
                } else if (sum < 0) {
                    while (nums[left] === nums[++left]) {} // 重复值跳过
                } else {
                    while (nums[right] === nums[--right]) {}
                }
            }
            while (nums[i] === nums[++i]) {}
        }
    }
    return result;
};
// let threeSum = function(nums) {
//     // 最左侧值为定值，右侧所有值进行两边推进计算
//     let res = [];
//     nums.sort((a, b) => a - b);
//     let size = nums.length;
//     if (nums[0] <= 0 && nums[size - 1] >= 0) {
//         // 保证有正数负数
//         let i = 0;
//         while (i < size - 2) {
//             if (nums[i] > 0) break; // 最左侧大于0，无解
//             let first = i + 1;
//             let last = size - 1;
//             while (first < last) {
//                 if (nums[i] * nums[last] > 0) break; // 三数同符号，无解
//                 let sum = nums[i] + nums[first] + nums[last];
//                 if (sum === 0) {
//                     res.push([nums[i], nums[first], nums[last]]);
//                 }
//                 if (sum <= 0) {
//                     // 负数过小，first右移
//                     while (nums[first] === nums[++first]) {} // 重复值跳过
//                 } else {
//                     while (nums[last] === nums[--last]) {} // 重复值跳过
//                 }
//             }
//             while (nums[i] === nums[++i]) {}
//         }
//     }
//
//     return res;
// };
// let threeSum = function(nums) {
//     if (nums[0] === nums[1] && nums[1] === nums[2] && nums[0] === 0) return [[0,0,0]];
//     if (nums.length < 3) return [];
//     let arr = []
//     nums.sort((a, b) => {
//         return a - b;
//     })
//     for (let i = 0; i < nums.length; i++) {
//         debugger;
//         let result1 =0- nums[i];
//         for (let j = i + 1; j < nums.length; j++) {
//             let result2 = result1 - nums[j];
//             let index = nums.indexOf(result2);
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
console.log(threeSum([-1,0,1,2,-1,-4]))


// let threeSum = function(nums) {
//     let result = []; // 存结果
//     nums.sort((a, b) => {
//         return a - b;
//     })
//     let length = nums.length;
//     if (nums[0] < 0 && nums[length - a] > 0) {
//         let i = 0;
//         while(i < length - 2) {
//             if (nums[i] > 0) break; // 在循环过程中，第一个基准值大于0，不可能出现和为0，不用继续往下走了
//             let left = i + 1; // 第一个指针
//             let right = length - 1; // 第二个指针
//             while(left < right) {
//                 if (nums[i] * nums[left] > 0) break; // 三个同号，不可能出现和为0
//                 let sum = nums[i] + nums[left] + nums[right];
//                 if (sum === 0) {
//                     result.push(nums[i], nums[left], nums[right]);
//                     left++;
//                 } else if (sum < 0) {
//                     left++;
//                 } else {
//                     right--;
//                 }
//             }
//             i++;
//         }
//     }
//     return result;
// }