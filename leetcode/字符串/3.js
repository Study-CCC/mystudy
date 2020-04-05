var lengthOfLongestSubstring = function(s) {
    if(s.length==0) return 0 
    let maxLen = 1;
    for(let i=0;i<s.length-1;i++){
        let newStr = s[i]
        for(let j =i+1;j<s.length;j++){
            newStr+=s[j]
            let set = new Set(newStr)
            if(newStr.length==set.size&&set.size>maxLen) maxLen=set.size
            else if(set.size<newStr.length) j=s.length
        }
    }
    return maxLen
};

console.log(lengthOfLongestSubstring("pwwkew"))