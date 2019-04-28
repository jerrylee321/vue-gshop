import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO ,
  RECEIVE_RATINGS
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state, address) {
    // 变更状态
    state.address = address
  },
  [RECEIVE_CATEGORIES](state, categories) {
    state.categories = categories
  },
  [RECEIVE_SHOPS](state, shops) {
    state.shops = shops
  },
  [RECEIVE_USER](state,user) {
    state.user = user
  },
  [RESET_USER](state) {
    state.user = {}
  },
  [RECEIVE_GOODS](state,{goods}) {
    state.goods = goods
  },
  [RECEIVE_RATINGS](state,{ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_INFO](state,{info}) {
    state.info = info
  },
}
