const restoreIpAddresses = (s) => { 
    let res = []
    const dfs = (strArr,len)=>{
        if(strArr.length==4&&len==s.length){
            res.push(strArr.join('.'))
            return;
        }else if(strArr.length==4&&len<s.length){
            return
        }
        for(let i=1;i<=3;i++){
            if(len+i>s.length) return
            let str = s.substring(len,len+i)
            if(i!=1&&str[0]=='0') return;
            if(i==3&&str>255) return;
            strArr.push(str)
            dfs(strArr,len+i)
            strArr.pop()
        }
    }
    dfs([],0)
    return res
};
