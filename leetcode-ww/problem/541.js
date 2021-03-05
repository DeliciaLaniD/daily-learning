// 给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。
// //
// // 如果剩余字符少于 k 个，则将剩余字符全部反转。
// // 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
// // 输入: s = "abcdefg", k = 2
// // 输出: "bacdfeg"
var reverseStr = function(s, k) {
    let result = '', n = 0;
    for (let i = 0; i < s.length; i += k) {
        let t = s.slice(i, i + k);
        n++;
        if (n % 2 === 1) {
            t = t.split('').reverse().join('');
        }
        result = result + t;
    }
    return result;
};
let s = "abcdefg", k = 2
console.log(reverseStr(s, k))