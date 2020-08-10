// let nums = [1,1,2]
// var removeDuplicates = function(nums) {
//   return [...new Set(nums)]
// };
// console.log(removeDuplicates(nums))

let nums = [1,1,2,3,4,5,5,5,5,5,6,6,7,8]
var removeDuplicates = function(nums) {
  let i = 0; j = 1;
  while(i < nums.length) {
    console.log(i);
    console.log(j)
    if (nums[j] === nums[i]) {
      nums.splice(j, 1);
      // j++
    } else {
      i++;
      j++
    }
  }
  console.log(nums)
};
removeDuplicates(nums)