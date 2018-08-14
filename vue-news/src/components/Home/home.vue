<template>
    <div class="home">
        <guide-bar @select="selectItem"></guide-bar>
        <transition name="loadNews">
            <div class="loadNewsLength" v-show="showFlag">为您推荐了{{loadNewsLength}}篇文章</div>
        </transition>
        <news-list ref="newsList" 
                   :classify="classify"
                    @refreshNews="refreshNews"
                    @loadNews="loadNews" 
                    @selectNews="selectNews">
        </news-list>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import GuideBar from 'base/guide-bar/guide-bar'
    import NewsList from 'base/news-list/news-list'
    import {getNews,getHot} from 'api/news'
    import {mapMutations} from 'vuex'

    const rec={tag: '__all__',as:'A1E5DBA65D86AB0',cp:'5B6D863A2BF07E1',text:'推荐'}
    const hot={tag: 'news_hot',as:'A1454B767D76A52',cp:'5B6D868A75928E1',text: '热点'}
    const guess={tag: 'news_entertainment',as:'A1750BF6CD36B47',cp:'5B6D862B84978E1',text: '娱乐'}

    export default{
        data(){
            return{
                news:[],
                classify:{},
                loadNewsLength:0,
                showFlag:false
            }
        },
        created() {
            this.firstTime=true
            if(this.firstTime){
                this._getRecNews()
                this.classify=hot
            } 
            this.firstTime=false
        },
        methods:{
            selectItem(item){
                this.news=[]
                this.classify=item
                getNews(item.tag,item.as,item.cp).then((res)=>{
                    this.news=res.data
                    console.log(this.news)
                    this.loadNewsLength=res.data.length
                    this.setNews(this.news)
                    this.$refs.newsList.scrollTo()
                })
                this._show()
            },
            selectNews(newsDetail){
                this.setNewsDetail(newsDetail)
                this.$router.push({
                    path:`/home/${newsDetail.id}`
                })
                this._getHotNews()
                this._getGuessNews()
            },
            refreshNews(item){
                getNews(item.tag,item.as,item.cp).then((res)=>{
                    this.news=this.news.concat(res.data)
                    var index=0
                    res.data.findIndex((item)=>{
                        if(item.label_style>0){
                            index++
                        }
                    })
                    if(res.data.length-index>0){
                        var hash = {}
                        this.news = this.news.reduce(function(item, next) {
                            hash[next.title] ? '' : hash[next.title] = true && item.push(next);
                            return item
                        }, [])
                        this.loadNewsLength=res.data.length-index
                        this.setNews(this.news) 
                    }else{
                        this.refreshNews(item)
                    }
                })
                this._show()
            },
            loadNews(item){
                this.news=[]
                getNews(item.tag,item.as,item.cp).then((res)=>{
                    this.news=res.data
                    this.loadNewsLength=res.data.length
                    this.setRefresh(false)
                    this.setNews(this.news)
                })
                this._show()
            },
            _show(){
                this.showFlag=true
                clearTimeout(this.timer)
                this.timer=setTimeout(()=>{
                    this._hide()
                },1000)
            },
            _hide(){
                this.showFlag=false
            },
            _getRecNews(){
                getNews(rec.tag,rec.as,rec.cp).then((res)=>{
                    this.news=res.data
                    this.setNews(this.news)    
                })
            },
            _getHotNews(){
                getNews(hot.tag,hot.as,hot.cp).then((res)=>{
                    const hotNews=res.data
                    this.setHotNews(hotNews)    
                })
            },
            _getGuessNews(){
                getNews(guess.tag,guess.as,guess.cp).then((res)=>{
                    const guessNews=res.data
                    this.setGuessNews(guessNews)    
                })
            },
            ...mapMutations({
                setNews:'SET_NEWS',
                setNewsDetail:'SET_NEWS_DETAIL',
                setRefresh:'SET_REFRESH',
                setHotNews:'SET_HOT_NEWS',
                setGuessNews:'SET_GUESS_NEWS'
            })
        },
        components:{
            GuideBar,
            NewsList
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .loadNewsLength
        position:fixed
        top 84px
        width 100%
        height 30px
        line-height 30px
        text-align center
        z-index 100
        color rgb(30,144,255)
        font-size 14px
        background rgba(217,235,250,0.9)
        &.loadNews-enter-active, &.loadNews-leave-active
            transition all 0.3s
        &.loadNews-enter, &.loadNews-leave-to
            transform translate3d(0, -100%, 0)

</style>


