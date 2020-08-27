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
                        this.status = fulfilled
                        this.value = value
                        this.onResolvedArr.map(fn => fn())
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
            executor(resolve,reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onResolve,onReject){
        return new Promise((_resolve,_reject)=>{
            let onResolveRun = ()=>{
                try {
                    if(typeFunc(onResolve)){
                        let res = onResolve(this.value)
                        if(res instanceof Promise){
                            res.then(res=>_resolve(res))
                        }else{
                            _resolve(res)
                        }
                       }else{
                           _resolve(this.value)
                       }
                } catch (error) {
                    _reject(error)
                }
            }
            let onRejectRun = ()=>{
                try {
                    if(typeFunc(onReject)){
                        let res = onReject(this.reason)
                        if(res instanceof Promise){
                            res.then(undefined,res=>_reject(res))
                        }else{
                            _reject(res)
                        }
                       }else{
                        _reject(this.reason)
                       }
                } catch (error) {
                    _reject(error)
                }
            }
            if(this.status==fulfilled){
                onResolveRun()
            }else if(this.status==rejected){
                onRejectRun()
            }else if(this.status==pending){
                this.onResolvedArr.push(onResolveRun)
                this.onRejectedArr.push(onRejectRun)
            }
        })
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