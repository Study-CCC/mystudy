/**
 * 
 * 前序遍历 preorder = [3,9,20,15,7]  root right left
 * 中序遍历 midorder = [9,3,15,20,7]  left root right
 */
var buildTree = function(preorder, inorder) {
    let build = (inorder) => {
        if(!inorder || !inorder.length) return null
        let tmp = preorder.shift(),mid = inorder.indexOf(tmp)
        let root = new TreeNode(tmp)
        root.left = build(inorder.slice(0,mid))
        root.right = build(inorder.slice(mid + 1))
        return root
    }
    return build(inorder)
};
 function TreeNode(val) {
         this.val = val;
         this.left = this.right = null;
     }
   
console.log(buildTree([1,2,4,3,5,6 ],[2,4,1,5,3,6]))