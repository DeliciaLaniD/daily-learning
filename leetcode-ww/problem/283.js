var moveZeroes = function(nums) {
    let left = 0;
    let index = 0;
    while(left <= nums.length - 1) {
        if (nums[left] === 0) {
            left++;
        } else if (nums[left] !== 0 && left === index) {
            index++;
            left++;
        } else {
            nums[index] = nums[left];
            nums[left] = 0;
            index++;
            left++;
        }
    }
};

let nums1 = [0,1,0,2];
moveZeroes(nums1)
console.log(nums1)