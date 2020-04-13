var reverseWords = function(s) {
    let arr = [];
    let str=""
    while(s){
        if(s.substr(0,1)==" "){
            if(str!=""){
                arr.push(str)
                str=""
            }
        }else{
            str+=s.substr(0,1)
        }
        s=s.substr(1)
    }
    if(str!="") arr.push(str)
    console.log(arr)
    str = arr.reverse().join(" ")
    return str
};
console.log(reverseWords("the sky is blue"))