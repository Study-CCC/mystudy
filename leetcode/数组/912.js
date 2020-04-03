var sortArray = function(nums) {
    nums.sort((a,b)=>a-b)
    return nums
};
console.log(sortArray([5,1,1,2,0,0]))