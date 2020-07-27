var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length
    let len2 = nums2.length
    let len = len1 + len2
    if(len1==len2==1){
        return (nums1[0]+nums2[0])/2
    }
    if(len%2==1){
        let mid = (len-1)/2
        return getMidValue(nums1,nums2,mid)
    }else{
        let mid = len/2-1
        let value1 = getMidValue(nums1,nums2,mid)
        let value2 =  getMidValue(nums1,nums2,mid+1)
        return (value1+value2)/2
    }
};
var getMidValue = function(nums1,nums2,mid){
    let i = 0;
    let j = 0;
    let len1 = nums1.length
    let len2 = nums2.length
    let res;
    do{
        if(nums1[i]>nums2[j]){
            res = nums2[j]
            if(j==len2-1){
               i++;
            }else{
                res = nums1[i]
               j++;
            }
        }else{
            res = nums1[i]
            if(i==len1-1){
                j++;
             }else{
                 res = nums2[j]
               i++;
             }
        }
    }while(i+j<mid)
    return res
}
console.log(findMedianSortedArrays([1,3],[2,4]))