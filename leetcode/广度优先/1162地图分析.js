/**
 * @param {number[][]} grid
 * @return {number}
 */
//未解
var maxDistance = function (grid) {
    let pool = []
    let land = []
    let sum = 0;
    grid.map((items, index) => {
        items.map((item, i) => {
            if (item == 0) pool.push([index, i])
            else land.push([index, i])
        })
    })
    if(land.length==0||pool.length==0)return -1
    pool.map(item=>{
        let dis = 0
        land.map(m=>{
            dis+=Math.abs(m[0]-item[0])+Math.abs(m[1]-item[1])
        })
        if(dis>sum) {sum=dis;console.log(item)}
    })
    
    return sum/land.length
};
console.log(maxDistance([[0,0,1,1,1],[0,1,1,0,0],[0,0,1,1,0],[1,0,0,0,0],[1,1,0,0,1]]))
