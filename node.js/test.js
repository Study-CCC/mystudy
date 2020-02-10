var p1 = new Promise((res,rev)=>{
    setTimeout(()=>{
        console.log(1);
        res()
    },10)
})
p1.then(()=>{
    console.log(2);
    // return 111
}).then((data)=>{
    console.log(11);
    
})