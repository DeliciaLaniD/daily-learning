let s = "abc", t = "ahbgdc"
var isSubsequence = function(s, t) {
    let sIndex = 0, tIndex = 0;
    let len = 0;
    while(sIndex < s.length && tIndex < t.length) {
        if (s[sIndex] === t[tIndex]) {
            sIndex++;
            tIndex++;
            len++;
        } else {
            tIndex++;
        }
    }
    if (len === s.length) {
        return true;
    } else {
        return false;
    }
};
console.log(isSubsequence(s, t))