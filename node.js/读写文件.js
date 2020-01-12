const fs = require('fs')
fs.readFile('./a.txt',(error,data)=>{
    console.log(data.toString());
})
fs.writeFile('./a.txt',"1234",error=>{
    // console.log(error);
    
})