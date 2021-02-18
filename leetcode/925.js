/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let left = 0;
    let right = 0;
    let temp;
    if(name[0] !== typed[0]) return false;
    while(left < name.length && right < typed.length && left <= right) {
        let num = 0;
        temp = name[left];
        let num2 = 0;
        while(name[left] === temp) {
            num++;
            left++;
        }
        while(typed[right] === temp) {
            num2++;
            right++;
        }
        if (num <= num2) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};
console.log(isLongPressedName('alex', 'aaleex'))