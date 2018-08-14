<template>
    <transition name="slide">
        <div class="newsDetail">
            <div class="detailTop">
                头条详情
                <i class="icon-back" @click="goBack"></i>
            </div>
            <div class="newsBody">
                <div class="newsTitle">{{this.newsDetail.title}}</div>
                <div class="newsMedia">
                    <span class="urlImg"></span>
                    <div class="media">
                        <span class="mediaName">{{this.newsDetail.media}}</span>
                        <span class="publicTime">{{this.newsDetail.dateTime|dateFormat}}</span>
                    </div>
                    <span class="comment" v-show="this.newsDetail.comment>0">{{this.newsDetail.comment}} 评论</span>
                </div>
                <div class="content">
                    <p class="article" >{{this.newsDetail.content}}</p>
                    <img v-for="item in this.newsDetail.imgs" v-lazy="item.url" class="articleImg">
                </div>
                <div class="tagsWrapper">
                    <span v-for="item in tags" class="tags">{{item}}</span>
                </div>
                <div class="favourite">  
                    <span class="collect">
                        <i class="icon-not-favourite"></i>
                    </span>
                </div>
                <div class="recommend">
                    <h1 class="recommendTitle">热门推荐</h1>
                    <hot-list :news="hotNews" @selectItem="selectItem"></hot-list>
                </div>
                <div class="recommend">
                    <h1 class="recommendTitle">猜你喜欢</h1>
                    <hot-list :news="guessNews" @selectItem="selectItem"></hot-list>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex'
    import {dateFormat} from 'common/js/jsonp'
    import HotList from 'base/hot-list/hot-list'

    export default{
        data(){
            return{
                tags:[]
            }
        },
        created(){
            if(!this.newsDetail.id){
                this.$router.push('/home')
                return
            }
            this.tags=this.newsDetail.tags.split(",")
        },
        methods:{
            goBack(){
                this.$router.back()
            },
            selectItem(){
                this.$router.push(`/home/${this.newsDetail.id}/downLoad`)
            }
        },
        computed:{
            ...mapGetters([
                'newsDetail',
                'hotNews',
                'guessNews'
            ])
        },
        components:{
            HotList
        },
        filters:{
            dateFormat
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/mixin.styl"

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
        overflow auto
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
            z-index 200
            background white
            .icon-back
                position fixed
                top 9px
                left 9px
                font-size 24px
        .newsBody
            position absolute
            top 45px
            padding:20px
            .newsTitle
                font-size 24px
                margin-bottom 10px
            .newsMedia
                position relative
                display flex
                margin 20px 0
                .urlImg
                    bg-image('~common/image/logo')
                    display inline-block
                    width 40px
                    height 40px
                    border-radius 50%
                    flex 0 0 40px
                .media
                    margin-left 10px
                    display flex
                    flex-direction column
                    justify-content center
                    .mediaName
                        color #657180
                        font-size 14px
                        font-weight 600
                    .publicTime
                        color rgba(0,0,0,0.5)
                        font-size 12px
                .comment
                    position absolute
                    right 0
                    bottom 7px
                    font-size 12px
                    color rgba(0,0,0,0.5)
            .content
                .article
                    text-indent 2em
                    letter-spacing 1px
                    line-height 18px
                    font-size 18px
                    margin-bottom 20px
                .articleImg
                    width 100%
                    margin-bottom 20px
            .tagsWrapper
                width 100%
                display flex
                flex-wrap wrap
                flex-direction row
                padding-bottom 10px
                margin-bottom 20px
                border-bottom 1px dotted rgba(0,0,0,0.3)
                .tags
                    border 1px solid #ccc
                    padding 8px
                    border-radius 20px
                    margin 4px 5px
            .favourite
                text-align center
                height 40px
                line-height 40px
                .collect
                    .icon-not-favourite,.icon-favourite
                        font-size 28px
                    .icon-favourite
                        color red
            .recommend
                .recommendTitle
                    font-size 18px
                    line-height 18px
                    font-weight 600
                    border-left 4px solid #f85959
                    padding-left 10px
            
                
                
                
</style>


