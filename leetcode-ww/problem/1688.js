/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    if (n === 1) return 1;
    let sum = 0;
    // n=当前队伍总数，m=队伍晋级总数sum=当前总配对次数，
    var dfs = function(n) {
        let res2 = parseInt(n / 2);
        if (n === 2) {
            return;
        }
        sum += res2;
        dfs(n - res2);
    }
    dfs(n);
    return sum + 1;
};
console.log(numberOfMatches(7))

  // 输入：n = 14
  // 输出：13
  // 解释：比赛详情：
  // - 第 1 轮：队伍数 = 14 ，配对次数 = 7 ，7 支队伍晋级。
  // - 第 2 轮：队伍数 = 7 ，配对次数 = 3 ，4 支队伍晋级。 
  // - 第 3 轮：队伍数 = 4 ，配对次数 = 2 ，2 支队伍晋级。
  // - 第 4 轮：队伍数 = 2 ，配对次数 = 1 ，决出 1 支获胜队伍。
  // 总配对次数 = 7 + 3 + 2 + 1 = 13