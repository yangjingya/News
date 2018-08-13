<template>
    <div class="home">
        <guide-bar @select="selectItem"></guide-bar>
        <news-list :classify="classify" @refreshNews="refreshNews" @loadNews="loadNews"></news-list>
    </div>
</template>

<script type="text/ecmascript-6">
    import GuideBar from 'base/guide-bar/guide-bar'
    import NewsList from 'base/news-list/news-list'
    import {getNews} from 'api/news'
    import {mapMutations} from 'vuex'
    export default{
        data(){
            return{
                news:[],
                classify:{}
            }
        },
        created() {
            this.firstTime=true
            if(this.firstTime){
                getNews('__all__','A1E5DBA65D86AB0','5B6D863A2BF07E1').then((res)=>{
                    this.news=res.data
                    this.setNews(this.news)
                    this.classify={tag: '__all__',as:'A1E5DBA65D86AB0',cp:'5B6D863A2BF07E1',text:'推荐'}
                })
            } 
            this.firstTime=false
        },
        methods:{
            selectItem(item){
                this.news=[]
                this.classify=item
                getNews(item.tag,item.as,item.cp).then((res)=>{
                    this.news=res.data
                    this.setNews(this.news)
                })
            },
            refreshNews(item){
                getNews(item.tag,item.as,item.cp).then((res)=>{
                    this.news=this.news.concat(res.data)
                    this.setNews(this.news)
                })
            },
            loadNews(item){
                this.news=[]
                getNews(item.tag,item.as,item.cp).then((res)=>{
                    this.news=res.data
                    console.log(this.news)
                    this.setNews(this.news)
                })
            },
            ...mapMutations({
                setNews:'SET_NEWS'
            })
        },
        components:{
            GuideBar,
            NewsList
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>


