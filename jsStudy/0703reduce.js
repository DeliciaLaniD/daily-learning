// var arr = [1, 2, 3, 4, 5];
// var sum = arr.reduce((pre, cur, index, arr) => {
//   console.log(pre, cur, index); // 1 2 1
//   return pre + cur;
// })
// console.log(arr);
// console.log(sum);

// var arr = [1, 2, 3, 4, 5];
// var sum = arr.reduce((pre, cur, index, arr) => {
//   console.log(pre, cur, index); // 0 1 0
//   return pre + cur;
// }, 0)
// console.log(arr);
// console.log(sum);
// 结论：如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，
// 跳过第一个索引。如果提供initialValue，从索引0开始。
// var arr = [1, 2, 3, 4, 5];
// var result = arr.reduce((a, b) => {
//   return a + b;
// })
// console.log(result);

// var arr = [1, 2, 3];
// var result = arr.reduce((a, b) => {
//   return a*b;
// })
// console.log(result);

// 统计数组中元素的个数
var arr = ['aa', 'bb', 'cc', 'aa', 'cc', 'aa'];
var result = arr.reduce((pre, cur) => {
  if (cur in pre) {
    pre[cur]++
  } else {
    pre[cur] = 1;
  }
  return pre;
}, {})
console.log(result)