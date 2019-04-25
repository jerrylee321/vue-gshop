<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name">
            <span class="header_search" slot="left">
              <i class="iconfont icon-sousuo"></i>
            </span>
      <span class="header_login" slot="right">
              <span class="header_login_text">登录|注册</span>
            </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categories.length>0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categories,index) in categoryList" :key="index" >
            <a  class="link_to_food" v-for="(category,index) in categories" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com'+ category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt=""v-else>
    </nav>
    <!--首页附近商家-->
    <ShopList/>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
import ShopList from '../../components/ShopList/ShopList'
import Swiper from 'swiper'
import '../../assets/swiper.css'

  export default {

  watch: {

  categories(value){

    this.$nextTick(()=>{

      new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay:true,

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    })
  }
  },
    computed:{
      ...mapState(['address','categories']),

      categoryList(){
        const bigArr = []
          let smallArr = []
        this.categories.forEach(category =>{
          if(smallArr.length === 0){
            bigArr.push(smallArr)
          }
          smallArr.push(category)
          if(smallArr.length === 8){
            smallArr = []
          }
      })

        return bigArr
      }
    },

    components: {
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../assets/mixins.styl"
.msite  //首页
  width 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774

</style>
