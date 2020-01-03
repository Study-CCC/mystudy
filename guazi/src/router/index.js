import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import wantBuy from '@/pages/wantBuy'
import wantSell from '@/pages/wantSell'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/buy',
      name:'Buy',
      component:wantBuy
    },
    {
      path:'/sell',
      name:'Sell',
      component:wantSell
    }
  ]
})
