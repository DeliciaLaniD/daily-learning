const obj = {
    name: 'll',
    age: 10
}

function fun(age) {
    this.age = age;
    return this
}

console.log(fun.call(obj, 20));