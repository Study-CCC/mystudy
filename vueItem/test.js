async function aaa(){
        await new Promise((resolve, reject)=>{
            let sino = parseInt(Math.random() * 6 +1)
            console.log(123)
            resolve()
        })
        console.log('1212')
}
function b(){
    console.log('bbbb')
}
async function c(){
    await aaa()
    b()
}
c()
// aaa()
// b()
// async function test(){
//     let n =await aaa()
//     console.log(n)
// }
// test()