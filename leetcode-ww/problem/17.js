// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
var letterCombinations = function(digits) {
    if (digits.length == 0) return [];
    const obj = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
    const arr = [];
    arr.push('');
    for(let i = 0; i < digits.length; i++) {
        const size = arr.length;
        for (let j = 0; j < size; j++) {
            const curStr = arr.shift();
            const letter = obj[digits[i]];
            for (const k of letter) {
                arr.push(curStr + k);
            }
        }
    }
    return arr
};

const letterCombinations = (digits) => {
    if (digits.length == 0) return [];
    const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
    const queue = [];
    queue.push('');
    for (let i = 0; i < digits.length; i++) { // bfs的层数，即digits的长度
        const levelSize = queue.length;         // 当前层的节点个数
        for (let j = 0; j < levelSize; j++) {   // 逐个让当前层的节点出列
            const curStr = queue.shift();         // 出列

            const letters = map[digits[i]];

            for (const l of letters) {
                queue.push(curStr + l); // 生成新的字母串入列
            }
        }
    }
    return queue; // 队列中全是最后一层生成的字母串
};

let digits = "23";
console.log(letterCombinations(digits))