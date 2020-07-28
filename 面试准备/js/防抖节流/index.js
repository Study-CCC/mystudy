// 防抖: 防抖是指在停止触发事件n秒后才执行事件,其中重新触发事件的话,就以最新触发的时间开始计算
function debounce(func,wait,immediate){
    var timer
    return function(){
        // 点击事件参数
        var args = arguments
        var context = this
        clearTimeout(timer)
        if(immediate){
            if(!timer) func.apply(context,args)
            timer =  setTimeout(function(){
               timer = null;
            },wait)
        }else{
            setTimeout(function(){
                func.apply(context,args)
            },wait)
    }}
}
// 应用场景:
//  1. 输入框搜索自动补全

// 节流: 节流是指每隔一段时间才可以执行一次事件
// 方法1:定时器
function throttle(func, wait) {
    var timeout;
    return function() {
        context = this;
        args = arguments;
        if (!timeout) {
            func.apply(context, args)
            timeout = setTimeout(function(){
                timeout = null;
            }, wait)
        }

    }
}
// 方法2: 时间戳
function throttle1(func,wait){
    var previous = 0;
    return function(){
        var now = +new Date()
        var context = arguments
        if(now-previous>=wait){
            func.apply(this,context)
            previous = now
        }
    }

}
// 应用场景: 1.比如下拉菜单要向服务器发送请求时,使用节流可以避免发送过多请求
