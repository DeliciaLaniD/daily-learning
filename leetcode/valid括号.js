// let str = '(]';
// function validSquare(str) {
//   let obj = {
//     '(': 1,
//     ')': -1,
//     '[': 2,
//     ']': -2,
//     '{': 3,
//     '}': -3
//   }
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     console.log('%c 🧀 obj[str[i]]: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', obj[str[i]]);
//     if(obj[str[i]] > 0) {
//       arr.push(obj[str[i]])
//     } else if (arr[i - 1] + obj[str[i]] === 0){
//       arr.pop(arr[i - 1]);
//     }
//   }
// }

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let obj = {
  '(': 1,
  ')': -1,
  '[': 2,
  ']': -2,
  '{': 3,
  '}': -3
}
let arr = [];
for (let i = 0; i < s.length; i++) {
  if(obj[s[i]] > 0) {
    arr.push(obj[s[i]])
  } else if (arr[arr.length - 1] + obj[s[i]] === 0){
    arr.pop(arr[arr.length - 1]);
  } else {
      return false;
  }
}
if (arr.length === 0) return true;
return false;
}