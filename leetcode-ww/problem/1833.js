var maxIceCream = function(costs, coins) {
    costs.sort((a, b) => {
        return a - b;
    })
    if (costs[0] > coins) {
        return 0;
    }
    let result = 0;
    let sum = 0;
    for (let i = 0; i < costs.length; i++) {
        sum += costs[i];
        if (sum <= coins) {
            result++;
        }
    }
    return result;
};
console.log(maxIceCream([1,6,3,1,2,5], 20));
