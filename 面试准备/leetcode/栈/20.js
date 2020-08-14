var isValid = function(s) {
    if(!s) return true
    let arr = []
    for(let i=0;i<s.length;i++){
        let len = arr.length
        if((s[i]==')'||s[i]==']'||s[i]=='}')&&len>0){
          let value =  Math.abs(s[i].charCodeAt()-arr[len-1].charCodeAt())
          if(value==1||value==2) arr.pop()
          else arr.push(s[i])
        }else arr.push(s[i])
    }
    return arr.length==0?true:false
};
console.log(isValid("]"));