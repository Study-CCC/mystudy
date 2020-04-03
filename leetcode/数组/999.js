var numRookCaptures = function(board) {
    var num =0;
    var rx=0;
    var ry=0;
    board.map((item,index)=>{
        if(item.indexOf('R')!=-1){
            rx=index;
            ry=item.indexOf('R')   
            let mx=rx;
            let my=ry;
            for(let i=1,mx=rx,my=ry;i<8;i++){
                mx=mx-1;
                if(mx<0||board[mx][my]=='B'||board[mx][my]=='P'){
                    i=8
                }
                else if(board[mx][my]=='p'){
                    num++;
                    i=8
                }
            }
            for(let i=1,mx=rx,my=ry;i<8;i++){
                my=my-1;
                if(my<0||board[mx][my]=='B'||board[mx][my]=='P'){
                    i=8
                }
                else if(board[mx][my]=='p'){
                    num++;
                    i=8
                }
            }
            for(let i=1,mx=rx,my=ry;i<8;i++){
                mx=mx+1;
                if(8==mx||board[mx][my]=='B'||board[mx][my]=='P'){
                    i=8
                }
                else if(board[mx][my]=='p'){
                    num++;
                    i=8
                }

            }
            for(let i=1,mx=rx,my=ry;i<8;i++){
                my=my+1;
                if(8==my||board[mx][my]=='B'||board[mx][my]=='P'){
                    i=8
                }
                else if(board[mx][my]=='p'){
                    num++;
                    i=8
                }

            }
        }
    })
    return num;
};
console.log(numRookCaptures([[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]))