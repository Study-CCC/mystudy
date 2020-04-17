var canJump = function(nums) {
    let max=0
    let len =nums.length
    if(len==0) return true
    for(let i=0;i<len;i++){
        if(i<=max){
            max=Math.max(max,i+nums[i])
            if(max>=len-1) return true
        }
        
    }
    return false
};