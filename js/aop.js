function say(){
    console.log('说话');
}

Function.prototype.before=function(fn){
    let that = this;
    // console.log(that);
    return function(){
        fn()
        that()
    }
}
let newFn = say.before(function(){
    console.log('遗言');
})
newFn()