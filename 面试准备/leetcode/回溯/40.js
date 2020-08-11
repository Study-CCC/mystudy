var combinationSum2 = function (candidates, target) {
     candidates = jsQuickSort(candidates)
    let oldStart;
    let len = candidates.length
    let res = []
    let dfs = (arr, target, index) => {
        if (target < 0) return;
        if (target == 0) {
            res.push(arr)
            return;
        }
        for (let i = index; i < len; i++) {
            if (arr.length == 0) {
                if (candidates[i] == oldStart) continue;
                else oldStart = candidates[i]
            }
            arr.push(candidates[i])
            dfs(arr.slice(),target-candidates[i],i+1)
            arr.pop()
        }
    }
    dfs([],target,0)
    res =[...new Set(res.map(item=>item.toString()))].map(item=>item.split(','))
    return res
};
function jsQuickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array.splice(pivotIndex, 1)[0];  //从数组中取出我们的"基准"元素
    const left = [], right = [];
    array.forEach(item => {
        if (item < pivot) {  //left 存放比 pivot 小的元素
            left.push(item); 
        } else {  //right 存放大于或等于 pivot 的元素
            right.push(item);
        }
    });
    //至此，我们将数组分成了left和right两个部分
    return jsQuickSort(left).concat(pivot, jsQuickSort(right));  //分而治之
}
console.log(combinationSum2([2,5,2,1,2],5));