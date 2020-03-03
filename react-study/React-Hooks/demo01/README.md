 Hooks
    useState是用来定义设置state值
    useEffect可以代替componetDidMount和componentDidUpdate生命周期函数,useEffect加个return 也可以代替componentWillUnmount.
    useEffect为异步进行的,而componetDidMount和componentDidUpdate为同步进行的.
    useMemo是在页面渲染时进行的,useEffect是在页面渲染后进行的。在useMemo中不能进行setData,否则容易造成死循环。
    useRef 是可以用来修改实例对象和DOM对象,除了传统用法之外还可以“跨渲染周期”保存数据