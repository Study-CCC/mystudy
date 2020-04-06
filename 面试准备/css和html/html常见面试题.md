1. DOCTYPE 的作用
    使用w3c的标准来解析渲染页面,防止各个浏览器使用自己的解析渲染模式导致页面出现异常

2. HTML和XHTML和HTML5的关系
    XHTML是HTML和XML的过渡阶段,然后XML再过渡到HTML5
3. HTML5有什么变化
    出现了更加语义化的标签,比如nav、article等。
    html5出现的流布局能兼容不同浏览器的分辨率。
    html5在语法上没有那么严格，比如标签名不区分大小写
    有些属性值也不强制要求有,比如required,checked等
4. 语义化的意义
    更便于浏览器对页面结构的解析,以及seo优化
    让代码更有可读性,方便开发人员的阅读
5. HTML和DOM的区别
    HTML属性中的值是不可变的，DOM属性中的值是可变的。
    DOM是浏览器解析HTML得到的
    js可以操作DOM
6. property和attribute的区别
    attribute是DOM节点自带的属性,而property是js获取DOM上的属性值,getAttribute获取的是初始化的值,而property获取的是实时更新的值
7. from的作用
    可以直接提交表单
    有submit和reset方法更便于提交跟修改
    便于浏览器保存数据
    利于第三方库提取整体数据，有了from可以整体提交上去，而不用一个一个的select
8. em 和 i 的区别
    em和i都是斜体,em更侧重于表示强调作用，而i就是纯标签表示斜体，i一般拿来做图标