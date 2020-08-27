const pending = 'pending'
const fulfilled = 'fulfilled'
const rejected = 'rejected'
const handlePromise = (result, newPromise, resolve, reject) => {
    if (result === newPromise) {
        throw new Error('can not return oneself')
    }
    if ((typeof result === 'object' && typeof result !== null) || typeof result === 'function') {
        let lock = false
        try {
            const then = result.then
            if (typeof then === 'function') {
                then.call(result, (r) => {
                    if(lock) return;
                    handlePromise(r, newPromise, resolve, reject)
                    lock=true
                },
                    (e) => {
                        if(lock) return;
                        lock=true
                        reject(e)
                    })
            } else {
                resolve(result)
            }
        } catch (error) {
            reject(error)
        }
    } else {
        resolve(result)
    }
}
class Promise {
    constructor(executor) {
        this.status = pending
        this.reason = undefined
        this.value = undefined
        // 采用发布订阅模式来解决then中status还是pending的问题
        this.onResolvedArr = []
        this.onRejectedArr = []
        let resolve = (value) => {
            if (this.status == pending) {
                this.status = fulfilled
                this.value = value
                this.onResolvedArr.map(fn => fn())
            }
        }
        let reject = (reason) => {
            if (this.status == pending) {
                this.status = rejected
                this.reason = reason
                this.onRejectedArr.map(fn => fn())
            }
        }
        try {
            executor(resolve, reject)
        } catch (err) {
            reject(err)
        }

    }
    then(onResolve, onReject) {
        onResolve = typeof onResolve === 'function'?onResolve:data=>data;
        onReject = typeof onReject === 'function'?onReject:err=>{
            throw new Error(err)
        };
        const newPromise = new Promise((resolve, reject) => {
            // console.log(this.status)
            if (this.status == fulfilled) {
                console.log('success')
                setTimeout(() => {
                    try {
                        const result = onResolve(this.value)
                        handlePromise(result, newPromise, resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                }, 0)
            } else if (this.status == rejected) {
                setTimeout(() => {
                    try {
                        const result = onReject(this.reason)
                        handlePromise(result, newPromise, resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                }, 0)
            } else {
                console.log('pending');
                this.onResolvedArr.push(() => {
                    try {
                        const result = onResolve(this.value)
                        handlePromise(result, newPromise, resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                })
                this.onRejectedArr.push(() => {
                    try {
                        const result = onReject(this.reason)
                        handlePromise(result, newPromise, resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                })
            }
        })
        return newPromise
    }
    catch(onRejected){
        return this.then(undefined,onRejected)
    }
}
let a = new Promise((resolve, reject) => {
   setTimeout(()=>{
    resolve('ccc')
   },1000)
}).then((res) => {
    console.log(res)
}).then(()=>{
    setTimeout(()=>{
        console.log(11)
    },100)
}).then(()=>{
    console.log(12)
})