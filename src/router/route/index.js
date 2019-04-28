import Msite from '../../pages/Msite'
import Search from '../../pages/Search'
import Profile from '../../pages/Profile'
import Order from '../../pages/Order'
import Login from '../../pages/Login/Login'
import Shops from '../../pages/shops'
import Goods from '../../pages/shops/Goods'
import Ratings from '../../pages/shops/Ratings'
import Info from '../../pages/shops/Info'

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
    path:'/shops',
    component:Shops,
    children:[
      {
        path:'/shops/goods',
        component:Goods,
      },
      {
        path:'/shops/ratings',
        component:Ratings,
      },
      {
        path:'/shops/info',
        component:Info,
      },
      {
        path:'',
        redirect:'/shops/goods',
      }
    ]
  },
  {
    path:'/',
    redirect:'/msite',
  }
]
