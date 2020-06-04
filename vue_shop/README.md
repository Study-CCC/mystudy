:model
    是v-bind:model的简写,用于将父组件数据传给子组件,并没有实现双向绑定
v-model
    是双向数据绑定
git branch 查看分支
git checkout -b 分支名   创建新分支
git push -u origin 分支名  推送到分支名

question:
 v-model原理
Vue.use原理
Computed原理
key的作用
Diff算法 

设置路由守卫
获取多级子节点的元素可以用递归
过滤器使用


优化:   1.生成打包报告
            可以在ui面板看
        2. 第三方库启用CDN
            通过externals加载外部CDN,在http://www.staticfile.org/ 中可查找相应资源CDN
        3. Element-UI组件按需加载
        4. 路由懒加载
        5. 首页内容定制

nprogress 添加进度条效果

通过axios.defaults进行全局配置
axios拦截器和路由的beforeRouter

process.env.NODE_ENV获取项目所处的环境

通过 vue.config.js 修改 webpack 的默认配置

路由懒加载  使用webpackChunkName

使用compression对静态资源进行压缩

对axios进行封装，若是以后axios不再维护了,只需要修改该封装文件下的axios配置即可

axios拦截器
    请求拦截：
        1. config中一些信息不符合服务器的要求
        2. 每次发送网络请求时，都希望在界面中显示一个请求的图标
        3. 某些网络请求必须携带一些特殊的信息

vue基础学习
<button @click="clickBtn"></button>
clickBtn(event){
    console.log(event)              // 默认传递一个事件
}

手动传入一个event
<button @click="clickBtn($event)"></button>

v-once   让a不会跟着数据的改变而改变
<h2 v-once>{{a}}</h2>

mustache语法为插值操作

v-pre    让标签里面的东西原封不动的展示出来
<h2 v-pre>{{a}}</h2>     //  {{a}}

v-model  双向数据绑定
    radio  有v-model存在时可以不用name值
    checkbox  做单选框时,data需要为Boolean值,做多选框时,data需要为数组类型  
v-model修饰符
    v-modle.lazy="message"    // message不会实时绑定,当敲回车的时候才会绑定
    v-model.number="message"  // 若一开始为数字,则会将message的内容用parseInt()进行处理
    v-model.trim="message"    // 去除两边空格
props:
    props:{
        message: String,
        author: Person,
        age:{
            type:Number,
            default: 18,
            required: true
        }        
    }
router
    hash和history
    hash和history都是前端路由的两种模式,都不会向服务器发出请求
    hash的url存在#,在#后路由改变不会对后端进行影响,但是当刷新时如果没有对应的url则会报404
    history中不存在的#,当刷新时如果没有对应的url则会报404
    <router-link to="/home" tag="button"></router-link> 将这个标签渲染成button按钮标签
    点击router-link会添加两个class
    传递参数的方式
        params方式: /router/:id
            params是针对路由name,this.$router.push({name:'router',params:{a:1}})

        query方式: /router?id=123
            query是针对路由path,this.$router.push({path:'/router',query:{a:1}})

    

$children拿到子组件,$parent拿到父组件,一般不使用$children、$parent,一般使用$refs
$root直接访问Vue组件
修饰符:  @click.stop    阻止冒泡
        @click.prevent 阻止默认事件
        @keyup  监听按键
        @click.once 当第一次点击的时候有效果

this.arr[0]  = 'abc'   // 通过这种方式改变data数组中的值不是响应式的,页面的数据不会因此改变。是因为vue不会监听通过index索引来改变值的
this.arr.splice(0,1,'abc')    
Vue.set(this.arr,0,'abc)   // 可以通过这两种方式来进行对this.arr[0]进行响应式改变

vuex 
    单一状态树:在vuex中,多个store可能会让之后的管理和维护都会变得异常困难.让vuex只有一个store,让一个store管理应用层级的全部状态，方便之后的维护和管理
    getters类似于computed,对state中数据进行计算，getters只接受两个参数,一个是state,一个是getter