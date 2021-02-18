var singleNumber = function(nums) {
    // var obj = {};
    // for (let i = 0; i < nums.length; i++) {
    //     if (obj[nums[i]]) {
    //         obj[nums[i]]++;
    //     } else {
    //         obj[nums[i]] = 1;
    //     }
    // }
    // for (let i in obj) {
    //     if (obj[i] === 1) {
    //         return i;
    //     }
    // }


    let single = 0;
    for(let num in nums) {
        single ^= num;
    }
    return single;
};
console.log(singleNumber([2,2,1,1,3]))