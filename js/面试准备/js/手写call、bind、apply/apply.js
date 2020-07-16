Function.prototype.apply1 = function(obj,arr){
    let context = obj||window
    context.fn = this
    let res;
    if(!arr){
       res = context.fn()
    }
    else{
         res = context.fn(...arr)
    }
    delete context.fn
    return res
}
var obj = {
    a:2,
    b:function(a,b,c){
        console.log(this.a,a,b,c)
    }
}
var a = {
    a:3
}
obj.b.apply1(null)