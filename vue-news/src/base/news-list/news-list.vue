<template>
    <scroll class="newsList"  :data="data" :pullup="pullup" :pulldown="pulldown" @scrollToEnd="refreshNews" @loadNews="loadNews">
        <ul class="news">
            <li class="newsItem" v-for="item in data">
                <h1 class="news_title">{{item.title}}</h1>
                <div v-show="item.image_list.length>0" class="img_div">
                    <img :src="img.url" v-for="img in item.image_list" class="img_item">
                </div>
                <div class="news_bottom">
                    <span class="media_name">{{item.media_name}}</span>
                    <span v-show="item.comment_count>0" class="comment">评论 {{item.comment_count}}</span>
                    <span class="datetime">{{item.datetime|dateFormat}}</span>
                </div>
            </li>
            <loading></loading>
        </ul>
    </scroll>
    
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import Loading from 'base/loading/loading'
    import {mapActions} from 'vuex'
    import moment from 'moment'

    export default{
        data(){
            return{
                pullup:true,
                pulldown:true
            }
        },
        props:{
            data:{
                type:Array,
                default:[]
            },
            classify:{
                type:Object,
                default:{}
            }
        },
        methods:{
            refreshNews(){
                this.$emit('refreshNews',this.classify)
            },
            loadNews(){
                this.$emit('loadNews',this.classify)
            }
        },
        components:{
            Scroll,
            Loading
        },
        filters:{
            dateFormat(time){
                return moment(time).startOf('mimute').fromNow()
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '~common/stylus/variable'

    .newsList
        position absolute
        top 84px
        width 100%
        height 80%
        .news
            .newsItem
                margin 0 20px
                padding 20px 0
                border-bottom 1px solid #ddd
                .news_title
                    font-size $font-size-medium-x
                    font-weight 700
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
                    .datetime
                        position absolute
                        right 25px

                        
                            


</style>


