<template>
    <div>
        <m-header></m-header>
        <div class="tab">
            <div class="tabChoice" :class="{'active':currentIndex===0}" @click="choose(0)">收藏</div>
            <div class="tabChoice" :class="{'active':currentIndex===1}" @click="choose(1)">阅读</div>
        </div>
        <news-list  ref="newsList"
                    road="favourite" 
                   :pullup="pullup"
                   :pulldown="pulldown"
                   :classify="{}"
                   :news="news"
                   @selectNews="selectNews">
        </news-list>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import MHeader from 'components/m-header/m-header'
    import NewsList from 'base/news-list/news-list'
    import {mapGetters} from 'vuex'
    import {newsMixin} from 'common/js/mixin'
    export default{
        mixins:[newsMixin],
        data(){
            return{
                pullup:false,
                pulldown:false,
                news:[],
                currentIndex:0
            }
        },
        mounted(){
            this.news=this.favouriteNews
        },
        computed:{
            ...mapGetters([
                'favouriteNews',
                'historyNews'
            ])
        },
        methods:{
            choose(ch){
                this.currentIndex=ch
            }
        },
        watch:{
            favouriteNews(newNews){
                this.news=newNews
            },
            historyNews(newNews){
                if(this.currentIndex===1){
                    this.news=newNews
                }
            },
            currentIndex(newIndex){
                newIndex===0?this.news=this.favouriteNews:this.news=this.historyNews
            },
            $route(to,from){
                if(typeof(to.query.choose)!=="undefined"&&this.currentIndex!=to.query.choose){
                    this.currentIndex=to.query.choose
                }
                if(typeof(from.query.choose)!=="undefined"&&this.currentIndex!=from.query.choose){
                    this.currentIndex=from.query.choose
                }
            }
        },
        components:{
            MHeader,
            NewsList
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .tab
        position fixed
        z-index 200
        top 44px
        left 0
        right 0
        height 40px
        display flex
        border-bottom 0.5px solid rgba(0,0,0,0.3)
        .tabChoice
            flex 1
            font-size 20px
            line-height 40px
            text-align center
            display inline-block
        .active
            border-bottom 1px solid red
</style>


