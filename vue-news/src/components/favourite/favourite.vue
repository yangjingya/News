<template>
    <div>
        <m-header></m-header>
        <div class="tab">
            <div class="tabChoice active" @click="choose($event,0)">收藏</div>
            <div class="tabChoice" @click="choose($event,1)">阅读</div>
        </div>
        <news-list ref="newsList" 
                   :pullup="pullup"
                   :pulldown="pulldown"
                   :classify="{}"
                   :news="news"
                    @selectNews="selectNews">
        </news-list>
    </div>
</template>

<script type="text/ecmascript-6">
    import MHeader from 'components/m-header/m-header'
    import NewsList from 'base/news-list/news-list'
    import {mapGetters} from 'vuex'
    import {newsMixin} from 'common/js/mixin'

    export default{
        mixins:[newsMixin],
        inject:['reload'],
        data(){
            return{
                pullup:false,
                pulldown:false,
                news:[]
            }
        },
        created(){
            this.news=this.favouriteNews
        },
        methods:{
            choose(e,index){
                let indexl
                index===0?indexl=1:indexl=0
                index===0?this.news=this.favouriteNews:this.news=this.historyNews
                e.currentTarget.parentNode.children[index].classList.add('active')
                e.currentTarget.parentNode.children[indexl].classList.remove('active')
            },
        },
        computed:{
            ...mapGetters([
                'favouriteNews',
                'historyNews'
            ])
        },
        watch:{
            favouriteNews(){
                this.reload()
            },
            historyNews(){
                this.reload()
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


