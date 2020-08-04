Event Loop
    eventLoop是一种执行机制,由于js是单线程的,在单线程中如果遇到要从远端获取数据这种比较耗时的操作的话,
    需要等获取到数据后才会继续执行接下来的代码,如果获取时间过长会严重影响用户的体验,因此js中便采用了eventLoop
    来解决这个问题

宏任务和微任务
    宏任务,一些异步任务的回调会依次进入macro task queue,等待后续被调用
    包括:  setTimeout  setInterval  setImmediate  requestAnimationFrame I/O
    微任务,一些异步任务的回调会依次进入micro task queue
    包括: promise object.observe

事件循环机制
    1. 执行全局script代码
    2. 执行完毕后清空栈stack
    3. 开始执行微任务,从微任务队首的回调任务,放入调用栈中执行,执行完毕后队列长度减1
    4. 不断执行微任务队列中回调,直到清空为止,此时微任务中若产生了新的微任务则会加到微任务队列中,同时期执行
    5. 在微任务队列清空后,再执行宏任务队首的任务
    6. 不断重复3-5,直到宏任务和微任务都清空

    执行顺序: 全局代码->微任务->UI render-> 执行下一次宏任务-> 微任务 -> UI render....
    ui render不一定会执行,要考虑ui渲染消耗的性能以及ui有没有变动

```js
console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3)
  });
});

new Promise((resolve, reject) => {
  console.log(4)
  resolve(5)
}).then((data) => {
  console.log(data);
  
  Promise.resolve().then(() => {
    console.log(6)
  }).then(() => {
    console.log(7)
    
    setTimeout(() => {
      console.log(8)
    }, 0);
  });
})

setTimeout(() => {
  console.log(9);
})

console.log(10);
```
输出:  1 4 10 5 6 7 2 3 9 8 
过程:https://segmentfault.com/a/1190000016278115
