var guessNumber = function(n) {
    return fun(1, n);
};

function fun(low, high) {
    console.log('%c 🍛 high: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', high);
    console.log('%c 🍖 low: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', low);
    let mid = (low + high) / 2;
    if (guess(mid) === 0) {
        return mid;
    } else if (guess(mid) === -1) {
        let v  = fun(low, mid - 1);
        return v;
    }else {
       let v = fun(mid + 1, high);
       return v;
    }
}
function guess(data) {
    let pick = 6;
    if (pick < data) { return -1}
    if (pick === data) return 0;
    if (pick > data) return 1;
}
console.log(guessNumber(10))