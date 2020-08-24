function instanceof1(obj,func){
    if(typeof func !=='function') throw new Error('instance error')
    if(!obj||(typeof obj !== 'object'&&typeof obj !== 'function')) return false
    let funcPro = func.prototype
    let objPro = obj;
    while(objPro.__proto__){
        objPro = objPro.__proto__
        if(objPro==funcPro) return true
    }
    return false
}
function Person(){}
function Person1(){}
let per1  = new Person()
console.log(instanceof1(per1,Person1))