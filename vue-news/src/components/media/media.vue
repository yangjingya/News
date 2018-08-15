<template>
    <div>
        <m-header></m-header>
        <div class="videoWrapper">
            <li class="videoItem">
                <video controls class="video" src="~common/image/media.mp4"></video>
                <div class="title">因数据获取问题 改用固定数据</div>
                <div class="detail">
                    <span>今日头条</span>
                    <span>666评论</span>
                    <span>刚刚</span>
                </div>
            </li>
            <li class="videoItem">
                <video controls class="video" src="~common/image/media.mp4"></video>
                <div class="title">因数据获取问题 改用固定数据</div>
                <div class="detail">
                    <span>今日头条</span>
                    <span>666评论</span>
                    <span>刚刚</span>
                </div>
            </li>
            <li class="videoItem">
                <video controls class="video" src="~common/image/media.mp4"></video>
                <div class="title">因数据获取问题 改用固定数据</div>
                <div class="detail">
                    <span>今日头条</span>
                    <span>666评论</span>
                    <span>刚刚</span>
                </div>
            </li>
            <li class="videoItem">
                <video controls class="video" src="~common/image/media.mp4"></video>
                <div class="title">因数据获取问题 改用固定数据</div>
                <div class="detail">
                    <span>今日头条</span>
                    <span>666评论</span>
                    <span>刚刚</span>
                </div>
            </li>
            <li class="videoItem">
                <video controls class="video" src="~common/image/media.mp4"></video>
                <div class="title">因数据获取问题 改用固定数据</div>
                <div class="detail">
                    <span>今日头条</span>
                    <span>666评论</span>
                    <span>刚刚</span>
                </div>
            </li>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import MHeader from 'components/m-header/m-header'

    export default{
        components:{
            MHeader
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .videoWrapper
        position:absolute 
        top 44px
        left 0
        right 0
        bottom 48px
        padding 20px 20px 0 20px
        .videoItem
            position relative
            margin-bottom 20px
            .title
                position absolute
                top 0
                left 0
                padding 10px
                color white
                font-size 14px
                line-height 20px
            .video
                width 100%
            .detail
                margin-top 5px
                font-size 12px
                color rgba(0,0,0,0.5)
                


</style>


