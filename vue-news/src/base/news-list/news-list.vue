<template>
    <div class="newsWrapper">
        <scroll ref="newsList" class="newsList" :data="news" :pulldown="pulldown" @loadNews="loadNews">
            <ul class="news" ref="newsGroup">
                <li class="newsItem" v-for="item in news" @click.stop.prevent="selectItem(item)">
                    <h1 class="news_title">{{item.title}}</h1>
                    <div v-show="item.imgs.length>0" class="img_div">
                        <img :src="img.url" v-for="img in item.imgs" class="img_item">
                    </div>
                    <div class="news_bottom">
                        <span v-show="item.label_style" class="label">{{item.label}}</span>
                        <span class="media_name">{{item.media}}</span>
                        <span v-show="item.comment_count>0" class="comment">评论 {{item.comment}}</span>
                        <span class="datetime">{{item.datetime|dateFormat}}</span>
                    </div>
                </li>
                <div @click="refreshNews" class="showLoading" v-show="this.news.length>0&&this.pullup">点击加载更多</div>
            </ul>
        </scroll>
    </div>
    
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import {mapMutations} from 'vuex'
    import News from 'common/js/news'
    import {dateFormat} from 'common/js/jsonp'

    export default{
        props:{
            pullup:{
                type:Boolean,
                default:true
            },
            pulldown:{
                type:Boolean,
                default:true
            },
            news:{
                type:Array,
                default:[]
            },
            classify:{
                type:Object,
                default:{}
            },
            road:{
                type:String,
                default:''
            }
        },
        methods:{
            refreshNews(){
                this.$emit('refreshNews',this.classify)
            },
            loadNews(){
                this.$emit('loadNews',this.classify)
                this.setRefresh(true)
            },
            scrollTo(){
                this.$refs.newsList.scrollTo(0,0,0)
            },
            selectItem(item){
                this.$emit('selectNews',item,this.road)
            },
            ...mapMutations({
                setRefresh:'SET_REFRESH'
            })
        },
        components:{
            Scroll
        },
        filters:{
            dateFormat
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '~common/stylus/variable'

    .newsWrapper
        position fixed
        left 0
        right 0
        top 84px
        bottom 48px
        .newsList
            height 100%
            overflow hidden
            background-image url('./loading.gif')
            background-repeat no-repeat
            background-position 50% 50px
            background-size 50px
            .news
                background white
                .newsItem
                    margin 0 20px
                    padding 20px 0
                    border-bottom 1px solid #ddd
                    .news_title
                        font-size $font-size-medium-x
                        margin-bottom 10px
                    .img_div
                        display inline-flex
                        justify-content space-around
                        height 70px
                        .img_item
                            width:30%
                    .news_bottom
                        color #777
                        font-size $font-size-small
                        margin-top 10px
                        .label
                            border 0.5px solid rgba(248, 89, 89, 0.5)
                            border-radius 3px
                            color #f85959
                            padding 2px
                            font-size 10px
                        .datetime
                            position absolute
                            right 25px
                .showLoading
                    text-align center
                    height 40px
                    line-height 40px
                    font-size 16px
                    color rgba(0,0,0,0.6)

                        
                            


</style>


