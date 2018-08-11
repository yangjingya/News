<template>
    <div class="newsList">
        <scroll class="news" :data="data">
            <li class="newsItem" v-for="item in data">
                <section>
                    <h1>{{item.title}}</h1>
                    <ul v-show="item.has_image">
                        <li v-for="img in item.image_list">
                            <img v-lazy="img.url">
                        </li>
                    </ul>
                    <div>
                        <span>{{item.media_name}}</span>
                        <span v-show="item.comment_count>0">评论 {{item.comment_count}}</span>
                    </div>
                </section>
            </li>
        </scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import {mapActions} from 'vuex'

    export default{
        props:{
            data:{
                type:Array,
                default:[]
            }
        },
        methods:{
            ...mapActions
        },
        components:{
            Scroll
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '~common/stylus/variable'

    .newsList
        position absolute
        top 84px
        margin-bottom 44px
</style>


