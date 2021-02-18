var moveZeroes = function(nums) {
    // let left = 0,
    //     right = nums.length - 1;
    // while(left <= right) {
    //     if (nums[left] === 0 && nums[left] !== 0) {
    //         // nums[left] = nums[++left];
    //         [nums[left], nums[left + 1]] = [nums[left + 1], nums[left]];
    //         left++
    //     } else if (nums[left] === 0 && nums[left] === 0) {

    //     } else{
    //         left++;
    //     }
    // }
    // console.log('%c 🍮 nums: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', nums);
    // return nums;
    // let right = nums.length - 1;
    // for(let i = 0; i < nums.length; i++) {
    //     if (nums[i] === 0) {
    //         nums.splice(i, 1);
    //         i--;
    //         // nums[right] = 0;
    //         right--;
    //     }
    // }
    // while(right < )
    // console.log(nums);

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
    console.log(nums)
};
moveZeroes([0,0,1])