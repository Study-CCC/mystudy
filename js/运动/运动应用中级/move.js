function starMove(obj, style, value,fn) {
    var speed;
    clearInterval(obj.timer)
    obj.timer = setInterval(() => {
        if (style == 'opacity') {
            speed = ((value*100 - getComputedStyle(obj)[style] * 100) > 0 ?
                Math.ceil((value*100 - getComputedStyle(obj)[style] * 100)) : Math.floor((value*100 - getComputedStyle(obj)[style] * 100))) / 10
            obj.style[style] = (getComputedStyle(obj)[style] * 100 + speed) / 100
        }
        else {
            speed = ((value - parseInt(getComputedStyle(obj)[style])) > 0 ?
                Math.ceil((value - parseInt(getComputedStyle(obj)[style]))/ 10) : Math.floor((value - parseInt(getComputedStyle(obj)[style])))/ 10) 
            obj.style[style] = parseInt(getComputedStyle(obj)[style]) + speed + 'px'
        }
        if(parseInt(obj.style[style])==value||obj.style[style]==value)
        {
            if(fn) fn()
        }
    }, 30)
}