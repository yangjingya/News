<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="isRouterAlive"></router-view>
    </keep-alive>
    <tab></tab>
  </div>
</template>

<script>
import Tab from 'components/tab/tab'
export default {
  provide(){
        return {
          reload:this.reload
        }
    },
    data(){
        return{
            isRouterAlive:true
        }
    },
    methods:{
        reload(){
          this.isRouterAlive=false
          this.$nextTick(function(){
              this.isRouterAlive=true
          })
        }
    },
  components:{
    Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
