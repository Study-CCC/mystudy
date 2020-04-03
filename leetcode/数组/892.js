var surfaceArea = function(grid) {
    var sum=0;
    var len=grid.length
    // 对该行的四个面进行计算
    const xr = [1,0,-1,0]
    const yr = [0,1,0,-1]
    grid.map((arr,index)=>{
       arr.map((item,i)=>{
           if(item>0){
               sum+=2;
                for(m=0;m<4;m++){
                    const nx = xr[m]+index;
                    const ny = yr[m]+i;
                    let nv = 0;
                    if(0<=nx&&nx<len&&0<=ny&&ny<len){
                        nv = grid[nx][ny]
                    }
                    sum+=Math.max(item-nv,0)
                }
           }
       })
    })
    return sum
};
console.log(surfaceArea([[1,1,1],[1,0,1],[1,1,1]]))