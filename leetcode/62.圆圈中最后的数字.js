// 迭代
var lastRemaining = function(n, m) {
    let result = 0;
    for(let i = 2; i <= n; i++) {
        result = (m + result) % i;
    }
    return result
};

// 递归
var lastRemaining = function (n, m) {
    return recur(n, m)
};

function recur (n, m) {
    if (n === 1) return 0
    let result = recur(n - 1, m)
    return (m + result) % n
}