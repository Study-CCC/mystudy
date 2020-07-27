var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let flag = 0
    let res = intervals.reduce(function (prev, cur) {
        if (!prev[0]) {prev.push(cur)
            return prev
        }
        if (prev[flag][1] >= cur[0]) {
            prev[flag][1] = (prev[flag][1] <= cur[1] ? cur[1] : prev[flag][1])
        } else {
            prev.push(cur)
            flag++;
        }
        return prev
    }, [])
    return res
}
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))