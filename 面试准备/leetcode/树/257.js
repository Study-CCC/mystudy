var binaryTreePaths = function(root) {
    if(!root) return []
    let res = []
    let dfs = (node,arr)=>{
                            arr.push(node.val)
        if(!(node.left||node.right)){
            res.push(arr.join('->'))
            return;
        }
        if(node.left){
            dfs(node.left,arr)
            arr.pop()
        } 
        if(node.right){
            dfs(node.right,arr)
            arr.pop()
        }
    }
    dfs(root,[])
    return res
};