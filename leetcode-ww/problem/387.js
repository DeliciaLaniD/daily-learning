var firstUniqChar = function(s) {
    if (s === '') return -1;
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]]++;
        }
    }
    let arr = Object.keys(obj);
    let res;
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === 1) {
            res = s.indexOf(arr[i]);
            break;
        } else {
            res = -1;
        }
    }
    return res;
};
s = "loveleetcode"
console.log(firstUniqChar(s))