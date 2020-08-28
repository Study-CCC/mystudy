const pending = 'pending'
const fulfilled = 'fulfilled'
const rejected = 'rejected'
const typeFunc = value => typeof value === 'function'
class Promise {
    constructor(executor) {
        this.status = pending
        this.reason = undefined
        this.value = undefined
        // 采用发布订阅模式来解决then中status还是pending的问题
        this.onResolvedArr = []
        this.onRejectedArr = []
        let resolve = value => {
            if (this.status == pending) {
                let run = () => {
                    /* 如果resolve的参数为Promise对象，则必须等待该Promise对象状态改变后,
                    当前Promsie的状态才会改变，且状态取决于参数Promsie对象的状态
                    */
                    if (value instanceof Promise) {
                        value.then(value => {
                            this.value = value
                            this.onResolvedArr.map(fn => fn())
                        }, err => {
                            this.reason = err
                            this.onRejectedArr.map(fn => fn())
                        })
                    } else {
                        this.value = value
                        this.onResolvedArr.map(fn => fn())
                    }
                }
                setTimeout(run, 0)
            }
        }
        let reject = err => {
            if (this.status == pending) {
                let run = () => {
                    this.status = rejected
                    this.reason = err
                    this.onRejectedArr.map(fn => fn())
                }
                setTimeout(run, 0)
            }
        }
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onResolve, onReject) {
        return new Promise((_resolve, _reject) => {
            let onResolveRun = () => {
                try {
                    if (typeFunc(onResolve)) {
                        let res = onResolve(this.value)
                        if (res instanceof Promise) {
                            res.then(res => _resolve(res))
                        } else {
                            _resolve(res)
                        }
                    } else {
                        _resolve(this.value)
                    }
                } catch (error) {
                    _reject(error)
                }
            }
            let onRejectRun = () => {
                try {
                    if (typeFunc(onReject)) {
                        let res = onReject(this.reason)
                        if (res instanceof Promise) {
                            res.then(undefined, res => _reject(res))
                        } else {
                            _reject(res)
                        }
                    } else {
                        _reject(this.reason)
                    }
                } catch (error) {
                    _reject(error)
                }
            }
            if (this.status == fulfilled) {
                onResolveRun()
            } else if (this.status == rejected) {
                onRejectRun()
            } else if (this.status == pending) {
                this.onResolvedArr.push(onResolveRun)
                this.onRejectedArr.push(onRejectRun)
            }
        })
    }
    catch(err){
        return this.then(undefined,err)
    }
    finally(cb){
        return this.then(res=>Promise.resolve(cb()).then(()=>res),
        reason=>Promise.resolve(cb()).then(()=>{throw reason}))
    }
    static all(list) {
        return new Promise((resolve,reject)=>{
            let values = []
            let len = list.length
        for(let i in list){
            // 判断list[i]是否是promise
            this.resolve(list[i]).then(res=>{
                values[i]=res
                len--;
                if(len==0) resolve(values)
            },err=>reject(err))
        }
        })
    }
    static race(list){
        return new Promise((resolve,reject)=>{
            for(let p of list){
                this.resolve(p).then(res=>resolve(res),err=>reject(err))
            }
        })
    }
    static resolve(value) {
        return value instanceof Promise || (value && typeFunc(value.then)) ? value : new Promise(res => res(value))
    }
    static reject(err){
        return new Promise((res,rej)=>rej(err))
    }

}
new Promise((res, rev) => {
    res(1)
}).then(res => {
    console.log(res)
}).then(res => {
    console.log('3')
})
console.log(123)