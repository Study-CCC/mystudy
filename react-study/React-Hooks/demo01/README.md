 Hooks
    useState是用来定义设置state值
    useEffect可以代替componetDidMount和componentDidUpdate生命周期函数,useEffect加个return 也可以代替componentWillUnmount.
    useEffect为异步进行的,而componetDidMount和componentDidUpdate为同步进行的.
    useMemo是在页面渲染时进行的,useEffect是在页面渲染后进行的。在useMemo中不能进行setData,否则容易造成死循环。
    useRef 是可以用来修改实例对象和DOM对象,除了传统用法之外还可以“跨渲染周期”保存数据

    多个useState调用(https://zhuanlan.zhihu.com/p/79127886):
    第一次渲染：React 创建元数据对象和Hooks的空数组,调用useState时创建一个新的状态放在索引为0的位置,返回[value,setValue],并对value赋予初始值,将数组索引值加1.第二次调用:React 查看数组第一位,发现为空，创建新的状态放在索引为1的位置,返回[value,setValue],并对value赋予初始值,将数组索引值加1.
    第二次渲染:将索引重置为0,调用useState时发现存在数据,返回[value,setValue],索引+1,第二次调用：查看数组第一位,发现存在值，返回[value,setState]，索引+1
    
    useEffect 在页面渲染前执行一次,渲染后执行一次,若是没有数据渲染,则只执行一次,每调用一次setValue则执行一次useEffect