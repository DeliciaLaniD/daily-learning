// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

//  

// 示例 1：

// 输入：digits = [1,2,3]
// 输出：[1,2,4]
// 解释：输入数组表示数字 123。
// 示例 2：

// 输入：digits = [4,3,2,1]
// 输出：[4,3,2,2]
// 解释：输入数组表示数字 4321。
// 示例 3：

// 输入：digits = [0]
// 输出：[1]

// var plusOne = function(digits) {
//   var len = digits.length;
//   var result = [];
//   if (digits[len - 1] < 9) {
//     digits[len - 1] = digits[len - 1] + 1;
//     return digits;
//   } else {
//     var resultNum = String(Number(digits.join('')) + 1);
//     console.log('%c 🍾 resultNum: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', resultNum);
//     for (var i = 0; i < resultNum.length; i++) {
//       result.push(Number(resultNum[i]));
//     }
//     return result;
//   }
// };
var plusOne = function(digits) {
  var len = digits.length;
  for (var i = len - 1; i > -1; i--) {
    digits[i]++;
    digits[i] = digits[i] % 10;
    if (digits[i] !== 0) return digits;
  }
  digits[0] = 1;
  digits.push(0);
  return digits;


//   // 数值6145390195186705544超出Number基本类型的容纳范围，改用BigInt基本类型
// let num = BigInt(digits.join(''));
// // BigInt基本类型进行数学操作时，需要在数字字面量后加个n
// let string = String(num + 1n);
// let ary = string.split('');
};
console.log(plusOne([1,2,4,9]))




return ary.map(str => Number(str));
// console.log(plusOne([5,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,1,8,7,9,8,3,8,4,7,2,5,8,9]))