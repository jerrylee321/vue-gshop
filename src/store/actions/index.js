
import {reqAddress, reqCategories, reqShops} from '../../api'
import {RECEIVE_ADDRESS,RECEIVE_CATEGORIES,RECEIVE_SHOPS} from '../mutations/mutation-types'


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

  }
}
