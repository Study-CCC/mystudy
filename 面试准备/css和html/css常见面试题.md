1. 浏览器解析css样式选择器是如何解析的?
    浏览器解析css选择器是从右向左解析的，因为左边的选择器可能范围很大，比如body这种的，从右解析就把范围一下子缩小了，这样渲染速度也更快
2. 选择器权重
    选择器权重是指样式的优先级,在css中 ！important 10000>内联样式 1000>id选择器 100>类选择器 10>标签选择器 1>其他选择器(通用选择器（*）、子选择器（>）、相邻选择器（+）、同胞选择器（~）) 0
    但是选择器的值是不进位的,11个标签选择器的样式还是覆盖不了id选择器的样式,相同权重下后写的样式会覆盖前面的
3. base64、雪碧图
    base64和雪碧图都能减少网络请求,但是base64不利于维护,增大了css体积跟编码难度
    base64是一种编码方式，主要应用于url,cookie参数传递中文、二进制文件以及图片时可以使用。
4. 伪元素跟伪类的区别
    伪元素为选择匹配指定状态的元素，例如: :last-child、:hover,:active,伪元素为选择元素指定内容的，例如: ::before,::after
5. 如何用一个div实现xxx
    使用box-shadow或者::after  ::before
6. 如何产生不占空间的边框
    1. box-shadow
    2. outline
7. 如何实现3D效果
    perspective:500px
    transform-style:preserve-3d
    transform:translate rotate...
8. 过渡动画跟关键帧动画
    过渡动画是需要状态改变的，
    而关键帧动画不需要状态改变，关键帧动画可以控制的更精细
9. bootstrap优缺点?
    优点:可以直接使用定制好的样式,效率更高，布局更加改变
    缺点:需要导入大量样式，文件体积增大
10. 如何利用bootstrap实现响应式布局
    对不同分辨率选择不同的网格class,原理是通过media query设置不同分辨率的class
11. 如何使用bootstrap定制自己的样式
    1. 使用重名css样式进行覆盖
    2. 修改源代码
12. 如何解决CSS模块化问题
    1. 使用postcss，postcss中有许多插件可以对css进行处理
    2. 使用sass和less
    3. 使用webpack，webpack中有css-loader和style-loader可以对css进行处理
13. postcss可以做什么
    postcss是将css进行编译处理转化为css，postcss可以做什么取决于里面的插件可以做什么，
    postcss常用的插件有autoprefixer是给css的某些样式补上前缀的，可以用来处理兼容性问题
    cssnext是将更高级的css语法转化为浏览器识别的css，类似于babel对js的编译处理

14. css模块化的作用
    1. 解决css的命名冲突，避免全局污染
    2. 可以复用代码
    3. 让css层级结构更加清晰
15. 为什么要用js来引用、加载css
        js作为项目的入口，更好的管理css，
        将组件的样式结构行为发在一起，增强内聚性
        可以做更多的处理(webpack)
16. 如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？

17. css3新特性

18. 请解释一下CSS3的flexbox（弹性盒布局模型）,以及适用场景？

19. CSS里的visibility属性有个collapse属性值？在不同浏览器下以后什么区别？