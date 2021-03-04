nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
k = 4;
findKthLargest = function(nums, k) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if(!obj[nums[i]]) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++;
        }
    }
    console.log(obj);
    let arr = Object.keys(obj).map(item => {
        return item;
    })
    arr.sort((a, b) => {
      return a - b;
    })
    // let arr1 = arr.reverse()
    // console.log(arr1)
    return arr[k - 1];
};
console.log(findKthLargest(nums, k))