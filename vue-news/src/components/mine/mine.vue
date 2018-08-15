<template>
    <div class="mine">
        <div class="topWrapper">
            <div class="avatarWrapper">
                <img src="~common/image/avatar.png" class="img">
            </div>
            <div class="name">初ゝ遇</div>
            <div>
                <span class="choose" @click="jump(0)">收藏 {{this.favouriteNews.length}}</span>
                <span class="choose" @click="jump(1)">历史 {{this.historyNews.length}}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="barWrapper" @click="toGithub">
                <div class="bar">Github
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
    import {mapGetters} from 'vuex'
    export default{
        methods:{
            jump(id){
                this.$router.push({
                    path:'/favourite',
                    query:{
                        choose:id
                    }
                })
            },
            toGithub(){
                window.open("https://github.com/yangjingya/News/tree/master/vue-news")
            }
        },
        computed:{
            ...mapGetters([
                'favouriteNews',
                'historyNews'
            ])
        }
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
            text-align center
            .avatarWrapper
                padding-top 20%
                .img
                    width 60px
                    heigth 60px
                    border-radius 50%
            .name
                margin 10px
                font-size 20px
                font-family "KaiTi"
            .choose
                font-size 16px
                padding 10px
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
                        top 14px
                        font-size 20px
                        color rgba(0,0,0,0.3)
                .barBottom
                    border-bottom .8px solid rgb(238,238,238)
                    
</style>


