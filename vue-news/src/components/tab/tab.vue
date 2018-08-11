<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/home">
            <i class="icon-home"></i>
            <span class="tab-link">主页</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/favourite">
            <i class="icon-favourite"></i>
            <span class="tab-link">收藏</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/media">
            <i class="icon-media"></i>
            <span class="tab-link">视频</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/mine">
            <i class="icon-user"></i>
            <span class="tab-link">我的</span>
        </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '~common/stylus/variable'
    .tab
        position fixed
        left 0
        right 0
        bottom 0
        height 48px
        display flex
        font-size $font-size-medium
        border-top 1px solid rgb(221,221,221)
        z-index 200
        background white
        .tab-item
            flex 1
            text-align center
            color rgb(119,119,119)
            display flex
            flex-direction column
            padding-top 10px
            .icon-home,.icon-favourite,.icon-media,.icon-user
                font-size 20px
            &.router-link-active
            .tab-item
                    color:$color-theme
                
                
</style>


