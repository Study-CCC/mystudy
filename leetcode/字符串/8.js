var myAtoi = function(str) {
    str = str.replace(/^\s*/g,"")
    let MAXNUM = 2**31-1
    let MINNUM = 2**(31)
    let num=0;
    let flag = 0
    if(str[0]=='-'){
        flag = 1
        str=str.substr(1)
    }else if(str[0]=='+'){
        flag=0
        str=str.substr(1)
    }
    str = str.replace(/^0*/,"")
    num=str.match(/^\d*/g)[0]
    if(flag==1){
        if(num.length>MINNUM.toString().length)
        {
            return -MINNUM}
        else if(num.length==MINNUM.toString().length){
           if(num>=MINNUM.toString()){
            return -MINNUM
           }else{
               return -Number(num)
           }
        }
        else{
            return -Number(num)
        }
    }else{
        if(num.length>MAXNUM.toString().length)
        {return MAXNUM}
        else if(num.length==MAXNUM.toString().length){
           if(num>=MAXNUM.toString()){
            return MAXNUM
           }else{
               return Number(num)
           }
        }
        else{
            return Number(num)
        }
    }
};
console.log(myAtoi("   +0 123"))