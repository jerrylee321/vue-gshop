import Msite from '../../pages/Msite'
import Search from '../../pages/Search'
import Profile from '../../pages/Profile'
import Order from '../../pages/Order'
import Login from '../../pages/Login/Login'

export default [
  {
    path:'/msite',
    component:Msite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/search',
    component:Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/order',
    component:Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/login',
    component:Login,
  },
  {
    path:'/',
    redirect:'/msite',
  }
]
