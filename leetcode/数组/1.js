var twoSum = function (nums, target) {
    let m=nums.length
    while(-1<m){
        let x = nums.pop()
        if(nums.indexOf(target-x)>-1)
        return [nums.indexOf(target-x),nums.length]
    }
};
console.log(twoSum([3,2,4], 6))