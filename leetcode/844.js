/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let newS = updateStr(S);
    console.log('%c 🥐 newS: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', newS);
    let newT = updateStr(T);
    console.log('%c 🥝 newT: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', newT);
   if (newS.join('') === newT.join('')) {
       return true;
   } else {
       return false;
   }
};

var updateStr = function(data) {
    let arr = data.split('');
    let right = arr.length - 1;
    let num = 0
    while(right >= 0) {
        if (num > 0 && right - num + 1 > 0) {
            arr.splice(right, num, '');
            arr.splice(right - num + 1, num, '');
            num = 0;
        } else if (num > 0){
            return arr;
        }
        if (arr[right] === '#' && arr[right - 1] !== '#') {
            arr.splice(right, 1, '');
            arr.splice(right - 1, 1, '');
            right -= 2;
        } else if (arr[right] === '#' && arr[right - 1] === '#' && ) {
            num += 2;
            right -= 2;
        } else {
            right--
        }
    }
    return arr;
}

console.log(backspaceCompare("a##c", "#a#c"));
