<template>
    <div class="top-bar">
        <div class="top-message">
            <i class="icon-message"></i>
        </div>
        <div class="title">
            <div>
                <h1 class="text">今日头条</h1>
                <i class="icon-refresh"></i>
            </div>
        </div>
        <router-link  to="/search" tag="div" class="search">
            <i class="icon-search"></i>
        </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"

    .top-bar
        position fixed
        background $color-theme
        color $color-font
        height 44px
        width 100%
        display flex
        z-index 200
        .top-message
            flex 0 0 30px
            display inline-block
            vertical-align top
            margin-top 12px
            width 30px
            height 32px
            margin-left 24px
            font-size 20px
        .title
            flex 1
            display inline-block
            text-align center
            vertical-align top
            margin-top 12px
            .text
                display inline-block
                font-size $font-size-large-x
                font-weight 700
                font-family 'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif
            .icon-refresh
                display inline-block
                font-size 16px
        .search 
            flex 0 0 30px
            display inline-block
            vertical-align top
            margin-top 12px
            width 30px
            height 32px
            margin-right 14px
            font-size 20px

</style>