var partitionLabels = function(S) {
    let arr = [];
    for(let i = 0; i < S.length; i++) {
        arr[S[i].acharCodeAt() - 97] = i;
    }
    let right = arr[S[0].charCodeAt() - 97];
    let res = [];
    let left = 0;
    for (let i = 0; i < S.length; i++) {
        let index = arr[S[i].charCodeAt() - 97];
        if (index < right) {
            continue;
        } else if (index > right){
            right = index;
        } else if (index === 0 && right === 0 && i === 0) {
            res.push(0);
        } else if (index === right && i === 0) {
            continue;
        } else {
            res.push(right - left);
            left = right;
            right++;
        }
    }
    res[0] = res[0] + 1;
    console.log(res)
    return res;
};
// partitionLabels("caedbdedda");

var partitionLabels2 = function(S) {
    let arr = [];
    for(let i = 0; i < S.length; i++) {
        arr[S[i].charCodeAt() - 97] = i;
    }
    let res =[]
    let max = 0
    let divider = 0
    for(let i = 0; i < S.length; i++) {
        let offset = arr[S[i].charCodeAt() - 97]
        if (i === max && offset === i) {
            res.push(i - divider + 1)
            max = offset;
            divider = i+1
        }else {
            max = Math.max(offset,max)
        }

    }
    console.log(res)
    return res;
};
partitionLabels2("caedbdedda");