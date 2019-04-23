import Msite from '../../pages/Msite'
import Search from '../../pages/Search'
import Profile from '../../pages/Profile'
import Order from '../../pages/Order'

export default [
  {
    path:'/msite',
    component:Msite
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/',
    redirect:'/msite',
  }
]
