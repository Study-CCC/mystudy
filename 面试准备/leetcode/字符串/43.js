var multiply = function (num1, num2) {
    if (num1 == 0 || num2 == 0) return '0';
    let len1 = num1.length
    let len2 = num2.length
    let res = []
   for(let i = len1-1;i>=0;i--){
       for(let j=len2-1;j>=0;j--){
           let sum = num1[i]*num2[j]
           let m = len1-i-1
           let n = len2-j-1
            res[m+n] = (res[m+n]||0)+(sum%10)
            console.log(m,n)
            if(sum>=10){
                res[m+n+1]=(res[m+n+1]||0)+((sum-sum%10)/10)
            }
            if(res[m+n]>=10){
                res[m+n]=res[m+n]%10
                res[m+n+1]=(res[m+n+1]||0)+1
            }
            if(res[m+n+1]>=10){
                res[m+n+1]=res[m+n+1]%10
                res[m+n+2]=(res[m+n+2]||0)+1
            }
            console.log(res);
       }
   }
   console.log(res);
    return res.reserve().join('')
};
multiply('999','999')