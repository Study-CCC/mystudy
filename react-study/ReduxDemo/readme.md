 Redux 提供可预测化的状态管理
    thunk 为redux的中间件(https://www.cnblogs.com/chaoyuehedy/p/9713167.html)
    Reducer 必须是纯函数  
        Reducer 必须返回一个新对象:   redux通过浅比较法比较新旧对象是否一致,此比较法比较的是新旧对象的地址,深比较法更消耗性能,当直接
                                     修改state返回时,Redux认为没有改变,故页面不更新
        不得调用非纯函数(如Data.now()和Math.random()):   redux提供的是可预测化的状态管理,调用了非纯函数则不能保证可预测性
 React-redux 
    connect和provider: provider和connect皆为组件,rovider和connect的功能都是通过给自身的属性赋值，将需要的功能传递给子组件，使得子组件也拥有相应的功能,provider和connect都是依赖注入的语法糖，其本质是通过引入第三方组件（这里即是Provider组件），将需要的功能通过属性的形式注入到子组件      