var judgeCircle = function(moves) {
    let move = {R:0,L:0,U:0,D:0}
    for(let i=0;i<moves.length;i++){
        move[moves[i]]++
    }
    if(move.R==move.L&&move.U==move.D) return true
    return false
};