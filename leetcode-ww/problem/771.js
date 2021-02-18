var numJewelsInStones = function(J, S) {
    let count = 0
    console.log(S.split('A'))
    for(let i = 0;i<J.length;i++){
        count += S.split(J[i]).length - 1
    }
    return count
};
numJewelsInStones('aA', 'aAAbAbbAb');