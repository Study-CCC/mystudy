//柯里化就是将接受多个参数的函数转化为接受单一参数的函数并且接受余下参数而且不断返回新函数，直到参数都被使用。

// 柯里化的作用
// 惰性求值，柯里化收到的函数是分步执行的，第一次返回的是新函数，第二次才是进行计算，可以起到延时计算的作用，通过延时计算求值可以达到惰性求值的效果

function Curry(fn, args) {
    let length = fn.length
    args = args || []
    return function () {
        let _args = args.slice(0)
        for (let i = 0; i < arguments.length; i++) {
            _args.push(arguments[i])
        }
        if (length <= _args.length) return fn.apply(this, _args)
        else return Curry.call(this, fn, _args);
    }
}

// 参数复用
function regTest(reg) {
    let reg = reg
    return (value) => {
        reg.test(value)
    }
}

// 关于柯里化的面试题
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;
function add() {
    let arr = Array.prototype.slice.call(arguments)
    function _add() {
        arr.push(...arguments)
        return _add
    }
    _add.toString = function () {
        return arr.reduce((prev, cur) => prev + cur, 0)
    }
    return _add
}