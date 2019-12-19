function move2(obj, json, fn) {
    clearInterval(obj.timer)
    obj.timer = setInterval(() => {
        var flag = true;
        for (var attr in json) {
            var speed = 0;
            if (attr == 'opacity') {
                speed = ((json[attr]*100 - getComputedStyle(obj)[attr] * 100) > 0 ?
                Math.ceil((json[attr]*100 - getComputedStyle(obj)[attr] * 100)) : Math.floor((json[attr]*100 - getComputedStyle(obj)[attr] * 100))) / 10
            obj.style[attr] = (getComputedStyle(obj)[attr] * 100 + speed) / 100
            }
            else {
                speed = ((json[attr] - parseInt(getComputedStyle(obj)[attr])) > 0 ?
                Math.ceil((json[attr] - parseInt(getComputedStyle(obj)[attr]))/ 10) : Math.floor((json[attr] - parseInt(getComputedStyle(obj)[attr])))/ 10) 
            obj.style[attr] = parseInt(getComputedStyle(obj)[attr]) + speed + 'px'
                console.log(obj.style[attr])
            }
            if (parseInt(obj.style[attr]) != json[attr])
                flag = false
        }
        if(flag)
        {clearInterval(obj.timer)
        fn()}
    }, 30)

}
