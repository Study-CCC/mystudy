var combinationSum = function (candidates, target) {
    let n = candidates.length
    let res = []
    let dfs = (arr,index,target)=>{
        if(target<0) return;
        if(target==0){
            res.push(arr)
            return;
        }
        for(let i=index;i<n;i++){
            arr.push(candidates[i])
            dfs(arr.slice(),i,target-candidates[i])
            arr.pop()
        }
    }
    dfs([],0,target)
    return res
};
console.log(combinationSum([2,3,5],8));