React的几个重要概念
1. 虚拟DOM
     虚拟DOM的目的: 为了实现页面的高效更新
     虚拟DOM和DOM的区别: 
       DOM 为浏览器提供的概念,用JS对象表示,用来表示页面中的元素,并提供了操作元素的API
       虚拟DOM 为框架提供的概念,是用来模拟页面上DOM和DOM的嵌套关系
2. Diff算法  (https://www.jianshu.com/p/cdb4ad82df20)
      三大策略：
        1.Tree Diff
        2.Component Diff
        3.Element Diff    
      三大策略按顺序执行
3. JSX语法: 就是符合xml规范的js与语法

key的作用:https://www.cnblogs.com/miluluyo/p/11215127.html