var solveNQueens = function (n) {
    let res = []
    let dfs = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (i == 2) {
                let s;
            }
            for (let j = i + 1; j < arr.length; j++) {
                if (Math.abs(i - j) == Math.abs(arr[i] - arr[j])) return
                if (j == n - 1&&i==n-2) { 
                    res.push(arr)
                 }
            }
        }
        for (let i = 0; i < n; i++) {
            if (arr.indexOf(i) == -1) {
                arr.push(i)
                dfs(arr.slice())
                arr.pop()
            }
        }
    }
    dfs([])
   res = res.map(item=>{
       item = item.map(
           site=>{
            let str=''
            for(i=0;i<4;i++){
                if(i==site) str+='Q'
                else str+='.'
            }
            return str
           }
       )
      return item
    })
    return res
};
console.log(solveNQueens(4))