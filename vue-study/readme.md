VUE 是目前最火的一个前=前端框架,Vue 的核心库只关注视图层，方便与第三方库或既有项目整合。
1.MVC 和 MVVM 的区别
MVC 是model view control 模型 视图 和
MVVM是Model-View-ViewModel的简写
2.学习了vue中最基本的代码结构
3.插值表达式 v-cloak v-text v-html v-bind v-model v-if v-if v-on
4.事件修饰符 .stop .prevent .capture .self .once
5.el 指定要控制的区域 data 是个对象,指定了控制的区域内要用到的数据  methods 虽然带个s后缀,但是是个对象,这里可以自定义了方法
6.在VM实例中， 如果要访问data上的数据，或者要访问 methods 中的方法，必须带this
7.在v-for要会使用key属性（只接受string/number）
8.v-model只用应用于表单元素
9.在vue中绑定样式两种方式v-bind:class v-bind:style 
vue key的作用:https://www.cnblogs.com/miluluyo/p/11215127.html

computed性能比methods高,computed属性具有缓存功能,在computed里面的数据没有改变时,会使用上次调用的值

runtime-compiler
template -> ast -> render -> vdom ->ui

runtime-only(性能更高,代码量更少)
render -> vdom -> ui

vue-template-compiler 会将vue文件中的template转化为render函数,因此不需要使用runtime-compiler

data(){
    return{
        obj:{
            per:'123'
        }
    }
}

通过this.obj.age = 2添加的数据不具有响应式,需要使用Vue.set(Vue.obj,"age",2)可以使数据具有响应式