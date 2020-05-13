function test(){
     console.log(this.a);
 }
 var obj2 = {
     a:4,
     test:test
 };
 var obj1 = {
     a:400,
     obj2:obj2
 }
var bar=obj2.test.bind(obj2)//4
bar();
var bar1=obj2.test.call(obj2)//报错
bar1();
var bar2=obj2.test.apply(obj2)//报错
bar2();

关于apply、call、bind
共同点：
1、都用于控制this指向；
2、第一个参数都是this需要指向的对象，也就是上下文；
3、都可以后续参数传递;
4、没有任何参数时，this都指向全局对象window
区别：
1、call、apply绑定后立刻执行，bind是延迟执行。换言之，当你希望改变上下文环境之后并非立即执行，而是回调执行的时候，就使用bind()方法
