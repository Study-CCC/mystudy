webpack是一个js开源的模块打包工具,其核心功能是解决各个模块之间的依赖，把各个模块按照特定的规则和顺序组织在一起，最终合并为一个js文件

为什么要有webpack？
 因为当一个应用规模大了后，人工维护代码的成本会很高，这个时候使用webpack工具可以提高效率，更方便的去维护

js中引入多个script文件到页面上会出现很多缺点:
    1. 需要维护script的加载顺序，很多script中存在依赖关系，如果不加注释很难清除的指出谁依赖了谁，如果引入的script过多很容易出现错误
    2. 加载script需要发起网络请求，在HTTP2还没出现的时候，建立大量的连接的成本的很高的，会严重影响页面的渲染速率
    3. 在script中顶层作用域即是全局作用域，如果没有任何处理而直接在代码中进行声明变量很容易造成全局污染
模块化解决了上面的问题：
    1. 通过导入导出很清楚的可以看出谁依赖了谁
    2. 模块可以借助工具进行打包，在页面中只需要加载合并后的资源，减少了网络的开销
    3. 多个模块中的各个作用域是分开的，不存在干扰

webpack的优势：
    1. webpack支持多种模块标准，包括AMD，CommonJS,以及最新的ES6模块
    2. webpack有完备的代码分割解决方案，就是它可以分割打包后的资源，首屏只加载必要的部分，不大重要的功能放到后面加载，可以有效减小资源体积，
        提高首屏渲染速度
    3. webpack可以处理各种类型的资源
    4. webpack有强大的社区支持

webpack-dev-server的作用: 
    webpack可以看作一个服务者，当浏览器发来url请求时，webpack-dev-server会先让webpack打包好资源，然后对url资源请求进行解析，如果url资源请求为publicPath中的，则返回打包资源，否则就返回磁盘中所请求路径的资源
    即两大职能为： 1. 让webpack打包资源
                  2. 处理静态资源请求
    直接用webpack开发和使用webpack-dev-server有一个很大的区别,前者每次都会生成bundle.js，而webpack-dev-server只是将打包结果放在内存中，并不会写入实际的bundle.js
    webpack-dev-server还有自动刷新功能

模块打包原理



webpack 资源处理流程
    在流程的开始需要一个或者多个入口，也就是告诉webpack从哪个目录下开始进行打包，根据入口可以打包出一个或者多个chunk。
    webpack通过context和entry这两个配置项来共同决定入口文件的路径：
        1.确认入口模块的位置
        2.定义chunk name，如果只有一个入口文件，则默认chunk name为main，如果有多个入口，我们需要为每个chunk定义name
    context:
        // context 可以省略,默认值为当前工程的总目录
        // 以下的两种配置入口都为/src/script/index.js
            module.exports = {
                context: path.join(__dirname,'./src'),
                entry: './scripts/index.js,
            },
            module.exports = {
                context: path.join(__dirname,'./src/scripts'),
                entry: './index.js
            }
    entry:
        entry的配置有多种形式,有:字符串、数组、对象、函数
        1. 字符串类型入口: module.exports = {
            entry: './src/index.js',
            output: {
                filename: 'bundle.js',
            },
            mode: 'development',
        };
        2. 数组类型入口: module.exports = {
            entry:['babel-polyfill','./src/index,js'],
        };
        上面的配置等同于: 
        // webpack.config.js
        module.exports = {
            entry: './src/index.js'
        };
        // index.js
        import 'babel-polyfill'
        3. 对象类型入口: module.exports = {
            entry:{
                // chunk name 为index,入口路径为./src/index.js
                index:'./src/index.js',
                // chunk name 为lib,入口路径为./src/lib.js
                lib:'./src/lib.js'
            }
        }
        4. 函数类型入口: module.exports = {
            entry: ()=>'./src/index.js'
        }

    单页应用:  