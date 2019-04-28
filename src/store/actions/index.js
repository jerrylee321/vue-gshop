
import {
  reqAddress,
  reqCategories,
  reqgetUser,
  reqlogout,
  reqShops,
} from '../../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
} from '../mutations/mutation-types'


export default {

  async getAddress({commit,state}) {

    const {longitude,latitude} = state;
    //发请求
    const result=await reqAddress(longitude,latitude)
    // 获取数据
    if(result.code === 0){
      //请求成功
      const address = result.data

      commit(RECEIVE_ADDRESS,address)
    }

  },
  async getCategories({commit}) {

    //发请求
    const result=await reqCategories()
    // 获取数据
    if(result.code === 0){
      //请求成功
      const categories = result.data

      commit(RECEIVE_CATEGORIES,categories)
    }

  },
  async getShops({commit,state}) {
    const {longitude,latitude} = state;
    //发请求
    const result=await reqShops({longitude,latitude})
    // 获取数据
    if(result.code === 0){
      //请求成功
      const shops = result.data

      commit(RECEIVE_SHOPS,shops)
    }

  },

  async getUser({commit}) {

    //发请求
    const result=await reqgetUser()
    // 获取数据
    if(result.code === 0){
      //请求成功
      const user = result.data

      commit(RECEIVE_USER,user)
    }

  },
  async Logout({commit}) {

    //发请求
    const result=await reqlogout()
    // 获取数据
    if(result.code === 0){

      commit(RESET_USER)
    }

  },
 /* async getGoods({commit}) {

    //发请求
    const result=await reqGoods()
    // 获取数据
    if(result.code === 0){
       const goods = result.data
      commit(RECEIVE_GOODS,{goods})
    }

  },
  async getRatings({commit}) {

    //发请求
    const result=await reqRatings()
    // 获取数据
    if(result.code === 0){
      const ratings = result.data
      commit(RECEIVE_GOODS,{ratings})
    }

  },
  async getInfo({commit}) {

    //发请求
    const result=await reqInfo()
    // 获取数据
    if(result.code === 0){
      const info = result.data
      commit(RECEIVE_GOODS,{info})
    }

  }*/
}
