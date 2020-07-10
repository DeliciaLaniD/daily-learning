// // pending准备阶段
// let promise = new Promise((resolve, reject) => {
//   // 成功状态
//   // resolve('成功状态')
//   // 失败状态
//   reject('fail')
// }).then(value => {
//   console.log('%c 🍚 value: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', value);

// }, reason => {
//   console.log('%c 🍰 reason: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', reason);

// })

// console.log(promise)

// let p1 = new Promise((resolve, reject) => {
//   resolve('fulfilled');
// })

// let p2 = p1.then(
//   value => {
//     console.log(342)

//     console.log(value);
//   },
//   reason => {
//     console.log(reason);
//   }
// )

// console.log(p1);
// // console.log(p2);

let p1 = new Promise((resolve, reject) => {
  resolve('success')
}).then(
  value => {
    return new Promise((resolve, reject) => {
      resolve('succ')
    })
    .then(value => {
      console.log(value)
    })
  }
)