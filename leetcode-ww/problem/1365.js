var nums = [8,1,2,2,3];
var smallerNumbersThanCurrent = function(nums) {
    /**
     * 1.复制一个数组，进行排序 例如：[1,2,3,4,5,6,7] 排序后的 index（index从0开始计算） 刚好可以表示为前面有几个； 3的index = 2，前面有两个；5的index = 4， 前面有四个；
     2.循环原数组，将当前循环值 ‘cur’ 在 复制的数组中找 index，依次push进创建的空数组，返回数组得到最终答案；
     3.reduce 为累加器reduce((pev，cur)=> {... return pev;},[]) pev为迭代结果，cur为循环的当前值, []为pev初始值；
     * let newNums = JSON.parse(JSON.stringify(nums));
     newNums.sort((a, b) => {
        return a - b
    });
     return nums.reduce((pre, cur) => {
        const index = newNums.indexOf(cur);
        if (index !== -1) {
            pre.push(index);
        }
        return pre;
    }, []);
     return;
     */

    // 方案二
    let set = new Set(nums);
    let map = new Map();
    let numsClone = JSON.parse(JSON.stringify(nums));
    numsClone.sort((a, b) => {return a - b});

    for (let item of set) {
        // 因为数组index从0开始，所以第一个index的值即为小于该数字的数量
        map.set(item, numsClone.indexOf(item));
    }
    // 遍历原数组，并将map存放的答案放到对应位置返回
    return nums.map(item => map.get(item))
};
console.log(smallerNumbersThanCurrent(nums));