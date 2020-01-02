// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

// 将axios 挂载到vue 的原型链上,所有vue 实例都可以使用
Vue.prototype.$http = Axios

Vue.config.productionTip = false
Vue.prototype.changeType = (arr) => {
  var result = arr.split('|');
  result.shift();
  return result
}
// Vue.prototype.hoverBtn = (obj,flag,childrenDiv)=>{
//   obj.addEventListener("mouseenter",()=>{
//     flag = true;
//     console.log(flag)
//   })
//    obj.addEventListener("mouseleave",()=>{
//      console.log(1234)
//     obj.timer=null;
//     obj.timer=setTimeout(()=>{
//       this.flag = false
//     },300)
//      childrenDiv.addEventListener("mouseenter",()=>{
//       this.flag = true;
//       clearTimeout(obj.timer)
//     })
//      childrenDiv.addEventListener("mouseleave",()=>{
//       this.flag=false
//     })
//   })
// }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
