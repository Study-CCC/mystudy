var repeatedSubstringPattern = function(s) {
    let s1 = (s+s).slice(1,-1)
    return s1.includes(s)
}