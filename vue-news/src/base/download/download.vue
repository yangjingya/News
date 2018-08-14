<template>
    <div class="download">
        <div class="pullHead">
            <i class="icon-back" @click="goBack"></i>
            <img src="~common/image/pullDown.png" class="pulldown">
            <div class="text">向下拉</div>
            <div class="slide">
                <img src="~common/image/down.png" class="down play">
            </div>
        </div>
        <div class="notify">
            <div class="notifyText">若已安装今日头条</div>
            <div>请下拉页面点击「打开」</div>
        </div>
        <div class="notifyDownload">
            <div class="notifyDownloadText">若下拉未出现「打开」按钮</div>
            <div>请更新今日头条APP</div>
        </div>
        <div class="hrWrapper">
            <div class="hr"></div>
            <span class="hrText">还没安装今日头条APP</span>
            <div class="hr"></div>
        </div>
        <div class="downloadContent">
            <img src="~common/image/default.png" class="contentImg">
            <div class="content">你关心的 才是头条</div>
            <a href="//d.toutiao.com/SKX1/" class="downBtn">立即下载</a>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import animations from 'create-keyframe-animation'

    export default{
        methods:{
            goBack(){
                this.$router.back()
            }
        },
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   .download
        position:fixed
        top 0
        left 0
        right 0
        bottom 0
        background white
        z-index 999
        .pullHead
            position relative
            width 100%
            height 80px
            .icon-back
                position absolute
                top 9px
                left 9px
                font-size 24px
                color #f85959
            .pulldown
                position absolute
                right 40px
                top 0
                height 80px
            .text
                position absolute
                right 25px
                top 20px
                width 14px
                font-size 12px
                color #f85959
            .slide
                position absolute
                left 45%
                top 40px
                height 40px
                .down
                    height 15px
                    width 35px
                .play
                    animation move 1.5s linear infinite
        .notify
            text-align center
            padding 20px 0 50px 0
            .notifyText
                margin-bottom 5px
        .notifyDownload
            text-align center
            padding-bottom 40px
            font-size 12px
            color #999
            .notifyDownloadText
                margin-bottom 3px
        .hrWrapper
            display flex
            text-align center
            padding 0 20px
            .hrText
                width 11em
                flex 0 0 11em
                font-size 14px
                color #999
            .hr
                flex 1
                display inline-block
                height 0.3em
                border-bottom 0.5px solid #d8d8d8
        .downloadContent
            text-align center
            margin-top 40px
            .contentImg
                width 60px
                height 60px
                margin-bottom 40px
            .content
                color #999
            .downBtn
                display inline-block
                width 280px
                padding 10px 0
                margin-top 40px
                color #fff
                text-align center
                background-color #f85959

    @keyframes move
        0%
            transform translate3d(0,0,0)
        60%
            transform translate(0,15px,0)
        100%
            transform translate3d(0,30px,0)
</style>


