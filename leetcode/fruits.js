// 水果成篮
let tree = [3,3,3,1,2,1,1,2,3,3,4];
var totalFruit = function(tree) {
  let i = 0, j = 0;
  let obj = {};
  let count = 0;
  let res = 0;
  while(i < tree.length) {
    if (!obj[tree[i]]) {
      obj[tree[i]] = 1;
      count++;
    } else {
      obj[tree[i]]++
    }
    console.log(obj)
    while(count > 2) {
      obj[tree[j]]--;
      if (obj[tree[j]] === 0) {
        count--;
      }
      j++;
    }
    res = Math.max(res, i - j + 1);
    i++                                                     
  }
  console.log(res);
  return res;
};
totalFruit(tree);