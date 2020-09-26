export default class Watcher{
    constructor(vm,expOrFn,cb){
        this.vm = vm
        // 之所以使用这个是因为expOrFn是一个字符串
        this.getter = parsePath(expOrFn)
        this.cb = cb
        this.value = this.get()
    }
    get(){
        // 将依赖赋给全局
        window.target = this
        // 通过这个来触发属性的get，从而将window.target收集
        let value = this.getter.call(this.vm,this.vm)
        window.target = undefined
        return value
    }
    update(){
        const oldValue = this.value
        this.value = this.get()
        this.cb.call(this.vm,this.value,oldValue)
    }
}