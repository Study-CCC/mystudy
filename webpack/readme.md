- 作用
   webpack 是一个js程序的静态模块打包器,它会分析你的项目结构,
找到js模块以及其他一些浏览器不能直接运行的拓展语言(sass,typescript),
并将其打包成合适的格式以供浏览器的使用
- 使用
   1. npm init(生成一个pakeage.json,用来记录开发中所用到的包)
     创建一个简单的项目
   2. 安装webpack
      npm i webpack  
   3. webpack的打包
      webpack 打包文件名
webpack 4.x 最大特性：约定大于配置  默认打包文件为src中的index.js文件
webpack-dev-server 打包好的main.js是托管到了内存中,所以在项目根目录中看不到,
但是我们可以认为,在项目根目录中,有一个看不到的main.js

处于性能的考虑,dev-server将main.js存到了内存中,用html-webpack-plugin 将html也生成到了内存中,并将main.js导入了html中