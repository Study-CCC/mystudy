var hasGroupsSizeX = function(deck) {
    let len = deck.length
    let flag=[]
    if(len<2){
        return false
    }
    else if(len==2){
        return deck[0]==deck[1]?true:false
    }
    else{
        let i = 0
        while(0<len){
            if(deck.indexOf(deck[len-1])==len-1){
                deck.pop()
                i++;
               flag.push(i)
               i=0;
            }
            else if(deck.indexOf(deck[len-1])!=len-1){
                i++;
                deck.splice(deck.indexOf(deck[len-1]),1)
            }
            len--;

        }
        console.log(flag)
        for (let i =0;i<flag.length-1;i++){
            if(!f(flag[i],flag[i+1])) 
               {return false} 
        }
        return true
    }
};
function f(num1, num2){
    for(i = Math.min(num1, num2); i > 0; i--){
    if(num1%i == 0 && num2%i == 0&&i>1)
    {
        return true;
    }
    
    }
    return false
    }
console.log(hasGroupsSizeX([1,1,2,2,2,3,3,3,3,3,3]))