<template>
  <div>
    <ShopHeader/>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shops/goods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shops/ratings" replace>评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/shops/info' replace>商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader'
import {reqGoods,reqInfo,reqRatings} from "../../api";
import {RECEIVE_GOODS,RECEIVE_INFO,RECEIVE_RATINGS} from "../../store/mutations/mutation-types";

export default {
    name: 'Shops',
    components: {ShopHeader},
   async mounted(){
      //一次发多个请求
    const values =  await Promise.all([reqGoods(),reqRatings(),reqInfo()])
     const goods =values[0].data
     const ratings =values[1].data
     const info =values[2].data
     //提交到mutation,将获取到的数据更新界面
     this.$store.commit(RECEIVE_GOODS,{goods})
     this.$store.commit(RECEIVE_RATINGS,{ratings})
     this.$store.commit(RECEIVE_INFO,{info})
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/mixins.styl'
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>
