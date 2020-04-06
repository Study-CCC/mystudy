var longestCommonPrefix = function(strs) {
    let maxStr =""
    for(let i=0;i<strs[0].length;i++){
        let str=strs[0][i]
        maxStr+=str
        for(let j=1;j<strs.length;j++){
            if(str!==strs[j][i]) {
                maxStr = maxStr.substring(0,maxStr.length-1)
                return maxStr
            }
        }
    }
    return maxStr
};
console.log(longestCommonPrefix(
    ["flower","flow","flight"]))