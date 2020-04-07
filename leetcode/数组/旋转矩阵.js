var rotate = function(matrix) {
    let row = matrix.length
    let col = matrix[0].length
    if(row==0) return []
    for(let i=0;i<row/2;i++){
        for(let j=0;j<col;j++){
            [matrix[i][j],matrix[row-1-i][j]]=[matrix[row-1-i][j],matrix[i][j]]
        }
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<i;j++){
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]
        }
    }
    return matrix
};
console.log(rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]))