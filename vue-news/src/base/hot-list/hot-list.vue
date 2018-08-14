<template>
    <div class="newsWrapper">
        <div class="newsList">
            <ul class="news">
                <li class="newsItem" v-for="item in news" @click="selectItem"> 
                    <h1 class="news_title">{{item.title}}</h1>
                    <div v-show="item.image_list.length>0" class="img_div">
                        <img v-lazy="img.url" v-for="img in item.image_list" class="img_item">
                    </div>
                    <div class="news_bottom">
                        <span class="label">打开APP</span>
                        <span class="media_name">{{item.media_name}}</span>
                        <span v-show="item.comment_count>0" class="comment">{{item.comment_count}}条评论</span>
                        <span class="datetime">{{item.datetime|dateFormat}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script type="text/ecmascript-6">
    import {dateFormat} from 'common/js/jsonp'

    export default{
        props:{
            news:{
                type:Array,
                default:[]
            }
        },
        methods:{
            selectItem(){
                this.$emit('selectItem')
            }
        },
        filters:{
            dateFormat
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '~common/stylus/variable'

    .newsWrapper
        position relative
        width 100%
        border-bottom 1px solid rgba(0,0,0,0.3)
        margin-bottom 20px
        .newsList
            height 100%
            overflow hidden
            background white
            .news
                .newsItem
                    margin 20px 0
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


