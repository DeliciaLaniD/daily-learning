// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"

// 示例 2:
// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。

// 说明:
// 所有输入只包含小写字母 a-z 。

var strs = ['a', 'b'];

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 以数组中的第一个元素为基准
    let strFirst = strs[0];
    if(strs.length === 0 || strFirst.length === 0) return "";
    var str = strFirst.split('');
    for (var i = 0; i < str.length; i++) {
        for (var j = 1; j < strs.length; j++) {
            // 第一个元素的子元素与数组后续元素的每一个子元素作比较
            if (str[i] == strs[j].charAt(i)) {
                continue;
            } else {
                return strFirst.substring(0, i);
            }
        }
    }
    return strFirst;
};
 console.log(longestCommonPrefix(strs))

 var longestCommonPrefix = function(strs) {
    // 以数组中的第一个元素为基准
    let strFirst = strs[0];
    if(strs.length === 0 || strFirst.length === 0) return "";
    var str = strFirst.split('');
    for (var i = 0; i < str.length; i++) {
        for (var j = 1; j < strs.length; j++) {
            // 第一个元素的子元素与数组后续元素的每一个子元素作比较
            if (str[i] == strs[j].charAt(i)) {
                console.log()
                continue;
            } else {
                return strFirst.substring(0, i);
            }
        }
    }
    return strFirst;
};