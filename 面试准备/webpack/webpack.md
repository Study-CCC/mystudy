webpack是一个js开源的模块打包工具,其核心功能是解决各个模块之间的依赖，把各个模块按照特定的规则和顺序组织在一起，最终合并为一个js文件

为什么要有webpack？
 因为当一个应用规模大了后，人工维护代码的成本会很高，这个时候使用webpack工具可以提高效率，更方便的去维护

js中引入多个script文件到页面上会出现很多缺点:
    1. 需要维护script的加载顺序，很多script中存在依赖关系，如果不加注释很难清楚的指出谁依赖了谁，如果引入的script过多很容易出现错误
    2. 加载script需要发起网络请求，在HTTP2还没出现的时候，建立大量的连接的成本是很高的，会严重影响页面的渲染速率
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
        1.确认入口模块的位置?        2.定义chunk name，如果只有一个入口文件，则默认chunk name为main，如果有多个入口，我们需要为每个chunk定义name
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

    单页应用(SPA):对于单页面应用,都是由app.js一个入口进行引用,这样做可以只产生一个js文件，而且依赖关系清楚，
                 但是这样做也有弊端，当全部的引用模块都加载到一个js文件中， 容易导致产生的资源体积大，降低
                 用户的页面渲染速率。假如一个js文件很大，一旦代码更新，我们就要重新下载整份资源文件，这对
                 页面的性能是很不好的。因此我们可以采用提取vendor的方法，将应用中所使用的库、框架等第三方模块
                 包提取出来集中打包bundle。
    多页应用： 对于多页面应用，为了减少资源体积，让每个页面只加载自己页面所需要的模块，我们可以对每个页面分开打包，
              对于多页面应用，我们也可以对各个页面的公共模块进行vendor加载

配置资源出口： 
    对于资源输出的相关配置都在output里面：
        filename(控制输出资源的文件名):
            module.exports = {
                entry: './src/app.js',
                output:{
                    filename:'./js/bundle.js'
                }
            }
            多资源入口：
                 module.exports = {
                entry: {
                    app: './src/app.js',
                    vendor: './src/vendor.js',
                },
                output:{
                    filename:'[name].js'
                }
            }
            控制客户端缓存:[hash]和[chunkhash]都与chunk的内容直接相关,当chunk内容改变时会引起资源文件名的改变
                module.exports = {
                entry: {
                    app: './src/app.js',
                    vendor: './src/vendor.js',
                },
                output:{
                    filename:'[name]@[chunkhash].js'
                }
            }
        path: path指定资源输出的位置,要求值必须为绝对路径
                const path = require('path')
                module.exports = {
                    entry: './src/app.js',
                    output:{
                        filename: 'bundle.js',
                        path:path.join(__dirname,'dist'),
                    }
                }
                在webpack4之后,output默认目录为dist,不必单独配置
        publicPath是用来指定资源的请求位置

预处理器：
    loader: module.exports = {
        ...
        module: {
            rules: [{
                test: /\.css$/,
                use: ['css-loader']
            }],
        }
    }
    test
        接受一个正则表达式或者一个元素为正则表达式的数组，只有正则匹配上的模块才会使用这条规则
    use
        是当匹配上test中的规则时所使用的loader
    css-loader是用来处理css各种加载语法(@import和url()函数等),style-loader是将样式字符串包装成style标签插入到页面的
    loader options
        loader作为预处理器通常会给开发者提供一些配置项，在引入loader的时候可以通过options将它们传入
    exclude与include
        exclude与include是用来排除或包含指定目录下的模块，可接收正则表达式或者字符串（文件绝对路径），以及由它们组成的数组
        exclude的优先级比include优先级更高
    resource与issuer
        resource与issuer可用于更加精确地确定模块规则的作用范围

    在配置loader时，需要考虑的是这些规则对哪些模块有效，这些有效模块所需要的loader
    loader其实是一个函数，第一个loader输出的是源文件，每一个loader的输入是上一个的输出，最后一个loader直接输出给webpack
    常用loader介绍:
        babel-loader:
            安装时使用以下命令  npm install babel-loader @babel/core @babel/preset-env
            各个模块的作用如下: 
                    ·babel-loader：它是使Babel与Webpack协同工作的模块。
                    ·@babel/core：顾名思义，它是Babel编译器的核心模块。
                    ·@babel/preset-env：它是Babel官方推荐的预置器，可根据用户设置的目标环境自动添加所需的插件和补丁来编译ES6+代码。
        ts-loader:
            ts-loader与babel-loader的性质类似，它是用于连接Webpack与Typescript的模块。需要注意的是，Typescript本身的配置并不在ts-loader中，而是必须要放在工程目录下的tsconfig.json中
        html-loader
            html-loader用于将HTML文件转化为字符串并进行格式化，这使得我们可以把一个HTML片段通过JS加载进来。
        file-loader
            file-loader用于打包文件类型的资源，并返回其publicPath。
        url-loader
            url-loader与file-loader作用类似，唯一的不同在于用户可以设置一个文件大小的阈值，当大于该阈值时与file-loader一样返回publicPath，而小于该阈值时则返回文件base64形式编码。
        vue-loader
            vue-loader用于处理vue组件
    自定义loader：
        
    分离样式文件：
        使用单独的css文件导入页面，比起通过style-loader的通过script导入页面更有利于客户端的缓存。Webpack社区有专门的插件用来提取样式到css文件的
            extract-text-webpack-plugin（适用于Webpack 4之前版本）和mini-css-extract-plugin（适用于Webpack 4及以上版本）
            mini-css-extract-plugin是extract-text-webpack-plugin的升级版本,mini-css-extract-plugin支持按需加载
    样式预处理：

    代码分片:
        将首屏加载所需要的代码给分割开来，用于提高首屏渲染速度。
      CommonsChunkPlugin(webpack4之前的模块,4之后替换为了SplitChunks):
      optimization.SplitChunks相比CommonsChunkPlugin功能更强大，操作更简单。
      SplitChunksM默认提取条件:
        1. 提取按需加载的时候，默认并行请求小于等于5，因为我们不希望同时加载多个请求，因为每一个请求都需要建立链接和释放链接的成本
        2. 首次加载的时候，并行请求的最大值小于等于3，页面首次加载往往对性能要求更高，所以这里默认闸值也更低
        3. 提取后的Javascript chunk体积大于30kB（压缩和gzip之前），CSS chunk体积大于50kB。这个也比较容易理解，如果提取后的资源体积太小，那么带来的优化效果也比较一般。
        4. 提取后的chunk可被共享或者来自node_modules目录。这一条很容易理解，被多次引用或处于node_modules中的模块更倾向于是通用模块，比较适合被提取出来。

    生产环境的配置:
            方法1： 使用相同的配置环境，对生产环境进行条件判断从而选择不同的配置
            方法2： 为不同环境创建各自的配置文件，可以为了生产环境单独创建webpack.production.config.js,
            开发环境创建webpack.development.config.js,将两个环境的公共配置提取出来，创建一个webpack.common.config.js