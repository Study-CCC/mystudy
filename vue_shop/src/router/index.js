import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Users from '../components/users/users'
import Right from '../components/power/Right'
import Roles from '../components/power/Roles'
import Cate from '../components/goods/Cate'
import Params from '../components/goods/Params'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {path: '/home',component: Home,redirect:'/welcome',children:[
    {
      path: '/welcome',
      component:Welcome
    },
    {
      path: '/users',
      component:Users
    },
    {
      path: '/rights',
      component: Right
    },
    {
      path:"/roles",
      component:Roles
    },
    {
      path:'/categories',
      component:Cate
    },
    {
      path:'/params',
      component:Params
    }
  ]}
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.path == '/login') return next()
  const tokenStr = window.sessionStorage.getItem("token")
  if(!tokenStr) return next('/login')
  next()
})

export default router
