var containsNearbyDuplicate = function(nums, k) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = [i];
        } else {
            obj[nums[i]].push(i);
        }
    }
    let item  = Object.values(obj);
    console.log(item)
    let result;
    for (let i = 0; i < item.length; i++) {
        if (item[i].length > 1) {
            for (let j = 1; j < item[i].length; j++) {
                if (item[i][j] - item[i][j - 1] <= k) {
                    result = true;
                    break;
                }
            }
            if (result === true) {
                break;
            }
        } else {
            result = false;
        }
    }
    return result ? true : false;
};
//[1,0,1,1] [1,2,3,1]
let nums = [1,2,3,1,2,3],
    k = 2;
console.log(containsNearbyDuplicate(nums, k));