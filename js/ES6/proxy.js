let pro = new Proxy({
    add:function(val){
        return val
    },
    name:'aaa',},
    {get:function(target,key,property){
        return target[key]='cca'
    },
    set:function(target,key,value){
        return target[key]='ccc'
    }
})
pro.name = '1232'
console.log(pro.name);