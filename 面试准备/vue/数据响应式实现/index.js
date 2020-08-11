let data = {
    name:'cc',
    sex:'gender'
}
let oldProto = Array.prototype
let proto = Object.create(oldProto)
Array.from(['pop','push','shift']).forEach(methods=>{
    proto[methods] = function(){
      oldProto[methods].call(this,...arguments)
      updateView()
    }
})
function observe(target){
    if(typeof target !=='object'||target==null){
        return target
    }
    if(Array.isArray(target)){
        target.__proto__=proto
        return;
    }
    for(let key in target){
        defineData(target,key,target[key])
    }
}
function defineData(target,key,value){
    observe(value)
    Object.defineProperty(target,key,{
        get(){
            return value
        },
        set(newValue){
            if(newValue!==value){
                value = newValue
                updateView()
            }
        }
        
    })
}
function updateView(){
    console.log('update')
}
observe(data)
// data.name = 'cccc'
let arr = [1,,2,3]
observe(arr)