// 拷贝
// https://segmentfault.com/a/1190000018874254
var obj = {
    name: 'll',
    age: 11,
    language: [1, 2, [3, 4], [5, 6]]
}
// 对象赋值
// var obj2 = obj;
// obj2.language[0] = 'hao';
// obj2.language[2][0] = 'ren';

// 浅拷贝
// var obj3 = shalldowCopy(obj);
// obj3.age = '26'
// obj3.language[2][0] = 'copy';
// function shalldowCopy(data) {
//     var objShalldow = {}
//     for (var prop in data) {
//         if (data.hasOwnProperty(prop)) {
//             objShalldow[prop] = data[prop];
//         }
//     }
//     return objShalldow;
// };


// Object.assign()进行的是浅拷贝
var objAssign = Object.assign({}, obj);
// objAssign.language[0] = 'change';
objAssign.age = 26;
// console.log(objAssign);
// console.log(obj);

// Array.prototype.concat()
var arr = [1, 2, 3, {
    age: 123
}]
var arrConcat = arr.concat();
arrConcat[3].age = 26;
// 修改新对象会改变原对象。
// console.log(arr);
// console.log(arrConcat);

// Array.prototype.slice()
// 修改新对象会改变原对象。
// Array的slice和concat方法不修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。



// 深拷贝
// JSON.parse(JSON.stringify())
var arr1 = [1, 2, 3, {
    age: 123
}]
var arrJSON = JSON.parse(JSON.stringify(arr1))
arrJSON[3].age=28
console.log(arrJSON)
console.log(arr1);