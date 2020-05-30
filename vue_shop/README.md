:model
    是v-bind:model的简写,用于将父组件数据传给子组件,并没有实现师兄师姐绑定
v-model
    是双向数据绑定
git branch 查看分支
git checkout -b 分支名   创建新分支
git push -u origin 分支名  推送到分支名

question1  v-model原理


设置路由守卫
获取多级子节点的元素可以用递归
过滤器使用

Vue.use原理
Compute原理

优化:   1.生成打包报告
            可以在ui面板看
        2. 第三方库启用CDN
            通过externals加载外部CDN,在http://www.staticfile.org/ 中可查找相应资源CDN
        3. Element-UI组件按需加载
        4. 路由懒加载
        5. 首页内容定制

nprogress 添加进度条效果

axios拦截器和路由的beforeRouter

process.env.NODE_ENV获取项目所处的环境

通过 vue.config.js 修改 webpack 的默认配置

路由懒加载  使用webpackChunkName

使用compression对静态资源进行压缩