    var minimumLengthEncoding = function(words) {
        let S = new Set(words)
        for(let item of S){
            for(let j=1;j<item.length;j++){
                let target = item.slice(j)
                S.has(target)&&S.delete(target)
            }
        }
        let result = 0;
        S.forEach(item=>result=result+item.length+1)
        return result
    };
console.log(minimumLengthEncoding(["time", "me", "bell"]))