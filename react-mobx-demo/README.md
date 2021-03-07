mobx
  observable:
  autorun:
  computed:
  when:
  reaction:

  mobx-react的修饰器为react实现了componentShouldUpdate
  在react中使用setState并不能立即拿到更新的值，虽然可以使用setState中的回调函数，
  但是仍是异步的形式。在mobx中可以使用observable属性来代替state,可以立马拿到更新后的值,
  而且observe会做一些优化，避免了重复的渲染
  compute和autorun都是其中的任意一个属性发生变化就会发生变化
  compute用来产生一个新值，autorun一般用于产生一些副作用
  reaction 接受两个参数，第一个参数为数据函数，用来追踪数据的变化，第二个参数为效果函数，当第一个函数的返回数据改变后会触发第二个函数的运行，初始化数据的时候第二个函数不会触发

  reaction和action都会返回一个disposer函数，可以通过这个函数来取消reaction和action

  const disposer = action(()=>console.log(this.count))
  disposer() //取消action

  when第一个参数为一个函数返回一个布尔值，当返回true时则执行第二个参数效果函数，这个when只执行一次，当执行完毕后会自行销毁

  computed 和 autorun的区别
    computed 返回一个新值，autorun主要用于产生效果
    computed中的值如果不再被观察的话，mobx会自动将它清除
    autorun的则需要使用返回的disposer进行手动清除

应用场景：
  action用于修改store中的数据,在action多次修改的数据只会进行一次渲染,runInAction(f)是action(f)的语法糖
  autorun 和 computed 用于监听被观察的数据,autorun主要用于产生效果，computed主要用于产生新值
  reaction主要用于分离数据监听和效果，第一个参数为监听的数据，第二个参数为产生的效果
  when使用于只需要一次判断的地方，第一个参数为返回一个boolean值的函数，当这个函数为true时执行第二个函数
  很多使用对象或者数组的地方需要使用tojs将被mobx包装的对象转化为js对象，否则可能会被识别不了
  比如:
    <p style={store.style}>hello</p> // 这种写法会报错，因为store.style被包装成proxy对象了
    // 正确写法
    <p style={toJS(store.style)}>hello</p>