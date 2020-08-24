// 暴力法
var countBinarySubstrings = function(s) {
    let res=0;
    for(let i=0;i<s.length-1;i++){
        let startStr = s[i]
        let firstNum = 1;
        let secondNum = 0
        for(let j=i+1;j<s.length;j++){
            if(s[j]==startStr&&secondNum==0) firstNum++;
            else if(s[j]==startStr&&secondNum!=0)  break; 
            else secondNum++;
            if(firstNum==secondNum){
                res++;
                break;
            }
        }
    }
    return res;
};

// 按字符分组
var countBinarySubstrings1 = function(s) {
    let res=0;
    let strArr = []
    let lastStr = s[0]
    let num = 1;
    for(let i=1;i<s.length;i++){
        if(lastStr==s[i]) num++
        else{
            strArr.push(num)
            num=1;
            lastStr=s[i]
        }
    }
    strArr.push(num)
    for(let i=1;i<strArr.length;i++){
        res+=Math.min(strArr[i-1],strArr[i])
    }
    return res
}
console.log(countBinarySubstrings1('00110011'));
