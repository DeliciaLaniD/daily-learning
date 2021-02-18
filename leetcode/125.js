/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const arr = s.toLocaleLowerCase().match(/[A-Za-z0-9]+/g);
    // 空字符串返回true
    if (!arr) {
        return true
    }
    let str = arr.join('');
    let left = 0;
    let right = str.length - 1;
    while(left <= right) {
        if (str[left] === str[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};