// let str = 'hello undo redo world.';
// let arr = str.split(' ')
// let result1 = ''
// let result2 = ''
// let undoCount = 0;
// let redoCount = 0;
// let result3 = ''
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 'undo') {
//     let str1 = arr[i - 1]
//     result1 = str1.slice(0, arr[i - 1].length-1)
//     result2 = str1.slice(arr[i - 1].length-1)
//     undoCount++
//     arr.splice(i, 1);
//     i--
//   } else if (arr[i] === 'redo') {
//     result3 = result1 + result2
//     redoCount++
//     arr.splice(i, 1);
//     i--
//   }
//   res.push(result3);
//   let resultGe = []
//   for(let i = 0; i < res.length; i++) {
//     if (res[i] !== '') {
//       resultGe.push(res[i])
//     }
//   }
// }


// if({}==false) console.log(1)
// const p1 = new Promise((resolve, reject) )