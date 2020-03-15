import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Article from '../pages/Article'
let routeConfig = [
    { path: '/', exact: true, component: Home },
    { path: '/login', exact: false, component: Login },
    { path: '/register', exact: false, component: Register },
    { path: '/article/:id', exact: false, component: Article }

]
export default routeConfig