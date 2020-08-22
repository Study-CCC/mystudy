// 观察者模式简单实现
class Observer {
    constructor(name){
        this.name = name
    }
    update() {
        console.log(`name is ${this.name}`)
    }
}
class subject{
    constructor(){
        this.subs=[]
    }
    add(observe){
        this.subs.push(observe)
    }
    notify() {
        this.subs.forEach(item => {
          item.update();
        });
      }
}
const sub = new subject();
const ob1 = new Observer('ob1');
const ob2 = new Observer('ob2');

// 观察者订阅目标
sub.add(ob1);
sub.add(ob2);

// 目标触发事件
sub.notify();

// 发布订阅简单实现
class Event {
    constructor(){
        this.lists = new Map()
    }
    $on(type,fn){
        if(!this.lists.get(type)){
            this.lists.set(type,[])
            
        }
        this.lists.get(type).push(fn)
    }
    $emit(type,...args){
        let fn = this.lists.get(type)
        fn&&fn.forEach(item=>item.apply(null,args))
    }
}
const ev = new Event()
ev.$on('msg',(a)=>{
    console.log(a)
})
ev.$emit('msg',1,2)