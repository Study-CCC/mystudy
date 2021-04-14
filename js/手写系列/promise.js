const pending = 'onPending'
const fulfill = 'fulfilled'
const reject = 'rejected'
class Promise1{
  constructor(executor) {
    this.value = undefined
    this.reason = undefined
    this.status = pending
    // 采用了发布订阅原理，用数组的话如果多次调用肯定会只执行后一个then，把之前的覆盖掉
    this.fulfillCb = []
    this.rejectCb = []
    let resolve = (value) => {
      setTimeout(() => {
        this.status = fulfill
        this.value = value
        this.fulfillCb.forEach(fn=>fn(value))
      },0)
    }
    let reject = (reason) => {
      setTimeout(() => {
        this.status = reject
        this.reason = reason
        this.rejectCb.forEach(fn=>fn(reason)) 
        },0)
      }
    try {
        executor(resolve,reject)
    } catch (error) {
        reject(error)
    }
  }
  then(onResolve, onReject) {
    return new Promise((_resolve, _reject) => {
      if (this.status === pending) {
        console.log(5345)
        this.fulfillCb.push(() => {
          let val = onResolve(this.value)
          _resolve(val)
        })
        this.rejectCb.push(() => {
          let rea = this.onReject(this.reason)
          _reject(rea)
        })
      }
      if (this.status === fulfill) {
        let val = this.onResolve(this.value)
        _resolve(val)
      }
      if (this.status === reject) {
        let rea = this.onReject(this.reason)
        _reject(rea)
      }
    })
  }
  catch(err) {
   return this.then(undefined,err)
  }
  finally(cb) {
    return this.then(res => Promise1.resolve(cb()).then(() => res), rej => Promise1.reject(cb()).then(()=>{throw rej}))
  }
  static resolve(value) {
    return new Promise(res=>res(value))
  }
  static reject(reason) {
    return new Promise((res,rej)=>rej(reason))
  }
  // all传入空数组会立即完成
  static all(arr) {
    return new Promise((resolve, reject) => {
      let res = []
      let index = 0;
      arr.forEach((fn, i) => {
        Promise.resolve(fn).then(data => {
          res[i] = data;
          index++;
          if(index===arr.length) resolve(res)
        },err=>reject(err))
      })
    })
  }
  // race传入空数组会立即挂掉,arr中出现了第一个结果后，其他当并不会停止执行，只是出结果的会交给then去处理
  static race(arr) {
    return new Promise((resolve, reject) => {
      arr.forEach(fn => {
         // 将fn转化为promise对象来处理，需要返回一个promise对象来进行链式调用
         Promise.resolve(fn).then(data => {
           resolve(data)
         },err=>reject(err))
       })
    })
  }
}

let p = new Promise1((res, rej) => { console.log(111)})
let p1 = new Promise1((res, rej) => { console.log(222);res(1)})
let p2 = new Promise1((res, rej) => {console.log(333)})
let p3 = ()=>111
Promise1.all([p, p1, p2, p3]).then((data) => console.log(data), (data) => console.log(data))

// promise缺陷，就是在进行链式调用的时候，如果在某一段then中缺少了对错误的处理函数，那么这个错误会被这个then传下去，
//  直到有错误处理函数
// new Promise((res, rej) => rej(1)).then().then(()=>{},err=>console.log(err)) 
// 缺陷二，promise是无法取消的，举个例子：比如买了一件商品，付了款，付款就相当于开始了一个pending的promise，但是
// 东西还没收到，相当于还没resolve，这是点击退款，相当于进行cancel，但这时退款流程不能立即生效，只能在resolve
// 后在下个then中在执行reject
// 解决方案：超时取消，使用race，将一个定时器和处理promise放入数组中。
let flag = true;
let p5 = new Promise((res, rej) => {
  setTimeout(() => {
    flag = false;
    rej('cancel')
  },1000)
})
let p6 = new Promise((res, rej) => {
  setTimeout(() => {
    if (flag) {
      // something
      console.log('enter')
      res('success')
    }
  },2000)
})
Promise.race([p5,p6]).then((res)=>console.log(res),(rej)=>{console.log(rej)})


// 多个promise按顺序执行
let quene = (arr) => {
  let sequene = Promise.resolve()
  arr.forEach(item => {
    sequene = sequene.then(item)
  })
  return sequene;
}


let pro = ()=>new Promise1((res, rej) => {
  res(1)
})

Promise.newAll = (arr) => {
  return Promise((resolve, reject) => {
    let len = arr.length
    let res = []
  for (let i = 0; i < len; i++){
    Promise.resolve(arr[i]).then(res => {
      res[i] = res
      if(res.length === len) resolve(res)
    }, rej => reject(rej))
  }
  })
}