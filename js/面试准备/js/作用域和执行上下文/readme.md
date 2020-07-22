什么是作用域?
作用域:作用域是一套规则，用来确定如何查找变量的规则
作用域分为动态作用域和静态作用域，js所使用的作用域是静态作用域，也叫做词法作用域
静态作用域是变量的值取决于书写时所处于的作用域中，动态作用域是变量的值取决于运行时所处于的作用域

什么是作用域链?
作用域链是如果当前作用域没有查找到值，就会往上一层去查找，直到全局作用域，这个查找过程所形成的链叫做作用域链

什么是执行上下文?
每执行一个代码前都会做准备工作，这个准备工作就是执行上下文。
js在执行代码时不是一行一行的执行，而是一段一段的执行。js有三种可执行代码:eval代码，函数代码，全局代码
全局代码是执行上下文只有一个，在客户端中一般由浏览器创建，就是我们熟知的window。
函数代码可存在无数个，每执行一个函数都会创建一个执行上下文，函数的执行上下文储存在执行上下文栈上



执行上下文有三个主要属性:
    1. this
    2. 变量对象
    3. 作用域链

变量对象是与执行上下文相关的数据作用域

```js
var scope = "global scope";
function checkscope(){
    var scope2 = 'local scope';
    return scope2;
}
checkscope();
```
函数执行上下文中的作用域链和变量对象的创建过程
1. 函数被创建,保存作用域链到[[scope]]中
```js
checkscope.[[scope]]={
    VO
}
```
2. 执行checkscope,创建checkscope函数上下文，函数上下文压入到上下文栈中
```js
ECStack=[
    checkscopeContext,
    globalContext
]
```
3. 复制函数属性[[scope]]，创建作用域链
```js
checkscopeContext = {
    Scope: checkscope.[[scope]]
}
```
4. 创建活动对象AO，加入形参，函数声明，变量声明
```js
checkscopeContext = {
    AO:{
        arguments:{
            length:0
        }
         scope2: undefined
    }
    Scope: checkscope.[[scope]]
}
```
5. 将AO对象压入checkscope作用域链顶端
```js
checkscopeContext = {
    AO:{
        arguments:{
            length:0
        }
         scope2: undefined
    }
    Scope: [AO,checkscope.[[scope]]]
}
```
6. 执行代码，修改AO属性值
```js
checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: 'local scope'
    },
    Scope: [AO, [[Scope]]]
}
```
7. 找到scope2，返回函数执行完毕，将checkscopeContext从上下文栈中弹出

```js
ECStack = [
    globalContext
];
```