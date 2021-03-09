// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
// 输入："Let's take LeetCode contest"
// 输出："s'teL ekat edoCteeL tsetnoc"
var reverseWords = function(s) {
    let left = 0, right = 0, result = '';
    let strArr = s.split('');
    strArr.unshift(' ')
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === ' ') {
            right = i;
            result += strArr.slice(left, right).reverse().join('')
            left = right;
        }
    }
    result += strArr.slice(left).reverse().join('')
    return result.slice(0, result.length - 1);
};
let s = "Let's take LeetCode contest";
console.log(reverseWords(s))