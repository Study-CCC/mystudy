var combine = function(n, k) {
    let res = []
    let dfs = (arr,index)=>{
        if(arr.length==k) return res.push(arr)
        for(let i=index;i<=n;i++){
            if(arr.indexOf(i)!=-1||i<arr[arr.length-1]) continue;
            arr.push(i)
            dfs(arr.slice(0),arr[arr.length-1]+1)
            arr.pop()
        }
    }
    dfs([],1)
    return res
};
