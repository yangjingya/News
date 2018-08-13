<template>
    <transition name="slide">
        <div class="newsDetail">
            <div class="detailTop">
                头条详情
                <i class="icon-back" @click="goBack"></i>
            </div>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    export default{
        methods:{
            goBack(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .slide-enter-active,.slide-leave-active
        transition:all 0.3s
    .slide-enter,.slide-leave-to
        transform translate3d(100%,0,0)
    .newsDetail
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        z-index 500
        background white
        .detailTop
            position fixed
            top 0
            left 0
            right 0
            height 44px
            line-height 44px
            font-size 18px
            font-weight 600
            text-align center
            border-bottom 0.4px solid rgba(0,0,0,0.4)
            .icon-back
                position fixed
                top 9px
                left 9px
                font-size 24px
            
                
                
                
</style>


