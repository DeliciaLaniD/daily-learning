var arr = [1, 2, 3, 4, 5];
var sum = arr.reduce((pre, cur, index, arr) => {
  console.log(pre, cur, index);
  return pre + cur;
})
console.log(arr);
console.log(sum);

