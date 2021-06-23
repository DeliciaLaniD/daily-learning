var subsetXORSum = function(nums) {
    let result = [];
    dfs(0, [], result, nums);
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
};

var dfs = function (idx, arr, result, nums) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum ^= arr[i];
    }
    debugger;
    result.push(sum);
    if (idx > nums.length) {
        return;
    }
    for (let i = idx; i < nums.length; i++) {
        arr.push(nums[i])
        dfs(i + 1, arr, result, nums);
        arr.pop()
    }
}
console.log(subsetXORSum([5,1,6]));