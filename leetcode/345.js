// var reverseVowels = function(s) {
//     let left = 0;
//     let right = s.length;
//     let arr = ["a", 'e', 'i', 'o', 'u'];
//     let strArr = s.split('');
//     while(left <= right) {
//         let leftRes = arr.filter(item => item === strArr[left])
//         let rightRes = arr.filter(item => item === strArr[right])
//         if(leftRes.length && rightRes.length) {
//             let temp = strArr[left];
//             strArr[left] = strArr[right];
//             strArr[right] = temp;
//             left++;
//             right--;
//         } else if (leftRes.length && !rightRes.length) {
//             right--;
//         } else if (!leftRes.length && rightRes.length){
//             left++;
//         } else {
//             left++;
//             right--;
//         }
//     }
//     return strArr.join('');
// };

var reverseVowels = function(s) {
    let set = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let arr = s.split('');
    let i =0;
    let j = arr.length-1;
    while(i<j){
        if(set.has(arr[i])){ // 左边是否有元音字母
            if(set.has(arr[j])){ // 如果左边有元音字母，右边也有，那么交换
                [arr[i],arr[j]] = [arr[j],arr[i]];
                i++;
            }
            j--;
        }else{
            i++;
        }
    }
    return arr.join('')
};
console.log(reverseVowels('hello'));