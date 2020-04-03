var gameOfLife = function (board) {
    let rows = board.length
    let cols = board[0].length
    let arr = [0, -1, 1]
    for (let m = 0; m < rows; m++) {
        for (let n = 0; n < cols; n++) {
            let val = 0;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (!(arr[i] == 0 && arr[j] == 0)) {
                        if (0 <= (m + arr[i]) && (m + arr[i]) < rows && 0 <= (n + arr[j]) && (n + arr[j]) < cols) {
                            if (board[m + arr[i]][n + arr[j]] == 1 || board[m + arr[i]][n + arr[j]] == -1) {
                                val++;
                            }
                        }
                    }
                }
            }
            if (board[m][n] == 0 || board[m][n] == 2) {
                if (val < 2) {
                    board[m][n] = 0
                } else if (val > 3) {
                    board[m][n] = 0
                } else if (val == 2) {
                    board[m][n] = 0
                } else if (val == 3) {
                    board[m][n] = 2
                }
            } else {
                if (val < 2) {
                    board[m][n] = -1;
                } else if (val > 3) {
                    board[m][n] = -1
                } else if (val == 2) {
                    board[m][n] = 1
                } else if (val == 3) {
                    board[m][n] = 1
                }
            }

        }
    }
    for (let m = 0; m < rows; m++) {
        for (let n = 0; n < cols; n++) {
            if(board[m][n]==-1) board[m][n]=0
            if(board[m][n]==2) board[m][n]=1
        }
    }
    return board
};
console.log(gameOfLife([
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
  ]))