<template>
    <div class="mine">
        <div class="topWrapper">
            <div class="avatarWrapper">
                <img src="" alt="" class="wrapper">
            </div>
            <div class="name"></div>
            <div>
                <span class="choose">收藏</span>
                <span class="choose">历史</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="barWrapper">
                <div class="bar">消息通知
                    <i class="icon-more"></i>
                </div>
            </div>
            <div class="barWrapper">
                <div class="bar barBottom">我的钱包
                    <i class="icon-more"></i>
                </div>
                <div class="bar">京东特供
                    <i class="icon-more"></i>
                </div>
            </div>
            <div class="barWrapper">
                <div class="bar barBottom">用户反馈
                    <i class="icon-more"></i>
                </div>
                <div class="bar">系统设置
                    <i class="icon-more"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .mine
        position:fixed
        top 0
        left 0
        right 0
        bottom 48px
        background url('~common/image/back.jpg')
        background-repeat no-repeat
        background-size 100%
        .topWrapper
            height 35%
            color white
        .wrapper
            height 100%
            background-color rgb(238,238,238)
            .barWrapper 
                margin 10px 0
                background white
                .bar
                    position relative
                    height 45px
                    line-height 45px
                    margin-left 10px
                    .icon-more
                        position absolute
                        right 10px
                        top 9px
                        font-size 28px
                        color #999
                .barBottom
                    border-bottom .8px solid rgb(238,238,238)
                    
</style>


