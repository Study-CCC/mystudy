React和Vue比较
React.js相对于Vue.js它的灵活性和协作性更好一点，
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
    组件外层包裹原则:在写组件的时候,组件的最外层都需要有一个包裹
    若是布局中不需要最外层的标签,比如flex布局中,可以使用<Fragment>标签
    需要使用import React,{Component,Fragment } from 'react'引入
    使用时直接用<Fragment></Fragment>作为最外层将组件进行包裹
key的作用:https://www.cnblogs.com/miluluyo/p/11215127.html
4. React 生命周期(https://www.jianshu.com/p/b331d0e4b398)
    componentWillMount : 在组件即将被挂载到页面的时刻执行

5. React脚手架  npm i -g create-react-app  
    使用 create-react-app demoName  
    脚手架生成文件目录介绍  
    node_moudles 存放第三方依赖包
    public存放一些公共资源 public/manifest.json 为移动端的一些配置
    src为入口文件 
    .gitignore 为配置git中忽视的文件
6. Redux 提供可预测化的状态管理
    thunk 为redux的中间件(https://www.cnblogs.com/chaoyuehedy/p/9713167.html)
    Reducer 必须是纯函数  
        Reducer 必须返回一个新对象:   redux通过浅比较法比较新旧对象是否一致,此比较法比较的是新旧对象的地址,深比较法更消耗性能,当直接
                                     修改state返回时,Redux认为没有改变,故页面不更新
        不得调用非纯函数(如Data.now()和Math.random()):   redux提供的是可预测化的状态管理,调用了非纯函数则不能保证可预测性
7. React-redux 
    connect和provider: provider和connect皆为组件,rovider和connect的功能都是通过给自身的属性赋值，将需要的功能传递给子组件，使得子组件也拥有相应的功能,provider和connect都是依赖注入的语法糖，其本质是通过引入第三方组件（这里即是Provider组件），将需要的功能通过属性的形式注入到子组件      

    
坑1：
  //删除单项服务
    deleteItem(index){
        this.state.list.splice(index,1)
        this.setState({
            list:this.state.list
        }) 
    }  
记住React是禁止直接操作state的,虽然上面的方法也管用,但是在后期的性能优化上会有很多麻烦,所以一定不要这样操作
正确方式：
//删除单项服务
    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }