// weakMap只接受对象作为键名,其他类型只能作为键值
// weakMap中键名是弱引用,键值不是
let key = {a:1}
let value = {b:1}
let weakMap = new WeakMap([[key,value]])
console.log(weakMap);
weakMap.get(key)

// 以DOM作为键名的场景
{let myElement = document.getElementById('logo');
let myWeakmap = new WeakMap();

myWeakmap.set(myElement, {timesClicked: 0});

myElement.addEventListener('click', function() {
  let logoData = myWeakmap.get(myElement);
  logoData.timesClicked++;
}, false);}
// 上面代码中，myElement是一个 DOM 节点，每当发生click事件，就更新一下状态。我们将这个状态作
// 为键值放在 WeakMap 里，对应的键名就是myElement。一旦这个 DOM 节点删除，该状态就会自动消失，不存在内存泄漏风险。

// 给实例部署私有变量
{const _counter = new WeakMap();
const _action = new WeakMap();

class Countdown {
  constructor(counter, action) {
    _counter.set(this, counter);
    _action.set(this, action);
  }
  dec() {
    let counter = _counter.get(this);
    if (counter < 1) return;
    counter--;
    _counter.set(this, counter);
    if (counter === 0) {
      _action.get(this)();
    }
  }
}

const c = new Countdown(2, () => console.log('DONE'));

c.dec()
c.dec()}