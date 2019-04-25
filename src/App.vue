<template>
<div>
  <router-view/>
  <Footer v-show="$route.meta.isShowFooter"/>
</div>
</template>

<script>
import Footer from './components/Footer/Footer.vue'
  export default {
    name: 'App',
   async mounted(){
      this.$store.dispatch('getAddress')
     this.$store.dispatch('getCategories')
     this.$store.dispatch('getShops')
    },
    components: {
     Footer
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
