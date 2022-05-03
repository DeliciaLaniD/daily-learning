function myNew(Fun, ...args) {
    let obj = {};
    obj._proto_ = Fun.prototype;
    let result = Fun.apply(obj, args);
    return result instanceof Object ? result : obj;
}