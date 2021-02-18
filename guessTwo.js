var findString = function(words, s) {
    return fun(0, words.length - 1, words, s);
};

function fun(low, high, words, s) {
    let mid = low + ( (high - low) >> 1 );
    debugger
    console.log('%c 🍬 mid: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', mid);
    if (mid > high) {
        return -1;
    }
    while(mid <= high && words[mid] === '') {
        mid++;
    }
    if (words[mid] === s) {
        return mid;
    } else if (words[mid] > s) {
        return fun(low, mid - 1, words, s);
    }else {
       return fun(mid + 1, high, words, s);
    }
}
let words = ["AX zEfzhxdXXbeCQOKa", "aLRAEYPIZokU", "giqyZpvcOHdfPpRqHAD", "mhQf", "uwIPRHFftk"]
let s = "btRVwblGdpLTtSLbjFzB"
console.log(findString(words, s))